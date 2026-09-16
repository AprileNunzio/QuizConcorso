interface ActivityHeatmapProps {
  dates: number[]; // timestamps (ms) of quiz sessions
  weeks?: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export function ActivityHeatmap({ dates, weeks = 16 }: ActivityHeatmapProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const totalDays = weeks * 7;
  const startOffset = today.getDay(); // align end-of-grid to today's weekday column
  const gridStart = today.getTime() - (totalDays - 1 - (6 - startOffset)) * DAY_MS;

  const counts = new Map<string, number>();
  for (const ts of dates) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    const key = d.toISOString().slice(0, 10);
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const maxCount = Math.max(1, ...counts.values());

  const cells: { key: string; count: number; date: Date }[] = [];
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(gridStart + i * DAY_MS);
    const key = d.toISOString().slice(0, 10);
    cells.push({ key, count: counts.get(key) || 0, date: d });
  }

  const colFor = (count: number) => {
    if (count === 0) return 'var(--bg-inset)';
    const intensity = Math.min(1, count / maxCount);
    if (intensity < 0.34) return 'rgba(45, 212, 191, 0.35)';
    if (intensity < 0.67) return 'rgba(45, 212, 191, 0.65)';
    return 'var(--correct)';
  };

  const columns: typeof cells[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    columns.push(cells.slice(i, i + 7));
  }

  return (
    <div style={{ display: 'flex', gap: 4, overflowX: 'auto', paddingBottom: 4 }}>
      {columns.map((col, ci) => (
        <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {col.map((cell) => (
            <div
              key={cell.key}
              title={`${cell.date.toLocaleDateString('it-IT')}: ${cell.count} quiz`}
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                background: colFor(cell.count),
                border: '1px solid var(--border-hairline)',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
