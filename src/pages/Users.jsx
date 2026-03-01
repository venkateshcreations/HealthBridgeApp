import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { StatCard, Badge, Btn, Dot, ProgressBar, SectionHeader } from '../components/UI';

export function UserSessions() {
  const { C } = useTheme();
  const sessions = [
    { k: 'MUM-017', m: 'BP Screening', t: '6m 12s', mode: 'Senior Mode' },
    { k: 'DEL-093', m: 'Teleconsult', t: '12m 44s', mode: 'Default' },
    { k: 'BLR-055', m: 'Mental Wellness', t: '3m 20s', mode: 'Anonymous' },
    { k: 'KOL-014', m: 'Health Education', t: '1m 08s', mode: 'Child Mode' },
    { k: 'AHM-033', m: "Women & Child Health", t: '8m 55s', mode: 'Default' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Active Sessions" subtitle="Live kiosk user sessions right now" action={<Badge color={C.accent}>● 47 live</Badge>} />
      <div className="g4">
        <StatCard label="Live Sessions" value={47} color={C.blue} icon="👤" />
        <StatCard label="Avg Session Time" value="6m" color={C.accent} icon="⏱" />
        <StatCard label="Returning Users" value="34%" color={C.purple} icon="👤" />
        <StatCard label="Anonymous" value="88%" color={C.mid} icon="🔒" />
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Live Session Feed</div>
        {sessions.map((s, i) => (
          <div key={i} className="feed-row">
            <Dot color={C.accent} pulse />
            <span className="feed-id" style={{ color: C.blue }}>{s.k}</span>
            <span style={{ flex: 1, fontSize: 12, color: 'var(--textMid)' }}>{s.m}</span>
            <Badge color={C.mid}>{s.mode}</Badge>
            <span style={{ fontSize: 11, color: 'var(--textLow)', fontFamily: 'monospace' }}>{s.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UserAnonymous() {
  const { C } = useTheme();
  const features = [
    { l: 'Health Screening', p: 68, c: C.blue },
    { l: 'AI Health Assistant', p: 42, c: C.purple },
    { l: 'Education Hub', p: 35, c: C.amber },
    { l: 'Mental Wellness', p: 22, c: C.pink },
    { l: 'Emergency Mode', p: 3, c: C.red },
  ];

  return (
    <div className="page">
      <SectionHeader title="Anonymous Usage" subtitle="Privacy-preserving usage statistics" />
      <div className="g3">
        <StatCard label="Anonymous Sessions" value="88%" color={C.accent} icon="🔒" />
        <StatCard label="No Data Retained" value="100%" color={C.blue} icon="🛡" />
        <StatCard label="Avg Session" value="5.4m" color={C.purple} icon="⏱" />
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Feature Usage (Anonymous Sessions)</div>
        {features.map(f => (
          <ProgressBar key={f.l} label={f.l} value={f.p} max={100} color={f.c} sub={`${f.p}% of anonymous sessions`} />
        ))}
      </div>
    </div>
  );
}

export function UserFamily() {
  const { C } = useTheme();
  const cards = [
    { qr: 'QR-9812', members: 4, scan: '12:04', kiosk: 'MUM-017', mod: 'Vaccination Reminder' },
    { qr: 'QR-7234', members: 3, scan: '11:58', kiosk: 'DEL-093', mod: 'BP Screening' },
    { qr: 'QR-5541', members: 5, scan: '11:44', kiosk: 'BLR-055', mod: 'Nutrition Advice' },
    { qr: 'QR-3319', members: 2, scan: '11:22', kiosk: 'KOL-014', mod: 'Period Tracker' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Family Health QR Cards" subtitle="Registered family health profiles" action={<Btn color={C.accent}>Issue New Card</Btn>} />
      <div className="g4">
        <StatCard label="Cards Issued" value="4,821" color={C.accent} icon="👨‍👩‍👧" />
        <StatCard label="Active Families" value="3,940" color={C.blue} icon="👨‍👩‍👧" />
        <StatCard label="Avg Family Size" value={3.2} color={C.purple} icon="👤" />
        <StatCard label="Scans Today" value={1240} color={C.amber} icon="📱" />
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Recently Active Family Profiles</div>
        {cards.map(f => (
          <div key={f.qr} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: C.accent + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>👨‍👩‍👧</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text)', fontFamily: 'monospace' }}>{f.qr}</div>
              <div style={{ fontSize: 11, color: 'var(--textMid)' }}>{f.members} members · Last: {f.mod}</div>
            </div>
            <span style={{ fontSize: 10, color: 'var(--textLow)' }}>{f.kiosk} · {f.scan}</span>
            <Btn color={C.accent} sm>View</Btn>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UserHealthScore() {
  const { C } = useTheme();
  const tiers = [
    { tier: 'Bronze', min: 0, max: 199, color: '#CD7F32', count: 4820, icon: '🥉' },
    { tier: 'Silver', min: 200, max: 499, color: '#A8A9AD', count: 3940, icon: '🥈' },
    { tier: 'Gold', min: 500, max: 799, color: C.amber, count: 2890, icon: '🥇' },
    { tier: 'Platinum', min: 800, max: 1000, color: '#E5E4E2', count: 830, icon: '💎' },
  ];

  return (
    <div className="page">
      <SectionHeader title="Health Score Badges" subtitle="Gamified health engagement rewards" />
      <div className="g4">
        <StatCard label="Badges Issued" value="12,480" color={C.amber} icon="🏅" />
        <StatCard label="Avg Score" value={340} color={C.accent} icon="⭐" />
        <StatCard label="Top Score" value={980} color={C.purple} icon="🏆" />
        <StatCard label="Redeemed" value="2,100" color={C.blue} icon="🎁" />
      </div>
      <div className="card cp">
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>Badge Tiers</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
          {tiers.map(b => (
            <div key={b.tier} className="card" style={{ padding: 18, textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>{b.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: b.color }}>{b.tier}</div>
              <div style={{ fontSize: 10, color: 'var(--textLow)', marginBottom: 8 }}>{b.min}–{b.max} pts</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>{b.count.toLocaleString()}</div>
              <div style={{ fontSize: 10, color: 'var(--textLow)' }}>users</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
