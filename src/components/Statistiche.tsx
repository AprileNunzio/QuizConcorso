import {
  Activity, Award, Target, Flame, Clock3, TrendingUp, TrendingDown, Minus, Timer, Zap,
  Sparkles, AlertTriangle, Info, CalendarDays, BarChart3, Radar as RadarIcon,
} from 'lucide-react';
import type { UserStatistics, UserAnalytics } from '../services/StatisticsManager';
import { GaugeRing } from './charts/GaugeRing';
import { LineChart } from './charts/LineChart';
import { RadarChart } from './charts/RadarChart';
import { RankingBars } from './charts/RankingBars';
import { ActivityHeatmap } from './charts/ActivityHeatmap';
import { PageNav } from './PageNav';

interface StatisticheProps {
  userStats: UserStatistics;
  analytics: UserAnalytics;
  onBack: () => void;
}

const insightIcon = (tone: 'positive' | 'warning' | 'info') => {
  if (tone === 'positive') return <Sparkles size={16} />;
  if (tone === 'warning') return <AlertTriangle size={16} />;
  return <Info size={16} />;
};

export function Statistiche({ userStats, analytics, onBack }: StatisticheProps) {
  const hasHistory = userStats.history.length > 0;

  return (
    <div className="dashboard">
      <PageNav onBack={onBack} backLabel="Torna all'Hub" onDashboard={onBack} crumb="Dashboard / Statistiche" />

      <header className="modern-header" style={{ marginBottom: '1rem' }}>
        <Activity size={34} className="icon-logo" />
        <h1>Statistiche Avanzate</h1>
        <p>Analisi dettagliata del tuo percorso di preparazione</p>
      </header>

      <div className="stats-grid">
        <div className="modern-card stat-card iq-card">
          <span className="eyebrow">Il tuo Quoziente Intellettivo</span>
          <div style={{ margin: '0.5rem 0' }}>
            <GaugeRing value={Math.min(155, userStats.globalIQ)} max={155} color="var(--warning)" size={140}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.1rem', fontWeight: 800, color: 'var(--warning)' }}>{userStats.globalIQ}</span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>media della popolazione: 100</span>
            </GaugeRing>
          </div>
          {analytics.iqDelta !== 0 && (
            <span className={`kpi-delta ${analytics.iqDelta > 0 ? 'up' : 'down'}`}>
              {analytics.iqDelta > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {analytics.iqDelta > 0 ? '+' : ''}{analytics.iqDelta} pt recenti
            </span>
          )}
        </div>

        <div className="stats-details">
          <div className="modern-card stat-card">
            <span className="eyebrow"><Award size={12} style={{ verticalAlign: '-2px' }} /> Quiz Totali</span>
            <div className="stat-value">{userStats.totalQuizzesTaken}</div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.cumulativeQuizzesTrend.map((d) => d.value)} labels={analytics.cumulativeQuizzesTrend.map((d) => d.label)} color="var(--primary)" fillId="sprkQuizzes" height={32} />
            </div>
          </div>
          <div className="modern-card stat-card">
            <span className="eyebrow"><Target size={12} style={{ verticalAlign: '-2px' }} /> Precisione</span>
            <div className="stat-value" style={{ color: analytics.accuracy >= 70 ? 'var(--correct)' : 'var(--incorrect)' }}>
              {analytics.accuracy}%
            </div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.accuracyTrend.map((d) => d.value)} labels={analytics.accuracyTrend.map((d) => d.label)} color="var(--correct)" fillId="sprkAcc" min={0} max={100} height={32} />
            </div>
          </div>
          <div className="modern-card stat-card">
            <span className="eyebrow"><Flame size={12} style={{ verticalAlign: '-2px' }} /> Streak Studio</span>
            <div className="stat-value">{analytics.studyStreakDays}gg</div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.dailyActivityTrend.map((d) => d.value)} labels={analytics.dailyActivityTrend.map((d) => d.label)} color="var(--warning)" fillId="sprkActivity" min={0} max={1} height={32} showDots={false} />
            </div>
          </div>
          <div className="modern-card stat-card">
            <span className="eyebrow"><Clock3 size={12} style={{ verticalAlign: '-2px' }} /> Tempo/Domanda</span>
            <div className="stat-value" style={{ fontSize: '2.2rem' }}>{analytics.avgResponseTimeSec}s</div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.responseTimeTrend.map((d) => d.value)} labels={analytics.responseTimeTrend.map((d) => d.label)} color="var(--primary-2)" fillId="sprkTime" height={32} />
            </div>
          </div>
          <div className="modern-card stat-card">
            <span className="eyebrow"><Timer size={12} style={{ verticalAlign: '-2px' }} /> Tempo Totale</span>
            <div className="stat-value" style={{ fontSize: '2.2rem' }}>{analytics.totalTimeSpentMinutes}m</div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.cumulativeTimeTrend.map((d) => d.value)} labels={analytics.cumulativeTimeTrend.map((d) => d.label)} color="var(--primary)" fillId="sprkTotalTime" height={32} />
            </div>
          </div>
          <div className="modern-card stat-card">
            <span className="eyebrow"><Zap size={12} style={{ verticalAlign: '-2px' }} /> Miglior Serie</span>
            <div className="stat-value" style={{ fontSize: '2.2rem' }}>{analytics.bestAnswerStreak}</div>
            <div className="stat-sparkline">
              <LineChart compact data={analytics.streakTrend.map((d) => d.value)} labels={analytics.streakTrend.map((d) => d.label)} color="var(--incorrect)" fillId="sprkStreak" height={32} />
            </div>
          </div>
        </div>
      </div>

      {!hasHistory ? (
        <div className="modern-card empty-state">
          <Activity size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
          <p>Nessun dato ancora disponibile. Completa il tuo primo quiz per sbloccare l'analisi completa.</p>
        </div>
      ) : (
        <>
          <div className="panel-grid">
            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Andamento</span>
                  <h3>QI per Sessione</h3>
                </div>
                <BarChart3 size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <LineChart data={analytics.iqTrend.map((d) => d.value)} labels={analytics.iqTrend.map((d) => d.label)} color="var(--warning)" fillId="iqFill" min={70} max={155} />
            </div>

            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Auto-analisi</span>
                  <h3>Insight</h3>
                </div>
              </div>
              <div className="insight-list">
                {analytics.insights.map((insight, i) => (
                  <div key={i} className={`insight-item tone-${insight.tone}`}>
                    <span className="insight-icon">{insightIcon(insight.tone)}</span>
                    <span>{insight.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel-grid tri">
            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Andamento</span>
                  <h3>Precisione per Sessione</h3>
                </div>
              </div>
              <LineChart data={analytics.accuracyTrend.map((d) => d.value)} labels={analytics.accuracyTrend.map((d) => d.label)} color="var(--correct)" fillId="accFillBig" min={0} max={100} height={130} />
            </div>

            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Velocità</span>
                  <h3>Tempo di Risposta</h3>
                </div>
              </div>
              <LineChart data={analytics.responseTimeTrend.map((d) => d.value)} labels={analytics.responseTimeTrend.map((d) => d.label)} color="var(--primary-2)" fillId="timeFillBig" height={130} />
            </div>

            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Concentrazione</span>
                  <h3>Serie di Risposte</h3>
                </div>
              </div>
              <LineChart data={analytics.streakTrend.map((d) => d.value)} labels={analytics.streakTrend.map((d) => d.label)} color="var(--incorrect)" fillId="streakFillBig" min={0} height={130} />
            </div>
          </div>

          <div className="panel-grid">
            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Copertura</span>
                  <h3>Radar per Materia</h3>
                </div>
                <RadarIcon size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <RadarChart data={analytics.subjectRadar} />
            </div>

            <div className="modern-card">
              <div className="panel-title">
                <div>
                  <span className="eyebrow">Da consolidare</span>
                  <h3>Aree di Miglioramento</h3>
                </div>
                <Minus size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <RankingBars data={analytics.subjectRanking} />
            </div>
          </div>

          <div className="modern-card" style={{ marginBottom: '1.1rem' }}>
            <div className="panel-title">
              <div>
                <span className="eyebrow">Costanza</span>
                <h3>Attività Recente</h3>
              </div>
              <CalendarDays size={18} style={{ color: 'var(--text-dim)' }} />
            </div>
            <ActivityHeatmap dates={analytics.activityDates} />
          </div>

          <div className="modern-card">
            <div className="panel-title">
              <div>
                <span className="eyebrow">Storico</span>
                <h3>Ultime Sessioni</h3>
              </div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="sessions-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Materia</th>
                    <th>Modalità</th>
                    <th>Risultato</th>
                    <th>QI</th>
                  </tr>
                </thead>
                <tbody>
                  {[...userStats.history].reverse().slice(0, 10).map((s) => (
                    <tr key={s.id}>
                      <td>{new Date(s.date).toLocaleDateString('it-IT')}</td>
                      <td className="strong">{s.subjectName || '—'}</td>
                      <td><span className="mode-tag">{s.mode.replace('_', ' ')}</span></td>
                      <td className="strong">{s.correctAnswers}/{s.totalQuestions}</td>
                      <td style={{ color: s.mode === 'study' ? 'var(--text-dim)' : 'var(--warning)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                        {s.mode === 'study' ? '—' : s.sessionIQ}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
