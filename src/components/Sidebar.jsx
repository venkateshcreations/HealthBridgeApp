import React, { useState } from 'react';
import { NAV } from '../data/navigation';
import { Icon } from './UI';

export default function Sidebar({ collapsed, activePage, onNavigate }) {
  const [searchVal, setSearchVal] = useState('');
  const [expandedNav, setExpandedNav] = useState(null);

  const filtered = NAV.filter(n =>
    !searchVal ||
    n.label.toLowerCase().includes(searchVal.toLowerCase()) ||
    n.children.some(c => c.label.toLowerCase().includes(searchVal.toLowerCase()))
  );

  function handleNavClick(item) {
    if (item.children.length) {
      const wasOpen = expandedNav === item.id;
      setExpandedNav(wasOpen ? null : item.id);
      const firstChild = item.children[0];
      onNavigate(firstChild ? firstChild.id : item.id);
    } else {
      onNavigate(item.id);
    }
  }

  function handleSubClick(childId, parentId) {
    setExpandedNav(parentId);
    onNavigate(childId);
  }

  return (
    <aside className={`sb${collapsed ? ' col' : ''}`}>
      {/* Logo */}
      <div className="sb-logo">
        <div className="logo-orb">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div className="logo-txt">
          <div className="logo-name">HealthBridge</div>
          <div className="logo-sub">Admin Console</div>
        </div>
      </div>

      {/* Search */}
      <div className="sb-search">
        <div className="srch">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--textLow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Filter modules…"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="sb-nav">
        {filtered.map(item => {
          const isAct = activePage === item.id || item.children.some(c => c.id === activePage);
          const isOpen = expandedNav === item.id;
          return (
            <div key={item.id} className={`ni${isOpen ? ' open' : ''}`}>
              <button
                className={`nb${isAct ? ' act' : ''}`}
                onClick={() => handleNavClick(item)}
                title={item.label}
              >
                <span className="nb-icon"><Icon name={item.icon} size={15} /></span>
                <span className="nb-lbl">{item.label}</span>
                {item.badge && (
                  <span className={`nb-bdg ${item.badge.t}`}>{item.badge.n}</span>
                )}
                {item.children.length > 0 && (
                  <span className="nb-chv"><Icon name="chevron" size={10} /></span>
                )}
              </button>
              {item.children.length > 0 && (
                <div className="nsub">
                  {item.children.map(child => (
                    <button
                      key={child.id}
                      className={`nsb${activePage === child.id ? ' act' : ''}`}
                      onClick={() => handleSubClick(child.id, item.id)}
                    >
                      <span className={`sdot${child.dot ? ' ' + child.dot : ''}`} />
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div className="sb-user">
        <div className="ucard">
          <div className="uavt">SA</div>
          <div className="uinfo">
            <div className="uname">Super Admin</div>
            <div className="uemail">admin@healthbridge.in</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
