import { useState, useEffect } from 'react';
import { fetchConcorsiIndex, fetchConcorsoManifest, fetchQuestionsFromSources, fetchAllGlobalModules, fetchAllQuestions, filterQuestionsByLevel } from './services/DatabaseService';
import type { QuestionLevel } from './services/DatabaseService';
import { QuizEngine } from './services/QuizEngine';
import { StatisticsManager } from './services/StatisticsManager';
import type { UserStatistics, UserAnalytics } from './services/StatisticsManager';
import { WeaknessTracker } from './services/WeaknessTracker';
import type { ConcorsoIndex, ConcorsoManifest, Question } from './types';
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
import { QuizView } from './components/QuizView';
import { ResultsView } from './components/ResultsView';

const MOTIVATIONAL_QUOTES = [
  "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno.",
  "La preparazione di oggi è il trionfo di domani.",
  "Non si fallisce mai finché non si smette di provare.",
  "La disciplina è il ponte tra l'obiettivo e il risultato.",
  "Studia non per sapere di più, ma per sapere meglio.",
  "Un'ora di studio concentrato vale più di un giorno di lettura passiva."
];

function App() {
  const [concorsi, setConcorsi] = useState<ConcorsoIndex[]>([]);
  const [activeConcorso, setActiveConcorso] = useState<ConcorsoManifest | null>(null);
  const [quote] = useState(() => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  const [activeEngine, setActiveEngine] = useState<QuizEngine | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; explanation: string; studyMode?: boolean } | null>(null);

  // Timer & Stats State
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [userStats, setUserStats] = useState<UserStatistics | null>(null);
  const [analytics, setAnalytics] = useState<UserAnalytics | null>(null);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [dueCount, setDueCount] = useState(0);

  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [globalModules, setGlobalModules] = useState<any[]>([]);

  // Hub Routing
  const [currentView, setCurrentView] = useState<ViewName>('home');

  // Update State
  const [updateAvailable, setUpdateAvailable] = useState<any>(null);

  const refreshStatistics = () => {
    const stats = StatisticsManager.loadStatistics();
    setUserStats(stats);
    setAnalytics(StatisticsManager.getAnalytics());
  };

  useEffect(() => {
    // OTA Update listener
    if ((window as any).electronAPI) {
      (window as any).electronAPI.onUpdateDownloaded((info: any) => {
        setUpdateAvailable(info);
      });
    }

    const init = async () => {
      try {
        setLoading(true);
        const data = await fetchConcorsiIndex();
        setConcorsi(data);
        refreshStatistics();
        setDueCount(WeaknessTracker.getDueCount());
        const modules = await fetchAllGlobalModules();
        setGlobalModules(modules);
        const questions = await fetchAllQuestions();
        setAllQuestions(questions);
      } catch (e) {
        setErrorMsg("Errore critico nel caricamento dell'indice concorsi.");
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    let timerId: ReturnType<typeof setInterval>;
    if (activeEngine && timeLeft !== null && timeLeft > 0 && currentQuestion) {
      timerId = setInterval(() => {
        setTimeLeft(prev => {
          if (prev && prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev ? prev - 1 : 0;
        });
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [activeEngine, timeLeft, currentQuestion]);

  const handleTimeUp = () => {
    setFeedback({
      isCorrect: false,
      explanation: "Tempo scaduto per l'intera prova!"
    });
    setTimeout(() => {
      setCurrentQuestion(null); // Force results screen
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const saveSessionStats = (engine: QuizEngine) => {
    const data = engine.getStatisticsData();
    const config = engine.getConfig();
    StatisticsManager.addSessionResult(config.mode, data.resultsPerQuestion, data.timeSpentPerQuestion, config.subjectName);
    refreshStatistics();
    setDueCount(WeaknessTracker.getDueCount());
  };

  const handleSelectConcorso = async (concorsoId: string) => {
    try {
      setLoading(true);
      setErrorMsg(null);
      const manifest = await fetchConcorsoManifest(concorsoId);
      setActiveConcorso(manifest);
    } catch (e) {
      setErrorMsg("Errore nel caricamento del manifesto del concorso.");
    } finally {
      setLoading(false);
    }
  };

  const beginQuiz = (questions: Question[], mode: 'study' | 'quiz_free' | 'quiz_timed', timeLimitMinutes?: number, questionLimit?: number, subjectName?: string) => {
    const engine = new QuizEngine(questions, { mode, timeLimitMinutes, questionLimit, subjectName });
    setActiveEngine(engine);
    setCurrentQuestion(engine.getNextQuestion());
    setFeedback(null);
    setShowHint(false);
    if (mode === 'quiz_timed') {
      setTimeLeft(engine.getTimeRemainingSeconds());
    } else {
      setTimeLeft(null);
    }
  };

  const handleStartQuiz = async (sources: string[], mode: 'study' | 'quiz_free' | 'quiz_timed', timeLimitMinutes?: number, questionLimit?: number, subjectName?: string, level?: QuestionLevel | 'all') => {
    try {
      setLoading(true);
      setErrorMsg(null);
      const allQuestions = await fetchQuestionsFromSources(sources);
      const questions = filterQuestionsByLevel(allQuestions, level);
      if (questions.length === 0) {
        throw new Error(
          allQuestions.length === 0
            ? "Nessuna domanda trovata in questi moduli. Assicurati che i file JSON esistano nella Master Bank."
            : `Nessuna domanda di livello "${level}" disponibile per questa materia. Prova un altro livello.`
        );
      }
      beginQuiz(questions, mode, timeLimitMinutes, questionLimit, subjectName);
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Errore di caricamento delle domande dalla Master Bank.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartCustomSimulation = async (selections: CustomSimulationModule[], timeLimitMinutes: number) => {
    try {
      setLoading(true);
      setErrorMsg(null);
      if (selections.length === 0) throw new Error("Seleziona almeno una materia con un numero di domande maggiore di zero.");

      const perModule = await Promise.all(
        selections.map(async (sel) => {
          const questions = await fetchQuestionsFromSources(sel.sources);
          const filtered = filterQuestionsByLevel(questions, sel.level);
          return shuffleArray(filtered).slice(0, sel.count);
        })
      );

      const combined = perModule.flat();
      if (combined.length === 0) throw new Error("Nessuna domanda disponibile per la combinazione di materie e livelli scelta.");

      beginQuiz(combined, 'quiz_timed', timeLimitMinutes, combined.length, 'Simulazione Personalizzata');
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Errore durante la preparazione della simulazione personalizzata.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartReview = (includeNew: boolean, limit: number) => {
    const pool = WeaknessTracker.buildReviewPool(allQuestions, { limit, includeNew });
    if (pool.length === 0) {
      setErrorMsg("Nessuna domanda disponibile per una sessione di ripasso in questo momento.");
      return;
    }
    beginQuiz(pool, 'quiz_free', undefined, pool.length, 'Ripasso Intelligente');
  };

  const handleAnswer = (optionId: string) => {
    if (!activeEngine || !currentQuestion) return;
    const isCorrect = activeEngine.answerCurrentQuestion(optionId);

    setFeedback({
      isCorrect,
      explanation: currentQuestion.explanation,
      studyMode: activeEngine.getConfig().mode === 'study'
    });
  };

  const handleNextQuestion = () => {
    if (!activeEngine) return;
    setFeedback(null);
    setShowHint(false);
    const nextQ = activeEngine.getNextQuestion();
    setCurrentQuestion(nextQ);

    // Se il quiz è finito, salva le statistiche
    if (!nextQ) {
      saveSessionStats(activeEngine);
    }
  };

  const handleNavigate = (view: ViewName) => {
    setCurrentView(view);
    setActiveConcorso(null);
    setActiveEngine(null);
  };

  const handleExitQuiz = () => {
    if (window.confirm('Sei sicuro di voler uscire? I progressi di questa sessione non verranno salvati.')) {
      setActiveEngine(null);
      setCurrentQuestion(null);
      setFeedback(null);
      setTimeLeft(null);
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2 style={{ color: 'var(--text-main)' }}>Caricamento in corso...</h2>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="error-container">
        <ShieldAlert size={64} className="icon-logo" style={{ color: 'var(--incorrect)', marginBottom: '1rem' }} />
        <h2 className="error-text">Attenzione</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{errorMsg}</p>
        <button className="btn-primary" onClick={() => window.location.reload()}>
          <RefreshCw size={20} /> Riavvia Applicazione
        </button>
      </div>
    );
  }

  const renderContent = () => {
    // Vista Quiz attiva
    if (activeEngine) {
      if (currentQuestion) {
        return (
          <QuizView
            activeEngine={activeEngine}
            currentQuestion={currentQuestion}
            feedback={feedback}
            showHint={showHint}
            timeLeft={timeLeft}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            onToggleHint={() => setShowHint(!showHint)}
            onExit={handleExitQuiz}
            formatTime={formatTime}
          />
        );
      }
      return <ResultsView activeEngine={activeEngine} onBackToHub={() => setActiveEngine(null)} />;
    }

    if (currentView === 'statistiche' && userStats && analytics) {
      return <Statistiche userStats={userStats} analytics={analytics} onBack={() => handleNavigate('home')} />;
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
      const concorsoMeta = concorsi.find(c => c.id === activeConcorso.concorso_id);
      return (
        <ConcorsoSyllabus
          activeConcorso={activeConcorso}
          concorsoMeta={concorsoMeta}
          subjectStats={userStats?.subjectStats ?? {}}
          onBack={() => setActiveConcorso(null)}
          onStartQuiz={handleStartQuiz}
          onStartCustomSimulation={handleStartCustomSimulation}
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
        onSelectConcorso={handleSelectConcorso}
        onGoAllenamento={() => setCurrentView('allenamento')}
        onGoStatistiche={() => setCurrentView('statistiche')}
        onGoRipasso={() => setCurrentView('ripasso')}
        updateAvailable={updateAvailable}
        onInstallUpdate={() => (window as any).electronAPI?.installUpdate()}
      />
    );
  };

  return (
    <Shell currentView={currentView} onNavigate={handleNavigate} globalIQ={userStats?.globalIQ ?? 100} dueCount={dueCount}>
      {renderContent()}
    </Shell>
  );
}

export default App;
