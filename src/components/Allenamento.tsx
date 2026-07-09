import { useMemo, useState } from 'react';
import { BookOpen, Book, Layers } from 'lucide-react';
import type { SubjectStats } from '../services/StatisticsManager';
import type { QuestionLevel } from '../services/DatabaseService';
import { renderIcon } from './icons';
import { PageNav } from './PageNav';
import { groupByCategory } from '../utils/categorize';

type LevelChoice = QuestionLevel | 'all';

interface AllenamentoProps {
  globalModules: any[];
  subjectStats: Record<string, SubjectStats>;
  onBack: () => void;
  onStartQuiz: (sources: string[], mode: 'study' | 'quiz_free' | 'quiz_timed', timeLimitMinutes?: number, questionLimit?: number, subjectName?: string, level?: LevelChoice) => void;
}

const LEVELS: { key: LevelChoice; label: string }[] = [
  { key: 'all', label: 'Tutti' },
  { key: 'base', label: 'Base' },
  { key: 'intermedio', label: 'Intermedio' },
  { key: 'avanzato', label: 'Avanzato' },
];

function masteryFor(subjectStats: Record<string, SubjectStats>, title: string): number | null {
  const stat = subjectStats[title];
  if (!stat || stat.totalAnswered === 0) return null;
  return Math.round((stat.totalCorrect / stat.totalAnswered) * 100);
}

export function Allenamento({ globalModules, subjectStats, onBack, onStartQuiz }: AllenamentoProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [levelByModule, setLevelByModule] = useState<Record<string, LevelChoice>>({});

  const grouped = useMemo(() => groupByCategory(globalModules), [globalModules]);
  const categories = Object.keys(grouped).sort();

  const setLevel = (title: string, level: LevelChoice) => {
    setLevelByModule((prev) => ({ ...prev, [title]: level }));
  };

  // ---- Step 1: category picker -------------------------------------------------
  if (!selectedCategory) {
    return (
      <div className="dashboard">
        <PageNav onDashboard={onBack} crumb="Dashboard / Master Bank" />

        <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
          <Layers size={32} className="icon-logo" style={{ color: 'var(--correct)' }} />
          <h2>Master Bank delle Materie</h2>
          <p>Scegli una categoria, poi una sottocategoria e il livello di difficoltà per allenarti in modo mirato.</p>
        </header>

        <div className="topics-grid">
          {categories.map((cat) => {
            const modules = grouped[cat];
            const masteries = modules.map((m) => masteryFor(subjectStats, m.modulo_titolo)).filter((v): v is number => v !== null);
            const avgMastery = masteries.length > 0 ? Math.round(masteries.reduce((a, b) => a + b, 0) / masteries.length) : null;
            return (
              <div
                key={cat}
                className="topic-card modern-card category-card"
                style={{ borderTop: '4px solid var(--primary)' }}
                onClick={() => setSelectedCategory(cat)}
              >
                <div>
                  <div className="topic-card-header">
                    <div className="topic-icon">{renderIcon(modules[0]?.icona)}</div>
                    <h2>{cat}</h2>
                  </div>
                  <p>{modules.length} sottocategorie disponibili in quest'area tematica.</p>
                  <span className="category-count">
                    {avgMastery !== null ? `Padronanza media: ${avgMastery}%` : 'Non ancora esplorata'}
                  </span>
                  <div className="mastery-bar-track" style={{ marginTop: '0.75rem' }}>
                    <div className="mastery-bar-fill" style={{ width: `${avgMastery ?? 0}%` }} />
                  </div>
                </div>
                <button className="btn-secondary">Esplora Sottocategorie</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---- Step 2: subcategory + level picker --------------------------------------
  const modules = grouped[selectedCategory] || [];

  return (
    <div className="dashboard">
      <PageNav
        onBack={() => setSelectedCategory(null)}
        backLabel="Categorie"
        onDashboard={onBack}
        crumb={`Master Bank / ${selectedCategory}`}
      />

      <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
        <BookOpen size={32} className="icon-logo" style={{ color: 'var(--correct)' }} />
        <h2>{selectedCategory}</h2>
        <p>Seleziona la sottocategoria, il livello di difficoltà e componi il tuo allenamento personalizzato.</p>
      </header>

      <div className="topics-grid">
        {modules.map((modulo, idx) => {
          const mastery = masteryFor(subjectStats, modulo.modulo_titolo);
          const level = levelByModule[modulo.modulo_titolo] ?? 'all';
          return (
            <div key={idx} className="topic-card modern-card" style={{ borderTop: '4px solid var(--correct)' }}>
              <div>
                <div className="topic-card-header">
                  <div className="topic-icon" style={{ color: 'var(--correct)' }}>
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

                <div className="level-pills">
                  {LEVELS.map((lvl) => (
                    <button
                      key={lvl.key}
                      className={`level-pill ${level === lvl.key ? 'active' : ''}`}
                      onClick={() => setLevel(modulo.modulo_titolo, lvl.key)}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="actions-column">
                <div className="actions-row">
                  <button className="btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => onStartQuiz(modulo.sorgenti_dati, 'quiz_free', undefined, 10, modulo.modulo_titolo, level)}>10 Quiz</button>
                  <button className="btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => onStartQuiz(modulo.sorgenti_dati, 'quiz_free', undefined, 20, modulo.modulo_titolo, level)}>20 Quiz</button>
                  <button className="btn-secondary" style={{ fontSize: '0.8rem' }} onClick={() => onStartQuiz(modulo.sorgenti_dati, 'quiz_free', undefined, 30, modulo.modulo_titolo, level)}>30 Quiz</button>
                </div>
                <button className="btn-primary" onClick={() => onStartQuiz(modulo.sorgenti_dati, 'study', undefined, undefined, modulo.modulo_titolo, level)}>
                  <Book size={18} /> Modalità Studio
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
