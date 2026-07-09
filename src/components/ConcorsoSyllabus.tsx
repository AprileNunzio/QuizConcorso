import { useState } from 'react';
import { Brain, Play, Book, Sparkles, Sliders } from 'lucide-react';
import type { ConcorsoIndex, ConcorsoManifest } from '../types';
import type { SubjectStats } from '../services/StatisticsManager';
import type { QuestionLevel } from '../services/DatabaseService';
import { renderIcon } from './icons';
import { PageNav } from './PageNav';
import { SimulazioneBuilder } from './SimulazioneBuilder';
import type { CustomSimulationModule } from './SimulazioneBuilder';

type LevelChoice = QuestionLevel | 'all';

interface ConcorsoSyllabusProps {
  activeConcorso: ConcorsoManifest;
  concorsoMeta?: ConcorsoIndex;
  subjectStats: Record<string, SubjectStats>;
  onBack: () => void;
  onStartQuiz: (sources: string[], mode: 'study' | 'quiz_free' | 'quiz_timed', timeLimitMinutes?: number, questionLimit?: number, subjectName?: string, level?: LevelChoice) => void;
  onStartCustomSimulation: (selections: CustomSimulationModule[], timeLimitMinutes: number) => void;
}

export function ConcorsoSyllabus({ activeConcorso, concorsoMeta, subjectStats, onBack, onStartQuiz, onStartCustomSimulation }: ConcorsoSyllabusProps) {
  const [simMode, setSimMode] = useState<'automatica' | 'personalizzata'>('automatica');
  const allSources = activeConcorso.moduli_esame.flatMap((m) => m.sorgenti_dati);
  const durata = concorsoMeta?.durata_prova_minuti || 120;
  const numeroQuesiti = concorsoMeta?.numero_quesiti || 60;

  const overallMastery = (() => {
    const relevant = activeConcorso.moduli_esame
      .map((m) => subjectStats[m.modulo_titolo])
      .filter((s): s is SubjectStats => !!s && s.totalAnswered > 0);
    if (relevant.length === 0) return null;
    const totalCorrect = relevant.reduce((s, r) => s + r.totalCorrect, 0);
    const totalAnswered = relevant.reduce((s, r) => s + r.totalAnswered, 0);
    return Math.round((totalCorrect / totalAnswered) * 100);
  })();

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
