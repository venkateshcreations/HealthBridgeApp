# HealthBridge Admin Console

A React-based admin dashboard for the HealthBridge rural health kiosk network.

## 🚀 Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

```bash
npm run build
```

## 🗂 Project Structure

```
src/
├── components/
│   ├── UI.jsx          # Shared UI components (Icon, Badge, Btn, StatCard, etc.)
│   ├── Sidebar.jsx     # Collapsible navigation sidebar
│   └── Topbar.jsx      # Top header with breadcrumbs and theme toggle
├── data/
│   ├── navigation.js   # Nav tree data
│   └── theme.js        # Color tokens & SVG icon paths
├── hooks/
│   └── useTheme.jsx    # Theme context (dark/light mode)
├── pages/
│   ├── Dashboard.jsx   # Main dashboard page
│   ├── Kiosk.jsx       # Kiosk management pages
│   ├── Users.jsx       # User & access pages
│   ├── OtherPages.jsx  # Health, Teleconsult, Emergency pages
│   └── Settings.jsx    # System settings pages
├── styles/
│   └── global.css      # CSS variables, utility classes
├── App.jsx             # Router & page registry
└── index.js            # Entry point
```

## ✨ Features

- Dark / Light theme toggle
- Collapsible sidebar with search filter
- 20+ fully built pages covering all modules
- Responsive stat cards, tables, progress bars, ring charts
- Live status feeds, deployment map, GPS dispatch map
- Emergency incident management
- API integrations overview
- Role management & notification rules
