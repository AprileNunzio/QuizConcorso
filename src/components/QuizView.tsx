import { Clock, CheckCircle2, XCircle, Lightbulb, ChevronLeft, ChevronRight, Flame, SkipForward, Flag, Tag } from 'lucide-react';
import type { QuizEngine, QuestionStatus } from '../services/QuizEngine';
import { PageNav } from './PageNav';

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

const statusLabel = (status: QuestionStatus): string => {
  switch (status) {
    case 'correct': return 'Risposta corretta';
    case 'incorrect': return 'Risposta errata';
    case 'skipped': return 'Saltata';
    case 'current': return 'Domanda attuale';
    default: return 'Non visitata';
  }
};

export function QuizView({
  activeEngine, showHint, timeLeft,
  onAnswer, onNext, onPrev, onSkip, onJump, onFinish, onToggleHint, onExit, formatTime,
}: QuizViewProps) {
  const currentQuestion = activeEngine.getCurrentQuestion();
  if (!currentQuestion) return null;

  const total = activeEngine.getTotalQuestions();
  const index = activeEngine.getCurrentIndex();
  const progressPct = total > 0 ? (index / total) * 100 : 0;
  const streak = activeEngine.getCurrentStreak();
  const subjectName = activeEngine.getConfig().subjectName;
  const selected = activeEngine.getSelectedAnswer();
  const answered = selected !== null;
  const isCorrect = answered && selected === currentQuestion.correctAnswerId;
  const answeredCount = activeEngine.getAnsweredCount();
  const score = activeEngine.getScore();

  return (
    <div className="quiz-view">
      <PageNav onBack={onExit} backLabel="Esci dal Quiz" onDashboard={onExit} crumb={subjectName ? `In corso: ${subjectName}` : undefined} />

      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {timeLeft !== null && (
        <div className="timer-bar modern-card" style={{ padding: '1rem', position: 'sticky', top: '1rem', zIndex: 100 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock style={{ color: timeLeft < 300 ? 'var(--incorrect)' : 'var(--primary-2)' }} />
            <span className="timer-readout" style={{ color: timeLeft < 300 ? 'var(--incorrect)' : 'inherit' }}>
              {formatTime(timeLeft)}
            </span>
          </div>
          {streak >= 2 && (
            <span className="streak-chip"><Flame size={14} /> {streak} di fila</span>
          )}
        </div>
      )}

      <div className="quiz-layout-grid">
        <aside className="quiz-sidebar-nav modern-card">
          <h4 className="quiz-sidebar-title">Domande</h4>
          <div className="question-number-grid">
            {Array.from({ length: total }, (_, i) => {
              const status = activeEngine.getQuestionStatus(i);
              return (
                <button
                  key={i}
                  className={`qnum-btn qnum-${status}`}
                  title={`Domanda ${i + 1} — ${statusLabel(status)}`}
                  onClick={() => onJump(i)}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="qnum-legend">
            <span><i className="qnum-dot qnum-dot-correct" /> Corrette</span>
            <span><i className="qnum-dot qnum-dot-incorrect" /> Errate</span>
            <span><i className="qnum-dot qnum-dot-skipped" /> Saltate</span>
            <span><i className="qnum-dot qnum-dot-unvisited" /> Da fare</span>
          </div>
        </aside>

        <div className="question-card modern-card">
          <div className="question-header">
            <span className="question-counter">Domanda {index} di {total}</span>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {timeLeft === null && streak >= 2 && (
                <span className="streak-chip"><Flame size={14} /> {streak} di fila</span>
              )}
              <span className="score-badge">Punteggio: {score}</span>
            </div>
          </div>

          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-grid">
            {currentQuestion.options.map((option) => {
              const isCorrectOption = option.id === currentQuestion.correctAnswerId;
              const isSelected = option.id === selected;
              let cls = '';
              if (answered && isCorrectOption) cls = 'correct';
              else if (answered && isSelected) cls = 'incorrect';
              return (
                <button
                  key={option.id}
                  className={`option-btn ${cls}`}
                  onClick={() => onAnswer(option.id)}
                  disabled={answered}
                >
                  <div className="option-letter">{option.id}</div>
                  <div className="option-text">{option.text}</div>
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`feedback-section ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
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
            <div className="hint-section">
              <button className="btn-secondary hint-toggle" onClick={onToggleHint}>
                <Lightbulb size={18} /> {showHint ? 'Nascondi Suggerimento' : 'Mostra Suggerimento'}
              </button>
              {showHint && <p className="hint-text">{currentQuestion.hint}</p>}
            </div>
          )}

          <div className="quiz-nav-controls">
            <button className="btn-secondary" onClick={onPrev} disabled={activeEngine.isFirst()}>
              <ChevronLeft size={18} /> Precedente
            </button>
            {!answered && !activeEngine.isLast() && (
              <button className="btn-secondary" onClick={onSkip}>
                Salta <SkipForward size={18} />
              </button>
            )}
            {activeEngine.isLast() ? (
              <button className="btn-primary" onClick={onFinish}>
                Termina Quiz <Flag size={18} />
              </button>
            ) : (
              <button className="btn-primary" onClick={onNext}>
                Prossima <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>

        <aside className="quiz-side-info modern-card">
          {currentQuestion.category && (
            <div className="quiz-category-tag">
              <Tag size={14} /> {currentQuestion.category}
            </div>
          )}
          <div className="quiz-mini-stats">
            <div className="quiz-mini-stat">
              <span className="quiz-mini-stat-value">{answeredCount}/{total}</span>
              <span className="quiz-mini-stat-label">Risposte date</span>
            </div>
            <div className="quiz-mini-stat">
              <span className="quiz-mini-stat-value" style={{ color: 'var(--correct)' }}>{score}</span>
              <span className="quiz-mini-stat-label">Corrette finora</span>
            </div>
          </div>
          <button className="btn-secondary quiz-finish-btn" onClick={onFinish}>
            <Flag size={16} /> Termina Quiz
          </button>
        </aside>
      </div>
    </div>
  );
}
