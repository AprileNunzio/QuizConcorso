import { useState, useEffect } from 'react';
import {
  Clock, CheckCircle2, XCircle, Lightbulb, ChevronRight, ChevronLeft,
  Flame, SkipForward, Flag, Tag, ArrowLeft, Bookmark, Zap, Activity,
  Sliders, Award
} from 'lucide-react';
import type { QuizEngine } from '../services/QuizEngine';

interface QuizViewProps {
  activeEngine: QuizEngine;
  showHint: boolean;
  timeLeft: number | null;
  onAnswer: (optionId: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  onJump: (position: number) => void;
  onFinish: () => void;
  onToggleHint: () => void;
  onExit: () => void;
  formatTime: (seconds: number) => string;
}

export function QuizView({
  activeEngine,
  showHint,
  timeLeft,
  onAnswer,
  onNext,
  onPrev,
  onSkip,
  onJump,
  onFinish,
  onToggleHint,
  onExit,
  formatTime,
}: QuizViewProps) {
  const currentQuestion = activeEngine.getCurrentQuestion();
  const index = activeEngine.getCurrentIndex();
  const total = activeEngine.getTotalQuestions();
  const streak = activeEngine.getCurrentStreak();
  const answered = currentQuestion ? activeEngine.getSelectedAnswer() !== null : false;
  const selected = currentQuestion ? activeEngine.getSelectedAnswer() : null;
  const isCorrect = currentQuestion && selected ? selected === currentQuestion.correctAnswerId : false;
  const score = activeEngine.getScore();
  const answeredCount = activeEngine.getAnsweredCount();
  const concorsoTitle = activeEngine.getConfig().concorsoTitle;
  const subjectName = activeEngine.getConfig().subjectName;

  const [flaggedIndices, setFlaggedIndices] = useState<Set<number>>(() => new Set());
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  const [fontScale, setFontScale] = useState<'standard' | 'large' | 'xlarge'>('standard');

  const isFlagged = flaggedIndices.has(index - 1);

  const toggleFlag = () => {
    setFlaggedIndices((prev) => {
      const next = new Set(prev);
      const curr = index - 1;
      if (next.has(curr)) next.delete(curr);
      else next.add(curr);
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (['a', 'b', 'c', 'd'].includes(e.key.toLowerCase()) && !answered && currentQuestion) {
        const optIdx = e.key.toLowerCase().charCodeAt(0) - 97;
        if (currentQuestion.options[optIdx]) {
          onAnswer(currentQuestion.options[optIdx].id);
        }
      } else if (e.key === 'ArrowRight' && !activeEngine.isLast()) {
        onNext();
      } else if (e.key === 'ArrowLeft' && !activeEngine.isFirst()) {
        onPrev();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFlag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, answered, activeEngine, onAnswer, onNext, onPrev]);

  if (!currentQuestion) return null;

  const data = activeEngine.getStatisticsData();
  const positiveTimes = data.timeSpentPerQuestion.filter((t) => t > 0);
  const avgPaceSec = positiveTimes.length > 0 ? Math.round(positiveTimes.reduce((a, b) => a + b, 0) / positiveTimes.length) : 0;
  const remainingQuestions = Math.max(0, total - answeredCount);
  const targetPaceSec = timeLeft !== null && remainingQuestions > 0 ? Math.round(timeLeft / remainingQuestions) : null;
  const wrongCount = answeredCount - score;

  const stemFontSize = fontScale === 'large' ? '1.25rem' : fontScale === 'xlarge' ? '1.4rem' : '1.1rem';
  const optionFontSize = fontScale === 'large' ? '1.02rem' : fontScale === 'xlarge' ? '1.14rem' : '0.92rem';

  return (
    <div className="quiz-cbt-root">
      <header className="cbt-top-bar">
        <div className="cbt-brand-badge">
          <button className="nav-icon-btn" onClick={onExit} title="Esci dal quiz">
            <ArrowLeft size={18} />
          </button>
          <div>
            <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 800 }}>
              {concorsoTitle || 'Simulazione Prova d\'Esame'}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              {subjectName ? `Materia: ${subjectName}` : 'Sessione Completa Interdisciplinare'}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {streak >= 2 && (
            <span className="streak-chip">
              <Flame size={14} /> {streak} di fila
            </span>
          )}

          {timeLeft !== null && (
            <div className={`cbt-timer ${timeLeft < 300 ? 'alert' : ''}`}>
              <Clock size={18} />
              <span>{formatTime(timeLeft)}</span>
            </div>
          )}

          <button className="btn-secondary" style={{ width: 'auto', padding: '0.4rem 0.85rem', fontSize: '0.8rem' }} onClick={onFinish}>
            <Flag size={14} /> Termina Prova
          </button>
        </div>
      </header>

      <div className="cbt-cockpit-grid">
        <aside className="cbt-sidebar-matrix">
          <div className="cbt-matrix-title">
            <span>Mappa Quesiti</span>
            <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>{index}/{total}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.4rem' }}>
            <button
              className={`cbt-zoom-btn ${matrixFilter === 'all' ? 'active' : ''}`}
              style={{ flex: 1, fontSize: '0.68rem', padding: '0.15rem 0' }}
              onClick={() => setMatrixFilter('all')}
            >
              Tutte
            </button>
            <button
              className={`cbt-zoom-btn ${matrixFilter === 'unanswered' ? 'active' : ''}`}
              style={{ flex: 1, fontSize: '0.68rem', padding: '0.15rem 0' }}
              onClick={() => setMatrixFilter('unanswered')}
            >
              Da fare ({total - answeredCount})
            </button>
            <button
              className={`cbt-zoom-btn ${matrixFilter === 'flagged' ? 'active' : ''}`}
              style={{ flex: 1, fontSize: '0.68rem', padding: '0.15rem 0' }}
              onClick={() => setMatrixFilter('flagged')}
            >
              Flag ({flaggedIndices.size})
            </button>
          </div>

          <div className="cbt-matrix-scroll">
            {Array.from({ length: total }, (_, i) => {
              const status = activeEngine.getQuestionStatus(i);
              const flagged = flaggedIndices.has(i);
              const isCurr = i === index - 1;

              if (matrixFilter === 'unanswered' && status !== 'unvisited' && status !== 'skipped') return null;
              if (matrixFilter === 'flagged' && !flagged) return null;

              let cls = `cbt-q-pill ${status} qnum-${status}`;
              if (isCurr) cls += ' active-pointer';
              if (flagged) cls += ' flagged';
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => onJump(i)}
                  title={`Domanda ${i + 1}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="cbt-matrix-legend">
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot qnum-dot-correct" /> Corretta
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot" style={{ background: 'var(--incorrect)' }} /> Errata
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot" style={{ background: 'var(--flagged)' }} /> Flag
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot qnum-dot-unvisited" /> Da svolgere
            </span>
          </div>
        </aside>

        <main
          className="cbt-main-question"
          style={{ '--cbt-stem-size': stemFontSize, '--cbt-option-size': optionFontSize } as any}
        >
          <div className="cbt-question-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span className="meta-badge" style={{ background: 'var(--primary-gradient)', color: '#fff', border: 'none' }}>
                Quesito {index} di {total}
              </span>
              {currentQuestion.level && (
                <span className="meta-badge">
                  Livello: {currentQuestion.level.toUpperCase()}
                </span>
              )}
            </div>

            <button
              className={`btn-secondary ${isFlagged ? 'active' : ''}`}
              style={{ width: 'auto', padding: '0.3rem 0.65rem', fontSize: '0.76rem' }}
              onClick={toggleFlag}
            >
              <Bookmark size={13} style={{ color: isFlagged ? 'var(--flagged)' : 'inherit' }} />
              {isFlagged ? 'Contrassegnata' : 'Contrassegna (F)'}
            </button>
          </div>

          <div className="cbt-stem-text">
            {currentQuestion.question}
          </div>

          <div className="cbt-options-column">
            {currentQuestion.options.map((opt, i) => {
              const letter = String.fromCharCode(65 + i);
              const isCorrectOpt = opt.id === currentQuestion.correctAnswerId;
              const isSelected = opt.id === selected;
              let cls = 'cbt-option-card';
              if (answered && isCorrectOpt) cls += ' correct';
              else if (answered && isSelected) cls += ' incorrect';

              return (
                <button
                  key={opt.id}
                  className={cls}
                  onClick={() => onAnswer(opt.id)}
                  disabled={answered}
                >
                  <span className="cbt-letter-badge">{letter}</span>
                  <span style={{ flex: 1 }}>{opt.text}</span>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`cbt-feedback-drawer ${isCorrect ? 'cbt-feedback-correct' : 'cbt-feedback-incorrect'}`}>
              <div className="cbt-feedback-header">
                {isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                <span>{isCorrect ? 'Risposta Esatta!' : 'Risposta Errata'}</span>
              </div>
              <div className="cbt-feedback-body">
                <Lightbulb size={16} style={{ color: 'var(--warning)', flexShrink: 0, marginTop: '2px' }} />
                <span>{currentQuestion.explanation || 'Nessuna spiegazione ufficiale registrata per questo quesito.'}</span>
              </div>
            </div>
          )}

          {!answered && currentQuestion.hint && (
            <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
              <button className="btn-secondary" style={{ width: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.78rem' }} onClick={onToggleHint}>
                <Lightbulb size={14} /> {showHint ? 'Nascondi Suggerimento' : 'Mostra Suggerimento'}
              </button>
              {showHint && (
                <p style={{ margin: '0.4rem 0 0', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  {currentQuestion.hint}
                </p>
              )}
            </div>
          )}
        </main>

        <aside className="cbt-sidebar-telemetry">
          <div className="cbt-telemetry-header">
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-dim)' }}>
              Telemetria Prova
            </span>
            {currentQuestion.category && (
              <span className="quiz-category-tag" style={{ margin: 0, fontSize: '0.7rem' }}>
                <Tag size={11} /> {currentQuestion.category}
              </span>
            )}
          </div>

          <div className="cbt-scorecard-grid">
            <div className="cbt-score-tile">
              <span className="cbt-score-tile-val" style={{ color: 'var(--correct)' }}>{score}</span>
              <span className="cbt-score-tile-lbl">Corrette</span>
            </div>
            <div className="cbt-score-tile">
              <span className="cbt-score-tile-val" style={{ color: 'var(--incorrect)' }}>{wrongCount}</span>
              <span className="cbt-score-tile-lbl">Errate</span>
            </div>
            <div className="cbt-score-tile">
              <span className="cbt-score-tile-val" style={{ color: 'var(--text-dim)' }}>{remainingQuestions}</span>
              <span className="cbt-score-tile-lbl">Da Svolgere</span>
            </div>
            <div className="cbt-score-tile">
              <span className="cbt-score-tile-val" style={{ color: 'var(--primary)' }}>
                {Math.round((score / Math.max(1, answeredCount)) * 100)}%
              </span>
              <span className="cbt-score-tile-lbl">Accuratezza</span>
            </div>
          </div>

          <div className="cbt-pacing-box">
            <div className="cbt-pacing-row">
              <span>Ritmo medio finora:</span>
              <strong>{avgPaceSec > 0 ? `${avgPaceSec}s / dom` : 'In calcolo...'}</strong>
            </div>
            {targetPaceSec !== null && (
              <div className="cbt-pacing-row">
                <span>Tempo residuo per quesito:</span>
                <strong style={{ color: targetPaceSec < 30 ? 'var(--incorrect)' : 'var(--accent-cyan)' }}>
                  ~{targetPaceSec}s
                </strong>
              </div>
            )}
            <div className="cbt-pacing-row">
              <span>Quesiti contrassegnati:</span>
              <strong style={{ color: 'var(--flagged)' }}>{flaggedIndices.size}</strong>
            </div>
          </div>

          <div className="cbt-zoom-row">
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Zoom Testo:</span>
            <div className="cbt-zoom-buttons">
              <button
                className={`cbt-zoom-btn ${fontScale === 'standard' ? 'active' : ''}`}
                onClick={() => setFontScale('standard')}
                title="Caratteri Normali"
              >
                A
              </button>
              <button
                className={`cbt-zoom-btn ${fontScale === 'large' ? 'active' : ''}`}
                onClick={() => setFontScale('large')}
                title="Caratteri Grandi"
              >
                A+
              </button>
              <button
                className={`cbt-zoom-btn ${fontScale === 'xlarge' ? 'active' : ''}`}
                onClick={() => setFontScale('xlarge')}
                title="Caratteri Molto Grandi"
              >
                A++
              </button>
            </div>
          </div>

          <div className="cbt-shortcuts-card">
            <strong style={{ color: 'var(--text-main)', fontSize: '0.72rem' }}>Tasti Rapidi CBT:</strong>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              <span><kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> Opzioni</span>
              <span><kbd>→</kbd> Avanti</span>
              <span><kbd>←</kbd> Dietro</span>
              <span><kbd>F</kbd> Segna Flag</span>
            </div>
          </div>
        </aside>
      </div>

      <footer className="cbt-dock-bar">
        <button className="btn-secondary" style={{ width: 'auto', padding: '0.45rem 1rem' }} onClick={onPrev} disabled={activeEngine.isFirst()}>
          <ChevronLeft size={16} /> Precedente
        </button>

        <div className="cbt-dock-progress">
          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Quesito {index} di {total} &middot; {answeredCount} svolte ({Math.round((answeredCount / total) * 100)}%)
          </span>
          <div className="cbt-progress-track">
            <div className="cbt-progress-fill" style={{ width: `${Math.round((answeredCount / total) * 100)}%` }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {!answered && !activeEngine.isLast() && (
            <button className="btn-secondary" style={{ width: 'auto', padding: '0.45rem 0.95rem' }} onClick={onSkip}>
              Salta <SkipForward size={14} />
            </button>
          )}

          {activeEngine.isLast() ? (
            <button className="btn-primary" style={{ width: 'auto', padding: '0.45rem 1.35rem' }} onClick={onFinish}>
              Consegna Prova <Flag size={16} />
            </button>
          ) : (
            <button className="btn-primary" style={{ width: 'auto', padding: '0.45rem 1.35rem' }} onClick={onNext}>
              Successiva <ChevronRight size={16} />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
