import React from 'react';
import {
  TruckIcon,
  TrackingIcon,
  TrucksIcon,
  AlertsIcon,
  ReportsIcon,
  DriversIcon,
  MaintenanceIcon,
  SettingsIcon,
} from './Icons.jsx';

const Sidebar = ({ activeView, onViewChange }) => {
  const navItems = [
    { id: 'tracking', label: 'Live Tracking', icon: TrackingIcon, active: activeView === 'tracking' },
    { id: 'trucks', label: 'Trucks', icon: TrucksIcon, active: activeView === 'trucks' },
    { id: 'alerts', label: 'Alerts', icon: AlertsIcon, badge: 8 },
    { id: 'reports', label: 'Reports', icon: ReportsIcon },
    { id: 'drivers', label: 'Drivers', icon: DriversIcon },
    { id: 'maintenance', label: 'Maintenance', icon: MaintenanceIcon },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const handleNavClick = (viewId) => {
    onViewChange(viewId);
  };

  return (
    <div className="sidebar">
      <div className="sb-brand">
        <div className="sb-brand-icon">
          <TruckIcon />
        </div>
        <span className="sb-brand-name">X Fleet</span>
      </div>
      <div className="sb-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`nav-item ${item.active ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <Icon />
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </div>
          );
        })}
      </div>
      <div className="sb-user">
        <div className="sb-avatar">AV</div>
        <div className="sb-user-info">
          <div className="sb-name">Amit Verma</div>
          <div className="sb-role">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
