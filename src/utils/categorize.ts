export const deriveCategory = (sorgentiDati: string[]): string => {
  const first = sorgentiDati[0] || '';
  const prefix = first.split('/')[0] || 'Generale';
  return prefix
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

export const groupByCategory = <T extends { sorgenti_dati: string[] }>(modules: T[]): Record<string, T[]> => {
  const grouped: Record<string, T[]> = {};
  for (const m of modules) {
    const cat = deriveCategory(m.sorgenti_dati);
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(m);
  }
  return grouped;
};
