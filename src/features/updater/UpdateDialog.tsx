import { useState, useEffect } from 'react';
import { DownloadCloud, CheckCircle2, AlertTriangle, RefreshCw, X, ArrowRight, Zap } from 'lucide-react';
import type { UpdateProgress, UpdateStateData } from './updater.types';

interface UpdateDialogProps {
  state: UpdateStateData | null;
  progress: UpdateProgress | null;
  currentVersion: string;
  onDownload: () => void;
  onInstall: () => void;
  onDismiss: () => void;
}

const formatSize = (bytes: number): string => {
  if (!bytes || bytes <= 0) return '0 MB';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
};

const formatEta = (seconds: number | null): string => {
  if (seconds === null || seconds <= 0 || !isFinite(seconds)) return '';
  if (seconds < 60) return `~${seconds}s rimasti`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `~${m}m ${s}s rimasti`;
};

export function UpdateDialog({
  state,
  progress,
  currentVersion,
  onDownload,
  onInstall,
  onDismiss,
}: UpdateDialogProps) {
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    if (state?.status === 'downloaded' || state?.status === 'error') {
      setMinimized(false);
    }
  }, [state?.status]);

  if (!state || state.status === 'idle' || state.status === 'not-available') {
    return null;
  }

  const isDownloading = state.status === 'downloading';
  const isDownloaded = state.status === 'downloaded';
  const isError = state.status === 'error';
  const isAvailable = state.status === 'available';
  const version = state.info?.version ?? 'Nuova versione';

  const percent = progress?.percent ? Math.min(100, Math.max(0, Math.round(progress.percent * 10) / 10)) : 0;
  const speed = progress?.bytesPerSecond ? `${formatSize(progress.bytesPerSecond)}/s` : '';
  const transferred = progress ? `${formatSize(progress.transferred)} / ${formatSize(progress.total)}` : '';
  const remaining = progress && progress.total > progress.transferred ? progress.total - progress.transferred : 0;
  const eta = progress && progress.bytesPerSecond > 0 ? Math.ceil(remaining / progress.bytesPerSecond) : null;
  const etaText = formatEta(eta);

  if (minimized && isDownloading) {
    return (
      <div className="update-toast" style={{ cursor: 'pointer' }} onClick={() => setMinimized(false)}>
        <div className="update-toast-content">
          <DownloadCloud size={20} className="icon-logo spin-slow" style={{ color: 'var(--primary)' }} />
          <div>
            <strong>Download in corso ({percent}%)</strong>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85 }}>
              {speed} &middot; {transferred}
            </p>
          </div>
        </div>
        <button
          className="btn-secondary"
          style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem', width: 'auto' }}
          onClick={(e) => {
            e.stopPropagation();
            setMinimized(false);
          }}
        >
          Espandi
        </button>
      </div>
    );
  }

  return (
    <div className="sync-updater-overlay" onClick={() => (isDownloading ? setMinimized(true) : onDismiss())}>
      <div className="sync-updater-card" onClick={(e) => e.stopPropagation()}>
        <div className="sync-updater-glow-orb" />

        <div className="sync-updater-header" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className={`sync-status-icon-box ${isDownloading ? 'spinning' : ''}`}>
              {isError ? (
                <AlertTriangle size={26} />
              ) : isDownloaded ? (
                <CheckCircle2 size={26} />
              ) : (
                <DownloadCloud size={26} />
              )}
              {isDownloading && <div className="sync-status-ring" />}
            </div>
            <div className="sync-updater-titles">
              <h3>
                {isError
                  ? 'Errore Aggiornamento'
                  : isDownloaded
                  ? 'Aggiornamento Pronto'
                  : isDownloading
                  ? 'Download in Corso'
                  : 'Nuova Versione Disponibile'}
              </h3>
              <p>Aggiornamento automatico e integrità binaria</p>
            </div>
          </div>
          <button
            className="nav-icon-btn"
            onClick={() => (isDownloading ? setMinimized(true) : onDismiss())}
            style={{ border: 'none', background: 'var(--bg-inset)' }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <span className="meta-badge">v{currentVersion}</span>
          <ArrowRight size={14} style={{ color: 'var(--text-dim)' }} />
          <span className="meta-badge" style={{ background: 'var(--primary-gradient)', color: '#fff', border: 'none' }}>
            v{version}
          </span>
        </div>

        {isError && (
          <div className="modern-card" style={{ background: 'var(--incorrect-bg)', borderColor: 'var(--incorrect)', padding: '0.85rem 1rem', marginBottom: '1.25rem' }}>
            <strong style={{ color: 'var(--incorrect)', display: 'block', marginBottom: '0.25rem' }}>Errore</strong>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              {state.error || 'Impossibile completare il download dal server remoto.'}
            </span>
          </div>
        )}

        {isDownloading && (
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="sync-telemetry-row">
              <span className="sync-chip speed">
                <Zap size={13} /> {speed || 'Connessione...'}
              </span>
              <span className="sync-chip eta">
                {etaText || `${percent}%`}
              </span>
            </div>
            <div className="sync-progress-bar-container">
              <div className="sync-progress-bar-fill" style={{ width: `${percent}%` }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              <span>{transferred}</span>
              <span>Avanzamento: {percent}%</span>
            </div>
          </div>
        )}

        <div className="sync-actions-row">
          {isAvailable && (
            <>
              <button className="btn-secondary" onClick={onDismiss}>
                Più Tardi
              </button>
              <button className="btn-primary" onClick={onDownload}>
                <DownloadCloud size={16} /> Scarica Aggiornamento
              </button>
            </>
          )}

          {isDownloading && (
            <button className="btn-secondary" onClick={() => setMinimized(true)}>
              Riduci a Icona
            </button>
          )}

          {isDownloaded && (
            <>
              <button className="btn-secondary" onClick={onDismiss}>
                Alla Chiusura
              </button>
              <button
                className="btn-primary"
                style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                onClick={onInstall}
              >
                <RefreshCw size={16} /> Riavvia Ora
              </button>
            </>
          )}

          {isError && (
            <>
              <button className="btn-secondary" onClick={onDismiss}>
                Chiudi
              </button>
              <button className="btn-primary" onClick={onDownload}>
                <RefreshCw size={16} /> Riprova
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
