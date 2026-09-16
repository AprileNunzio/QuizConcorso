import { useState, useEffect } from 'react';
import { databaseRepo, syncWorker, DatabaseSyncModal } from './features/database';
import { useAppBoot, BootFallback } from './features/boot';
import { useUpdater, UpdateDialog } from './features/updater';
import { QuizEngine } from './services/QuizEngine';
import { StatisticsManager } from './services/StatisticsManager';
import type { QuizSessionResult } from './services/StatisticsManager';
import { WeaknessTracker } from './services/WeaknessTracker';
import type { ConcorsoManifest, Question, QuestionLevel, DifficultyProfileMode } from './features/database';
import { shuffleArray } from './utils/shuffle';
import './App.css';
import { ShieldAlert, RefreshCw } from 'lucide-react';

import { Shell } from './components/Shell';
import type { ViewName } from './components/Shell';
import { HomeHub } from './components/HomeHub';
import { Allenamento } from './components/Allenamento';
import { ConcorsoSyllabus } from './components/ConcorsoSyllabus';
import type { CustomSimulationModule } from './components/SimulazioneBuilder';
import { Statistiche } from './components/Statistiche';
import { Ripasso } from './components/Ripasso';
import { Impostazioni } from './components/Impostazioni';
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';
import { QuizReviewView } from './components/QuizReviewView';

const MOTIVATIONAL_QUOTES = [
  "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
  "La preparazione di oggi è il trionfo di domani.",
  "Non si fallisce mai finché non si smette di provare.",
  "La disciplina è il ponte tra l'obiettivo e il risultato.",
  "Studia non per sapere di più, ma per sapere meglio.",
  "Un'ora di studio concentrato vale più di un giorno di lettura passiva."
];

function App() {
  const {
    isReady,
    concorsi,
    globalModules,
    allQuestions,
    userStats,
    analytics,
    dueCount,
    error,
    refreshStats,
    setQuestions,
  } = useAppBoot();

  const { updateState, progress, startDownload, installNow, dismiss } = useUpdater();

  const [activeConcorso, setActiveConcorso] = useState<ConcorsoManifest | null>(null);
  const [quote] = useState(() => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  const [activeEngine, setActiveEngine] = useState<QuizEngine | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [, setTick] = useState(0);
  const bump = () => setTick((t) => t + 1);
  const [reviewingSession, setReviewingSession] = useState<QuizSessionResult | null>(null);

  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewName>('home');
  const [syncToast, setSyncToast] = useState<string | null>(null);
  const [isDbSyncOpen, setIsDbSyncOpen] = useState(false);

  useEffect(() => {
    const dbApi = (window as any).databaseAPI;
    if (!dbApi) return;

    const unsubSync = dbApi.onSyncRequested(async (options: { forceAntiCache?: boolean }) => {
      setSyncToast('Sincronizzazione anti-cache in corso...');
      const res = await syncWorker.runSync(
        (p) => setSyncToast(p.message),
        { forceAntiCache: options?.forceAntiCache ?? true }
      );
      if (res.success) {
        const updated = await databaseRepo.getAllQuestions();
        if (updated.length > 0) setQuestions(updated);
        setSyncToast(`Banche dati sincronizzate con successo (${res.totalQuestions} quesiti)!`);
        setTimeout(() => setSyncToast(null), 4000);
      } else {
        setSyncToast(`Errore sincronizzazione: ${res.error || 'Server non raggiungibile'}`);
        setTimeout(() => setSyncToast(null), 5000);
      }
    });

    const unsubClear = dbApi.onClearCacheRequested(async () => {
      setSyncToast('Svuotamento cache locale in corso...');
      await syncWorker.clearLocalCache();
      setSyncToast('Cache locale svuotata con successo.');
      setTimeout(() => setSyncToast(null), 3000);
    });

    return () => {
      unsubSync?.();
      unsubClear?.();
    };
  }, [setQuestions]);

  const handleTimeUp = () => {
    if (!activeEngine) return;
    saveSessionStats(activeEngine);
    setQuizFinished(true);
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;
    if (activeEngine && !quizFinished && timeLeft !== null && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev && prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev ? prev - 1 : 0;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [activeEngine, timeLeft, quizFinished]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const saveSessionStats = (engine: QuizEngine) => {
    const data = engine.getStatisticsData();
    const config = engine.getConfig();
    StatisticsManager.addSessionResult(config.mode, data.resultsPerQuestion, data.timeSpentPerQuestion, config.subjectName, {
      questionIds: engine.getQuestionIds(),
      selectedAnswerIds: engine.getSelectedAnswers(),
      categoryBreakdown: engine.getCategoryBreakdown(),
      concorsoId: config.concorsoId,
      concorsoTitle: config.concorsoTitle,
    });
    refreshStats();
  };

  const handleSelectConcorso = async (concorsoId: string) => {
    try {
      setLocalError(null);
      const manifest = await databaseRepo.getConcorso(concorsoId);
      setActiveConcorso(manifest);
    } catch {
      setLocalError("Impossibile caricare il concorso selezionato.");
    }
  };

  const beginQuiz = (
    questions: Question[],
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    timeLimitMinutes?: number,
    questionLimit?: number,
    subjectName?: string,
    concorsoId?: string,
    concorsoTitle?: string,
    difficultyProfile?: DifficultyProfileMode
  ) => {
    const engine = new QuizEngine(questions, {
      mode,
      timeLimitMinutes,
      questionLimit,
      subjectName,
      concorsoId,
      concorsoTitle,
      difficultyProfile,
    });
    setActiveEngine(engine);
    setQuizFinished(false);
    setShowHint(false);
    if (mode === 'quiz_timed') {
      setTimeLeft(engine.getTimeRemainingSeconds());
    } else {
      setTimeLeft(null);
    }
  };

  const handleStartQuiz = async (
    sources: string[],
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    timeLimitMinutes?: number,
    questionLimit?: number,
    subjectName?: string,
    level?: QuestionLevel | 'all',
    difficultyProfile?: DifficultyProfileMode
  ) => {
    try {
      setLocalError(null);
      const raw = await databaseRepo.getQuestionsBySources(sources);
      const questions = difficultyProfile && difficultyProfile !== 'all' ? raw : databaseRepo.filterByLevel(raw, level);
      if (questions.length === 0) {
        throw new Error(
          raw.length === 0
            ? "Nessuna domanda disponibile nei moduli selezionati."
            : `Nessuna domanda di livello "${level}" trovata per questa materia.`
        );
      }
      beginQuiz(questions, mode, timeLimitMinutes, questionLimit, subjectName, activeConcorso?.concorso_id, activeConcorso?.titolo, difficultyProfile);
    } catch (e: any) {
      setLocalError(e?.message ?? "Errore di caricamento delle domande.");
    }
  };

  const handleStartCustomSimulation = async (selections: CustomSimulationModule[], timeLimitMinutes: number) => {
    try {
      setLocalError(null);
      if (selections.length === 0) throw new Error("Seleziona almeno una materia con un numero di domande valido.");

      const perModule = await Promise.all(
        selections.map(async (sel) => {
          const raw = await databaseRepo.getQuestionsBySources(sel.sources);
          const filtered = databaseRepo.filterByLevel(raw, sel.level);
          return shuffleArray(filtered).slice(0, sel.count);
        })
      );

      const combined = perModule.flat();
      if (combined.length === 0) throw new Error("Nessuna domanda disponibile per i filtri selezionati.");

      beginQuiz(combined, 'quiz_timed', timeLimitMinutes, combined.length, 'Simulazione Personalizzata', activeConcorso?.concorso_id, activeConcorso?.titolo);
    } catch (e: any) {
      setLocalError(e?.message ?? "Errore nella configurazione della simulazione.");
    }
  };

  const handleStartReview = (includeNew: boolean, limit: number) => {
    const pool = WeaknessTracker.buildReviewPool(allQuestions, { limit, includeNew });
    if (pool.length === 0) {
      setLocalError("Nessuna domanda disponibile per una sessione di ripasso in questo momento.");
      return;
    }
    beginQuiz(pool, 'quiz_free', undefined, pool.length, 'Ripasso Intelligente');
  };

  const handleAnswer = (optionId: string) => {
    if (!activeEngine) return;
    activeEngine.answerQuestion(optionId);
    bump();
  };

  const handleFinishQuiz = () => {
    if (!activeEngine) return;
    const total = activeEngine.getTotalQuestions();
    const answered = activeEngine.getAnsweredCount();
    if (answered < total) {
      const proceed = window.confirm(`Hai ${total - answered} domande senza risposta. Vuoi terminare comunque il quiz?`);
      if (!proceed) return;
    }
    saveSessionStats(activeEngine);
    setQuizFinished(true);
  };

  const handleNextQuestion = () => {
    if (!activeEngine) return;
    setShowHint(false);
    if (activeEngine.isLast()) {
      handleFinishQuiz();
    } else {
      activeEngine.next();
      bump();
    }
  };

  const handlePrevQuestion = () => {
    if (!activeEngine) return;
    setShowHint(false);
    activeEngine.prev();
    bump();
  };

  const handleSkipQuestion = () => {
    if (!activeEngine) return;
    activeEngine.skipCurrent();
    setShowHint(false);
    if (!activeEngine.isLast()) {
      activeEngine.next();
    }
    bump();
  };

  const handleJumpQuestion = (position: number) => {
    if (!activeEngine) return;
    setShowHint(false);
    activeEngine.goTo(position);
    bump();
  };

  const handleNavigate = (view: ViewName) => {
    setCurrentView(view);
    setActiveConcorso(null);
    setActiveEngine(null);
    setReviewingSession(null);
  };

  const handleExitQuiz = () => {
    if (window.confirm('Sei sicuro di voler uscire? I progressi di questa sessione non verranno salvati.')) {
      setActiveEngine(null);
      setQuizFinished(false);
      setTimeLeft(null);
    }
  };

  if (!isReady) {
    return <BootFallback />;
  }

  const activeError = error || localError;

  if (activeError && !activeEngine && !activeConcorso && currentView === 'home' && concorsi.length === 0) {
    return (
      <div className="error-container">
        <ShieldAlert size={64} className="icon-logo" style={{ color: 'var(--incorrect)', marginBottom: '1rem' }} />
        <h2 className="error-text">Attenzione</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{activeError}</p>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          <RefreshCw size={20} /> Riavvia Applicazione
        </button>
      </div>
    );
  }

  const renderContent = () => {
    if (activeEngine && quizFinished) {
      return (
        <ResultsView
          activeEngine={activeEngine}
          onBackToHub={() => {
            setActiveEngine(null);
            setQuizFinished(false);
          }}
        />
      );
    }

    if (reviewingSession) {
      return (
        <QuizReviewView
          session={reviewingSession}
          allQuestions={allQuestions}
          onBack={() => setReviewingSession(null)}
        />
      );
    }

    if (currentView === 'impostazioni' && userStats) {
      return (
        <Impostazioni
          userStats={userStats}
          onBack={() => handleNavigate('home')}
          onDataChanged={() => refreshStats()}
        />
      );
    }

    if (currentView === 'statistiche' && userStats && analytics) {
      return (
        <Statistiche
          userStats={userStats}
          analytics={analytics}
          onBack={() => handleNavigate('home')}
          onReviewSession={setReviewingSession}
        />
      );
    }

    if (currentView === 'ripasso' && userStats) {
      return (
        <Ripasso
          allQuestions={allQuestions}
          userStats={userStats}
          onBack={() => handleNavigate('home')}
          onStartReview={handleStartReview}
        />
      );
    }

    if (currentView === 'allenamento') {
      return (
        <Allenamento
          globalModules={globalModules}
          subjectStats={userStats?.subjectStats ?? {}}
          onBack={() => handleNavigate('home')}
          onStartQuiz={handleStartQuiz}
        />
      );
    }

    if (activeConcorso) {
      const concorsoMeta = concorsi.find((c) => c.id === activeConcorso.concorso_id);
      return (
        <ConcorsoSyllabus
          activeConcorso={activeConcorso}
          concorsoMeta={concorsoMeta}
          subjectStats={userStats?.subjectStats ?? {}}
          onBack={() => setActiveConcorso(null)}
          onStartQuiz={handleStartQuiz}
          onStartCustomSimulation={handleStartCustomSimulation}
          onReviewSession={setReviewingSession}
        />
      );
    }

    return (
      <HomeHub
        concorsi={concorsi}
        quote={quote}
        userStats={userStats!}
        analytics={analytics!}
        dueCount={dueCount}
        totalQuestions={allQuestions.length}
        onOpenDbSync={() => setIsDbSyncOpen(true)}
        onSelectConcorso={handleSelectConcorso}
        onGoAllenamento={() => setCurrentView('allenamento')}
        onGoStatistiche={() => setCurrentView('statistiche')}
        onGoRipasso={() => setCurrentView('ripasso')}
        updateAvailable={updateState?.status === 'downloaded' ? updateState.info : null}
        onInstallUpdate={installNow}
        onDismissUpdate={dismiss}
      />
    );
  };

  return (
    <>
      {activeEngine && !quizFinished ? (
        <div className="quiz-cbt-fullscreen-wrapper">
          <QuizView
            activeEngine={activeEngine}
            showHint={showHint}
            timeLeft={timeLeft}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            onPrev={handlePrevQuestion}
            onSkip={handleSkipQuestion}
            onJump={handleJumpQuestion}
            onFinish={handleFinishQuiz}
            onToggleHint={() => setShowHint(!showHint)}
            onExit={handleExitQuiz}
            formatTime={formatTime}
          />
        </div>
      ) : (
        <Shell
          currentView={currentView}
          onNavigate={handleNavigate}
          globalIQ={userStats?.globalIQ ?? 100}
          dueCount={dueCount}
          onOpenDbSync={() => setIsDbSyncOpen(true)}
        >
          {renderContent()}
        </Shell>
      )}
      {syncToast && (
        <div className="update-toast" style={{ zIndex: 99998 }}>
          <div className="update-toast-content">
            <RefreshCw size={20} className="icon-logo spin-slow" style={{ color: 'var(--primary)' }} />
            <div>
              <strong>Banche Dati Online</strong>
              <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>{syncToast}</p>
            </div>
          </div>
        </div>
      )}
      <DatabaseSyncModal
        isOpen={isDbSyncOpen}
        onClose={() => setIsDbSyncOpen(false)}
        onSyncCompleted={async () => {
          const q = await databaseRepo.getAllQuestions();
          if (q.length > 0) setQuestions(q);
        }}
      />
      <UpdateDialog
        state={updateState}
        progress={progress}
        currentVersion={__APP_VERSION__}
        onDownload={startDownload}
        onInstall={installNow}
        onDismiss={dismiss}
      />
    </>
  );
}

export default App;
