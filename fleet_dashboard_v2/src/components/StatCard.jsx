import React from 'react';

const StatCard = ({ type, value, label, icon: Icon }) => {
  const iconClasses = `stat-icon ${type}`;
  const valueClasses = `stat-val ${type}`;

  return (
    <div className="stat-card">
      <div className={iconClasses}>
        <Icon />
      </div>
      <div>
        <div className={valueClasses}>{value}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
