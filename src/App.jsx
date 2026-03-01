import React, { useState, useRef, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import { KioskDevices, KioskStatus, KioskMaintenance, KioskDeploy, KioskSolar } from './pages/Kiosk';
import { UserSessions, UserAnonymous, UserFamily, UserHealthScore } from './pages/Users';
import { HealthScreenings, HealthOutbreak, TCDoctors, TCSessions, TCPrescriptions, TCQueue, EmIncidents, EmLog, EmGPS, EmContacts, PlaceholderPage } from './pages/OtherPages';
import { StRoles, StNotifications, StOffline, StAPI } from './pages/Settings';
import './styles/global.css';

const PAGE_MAP = {
  dashboard: Dashboard,
  'kiosk-devices': KioskDevices,
  'kiosk-status': KioskStatus,
  'kiosk-maintenance': KioskMaintenance,
  'kiosk-deploy': KioskDeploy,
  'kiosk-solar': KioskSolar,
  'users-sessions': UserSessions,
  'users-anonymous': UserAnonymous,
  'users-family': UserFamily,
  'users-health-score': UserHealthScore,
  'health-screenings': HealthScreenings,
  'health-outbreak': HealthOutbreak,
  'tc-doctors': TCDoctors,
  'tc-sessions': TCSessions,
  'tc-prescriptions': TCPrescriptions,
  'tc-queue': TCQueue,
  'em-incidents': EmIncidents,
  'em-log': EmLog,
  'em-gps': EmGPS,
  'em-contacts': EmContacts,
  'st-roles': StRoles,
  'st-notifications': StNotifications,
  'st-offline': StOffline,
  'st-api': StAPI,
};

const PLACEHOLDER_TITLES = {
  'health-trends': 'Disease Trends',
  'health-heatmap': 'Usage Heatmaps',
  'health-risk': 'AI Risk Predictions',
  'mw-assessments': 'Stress Assessments',
  'mw-breathing': 'Breathing Exercises',
  'mw-mood': 'Mood Analytics',
  'mw-counseling': 'Counselor Connect',
  'ct-alerts': 'Disease Alerts',
  'ct-videos': 'Nutrition Videos',
  'ct-campaigns': 'Awareness Campaigns',
  'ct-quizzes': 'Health Quizzes',
  'ct-languages': 'Language Packs',
  'pv-audit': 'Audit Logs',
  'pv-data': 'Data Wipe Logs',
  'pv-otp': 'OTP Reports',
  'pv-compliance': 'Compliance Reports',
  'pt-hospitals': 'Hospital Partners',
  'pt-ngo': 'NGO Tie-ups',
  'pt-csr': 'CSR Sponsors',
  'pt-funding': 'Funding Overview',
};

function AppContent() {
  const [activePage, setActivePage] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const cntRef = useRef(null);

  const handleNavigate = (page) => {
    setActivePage(page);
    if (cntRef.current) cntRef.current.scrollTop = 0;
  };

  const PageComponent = PAGE_MAP[activePage];
  const placeholderTitle = PLACEHOLDER_TITLES[activePage];

  return (
    <div className="shell">
      <Sidebar collapsed={collapsed} activePage={activePage} onNavigate={handleNavigate} />
      <div className="main">
        <Topbar collapsed={collapsed} onToggleSidebar={() => setCollapsed(c => !c)} activePage={activePage} onNavigate={handleNavigate} />
        <main className="cnt" ref={cntRef}>
          {PageComponent ? (
            <PageComponent key={activePage} onNavigate={handleNavigate} />
          ) : placeholderTitle ? (
            <PlaceholderPage key={activePage} title={placeholderTitle} />
          ) : (
            <div style={{ color: 'var(--textMid)', padding: 40, textAlign: 'center' }}>Page coming soon</div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
