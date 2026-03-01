import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { StatCard, ProgressBar, Badge, Dot, Icon } from '../components/UI';

export default function Dashboard({ onNavigate }) {
  const { C } = useTheme();

  const kpi = [
    { label: 'Active Kiosks', value: '142', sub: '18 districts', color: C.accent, icon: '⬡', trend: 4 },
    { label: 'Sessions Today', value: '8,341', sub: 'peak: 2pm–4pm', color: C.blue, icon: '◈', trend: 12 },
    { label: 'Screenings Done', value: '6,207', sub: 'last 24 hrs', color: C.purple, icon: '◉', trend: 8 },
    { label: 'Emergency Alerts', value: '2', sub: 'needs attention', color: C.red, icon: '🚨', trend: -1 },
  ];

  const wk = [4200, 5100, 6300, 5800, 7200, 8100, 8341];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const mods = [
    { l: 'Kiosk Management', i: 'phone', c: C.accent, p: 'kiosk-devices', a: 3 },
    { l: 'Health Analytics', i: 'activity', c: C.blue, p: 'health-screenings', a: 1 },
    { l: 'Telemedicine', i: 'video', c: C.purple, p: 'tc-doctors' },
    { l: 'Emergency Response', i: 'alert', c: C.red, p: 'em-incidents', a: 2 },
    { l: 'Mental Wellness', i: 'heart', c: C.pink, p: 'mw-assessments' },
    { l: 'Content & Education', i: 'book', c: C.amber, p: 'ct-alerts' },
    { l: 'Privacy & Security', i: 'shield', c: C.teal, p: 'pv-audit' },
    { l: 'System Settings', i: 'settings', c: C.mid, p: 'st-roles' },
  ];

  const acts = [
    { m: 'Kiosk HYD-042 went offline', t: '2m ago', c: C.amber },
    { m: 'Emergency alert raised at CHN-011', t: '14m ago', c: C.red },
    { m: 'Outbreak flag raised in District 7', t: '1h ago', c: C.amber },
    { m: '312 screenings completed in Pune zone', t: '2h ago', c: C.blue },
    { m: 'New NGO partner CARE India onboarded', t: '3h ago', c: C.accent },
    { m: 'AI risk model v2.3 deployed successfully', t: '5h ago', c: C.blue },
    { m: 'Offline sync completed: 8 rural kiosks', t: '6h ago', c: C.accent },
  ];

  return (
    <div className="page">
      <div className="sh">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back, Super Admin · All systems operational</p>
        </div>
      </div>

      <div className="g4">
        {kpi.map((k, i) => <StatCard key={i} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 340px', gap: 14, marginBottom: 24 }}>
        <div className="card cp" style={{ gridColumn: '1/3' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>Weekly Session Volume</div>
              <div style={{ fontSize: 11, color: 'var(--textMid)' }}>Kiosk interactions across all regions</div>
            </div>
            <Badge color={C.accent}>Live</Badge>
          </div>
          <div className="barchart">
            {days.map((d, i) => (
              <div key={d} className="barcol">
                <div
                  className="bar"
                  style={{ height: `${(wk[i] / 8341) * 80}px`, background: i === 6 ? C.accent : C.blue + '55' }}
                />
                <span className="barday" style={{ color: i === 6 ? C.accent : 'var(--textLow)', fontWeight: i === 6 ? 700 : 400 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card cp">
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>System Health</div>
          <div style={{ fontSize: 11, color: 'var(--textMid)', marginBottom: 20 }}>Infrastructure status</div>
          <ProgressBar label="Kiosks Online" value={139} max={142} color={C.accent} />
          <ProgressBar label="API Uptime" value={99.8} max={100} color={C.blue} />
          <ProgressBar label="Data Sync" value={94} max={100} color={C.purple} />
          <ProgressBar label="Solar Powered" value={38} max={142} color={C.amber} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 24 }}>
        {mods.map(m => (
          <div
            key={m.p}
            className="card"
            style={{ padding: 18, cursor: 'pointer' }}
            onClick={() => onNavigate(m.p)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: m.c + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', color: m.c, marginBottom: 12 }}>
                <Icon name={m.i} size={16} color={m.c} />
              </div>
              {m.a && <Badge color={C.red}>{m.a}</Badge>}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{m.l}</div>
            <div style={{ fontSize: 11, color: m.c, marginTop: 4 }}>View module →</div>
          </div>
        ))}
      </div>

      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Recent Activity</div>
        <div className="actg">
          {acts.map((a, i) => (
            <div key={i} className="acti">
              <span style={{ marginTop: 4, flexShrink: 0 }}>
                <Dot color={a.c} pulse={a.c === C.red} />
              </span>
              <div>
                <div style={{ fontSize: 12, color: 'var(--textMid)' }}>{a.m}</div>
                <div style={{ fontSize: 10, color: 'var(--textLow)', marginTop: 2 }}>{a.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
