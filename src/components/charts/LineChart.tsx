interface LineChartProps {
  data: number[];
  labels?: string[];
  color?: string;
  height?: number;
  fillId?: string;
  min?: number;
  max?: number;
  showDots?: boolean;
  /** Minimal sparkline mode: no gridlines, thinner line, only the last point marked. */
  compact?: boolean;
}

export function LineChart({
  data,
  labels,
  color = 'var(--primary-2)',
  height = 160,
  fillId = 'lineFill',
  min,
  max,
  showDots = true,
  compact = false,
}: LineChartProps) {
  const width = 600;
  const padding = compact ? 4 : 12;

  if (data.length === 0) {
    if (compact) {
      return <div style={{ height, display: 'flex', alignItems: 'center', color: 'var(--text-dim)', fontSize: '0.72rem' }}>Nessun dato</div>;
    }
    return (
      <div className="empty-state" style={{ padding: '2rem 0' }}>
        Nessun dato ancora disponibile.
      </div>
    );
  }

  if (data.length === 1) {
    data = [data[0], data[0]];
  }

  const dataMin = min ?? Math.min(...data);
  const dataMax = max ?? Math.max(...data);
  const range = dataMax - dataMin || 1;

  const stepX = (width - padding * 2) / (data.length - 1);
  const points = data.map((v, i) => {
    const x = padding + i * stepX;
    const y = padding + (height - padding * 2) * (1 - (v - dataMin) / range);
    return [x, y] as const;
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1][0].toFixed(2)} ${height - padding} L ${points[0][0].toFixed(2)} ${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none" style={{ overflow: 'visible', display: 'block' }}>
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={compact ? 0.22 : 0.35} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {!compact && [0.25, 0.5, 0.75].map((f) => (
        <line
          key={f}
          x1={padding}
          x2={width - padding}
          y1={padding + (height - padding * 2) * f}
          y2={padding + (height - padding * 2) * f}
          stroke="var(--border-hairline)"
          strokeWidth={1}
        />
      ))}

      <path d={areaPath} fill={`url(#${fillId})`} stroke="none" />
      <path d={linePath} fill="none" stroke={color} strokeWidth={compact ? 2 : 2.5} strokeLinecap="round" strokeLinejoin="round" />

      {showDots && points.map(([x, y], i) => {
        const isLast = i === points.length - 1;
        if (compact && !isLast) return null;
        return (
          <circle key={i} cx={x} cy={y} r={isLast ? (compact ? 3.5 : 5) : 3} fill={color} stroke="var(--bg-panel-solid)" strokeWidth={1.5}>
            {labels?.[i] && <title>{`${labels[i]}: ${data[i]}`}</title>}
          </circle>
        );
      })}
    </svg>
  );
}
