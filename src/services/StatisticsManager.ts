export interface QuizSessionResult {
  id: string;
  date: number;
  mode: 'study' | 'quiz_free' | 'quiz_timed';
  subjectName?: string; // Nuova proprietà per tracciare la materia
  totalQuestions: number;
  correctAnswers: number;
  timeSpentPerQuestion: number[];
  resultsPerQuestion: boolean[];
  sessionIQ: number;
  // Campi opzionali (assenti nelle sessioni salvate prima di questa versione)
  // che permettono di rivedere la sessione domanda per domanda.
  questionIds?: string[];
  selectedAnswerIds?: (string | null)[];
  categoryBreakdown?: Record<string, { correct: number; total: number }>;
  // Presenti solo per le sessioni avviate dalla pagina di un concorso specifico.
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
  subjectStats: Record<string, SubjectStats>; // Statistiche per singola materia
}

export interface Insight {
  tone: 'positive' | 'warning' | 'info';
  text: string;
}

export interface UserAnalytics {
  accuracy: number;
  studyStreakDays: number;
  bestAnswerStreak: number;
  avgResponseTimeSec: number;
  totalTimeSpentMinutes: number;
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

const STORAGE_KEY = 'quiz_concorso_statistics_v2'; // Nuova chiave per resettare i dati vecchi

export class StatisticsManager {
  
  public static loadStatistics(): UserStatistics {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.error("Errore nel parse delle statistiche", e);
      }
    }
    
    // Default start
    return {
      globalIQ: 100,
      totalQuizzesTaken: 0,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      history: [],
      subjectStats: {}
    };
  }

  public static saveStatistics(stats: UserStatistics) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  /**
   * Calcola il QI per una specifica sessione.
   * L'algoritmo premia l'accuratezza, ma penalizza pesantemente l'impulsività
   * (risposte errate date troppo velocemente).
   */
  public static calculateSessionIQ(
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    resultsPerQuestion: boolean[],
    timeSpentPerQuestion: number[]
  ): number {
    
    // La modalità studio non genera punteggi QI reali, è troppo facile
    if (mode === 'study') return 100;

    let iqScore = 100; // Partenza base (media)

    const total = resultsPerQuestion.length;
    if (total === 0) return 100;

    const correct = resultsPerQuestion.filter(r => r).length;
    const accuracy = correct / total;

    // 1. Calcolo Accuratezza (Impatto Base: da -30 a +35)
    // 0% -> -30 (IQ 70)
    // 50% -> 0 (IQ 100)
    // 100% -> +35 (IQ 135)
    let accuracyDiff = (accuracy - 0.5) * 70; 
    
    // Bonus per modalità a tempo (simulazione reale)
    if (mode === 'quiz_timed') {
      accuracyDiff += 5; // Un piccolo bonus fisso per lo stress
    }

    iqScore += accuracyDiff;

    // 2. Calcolo Fattore Tempo & Impulsività
    let timeModifier = 0;
    
    for (let i = 0; i < total; i++) {
      const isCorrect = resultsPerQuestion[i];
      const timeSpent = timeSpentPerQuestion[i] || 15;

      if (isCorrect) {
        // Se rispondi bene e molto in fretta (sotto 6 secondi ma sopra 1)
        if (timeSpent < 6 && timeSpent > 1) {
          timeModifier += 1.0; // Bonus velocità di pensiero
        }
      } else {
        // Se rispondi male e TROPPO in fretta (sotto 4 secondi) = IMPULSIVITÀ
        if (timeSpent < 4) {
          timeModifier -= 2.5; // Penalità severa per errore impulsivo
        }
      }
    }

    // Limitiamo l'impatto del tempo a un massimo di +/- 15 punti
    timeModifier = Math.max(-15, Math.min(15, timeModifier));
    iqScore += timeModifier;

    // Cap finale per una singola sessione: tra 70 e 155
    return Math.round(Math.max(70, Math.min(155, iqScore)));
  }

  public static addSessionResult(
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    resultsPerQuestion: boolean[],
    timeSpentPerQuestion: number[],
    subjectName?: string,
    reviewData?: {
      questionIds: string[];
      selectedAnswerIds: (string | null)[];
      categoryBreakdown: Record<string, { correct: number; total: number }>;
      concorsoId?: string;
      concorsoTitle?: string;
    }
  ): QuizSessionResult {

    const sessionIQ = this.calculateSessionIQ(mode, resultsPerQuestion, timeSpentPerQuestion);

    const result: QuizSessionResult = {
      id: Date.now().toString(),
      date: Date.now(),
      mode,
      subjectName,
      totalQuestions: resultsPerQuestion.length,
      correctAnswers: resultsPerQuestion.filter(r => r).length,
      timeSpentPerQuestion,
      resultsPerQuestion,
      sessionIQ,
      ...reviewData,
    };

    const stats = this.loadStatistics();
    
    stats.history.push(result);
    stats.totalQuizzesTaken += 1;
    stats.totalQuestionsAnswered += result.totalQuestions;
    stats.totalCorrectAnswers += result.correctAnswers;
    
    // Aggiorna statistiche per materia se disponibile
    if (subjectName) {
      if (!stats.subjectStats[subjectName]) {
        stats.subjectStats[subjectName] = { totalAnswered: 0, totalCorrect: 0 };
      }
      stats.subjectStats[subjectName].totalAnswered += result.totalQuestions;
      stats.subjectStats[subjectName].totalCorrect += result.correctAnswers;
    }

    // Calcolo del QI Globale (Media Mobile Pesata sulle ultime 15 sessioni)
    // Le sessioni più recenti hanno un peso leggermente maggiore.
    const recentHistory = stats.history.slice(-15);
    let totalWeight = 0;
    let weightedSum = 0;

    recentHistory.forEach((session, index) => {
      // Ignora le sessioni studio dal calcolo globale
      if (session.mode === 'study') return;
      
      const weight = 1 + (index * 0.1); // Le più recenti pesano di più
      weightedSum += session.sessionIQ * weight;
      totalWeight += weight;
    });

    if (totalWeight > 0) {
      stats.globalIQ = Math.round(weightedSum / totalWeight);
    }

    this.saveStatistics(stats);
    return result;
  }

  /** Attempt history, trend and merged per-category accuracy for a single concorso. */
  public static getConcorsoStats(concorsoId: string): ConcorsoStats {
    const stats = this.loadStatistics();
    const sessions = stats.history.filter((h) => h.concorsoId === concorsoId);

    if (sessions.length === 0) {
      return { attempts: 0, bestScorePct: 0, avgScorePct: 0, lastAttemptDate: null, trend: [], categoryBreakdown: {}, sessions: [] };
    }

    const scorePct = (s: QuizSessionResult) => (s.totalQuestions > 0 ? Math.round((s.correctAnswers / s.totalQuestions) * 100) : 0);
    const scores = sessions.map(scorePct);

    const categoryBreakdown: Record<string, { correct: number; total: number }> = {};
    for (const s of sessions) {
      if (!s.categoryBreakdown) continue;
      for (const [cat, v] of Object.entries(s.categoryBreakdown)) {
        if (!categoryBreakdown[cat]) categoryBreakdown[cat] = { correct: 0, total: 0 };
        categoryBreakdown[cat].correct += v.correct;
        categoryBreakdown[cat].total += v.total;
      }
    }

    const trend = sessions.slice(-12).map((s, i) => ({ label: `#${i + 1}`, value: scorePct(s) }));

    return {
      attempts: sessions.length,
      bestScorePct: Math.max(...scores),
      avgScorePct: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      lastAttemptDate: sessions[sessions.length - 1].date,
      trend,
      categoryBreakdown,
      sessions: [...sessions].reverse(),
    };
  }

  private static longestStreak(results: boolean[]): number {
    let best = 0;
    let running = 0;
    for (const r of results) {
      running = r ? running + 1 : 0;
      best = Math.max(best, running);
    }
    return best;
  }

  /**
   * Computes every derived metric powering the Statistiche dashboard:
   * trends, per-subject radar/ranking, activity heatmap dates and
   * plain-language insights. Kept out of the UI layer on purpose.
   */
  public static getAnalytics(): UserAnalytics {
    const stats = this.loadStatistics();
    const scored = stats.history.filter((h) => h.mode !== 'study');

    const accuracy = stats.totalQuestionsAnswered > 0
      ? Math.round((stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100)
      : 0;

    // Study streak: consecutive days (ending today or yesterday) with >=1 session
    const dayKeys = new Set(stats.history.map((h) => new Date(h.date).toDateString()));
    let studyStreakDays = 0;
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    // allow the streak to still count if today has no session yet, starting from yesterday
    if (!dayKeys.has(cursor.toDateString())) {
      cursor.setDate(cursor.getDate() - 1);
    }
    while (dayKeys.has(cursor.toDateString())) {
      studyStreakDays++;
      cursor.setDate(cursor.getDate() - 1);
    }

    const bestAnswerStreak = Math.max(0, ...stats.history.map((h) => this.longestStreak(h.resultsPerQuestion)));

    const dailyActivityTrend: { label: string; value: number }[] = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() - i);
      dailyActivityTrend.push({
        label: d.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit' }),
        value: dayKeys.has(d.toDateString()) ? 1 : 0,
      });
    }

    const allTimes = stats.history.flatMap((h) => h.timeSpentPerQuestion);
    const avgResponseTimeSec = allTimes.length > 0
      ? Math.round((allTimes.reduce((a, b) => a + b, 0) / allTimes.length) * 10) / 10
      : 0;
    const totalTimeSpentMinutes = Math.round(allTimes.reduce((a, b) => a + b, 0) / 60);

    const recentScored = scored.slice(-12);
    const iqTrend = recentScored.map((h, i) => ({
      label: `#${i + 1}`,
      value: h.sessionIQ,
    }));
    const accuracyTrend = recentScored.map((h, i) => ({
      label: `#${i + 1}`,
      value: h.totalQuestions > 0 ? Math.round((h.correctAnswers / h.totalQuestions) * 100) : 0,
    }));
    const responseTimeTrend = recentScored.map((h, i) => ({
      label: `#${i + 1}`,
      value: h.timeSpentPerQuestion.length > 0
        ? Math.round((h.timeSpentPerQuestion.reduce((a, b) => a + b, 0) / h.timeSpentPerQuestion.length) * 10) / 10
        : 0,
    }));
    const streakTrend = recentScored.map((h, i) => ({
      label: `#${i + 1}`,
      value: this.longestStreak(h.resultsPerQuestion),
    }));

    const recentAll = stats.history.slice(-20);
    const cumulativeQuizzesBase = stats.history.length - recentAll.length;
    const cumulativeQuizzesTrend = recentAll.map((_, i) => ({
      label: `#${cumulativeQuizzesBase + i + 1}`,
      value: cumulativeQuizzesBase + i + 1,
    }));
    let runningMinutes = stats.history.slice(0, cumulativeQuizzesBase)
      .reduce((sum, h) => sum + h.timeSpentPerQuestion.reduce((a, b) => a + b, 0), 0) / 60;
    const cumulativeTimeTrend = recentAll.map((h, i) => {
      runningMinutes += h.timeSpentPerQuestion.reduce((a, b) => a + b, 0) / 60;
      return { label: `#${cumulativeQuizzesBase + i + 1}`, value: Math.round(runningMinutes) };
    });

    const subjectEntries = Object.entries(stats.subjectStats)
      .filter(([, s]) => s.totalAnswered > 0)
      .map(([label, s]) => ({ label, value: Math.round((s.totalCorrect / s.totalAnswered) * 100), volume: s.totalAnswered }));

    const subjectRadar = subjectEntries
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 8)
      .map(({ label, value }) => ({ label, value }));

    const subjectRanking = [...subjectEntries]
      .sort((a, b) => a.value - b.value)
      .map(({ label, value }) => ({ label, value }));

    const strongestSubject = subjectEntries.length > 0
      ? subjectEntries.reduce((best, cur) => (cur.value > best.value ? cur : best))
      : null;
    const weakestSubject = subjectEntries.length > 0
      ? subjectEntries.reduce((worst, cur) => (cur.value < worst.value ? cur : worst))
      : null;

    const activityDates = stats.history.map((h) => h.date);

    const half = Math.ceil(recentScored.length / 2);
    const firstHalfAvg = half > 0 ? recentScored.slice(0, half).reduce((s, h) => s + h.sessionIQ, 0) / half : 0;
    const secondHalfArr = recentScored.slice(half);
    const secondHalfAvg = secondHalfArr.length > 0
      ? secondHalfArr.reduce((s, h) => s + h.sessionIQ, 0) / secondHalfArr.length
      : firstHalfAvg;
    const iqDelta = recentScored.length >= 4 ? Math.round(secondHalfAvg - firstHalfAvg) : 0;

    const insights: Insight[] = [];

    if (stats.totalQuizzesTaken === 0) {
      insights.push({ tone: 'info', text: 'Non hai ancora completato nessun quiz: inizia un allenamento per sbloccare le tue statistiche.' });
    } else {
      if (iqDelta > 3) {
        insights.push({ tone: 'positive', text: `Sei in netto miglioramento: il tuo QI è salito di ${iqDelta} punti nelle sessioni più recenti.` });
      } else if (iqDelta < -3) {
        insights.push({ tone: 'warning', text: `Il tuo QI è sceso di ${Math.abs(iqDelta)} punti di recente: prova a rallentare e rileggere bene le domande.` });
      }

      if (weakestSubject && weakestSubject.value < 60) {
        insights.push({ tone: 'warning', text: `Il tuo punto debole è "${weakestSubject.label}" con solo il ${weakestSubject.value}% di risposte corrette. Vale la pena ripassarlo.` });
      }
      if (strongestSubject && strongestSubject.value >= 80) {
        insights.push({ tone: 'positive', text: `Padroneggi "${strongestSubject.label}" con il ${strongestSubject.value}% di accuratezza. Ottimo lavoro!` });
      }

      if (studyStreakDays >= 3) {
        insights.push({ tone: 'positive', text: `Streak di studio: ${studyStreakDays} giorni consecutivi. Continua così per consolidare la memoria a lungo termine.` });
      }

      const impulsiveWrong = scored.flatMap((h) => h.resultsPerQuestion.map((r, i) => ({ r, t: h.timeSpentPerQuestion[i] })))
        .filter((x) => !x.r && x.t < 4).length;
      const totalWrong = scored.reduce((s, h) => s + (h.totalQuestions - h.correctAnswers), 0);
      if (totalWrong > 0 && impulsiveWrong / totalWrong > 0.4) {
        insights.push({ tone: 'warning', text: 'Molti errori arrivano da risposte troppo impulsive (sotto i 4 secondi). Prenditi qualche istante in più prima di rispondere.' });
      }

      if (bestAnswerStreak >= 10) {
        insights.push({ tone: 'positive', text: `Il tuo record è una striscia di ${bestAnswerStreak} risposte corrette consecutive.` });
      }

      if (accuracy >= 70 && stats.totalQuizzesTaken >= 5) {
        insights.push({ tone: 'positive', text: `Precisione media del ${accuracy}%: sei sopra la soglia tipica di sufficienza nei concorsi pubblici (60-70%).` });
      }
    }

    return {
      accuracy,
      studyStreakDays,
      bestAnswerStreak,
      avgResponseTimeSec,
      totalTimeSpentMinutes,
      iqTrend,
      accuracyTrend,
      dailyActivityTrend,
      responseTimeTrend,
      streakTrend,
      cumulativeQuizzesTrend,
      cumulativeTimeTrend,
      subjectRadar,
      subjectRanking,
      strongestSubject: strongestSubject ? { label: strongestSubject.label, value: strongestSubject.value } : null,
      weakestSubject: weakestSubject ? { label: weakestSubject.label, value: weakestSubject.value } : null,
      activityDates,
      iqDelta,
      insights,
    };
  }
}
