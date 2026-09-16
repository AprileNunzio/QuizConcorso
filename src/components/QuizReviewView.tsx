import { Award, CheckCircle2, Sparkles, AlertTriangle } from 'lucide-react';
import type { QuizSessionResult } from '../services/StatisticsManager';
import type { DetailedResult } from '../services/QuizEngine';
import type { Question } from '../types';
import { PageNav } from './PageNav';
import { ReviewItem } from './ResultsView';

interface QuizReviewViewProps {
  session: QuizSessionResult;
  allQuestions: Question[];
  onBack: () => void;
}

export function QuizReviewView({ session, allQuestions, onBack }: QuizReviewViewProps) {
  const hasReviewData = !!session.questionIds && !!session.selectedAnswerIds;
  const dateLabel = new Date(session.date).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

  if (!hasReviewData) {
    return (
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <PageNav onBack={onBack} backLabel="Torna Indietro" onDashboard={onBack} />
        <div className="results-view modern-card">
          <h2>Revisione non disponibile</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Questa sessione ({dateLabel}) è stata completata prima dell'introduzione della revisione domanda per domanda, quindi non può essere mostrata nel dettaglio.
          </p>
          <button className="btn-primary" onClick={onBack} style={{ marginTop: '1.5rem' }}>
            <CheckCircle2 size={20} /> Torna Indietro
          </button>
        </div>
      </div>
    );
  }

  const byId = new Map(allQuestions.map((q) => [q.id, q]));
  const items: DetailedResult[] = session.questionIds!
    .map((id, i) => {
      const q = byId.get(id);
      if (!q) return null;
      const selectedOptionId = session.selectedAnswerIds![i];
      return {
        question: q,
        selectedOptionId,
        isCorrect: selectedOptionId === q.correctAnswerId,
        isSkipped: selectedOptionId == null,
      } as DetailedResult;
    })
    .filter((x): x is DetailedResult => x !== null);

  const missingCount = session.questionIds!.length - items.length;
  const percentage = session.totalQuestions > 0 ? Math.round((session.correctAnswers / session.totalQuestions) * 100) : 0;
  const scoreColor = percentage >= 60 ? 'var(--correct)' : 'var(--incorrect)';

  const categoryEntries = session.categoryBreakdown
    ? Object.entries(session.categoryBreakdown)
      .map(([label, s]) => ({ label, total: s.total, correct: s.correct, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0 }))
      .sort((a, b) => a.pct - b.pct)
    : [];
  const weakest = categoryEntries[0] ?? null;
  const strongest = categoryEntries[categoryEntries.length - 1] ?? null;

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto' }}>
      <PageNav
        onBack={onBack}
        backLabel="Torna Indietro"
        onDashboard={onBack}
        crumb={`Revisione · ${session.subjectName || 'Sessione'} · ${dateLabel}`}
      />
      <div className="results-view modern-card">
        <Award size={48} style={{ color: scoreColor, marginBottom: '0.5rem' }} />
        <h2>Revisione Sessione</h2>
        <p style={{ color: 'var(--text-muted)' }}>
          {dateLabel} · {session.correctAnswers}/{session.totalQuestions} corrette ({percentage}%)
        </p>

        {missingCount > 0 && (
          <p style={{ color: 'var(--warning)', fontSize: '0.85rem' }}>
            {missingCount} domande di questa sessione non sono più presenti nella Master Bank e non possono essere mostrate.
          </p>
        )}

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
                  <span>Punto debole: <strong>{weakest.label}</strong> ({weakest.pct}% corrette).</span>
                </div>
                <div className="insight-item tone-positive">
                  <span className="insight-icon"><Sparkles size={16} /></span>
                  <span>Punto forte: <strong>{strongest.label}</strong> ({strongest.pct}% corrette).</span>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mistakes-section">
          <h3 style={{ borderBottom: '2px solid var(--border-hairline)', paddingBottom: '0.5rem' }}>Tutte le Domande ({items.length})</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map((item, i) => (
              <ReviewItem key={i} item={item} index={i} />
            ))}
          </ul>
        </div>

        <button className="btn-primary" onClick={onBack} style={{ marginTop: '2rem' }}>
          <CheckCircle2 size={20} /> Torna Indietro
        </button>
      </div>
    </div>
  );
}
