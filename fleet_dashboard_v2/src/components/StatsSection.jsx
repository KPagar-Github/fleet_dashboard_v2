import React from 'react';
import StatCard from './StatCard.jsx';

const TotalTruckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="8" width="16" height="8" rx="2" fill="#60a5fa" opacity="0.8" />
    <rect x="3" y="5" width="9" height="5" rx="1.5" fill="#60a5fa" opacity="0.6" />
    <circle cx="4.5" cy="15.5" r="1.5" fill="#60a5fa" />
    <circle cx="13.5" cy="15.5" r="1.5" fill="#60a5fa" />
  </svg>
);

const MovingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="6" stroke="#4ade80" strokeWidth="2" fill="none" />
    <circle cx="9" cy="9" r="2.5" fill="#4ade80" />
  </svg>
);

const StoppedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="5" y="5" width="8" height="8" rx="2" fill="#f87171" />
  </svg>
);

const IdleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="6" stroke="#fb923c" strokeWidth="2" fill="none" strokeDasharray="4 2" />
  </svg>
);

const OfflineIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M4 4l10 10M14 4L4 14" stroke="#8b92a5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const StatsSection = () => {
  const stats = [
    { type: 'total', value: 80, label: 'Total Trucks', icon: TotalTruckIcon },
    { type: 'moving', value: 52, label: 'Moving', icon: MovingIcon },
    { type: 'stopped', value: 25, label: 'Stopped', icon: StoppedIcon },
    { type: 'idle', value: 3, label: 'Idle', icon: IdleIcon },
    { type: 'offline', value: 0, label: 'Offline', icon: OfflineIcon },
  ];

  return (
    <div className="top-row">
      {stats.map((stat) => (
        <StatCard key={stat.type} {...stat} />
      ))}
    </div>
  );
};

export default StatsSection;
