interface ForecastBarsProps {
  data: { label: string; dueCount: number }[];
}

export function ForecastBars({ data }: ForecastBarsProps) {
  const max = Math.max(1, ...data.map((d) => d.dueCount));

  return (
    <div className="forecast-bars">
      {data.map((d, i) => (
        <div key={i} className="forecast-bar" title={`${d.label}: ${d.dueCount} domande`}>
          <span className="forecast-bar-count">{d.dueCount > 0 ? d.dueCount : ''}</span>
          <div className="forecast-bar-track">
            <div
              className="forecast-bar-fill"
              style={{
                height: `${(d.dueCount / max) * 100}%`,
                background: i === 0 ? 'var(--warning)' : 'var(--primary-2)',
              }}
            />
          </div>
          <span className="forecast-bar-label">{d.label}</span>
        </div>
      ))}
    </div>
  );
}
