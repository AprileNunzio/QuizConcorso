import { GraduationCap, Home, BookOpen, Activity, Zap, Settings, Database } from 'lucide-react';
import type { ReactNode } from 'react';

export type ViewName = 'home' | 'allenamento' | 'ripasso' | 'statistiche' | 'impostazioni';

interface ShellProps {
  currentView: ViewName;
  onNavigate: (view: ViewName) => void;
  globalIQ: number;
  dueCount?: number;
  onOpenDbSync?: () => void;
  children: ReactNode;
}

export function Shell({ currentView, onNavigate, globalIQ, dueCount = 0, onOpenDbSync, children }: ShellProps) {
  return (
    <>
      <div className="app-backdrop">
        <div className="aurora-blob b1" />
        <div className="aurora-blob b2" />
        <div className="aurora-blob b3" />
      </div>

      <nav className="app-shell-nav">
        <div className="brand-lockup" onClick={() => onNavigate('home')}>
          <div className="brand-mark">
            <GraduationCap size={22} />
          </div>
          <div className="brand-text">
            <strong>Quiz &amp; Concorsi</strong>
            <span>Platform v2.0</span>
          </div>
        </div>

        <div className="nav-pills">
          <button className={`nav-pill ${currentView === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>
            <Home size={16} /> Hub
          </button>
          <button className={`nav-pill ${currentView === 'allenamento' ? 'active' : ''}`} onClick={() => onNavigate('allenamento')}>
            <BookOpen size={16} /> Allenamento
          </button>
          <button className={`nav-pill ${currentView === 'ripasso' ? 'active' : ''}`} onClick={() => onNavigate('ripasso')}>
            <Zap size={16} /> Ripasso {dueCount > 0 && <span className="nav-pill-badge">{dueCount}</span>}
          </button>
          <button className={`nav-pill ${currentView === 'statistiche' ? 'active' : ''}`} onClick={() => onNavigate('statistiche')}>
            <Activity size={16} /> Statistiche
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {onOpenDbSync && (
            <button
              className="btn-secondary"
              style={{ width: 'auto', padding: '0.42rem 0.85rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
              onClick={onOpenDbSync}
              title="Centro Banche Dati & Concorsi"
            >
              <Database size={15} style={{ color: 'var(--primary)' }} />
              <span>Banche Dati</span>
            </button>
          )}

          <div className="nav-live-chip">
            <span className="dot" />
            QI {globalIQ}
          </div>

          <button
            className={`nav-icon-btn ${currentView === 'impostazioni' ? 'active' : ''}`}
            onClick={() => onNavigate('impostazioni')}
            title="Impostazioni"
          >
            <Settings size={18} />
          </button>
        </div>
      </nav>

      {children}
    </>
  );
}
