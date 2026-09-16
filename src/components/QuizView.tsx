import { useState, useEffect } from 'react';
import {
  Clock, CheckCircle2, XCircle, Lightbulb, ChevronLeft, ChevronRight,
  Flame, SkipForward, Flag, Tag, ArrowLeft, Bookmark
} from 'lucide-react';
import type { QuizEngine, QuestionStatus } from '../services/QuizEngine';

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
  activeEngine, showHint, timeLeft,
  onAnswer, onNext, onPrev, onSkip, onJump, onFinish, onToggleHint, onExit, formatTime,
}: QuizViewProps) {
  const [flaggedIndices, setFlaggedIndices] = useState<Set<number>>(new Set());

  const currentQuestion = activeEngine.getCurrentQuestion();
  if (!currentQuestion) return null;

  const total = activeEngine.getTotalQuestions();
  const index = activeEngine.getCurrentIndex();
  const streak = activeEngine.getCurrentStreak();
  const subjectName = activeEngine.getConfig().subjectName;
  const concorsoTitle = activeEngine.getConfig().concorsoTitle;
  const selected = activeEngine.getSelectedAnswer();
  const answered = selected !== null;
  const isCorrect = answered && selected === currentQuestion.correctAnswerId;
  const answeredCount = activeEngine.getAnsweredCount();
  const score = activeEngine.getScore();
  const isFlagged = flaggedIndices.has(index - 1);

  const toggleFlag = () => {
    setFlaggedIndices((prev) => {
      const next = new Set(prev);
      const pos = index - 1;
      if (next.has(pos)) next.delete(pos);
      else next.add(pos);
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (!answered) {
        if (key === 'A' || key === '1') {
          const opt = currentQuestion.options[0];
          if (opt) onAnswer(opt.id);
        } else if (key === 'B' || key === '2') {
          const opt = currentQuestion.options[1];
          if (opt) onAnswer(opt.id);
        } else if (key === 'C' || key === '3') {
          const opt = currentQuestion.options[2];
          if (opt) onAnswer(opt.id);
        } else if (key === 'D' || key === '4') {
          const opt = currentQuestion.options[3];
          if (opt) onAnswer(opt.id);
        }
      }

      if (e.key === 'ArrowRight' && (answered || activeEngine.getConfig().mode === 'quiz_timed' || activeEngine.getConfig().mode === 'quiz_free')) {
        if (!activeEngine.isLast()) onNext();
      } else if (e.key === 'ArrowLeft' && !activeEngine.isFirst()) {
        onPrev();
      } else if (key === 'F') {
        toggleFlag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, answered, activeEngine, onAnswer, onNext, onPrev]);

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
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

          <button className="btn-secondary" style={{ width: 'auto', padding: '0.45rem 0.95rem' }} onClick={onFinish}>
            <Flag size={15} /> Termina Prova
          </button>
        </div>
      </header>

      <div className="cbt-cockpit-grid">
        <aside className="cbt-sidebar-matrix">
          <div className="cbt-matrix-title">
            <span>Mappa Quesiti</span>
            <span>{index}/{total}</span>
          </div>

          <div className="cbt-matrix-scroll">
            {Array.from({ length: total }, (_, i) => {
              const status = activeEngine.getQuestionStatus(i);
              const flagged = flaggedIndices.has(i);
              const isCurr = i === index - 1;
              let cls = `cbt-q-pill qnum-${status}`;
              if (isCurr) cls += ' current';
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

          <div style={{ marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot qnum-dot-correct" /> Risposta data
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot" style={{ background: 'var(--flagged)' }} /> Contrassegnata (Flag)
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span className="qnum-dot qnum-dot-unvisited" /> Da svolgere
            </span>
          </div>
        </aside>

        <main className="cbt-main-question">
          <div className="cbt-question-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              style={{ width: 'auto', padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              onClick={toggleFlag}
            >
              <Bookmark size={14} style={{ color: isFlagged ? 'var(--flagged)' : 'inherit' }} />
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
            <div className={`feedback-section ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`} style={{ marginTop: 'auto' }}>
              <div className="feedback-header">
                {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                <h3>{isCorrect ? 'Risposta Esatta!' : 'Risposta Errata'}</h3>
              </div>
              <div className="feedback-explanation">
                <Lightbulb size={18} style={{ color: 'var(--warning)', flexShrink: 0 }} />
                <p>{currentQuestion.explanation || 'Nessuna spiegazione disponibile per questa domanda.'}</p>
              </div>
            </div>
          )}

          {!answered && currentQuestion.hint && (
            <div className="hint-section" style={{ marginTop: 'auto' }}>
              <button className="btn-secondary" style={{ width: 'auto' }} onClick={onToggleHint}>
                <Lightbulb size={16} /> {showHint ? 'Nascondi Suggerimento' : 'Mostra Suggerimento'}
              </button>
              {showHint && <p className="hint-text">{currentQuestion.hint}</p>}
            </div>
          )}
        </main>

        <aside className="cbt-sidebar-telemetry">
          {currentQuestion.category && (
            <div className="quiz-category-tag">
              <Tag size={13} /> {currentQuestion.category}
            </div>
          )}

          <div className="quiz-mini-stats">
            <div className="quiz-mini-stat">
              <span className="quiz-mini-stat-value">{answeredCount}/{total}</span>
              <span className="quiz-mini-stat-label">Completate</span>
            </div>
            <div className="quiz-mini-stat">
              <span className="quiz-mini-stat-value" style={{ color: 'var(--correct)' }}>{score}</span>
              <span className="quiz-mini-stat-label">Punti Attuali</span>
            </div>
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            <strong>Tasti Rapidi CBT:</strong>
            <span><kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> : Rispondi</span>
            <span><kbd>→</kbd> : Domanda successiva</span>
            <span><kbd>←</kbd> : Domanda precedente</span>
            <span><kbd>F</kbd> : Contrassegna (Flag)</span>
          </div>
        </aside>
      </div>

      <footer className="cbt-dock-bar">
        <button className="btn-secondary" style={{ width: 'auto' }} onClick={onPrev} disabled={activeEngine.isFirst()}>
          <ChevronLeft size={18} /> Precedente
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {!answered && !activeEngine.isLast() && (
            <button className="btn-secondary" style={{ width: 'auto' }} onClick={onSkip}>
              Salta <SkipForward size={16} />
            </button>
          )}

          {activeEngine.isLast() ? (
            <button className="btn-primary" style={{ width: 'auto' }} onClick={onFinish}>
              Consegna Prova <Flag size={18} />
            </button>
          ) : (
            <button className="btn-primary" style={{ width: 'auto' }} onClick={onNext}>
              Successiva <ChevronRight size={18} />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
