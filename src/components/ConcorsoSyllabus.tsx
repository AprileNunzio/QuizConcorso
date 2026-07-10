import { useState } from 'react';
import {
  Brain, Play, Book, Sparkles, Sliders, Users, Clock3, Target, Award, Calendar,
  ClipboardList, Wallet, MapPin, Info, TrendingUp, Eye,
} from 'lucide-react';
import type { ConcorsoIndex, ConcorsoManifest } from '../types';
import { StatisticsManager } from '../services/StatisticsManager';
import type { SubjectStats, QuizSessionResult } from '../services/StatisticsManager';
import type { QuestionLevel } from '../services/DatabaseService';
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
  onStartQuiz: (sources: string[], mode: 'study' | 'quiz_free' | 'quiz_timed', timeLimitMinutes?: number, questionLimit?: number, subjectName?: string, level?: LevelChoice) => void;
  onStartCustomSimulation: (selections: CustomSimulationModule[], timeLimitMinutes: number) => void;
  onReviewSession: (session: QuizSessionResult) => void;
}

export function ConcorsoSyllabus({ activeConcorso, concorsoMeta, subjectStats, onBack, onStartQuiz, onStartCustomSimulation, onReviewSession }: ConcorsoSyllabusProps) {
  const [simMode, setSimMode] = useState<'automatica' | 'personalizzata'>('automatica');
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
    .map(([label, s]) => ({ label, total: s.total, correct: s.correct, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0 }))
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

          {bando.postiPerSede && bando.postiPerSede.length > 0 && (
            <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
              <div className="panel-title">
                <div><span className="eyebrow">Ripartizione posti</span><h3>Sedi di Servizio</h3></div>
                <MapPin size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <div className="sedi-grid">
                {bando.postiPerSede.map((s) => (
                  <div key={s.sede} className="sede-item">
                    <span>{s.sede}</span>
                    <span className="sede-posti">{s.posti}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {bando.noteAggiuntive && bando.noteAggiuntive.length > 0 && (
            <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
              <div className="panel-title">
                <div><span className="eyebrow">Da sapere</span><h3>Note Aggiuntive</h3></div>
                <Info size={18} style={{ color: 'var(--text-dim)' }} />
              </div>
              <ul className="bando-list">
                {bando.noteAggiuntive.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}
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
              <span className="kpi-label"><TrendingUp size={13} /> Media</span>
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

          <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
            <div className="panel-title">
              <div><span className="eyebrow">Storico</span><h3>Tentativi Precedenti</h3></div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="sessions-table">
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Modalità</th>
                    <th>Risultato</th>
                    <th>QI</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {concorsoStats.sessions.slice(0, 8).map((s) => (
                    <tr key={s.id}>
                      <td>{new Date(s.date).toLocaleDateString('it-IT')}</td>
                      <td><span className="mode-tag">{s.mode.replace('_', ' ')}</span></td>
                      <td className="strong">{s.correctAnswers}/{s.totalQuestions}</td>
                      <td style={{ color: 'var(--warning)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{s.sessionIQ}</td>
                      <td>
                        {s.questionIds && s.questionIds.length > 0 && (
                          <button className="session-review-btn" onClick={() => onReviewSession(s)} title="Rivedi questo tentativo">
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

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Prova d'esame</span>
          <h3>Simulazione Esame Ufficiale</h3>
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
            Un mix perfetto di {numeroQuesiti} domande estratte casualmente da tutti i moduli previsti dal bando.
            Il test si svolgerà con un tempo limite di {durata} minuti.
          </p>
          <button
            className="btn-warning"
            style={{ fontSize: '0.95rem', padding: '0.8rem 2rem', width: 'auto' }}
            onClick={() => onStartQuiz(allSources, 'quiz_timed', durata, numeroQuesiti, 'Simulazione Completa')}
          >
            <Play size={19} /> Avvia Simulazione ({numeroQuesiti} Domande)
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
                <button className="btn-secondary" onClick={() => onStartQuiz(modulo.sorgenti_dati, 'study', undefined, undefined, modulo.modulo_titolo)}>
                  <Book size={18} /> Modalità Studio
                </button>
                <div className="actions-row">
                  <button className="btn-primary" onClick={() => onStartQuiz(modulo.sorgenti_dati, 'quiz_free', undefined, undefined, modulo.modulo_titolo)}>
                    <Play size={18} /> Quiz Libero (Tutte)
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
