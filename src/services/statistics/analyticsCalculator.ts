import type { QuizSessionResult, UserStatistics, UserAnalytics, PacingMetrics, PassProbabilityModel, Insight } from './types';

export class AnalyticsCalculator {
  public static calculateSessionIQ(
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    results: boolean[],
    times: number[]
  ): number {
    if (mode === 'study' || results.length === 0) return 100;
    let score = 100;
    const correctCount = results.filter(Boolean).length;
    const accuracy = correctCount / results.length;
    score += Math.round((accuracy - 0.5) * 60);

    let streak = 0;
    let maxStreak = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i]) {
        streak++;
        if (streak > maxStreak) maxStreak = streak;
      } else {
        if (times[i] != null && times[i] < 4) {
          score -= 3;
        }
        streak = 0;
      }
    }

    if (maxStreak >= 10) score += 6;
    else if (maxStreak >= 5) score += 3;

    if (times.length > 0) {
      const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
      if (accuracy >= 0.7 && avgTime < 25) score += 5;
    }

    return Math.max(70, Math.min(155, Math.round(score)));
  }

  public static calculatePacing(history: QuizSessionResult[]): PacingMetrics {
    const allTimes: number[] = [];
    let rushErrors = 0;
    let totalErrors = 0;

    for (const s of history) {
      for (let i = 0; i < s.timeSpentPerQuestion.length; i++) {
        const t = s.timeSpentPerQuestion[i];
        const ok = s.resultsPerQuestion[i];
        if (t > 0) allTimes.push(t);
        if (!ok) {
          totalErrors++;
          if (t > 0 && t <= 5) rushErrors++;
        }
      }
    }

    if (allTimes.length === 0) {
      return {
        avgSecondsPerQuestion: 0,
        fastestAnswerSec: 0,
        slowestAnswerSec: 0,
        paceConsistencyPct: 100,
        rushErrorRatioPct: 0,
      };
    }

    const avg = Math.round((allTimes.reduce((a, b) => a + b, 0) / allTimes.length) * 10) / 10;
    const fastest = Math.min(...allTimes);
    const slowest = Math.max(...allTimes);
    const variance = allTimes.reduce((sum, t) => sum + Math.pow(t - avg, 2), 0) / allTimes.length;
    const stdDev = Math.sqrt(variance);
    const cv = avg > 0 ? (stdDev / avg) * 100 : 0;
    const consistency = Math.max(10, Math.min(99, Math.round(100 - cv * 0.5)));
    const rushPct = totalErrors > 0 ? Math.round((rushErrors / totalErrors) * 100) : 0;

    return {
      avgSecondsPerQuestion: avg,
      fastestAnswerSec: fastest,
      slowestAnswerSec: slowest,
      paceConsistencyPct: consistency,
      rushErrorRatioPct: rushPct,
    };
  }

  public static calculatePassProbability(
    accuracy: number,
    pacing: PacingMetrics,
    totalAnswered: number,
    globalIQ: number
  ): PassProbabilityModel {
    if (totalAnswered < 15) {
      return {
        probabilityPct: Math.round(Math.min(50, accuracy * 0.5)),
        readinessLevel: 'Bassa',
        projectedPreselettivaScore: Math.round((accuracy / 100) * 30 * 10) / 10,
        confidenceInterval: 'Dati iniziali insufficienti',
      };
    }

    const accFactor = Math.min(100, Math.max(0, (accuracy - 50) * 2));
    const speedFactor = pacing.avgSecondsPerQuestion <= 40 && pacing.avgSecondsPerQuestion >= 10 ? 85 : 50;
    const iqFactor = Math.min(100, Math.max(0, (globalIQ - 90) * 2));
    const consistencyBonus = pacing.paceConsistencyPct * 0.2;

    const raw = (accFactor * 0.55) + (speedFactor * 0.20) + (iqFactor * 0.15) + consistencyBonus;
    const prob = Math.max(5, Math.min(98, Math.round(raw)));

    let level: PassProbabilityModel['readinessLevel'] = 'Bassa';
    if (prob >= 88) level = 'Eccellente';
    else if (prob >= 75) level = 'Elevata';
    else if (prob >= 60) level = 'Buona';
    else if (prob >= 40) level = 'In Crescita';

    const projected = Math.round(((accuracy * 0.85 + (prob * 0.15)) / 100) * 30 * 10) / 10;
    const margin = Math.max(1, Math.round((100 - pacing.paceConsistencyPct) * 0.05 * 10) / 10);

    return {
      probabilityPct: prob,
      readinessLevel: level,
      projectedPreselettivaScore: Math.min(30, Math.max(0, projected)),
      confidenceInterval: `±${margin} pt (${totalAnswered} quesiti testati)`,
    };
  }

  public static calculateAnalytics(stats: UserStatistics): UserAnalytics {
    const { history, totalQuestionsAnswered, totalCorrectAnswers, subjectStats, globalIQ } = stats;
    const accuracy = totalQuestionsAnswered > 0 ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100) : 0;
    const pacing = this.calculatePacing(history);

    const dates = history.map((s) => s.date).sort((a, b) => a - b);
    const daySet = new Set(dates.map((d) => new Date(d).toDateString()));
    let streakDays = 0;
    let checkDate = new Date();
    while (daySet.has(checkDate.toDateString())) {
      streakDays++;
      checkDate.setDate(checkDate.getDate() - 1);
    }

    let bestStreak = 0;
    for (const s of history) {
      let cur = 0;
      for (const ok of s.resultsPerQuestion) {
        if (ok) {
          cur++;
          if (cur > bestStreak) bestStreak = cur;
        } else {
          cur = 0;
        }
      }
    }

    const totalSeconds = history.reduce((sum, s) => sum + s.timeSpentPerQuestion.reduce((a, b) => a + b, 0), 0);
    const totalMinutes = Math.round(totalSeconds / 60);

    const passProb = this.calculatePassProbability(accuracy, pacing, totalQuestionsAnswered, globalIQ);
    const readiness = Math.round((passProb.probabilityPct * 0.6) + (accuracy * 0.25) + (Math.min(100, totalQuestionsAnswered * 0.5) * 0.15));

    const iqTrend = history.map((s, i) => ({ label: `#${i + 1}`, value: s.sessionIQ }));
    const accuracyTrend = history.map((s, i) => ({
      label: `#${i + 1}`,
      value: s.totalQuestions > 0 ? Math.round((s.correctAnswers / s.totalQuestions) * 100) : 0,
    }));
    const responseTimeTrend = history.map((s, i) => {
      const positive = s.timeSpentPerQuestion.filter((t) => t > 0);
      const avg = positive.length > 0 ? Math.round(positive.reduce((a, b) => a + b, 0) / positive.length) : 0;
      return { label: `#${i + 1}`, value: avg };
    });
    const streakTrend = history.map((s, i) => {
      let maxS = 0;
      let cur = 0;
      for (const ok of s.resultsPerQuestion) {
        if (ok) {
          cur++;
          if (cur > maxS) maxS = cur;
        } else {
          cur = 0;
        }
      }
      return { label: `#${i + 1}`, value: maxS };
    });

    let runningQuizzes = 0;
    const cumulativeQuizzesTrend = history.map((s, i) => {
      runningQuizzes++;
      return { label: `#${i + 1}`, value: runningQuizzes };
    });

    let runningMinutes = 0;
    const cumulativeTimeTrend = history.map((s, i) => {
      const m = Math.round(s.timeSpentPerQuestion.reduce((a, b) => a + b, 0) / 60);
      runningMinutes += m;
      return { label: `#${i + 1}`, value: runningMinutes };
    });

    const dailyActivityTrend = Array.from({ length: 14 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (13 - i));
      const has = daySet.has(d.toDateString()) ? 1 : 0;
      return { label: d.toLocaleDateString('it-IT', { weekday: 'narrow' }), value: has };
    });

    const subjectEntries = Object.entries(subjectStats)
      .filter(([, data]) => data.totalAnswered > 0)
      .map(([name, data]) => ({
        label: name,
        value: Math.round((data.totalCorrect / data.totalAnswered) * 100),
      }))
      .sort((a, b) => b.value - a.value);

    const strongestSubject = subjectEntries[0] ?? null;
    const weakestSubject = subjectEntries.length > 1 ? subjectEntries[subjectEntries.length - 1] : null;

    const insights: Insight[] = [];
    if (accuracy >= 80) {
      insights.push({ tone: 'positive', text: `Eccellente precisione media (${accuracy}%). Sei sopra la soglia tipica di idoneità concorsuale.` });
    } else if (accuracy >= 65) {
      insights.push({ tone: 'positive', text: `Buona precisione media (${accuracy}%). Continua il ripasso sulle materie a minor punteggio.` });
    } else if (totalQuestionsAnswered > 0) {
      insights.push({ tone: 'warning', text: `Precisione attuale al ${accuracy}%. Ti consigliamo la modalità Studio per consolidare le nozioni chiave.` });
    }

    if (pacing.rushErrorRatioPct > 25) {
      insights.push({ tone: 'warning', text: `Il ${pacing.rushErrorRatioPct}% dei tuoi errori avviene nei primi 5 secondi: modera l'impulsività durante i quesiti a trabocchetto.` });
    } else if (pacing.avgSecondsPerQuestion > 0 && pacing.avgSecondsPerQuestion < 35) {
      insights.push({ tone: 'positive', text: `Ritmo di risposta eccellente (~${pacing.avgSecondsPerQuestion}s a quesito): ottimale per le prove selettive a tempo.` });
    }

    if (strongestSubject) {
      insights.push({ tone: 'positive', text: `Materia di forza: "${strongestSubject.label}" con il ${strongestSubject.value}% di risposte corrette.` });
    }
    if (weakestSubject && weakestSubject.value < 70) {
      insights.push({ tone: 'warning', text: `Area da consolidare: "${weakestSubject.label}" si attesta al ${weakestSubject.value}%.` });
    }

    const iqDelta = iqTrend.length >= 2 ? iqTrend[iqTrend.length - 1].value - iqTrend[iqTrend.length - 2].value : 0;

    return {
      accuracy,
      studyStreakDays: streakDays,
      bestAnswerStreak: bestStreak,
      avgResponseTimeSec: pacing.avgSecondsPerQuestion,
      totalTimeSpentMinutes: totalMinutes,
      examReadinessScore: readiness,
      passProbability: passProb,
      pacing,
      iqTrend,
      accuracyTrend,
      dailyActivityTrend,
      responseTimeTrend,
      streakTrend,
      cumulativeQuizzesTrend,
      cumulativeTimeTrend,
      subjectRadar: subjectEntries.slice(0, 6),
      subjectRanking: [...subjectEntries].reverse(),
      strongestSubject,
      weakestSubject,
      activityDates: dates,
      iqDelta,
      insights,
    };
  }
}
