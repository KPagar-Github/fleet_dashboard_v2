import React, { useState } from 'react';
import { trucks as initialTrucks } from '../data/trucks';

const TrucksView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter trucks based on search and status
  const filteredTrucks = initialTrucks.filter((truck) => {
    const matchesSearch = searchQuery === '' ||
      truck.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      truck.driver.toLowerCase().includes(searchQuery.toLowerCase()) ||
      truck.loc.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = selectedStatus === 'all' || truck.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredTrucks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTrucks = filteredTrucks.slice(startIndex, startIndex + itemsPerPage);

  const getBatteryColor = (value) => {
    if (value > 65) return 'high';
    if (value > 35) return 'mid';
    return 'low';
  };

  const statusOptions = [
    { value: 'all', label: 'All Status', count: initialTrucks.length },
    { value: 'moving', label: 'Moving', count: initialTrucks.filter(t => t.status === 'moving').length },
    { value: 'stopped', label: 'Stopped', count: initialTrucks.filter(t => t.status === 'stopped').length },
    { value: 'idle', label: 'Idle', count: initialTrucks.filter(t => t.status === 'idle').length },
  ];

  return (
    <div className="trucks-view">
      {/* Header */}
      <div className="trucks-header">
        <h1>Fleet Management</h1>
        <div className="trucks-stats">
          {statusOptions.map((option) => (
            <div key={option.value} className="trucks-stat-card">
              <div className="stat-number">{option.count}</div>
              <div className="stat-label">{option.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="trucks-filters">
        <div className="search-wrap">
          <span className="search-ico">🔍</span>
          <input
            type="text"
            placeholder="Search by Truck ID, Driver, or Location..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="status-filters">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              className={`status-filter ${selectedStatus === option.value ? 'active' : ''}`}
              onClick={() => {
                setSelectedStatus(option.value);
                setCurrentPage(1);
              }}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>
      </div>

      {/* Trucks Table */}
      <div className="trucks-table-container">
        <table className="trucks-table">
          <thead>
            <tr>
              <th>Truck ID</th>
              <th>Driver</th>
              <th>Location</th>
              <th>Status</th>
              <th>Speed</th>
              <th>Last Update</th>
              <th>Battery</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrucks.map((truck) => (
              <tr key={truck.id}>
                <td>
                  <div className="truck-id-cell">
                    <div className="truck-avatar">{truck.id.slice(-2)}</div>
                    <span>{truck.id}</span>
                  </div>
                </td>
                <td>{truck.driver}</td>
                <td className="location-cell">{truck.loc}</td>
                <td>
                  <span className={`status-pill ${truck.status}`}>
                    {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
                  </span>
                </td>
                <td>{truck.speed}</td>
                <td className="update-cell">{truck.update}</td>
                <td>
                  <div className="batt-wrap">
                    <span>{truck.batt}%</span>
                    <div className="batt-bar">
                      <div
                        className={`batt-fill ${getBatteryColor(truck.batt)}`}
                        style={{ width: `${truck.batt}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ‹ Previous
          </button>

          <div className="page-numbers">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
              return (
                <button
                  key={pageNum}
                  className={`page-btn ${pageNum === currentPage ? 'active' : ''}`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next ›
          </button>
        </div>
      )}
    </div>
  );
};

export default TrucksView;