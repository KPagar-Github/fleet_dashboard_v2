import React, { useState, useEffect } from 'react';
import { BellIcon } from './Icons.jsx';

const Topbar = () => {
  const [time, setTime] = useState('Updated 8s ago');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(`Updated ${Math.floor(Math.random() * 10) + 1}s ago`);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-title">Live Tracking</div>
      <div className="topbar-sep"></div>
      <div className="topbar-live">
        <div className="live-dot"></div>
        Live
      </div>
      <div className="topbar-time">{time}</div>
      <div className="topbar-bell">
        <BellIcon />
        <div className="bell-dot"></div>
      </div>
    </div>
  );
};

export default Topbar;
