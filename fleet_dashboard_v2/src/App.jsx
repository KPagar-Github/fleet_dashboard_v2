import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import StatsSection from './components/StatsSection.jsx';
import MapSection from './components/MapSection.jsx';
import TruckList from './components/TruckList.jsx';
import TrucksView from './components/TrucksView.jsx';
import './index.css';

function App() {
  const [activeView, setActiveView] = useState('tracking');

  const renderMainContent = () => {
    switch (activeView) {
      case 'trucks':
        return <TrucksView />;
      case 'tracking':
      default:
        return (
          <div className="content">
            <MapSection />
            <StatsSection />
            <TruckList />
          </div>
        );
    }
  };

  return (
    <div className="app">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <Topbar />
      {renderMainContent()}
    </div>
  );
}

export default App;
