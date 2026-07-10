import { GraduationCap, Home, BookOpen, Activity, Zap, Settings } from 'lucide-react';
import type { ReactNode } from 'react';

export type ViewName = 'home' | 'allenamento' | 'ripasso' | 'statistiche' | 'impostazioni';

interface ShellProps {
  currentView: ViewName;
  onNavigate: (view: ViewName) => void;
  globalIQ: number;
  dueCount?: number;
  children: ReactNode;
}

export function Shell({ currentView, onNavigate, globalIQ, dueCount = 0, children }: ShellProps) {
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
            <GraduationCap size={20} />
          </div>
          <div className="brand-text">
            <strong>Quiz &amp; Concorsi</strong>
            <span>Study Terminal</span>
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
      </nav>

      {children}
    </>
  );
}
