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
  fs.appendFileSync(logFilePath, `[${new Date().toISOString()}] ${msg}\n`);
}

process.on('uncaughtException', (err) => {
  logToFile(`UNCAUGHT EXCEPTION: ${err.stack || err.message}`);
});

// Distingue il check automatico all'avvio (silenzioso) da quello lanciato
// manualmente dal menu (che deve sempre dare un feedback all'utente).
let isManualCheck = false;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.cjs'),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });

    // Intercetta console logs di React
    win.webContents.on('console-message', (event, level, message, line, sourceId) => {
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
              autoUpdater.checkForUpdates().catch((err) => {
                isManualCheck = false;
                logToFile('Error in manual update check: ' + err.toString());
                dialog.showMessageBox(win, {
                  type: 'error',
                  title: 'Errore',
                  message: 'Impossibile verificare la presenza di aggiornamenti.',
                  detail: err instanceof Error ? err.message : String(err),
                });
              });
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

  // Auto Updater logic
  autoUpdater.on('update-available', (info) => {
    logToFile('Update available.');
    if (isManualCheck) {
      isManualCheck = false;
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Aggiornamento trovato',
        message: `È disponibile la versione ${info.version}.`,
        detail: 'Il download parte in background: riceverai un avviso in app quando sarà pronta da installare.',
      });
    }
  });

  autoUpdater.on('update-not-available', () => {
    logToFile('No update available.');
    if (isManualCheck) {
      isManualCheck = false;
      dialog.showMessageBox(win, {
        type: 'info',
        title: 'Nessun aggiornamento disponibile',
        message: `Hai già la versione più recente (v${app.getVersion()}).`,
      });
    }
  });

  autoUpdater.on('update-downloaded', (info) => {
    logToFile('Update downloaded.');
    win?.webContents.send('update-downloaded', info);
  });

  autoUpdater.on('error', (err) => {
    logToFile('Error in auto-updater: ' + err.toString());
    if (isManualCheck) {
      isManualCheck = false;
      dialog.showMessageBox(win, {
        type: 'error',
        title: 'Errore',
        message: 'Impossibile verificare la presenza di aggiornamenti.',
        detail: err.toString(),
      });
    }
  });

  // Avvia il check in background dopo 10 secondi per non rallentare l'avvio
  setTimeout(() => {
    autoUpdater.checkForUpdatesAndNotify();
  }, 10000);

  win.maximize();
  win.show();
}

// IPC endpoint to trigger the installation
ipcMain.on('install-update', () => {
  autoUpdater.quitAndInstall();
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
