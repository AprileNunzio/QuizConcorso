import { StatisticsManager } from './StatisticsManager';
import type { UserStatistics } from './StatisticsManager';
import { WeaknessTracker } from './WeaknessTracker';
import type { WeaknessStore } from './WeaknessTracker';

export interface AppBackup {
  formatVersion: 1;
  exportedAt: number;
  appVersion: string;
  statistics: UserStatistics;
  weakness: {
    store: WeaknessStore;
    newPerDay: number;
  };
}

/**
 * Raggruppa tutto ciò che l'app tiene in localStorage (statistiche +
 * progresso SM-2 di ripasso) in un unico file JSON esportabile, così i dati
 * sopravvivono a una reinstallazione o al passaggio a un altro PC.
 */
export const BackupService = {
  createBackup(): AppBackup {
    return {
      formatVersion: 1,
      exportedAt: Date.now(),
      appVersion: __APP_VERSION__,
      statistics: StatisticsManager.loadStatistics(),
      weakness: {
        store: WeaknessTracker.exportStore(),
        newPerDay: WeaknessTracker.getNewPerDaySetting(),
      },
    };
  },

  /** Valida la struttura minima attesa; lancia un errore con un messaggio mostrabile all'utente se non è un backup valido. */
  parseBackup(raw: string): AppBackup {
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error('Il file selezionato non è un JSON valido.');
    }

    if (
      !parsed ||
      typeof parsed !== 'object' ||
      (parsed as AppBackup).formatVersion !== 1 ||
      typeof (parsed as AppBackup).statistics !== 'object' ||
      typeof (parsed as AppBackup).weakness !== 'object' ||
      typeof (parsed as AppBackup).weakness?.store !== 'object'
    ) {
      throw new Error('Il file selezionato non è un backup valido di Quiz & Concorsi.');
    }

    return parsed as AppBackup;
  },

  restoreBackup(backup: AppBackup) {
    StatisticsManager.saveStatistics(backup.statistics);
    WeaknessTracker.importStore(backup.weakness.store);
    WeaknessTracker.setNewPerDaySetting(backup.weakness.newPerDay ?? WeaknessTracker.getNewPerDaySetting());
  },
};
