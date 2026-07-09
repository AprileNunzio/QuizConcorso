interface RadarDatum {
  label: string;
  value: number; // 0-100
}

interface RadarChartProps {
  data: RadarDatum[];
  size?: number;
  color?: string;
}

export function RadarChart({ data, size = 320, color = 'var(--primary-2)' }: RadarChartProps) {
  if (data.length < 3) {
    return (
      <div className="empty-state" style={{ padding: '2rem 0' }}>
        Servono almeno 3 materie per il radar.
      </div>
    );
  }

  const center = size / 2;
  const radius = size / 2 - 46;
  const rings = [0.25, 0.5, 0.75, 1];
  const angleStep = (Math.PI * 2) / data.length;

  const pointFor = (value: number, index: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = radius * (value / 100);
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)] as const;
  };

  const polygonPoints = data.map((d, i) => pointFor(d.value, i).join(',')).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" height={size}>
      {rings.map((f) => (
        <polygon
          key={f}
          points={data.map((_, i) => pointFor(f * 100, i).join(',')).join(' ')}
          fill="none"
          stroke="var(--border-hairline)"
          strokeWidth={1}
        />
      ))}

      {data.map((_, i) => {
        const [x, y] = pointFor(100, i);
        return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="var(--border-hairline)" strokeWidth={1} />;
      })}

      <polygon points={polygonPoints} fill={color} fillOpacity={0.22} stroke={color} strokeWidth={2} strokeLinejoin="round" />

      {data.map((d, i) => {
        const [x, y] = pointFor(d.value, i);
        return <circle key={i} cx={x} cy={y} r={3.5} fill={color} stroke="var(--bg-deep)" strokeWidth={1.5} />;
      })}

      {data.map((d, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const labelR = radius + 26;
        const x = center + labelR * Math.cos(angle);
        const y = center + labelR * Math.sin(angle);
        const anchor = Math.cos(angle) > 0.3 ? 'start' : Math.cos(angle) < -0.3 ? 'end' : 'middle';
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="var(--text-muted)"
            fontSize={11}
            fontFamily="var(--font-mono)"
          >
            {d.label.length > 16 ? `${d.label.slice(0, 15)}…` : d.label}
          </text>
        );
      })}
    </svg>
  );
}
