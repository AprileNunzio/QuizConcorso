import { useState } from 'react';
import { Award, CheckCircle2, Clock3, Gauge, Lightbulb, Tag, Sparkles, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import type { QuizEngine, DetailedResult } from '../services/QuizEngine';
import { StatisticsManager } from '../services/StatisticsManager';
import { GaugeRing } from './charts/GaugeRing';
import { PageNav } from './PageNav';

interface ResultsViewProps {
  activeEngine: QuizEngine;
  onBackToHub: () => void;
}

export function ReviewItem({ item, index }: { item: DetailedResult; index: number }) {
  const yourAnswerText = item.selectedOptionId
    ? item.question.options.find((o) => o.id === item.selectedOptionId)?.text
    : null;
  const correctAnswerText = item.question.options.find((o) => o.id === item.question.correctAnswerId)?.text;

  return (
    <li className={`mistake-item review-item-${item.isCorrect ? 'correct' : 'incorrect'}`}>
      <div className="mistake-item-head">
        <span className="mistake-index">#{index + 1}</span>
        {item.question.category && (
          <span className="mistake-category-tag"><Tag size={12} /> {item.question.category}</span>
        )}
      </div>
      <p className="mistake-question">{item.question.question}</p>
      <p className="mistake-your-answer">
        {item.isSkipped ? (
          <span style={{ color: 'var(--text-dim)' }}>Nessuna risposta data</span>
        ) : (
          <>La tua risposta: <span style={{ color: item.isCorrect ? 'var(--correct)' : 'var(--incorrect)', fontWeight: 600 }}>{yourAnswerText}</span></>
        )}
      </p>
      {!item.isCorrect && (
        <p className="mistake-correct-answer">
          Corretta: <span style={{ color: 'var(--correct)', fontWeight: 600 }}>{correctAnswerText}</span>
        </p>
      )}
      {item.question.explanation && (
        <div className="mistake-explanation">
          <Lightbulb size={14} style={{ color: 'var(--warning)', flexShrink: 0 }} />
          <p>{item.question.explanation}</p>
        </div>
      )}
    </li>
  );
}

export function ResultsView({ activeEngine, onBackToHub }: ResultsViewProps) {
  const [showAll, setShowAll] = useState(false);
  const isTimedMode = activeEngine.getConfig().mode === 'quiz_timed';
  const isStudyMode = activeEngine.getConfig().mode === 'study';
  const score = activeEngine.getScore();
  const total = activeEngine.getTotalQuestions();
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const data = activeEngine.getStatisticsData();
  const avgTime = data.timeSpentPerQuestion.length > 0
    ? Math.round((data.timeSpentPerQuestion.reduce((a, b) => a + b, 0) / data.timeSpentPerQuestion.length) * 10) / 10
    : 0;
  const sessionIQ = !isStudyMode
    ? StatisticsManager.calculateSessionIQ(activeEngine.getConfig().mode, data.resultsPerQuestion, data.timeSpentPerQuestion)
    : null;

  const scoreColor = percentage >= 60 ? 'var(--correct)' : 'var(--incorrect)';

  const detailed = activeEngine.getDetailedResults();
  const mistakes = detailed.filter((d) => !d.isCorrect);

  const categoryBreakdown = activeEngine.getCategoryBreakdown();
  const categoryEntries = Object.entries(categoryBreakdown)
    .map(([label, s]) => ({ label, total: s.total, correct: s.correct, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0 }))
    .sort((a, b) => a.pct - b.pct);
  const weakest = categoryEntries[0] ?? null;
  const strongest = categoryEntries[categoryEntries.length - 1] ?? null;

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto' }}>
      <PageNav onBack={onBackToHub} backLabel="Torna all'Hub" onDashboard={onBackToHub} />
      <div className="results-view modern-card">
      <Award size={56} style={{ color: scoreColor, marginBottom: '0.5rem', filter: `drop-shadow(0 0 16px ${scoreColor})` }} />
      <h2>{isTimedMode ? 'Simulazione Terminata!' : 'Sessione Completata!'}</h2>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0 2rem' }}>
        <GaugeRing value={percentage} color={scoreColor} size={170}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 800, color: scoreColor }}>{percentage}%</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>{score} / {total} corrette</span>
        </GaugeRing>
      </div>

      <div className="kpi-row" style={{ gridTemplateColumns: sessionIQ !== null ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)' }}>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><CheckCircle2 size={13} /> Punteggio</span>
          <span className="kpi-value" style={{ color: scoreColor }}>{score}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>/{total}</span></span>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Clock3 size={13} /> Tempo Medio</span>
          <span className="kpi-value">{avgTime}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>s</span></span>
        </div>
        {sessionIQ !== null && (
          <div className="modern-card kpi-card">
            <span className="kpi-label"><Gauge size={13} /> QI Sessione</span>
            <span className="kpi-value" style={{ color: 'var(--warning)' }}>{sessionIQ}</span>
          </div>
        )}
      </div>

      {categoryEntries.length > 1 && (
        <div className="category-stats-section">
          <h3 style={{ borderBottom: '2px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>Statistiche per Argomento</h3>
          <div className="category-bars">
            {categoryEntries.map((c) => (
              <div key={c.label} className="category-bar-row">
                <div className="category-bar-label">
                  <span>{c.label}</span>
                  <span>{c.correct}/{c.total} ({c.pct}%)</span>
                </div>
                <div className="category-bar-track">
                  <div className="category-bar-fill" style={{ width: `${c.pct}%`, background: c.pct >= 60 ? 'var(--correct)' : 'var(--incorrect)' }} />
                </div>
              </div>
            ))}
          </div>
          {weakest && strongest && weakest.label !== strongest.label && (
            <div className="category-advice">
              <div className="insight-item tone-warning">
                <span className="insight-icon"><AlertTriangle size={16} /></span>
                <span>Il tuo punto debole è <strong>{weakest.label}</strong> ({weakest.pct}% corrette): ripassalo con priorità.</span>
              </div>
              <div className="insight-item tone-positive">
                <span className="insight-icon"><Sparkles size={16} /></span>
                <span>Sei più forte in <strong>{strongest.label}</strong> ({strongest.pct}% corrette): continua così!</span>
              </div>
            </div>
          )}
        </div>
      )}

      {mistakes.length > 0 && (
        <div className="mistakes-section">
          <h3 style={{ borderBottom: '2px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>Errori da Ripassare ({mistakes.length})</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {mistakes.map((m, i) => (
              <ReviewItem key={i} item={m} index={detailed.indexOf(m)} />
            ))}
          </ul>
        </div>
      )}

      <button className="btn-secondary" onClick={() => setShowAll((s) => !s)} style={{ marginTop: '1.5rem' }}>
        {showAll ? <>Nascondi tutte le domande <ChevronUp size={16} /></> : <>Rivedi tutte le domande <ChevronDown size={16} /></>}
      </button>

      {showAll && (
        <div className="mistakes-section">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {detailed.map((d, i) => (
              <ReviewItem key={i} item={d} index={i} />
            ))}
          </ul>
        </div>
      )}

      <button className="btn-primary" onClick={onBackToHub} style={{ marginTop: '2rem' }}>
        <CheckCircle2 size={20} /> Torna all'Hub
      </button>
      </div>
    </div>
  );
}
