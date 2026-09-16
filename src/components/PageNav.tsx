import { ArrowLeft, LayoutDashboard } from 'lucide-react';

interface PageNavProps {
  onBack?: () => void;
  backLabel?: string;
  onDashboard: () => void;
  crumb?: string;
}

export function PageNav({ onBack, backLabel = 'Indietro', onDashboard, crumb }: PageNavProps) {
  return (
    <div className="page-nav">
      <div className="page-nav-group">
        {onBack && (
          <button className="page-nav-btn" onClick={onBack}>
            <ArrowLeft size={14} /> {backLabel}
          </button>
        )}
        <button className="page-nav-btn" onClick={onDashboard}>
          <LayoutDashboard size={14} /> Dashboard
        </button>
      </div>
      {crumb && <span className="page-nav-crumb">{crumb}</span>}
    </div>
  );
}
