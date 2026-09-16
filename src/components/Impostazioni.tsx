import { useMemo, useRef, useState, useEffect } from 'react';
import { Settings, Trash2, ShieldAlert, Info, Database, CheckCircle2, Download, Upload, X, RefreshCw } from 'lucide-react';
import type { UserStatistics } from '../services/StatisticsManager';
import { StatisticsManager } from '../services/StatisticsManager';
import { WeaknessTracker } from '../services/WeaknessTracker';
import { BackupService } from '../services/BackupService';
import { syncWorker } from '../features/database';
import type { SyncMetadata } from '../features/database';
import { PageNav } from './PageNav';

interface ImpostazioniProps {
  userStats: UserStatistics;
  onBack: () => void;
  onDataChanged: () => void;
}

const CONFIRM_WORD = 'ELIMINA';

export function Impostazioni({ userStats, onBack, onDataChanged }: ImpostazioniProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [justReset, setJustReset] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState<string | null>(null);
  const [syncMeta, setSyncMeta] = useState<SyncMetadata | null>(null);
  const [checkingAppUpdate, setCheckingAppUpdate] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    syncWorker.getMetadata().then((meta) => {
      if (meta) setSyncMeta(meta);
    });
  }, []);

  const handleManualSync = async () => {
    setSyncing(true);
    setSyncProgress('Avvio sincronizzazione online...');
    try {
      const result = await syncWorker.runSync((p) => {
        setSyncProgress(p.message);
      });
      if (result.success) {
        const updatedMeta = await syncWorker.getMetadata();
        setSyncMeta(updatedMeta);
        onDataChanged();
      } else {
        setSyncProgress(`Sincronizzazione non riuscita: ${result.error || 'Server non raggiungibile'}`);
      }
    } catch {
      setSyncProgress('Errore imprevisto durante la sincronizzazione.');
    } finally {
      setSyncing(false);
    }
  };

  const handleCheckAppUpdate = async () => {
    setCheckingAppUpdate(true);
    try {
      if ((window as any).updaterAPI) {
        await (window as any).updaterAPI.checkForUpdates();
      } else {
        alert('Controllo aggiornamenti disponibile nella versione desktop dell\'applicazione.');
      }
    } catch (e: any) {
      alert('Errore nella verifica degli aggiornamenti: ' + (e?.message || String(e)));
    } finally {
      setCheckingAppUpdate(false);
    }
  };

  const totalTracked = WeaknessTracker.totalTracked();
  const canConfirm = confirmText.trim().toUpperCase() === CONFIRM_WORD;
  const trackedConcorsi = useMemo(() => StatisticsManager.getTrackedConcorsi(userStats), [userStats]);

  const handleConfirmReset = () => {
    StatisticsManager.resetAll();
    WeaknessTracker.reset();
    setConfirmOpen(false);
    setConfirmText('');
    setJustReset(true);
    setImportSuccess(false);
    onDataChanged();
  };

  const handleResetConcorso = (concorsoId: string, concorsoTitle: string) => {
    const proceed = window.confirm(
      `Cancellare lo storico e le statistiche di "${concorsoTitle}"?\n\nIl progresso di ripasso delle singole domande non viene toccato (è condiviso con gli altri concorsi). L'azione non è reversibile.`
    );
    if (!proceed) return;
    StatisticsManager.resetConcorso(concorsoId);
    onDataChanged();
  };

  const handleExport = () => {
    const backup = BackupService.createBackup();
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quiz-concorso-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const backup = BackupService.parseBackup(String(reader.result));
        const proceed = window.confirm(
          'Ripristinare questo backup sovrascriverà tutti i dati attuali su questo dispositivo. Continuare?'
        );
        if (!proceed) return;
        BackupService.restoreBackup(backup);
        setImportError(null);
        setImportSuccess(true);
        setJustReset(false);
        onDataChanged();
      } catch (err) {
        setImportError(err instanceof Error ? err.message : "Errore durante l'importazione del backup.");
      }
    };
    reader.onerror = () => setImportError('Impossibile leggere il file selezionato.');
    reader.readAsText(file);
  };

  return (
    <div className="dashboard">
      <PageNav onBack={onBack} backLabel="Torna all'Hub" onDashboard={onBack} crumb="Dashboard / Impostazioni" />

      <header className="modern-header" style={{ marginBottom: '1.1rem' }}>
        <Settings size={32} className="icon-logo" />
        <h1>Impostazioni</h1>
        <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 0' }}>Gestisci i dati salvati su questo dispositivo.</p>
      </header>

      {justReset && (
        <div className="modern-card" style={{ marginBottom: '1.5rem', borderColor: 'var(--correct)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <CheckCircle2 size={20} style={{ color: 'var(--correct)', flexShrink: 0 }} />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tutti i dati sono stati cancellati. L'app riparte da zero.</span>
        </div>
      )}

      {importSuccess && (
        <div className="modern-card" style={{ marginBottom: '1.5rem', borderColor: 'var(--correct)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <CheckCircle2 size={20} style={{ color: 'var(--correct)', flexShrink: 0 }} />
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Backup ripristinato con successo.</span>
        </div>
      )}

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Dati e Privacy</span>
          <h3>Il tuo Database Locale</h3>
        </div>
      </div>

      <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 0 }}>
          Statistiche, cronologia dei quiz e progressi di ripasso sono salvati solo su questo dispositivo:
          non vengono mai inviati a nessun server.
        </p>

        <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '1.25rem' }}>
          <div className="modern-card kpi-card">
            <span className="kpi-label"><Database size={13} /> Quiz Salvati</span>
            <span className="kpi-value">{userStats.totalQuizzesTaken}</span>
          </div>
          <div className="modern-card kpi-card">
            <span className="kpi-label"><Database size={13} /> Domande Risposte</span>
            <span className="kpi-value">{userStats.totalQuestionsAnswered}</span>
          </div>
          <div className="modern-card kpi-card">
            <span className="kpi-label"><Database size={13} /> In Ripasso</span>
            <span className="kpi-value">{totalTracked}</span>
          </div>
        </div>

        {!confirmOpen ? (
          <button className="btn-danger" style={{ width: 'auto' }} onClick={() => { setConfirmOpen(true); setJustReset(false); }}>
            <Trash2 size={18} /> Cancella Tutti i Dati
          </button>
        ) : (
          <div className="danger-zone">
            <div className="danger-zone-header">
              <ShieldAlert size={20} />
              <strong>Questa azione è irreversibile</strong>
            </div>
            <p style={{ margin: '0 0 0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Verranno cancellati per sempre: QI, storico delle sessioni, statistiche per materia e per
              concorso, e tutti i progressi di ripasso (SM-2). Per confermare scrivi <strong>{CONFIRM_WORD}</strong> qui sotto.
            </p>
            <input
              className="danger-zone-input"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={CONFIRM_WORD}
              autoFocus
            />
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.85rem' }}>
              <button className="btn-secondary" style={{ width: 'auto' }} onClick={() => { setConfirmOpen(false); setConfirmText(''); }}>
                Annulla
              </button>
              <button className="btn-danger" style={{ width: 'auto' }} disabled={!canConfirm} onClick={handleConfirmReset}>
                <Trash2 size={18} /> Conferma Cancellazione
              </button>
            </div>
          </div>
        )}
      </div>

      {trackedConcorsi.length > 0 && (
        <>
          <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
            <div>
              <span className="eyebrow">Reset mirato</span>
              <h3>Dati per Concorso</h3>
            </div>
          </div>

          <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: 0 }}>
              Vuoi ripartire da zero solo su un concorso specifico, senza toccare il resto? Il progresso di
              ripasso per domanda resta invariato: è condiviso tra tutti i concorsi.
            </p>
            <div className="concorso-reset-list">
              {trackedConcorsi.map((c) => (
                <div key={c.concorsoId} className="concorso-reset-row">
                  <div>
                    <strong>{c.concorsoTitle}</strong>
                    <span className="concorso-reset-count">{c.attempts} {c.attempts === 1 ? 'tentativo' : 'tentativi'} registrati</span>
                  </div>
                  <button className="session-review-btn" style={{ color: 'var(--incorrect)' }} onClick={() => handleResetConcorso(c.concorsoId, c.concorsoTitle)}>
                    <X size={14} /> Cancella
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Backup</span>
          <h3>Esporta e Ripristina</h3>
        </div>
      </div>

      <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 0 }}>
          Salva un file con tutti i tuoi dati per non perderli se reinstalli l'app o cambi computer, e
          ripristinali quando vuoi.
        </p>
        {importError && (
          <p style={{ color: 'var(--incorrect)', fontSize: '0.85rem', marginTop: 0 }}>{importError}</p>
        )}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <button className="btn-secondary" style={{ width: 'auto' }} onClick={handleExport}>
            <Download size={18} /> Esporta Backup
          </button>
          <button className="btn-secondary" style={{ width: 'auto' }} onClick={handleImportClick}>
            <Upload size={18} /> Importa Backup
          </button>
          <input ref={fileInputRef} type="file" accept="application/json,.json" style={{ display: 'none' }} onChange={handleFileChange} />
        </div>
      </div>

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">Cloud &amp; Aggiornamenti</span>
          <h3>Banche Dati Online (OTA)</h3>
        </div>
      </div>

      <div className="modern-card" style={{ marginBottom: '1.5rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: 0 }}>
          I concorsi e le banche dati delle domande vengono sincronizzati direttamente dal repository online di GitHub:
          puoi aggiornare le domande in qualsiasi momento senza dover scaricare un nuovo file di installazione del programma.
        </p>

        {syncMeta && (
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            <div>
              <span style={{ color: 'var(--text-dim)' }}>Ultima sincronizzazione: </span>
              <strong>{new Date(syncMeta.lastSyncTimestamp).toLocaleString('it-IT')}</strong>
            </div>
            {syncMeta.totalQuestions > 0 && (
              <div>
                <span style={{ color: 'var(--text-dim)' }}>Domande in archivio: </span>
                <strong style={{ color: 'var(--primary)' }}>{syncMeta.totalQuestions.toLocaleString('it-IT')}</strong>
              </div>
            )}
          </div>
        )}

        {syncProgress && (
          <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', color: 'var(--primary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
            {syncProgress}
          </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            style={{ width: 'auto' }}
            disabled={syncing}
            onClick={handleManualSync}
          >
            <RefreshCw size={18} className={syncing ? 'spin-slow' : ''} />
            {syncing ? 'Sincronizzazione in corso...' : 'Sincronizza Banche Dati Online'}
          </button>
        </div>
      </div>

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">App</span>
          <h3>Informazioni &amp; Software</h3>
        </div>
      </div>

      <div className="modern-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <Info size={18} style={{ color: 'var(--text-dim)' }} />
              <strong>Quiz &amp; Concorsi Hub</strong>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Versione {__APP_VERSION__} &middot; by Aprile Nunzio (NunzioTech)
            </p>
          </div>

          <button
            className="btn-secondary"
            style={{ width: 'auto' }}
            disabled={checkingAppUpdate}
            onClick={handleCheckAppUpdate}
          >
            <Download size={18} className={checkingAppUpdate ? 'spin-slow' : ''} />
            {checkingAppUpdate ? 'Verifica in corso...' : 'Verifica Aggiornamenti Software'}
          </button>
        </div>
      </div>
    </div>
  );
}
