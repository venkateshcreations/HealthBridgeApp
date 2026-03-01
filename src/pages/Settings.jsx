import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { StatCard, Badge, Btn, Icon, SectionHeader } from '../components/UI';

export function StRoles() {
  const { C } = useTheme();
  const roles = [
    { role: 'Super Admin', users: 2, perms: 'Full Access', color: C.red },
    { role: 'Zone Manager', users: 8, perms: 'Zone-level Data', color: C.amber },
    { role: 'Doctor', users: 184, perms: 'Teleconsult Only', color: C.blue },
    { role: 'Field Tech', users: 42, perms: 'Device Management', color: C.purple },
    { role: 'Content Editor', users: 6, perms: 'Content Modules', color: C.teal },
    { role: 'Viewer', users: 15, perms: 'Read Only', color: C.mid },
  ];

  return (
    <div className="page">
      <SectionHeader title="Role Management" subtitle="User roles and permission configuration" action={<Btn color={C.accent}>+ Add Role</Btn>} />
      <div className="g3">
        <StatCard label="Total Roles" value={6} color={C.blue} icon="🔑" />
        <StatCard label="Total Users" value={257} color={C.accent} icon="👤" />
        <StatCard label="Active Sessions" value={34} color={C.purple} icon="🔐" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Role', 'Users', 'Permissions', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {roles.map(r => (
              <tr key={r.role}>
                <td><Badge color={r.color}>{r.role}</Badge></td>
                <td>{r.users}</td>
                <td style={{ color: 'var(--textMid)' }}>{r.perms}</td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <Btn color={C.blue} sm>Edit</Btn>
                    <Btn color={C.mid} sm>View Users</Btn>
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

export function StNotifications() {
  const { C } = useTheme();
  const [toggles, setToggles] = useState({
    emergency: true, outbreak: true, kiosk_offline: true,
    daily_report: false, weekly_report: true, sync_alerts: false,
  });

  const rules = [
    { id: 'emergency', label: 'Emergency Incidents', desc: 'Immediate alerts for all emergency events', color: C.red },
    { id: 'outbreak', label: 'Outbreak Alerts', desc: 'Disease surveillance notifications', color: C.amber },
    { id: 'kiosk_offline', label: 'Kiosk Offline Alerts', desc: 'When a kiosk goes offline unexpectedly', color: C.purple },
    { id: 'daily_report', label: 'Daily Summary Report', desc: 'End-of-day statistics via WhatsApp', color: C.blue },
    { id: 'weekly_report', label: 'Weekly Analytics', desc: 'Weekly performance digest email', color: C.teal },
    { id: 'sync_alerts', label: 'Sync Failure Alerts', desc: 'Rural kiosk offline sync failures', color: C.mid },
  ];

  const toggle = id => setToggles(t => ({ ...t, [id]: !t[id] }));

  return (
    <div className="page">
      <SectionHeader title="Notification Rules" subtitle="Configure alerts and report delivery" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rules.map(r => (
          <div key={r.id} className="card" style={{ padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: r.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="zap" size={15} color={r.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{r.label}</div>
                <div style={{ fontSize: 11, color: 'var(--textMid)' }}>{r.desc}</div>
              </div>
              <div
                className={`tog${toggles[r.id] ? ' on' : ''}`}
                style={{ background: toggles[r.id] ? r.color : 'var(--border)' }}
                onClick={() => toggle(r.id)}
              >
                <div className="tog-k" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StOffline() {
  const { C } = useTheme();
  const kiosks = [
    { id: 'RUR-001', loc: 'Warangal Rural', ls: '2h ago', p: 124, s: 'Pending' },
    { id: 'RUR-002', loc: 'Nanded Rural', ls: 'Just now', p: 0, s: 'Synced' },
    { id: 'RUR-003', loc: 'Bidar Village', ls: '4h ago', p: 311, s: 'Pending' },
    { id: 'RUR-004', loc: 'Gadchiroli Block', ls: '1d ago', p: 892, s: 'Overdue' },
  ];
  const sc = { Synced: C.accent, Pending: C.amber, Overdue: C.red };

  return (
    <div className="page">
      <SectionHeader title="Offline Sync Config" subtitle="Rural kiosk offline data synchronization" />
      <div className="g4">
        <StatCard label="Rural Kiosks" value={22} color={C.accent} icon="📶" />
        <StatCard label="Pending Sync" value={3} color={C.amber} icon="⏳" />
        <StatCard label="Avg Sync Lag" value="2.4h" color={C.blue} icon="⏱" />
        <StatCard label="Pending Records" value="1,327" color={C.red} icon="📄" />
      </div>
      <div className="card">
        <table className="tbl">
          <thead><tr>{['Kiosk ID', 'Location', 'Last Sync', 'Pending Records', 'Status', 'Actions'].map(h => <th key={h}>{h}</th>)}</tr></thead>
          <tbody>
            {kiosks.map(k => (
              <tr key={k.id} className={k.s === 'Overdue' ? 'hi' : ''}>
                <td><span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--text)' }}>{k.id}</span></td>
                <td>{k.loc}</td><td>{k.ls}</td><td>{k.p.toLocaleString()}</td>
                <td><Badge color={sc[k.s]}>{k.s}</Badge></td>
                <td><Btn color={sc[k.s]} sm>Sync Now</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StAPI() {
  const { C } = useTheme();
  const apis = [
    { n: 'WhatsApp Business API', p: 'Report delivery, OTP', s: 'Connected', c: '12,400/day' },
    { n: 'Twilio SMS', p: 'OTP & emergency SMS', s: 'Connected', c: '4,820/day' },
    { n: 'Google Maps SDK', p: 'GPS dispatch map', s: 'Connected', c: '900/day' },
    { n: 'Anthropic Claude API', p: 'AI symptom checker', s: 'Connected', c: '6,200/day' },
    { n: 'Agora Video SDK', p: 'Teleconsult video', s: 'Connected', c: '184/day' },
    { n: 'ABDM Gateway', p: 'Health records (optional)', s: 'Disabled', c: '—' },
  ];
  const sc = { Connected: C.accent, Disabled: C.mid };

  return (
    <div className="page">
      <SectionHeader title="API & Integrations" subtitle="External service connections and usage" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {apis.map(a => (
          <div key={a.n} className="card" style={{ padding: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: sc[a.s] + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="zap" size={15} color={sc[a.s]} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>{a.n}</div>
                <div style={{ fontSize: 11, color: 'var(--textMid)' }}>{a.p}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <Badge color={sc[a.s]}>{a.s}</Badge>
                <div style={{ fontSize: 10, color: 'var(--textLow)', marginTop: 4 }}>{a.c}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
