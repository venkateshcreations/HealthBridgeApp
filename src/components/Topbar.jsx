import React from 'react';
import { NAV } from '../data/navigation';
import { useTheme } from '../hooks/useTheme';

export default function Topbar({ collapsed, onToggleSidebar, activePage, onNavigate }) {
  const { isDark, toggle } = useTheme();

  // Breadcrumb logic
  let label = 'Dashboard', parent = null;
  for (const n of NAV) {
    if (n.id === activePage) { label = n.label; break; }
    for (const c of n.children) {
      if (c.id === activePage) { label = c.label; parent = n; break; }
    }
    if (parent) break;
  }

  return (
    <header className="topbar">
      <button className="tbb" onClick={onToggleSidebar}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div className="bc">
        <span style={{ color: 'var(--textLow)' }}>HealthBridge</span>
        <span style={{ color: 'var(--textLow)' }}>›</span>
        {parent && (
          <>
            <span className="bc-par" onClick={() => onNavigate(parent.children[0].id)}>
              {parent.label}
            </span>
            <span style={{ color: 'var(--textLow)' }}>›</span>
          </>
        )}
        <span className="bc-act">{label}</span>
      </div>

      <div className="tr">
        <div className="live-pill">
          <span className="live-d" />
          <span className="live-t">LIVE</span>
        </div>

        <button className="tbb notif-wrap">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="notif-d" />
        </button>

        <button className="tbb">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
        </button>

        <button className="theme-btn" onClick={toggle}>
          <span style={{ display: 'flex', alignItems: 'center', width: 16, height: 16 }}>
            {isDark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              </svg>
            )}
          </span>
          {isDark ? 'Light' : 'Dark'}
        </button>

        <button className="sa-btn">SA</button>
      </div>
    </header>
  );
}
