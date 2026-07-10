import type { Question } from "../types";
import { WeaknessTracker } from "./WeaknessTracker";
import { shuffleArray } from "../utils/shuffle";

export interface QuizConfig {
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  timeLimitMinutes?: number;
  questionLimit?: number;
  subjectName?: string;
  concorsoId?: string;
  concorsoTitle?: string;
}

export type QuestionStatus = 'current' | 'correct' | 'incorrect' | 'skipped' | 'unvisited';

export interface DetailedResult {
  question: Question;
  selectedOptionId: string | null;
  isCorrect: boolean;
  isSkipped: boolean;
}

/**
 * Runs one quiz session. Questions are addressed by a movable pointer rather
 * than a one-shot iterator, so the UI can go back, jump to an arbitrary
 * question via the sidebar, or skip without losing the ability to revisit.
 * Score/mistakes/streak are derived from `selectedAnswers` on demand instead
 * of accumulated incrementally, so they stay correct no matter the order in
 * which questions get answered.
 */
export class QuizEngine {
  private questions: Question[] = [];
  private selectedAnswers: (string | null)[] = [];
  private questionStartTimes: (number | null)[] = [];
  private timeSpentPerQuestion: number[] = [];
  private pointer: number = 0;
  private config: QuizConfig;
  private startTime: number | null = null;
  private endTime: number | null = null;

  // Streak tracking (based on the order questions are first answered in, not list order)
  private currentStreak: number = 0;
  private bestStreak: number = 0;

  constructor(questions: Question[], config: QuizConfig = { mode: 'quiz_free' }) {
    let pool = shuffleArray(questions);
    if (config.questionLimit && config.questionLimit > 0 && config.questionLimit < pool.length) {
      pool = pool.slice(0, config.questionLimit);
    }

    this.questions = pool;
    this.selectedAnswers = new Array(pool.length).fill(null);
    this.questionStartTimes = new Array(pool.length).fill(null);
    this.timeSpentPerQuestion = new Array(pool.length).fill(0);
    this.config = config;
    if (this.config.mode === 'quiz_timed') {
      this.startTime = Date.now();
      // Default to 120 minuti se non provvisto per modalità timed
      this.endTime = this.startTime + (this.config.timeLimitMinutes || 120) * 60000;
    }

    this.markSeen();
  }

  private markSeen() {
    if (this.questionStartTimes[this.pointer] == null) {
      this.questionStartTimes[this.pointer] = Date.now();
    }
  }

  public getCurrentQuestion(): Question | null {
    return this.questions[this.pointer] ?? null;
  }

  /** 1-based position for display ("Domanda X di Y"). */
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

  /** Leaves the current question unanswered but records the time spent looking at it. */
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
    if (position === this.pointer) return 'current';
    const ans = this.selectedAnswers[position];
    const q = this.questions[position];
    if (ans != null) return ans === q.correctAnswerId ? 'correct' : 'incorrect';
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

  /** Full per-question breakdown for the results and review screens. */
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

  /** Accuracy per question category, derived from source-folder tagging (see utils/categorize.ts). */
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
    const remaining = Math.max(0, Math.floor((this.endTime - Date.now()) / 1000));
    return remaining;
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
