export type MasteryLevel = 'new' | 'learning' | 'young' | 'mature' | 'mastered';

export interface QuestionRecord {
  correct: number;
  wrong: number;
  lastSeen: number;
  lastCorrect: boolean;
  easeFactor: number;
  interval: number;
  repetitions: number;
  dueDate: number;
}

export type WeaknessStore = Record<string, QuestionRecord>;

const STORAGE_KEY = 'quiz_concorso_weakness_v2';
const NEW_PER_DAY_KEY = 'quiz_concorso_new_per_day';
const DAY_MS = 24 * 60 * 60 * 1000;

function load(): WeaknessStore {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function save(store: WeaknessStore) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function defaultRecord(): QuestionRecord {
  return { correct: 0, wrong: 0, lastSeen: 0, lastCorrect: true, easeFactor: 2.5, interval: 0, repetitions: 0, dueDate: 0 };
}

function computeQuality(isCorrect: boolean, timeSpentSec: number): number {
  if (isCorrect) {
    if (timeSpentSec < 6) return 5;
    if (timeSpentSec < 15) return 4;
    return 3;
  }
  return timeSpentSec < 4 ? 1 : 2;
}

function applySM2(rec: QuestionRecord, quality: number, now: number) {
  if (quality < 3) {
    rec.repetitions = 0;
    rec.interval = 1;
  } else {
    if (rec.repetitions === 0) rec.interval = 1;
    else if (rec.repetitions === 1) rec.interval = 6;
    else rec.interval = Math.round(rec.interval * rec.easeFactor);
    rec.repetitions += 1;
  }

  rec.easeFactor = Math.max(1.3, rec.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
  rec.dueDate = now + rec.interval * DAY_MS;
}

function masteryOf(rec: QuestionRecord | undefined): MasteryLevel {
  if (!rec || rec.correct + rec.wrong === 0) return 'new';
  if (rec.repetitions === 0) return 'learning';
  if (rec.interval < 21) return 'young';
  if (rec.interval < 60) return 'mature';
  return 'mastered';
}

export const WeaknessTracker = {
  recordReview(questionId: string, isCorrect: boolean, timeSpentSec: number) {
    const store = load();
    const rec = store[questionId] || defaultRecord();
    if (isCorrect) rec.correct += 1;
    else rec.wrong += 1;
    rec.lastSeen = Date.now();
    rec.lastCorrect = isCorrect;

    const quality = computeQuality(isCorrect, timeSpentSec);
    applySM2(rec, quality, Date.now());

    store[questionId] = rec;
    save(store);
  },

  scoreFor(questionId: string): number {
    const rec = load()[questionId];
    if (!rec) return 0;
    const total = rec.correct + rec.wrong;
    const errorRate = rec.wrong / total;
    const recencyBoost = rec.lastCorrect ? 0 : 1.5;
    return errorRate * total + recencyBoost;
  },

  hasHistory(questionId: string): boolean {
    return !!load()[questionId];
  },

  getMasteryLevel(questionId: string): MasteryLevel {
    return masteryOf(load()[questionId]);
  },

  isDue(questionId: string): boolean {
    const rec = load()[questionId];
    return !!rec && rec.correct + rec.wrong > 0 && rec.dueDate <= Date.now();
  },

  getDueCount(): number {
    const now = Date.now();
    return Object.values(load()).filter((r) => r.correct + r.wrong > 0 && r.dueDate <= now).length;
  },

  totalTracked(): number {
    return Object.keys(load()).length;
  },

  getMasteryDistribution(totalInBank: number): Record<MasteryLevel, number> {
    const store = load();
    const dist: Record<MasteryLevel, number> = { new: 0, learning: 0, young: 0, mature: 0, mastered: 0 };
    for (const rec of Object.values(store)) {
      dist[masteryOf(rec)]++;
    }
    dist.new += Math.max(0, totalInBank - Object.keys(store).length);
    return dist;
  },

  getAverageEase(): number {
    const records = Object.values(load()).filter((r) => r.correct + r.wrong > 0);
    if (records.length === 0) return 2.5;
    return Math.round((records.reduce((s, r) => s + r.easeFactor, 0) / records.length) * 100) / 100;
  },

  getForecast(days: number): { label: string; dueCount: number }[] {
    const store = load();
    const counts = new Array(days).fill(0);
    const today = startOfDay(Date.now());

    for (const rec of Object.values(store)) {
      if (rec.correct + rec.wrong === 0) continue;
      const dueDay = startOfDay(rec.dueDate);
      const diff = Math.round((dueDay - today) / DAY_MS);
      if (diff >= 0 && diff < days) counts[diff]++;
      else if (diff < 0 && diff > -days) counts[0]++;
    }

    return counts.map((c, i) => {
      const d = new Date(today + i * DAY_MS);
      return { label: i === 0 ? 'Oggi' : d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' }), dueCount: c };
    });
  },

  getNewPerDaySetting(): number {
    const raw = localStorage.getItem(NEW_PER_DAY_KEY);
    const parsed = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 10;
  },

  setNewPerDaySetting(n: number) {
    localStorage.setItem(NEW_PER_DAY_KEY, String(Math.max(0, Math.round(n))));
  },

  buildReviewPool<T extends { id: string }>(questions: T[], opts: { limit: number; includeNew: boolean }): T[] {
    const store = load();
    const now = Date.now();

    const due = questions
      .filter((q) => store[q.id] && store[q.id].correct + store[q.id].wrong > 0 && store[q.id].dueDate <= now)
      .sort((a, b) => store[a.id].dueDate - store[b.id].dueDate);

    const dueIds = new Set(due.map((q) => q.id));
    const weak = questions
      .filter((q) => !dueIds.has(q.id) && store[q.id] && store[q.id].wrong > 0)
      .sort((a, b) => this.scoreFor(b.id) - this.scoreFor(a.id));

    let pool = [...due, ...weak];

    if (opts.includeNew && pool.length < opts.limit) {
      const seen = new Set(pool.map((q) => q.id));
      const newOnes = questions.filter((q) => !store[q.id] && !seen.has(q.id));
      const newCap = Math.min(this.getNewPerDaySetting(), opts.limit - pool.length);
      pool = [...pool, ...newOnes.slice(0, Math.max(0, newCap))];
    }

    return pool.slice(0, opts.limit);
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(NEW_PER_DAY_KEY);
  },

  exportStore(): WeaknessStore {
    return load();
  },

  importStore(store: WeaknessStore) {
    save(store);
  },
};
