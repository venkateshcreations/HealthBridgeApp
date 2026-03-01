import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { StatCard, Badge, Btn, Dot, ProgressBar, Ring, SectionHeader } from '../components/UI';

// ── HEALTH ANALYTICS ──────────────────────────────────────
export function HealthScreenings() {
  const { C } = useTheme();
  return (
    <div className="page">
      <SectionHeader title="Screening Results" subtitle="Aggregated health screening data — anonymized" action={<Btn color={C.blue}>↓ Export CSV</Btn>} />
      <div className="g4">
        <StatCard label="Total Screenings" value="6,207" color={C.blue} icon="◈" />
        <StatCard label="Flagged Cases" value="824" color={C.amber} icon="⚠" />
        <StatCard label="Hypertension Risk" value="312" color={C.red} icon="❤" />
        <StatCard label="Diabetes Risk" value="198" color={C.purple} icon="🩸" />
      </div>
      <div className="g2">
        <div className="card cp">
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Screening Distribution</div>
          {[{ l: 'BP Screening', p: 82, c: C.red }, { l: 'BMI Check', p: 76, c: C.blue }, { l: 'Blood Glucose', p: 54, c: C.purple }, { l: 'SpO₂ Monitoring', p: 91, c: C.accent }, { l: 'Vision Test', p: 38, c: C.amber }].map(f => (
            <ProgressBar key={f.l} label={f.l} value={f.p} max={100} color={f.c} />
          ))}
        </div>
        <div className="card cp">
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Risk Category Breakdown</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            {[{ label: 'Normal', value: 5383, max: 6207, color: C.accent }, { label: 'At Risk', value: 824, max: 6207, color: C.amber }].map(r => (
              <div key={r.label} style={{ textAlign: 'center' }}>
                <Ring value={r.value} max={r.max} color={r.color} size={90} label={r.label} />
                <div style={{ fontSize: 11, color: 'var(--textMid)', marginTop: 8 }}>{r.value.toLocaleString()} patients</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HealthOutbreak() {
  const { C } = useTheme();
  const alerts = [
    { district: 'District 7, Telangana', disease: 'Dengue', cases: 34, severity: 'High', reported: '2h ago' },
    { district: 'Nashik Rural, Maharashtra', disease: 'Malaria', cases: 12, severity: 'Medium', reported: '6h ago' },
    { district: 'Bidar, Karnataka', disease: 'Gastroenteritis', cases: 8, severity: 'Low', reported: '1d ago' },
  ];
  const sc = { High: C.red, Medium: C.amber, Low: C.blue };
  return (
    <div className="page">
      <SectionHeader title="Outbreak Alerts" subtitle="Disease surveillance and early warning system" action={<Badge color={C.red}>● 3 Active</Badge>} />
      <div className="g3">
        <StatCard label="Active Alerts" value={3} color={C.red} icon="🦠" />
        <StatCard label="Districts Monitored" value={18} color={C.blue} icon="🗺" />
        <StatCard label="Cases Flagged" value={54} color={C.amber} icon="⚠" />
      </div>
      {alerts.map(a => (
        <div key={a.district} className="emcard" style={{ borderLeftColor: sc[a.severity] }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <Badge color={sc[a.severity]}>🦠 {a.disease}</Badge>
                <Badge color={sc[a.severity]}>{a.severity} Risk</Badge>
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>{a.district}</div>
              <div style={{ fontSize: 12, color: 'var(--textMid)', marginTop: 4 }}>{a.cases} cases · Reported {a.reported}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Btn color={sc[a.severity]}>Investigate</Btn>
              <Btn color={C.mid}>Resolve</Btn>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── TELEMEDICINE ──────────────────────────────────────────
export function TCDoctors() {
  const { C } = useTheme();
  const doctors = [
    { name: 'Dr. Priya Sharma', spec: 'General Medicine', status: 'Available', sessions: 24, rating: 4.9 },
    { name: 'Dr. Amit Kulkarni', spec: 'Cardiology', status: 'In Session', sessions: 18, rating: 4.8 },
    { name: 'Dr. Fatima Khan', spec: 'Pediatrics', status: 'Available', sessions: 31, rating: 4.9 },
    { name: 'Dr. Sunita Rao', spec: 'Gynecology', status: 'Available', sessions: 15, rating: 4.7 },
    { name: 'Dr. Vikram Singh', spec: 'Dermatology', status: 'Offline', sessions: 9, rating: 4.6 },
  ];
  const sc = { Available: C.accent, 'In Session': C.blue, Offline: C.mid };

  return (
    <div className="page">
      <SectionHeader title="Doctor Network" subtitle="Registered teleconsultation physicians" action={<Btn color={C.accent}>+ Add Doctor</Btn>} />
      <div className="g3">
        <StatCard label="Total Doctors" value={184} color={C.blue} icon="👨‍⚕️" />
        <StatCard label="Available Now" value={28} color={C.accent} icon="👨‍⚕️" />
        <StatCard label="Avg Rating" value="4.8★" color={C.amber} icon="⭐" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Doctor', 'Specialization', 'Status', 'Sessions Today', 'Rating', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {doctors.map(d => (
              <tr key={d.name}>
                <td style={{ fontWeight: 700, color: 'var(--text)' }}>{d.name}</td>
                <td>{d.spec}</td>
                <td><Badge color={sc[d.status]}>{d.status}</Badge></td>
                <td>{d.sessions}</td>
                <td style={{ color: C.amber }}>{d.rating} ★</td>
                <td><Btn color={C.blue} sm>View Profile</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TCSessions() {
  const { C } = useTheme();
  const sessions = [
    { id: 'TC-8821', doc: 'Dr. Priya Sharma', kiosk: 'MUM-017', dur: '12m', stat: 'Active', reason: 'Fever & cough' },
    { id: 'TC-8820', doc: 'Dr. Amit Kulkarni', kiosk: 'DEL-093', dur: '8m', stat: 'Active', reason: 'Chest pain follow-up' },
    { id: 'TC-8819', doc: 'Dr. Fatima Khan', kiosk: 'BLR-055', dur: '18m', stat: 'Completed', reason: 'Child vaccination advice' },
    { id: 'TC-8818', doc: 'Dr. Sunita Rao', kiosk: 'HYD-042', dur: '22m', stat: 'Completed', reason: 'Pregnancy guidance' },
    { id: 'TC-8817', doc: 'Dr. Vikram Singh', kiosk: 'KOL-014', dur: '6m', stat: 'Completed', reason: 'Skin rash' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Consult Sessions" subtitle="Today's telemedicine sessions log" />
      <div className="g4">
        <StatCard label="Active Now" value={2} color={C.blue} icon="📹" />
        <StatCard label="Completed Today" value={182} color={C.accent} icon="✓" />
        <StatCard label="Avg Duration" value="14m" color={C.purple} icon="⏱" />
        <StatCard label="Prescriptions Issued" value={147} color={C.amber} icon="💊" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Session ID', 'Doctor', 'Kiosk', 'Reason', 'Duration', 'Status'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {sessions.map(s => (
              <tr key={s.id}>
                <td><span style={{ fontFamily: 'monospace', color: C.blue, fontWeight: 700 }}>{s.id}</span></td>
                <td>{s.doc}</td><td>{s.kiosk}</td><td>{s.reason}</td><td>{s.dur}</td>
                <td><Badge color={s.stat === 'Active' ? C.blue : C.accent}>{s.stat}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TCPrescriptions() {
  const { C } = useTheme();
  const rxs = [
    { id: 'RX-2241', meds: 'Paracetamol 500mg, ORS', doc: 'Dr. Priya Sharma', kiosk: 'MUM-017', t: '12:14' },
    { id: 'RX-2240', meds: 'Metformin 500mg, Vitamin D', doc: 'Dr. Amit Kulkarni', kiosk: 'DEL-093', t: '11:58' },
    { id: 'RX-2239', meds: 'Iron tablets, Folic acid', doc: 'Dr. Sunita Rao', kiosk: 'BLR-055', t: '11:42' },
    { id: 'RX-2238', meds: 'Cough syrup, Antihistamine', doc: 'Dr. Fatima Khan', kiosk: 'CHN-011', t: '11:20' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Prescriptions" subtitle="Digital prescriptions issued through kiosk teleconsults" action={<Btn color={C.blue}>↓ Export PDF</Btn>} />
      <div className="g4">
        <StatCard label="Issued Today" value={147} color={C.accent} icon="💊" />
        <StatCard label="Avg Medicines" value="2.4" color={C.blue} icon="💊" />
        <StatCard label="Dispensed" value={89} color={C.purple} icon="✓" />
        <StatCard label="Pending Pickup" value={58} color={C.amber} icon="⏳" />
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Recent Prescriptions</div>
        {rxs.map(r => (
          <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: C.purple + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0 }}>💊</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace' }}>{r.id}</div>
              <div style={{ fontSize: 11, color: 'var(--textMid)' }}>{r.meds}</div>
              <div style={{ fontSize: 10, color: 'var(--textLow)' }}>{r.doc} · Kiosk {r.kiosk} · {r.t}</div>
            </div>
            <Btn color={C.blue} sm>View</Btn>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TCQueue() {
  const { C } = useTheme();
  const queues = [
    { k: 'MUM-017', w: 3, doc: 'Dr. Priya Sharma', eta: '4m' },
    { k: 'DEL-093', w: 1, doc: 'Dr. Amit Kulkarni', eta: '12m' },
    { k: 'BLR-055', w: 5, doc: 'Dr. Fatima Khan', eta: '2m' },
    { k: 'KOL-014', w: 0, doc: 'Any Available', eta: 'Now' },
    { k: 'AHM-033', w: 2, doc: 'Dr. Sunita Rao', eta: '8m' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Queue Management" subtitle="Live patient queue across all kiosks" />
      <div className="g3">
        <StatCard label="Total Waiting" value={11} color={C.blue} icon="👥" />
        <StatCard label="Avg Wait Time" value="7m" color={C.amber} icon="⏳" />
        <StatCard label="Available Doctors" value={28} color={C.accent} icon="👨‍⚕️" />
      </div>
      <div className="g2">
        {queues.map(q => (
          <div key={q.k} className="card cp">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--text)', fontSize: 13 }}>{q.k}</span>
              <Badge color={q.w > 3 ? C.red : q.w > 0 ? C.amber : C.accent}>{q.w} waiting</Badge>
            </div>
            <div style={{ fontSize: 11, color: 'var(--textMid)', marginBottom: 8 }}>{q.doc}</div>
            <div style={{ display: 'flex', gap: 3 }}>
              {Array.from({ length: Math.max(q.w, 1) }).map((_, j) => (
                <div key={j} style={{
                  width: 28, height: 28, borderRadius: 6,
                  background: j < q.w ? C.blue + '30' : 'var(--border)',
                  border: `1px solid ${j < q.w ? C.blue + '66' : 'transparent'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12
                }}>{j < q.w ? '👤' : ''}</div>
              ))}
            </div>
            <div style={{ fontSize: 10, color: 'var(--textLow)', marginTop: 8 }}>
              Next: <span style={{ color: C.accent }}>{q.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EMERGENCY ────────────────────────────────────────────
export function EmIncidents() {
  const { C } = useTheme();
  const incidents = [
    { id: 'INC-441', kiosk: 'CHN-011', type: 'Cardiac Arrest (suspected)', time: '12:14', status: 'Active', lat: '13.07°N', lng: '80.27°E' },
    { id: 'INC-440', kiosk: 'BLR-055', type: 'Severe Hypoglycemia', time: '11:52', status: 'Dispatched', lat: '12.91°N', lng: '77.65°E' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Active Incidents" subtitle="Live emergency events requiring immediate response" action={<Badge color={C.red}>● 2 Active</Badge>} />
      <div className="g4">
        <StatCard label="Active Now" value={2} color={C.red} icon="🚨" />
        <StatCard label="Dispatched" value={1} color={C.amber} icon="🚑" />
        <StatCard label="Resolved Today" value={4} color={C.accent} icon="✓" />
        <StatCard label="Avg Response" value="6.2m" color={C.blue} icon="⏱" />
      </div>
      {incidents.map(inc => (
        <div key={inc.id} className="emcard">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <Badge color={C.red}>🚨 EMERGENCY</Badge>
                <Badge color={C.amber}>{inc.status}</Badge>
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>{inc.type}</div>
              <div style={{ fontSize: 12, color: 'var(--textMid)', marginTop: 4 }}>
                Kiosk {inc.kiosk} · {inc.time} · GPS: {inc.lat}, {inc.lng}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <Btn color={C.red}>Call 108</Btn>
              <Btn color={C.amber}>Dispatch</Btn>
              <Btn color={C.accent}>Resolve</Btn>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function EmLog() {
  const { C } = useTheme();
  const logs = [
    { id: 'INC-439', type: 'Fainting', kiosk: 'MUM-017', res: '10:34', dur: '4m 12s', out: 'Ambulance dispatched' },
    { id: 'INC-438', type: 'Severe chest pain', kiosk: 'DEL-093', res: '09:21', dur: '6m 44s', out: 'Patient stabilised' },
    { id: 'INC-437', type: 'Choking (self-reported)', kiosk: 'PUN-028', res: 'Yesterday', dur: '2m 11s', out: 'First aid guided' },
    { id: 'INC-436', type: 'Hypoglycemic episode', kiosk: 'KOL-014', res: 'Yesterday', dur: '8m 30s', out: 'Ambulance dispatched' },
    { id: 'INC-435', type: 'Severe BP spike', kiosk: 'AHM-033', res: '2 days ago', dur: '5m 02s', out: 'Doctor referral' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Incident Log" subtitle="Historical emergency response records" action={<Btn color={C.blue}>↓ Export</Btn>} />
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Incident ID', 'Type', 'Kiosk', 'Resolved At', 'Response Time', 'Outcome'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {logs.map(l => (
              <tr key={l.id}>
                <td><span style={{ fontFamily: 'monospace', color: C.red, fontWeight: 700 }}>{l.id}</span></td>
                <td>{l.type}</td><td>{l.kiosk}</td><td>{l.res}</td><td>{l.dur}</td>
                <td style={{ color: C.accent }}>{l.out}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function EmGPS() {
  const { C } = useTheme();
  const pts = [
    { x: 45, y: 72, l: 'CHN-011', a: true },
    { x: 55, y: 65, l: 'BLR-055', a: true },
    { x: 22, y: 62, l: 'MUM-017', a: false },
  ];
  const incidents = [
    { id: 'CHN-011', type: 'Cardiac', time: '12:14', lat: '13.07°N', lng: '80.27°E', c: C.red },
    { id: 'BLR-055', type: 'Hypoglycemia', time: '11:52', lat: '12.91°N', lng: '77.65°E', c: C.amber },
  ];

  return (
    <div className="page">
      <SectionHeader title="GPS Dispatch Map" subtitle="Real-time emergency location tracking" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 14 }}>
        <div className="card" style={{ minHeight: 460, position: 'relative', overflow: 'hidden' }}>
          <div className="mapwrap">
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', opacity: 0.1 }}>
              <path d="M30 15 L50 10 L70 18 L80 30 L78 50 L70 70 L60 85 L50 90 L40 88 L28 78 L20 62 L18 45 L22 28 Z" fill="#243044" stroke="#243044" />
            </svg>
            {pts.map(p => (
              <div key={p.l} className="mapdot" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <div style={{
                  width: p.a ? 20 : 12, height: p.a ? 20 : 12,
                  borderRadius: '50%', background: p.a ? C.red : C.blue,
                  ...(p.a ? { boxShadow: `0 0 16px ${C.red}`, animation: 'pulse 1.5s infinite' } : {}),
                  margin: '0 auto'
                }} />
                <div style={{ fontSize: 9, color: p.a ? C.red : C.mid, marginTop: 2, whiteSpace: 'nowrap', fontWeight: p.a ? 700 : 400 }}>{p.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {incidents.map(e => (
            <div key={e.id} className="card" style={{ padding: 16, borderLeft: `3px solid ${e.c}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>{e.id}</div>
              <div style={{ fontSize: 11, color: e.c, marginTop: 2 }}>{e.type}</div>
              <div style={{ fontSize: 10, color: 'var(--textLow)', marginTop: 4 }}>{e.lat}, {e.lng}</div>
              <div style={{ fontSize: 10, color: 'var(--textLow)' }}>Triggered: {e.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EmContacts() {
  const { C } = useTheme();
  const contacts = [
    { name: 'National Emergency', number: '112', type: 'Emergency Services', available: '24/7' },
    { name: 'Ambulance (CATS)', number: '102', type: 'Medical Transport', available: '24/7' },
    { name: 'Poison Control', number: '1800-116-117', type: 'Toxicology', available: '24/7' },
    { name: 'Dr. Meera Pillai', number: '+91-98765-43210', type: 'Medical Director', available: '9am–9pm' },
    { name: 'Field Coordinator Ravi', number: '+91-87654-32109', type: 'Operations', available: '24/7' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Emergency Contacts" subtitle="Quick access emergency directory" action={<Btn color={C.accent}>+ Add Contact</Btn>} />
      <div className="g3">
        <StatCard label="Emergency Lines" value={3} color={C.red} icon="📞" />
        <StatCard label="Medical Staff" value={12} color={C.blue} icon="👨‍⚕️" />
        <StatCard label="Field Coordinators" value={8} color={C.accent} icon="👤" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Name', 'Number', 'Type', 'Availability', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.number}>
                <td style={{ fontWeight: 700, color: 'var(--text)' }}>{c.name}</td>
                <td><span style={{ fontFamily: 'monospace', color: C.accent }}>{c.number}</span></td>
                <td>{c.type}</td>
                <td><Badge color={C.accent}>{c.available}</Badge></td>
                <td><Btn color={C.blue} sm>Call</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── GENERIC PLACEHOLDER ───────────────────────────────────
export function PlaceholderPage({ title }) {
  const { C } = useTheme();
  return (
    <div className="page">
      <SectionHeader title={title} subtitle="Module content" />
      <div className="card cp" style={{ textAlign: 'center', padding: 60 }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🚧</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>Coming Soon</div>
        <div style={{ fontSize: 13, color: 'var(--textMid)' }}>This module is under development</div>
      </div>
    </div>
  );
}
