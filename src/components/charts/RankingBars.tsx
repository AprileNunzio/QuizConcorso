interface RankingDatum {
  label: string;
  value: number; // 0-100
  sublabel?: string;
}

interface RankingBarsProps {
  data: RankingDatum[];
  colorFor?: (value: number) => string;
}

const defaultColor = (value: number) => {
  if (value >= 75) return 'var(--correct)';
  if (value >= 50) return 'var(--warning)';
  return 'var(--incorrect)';
};

export function RankingBars({ data, colorFor = defaultColor }: RankingBarsProps) {
  if (data.length === 0) {
    return <div className="empty-state" style={{ padding: '2rem 0' }}>Nessun dato disponibile.</div>;
  }

  return (
    <div>
      {data.map((d, i) => (
        <div key={i} className="rank-row">
          <span className="rank-label" title={d.label}>{d.label}</span>
          <div className="rank-track">
            <div className="rank-fill" style={{ width: `${Math.max(2, d.value)}%`, background: colorFor(d.value) }} />
          </div>
          <span className="rank-value" style={{ color: colorFor(d.value) }}>{Math.round(d.value)}%</span>
        </div>
      ))}
    </div>
  );
}
