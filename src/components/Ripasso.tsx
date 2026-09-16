import { useState } from 'react';
import { Zap, CalendarClock, Sparkles, Award, Gauge, Database, Play, History } from 'lucide-react';
import type { Question } from '../types';
import type { UserStatistics } from '../services/StatisticsManager';
import { WeaknessTracker } from '../services/WeaknessTracker';
import { PageNav } from './PageNav';
import { MasteryBar } from './charts/MasteryBar';
import { ForecastBars } from './charts/ForecastBars';

const SESSION_CAP = 30;

interface RipassoProps {
  allQuestions: Question[];
  userStats: UserStatistics;
  onBack: () => void;
  onStartReview: (includeNew: boolean, limit: number) => void;
}

export function Ripasso({ allQuestions, userStats, onBack, onStartReview }: RipassoProps) {
  const [includeNew, setIncludeNew] = useState(true);
  const [newPerDay, setNewPerDay] = useState(() => WeaknessTracker.getNewPerDaySetting());

  const totalInBank = allQuestions.length;
  const dueCount = WeaknessTracker.getDueCount();
  const tracked = WeaknessTracker.totalTracked();
  const distribution = WeaknessTracker.getMasteryDistribution(totalInBank);
  const avgEase = WeaknessTracker.getAverageEase();
  const forecast = WeaknessTracker.getForecast(14);

  const previewPool = totalInBank > 0
    ? WeaknessTracker.buildReviewPool(allQuestions, { limit: SESSION_CAP, includeNew })
    : [];

  const reviewHistory = [...userStats.history].reverse().filter((h) => h.subjectName === 'Ripasso Intelligente').slice(0, 10);

  const handleNewPerDayChange = (value: number) => {
    setNewPerDay(value);
    WeaknessTracker.setNewPerDaySetting(value);
  };

  return (
    <div className="dashboard">
      <PageNav onDashboard={onBack} crumb="Dashboard / Ripasso Intelligente" />

      <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
        <Zap size={34} className="icon-logo" style={{ color: 'var(--incorrect)' }} />
        <h2>Ripasso Intelligente</h2>
        <p>Ripetizione dilazionata (spaced repetition, algoritmo SM-2): ogni domanda torna a farsi vedere proprio quando stai per dimenticarla.</p>
      </header>

      <div className="kpi-row">
        <div className="modern-card kpi-card">
          <span className="kpi-label"><CalendarClock size={13} /> Da Ripassare Oggi</span>
          <span className="kpi-value" style={{ color: dueCount > 0 ? 'var(--incorrect)' : 'var(--correct)' }}>{dueCount}</span>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Sparkles size={13} /> Nuove Disponibili</span>
          <span className="kpi-value">{distribution.new}</span>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Award size={13} /> Padroneggiate</span>
          <span className="kpi-value" style={{ color: 'var(--correct)' }}>{distribution.mastered}</span>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Gauge size={13} /> Fattore Facilità</span>
          <span className="kpi-value">{avgEase}</span>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Database size={13} /> Tracciate</span>
          <span className="kpi-value">{tracked}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>/{totalInBank}</span></span>
        </div>
      </div>

      <div className="panel-grid">
        <div className="modern-card">
          <div className="panel-title">
            <div>
              <span className="eyebrow">Distribuzione</span>
              <h3>Livelli di Padronanza</h3>
            </div>
          </div>
          <MasteryBar distribution={distribution} />
        </div>

        <div className="modern-card">
          <div className="panel-title">
            <div>
              <span className="eyebrow">Prossimi 14 giorni</span>
              <h3>Carico di Ripasso Previsto</h3>
            </div>
          </div>
          <ForecastBars data={forecast} />
        </div>
      </div>

      <div className="modern-card" style={{ marginBottom: '1.1rem' }}>
        <div className="panel-title">
          <div>
            <span className="eyebrow">Configura</span>
            <h3>Avvia una Sessione</h3>
          </div>
          <Play size={18} style={{ color: 'var(--text-dim)' }} />
        </div>

        <div className="review-settings-row">
          <label className="review-setting">
            <input type="checkbox" checked={includeNew} onChange={(e) => setIncludeNew(e.target.checked)} />
            Includi domande nuove
          </label>
          <label className="review-setting">
            Nuove al giorno:
            <input
              type="number"
              min={0}
              max={50}
              value={newPerDay}
              onChange={(e) => handleNewPerDayChange(Number(e.target.value))}
              disabled={!includeNew}
            />
          </label>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: '0 0 1rem' }}>
          {previewPool.length > 0
            ? `La sessione includerà ${previewPool.length} domande: le scadute vengono ripassate per prime, poi le più deboli${includeNew ? ', poi le nuove.' : '.'}`
            : 'Nessuna domanda disponibile per una sessione in questo momento. Fai qualche quiz normale per iniziare a costruire il tuo storico.'}
        </p>

        <button className="btn-warning" disabled={previewPool.length === 0} onClick={() => onStartReview(includeNew, SESSION_CAP)}>
          <Zap size={20} /> Avvia Ripasso ({previewPool.length} domande)
        </button>
      </div>

      {reviewHistory.length > 0 && (
        <div className="modern-card">
          <div className="panel-title">
            <div>
              <span className="eyebrow">Storico</span>
              <h3>Ultime Sessioni di Ripasso</h3>
            </div>
            <History size={18} style={{ color: 'var(--text-dim)' }} />
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="sessions-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Risultato</th>
                  <th>QI Sessione</th>
                </tr>
              </thead>
              <tbody>
                {reviewHistory.map((s) => (
                  <tr key={s.id}>
                    <td>{new Date(s.date).toLocaleDateString('it-IT')}</td>
                    <td className="strong">{s.correctAnswers}/{s.totalQuestions}</td>
                    <td style={{ color: 'var(--warning)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{s.sessionIQ}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
