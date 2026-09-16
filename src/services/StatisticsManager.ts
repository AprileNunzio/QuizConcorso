import type {
  QuizSessionResult,
  ConcorsoStats,
  SubjectStats,
  UserStatistics,
  Insight,
  PacingMetrics,
  PassProbabilityModel,
  UserAnalytics,
} from './statistics/types';
import { AnalyticsCalculator } from './statistics/analyticsCalculator';

export type {
  QuizSessionResult,
  ConcorsoStats,
  SubjectStats,
  UserStatistics,
  Insight,
  PacingMetrics,
  PassProbabilityModel,
  UserAnalytics,
};

const STORAGE_KEY = 'quiz_concorso_statistics_v2';

export class StatisticsManager {
  public static loadStatistics(): UserStatistics {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch {
        return this.getDefaultStats();
      }
    }
    return this.getDefaultStats();
  }

  public static saveStatistics(stats: UserStatistics): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  public static resetAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  public static calculateSessionIQ(
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    results: boolean[],
    times: number[]
  ): number {
    return AnalyticsCalculator.calculateSessionIQ(mode, results, times);
  }

  public static addSessionResult(
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    resultsPerQuestion: boolean[],
    timeSpentPerQuestion: number[],
    subjectName?: string,
    options?: {
      questionIds?: string[];
      selectedAnswerIds?: (string | null)[];
      categoryBreakdown?: Record<string, { correct: number; total: number }>;
      concorsoId?: string;
      concorsoTitle?: string;
    }
  ): QuizSessionResult {
    const stats = this.loadStatistics();
    const correctAnswers = resultsPerQuestion.filter(Boolean).length;
    const sessionIQ = this.calculateSessionIQ(mode, resultsPerQuestion, timeSpentPerQuestion);

    const session: QuizSessionResult = {
      id: `session_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      date: Date.now(),
      mode,
      subjectName,
      totalQuestions: resultsPerQuestion.length,
      correctAnswers,
      timeSpentPerQuestion,
      resultsPerQuestion,
      sessionIQ,
      questionIds: options?.questionIds,
      selectedAnswerIds: options?.selectedAnswerIds,
      categoryBreakdown: options?.categoryBreakdown,
      concorsoId: options?.concorsoId,
      concorsoTitle: options?.concorsoTitle,
    };

    stats.history.push(session);
    stats.totalQuizzesTaken++;
    stats.totalQuestionsAnswered += resultsPerQuestion.length;
    stats.totalCorrectAnswers += correctAnswers;

    if (mode !== 'study') {
      const pastWeight = 0.85;
      stats.globalIQ = Math.round(stats.globalIQ * pastWeight + sessionIQ * (1 - pastWeight));
    }

    if (subjectName) {
      if (!stats.subjectStats[subjectName]) {
        stats.subjectStats[subjectName] = { totalAnswered: 0, totalCorrect: 0 };
      }
      stats.subjectStats[subjectName].totalAnswered += resultsPerQuestion.length;
      stats.subjectStats[subjectName].totalCorrect += correctAnswers;
    }

    this.saveStatistics(stats);
    return session;
  }

  public static getConcorsoStats(concorsoId: string): ConcorsoStats {
    const stats = this.loadStatistics();
    const sessions = stats.history.filter((s) => s.concorsoId === concorsoId);

    if (sessions.length === 0) {
      return {
        attempts: 0,
        bestScorePct: 0,
        avgScorePct: 0,
        lastAttemptDate: null,
        trend: [],
        categoryBreakdown: {},
        sessions: [],
      };
    }

    const scores = sessions.map((s) => (s.totalQuestions > 0 ? Math.round((s.correctAnswers / s.totalQuestions) * 100) : 0));
    const best = Math.max(...scores);
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const lastDate = sessions[sessions.length - 1].date;
    const trend = sessions.map((s, i) => ({
      label: `#${i + 1}`,
      value: s.totalQuestions > 0 ? Math.round((s.correctAnswers / s.totalQuestions) * 100) : 0,
    }));

    const categoryBreakdown: Record<string, { correct: number; total: number }> = {};
    for (const s of sessions) {
      if (s.categoryBreakdown) {
        for (const [cat, data] of Object.entries(s.categoryBreakdown)) {
          if (!categoryBreakdown[cat]) categoryBreakdown[cat] = { correct: 0, total: 0 };
          categoryBreakdown[cat].correct += data.correct;
          categoryBreakdown[cat].total += data.total;
        }
      }
    }

    return {
      attempts: sessions.length,
      bestScorePct: best,
      avgScorePct: avg,
      lastAttemptDate: lastDate,
      trend,
      categoryBreakdown,
      sessions,
    };
  }

  public static getTrackedConcorsi(stats: UserStatistics): { concorsoId: string; concorsoTitle: string; attempts: number }[] {
    const map = new Map<string, { concorsoTitle: string; attempts: number }>();
    for (const s of stats.history) {
      if (s.concorsoId && s.concorsoTitle) {
        const cur = map.get(s.concorsoId) ?? { concorsoTitle: s.concorsoTitle, attempts: 0 };
        cur.attempts++;
        map.set(s.concorsoId, cur);
      }
    }
    return Array.from(map.entries()).map(([concorsoId, data]) => ({
      concorsoId,
      concorsoTitle: data.concorsoTitle,
      attempts: data.attempts,
    }));
  }

  public static resetConcorso(concorsoId: string): void {
    const stats = this.loadStatistics();
    stats.history = stats.history.filter((s) => s.concorsoId !== concorsoId);
    let answered = 0;
    let correct = 0;
    for (const s of stats.history) {
      answered += s.totalQuestions;
      correct += s.correctAnswers;
    }
    stats.totalQuizzesTaken = stats.history.length;
    stats.totalQuestionsAnswered = answered;
    stats.totalCorrectAnswers = correct;
    this.saveStatistics(stats);
  }

  public static getAnalytics(stats?: UserStatistics): UserAnalytics {
    return AnalyticsCalculator.calculateAnalytics(stats ?? this.loadStatistics());
  }

  private static getDefaultStats(): UserStatistics {
    return {
      globalIQ: 100,
      totalQuizzesTaken: 0,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      history: [],
      subjectStats: {},
    };
  }
}
