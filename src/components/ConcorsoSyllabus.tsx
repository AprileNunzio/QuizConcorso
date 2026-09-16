import { useState } from 'react';
import {
  Brain, Play, Book, Sparkles, Sliders, Users, Clock3, Target, Award, Calendar,
  ClipboardList, Wallet, Gauge
} from 'lucide-react';
import type { ConcorsoIndex, ConcorsoManifest, DifficultyProfileMode } from '../features/database';
import { StatisticsManager } from '../services/StatisticsManager';
import type { SubjectStats, QuizSessionResult } from '../services/StatisticsManager';
import type { QuestionLevel } from '../features/database';
import { renderIcon } from './icons';
import { PageNav } from './PageNav';
import { SimulazioneBuilder } from './SimulazioneBuilder';
import type { CustomSimulationModule } from './SimulazioneBuilder';
import { LineChart } from './charts/LineChart';

type LevelChoice = QuestionLevel | 'all';

interface ConcorsoSyllabusProps {
  activeConcorso: ConcorsoManifest;
  concorsoMeta?: ConcorsoIndex;
  subjectStats: Record<string, SubjectStats>;
  onBack: () => void;
  onStartQuiz: (
    sources: string[],
    mode: 'study' | 'quiz_free' | 'quiz_timed',
    timeLimitMinutes?: number,
    questionLimit?: number,
    subjectName?: string,
    level?: LevelChoice,
    difficultyProfile?: DifficultyProfileMode
  ) => void;
  onStartCustomSimulation: (selections: CustomSimulationModule[], timeLimitMinutes: number) => void;
  onReviewSession: (session: QuizSessionResult) => void;
}

export function ConcorsoSyllabus({
  activeConcorso,
  concorsoMeta,
  subjectStats,
  onBack,
  onStartQuiz,
  onStartCustomSimulation,
}: ConcorsoSyllabusProps) {
  const [simMode, setSimMode] = useState<'automatica' | 'personalizzata'>('automatica');
  const [difficultyProfile, setDifficultyProfile] = useState<DifficultyProfileMode>('official');

  const allSources = activeConcorso.moduli_esame.flatMap((m) => m.sorgenti_dati);
  const durata = concorsoMeta?.durata_prova_minuti || 120;
  const numeroQuesiti = concorsoMeta?.numero_quesiti || 60;
  const bando = activeConcorso.bando;

  const overallMastery = (() => {
    const relevant = activeConcorso.moduli_esame
      .map((m) => subjectStats[m.modulo_titolo])
      .filter((s): s is SubjectStats => !!s && s.totalAnswered > 0);
    if (relevant.length === 0) return null;
    const totalCorrect = relevant.reduce((s, r) => s + r.totalCorrect, 0);
    const totalAnswered = relevant.reduce((s, r) => s + r.totalAnswered, 0);
    return Math.round((totalCorrect / totalAnswered) * 100);
  })();

  const concorsoStats = StatisticsManager.getConcorsoStats(activeConcorso.concorso_id);
  const categoryEntries = Object.entries(concorsoStats.categoryBreakdown)
    .map(([label, s]) => ({
      label,
      total: s.total,
      correct: s.correct,
      pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
    }))
    .sort((a, b) => a.pct - b.pct);

  return (
    <div className="dashboard">
      <PageNav onBack={onBack} backLabel="Torna all'Hub" onDashboard={onBack} crumb={`Dashboard / ${activeConcorso.titolo}`} />

      <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
        <h2>{activeConcorso.titolo}</h2>
        <p>Syllabus Ufficiale: affronta la prova completa o studia le singole materie.</p>
        {overallMastery !== null && (
          <span className="eyebrow" style={{ marginTop: '0.4rem' }}>
            Preparazione complessiva stimata: {overallMastery}%
          </span>
        )}
      </header>

      {bando && (
        <>
          <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
            <div>
              <span className="eyebrow">Bando ufficiale</span>
              <h3>Dettagli del Concorso</h3>
            </div>
          </div>

          <div className="bando-badges">
            <span className="meta-badge"><Users size={14} /> {bando.numeroPosti} posti</span>
            {bando.prova && <span className="meta-badge"><Clock3 size={14} /> {bando.prova.durataMinuti} min · {bando.prova.numeroQuesiti} quesiti</span>}
            {bando.prova && <span className="meta-badge"><Target size={14} /> Punteggio minimo {bando.prova.punteggioMinimo}</span>}
            {bando.assunzione?.periodoProva && <span className="meta-badge"><Award size={14} /> Prova: {bando.assunzione.periodoProva}</span>}
            {bando.graduatoria?.validita && <span className="meta-badge"><Calendar size={14} /> Graduatoria valida {bando.graduatoria.validita}</span>}
          </div>

          <div className="panel-grid" style={{ marginBottom: '1.5rem' }}>
            <div className="modern-card">
              <div className="panel-title">
                <div><span className="eyebrow">Requisiti</span><h3>Chi può partecipare</h3></div>
                <ClipboardList size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <ul className="bando-list">
                {bando.requisiti?.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>
            <div className="modern-card">
              <div className="panel-title">
                <div><span className="eyebrow">Assunzione</span><h3>Inquadramento e Domanda</h3></div>
                <Wallet size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <ul className="bando-list">
                {bando.assunzione?.tipoContratto && <li><strong>Contratto:</strong> {bando.assunzione.tipoContratto}</li>}
                {bando.assunzione?.inquadramento && <li><strong>Inquadramento:</strong> {bando.assunzione.inquadramento}</li>}
                {bando.assunzione?.retribuzione && <li><strong>Retribuzione:</strong> {bando.assunzione.retribuzione}</li>}
                {bando.terminePresentazione && <li><strong>Domanda:</strong> {bando.terminePresentazione}</li>}
              </ul>
            </div>
          </div>
        </>
      )}

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Il tuo percorso</span>
          <h3>Statistiche su questo Concorso</h3>
        </div>
      </div>

      {concorsoStats.attempts === 0 ? (
        <div className="modern-card empty-state" style={{ marginBottom: '1.5rem' }}>
          <Target size={36} style={{ marginBottom: '0.75rem', opacity: 0.5 }} />
          <p>Non hai ancora affrontato una simulazione per questo concorso. Avvia la Simulazione Automatica qui sotto per iniziare a tracciare i tuoi progressi.</p>
        </div>
      ) : (
        <>
          <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
            <div className="modern-card kpi-card">
              <span className="kpi-label"><Play size={13} /> Tentativi</span>
              <span className="kpi-value">{concorsoStats.attempts}</span>
            </div>
            <div className="modern-card kpi-card">
              <span className="kpi-label"><Target size={13} /> Media</span>
              <span className="kpi-value" style={{ color: concorsoStats.avgScorePct >= 60 ? 'var(--correct)' : 'var(--incorrect)' }}>{concorsoStats.avgScorePct}%</span>
            </div>
            <div className="modern-card kpi-card">
              <span className="kpi-label"><Award size={13} /> Miglior Risultato</span>
              <span className="kpi-value" style={{ color: 'var(--warning)' }}>{concorsoStats.bestScorePct}%</span>
            </div>
            <div className="modern-card kpi-card">
              <span className="kpi-label"><Calendar size={13} /> Ultimo Tentativo</span>
              <span className="kpi-value" style={{ fontSize: '1rem' }}>
                {concorsoStats.lastAttemptDate ? new Date(concorsoStats.lastAttemptDate).toLocaleDateString('it-IT') : '—'}
              </span>
            </div>
          </div>

          <div className="panel-grid" style={{ marginBottom: '1.5rem' }}>
            <div className="modern-card">
              <div className="panel-title">
                <div><span className="eyebrow">Andamento</span><h3>Punteggio per Tentativo</h3></div>
              </div>
              <LineChart
                data={concorsoStats.trend.map((t) => t.value)}
                labels={concorsoStats.trend.map((t) => t.label)}
                color="var(--warning)"
                fillId="concorsoTrendFill"
                min={0}
                max={100}
                height={150}
              />
            </div>
            <div className="modern-card">
              <div className="panel-title">
                <div><span className="eyebrow">Da migliorare</span><h3>Argomenti per Materia</h3></div>
              </div>
              {categoryEntries.length > 0 ? (
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
              ) : (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Dati per materia non disponibili per le sessioni registrate finora.</p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Prova d'esame</span>
          <h3>Simulazione Esame Ufficiale</h3>
        </div>
      </div>

      <div className="modern-card" style={{ marginBottom: '1.25rem', padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
          <Gauge size={18} style={{ color: 'var(--primary)' }} />
          <strong style={{ fontSize: '0.95rem' }}>Grado di Preparazione e Difficoltà</strong>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.65rem' }}>
          <button
            className={`btn-secondary ${difficultyProfile === 'base' ? 'active-difficulty' : ''}`}
            style={{
              padding: '0.65rem 0.85rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderColor: difficultyProfile === 'base' ? 'var(--correct)' : undefined,
              background: difficultyProfile === 'base' ? 'rgba(34, 197, 94, 0.1)' : undefined,
            }}
            onClick={() => setDifficultyProfile('base')}
          >
            <strong style={{ color: 'var(--correct)', fontSize: '0.88rem' }}>🟢 Base / Principiante</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>100% nozioni fondamentali</span>
          </button>

          <button
            className={`btn-secondary ${difficultyProfile === 'official' ? 'active-difficulty' : ''}`}
            style={{
              padding: '0.65rem 0.85rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderColor: difficultyProfile === 'official' ? 'var(--primary)' : undefined,
              background: difficultyProfile === 'official' ? 'rgba(59, 130, 246, 0.1)' : undefined,
            }}
            onClick={() => setDifficultyProfile('official')}
          >
            <strong style={{ color: 'var(--primary)', fontSize: '0.88rem' }}>🔵 Ufficiale (Bando)</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ponderata standard reale</span>
          </button>

          <button
            className={`btn-secondary ${difficultyProfile === 'avanzato' ? 'active-difficulty' : ''}`}
            style={{
              padding: '0.65rem 0.85rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderColor: difficultyProfile === 'avanzato' ? 'var(--incorrect)' : undefined,
              background: difficultyProfile === 'avanzato' ? 'rgba(239, 68, 68, 0.1)' : undefined,
            }}
            onClick={() => setDifficultyProfile('avanzato')}
          >
            <strong style={{ color: 'var(--incorrect)', fontSize: '0.88rem' }}>🟠 Avanzato / Selettivo</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Casi operativi e norme fini</span>
          </button>

          <button
            className={`btn-secondary ${difficultyProfile === 'all' ? 'active-difficulty' : ''}`}
            style={{
              padding: '0.65rem 0.85rem',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderColor: difficultyProfile === 'all' ? 'var(--warning)' : undefined,
              background: difficultyProfile === 'all' ? 'rgba(234, 179, 8, 0.1)' : undefined,
            }}
            onClick={() => setDifficultyProfile('all')}
          >
            <strong style={{ color: 'var(--warning)', fontSize: '0.88rem' }}>🟣 Tutti i Livelli</strong>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Campionamento casuale</span>
          </button>
        </div>
      </div>

      <div className="segmented">
        <button className={simMode === 'automatica' ? 'active' : ''} onClick={() => setSimMode('automatica')}>
          <Sparkles size={16} /> Automatica
        </button>
        <button className={simMode === 'personalizzata' ? 'active' : ''} onClick={() => setSimMode('personalizzata')}>
          <Sliders size={16} /> Personalizzata
        </button>
      </div>

      {simMode === 'automatica' ? (
        <div className="modern-card" style={{ textAlign: 'center', padding: '1.75rem', marginBottom: '1.5rem', background: 'radial-gradient(circle at 50% 0%, rgba(109,91,255,0.08), transparent 70%), var(--bg-panel)' }}>
          <Brain size={40} style={{ color: 'var(--primary-2)', marginBottom: '0.6rem', filter: 'drop-shadow(0 0 14px var(--primary-glow))' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>Simulazione Automatica</h2>
          <p style={{ fontSize: '0.95rem', marginBottom: '1.25rem', color: 'var(--text-muted)', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            Un mix ponderato di {numeroQuesiti} domande estratte da tutti i moduli previsti dal bando con profilo selezionato.
            Tempo limite: {durata} minuti.
          </p>
          <button
            className="btn-warning"
            style={{ fontSize: '0.95rem', padding: '0.8rem 2rem', width: 'auto' }}
            onClick={() => onStartQuiz(allSources, 'quiz_timed', durata, numeroQuesiti, 'Simulazione Completa', undefined, difficultyProfile)}
          >
            <Play size={19} /> Avvia Prova ({numeroQuesiti} Domande)
          </button>
        </div>
      ) : (
        <div style={{ marginBottom: '1.5rem' }}>
          <SimulazioneBuilder
            moduli={activeConcorso.moduli_esame}
            subjectStats={subjectStats}
            durataUfficiale={durata}
            numeroQuesitiUfficiale={numeroQuesiti}
            onAvvia={onStartCustomSimulation}
          />
        </div>
      )}

      <div className="section-heading">
        <div>
          <span className="eyebrow">Per materia</span>
          <h3>Ripasso Mirato</h3>
        </div>
      </div>

      <div className="topics-grid">
        {activeConcorso.moduli_esame.map((modulo) => {
          const stat = subjectStats[modulo.modulo_titolo];
          const mastery = stat && stat.totalAnswered > 0 ? Math.round((stat.totalCorrect / stat.totalAnswered) * 100) : null;
          return (
            <div key={modulo.modulo_id} className="topic-card modern-card">
              <div>
                <div className="topic-card-header">
                  <div className="topic-icon">
                    {renderIcon(modulo.icona)}
                  </div>
                  <h2>{modulo.modulo_titolo}</h2>
                </div>
                <p>{modulo.descrizione}</p>
                <div className="mastery-row">
                  <span>Padronanza</span>
                  <span>{mastery !== null ? `${mastery}%` : 'N/D'}</span>
                </div>
                <div className="mastery-bar-track">
                  <div className="mastery-bar-fill" style={{ width: `${mastery ?? 0}%` }} />
                </div>
              </div>
              <div className="actions-column">
                <button className="btn-secondary" onClick={() => onStartQuiz(modulo.sorgenti_dati, 'study', undefined, undefined, modulo.modulo_titolo, undefined, difficultyProfile)}>
                  <Book size={18} /> Modalità Studio
                </button>
                <div className="actions-row">
                  <button className="btn-primary" onClick={() => onStartQuiz(modulo.sorgenti_dati, 'quiz_free', undefined, undefined, modulo.modulo_titolo, undefined, difficultyProfile)}>
                    <Play size={18} /> Quiz Libero ({difficultyProfile.toUpperCase()})
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
