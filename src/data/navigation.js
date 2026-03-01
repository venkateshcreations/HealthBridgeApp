export const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid', children: [] },
  {
    id: 'kiosk', label: 'Kiosk Management', icon: 'phone',
    children: [
      { id: 'kiosk-devices', label: 'All Devices', dot: null },
      { id: 'kiosk-status', label: 'Live Status', dot: 'g' },
      { id: 'kiosk-maintenance', label: 'Maintenance Queue', dot: 'o' },
      { id: 'kiosk-deploy', label: 'Deployment Map', dot: null },
      { id: 'kiosk-solar', label: 'Solar Power Status', dot: null },
    ],
  },
  {
    id: 'users', label: 'Users & Access', icon: 'users',
    badge: { n: 14, t: 'warn' },
    children: [
      { id: 'users-sessions', label: 'Active Sessions', dot: 'g' },
      { id: 'users-anonymous', label: 'Anonymous Usage', dot: null },
      { id: 'users-family', label: 'Family Health QR Cards', dot: null },
      { id: 'users-health-score', label: 'Health Score Badges', dot: null },
    ],
  },
  {
    id: 'health', label: 'Health Analytics', icon: 'activity',
    children: [
      { id: 'health-screenings', label: 'Screening Results', dot: null },
      { id: 'health-trends', label: 'Disease Trends', dot: null },
      { id: 'health-outbreak', label: 'Outbreak Alerts', dot: 'r' },
      { id: 'health-heatmap', label: 'Usage Heatmaps', dot: null },
      { id: 'health-risk', label: 'AI Risk Predictions', dot: null },
    ],
  },
  {
    id: 'teleconsult', label: 'Telemedicine', icon: 'video',
    children: [
      { id: 'tc-doctors', label: 'Doctor Network', dot: null },
      { id: 'tc-sessions', label: 'Consult Sessions', dot: null },
      { id: 'tc-prescriptions', label: 'Prescriptions', dot: null },
      { id: 'tc-queue', label: 'Queue Management', dot: null },
    ],
  },
  {
    id: 'emergency', label: 'Emergency Response', icon: 'alert',
    badge: { n: 2, t: 'crit' },
    children: [
      { id: 'em-incidents', label: 'Active Incidents', dot: 'r' },
      { id: 'em-log', label: 'Incident Log', dot: null },
      { id: 'em-gps', label: 'GPS Dispatch Map', dot: null },
      { id: 'em-contacts', label: 'Emergency Contacts', dot: null },
    ],
  },
  {
    id: 'wellness', label: 'Mental Wellness', icon: 'heart',
    children: [
      { id: 'mw-assessments', label: 'Stress Assessments', dot: null },
      { id: 'mw-breathing', label: 'Breathing Exercises', dot: null },
      { id: 'mw-mood', label: 'Mood Analytics', dot: null },
      { id: 'mw-counseling', label: 'Counselor Connect', dot: null },
    ],
  },
  {
    id: 'content', label: 'Content & Education', icon: 'book',
    children: [
      { id: 'ct-alerts', label: 'Disease Alerts', dot: null },
      { id: 'ct-videos', label: 'Nutrition Videos', dot: null },
      { id: 'ct-campaigns', label: 'Awareness Campaigns', dot: null },
      { id: 'ct-quizzes', label: 'Health Quizzes', dot: null },
      { id: 'ct-languages', label: 'Language Packs', dot: null },
    ],
  },
  {
    id: 'privacy', label: 'Privacy & Security', icon: 'shield',
    children: [
      { id: 'pv-audit', label: 'Audit Logs', dot: null },
      { id: 'pv-data', label: 'Data Wipe Logs', dot: null },
      { id: 'pv-otp', label: 'OTP Reports', dot: null },
      { id: 'pv-compliance', label: 'Compliance Reports', dot: null },
    ],
  },
  {
    id: 'partners', label: 'Partners & CSR', icon: 'globe',
    children: [
      { id: 'pt-hospitals', label: 'Hospital Partners', dot: null },
      { id: 'pt-ngo', label: 'NGO Tie-ups', dot: null },
      { id: 'pt-csr', label: 'CSR Sponsors', dot: null },
      { id: 'pt-funding', label: 'Funding Overview', dot: null },
    ],
  },
  {
    id: 'settings', label: 'System Settings', icon: 'settings',
    children: [
      { id: 'st-roles', label: 'Role Management', dot: null },
      { id: 'st-notifications', label: 'Notification Rules', dot: null },
      { id: 'st-offline', label: 'Offline Sync Config', dot: null },
      { id: 'st-api', label: 'API & Integrations', dot: null },
    ],
  },
];
