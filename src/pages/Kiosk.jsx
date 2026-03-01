import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { StatCard, Badge, Btn, Dot, Ring, SectionHeader } from '../components/UI';

const KIOSKS = [
  { id: 'HYD-042', loc: 'Hyderabad Central', status: 'offline', bp: '112/74', spo2: '98', bmi: '22.4', last: '2m ago', solar: false },
  { id: 'MUM-017', loc: 'Mumbai Kurla', status: 'online', bp: '118/76', spo2: '99', bmi: '23.1', last: 'Just now', solar: true },
  { id: 'CHN-011', loc: 'Chennai T.Nagar', status: 'alert', bp: '—', spo2: '—', bmi: '—', last: '14m ago', solar: false },
  { id: 'DEL-093', loc: 'Delhi Rohini', status: 'online', bp: '124/80', spo2: '97', bmi: '24.8', last: 'Just now', solar: true },
  { id: 'BLR-055', loc: 'Bengaluru BTM', status: 'online', bp: '116/72', spo2: '99', bmi: '21.6', last: '1m ago', solar: true },
  { id: 'PUN-028', loc: 'Pune Hadapsar', status: 'maintenance', bp: '—', spo2: '—', bmi: '—', last: '2h ago', solar: false },
  { id: 'KOL-014', loc: 'Kolkata Salt Lake', status: 'online', bp: '110/70', spo2: '98', bmi: '22.0', last: 'Just now', solar: false },
  { id: 'AHM-033', loc: 'Ahmedabad Navrangpura', status: 'online', bp: '120/78', spo2: '99', bmi: '23.9', last: '3m ago', solar: true },
];

export function KioskDevices() {
  const { C } = useTheme();
  const [filter, setFilter] = useState('all');
  const sCol = { online: C.accent, offline: C.low, alert: C.red, maintenance: C.amber };
  const sLbl = { online: 'Online', offline: 'Offline', alert: 'Alert', maintenance: 'Maintenance' };
  const filtered = filter === 'all' ? KIOSKS : KIOSKS.filter(k => k.status === filter);

  return (
    <div className="page">
      <SectionHeader title="All Devices" subtitle={`${KIOSKS.length} kiosks registered · ${KIOSKS.filter(k => k.status === 'online').length} online`}
        action={<Btn color={C.accent}>+ Add Kiosk</Btn>} />
      <div className="g4">
        <StatCard label="Total" value={142} color={C.blue} icon="⬡" />
        <StatCard label="Online" value={139} color={C.accent} icon="⬡" />
        <StatCard label="Offline / Alert" value={3} color={C.red} icon="⬡" />
        <StatCard label="Solar Powered" value={38} sub="27% of fleet" color={C.amber} icon="☀" />
      </div>
      <div className="card">
        <div className="ftabs">
          {['all', 'online', 'offline', 'alert', 'maintenance'].map(f => (
            <button key={f} className={`ftab${filter === f ? ' act' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <table className="tbl">
          <thead><tr>{['Kiosk ID', 'Location', 'Status', 'BP', 'SpO₂', 'BMI', 'Solar', 'Last Active', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {filtered.map(k => (
              <tr key={k.id} className={k.status === 'alert' ? 'hi' : ''}>
                <td><span style={{ fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace', fontSize: 12 }}>{k.id}</span></td>
                <td>{k.loc}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Dot color={sCol[k.status]} pulse={k.status === 'alert'} />
                    <span style={{ color: sCol[k.status], fontSize: 11, fontWeight: 600 }}>{sLbl[k.status]}</span>
                  </div>
                </td>
                <td>{k.bp}</td><td>{k.spo2}</td><td>{k.bmi}</td>
                <td>{k.solar ? <Badge color={C.amber}>☀ Solar</Badge> : <span style={{ color: 'var(--textLow)' }}>—</span>}</td>
                <td><span style={{ color: 'var(--textLow)' }}>{k.last}</span></td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Btn color={C.blue} sm>View</Btn>
                    <Btn color={C.mid} sm>Edit</Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function KioskStatus() {
  const { C } = useTheme();
  const zones = [
    { name: 'Hyderabad Zone', k: 24, on: 23, s: 1420, c: C.accent },
    { name: 'Mumbai Zone', k: 31, on: 31, s: 2100, c: C.blue },
    { name: 'Chennai Zone', k: 18, on: 16, s: 980, c: C.purple },
    { name: 'Delhi Zone', k: 28, on: 27, s: 1840, c: C.amber },
    { name: 'Bengaluru Zone', k: 22, on: 22, s: 1560, c: C.pink },
    { name: 'Kolkata Zone', k: 19, on: 19, s: 1100, c: C.teal },
  ];
  const feed = [
    { id: 'MUM-017', ev: 'BP screening completed', t: '12:04:32', c: C.accent },
    { id: 'DEL-093', ev: 'Teleconsult session started', t: '12:04:28', c: C.blue },
    { id: 'BLR-055', ev: 'Emergency alert triggered', t: '12:04:11', c: C.red },
    { id: 'KOL-014', ev: 'QR report generated', t: '12:03:55', c: C.accent },
    { id: 'AHM-033', ev: 'BMI screening completed', t: '12:03:44', c: C.accent },
    { id: 'PUN-028', ev: 'Offline sync initiated', t: '12:03:12', c: C.amber },
  ];

  return (
    <div className="page">
      <SectionHeader title="Live Status" subtitle="Real-time kiosk health across all zones" action={<Badge color={C.accent}>● Live</Badge>} />
      <div className="g3c mb24">
        {zones.map(z => (
          <div key={z.name} className="card cp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{z.name}</div>
              <Dot color={z.on === z.k ? C.accent : C.amber} pulse />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>{z.on}/{z.k}</div>
                <div style={{ fontSize: 10, color: 'var(--textLow)' }}>ONLINE</div>
              </div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 800, color: z.c }}>{z.s.toLocaleString()}</div>
                <div style={{ fontSize: 10, color: 'var(--textLow)' }}>SESSIONS TODAY</div>
              </div>
            </div>
            <div style={{ height: 3, background: 'var(--border)', borderRadius: 4 }}>
              <div style={{ width: `${(z.on / z.k) * 100}%`, height: '100%', background: z.c, borderRadius: 4 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 14 }}>Kiosk Activity Feed (Live)</div>
        {feed.map((f, i) => (
          <div key={i} className="feed-row">
            <Dot color={f.c} />
            <span className="feed-id" style={{ color: f.c }}>{f.id}</span>
            <span style={{ flex: 1, fontSize: 12, color: 'var(--textMid)' }}>{f.ev}</span>
            <span style={{ fontSize: 10, color: 'var(--textLow)', fontFamily: 'monospace' }}>{f.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KioskMaintenance() {
  const { C } = useTheme();
  const q = [
    { id: 'HYD-042', issue: 'Network module failure', priority: 'High', tech: 'Ravi Kumar', eta: 'Today 3pm' },
    { id: 'CHN-011', issue: 'Emergency button unresponsive', priority: 'Critical', tech: 'Priya S.', eta: 'Today 1pm' },
    { id: 'PUN-028', issue: 'BP sensor calibration', priority: 'Medium', tech: 'Amit D.', eta: 'Tomorrow 10am' },
    { id: 'KOL-031', issue: 'Screen tint module stuck', priority: 'Low', tech: 'Sunita R.', eta: 'Thu 2pm' },
    { id: 'AHM-019', issue: 'Solar panel cleaning', priority: 'Low', tech: 'Mohan V.', eta: 'Fri 9am' },
  ];
  const pc = { Critical: C.red, High: C.amber, Medium: C.blue, Low: C.mid };

  return (
    <div className="page">
      <SectionHeader title="Maintenance Queue" subtitle="Scheduled and pending service tasks" action={<Btn color={C.amber}>Schedule Service</Btn>} />
      <div className="g4">
        <StatCard label="Critical" value={1} color={C.red} icon="🔧" />
        <StatCard label="High Priority" value={1} color={C.amber} icon="🔧" />
        <StatCard label="Pending" value={5} color={C.blue} icon="🔧" />
        <StatCard label="Resolved Today" value={3} color={C.accent} icon="✓" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Kiosk ID', 'Issue', 'Priority', 'Assigned To', 'ETA', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {q.map(r => (
              <tr key={r.id} className={r.priority === 'Critical' ? 'hi' : ''}>
                <td><span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--text)' }}>{r.id}</span></td>
                <td>{r.issue}</td>
                <td><Badge color={pc[r.priority]}>{r.priority}</Badge></td>
                <td>{r.tech}</td><td>{r.eta}</td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Btn color={C.accent} sm>Resolve</Btn>
                    <Btn color={C.mid} sm>Reassign</Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function KioskDeploy() {
  const { C } = useTheme();
  const pts = [
    { x: 28, y: 42, l: 'Delhi', n: 28, c: C.blue },
    { x: 22, y: 62, l: 'Mumbai', n: 31, c: C.purple },
    { x: 45, y: 72, l: 'Hyderabad', n: 24, c: C.accent },
    { x: 50, y: 85, l: 'Chennai', n: 18, c: C.pink },
    { x: 42, y: 65, l: 'Pune', n: 19, c: C.amber },
    { x: 40, y: 52, l: 'Bhopal', n: 8, c: C.teal },
    { x: 55, y: 65, l: 'Bengaluru', n: 22, c: C.red },
    { x: 68, y: 48, l: 'Kolkata', n: 19, c: C.accent },
  ];

  return (
    <div className="page">
      <SectionHeader title="Deployment Map" subtitle="Geographic distribution of HealthBridge kiosks" action={<Btn color={C.blue}>Export KML</Btn>} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 14 }}>
        <div className="card" style={{ minHeight: 480, position: 'relative', overflow: 'hidden' }}>
          <div className="mapwrap">
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', opacity: 0.1 }}>
              <path d="M30 15 L50 10 L70 18 L80 30 L78 50 L70 70 L60 85 L50 90 L40 88 L28 78 L20 62 L18 45 L22 28 Z" fill="#243044" stroke="#243044" />
            </svg>
            {pts.map(p => (
              <div key={p.l} className="mapdot" style={{ left: `${p.x}%`, top: `${p.y}%` }} title={`${p.l}: ${p.n} kiosks`}>
                <div style={{
                  width: Math.max(28, p.n / 1.4), height: Math.max(28, p.n / 1.4),
                  borderRadius: '50%', background: p.c + '33', border: `2px solid ${p.c}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: p.c, fontSize: 10, fontWeight: 800, margin: '0 auto',
                  animation: 'pulse 2s infinite'
                }}>{p.n}</div>
                <div style={{ fontSize: 9, color: 'var(--textMid)', marginTop: 2, whiteSpace: 'nowrap' }}>{p.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pts.map(p => (
            <div key={p.l} className="card" style={{ padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: p.c + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: p.c }}>{p.n}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>{p.l}</div>
                  <div style={{ fontSize: 10, color: 'var(--textLow)' }}>{p.n} kiosks deployed</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KioskSolar() {
  const { C } = useTheme();
  const units = [
    { id: 'MUM-017', loc: 'Mumbai Kurla', charge: 87, out: '42W', s: 'Charging' },
    { id: 'DEL-093', loc: 'Delhi Rohini', charge: 63, out: '28W', s: 'Charging' },
    { id: 'BLR-055', loc: 'Bengaluru BTM', charge: 95, out: '50W', s: 'Full' },
    { id: 'AHM-033', loc: 'Ahmedabad Navrangpura', charge: 72, out: '35W', s: 'Charging' },
    { id: 'KOL-028', loc: 'Kolkata Park St.', charge: 41, out: '18W', s: 'Low' },
    { id: 'HYD-088', loc: 'Hyderabad Jubilee', charge: 88, out: '44W', s: 'Charging' },
  ];
  const cc = c => c > 80 ? C.accent : c > 40 ? C.amber : C.red;

  return (
    <div className="page">
      <SectionHeader title="Solar Power Status" subtitle="Real-time energy monitoring for solar-powered kiosks" />
      <div className="g4">
        <StatCard label="Solar Units" value={38} color={C.amber} icon="☀" />
        <StatCard label="Avg Charge" value="72%" color={C.accent} icon="⚡" />
        <StatCard label="Total Output" value="1.4kW" color={C.blue} icon="⚡" />
        <StatCard label="Low Battery" value={1} color={C.red} icon="🔋" />
      </div>
      <div className="g3c">
        {units.map(u => (
          <div key={u.id} className="card cp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace' }}>{u.id}</div>
                <div style={{ fontSize: 10, color: 'var(--textLow)', marginTop: 2 }}>{u.loc}</div>
              </div>
              <Badge color={cc(u.charge)}>{u.s}</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Ring value={u.charge} max={100} color={cc(u.charge)} size={70} label="charge" />
              <div>
                <div style={{ fontSize: 11, color: 'var(--textLow)' }}>Output</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: cc(u.charge) }}>{u.out}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
