import type { MasteryLevel } from '../../services/WeaknessTracker';

interface MasteryBarProps {
  distribution: Record<MasteryLevel, number>;
}

const ORDER: { key: MasteryLevel; label: string; color: string }[] = [
  { key: 'new', label: 'Nuove', color: 'var(--text-dim)' },
  { key: 'learning', label: 'In apprendimento', color: 'var(--incorrect)' },
  { key: 'young', label: 'In consolidamento', color: 'var(--warning)' },
  { key: 'mature', label: 'Consolidate', color: 'var(--primary-2)' },
  { key: 'mastered', label: 'Padroneggiate', color: 'var(--correct)' },
];

export function MasteryBar({ distribution }: MasteryBarProps) {
  const total = Object.values(distribution).reduce((a, b) => a + b, 0);

  if (total === 0) {
    return <div className="empty-state" style={{ padding: '1.5rem 0' }}>Nessuna domanda ancora tracciata.</div>;
  }

  return (
    <div>
      <div className="mastery-stack">
        {ORDER.map(({ key, color }) => {
          const value = distribution[key];
          if (value === 0) return null;
          return (
            <div
              key={key}
              className="mastery-stack-seg"
              style={{ width: `${(value / total) * 100}%`, background: color }}
              title={`${key}: ${value}`}
            />
          );
        })}
      </div>
      <div className="mastery-legend">
        {ORDER.map(({ key, label, color }) => (
          <div key={key} className="mastery-legend-item">
            <span className="mastery-dot" style={{ background: color }} />
            <span>{label}</span>
            <strong>{distribution[key]}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
