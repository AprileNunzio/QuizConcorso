import { app, BrowserWindow, Menu, MenuItemConstructorOptions, ipcMain, dialog } from 'electron';
import * as path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'electron-updater';
const { autoUpdater } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import * as fs from 'fs';

const logFilePath = path.join(app.getPath('userData'), 'quiz_error_log.txt');

function logToFile(msg: string) {
  try {
    fs.appendFileSync(logFilePath, `[${new Date().toISOString()}] ${msg}\n`);
  } catch (err) {
    console.error('Logging error:', err);
  }
}

process.on('uncaughtException', (err) => {
  logToFile(`UNCAUGHT EXCEPTION: ${err.stack || err.message}`);
});

// Configure AutoUpdater
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

let isManualCheck = false;
let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const win = mainWindow;

  // Intercetta console logs di React
  win.webContents.on('console-message', (_event, level, message, line, sourceId) => {
    const levels = ['DEBUG', 'INFO', 'WARNING', 'ERROR'];
    const levelName = levels[level] || 'INFO';
    logToFile(`[REACT ${levelName}] ${message} (${sourceId}:${line})`);
  });

  // Menu in italiano
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'File',
      submenu: [
        { label: 'Ricarica', role: 'reload' },
        { label: 'Forza Ricarica', role: 'forceReload' },
        { label: 'Svuota Log', click: () => fs.writeFileSync(logFilePath, '') },
        { type: 'separator' },
        { label: 'Esci', role: 'quit' }
      ]
    },
    {
      label: 'Aggiornamenti',
      submenu: [
        {
          label: 'Cerca Aggiornamenti...',
          click: () => {
            isManualCheck = true;
            win?.webContents.send('updater:status', { status: 'checking' });
            autoUpdater.checkForUpdates().catch((err) => {
              isManualCheck = false;
              logToFile('Error in manual update check: ' + err.toString());
              win?.webContents.send('updater:status', { status: 'error', error: err.message });
              dialog.showMessageBox(win, {
                type: 'error',
                title: 'Errore Aggiornamento',
                message: 'Impossibile verificare la presenza di aggiornamenti.',
                detail: err instanceof Error ? err.message : String(err),
              });
            });
          }
        }
      ]
    },
    {
      label: 'Banche Dati',
      submenu: [
        {
          label: 'Sincronizza Banche Dati Online (Anti-Cache)...',
          accelerator: 'CmdOrCtrl+Shift+D',
          click: () => {
            win?.webContents.send('db:sync-requested', { forceAntiCache: true });
          }
        },
        {
          label: 'Svuota Cache Locale Banche Dati',
          click: () => {
            win?.webContents.send('db:clear-cache-requested');
          }
        }
      ]
    },
    {
      label: 'Visualizza',
      submenu: [
        { label: 'Schermo Intero', role: 'togglefullscreen' },
        { label: 'Strumenti per Sviluppatori', role: 'toggleDevTools' }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // Auto Updater event listeners
  autoUpdater.on('checking-for-update', () => {
    logToFile('Checking for updates...');
    win?.webContents.send('updater:status', { status: 'checking' });
  });

  autoUpdater.on('update-available', (info) => {
    logToFile(`Update available: v${info.version}`);
    win?.webContents.send('updater:status', { status: 'available', info });
    if (isManualCheck) {
      isManualCheck = false;
    }
  });

  autoUpdater.on('update-not-available', (info) => {
    logToFile('No update available.');
    win?.webContents.send('updater:status', { status: 'not-available', info });
    if (isManualCheck) {
      isManualCheck = false;
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Nessun aggiornamento disponibile',
        message: `Hai già l'ultima versione installata (v${app.getVersion()}).`,
      });
    }
  });

  autoUpdater.on('download-progress', (progressObj) => {
    const percent = Math.round(progressObj.percent * 10) / 10;
    const mbSec = (progressObj.bytesPerSecond / (1024 * 1024)).toFixed(2);
    logToFile(`Download progress: ${percent}% (${mbSec} MB/s)`);
    win?.webContents.send('updater:progress', {
      percent: progressObj.percent,
      bytesPerSecond: progressObj.bytesPerSecond,
      transferred: progressObj.transferred,
      total: progressObj.total,
    });
    win?.webContents.send('updater:status', { status: 'downloading' });
  });

  autoUpdater.on('update-downloaded', (info) => {
    logToFile(`Update downloaded: v${info.version}`);
    win?.webContents.send('updater:status', { status: 'downloaded', info });
    win?.webContents.send('update-downloaded', info);
  });

  autoUpdater.on('error', (err) => {
    const msg = err instanceof Error ? err.message : String(err);
    logToFile('AutoUpdater error: ' + msg);
    win?.webContents.send('updater:status', { status: 'error', error: msg });
    if (isManualCheck) {
      isManualCheck = false;
      dialog.showMessageBox(win, {
        type: 'error',
        title: 'Errore',
        message: 'Impossibile verificare la presenza di aggiornamenti.',
        detail: msg,
      });
    }
  });

  // Avvia il check automatico silenzioso in background dopo 6 secondi
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch((err) => {
      logToFile('Background check error: ' + (err?.message || String(err)));
    });
  }, 6000);

  win.maximize();
  win.show();
}

// IPC Handlers
ipcMain.handle('updater:check', async () => {
  logToFile('IPC updater:check called');
  return await autoUpdater.checkForUpdates();
});

ipcMain.handle('updater:start-download', async () => {
  logToFile('IPC updater:start-download called');
  return await autoUpdater.downloadUpdate();
});

ipcMain.on('updater:install', () => {
  logToFile('IPC updater:install called');
  autoUpdater.quitAndInstall(false, true);
});

ipcMain.handle('updater:get-version', () => {
  return app.getVersion();
});

// Legacy backward compatibility
ipcMain.on('install-update', () => {
  autoUpdater.quitAndInstall(false, true);
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
