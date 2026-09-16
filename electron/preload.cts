import { contextBridge, ipcRenderer } from 'electron';

export interface UpdateProgress {
  percent: number;
  bytesPerSecond: number;
  transferred: number;
  total: number;
}

export interface UpdateStatus {
  status: 'idle' | 'checking' | 'available' | 'not-available' | 'downloading' | 'downloaded' | 'error';
  info?: any;
  error?: string;
}

// Legacy API for backwards compatibility
contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateDownloaded: (callback: (info: any) => void) => ipcRenderer.on('update-downloaded', (_event, info) => callback(info)),
  installUpdate: () => ipcRenderer.send('install-update')
});

// Enterprise Updater API
contextBridge.exposeInMainWorld('updaterAPI', {
  checkForUpdates: () => ipcRenderer.invoke('updater:check'),
  startDownload: () => ipcRenderer.invoke('updater:start-download'),
  install: () => ipcRenderer.send('updater:install'),
  getVersion: () => ipcRenderer.invoke('updater:get-version'),
  onStatusChange: (callback: (status: UpdateStatus) => void) => {
    const handler = (_event: any, data: UpdateStatus) => callback(data);
    ipcRenderer.on('updater:status', handler);
    return () => {
      ipcRenderer.removeListener('updater:status', handler);
    };
  },
  onProgress: (callback: (progress: UpdateProgress) => void) => {
    const handler = (_event: any, data: UpdateProgress) => callback(data);
    ipcRenderer.on('updater:progress', handler);
    return () => {
      ipcRenderer.removeListener('updater:progress', handler);
    };
  }
});

// Database Sync API
contextBridge.exposeInMainWorld('databaseAPI', {
  onSyncRequested: (callback: (data: { forceAntiCache?: boolean }) => void) => {
    const handler = (_event: any, data: any) => callback(data);
    ipcRenderer.on('db:sync-requested', handler);
    return () => {
      ipcRenderer.removeListener('db:sync-requested', handler);
    };
  },
  onClearCacheRequested: (callback: () => void) => {
    const handler = () => callback();
    ipcRenderer.on('db:clear-cache-requested', handler);
    return () => {
      ipcRenderer.removeListener('db:clear-cache-requested', handler);
    };
  }
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload executed');
});
