import { useMemo, useState } from 'react';
import { Play, Minus, Plus } from 'lucide-react';
import type { ModuloEsame } from '../types';
import type { SubjectStats } from '../services/StatisticsManager';
import type { QuestionLevel } from '../services/DatabaseService';
import { renderIcon } from './icons';

type LevelChoice = QuestionLevel | 'all';

interface Selection {
  count: number;
  level: LevelChoice;
}

export interface CustomSimulationModule {
  sources: string[];
  count: number;
  level: LevelChoice;
  subjectName: string;
}

interface SimulazioneBuilderProps {
  moduli: ModuloEsame[];
  subjectStats: Record<string, SubjectStats>;
  durataUfficiale: number;
  numeroQuesitiUfficiale: number;
  onAvvia: (selections: CustomSimulationModule[], timeLimitMinutes: number) => void;
}

const LEVELS: { key: LevelChoice; label: string }[] = [
  { key: 'all', label: 'Tutti' },
  { key: 'base', label: 'Base' },
  { key: 'intermedio', label: 'Intermedio' },
  { key: 'avanzato', label: 'Avanzato' },
];

const MAX_PER_MODULE = 25;

function masteryFor(subjectStats: Record<string, SubjectStats>, title: string): number | null {
  const stat = subjectStats[title];
  if (!stat || stat.totalAnswered === 0) return null;
  return Math.round((stat.totalCorrect / stat.totalAnswered) * 100);
}

export function SimulazioneBuilder({ moduli, subjectStats, durataUfficiale, numeroQuesitiUfficiale, onAvvia }: SimulazioneBuilderProps) {
  const defaultPerModule = Math.max(1, Math.round(numeroQuesitiUfficiale / Math.max(1, moduli.length)));

  const [selections, setSelections] = useState<Record<string, Selection>>(() => {
    const initial: Record<string, Selection> = {};
    for (const m of moduli) {
      const mastery = masteryFor(subjectStats, m.modulo_titolo);
      // Auto-suggerisci di escludere (0 domande) le materie già padroneggiate (>=85%)
      const count = mastery !== null && mastery >= 85 ? 0 : defaultPerModule;
      initial[m.modulo_titolo] = { count, level: 'all' };
    }
    return initial;
  });

  const totalSelected = useMemo(
    () => Object.values(selections).reduce((sum, s) => sum + s.count, 0),
    [selections]
  );

  const estimatedMinutes = Math.max(10, Math.round((durataUfficiale || 120) * (totalSelected / Math.max(1, numeroQuesitiUfficiale || 60))));

  const updateCount = (title: string, delta: number) => {
    setSelections((prev) => ({
      ...prev,
      [title]: { ...prev[title], count: Math.max(0, Math.min(MAX_PER_MODULE, prev[title].count + delta)) },
    }));
  };

  const updateLevel = (title: string, level: LevelChoice) => {
    setSelections((prev) => ({ ...prev, [title]: { ...prev[title], level } }));
  };

  const handleAvvia = () => {
    const chosen: CustomSimulationModule[] = moduli
      .filter((m) => selections[m.modulo_titolo]?.count > 0)
      .map((m) => ({
        sources: m.sorgenti_dati,
        count: selections[m.modulo_titolo].count,
        level: selections[m.modulo_titolo].level,
        subjectName: m.modulo_titolo,
      }));
    onAvvia(chosen, estimatedMinutes);
  };

  return (
    <div>
      <div className="modern-card" style={{ padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
          Per ogni materia scegli quante domande includere e con quale livello di difficoltà. Le materie che padroneggi già
          (&ge;85% di precisione) partono a 0: aggiungile solo se vuoi comunque ripassarle.
        </p>
      </div>

      {moduli.map((m) => {
        const sel = selections[m.modulo_titolo];
        const mastery = masteryFor(subjectStats, m.modulo_titolo);
        return (
          <div key={m.modulo_id} className={`builder-row ${sel.count === 0 ? 'excluded' : ''}`}>
            <div className="builder-row-title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary-2)' }}>{renderIcon(m.icona, 18)}</span>
                <strong>{m.modulo_titolo}</strong>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                {mastery !== null ? `Padronanza: ${mastery}%` : 'Non ancora testata'}
              </span>
            </div>

            <div className="level-pills" style={{ marginBottom: 0 }}>
              {LEVELS.map((lvl) => (
                <button
                  key={lvl.key}
                  className={`level-pill ${sel.level === lvl.key ? 'active' : ''}`}
                  onClick={() => updateLevel(m.modulo_titolo, lvl.key)}
                >
                  {lvl.label}
                </button>
              ))}
            </div>

            <div className="builder-count">
              <button onClick={() => updateCount(m.modulo_titolo, -1)} disabled={sel.count === 0}><Minus size={14} /></button>
              <span>{sel.count}</span>
              <button onClick={() => updateCount(m.modulo_titolo, 1)} disabled={sel.count >= MAX_PER_MODULE}><Plus size={14} /></button>
            </div>

            <div className="mastery-bar-track" style={{ marginBottom: 0 }}>
              <div className="mastery-bar-fill" style={{ width: `${mastery ?? 0}%` }} />
            </div>
          </div>
        );
      })}

      <div className="modern-card builder-summary-bar">
        <div>
          <span className="eyebrow">Riepilogo</span>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700 }}>
            {totalSelected} domande &middot; ~{estimatedMinutes} min
          </div>
        </div>
        <button className="btn-warning" disabled={totalSelected === 0} onClick={handleAvvia}>
          <Play size={20} /> Avvia Simulazione Personalizzata
        </button>
      </div>
    </div>
  );
}
