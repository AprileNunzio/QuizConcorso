import { useState, useEffect } from 'react';
import {
  Database, RefreshCw, CheckCircle2, AlertCircle, Sparkles,
  Layers, Award, BookOpen, X, ShieldCheck, HardDrive
} from 'lucide-react';
import { databaseRepo } from './DatabaseRepository';
import { syncWorker } from './OnlineSyncWorker';
import type { DatabaseOverview, SyncProgress } from './db.types';

interface DatabaseSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncCompleted?: () => void;
}

export function DatabaseSyncModal({ isOpen, onClose, onSyncCompleted }: DatabaseSyncModalProps) {
  const [overview, setOverview] = useState<DatabaseOverview | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState<SyncProgress | null>(null);
  const [syncSuccess, setSyncSuccess] = useState<boolean | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  const loadOverview = async () => {
    try {
      const data = await databaseRepo.getDatabaseOverview();
      setOverview(data);
    } catch {
      setOverview(null);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadOverview();
      setSyncSuccess(null);
      setSyncError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStartSync = async () => {
    setIsSyncing(true);
    setSyncSuccess(null);
    setSyncError(null);

    const result = await syncWorker.runSync(
      (p) => setSyncProgress(p),
      { forceAntiCache: true }
    );

    setIsSyncing(false);
    if (result.success) {
      setSyncSuccess(true);
      await loadOverview();
      onSyncCompleted?.();
    } else {
      setSyncError(result.error || 'Errore di sincronizzazione di rete');
    }
  };

  return (
    <div className="sync-updater-overlay" onClick={onClose}>
      <div
        className="sync-updater-card"
        style={{ maxWidth: '680px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sync-updater-glow-orb" />

        <div className="sync-updater-header" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className={`sync-status-icon-box ${isSyncing ? 'spinning' : ''}`}>
              <Database size={28} />
              {isSyncing && <div className="sync-status-ring" />}
            </div>
            <div className="sync-updater-titles">
              <h3>Centro Banche Dati &amp; Concorsi</h3>
              <p>Sincronizzazione cloud e analisi quantitativa dei quesiti</p>
            </div>
          </div>
          <button
            className="nav-icon-btn"
            onClick={onClose}
            style={{ border: 'none', background: 'var(--bg-inset)' }}
          >
            <X size={18} />
          </button>
        </div>

        {overview && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div className="modern-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
              <span className="kpi-label" style={{ justifyContent: 'center' }}><Layers size={13} /> Totale Domande</span>
              <span className="kpi-value" style={{ color: 'var(--primary)', fontSize: '1.75rem' }}>
                {overview.totalQuestions.toLocaleString('it-IT')}
              </span>
            </div>
            <div className="modern-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
              <span className="kpi-label" style={{ justifyContent: 'center' }}><BookOpen size={13} /> Bandi Catalogati</span>
              <span className="kpi-value" style={{ color: 'var(--accent-cyan)', fontSize: '1.75rem' }}>
                {overview.totalConcorsi}
              </span>
            </div>
            <div className="modern-card" style={{ padding: '0.85rem', textAlign: 'center' }}>
              <span className="kpi-label" style={{ justifyContent: 'center' }}><HardDrive size={13} /> Storage</span>
              <span className="kpi-value" style={{ color: 'var(--correct)', fontSize: '1.25rem', marginTop: '0.25rem' }}>
                IndexedDB
              </span>
            </div>
          </div>
        )}

        {isSyncing && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div className="sync-telemetry-row">
              <span className="sync-chip speed">
                <RefreshCw size={13} className="spin-icon" /> Anti-Cache Nonce
              </span>
              <span className="sync-chip eta">
                {syncProgress ? `${syncProgress.current}%` : '0%'}
              </span>
            </div>
            <div className="sync-progress-bar-container">
              <div
                className="sync-progress-bar-fill"
                style={{ width: `${syncProgress ? syncProgress.current : 5}%` }}
              />
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>
              {syncProgress?.message || 'Download incrementale da repository...'}
            </p>
          </div>
        )}

        {syncSuccess && (
          <div className="modern-card" style={{ background: 'var(--correct-bg)', borderColor: 'var(--correct)', padding: '0.85rem 1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle2 size={24} style={{ color: 'var(--correct)', flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--correct)', display: 'block' }}>Banca Dati Aggiornata con Successo</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>I quesiti e i bandi ufficiali sono sincronizzati alla versione remota più recente.</span>
            </div>
          </div>
        )}

        {syncError && (
          <div className="modern-card" style={{ background: 'var(--incorrect-bg)', borderColor: 'var(--incorrect)', padding: '0.85rem 1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <AlertCircle size={24} style={{ color: 'var(--incorrect)', flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--incorrect)', display: 'block' }}>Errore di Sincronizzazione</strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{syncError}</span>
            </div>
          </div>
        )}

        {overview && (
          <div style={{ maxHeight: '200px', overflowY: 'auto', paddingRight: '0.35rem', marginBottom: '1.25rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-dim)' }}>
              Dettaglio Bandi &amp; Concorsi
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {overview.concorsi.map((c) => (
                <div key={c.id} className="concorso-reset-row" style={{ padding: '0.65rem 0.85rem' }}>
                  <div>
                    <strong style={{ fontSize: '0.88rem' }}>{c.titolo}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{c.ente} &middot; {c.posti}</span>
                  </div>
                  <span className="meta-badge" style={{ margin: 0, padding: '0.25rem 0.65rem' }}>
                    {c.totaleDomande} domande
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="sync-actions-row">
          <button className="btn-secondary" onClick={onClose} disabled={isSyncing}>
            Chiudi
          </button>
          <button className="btn-primary" onClick={handleStartSync} disabled={isSyncing}>
            <RefreshCw size={16} className={isSyncing ? 'spin-icon' : ''} />
            {isSyncing ? 'Sincronizzazione in corso...' : 'Sincronizza Ora'}
          </button>
        </div>
      </div>
    </div>
  );
}
