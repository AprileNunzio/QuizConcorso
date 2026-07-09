import { Clock, CheckCircle2, XCircle, Lightbulb, ArrowLeft, Flame } from 'lucide-react';
import type { QuizEngine } from '../services/QuizEngine';
import type { Question } from '../types';
import { PageNav } from './PageNav';

interface QuizViewProps {
  activeEngine: QuizEngine;
  currentQuestion: Question;
  feedback: { isCorrect: boolean; explanation: string; studyMode?: boolean } | null;
  showHint: boolean;
  timeLeft: number | null;
  onAnswer: (optionId: string) => void;
  onNext: () => void;
  onToggleHint: () => void;
  onExit: () => void;
  formatTime: (seconds: number) => string;
}

export function QuizView({
  activeEngine, currentQuestion, feedback, showHint, timeLeft,
  onAnswer, onNext, onToggleHint, onExit, formatTime,
}: QuizViewProps) {
  const total = activeEngine.getTotalQuestions();
  const index = activeEngine.getCurrentIndex();
  const progressPct = total > 0 ? (index / total) * 100 : 0;
  const streak = activeEngine.getCurrentStreak();
  const subjectName = activeEngine.getConfig().subjectName;

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

      <div className="question-card modern-card">
        <div className="question-header">
          <span className="question-counter">Domanda {index} di {total}</span>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {timeLeft === null && streak >= 2 && (
              <span className="streak-chip"><Flame size={14} /> {streak} di fila</span>
            )}
            <span className="score-badge">Punteggio: {activeEngine.getScore()}</span>
          </div>
        </div>

        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-grid">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className={`option-btn ${feedback && option.id === currentQuestion.correctAnswerId ? 'correct' : ''} ${feedback && !feedback.isCorrect && feedback.studyMode ? 'incorrect' : ''}`}
              onClick={() => onAnswer(option.id)}
              disabled={feedback !== null}
            >
              <div className="option-letter">{option.id}</div>
              <div className="option-text">{option.text}</div>
            </button>
          ))}
        </div>

        {feedback && (
          <div className={`feedback-section ${feedback.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
            <div className="feedback-header">
              {feedback.isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
              <h3>{feedback.isCorrect ? 'Risposta Esatta!' : 'Risposta Errata'}</h3>
            </div>

            {(feedback.studyMode || feedback.isCorrect) && (
              <div className="feedback-explanation">
                <Lightbulb size={18} style={{ color: 'var(--warning)', flexShrink: 0 }} />
                <p>{feedback.explanation}</p>
              </div>
            )}

            <button className="btn-primary next-btn" onClick={onNext}>
              Prossima Domanda <ArrowLeft style={{ transform: 'rotate(180deg)' }} />
            </button>
          </div>
        )}

        {!feedback && currentQuestion.hint && (
          <div className="hint-section">
            <button className="btn-secondary hint-toggle" onClick={onToggleHint}>
              <Lightbulb size={18} /> {showHint ? 'Nascondi Suggerimento' : 'Mostra Suggerimento'}
            </button>
            {showHint && <p className="hint-text">{currentQuestion.hint}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
