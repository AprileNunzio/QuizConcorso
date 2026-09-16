import { useState, useEffect } from 'react';
import { databaseRepo, syncWorker } from '../database';
import type { ConcorsoIndex, Question } from '../database';
import { StatisticsManager } from '../../services/StatisticsManager';
import type { UserStatistics, UserAnalytics } from '../../services/StatisticsManager';
import { WeaknessTracker } from '../../services/WeaknessTracker';

export interface AppBootState {
  isReady: boolean;
  concorsi: ConcorsoIndex[];
  globalModules: any[];
  allQuestions: Question[];
  userStats: UserStatistics | null;
  analytics: UserAnalytics | null;
  dueCount: number;
  error: string | null;
  refreshStats: () => void;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export function useAppBoot(): AppBootState {
  const [isReady, setIsReady] = useState(false);
  const [concorsi, setConcorsi] = useState<ConcorsoIndex[]>([]);
  const [globalModules, setGlobalModules] = useState<any[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [userStats, setUserStats] = useState<UserStatistics | null>(null);
  const [analytics, setAnalytics] = useState<UserAnalytics | null>(null);
  const [dueCount, setDueCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const refreshStats = () => {
    const stats = StatisticsManager.loadStatistics();
    setUserStats(stats);
    setAnalytics(StatisticsManager.getAnalytics());
    setDueCount(WeaknessTracker.getDueCount());
  };

  useEffect(() => {
    let mounted = true;

    const boot = async () => {
      try {
        refreshStats();

        const concorsiData = await databaseRepo.getConcorsi();
        if (!mounted) return;
        setConcorsi(concorsiData);
        setIsReady(true);

        databaseRepo
          .getAllGlobalModules()
          .then((modules) => {
            if (mounted) setGlobalModules(modules);
          })
          .catch(() => {});

        databaseRepo
          .getAllQuestions()
          .then((questions) => {
            if (mounted) setAllQuestions(questions);
          })
          .catch(() => {});

        setTimeout(() => {
          if (!mounted) return;
          syncWorker.runSync().then((res) => {
            if (res.success && mounted) {
              databaseRepo.getAllQuestions().then((updated) => {
                if (mounted && updated.length > 0) {
                  setAllQuestions(updated);
                }
              });
            }
          });
        }, 3000);
      } catch (err: any) {
        if (mounted) {
          setError(err?.message ?? 'BOOT_FAILURE');
          setIsReady(true);
        }
      }
    };

    boot();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    isReady,
    concorsi,
    globalModules,
    allQuestions,
    userStats,
    analytics,
    dueCount,
    error,
    refreshStats,
    setQuestions: setAllQuestions,
  };
}
