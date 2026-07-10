import {
  GraduationCap, BookOpen, Activity, Landmark, Users, Clock, DownloadCloud,
  Target, Flame, Percent, Brain, Zap, TrendingUp, AlertTriangle,
} from 'lucide-react';
import type { ConcorsoIndex } from '../types';
import type { UserStatistics, UserAnalytics } from '../services/StatisticsManager';
import { renderIcon } from './icons';
import { LineChart } from './charts/LineChart';

interface HomeHubProps {
  concorsi: ConcorsoIndex[];
  quote: string;
  userStats: UserStatistics;
  analytics: UserAnalytics;
  dueCount: number;
  onSelectConcorso: (id: string) => void;
  onGoAllenamento: () => void;
  onGoStatistiche: () => void;
  onGoRipasso: () => void;
  updateAvailable: any;
  onInstallUpdate: () => void;
  onDismissUpdate: () => void;
}

export function HomeHub({
  concorsi, quote, userStats, analytics, dueCount,
  onSelectConcorso, onGoAllenamento, onGoStatistiche, onGoRipasso,
  updateAvailable, onInstallUpdate, onDismissUpdate,
}: HomeHubProps) {
  return (
    <div className="dashboard">
      <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
        <GraduationCap size={32} className="icon-logo" />
        <h1>Quiz &amp; Concorsi Hub</h1>
        <p className="app-version-credit">v{__APP_VERSION__} &middot; by Aprile Nunzio (NunzioTech)</p>
        <div className="motivational-quote">
          <p>&ldquo;{quote}&rdquo;</p>
        </div>
      </header>

      <div className="kpi-row">
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Brain size={13} /> Il Tuo QI</span>
          <span className="kpi-value" style={{ color: 'var(--warning)' }}>{userStats.globalIQ}</span>
          <div className="kpi-sparkline">
            <LineChart compact data={analytics.iqTrend.map((d) => d.value)} color="var(--warning)" fillId="hkIq" min={70} max={155} height={26} />
          </div>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Target size={13} /> Precisione Media</span>
          <span className="kpi-value">{analytics.accuracy}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>%</span></span>
          <div className="kpi-sparkline">
            <LineChart compact data={analytics.accuracyTrend.map((d) => d.value)} color="var(--correct)" fillId="hkAcc" min={0} max={100} height={26} />
          </div>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Percent size={13} /> Quiz Completati</span>
          <span className="kpi-value">{userStats.totalQuizzesTaken}</span>
          <div className="kpi-sparkline">
            <LineChart compact data={analytics.cumulativeQuizzesTrend.map((d) => d.value)} color="var(--primary)" fillId="hkQuizzes" height={26} />
          </div>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Flame size={13} /> Streak di Studio</span>
          <span className="kpi-value" style={{ color: analytics.studyStreakDays > 0 ? 'var(--correct)' : undefined }}>
            {analytics.studyStreakDays}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>gg</span>
          </span>
          <div className="kpi-sparkline">
            <LineChart compact showDots={false} data={analytics.dailyActivityTrend.map((d) => d.value)} color="var(--warning)" fillId="hkActivity" min={0} max={1} height={26} />
          </div>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Zap size={13} /> Miglior Serie</span>
          <span className="kpi-value">{analytics.bestAnswerStreak}</span>
          <div className="kpi-sparkline">
            <LineChart compact data={analytics.streakTrend.map((d) => d.value)} color="var(--incorrect)" fillId="hkStreak" min={0} height={26} />
          </div>
        </div>
        <div className="modern-card kpi-card">
          <span className="kpi-label"><Clock size={13} /> Tempo Investito</span>
          <span className="kpi-value">{analytics.totalTimeSpentMinutes}<span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>m</span></span>
          <div className="kpi-sparkline">
            <LineChart compact data={analytics.cumulativeTimeTrend.map((d) => d.value)} color="var(--primary)" fillId="hkTime" height={26} />
          </div>
        </div>
      </div>

      {userStats.totalQuizzesTaken > 0 && (
        <div className="panel-grid">
          <div className="modern-card">
            <div className="panel-title">
              <div>
                <span className="eyebrow">Ultime sessioni</span>
                <h3>Andamento Recente</h3>
              </div>
              <TrendingUp size={18} style={{ color: 'var(--text-dim)' }} />
            </div>
            <LineChart
              data={analytics.accuracyTrend.map((d) => d.value)}
              labels={analytics.accuracyTrend.map((d) => d.label)}
              color="var(--primary)"
              fillId="homeAccFill"
              min={0}
              max={100}
              height={120}
            />
          </div>

          <div className="modern-card">
            <div className="panel-title">
              <div>
                <span className="eyebrow">Priorità</span>
                <h3>Materie da Ripassare</h3>
              </div>
              <AlertTriangle size={18} style={{ color: 'var(--text-dim)' }} />
            </div>
            {analytics.subjectRanking.length === 0 ? (
              <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>Nessun dato per materia ancora disponibile.</p>
            ) : (
              <div className="mini-list">
                {analytics.subjectRanking.slice(0, 4).map((s) => (
                  <div key={s.label} className="mini-list-row">
                    <span className="name">{s.label}</span>
                    <span className="value" style={{ color: s.value >= 60 ? 'var(--correct)' : 'var(--incorrect)' }}>{s.value}%</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="topics-grid" style={{ marginBottom: '1.1rem' }}>
        <div className="modern-card topic-card" style={{ borderTop: '4px solid var(--primary)', cursor: 'pointer' }} onClick={onGoAllenamento}>
          <div>
            <div className="topic-card-header">
              <div className="topic-icon" style={{ color: 'var(--correct)' }}><BookOpen size={24} /></div>
              <h2>Allenamento Libero</h2>
            </div>
            <p>Esplora l'intera Master Bank. Scegli la materia e definisci quanti quiz affrontare.</p>
          </div>
          <button className="btn-secondary">Esplora Materie</button>
        </div>

        <div className="modern-card topic-card iq-card" style={{ cursor: 'pointer' }} onClick={onGoStatistiche}>
          <div>
            <div className="topic-card-header">
              <div className="topic-icon" style={{ color: 'var(--warning)' }}><Activity size={24} /></div>
              <h2>Statistiche &amp; QI</h2>
            </div>
            <p>Trend, radar per materia, heatmap di attività e insight generati automaticamente.</p>
          </div>
          <button className="btn-secondary">Apri Dashboard</button>
        </div>

        <div
          className="modern-card topic-card"
          style={{ borderTop: '4px solid var(--incorrect)', cursor: 'pointer' }}
          onClick={onGoRipasso}
        >
          <div>
            <div className="topic-card-header">
              <div className="topic-icon" style={{ color: 'var(--incorrect)' }}><Zap size={24} /></div>
              <h2>Ripasso Intelligente</h2>
            </div>
            <p>
              {dueCount > 0
                ? `${dueCount} domande sono scadute per il ripasso oggi (spaced repetition). Il motore le riordina per te.`
                : 'Sistema di ripetizione dilazionata: pianifica il ripasso in base a cosa stai per dimenticare.'}
            </p>
          </div>
          <button className="btn-warning">
            {dueCount > 0 ? `Ripassa ${dueCount} Domande` : 'Apri Ripasso Intelligente'}
          </button>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">Bandi ufficiali</span>
          <h3>I Tuoi Percorsi Ufficiali</h3>
        </div>
      </div>

      <div className="topics-grid" style={{ marginBottom: '1.1rem' }}>
        {concorsi.map((concorso) => (
          <div key={concorso.id} className="topic-card modern-card">
            <div>
              <div className="topic-card-header">
                <div className="topic-icon">
                  {renderIcon(concorso.icon)}
                </div>
                <h2>{concorso.title}</h2>
              </div>
              <p>{concorso.description}</p>
              <div className="concorso-meta">
                {concorso.ente && <span className="meta-badge"><Landmark size={14} /> {concorso.ente}</span>}
                {concorso.posti_disponibili && <span className="meta-badge"><Users size={14} /> {concorso.posti_disponibili}</span>}
                {concorso.durata_prova_minuti && <span className="meta-badge"><Clock size={14} /> {concorso.durata_prova_minuti} min</span>}
              </div>
            </div>
            <button className="btn-primary" onClick={() => onSelectConcorso(concorso.id)}>
              Accedi al Concorso
            </button>
          </div>
        ))}
      </div>

      {updateAvailable && (
        <div className="update-toast">
          <div className="update-toast-content">
            <DownloadCloud size={24} className="icon-logo" style={{ color: 'white', marginBottom: 0 }} />
            <div>
              <strong>Aggiornamento Pronto!</strong>
              <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>
                {updateAvailable?.version ? `La versione ${updateAvailable.version} è ` : 'Una nuova versione è '}
                stata scaricata. Vuoi installarla ora?
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
            <button className="btn-secondary" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.4)', padding: '0.5rem 1rem' }} onClick={onDismissUpdate}>
              Più Tardi
            </button>
            <button className="btn-secondary" style={{ color: 'var(--primary)', padding: '0.5rem 1rem' }} onClick={onInstallUpdate}>
              Riavvia Ora
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
