export type MasteryLevel = 'new' | 'learning' | 'young' | 'mature' | 'mastered';

interface QuestionRecord {
  correct: number;
  wrong: number;
  lastSeen: number;
  lastCorrect: boolean;
  /** SM-2 spaced repetition fields */
  easeFactor: number;
  interval: number; // days
  repetitions: number; // consecutive successful reviews
  dueDate: number; // timestamp (ms) — when this question should resurface
}

type WeaknessStore = Record<string, QuestionRecord>;

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

/**
 * Maps an answer into a 0-5 SM-2 "quality" score. We don't ask the user to
 * self-rate recall, so we infer it from correctness + response time:
 * fast-correct reads as confident recall, slow-correct as recall with
 * effort, and impulsive-wrong (answered in under 4s) as a near-blackout.
 */
function computeQuality(isCorrect: boolean, timeSpentSec: number): number {
  if (isCorrect) {
    if (timeSpentSec < 6) return 5;
    if (timeSpentSec < 15) return 4;
    return 3;
  }
  return timeSpentSec < 4 ? 1 : 2;
}

/** Classic SM-2 scheduling: mutates the record's ease/interval/repetitions/dueDate. */
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

/**
 * Tracks per-question review history using a real SM-2 spaced-repetition
 * schedule, so "Ripasso Intelligente" can resurface questions right before
 * they're forgotten instead of just re-serving whatever was wrong last time.
 */
export const WeaknessTracker = {
  /** Records one answer and reschedules the question via SM-2. */
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

  /** Weakness score: higher = weaker. Used to rank non-due questions when building a review pool. */
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

  /**
   * Mastery breakdown across the whole bank. `totalInBank` lets us count
   * questions never attempted yet as "new" (they have no localStorage record).
   */
  getMasteryDistribution(totalInBank: number): Record<MasteryLevel, number> {
    const store = load();
    const dist: Record<MasteryLevel, number> = { new: 0, learning: 0, young: 0, mature: 0, mastered: 0 };
    for (const rec of Object.values(store)) {
      dist[masteryOf(rec)]++;
    }
    dist.new += Math.max(0, totalInBank - Object.keys(store).length);
    return dist;
  },

  /** Average SM-2 ease factor across tracked questions (2.5 = default/neutral, higher = easier for the user). */
  getAverageEase(): number {
    const records = Object.values(load()).filter((r) => r.correct + r.wrong > 0);
    if (records.length === 0) return 2.5;
    return Math.round((records.reduce((s, r) => s + r.easeFactor, 0) / records.length) * 100) / 100;
  },

  /** Number of questions becoming due for each of the next `days` days (day 0 = today). */
  getForecast(days: number): { label: string; dueCount: number }[] {
    const store = load();
    const counts = new Array(days).fill(0);
    const today = startOfDay(Date.now());

    for (const rec of Object.values(store)) {
      if (rec.correct + rec.wrong === 0) continue;
      const dueDay = startOfDay(rec.dueDate);
      const diff = Math.round((dueDay - today) / DAY_MS);
      if (diff >= 0 && diff < days) counts[diff]++;
      else if (diff < 0 && diff > -days) counts[0]++; // overdue items are lumped into "today"
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

  /**
   * Builds a review session: due questions first (most overdue first), then
   * the weakest not-yet-due questions, then — if requested — a capped batch
   * of never-seen questions to keep introducing new material.
   */
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
};
