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
