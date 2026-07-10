import { useState } from 'react';
import { Settings, Trash2, ShieldAlert, Info, Database, CheckCircle2 } from 'lucide-react';
import type { UserStatistics } from '../services/StatisticsManager';
import { StatisticsManager } from '../services/StatisticsManager';
import { WeaknessTracker } from '../services/WeaknessTracker';
import { PageNav } from './PageNav';

interface ImpostazioniProps {
  userStats: UserStatistics;
  onBack: () => void;
  onDataReset: () => void;
}

const CONFIRM_WORD = 'ELIMINA';

export function Impostazioni({ userStats, onBack, onDataReset }: ImpostazioniProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');
  const [justReset, setJustReset] = useState(false);

  const totalTracked = WeaknessTracker.totalTracked();
  const canConfirm = confirmText.trim().toUpperCase() === CONFIRM_WORD;

  const handleConfirmReset = () => {
    StatisticsManager.resetAll();
    WeaknessTracker.reset();
    setConfirmOpen(false);
    setConfirmText('');
    setJustReset(true);
    onDataReset();
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

      <div className="section-heading" style={{ margin: '0 0 0.75rem' }}>
        <div>
          <span className="eyebrow">App</span>
          <h3>Informazioni</h3>
        </div>
      </div>

      <div className="modern-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
          <Info size={18} style={{ color: 'var(--text-dim)' }} />
          <strong>Quiz &amp; Concorsi</strong>
        </div>
        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Versione {__APP_VERSION__} &middot; by Aprile Nunzio (NunzioTech)
        </p>
      </div>
    </div>
  );
}
