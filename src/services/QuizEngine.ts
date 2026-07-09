import type { Question } from "../types";
import { WeaknessTracker } from "./WeaknessTracker";
import { shuffleArray } from "../utils/shuffle";

export interface QuizConfig {
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  timeLimitMinutes?: number;
  questionLimit?: number;
  subjectName?: string;
}

export class QuizEngine {
  private questions: Question[] = [];
  private currentIndex: number = 0;
  private mistakes: Question[] = [];
  private score: number = 0;
  private config: QuizConfig;
  private startTime: number | null = null;
  private endTime: number | null = null;

  // Per tracciare statistiche
  private questionStartTime: number | null = null;
  private resultsPerQuestion: boolean[] = [];
  private timeSpentPerQuestion: number[] = [];

  // Streak tracking
  private currentStreak: number = 0;
  private bestStreak: number = 0;

  constructor(questions: Question[], config: QuizConfig = { mode: 'quiz_free' }) {
    let pool = shuffleArray(questions);
    if (config.questionLimit && config.questionLimit > 0 && config.questionLimit < pool.length) {
      pool = pool.slice(0, config.questionLimit);
    }

    this.questions = pool;
    this.config = config;
    if (this.config.mode === 'quiz_timed') {
      this.startTime = Date.now();
      // Default to 120 minutes se non provvisto per modalità timed
      this.endTime = this.startTime + (this.config.timeLimitMinutes || 120) * 60000;
    }
  }

  public getNextQuestion(): Question | null {
    if (this.isTimeUp()) return null; // Force end if time is up
    if (this.currentIndex >= this.questions.length) {
      return null;
    }
    
    // Registra quando l'utente ha visto la domanda
    this.questionStartTime = Date.now();
    
    const q = this.questions[this.currentIndex];
    this.currentIndex++;
    return q;
  }

  public answerCurrentQuestion(selectedOptionId: string): boolean {
    const q = this.questions[this.currentIndex - 1];
    const isCorrect = selectedOptionId === q.correctAnswerId;

    // Calcola il tempo speso per questa domanda (in secondi)
    const timeSpent = this.questionStartTime
      ? Math.round((Date.now() - this.questionStartTime) / 1000)
      : 15; // default 15s se qualcosa non va

    this.timeSpentPerQuestion.push(timeSpent);
    this.resultsPerQuestion.push(isCorrect);

    if (isCorrect) {
      this.score++;
      this.currentStreak++;
      this.bestStreak = Math.max(this.bestStreak, this.currentStreak);
    } else {
      this.mistakes.push(q);
      this.currentStreak = 0;
    }

    WeaknessTracker.recordReview(q.id, isCorrect, timeSpent);

    return isCorrect;
  }

  public getCurrentStreak(): number {
    return this.currentStreak;
  }

  public getBestStreak(): number {
    return this.bestStreak;
  }
  
  public getStatisticsData() {
    return {
      resultsPerQuestion: this.resultsPerQuestion,
      timeSpentPerQuestion: this.timeSpentPerQuestion
    };
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
    return this.score;
  }

  public getMistakes(): Question[] {
    return this.mistakes;
  }

  public getTotalQuestions(): number {
    return this.questions.length;
  }
  
  public getConfig(): QuizConfig {
    return this.config;
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }
}
