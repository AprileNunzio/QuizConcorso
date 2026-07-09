import { Award, CheckCircle2, Clock3, Gauge } from 'lucide-react';
import type { QuizEngine } from '../services/QuizEngine';
import { StatisticsManager } from '../services/StatisticsManager';
import { GaugeRing } from './charts/GaugeRing';
import { PageNav } from './PageNav';

interface ResultsViewProps {
  activeEngine: QuizEngine;
  onBackToHub: () => void;
}

export function ResultsView({ activeEngine, onBackToHub }: ResultsViewProps) {
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

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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

      {activeEngine.getMistakes().length > 0 && (
        <div className="mistakes-section">
          <h3 style={{ borderBottom: '2px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>Aree da Ripassare</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {activeEngine.getMistakes().map((q, i) => (
              <li key={i} className="mistake-item">
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600 }}>{q.question}</p>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Corretta: <span style={{ color: 'var(--correct)', fontWeight: 600 }}>
                    {q.options.find((o) => o.id === q.correctAnswerId)?.text}
                  </span>
                </p>
              </li>
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
