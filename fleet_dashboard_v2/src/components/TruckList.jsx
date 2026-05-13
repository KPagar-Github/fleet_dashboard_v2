import React, { useState, useMemo } from 'react';
import { FilterIcon } from './Icons.jsx';
import { trucks as initialTrucks } from '../data/trucks.js';

const TruckList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getBatteryColor = (value) => {
    if (value > 65) return 'high';
    if (value > 35) return 'mid';
    return 'low';
  };

  // Filter trucks based on search
  const filteredTrucks = useMemo(() => {
    return initialTrucks.filter((truck) => {
      const query = searchQuery.toLowerCase();
      return (
        truck.id.toLowerCase().includes(query) ||
        truck.driver.toLowerCase().includes(query) ||
        truck.loc.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredTrucks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTrucks = filteredTrucks.slice(startIndex, startIndex + itemsPerPage);

  const pageInfo = `Showing ${Math.min(startIndex + 1, filteredTrucks.length)} to ${Math.min(startIndex + itemsPerPage, filteredTrucks.length)} of ${filteredTrucks.length}`;

  const handlePageChange = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="table-section">
      <div className="table-toolbar">
        <div className="search-wrap">
          <span className="search-ico">&#128269;</span>
          <input
            type="text"
            placeholder="Search Truck"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="filter-btn">
          <FilterIcon />
          Filters
        </div>
        <div className="page-info">{pageInfo}</div>
        <div className="page-btns">
          <div className="pg-btn" onClick={() => handlePageChange(1)}>
            1
          </div>
          {totalPages > 1 && (
            <div className={`pg-btn ${currentPage === 2 ? 'active' : ''}`} onClick={() => handlePageChange(2)}>
              2
            </div>
          )}
          {totalPages > 2 && (
            <div className={`pg-btn ${currentPage === 3 ? 'active' : ''}`} onClick={() => handlePageChange(3)}>
              3
            </div>
          )}
          {totalPages > 3 && (
            <div className="pg-btn" style={{ border: 'none', background: 'none', color: '#8b92a5' }}>
              ...
            </div>
          )}
          {totalPages > 3 && (
            <div className="pg-btn" onClick={() => handlePageChange(totalPages)}>
              {totalPages}
            </div>
          )}
          <div className="pg-btn" onClick={() => handlePageChange(currentPage + 1)}>
            ›
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Truck ID</th>
            <th>Driver</th>
            <th>Location</th>
            <th>Status</th>
            <th>Speed</th>
            <th>Last Update</th>
            <th>Battery</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedTrucks.map((truck) => (
            <tr key={truck.id}>
              <td style={{ fontWeight: 500, color: '#fff' }}>{truck.id}</td>
              <td>{truck.driver}</td>
              <td style={{ color: '#8b92a5' }}>{truck.loc}</td>
              <td>
                <span className={`status-pill ${truck.status}`}>
                  {truck.status.charAt(0).toUpperCase() + truck.status.slice(1)}
                </span>
              </td>
              <td>{truck.speed}</td>
              <td style={{ color: '#8b92a5' }}>{truck.update}</td>
              <td>
                <div className="batt-wrap">
                  <span style={{ fontSize: '12px', color: '#d1d5e0' }}>{truck.batt}%</span>
                  <div className="batt-bar">
                    <div
                      className={`batt-fill ${getBatteryColor(truck.batt)}`}
                      style={{ width: `${truck.batt}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td>
                <div className="dots-btn">&#8942;</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TruckList;
