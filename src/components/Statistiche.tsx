import { useState } from 'react';
import {
  Activity, Award, Target, Flame, Clock3, TrendingUp, TrendingDown,
  Timer, Zap, Sparkles, AlertTriangle, Info, CalendarDays, BarChart3,
  Radar as RadarIcon, Eye, CheckCircle2, ShieldCheck, Gauge, Layers
} from 'lucide-react';
import type { UserStatistics, UserAnalytics, QuizSessionResult } from '../services/StatisticsManager';
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
  onReviewSession: (session: QuizSessionResult) => void;
}

const insightIcon = (tone: 'positive' | 'warning' | 'info') => {
  if (tone === 'positive') return <Sparkles size={16} />;
  if (tone === 'warning') return <AlertTriangle size={16} />;
  return <Info size={16} />;
};

export function Statistiche({ userStats, analytics, onBack, onReviewSession }: StatisticheProps) {
  const [activeTab, setActiveTab] = useState<'panoramica' | 'materie' | 'storico'>('panoramica');
  const hasHistory = userStats.history.length > 0;
  const passProb = analytics.passProbability;

  return (
    <div className="dashboard">
      <PageNav onBack={onBack} backLabel="Torna all'Hub" onDashboard={onBack} crumb="Dashboard / Statistiche" />

      <header className="modern-header" style={{ marginBottom: '1.25rem' }}>
        <Activity size={36} className="icon-logo" />
        <h1>Centro Analitico &amp; Statistiche</h1>
        <p>Monitoraggio predittivo delle prestazioni, probabilità di superamento e padronanza materie.</p>
      </header>

      <div className="panel-grid" style={{ gridTemplateColumns: 'minmax(280px, 340px) 1fr', marginBottom: '1.5rem', gap: '1.25rem' }}>
        <div className="modern-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.75rem 1.25rem' }}>
          <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)' }}>
            <ShieldCheck size={14} /> Probabilità Idoneità Concorso
          </span>
          <div style={{ margin: '1rem 0' }}>
            <GaugeRing
              value={passProb.probabilityPct}
              max={100}
              color={passProb.probabilityPct >= 70 ? 'var(--correct)' : passProb.probabilityPct >= 50 ? 'var(--warning)' : 'var(--incorrect)'}
              size={155}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 800 }}>
                {passProb.probabilityPct}%
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                Livello {passProb.readinessLevel}
              </span>
            </GaugeRing>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', width: '100%', borderTop: '1px solid var(--border-hairline)', paddingTop: '0.85rem' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Punteggio Stimato Preselettiva: <strong style={{ color: 'var(--text-main)' }}>{passProb.projectedPreselettivaScore} / 30</strong>
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              {passProb.confidenceInterval}
            </span>
          </div>
        </div>

        <div className="modern-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <div>
              <span className="eyebrow">Diagnostica Strategica</span>
              <h3 style={{ margin: '0.2rem 0 0' }}>Indicatori Prestazionali Chiave</h3>
            </div>
            {analytics.iqDelta !== 0 && (
              <span className={`kpi-delta ${analytics.iqDelta > 0 ? 'up' : 'down'}`} style={{ fontSize: '0.8rem' }}>
                {analytics.iqDelta > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {analytics.iqDelta > 0 ? '+' : ''}{analytics.iqDelta} pt QI recenti
              </span>
            )}
          </div>

          <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', margin: 0, gap: '0.85rem' }}>
            <div className="modern-card kpi-card" style={{ padding: '0.85rem' }}>
              <span className="kpi-label"><Target size={12} /> Precisione</span>
              <span className="kpi-value" style={{ fontSize: '1.45rem', color: analytics.accuracy >= 70 ? 'var(--correct)' : 'var(--incorrect)' }}>
                {analytics.accuracy}%
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>su {userStats.totalQuestionsAnswered} risposte</span>
            </div>

            <div className="modern-card kpi-card" style={{ padding: '0.85rem' }}>
              <span className="kpi-label"><Gauge size={12} /> QI Globale</span>
              <span className="kpi-value" style={{ fontSize: '1.45rem', color: 'var(--warning)' }}>
                {userStats.globalIQ}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>media standard 100</span>
            </div>

            <div className="modern-card kpi-card" style={{ padding: '0.85rem' }}>
              <span className="kpi-label"><Clock3 size={12} /> Velocità Media</span>
              <span className="kpi-value" style={{ fontSize: '1.45rem', color: 'var(--accent-cyan)' }}>
                {analytics.avgResponseTimeSec}s
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>a quesito</span>
            </div>

            <div className="modern-card kpi-card" style={{ padding: '0.85rem' }}>
              <span className="kpi-label"><Flame size={12} /> Serie Attiva</span>
              <span className="kpi-value" style={{ fontSize: '1.45rem', color: 'var(--accent-amber)' }}>
                {analytics.studyStreakDays}gg
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>migliore: {analytics.bestAnswerStreak} risp.</span>
            </div>

            <div className="modern-card kpi-card" style={{ padding: '0.85rem' }}>
              <span className="kpi-label"><Timer size={12} /> Ore Studio</span>
              <span className="kpi-value" style={{ fontSize: '1.45rem' }}>
                {Math.round((analytics.totalTimeSpentMinutes / 60) * 10) / 10}h
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{analytics.totalTimeSpentMinutes} min tot</span>
            </div>
          </div>

          {analytics.insights.length > 0 && (
            <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {analytics.insights.slice(0, 2).map((insight, i) => (
                <div key={i} className={`insight-item tone-${insight.tone}`} style={{ margin: 0, padding: '0.65rem 0.95rem' }}>
                  <span className="insight-icon">{insightIcon(insight.tone)}</span>
                  <span style={{ fontSize: '0.85rem' }}>{insight.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="segmented-control" style={{ marginBottom: '1.5rem' }}>
        <button
          className={`segmented-pill ${activeTab === 'panoramica' ? 'active' : ''}`}
          onClick={() => setActiveTab('panoramica')}
        >
          <BarChart3 size={16} /> Andamento &amp; Ritmo
        </button>
        <button
          className={`segmented-pill ${activeTab === 'materie' ? 'active' : ''}`}
          onClick={() => setActiveTab('materie')}
        >
          <RadarIcon size={16} /> Radar Materie
        </button>
        <button
          className={`segmented-pill ${activeTab === 'storico' ? 'active' : ''}`}
          onClick={() => setActiveTab('storico')}
        >
          <CalendarDays size={16} /> Storico &amp; Revisioni
        </button>
      </div>

      {!hasHistory ? (
        <div className="modern-card empty-state">
          <Activity size={44} style={{ marginBottom: '1rem', opacity: 0.5, color: 'var(--primary)' }} />
          <h3>Nessun dato ancora registrato</h3>
          <p>Completa il tuo primo quiz per sbloccare i grafici analitici e le curve predittive.</p>
        </div>
      ) : (
        <>
          {activeTab === 'panoramica' && (
            <>
              <div className="panel-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="modern-card">
                  <div className="panel-title">
                    <div>
                      <span className="eyebrow">Progressione</span>
                      <h3>Curva QI per Sessione</h3>
                    </div>
                    <BarChart3 size={18} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <LineChart
                    data={analytics.iqTrend.map((d) => d.value)}
                    labels={analytics.iqTrend.map((d) => d.label)}
                    color="var(--warning)"
                    fillId="iqFill"
                    min={70}
                    max={155}
                    height={160}
                  />
                </div>

                <div className="modern-card">
                  <div className="panel-title">
                    <div>
                      <span className="eyebrow">Accuratezza</span>
                      <h3>Precisione (%) nel Tempo</h3>
                    </div>
                    <Target size={18} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <LineChart
                    data={analytics.accuracyTrend.map((d) => d.value)}
                    labels={analytics.accuracyTrend.map((d) => d.label)}
                    color="var(--correct)"
                    fillId="accFillBig"
                    min={0}
                    max={100}
                    height={160}
                  />
                </div>
              </div>

              <div className="panel-grid tri" style={{ marginBottom: '1.5rem' }}>
                <div className="modern-card">
                  <div className="panel-title">
                    <div>
                      <span className="eyebrow">Efficienza</span>
                      <h3>Secondi per Domanda</h3>
                    </div>
                    <Clock3 size={18} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <LineChart
                    data={analytics.responseTimeTrend.map((d) => d.value)}
                    labels={analytics.responseTimeTrend.map((d) => d.label)}
                    color="var(--accent-cyan)"
                    fillId="timeFillBig"
                    height={130}
                  />
                </div>

                <div className="modern-card">
                  <div className="panel-title">
                    <div>
                      <span className="eyebrow">Continuità</span>
                      <h3>Volume Quiz Cumulativo</h3>
                    </div>
                    <Award size={18} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <LineChart
                    data={analytics.cumulativeQuizzesTrend.map((d) => d.value)}
                    labels={analytics.cumulativeQuizzesTrend.map((d) => d.label)}
                    color="var(--primary)"
                    fillId="cumQuizzesFill"
                    height={130}
                  />
                </div>

                <div className="modern-card">
                  <div className="panel-title">
                    <div>
                      <span className="eyebrow">Focus</span>
                      <h3>Max Serie Risposte</h3>
                    </div>
                    <Zap size={18} style={{ color: 'var(--text-dim)' }} />
                  </div>
                  <LineChart
                    data={analytics.streakTrend.map((d) => d.value)}
                    labels={analytics.streakTrend.map((d) => d.label)}
                    color="var(--incorrect)"
                    fillId="streakFillBig"
                    height={130}
                  />
                </div>
              </div>
            </>
          )}

          {activeTab === 'materie' && (
            <div className="panel-grid" style={{ marginBottom: '1.5rem' }}>
              <div className="modern-card">
                <div className="panel-title">
                  <div>
                    <span className="eyebrow">Copertura Globale</span>
                    <h3>Radar Competitivo per Materia</h3>
                  </div>
                  <RadarIcon size={18} style={{ color: 'var(--text-dim)' }} />
                </div>
                <RadarChart data={analytics.subjectRadar} />
              </div>

              <div className="modern-card">
                <div className="panel-title">
                  <div>
                    <span className="eyebrow">Classifica e Aree di Miglioramento</span>
                    <h3>Graduatoria Padronanza per Materia</h3>
                  </div>
                  <Layers size={18} style={{ color: 'var(--text-dim)' }} />
                </div>
                <RankingBars data={analytics.subjectRanking} />
              </div>
            </div>
          )}

          {activeTab === 'storico' && (
            <>
              <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
                <div className="panel-title">
                  <div>
                    <span className="eyebrow">Costanza Temporale</span>
                    <h3>Frequenza Attività di Studio</h3>
                  </div>
                  <CalendarDays size={18} style={{ color: 'var(--text-dim)' }} />
                </div>
                <ActivityHeatmap dates={analytics.activityDates} />
              </div>

              <div className="modern-card">
                <div className="panel-title">
                  <div>
                    <span className="eyebrow">Archivio Completo</span>
                    <h3>Ultime Prove Svolte</h3>
                  </div>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="sessions-table">
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Materia / Concorso</th>
                        <th>Modalità</th>
                        <th>Esito</th>
                        <th>QI Sessione</th>
                        <th>Dettaglio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...userStats.history].reverse().slice(0, 15).map((s) => (
                        <tr key={s.id}>
                          <td>{new Date(s.date).toLocaleDateString('it-IT')}</td>
                          <td className="strong">{s.concorsoTitle || s.subjectName || 'Generale'}</td>
                          <td><span className="mode-tag">{s.mode.replace('_', ' ')}</span></td>
                          <td className="strong">
                            <span style={{ color: (s.correctAnswers / (s.totalQuestions || 1)) >= 0.7 ? 'var(--correct)' : 'var(--incorrect)' }}>
                              {s.correctAnswers}/{s.totalQuestions}
                            </span>
                          </td>
                          <td style={{ color: s.mode === 'study' ? 'var(--text-dim)' : 'var(--warning)', fontFamily: 'var(--font-mono)', fontWeight: 750 }}>
                            {s.mode === 'study' ? '—' : s.sessionIQ}
                          </td>
                          <td>
                            {s.questionIds && s.questionIds.length > 0 && (
                              <button className="session-review-btn" onClick={() => onReviewSession(s)} title="Rivedi quesiti ed errori">
                                <Eye size={14} /> Rivedi
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
