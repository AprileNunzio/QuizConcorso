import {
  GraduationCap, BookOpen, Activity, Landmark, Users, Clock,
  Target, Flame, Percent, Brain, Zap, TrendingUp, AlertTriangle,
  Database, RefreshCw, Layers
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
  totalQuestions: number;
  onOpenDbSync: () => void;
  onSelectConcorso: (id: string) => void;
  onGoAllenamento: () => void;
  onGoStatistiche: () => void;
  onGoRipasso: () => void;
  updateAvailable: any;
  onInstallUpdate: () => void;
  onDismissUpdate: () => void;
}

export function HomeHub({
  concorsi, quote, userStats, analytics, dueCount, totalQuestions,
  onOpenDbSync, onSelectConcorso, onGoAllenamento, onGoStatistiche, onGoRipasso,
  updateAvailable, onInstallUpdate, onDismissUpdate,
}: HomeHubProps) {
  return (
    <div className="dashboard">
      <header className="modern-header" style={{ marginBottom: '1.25rem' }}>
        <GraduationCap size={36} className="icon-logo" />
        <h1>Quiz &amp; Concorsi Platform</h1>
        <p className="app-version-credit">v{__APP_VERSION__} &middot; by Aprile Nunzio (NunzioTech)</p>
        <div className="motivational-quote">
          <p>&ldquo;{quote}&rdquo;</p>
        </div>
      </header>

      <div className="kpi-row">
        <div
          className="modern-card kpi-card modern-card-interactive"
          onClick={onOpenDbSync}
          title="Visualizza e sincronizza le banche dati"
        >
          <span className="kpi-label" style={{ color: 'var(--primary)' }}>
            <Database size={13} /> Archivio Domande
          </span>
          <span className="kpi-value" style={{ color: 'var(--primary)' }}>
            {totalQuestions > 0 ? totalQuestions.toLocaleString('it-IT') : '...'}
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <RefreshCw size={11} /> Sincronizza Banche Dati
          </span>
        </div>

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
                  <div key={s.subject} className="mini-list-row">
                    <span className="name">{s.subject}</span>
                    <span className="value" style={{ color: s.accuracy < 60 ? 'var(--incorrect)' : 'var(--warning)' }}>
                      {s.accuracy}%
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="section-heading">
        <div>
          <span className="eyebrow">Modalità d'allenamento</span>
          <h3>Studio &amp; Simulazione</h3>
        </div>
      </div>

      <div className="topics-grid" style={{ marginBottom: '1.5rem' }}>
        <div className="modern-card topic-card modern-card-interactive" onClick={onGoAllenamento}>
          <div className="card-accent-bar" />
          <div>
            <div className="topic-card-header">
              <div className="topic-icon"><BookOpen size={24} /></div>
              <h2>Master Bank per Materia</h2>
            </div>
            <p>Esplora l'intera Master Bank. Scegli la materia e definisci quanti quiz affrontare.</p>
          </div>
          <button className="btn-secondary">Esplora Materie</button>
        </div>

        <div className="modern-card topic-card modern-card-interactive" onClick={onGoStatistiche}>
          <div className="card-accent-bar card-accent-amber" />
          <div>
            <div className="topic-card-header">
              <div className="topic-icon" style={{ color: 'var(--warning)', background: 'rgba(245, 158, 11, 0.12)' }}>
                <Activity size={24} />
              </div>
              <h2>Statistiche &amp; QI</h2>
            </div>
            <p>Trend, radar per materia, heatmap di attività e insight generati automaticamente.</p>
          </div>
          <button className="btn-secondary">Apri Dashboard</button>
        </div>

        <div className="modern-card topic-card modern-card-interactive" onClick={onGoRipasso}>
          <div className="card-accent-bar card-accent-purple" />
          <div>
            <div className="topic-card-header">
              <div className="topic-icon" style={{ color: 'var(--accent-purple)', background: 'rgba(139, 92, 246, 0.12)' }}>
                <Zap size={24} />
              </div>
              <h2>Ripasso Intelligente</h2>
            </div>
            <p>
              {dueCount > 0
                ? `${dueCount} domande sono scadute per il ripasso oggi (algoritmo SM-2).`
                : 'Sistema di ripetizione dilazionata: pianifica il ripasso in base alla curva dell\'oblio.'}
            </p>
          </div>
          <button className="btn-warning">
            {dueCount > 0 ? `Ripassa ${dueCount} Domande` : 'Apri Ripasso'}
          </button>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <span className="eyebrow">Bandi ufficiali</span>
          <h3>I Tuoi Percorsi Concorsuali</h3>
        </div>
      </div>

      <div className="topics-grid" style={{ marginBottom: '1.5rem' }}>
        {concorsi.map((concorso) => (
          <div key={concorso.id} className="topic-card modern-card modern-card-interactive">
            <div className="card-accent-bar card-accent-cyan" />
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
            <Layers size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <strong>Aggiornamento Disponibile</strong>
              <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85 }}>È pronta una nuova versione dell'applicazione.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={onDismissUpdate}>
              Chiudi
            </button>
            <button className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }} onClick={onInstallUpdate}>
              Installa
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
