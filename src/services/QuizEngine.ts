import type { Question, QuestionLevel, DifficultyProfileMode } from "../features/database";
import { WeaknessTracker } from "./WeaknessTracker";
import { shuffleArray } from "../utils/shuffle";

export interface QuizConfig {
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  timeLimitMinutes?: number;
  questionLimit?: number;
  subjectName?: string;
  concorsoId?: string;
  concorsoTitle?: string;
  level?: QuestionLevel | 'all';
  difficultyProfile?: DifficultyProfileMode;
}

export type QuestionStatus = 'current' | 'correct' | 'incorrect' | 'skipped' | 'unvisited';

export interface DetailedResult {
  question: Question;
  selectedOptionId: string | null;
  isCorrect: boolean;
  isSkipped: boolean;
}

export class QuizEngine {
  private questions: Question[] = [];
  private selectedAnswers: (string | null)[] = [];
  private questionStartTimes: (number | null)[] = [];
  private timeSpentPerQuestion: number[] = [];
  private pointer: number = 0;
  private config: QuizConfig;
  private startTime: number | null = null;
  private endTime: number | null = null;
  private currentStreak: number = 0;
  private bestStreak: number = 0;

  constructor(rawQuestions: Question[], config: QuizConfig = { mode: 'quiz_free' }) {
    this.config = config;
    const pool = this.composePool(rawQuestions, config);
    this.questions = pool;
    this.selectedAnswers = new Array(pool.length).fill(null);
    this.questionStartTimes = new Array(pool.length).fill(null);
    this.timeSpentPerQuestion = new Array(pool.length).fill(0);

    if (this.config.mode === 'quiz_timed') {
      this.startTime = Date.now();
      this.endTime = this.startTime + (this.config.timeLimitMinutes || 120) * 60000;
    }

    this.markSeen();
  }

  private composePool(source: Question[], config: QuizConfig): Question[] {
    const seen = new Set<string>();
    const unique: Question[] = [];
    for (const q of source) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        unique.push(q);
      }
    }

    const profile = config.difficultyProfile ?? 'all';
    let filtered: Question[] = [];

    if (profile === 'base') {
      filtered = unique.filter((q) => q.level === 'base');
      if (filtered.length < (config.questionLimit || 20)) {
        const extra = unique.filter((q) => q.level === 'intermedio');
        filtered = [...filtered, ...extra];
      }
    } else if (profile === 'intermedio') {
      filtered = unique.filter((q) => q.level === 'intermedio');
      if (filtered.length < (config.questionLimit || 20)) {
        const extra = unique.filter((q) => q.level === 'base' || q.level === 'avanzato');
        filtered = [...filtered, ...extra];
      }
    } else if (profile === 'avanzato') {
      filtered = unique.filter((q) => q.level === 'avanzato');
      if (filtered.length < (config.questionLimit || 20)) {
        const extra = unique.filter((q) => q.level === 'intermedio');
        filtered = [...filtered, ...extra];
      }
    } else if (profile === 'official') {
      const b = shuffleArray(unique.filter((q) => q.level === 'base'));
      const i = shuffleArray(unique.filter((q) => q.level === 'intermedio'));
      const a = shuffleArray(unique.filter((q) => q.level === 'avanzato'));
      const limit = config.questionLimit || unique.length;
      const bCount = Math.round(limit * 0.5);
      const iCount = Math.round(limit * 0.35);
      const aCount = limit - bCount - iCount;
      filtered = [...b.slice(0, bCount), ...i.slice(0, iCount), ...a.slice(0, aCount)];
      if (filtered.length < limit) {
        const used = new Set(filtered.map((q) => q.id));
        const rem = unique.filter((q) => !used.has(q.id));
        filtered = [...filtered, ...rem.slice(0, limit - filtered.length)];
      }
    } else {
      filtered = config.level && config.level !== 'all' ? unique.filter((q) => q.level === config.level) : unique;
    }

    const shuffled = shuffleArray(filtered.length > 0 ? filtered : unique);
    if (config.questionLimit && config.questionLimit > 0 && config.questionLimit < shuffled.length) {
      return shuffled.slice(0, config.questionLimit);
    }
    return shuffled;
  }

  private markSeen() {
    if (this.questionStartTimes[this.pointer] == null) {
      this.questionStartTimes[this.pointer] = Date.now();
    }
  }

  public getCurrentQuestion(): Question | null {
    return this.questions[this.pointer] ?? null;
  }

  public getCurrentIndex(): number {
    return this.pointer + 1;
  }

  public isFirst(): boolean {
    return this.pointer === 0;
  }

  public isLast(): boolean {
    return this.pointer === this.questions.length - 1;
  }

  public goTo(position: number): void {
    if (this.isTimeUp()) return;
    if (position < 0 || position >= this.questions.length) return;
    this.pointer = position;
    this.markSeen();
  }

  public next(): void {
    this.goTo(this.pointer + 1);
  }

  public prev(): void {
    this.goTo(this.pointer - 1);
  }

  public answerQuestion(selectedOptionId: string): boolean {
    const idx = this.pointer;
    const q = this.questions[idx];
    const isCorrect = selectedOptionId === q.correctAnswerId;
    const wasAnswered = this.selectedAnswers[idx] != null;

    this.selectedAnswers[idx] = selectedOptionId;

    if (!wasAnswered) {
      const start = this.questionStartTimes[idx] ?? Date.now();
      const timeSpent = Math.max(0, Math.round((Date.now() - start) / 1000));
      this.timeSpentPerQuestion[idx] = timeSpent;

      WeaknessTracker.recordReview(q.id, isCorrect, timeSpent);

      if (isCorrect) {
        this.currentStreak++;
        this.bestStreak = Math.max(this.bestStreak, this.currentStreak);
      } else {
        this.currentStreak = 0;
      }
    }

    return isCorrect;
  }

  public skipCurrent(): void {
    const idx = this.pointer;
    if (this.selectedAnswers[idx] != null) return;
    const start = this.questionStartTimes[idx];
    if (start != null && this.timeSpentPerQuestion[idx] === 0) {
      this.timeSpentPerQuestion[idx] = Math.max(0, Math.round((Date.now() - start) / 1000));
    }
  }

  public getSelectedAnswer(position?: number): string | null {
    return this.selectedAnswers[position ?? this.pointer] ?? null;
  }

  public getQuestionStatus(position: number): QuestionStatus {
    const ans = this.selectedAnswers[position];
    const q = this.questions[position];
    if (ans != null) return ans === q.correctAnswerId ? 'correct' : 'incorrect';
    if (position === this.pointer) return 'current';
    if (this.questionStartTimes[position] != null) return 'skipped';
    return 'unvisited';
  }

  public getCurrentStreak(): number {
    return this.currentStreak;
  }

  public getBestStreak(): number {
    return this.bestStreak;
  }

  public getAnsweredCount(): number {
    return this.selectedAnswers.filter((a) => a != null).length;
  }

  public getStatisticsData() {
    const resultsPerQuestion = this.questions.map((q, i) => this.selectedAnswers[i] === q.correctAnswerId);
    return {
      resultsPerQuestion,
      timeSpentPerQuestion: this.timeSpentPerQuestion,
    };
  }

  public getDetailedResults(): DetailedResult[] {
    return this.questions.map((q, i) => {
      const selectedOptionId = this.selectedAnswers[i];
      return {
        question: q,
        selectedOptionId,
        isCorrect: selectedOptionId === q.correctAnswerId,
        isSkipped: selectedOptionId == null,
      };
    });
  }

  public getCategoryBreakdown(): Record<string, { correct: number; total: number }> {
    const map: Record<string, { correct: number; total: number }> = {};
    this.questions.forEach((q, i) => {
      const cat = q.category || 'Generale';
      if (!map[cat]) map[cat] = { correct: 0, total: 0 };
      map[cat].total++;
      if (this.selectedAnswers[i] === q.correctAnswerId) map[cat].correct++;
    });
    return map;
  }

  public getQuestionIds(): string[] {
    return this.questions.map((q) => q.id);
  }

  public getSelectedAnswers(): (string | null)[] {
    return [...this.selectedAnswers];
  }

  public isTimeUp(): boolean {
    if (this.config.mode !== 'quiz_timed' || !this.endTime) return false;
    return Date.now() >= this.endTime;
  }

  public getTimeRemainingSeconds(): number {
    if (this.config.mode !== 'quiz_timed' || !this.endTime) return 0;
    return Math.max(0, Math.floor((this.endTime - Date.now()) / 1000));
  }

  public getScore(): number {
    return this.questions.reduce((acc, q, i) => acc + (this.selectedAnswers[i] === q.correctAnswerId ? 1 : 0), 0);
  }

  public getTotalQuestions(): number {
    return this.questions.length;
  }

  public getConfig(): QuizConfig {
    return this.config;
  }
}
