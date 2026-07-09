import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateDownloaded: (callback: (info: any) => void) => ipcRenderer.on('update-downloaded', (_event, info) => callback(info)),
  installUpdate: () => ipcRenderer.send('install-update')
});

window.addEventListener('DOMContentLoaded', () => {
  console.log('Preload executed');
});
