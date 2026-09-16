export interface QuizSessionResult {
  id: string;
  date: number;
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  subjectName?: string;
  totalQuestions: number;
  correctAnswers: number;
  timeSpentPerQuestion: number[];
  resultsPerQuestion: boolean[];
  sessionIQ: number;
  questionIds?: string[];
  selectedAnswerIds?: (string | null)[];
  categoryBreakdown?: Record<string, { correct: number; total: number }>;
  concorsoId?: string;
  concorsoTitle?: string;
}

export interface ConcorsoStats {
  attempts: number;
  bestScorePct: number;
  avgScorePct: number;
  lastAttemptDate: number | null;
  trend: { label: string; value: number }[];
  categoryBreakdown: Record<string, { correct: number; total: number }>;
  sessions: QuizSessionResult[];
}

export interface SubjectStats {
  totalAnswered: number;
  totalCorrect: number;
}

export interface UserStatistics {
  globalIQ: number;
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  history: QuizSessionResult[];
  subjectStats: Record<string, SubjectStats>;
}

export interface Insight {
  tone: 'positive' | 'warning' | 'info';
  text: string;
}

export interface PacingMetrics {
  avgSecondsPerQuestion: number;
  fastestAnswerSec: number;
  slowestAnswerSec: number;
  paceConsistencyPct: number;
  rushErrorRatioPct: number;
}

export interface PassProbabilityModel {
  probabilityPct: number;
  readinessLevel: 'Bassa' | 'In Crescita' | 'Buona' | 'Elevata' | 'Eccellente';
  projectedPreselettivaScore: number;
  confidenceInterval: string;
}

export interface UserAnalytics {
  accuracy: number;
  studyStreakDays: number;
  bestAnswerStreak: number;
  avgResponseTimeSec: number;
  totalTimeSpentMinutes: number;
  examReadinessScore: number;
  passProbability: PassProbabilityModel;
  pacing: PacingMetrics;
  iqTrend: { label: string; value: number }[];
  accuracyTrend: { label: string; value: number }[];
  dailyActivityTrend: { label: string; value: number }[];
  responseTimeTrend: { label: string; value: number }[];
  streakTrend: { label: string; value: number }[];
  cumulativeQuizzesTrend: { label: string; value: number }[];
  cumulativeTimeTrend: { label: string; value: number }[];
  subjectRadar: { label: string; value: number }[];
  subjectRanking: { label: string; value: number }[];
  strongestSubject: { label: string; value: number } | null;
  weakestSubject: { label: string; value: number } | null;
  activityDates: number[];
  iqDelta: number;
  insights: Insight[];
}
