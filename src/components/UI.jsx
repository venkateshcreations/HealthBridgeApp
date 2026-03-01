import React, { useState } from 'react';
import { SVG_PATHS } from '../data/theme';

// ── ICON ─────────────────────────────────────────────────
export function Icon({ name, size = 16, color = 'currentColor' }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: SVG_PATHS[name] || '' }}
    />
  );
}

// ── BADGE ─────────────────────────────────────────────────
export function Badge({ children, color, lg = false }) {
  return (
    <span
      className={`bdg${lg ? ' bdg-lg' : ''}`}
      style={{ background: color + '1A', color, borderColor: color + '33' }}
    >
      {children}
    </span>
  );
}

// ── BUTTON ────────────────────────────────────────────────
export function Btn({ children, color, sm = false, onClick }) {
  return (
    <button
      className={`btn${sm ? ' btn-sm' : ''}`}
      style={{ background: color + '15', borderColor: color + '44', color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// ── DOT ──────────────────────────────────────────────────
export function Dot({ color, pulse = false }) {
  return (
    <span
      className="dot"
      style={{
        background: color,
        ...(pulse ? { boxShadow: `0 0 8px ${color}`, animation: 'pulse 2s infinite' } : {}),
      }}
    />
  );
}

// ── STAT CARD ────────────────────────────────────────────
export function StatCard({ label, value, sub = '', color, icon = '◈', trend = null }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="sc"
      style={{ borderColor: hovered ? color + '44' : 'var(--border)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="sc-glow"
        style={{ background: `radial-gradient(circle at 100% 0%, ${color}18 0%, transparent 70%)` }}
      />
      <div className="sc-lbl">{label}</div>
      <div className="sc-val">{value}</div>
      <div className="sc-sub">
        {trend !== null && (
          <span className="sc-trend" style={{ color: trend > 0 ? 'var(--accent)' : 'var(--red)' }}>
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        )}
        {sub && <span className="sc-subtext" style={{ color }}>{sub}</span>}
      </div>
      <div className="sc-ico">{icon}</div>
    </div>
  );
}

// ── PROGRESS BAR ─────────────────────────────────────────
export function ProgressBar({ label, value, max = 100, color, sub = '' }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="pb">
      <div className="pb-hdr">
        <span className="pb-lbl">{label}</span>
        <span className="pb-pct" style={{ color }}>{pct}%</span>
      </div>
      <div className="pb-track">
        <div className="pb-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      {sub && <div className="pb-sub">{sub}</div>}
    </div>
  );
}

// ── RING CHART ───────────────────────────────────────────
export function Ring({ value, max = 100, color, size = 80, label = '' }) {
  const r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  const pct = value / max;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth="6"
          strokeDasharray={`${circ * pct} ${circ}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-in">
        <span className="ring-pct">{Math.round(pct * 100)}%</span>
        {label && <span className="ring-sub-lbl">{label}</span>}
      </div>
    </div>
  );
}

// ── SECTION HEADER ───────────────────────────────────────
export function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="sh">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

// ── SPARKLINE ────────────────────────────────────────────
export function Sparkline({ data, color }) {
  if (!data || data.length === 0) return null;
  const mx = Math.max(...data), mn = Math.min(...data);
  const norm = data.map(v => 1 - (v - mn) / (mx - mn || 1));
  const w = 100, h = 40, pad = 2;
  const pts = norm.map((n, i) => {
    const x = (i / (data.length - 1)) * (w - pad * 2) + pad;
    const y = n * (h - pad * 2) + pad;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg className="spark" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
