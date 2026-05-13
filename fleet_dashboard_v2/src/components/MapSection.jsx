import React, { useState } from 'react';

const MapSection = () => {
  const [activeTab, setActiveTab] = useState('map');

  return (
    <div className="map-wrap">
      <div className="map-tabs">
        <div
          className={`map-tab ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          Map
        </div>
        <div
          className={`map-tab ${activeTab === 'satellite' ? 'active' : ''}`}
          onClick={() => setActiveTab('satellite')}
        >
          Satellite
        </div>
      </div>
      <svg
        className="map-svg"
        viewBox="0 0 760 230"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* background */}
        <rect width="760" height="230" fill="#1a2035" />
        {/* ocean west */}
        <path
          d="M0 0 L180 0 L160 40 L140 90 L120 140 L100 180 L80 230 L0 230 Z"
          fill="#0f1827"
          opacity="0.6"
        />
        {/* terrain blobs */}
        <ellipse cx="400" cy="115" rx="320" ry="95" fill="#1e2840" opacity="0.5" />
        <ellipse cx="550" cy="80" rx="180" ry="60" fill="#1e2d40" opacity="0.4" />
        <ellipse cx="300" cy="150" rx="160" ry="55" fill="#1e2d3a" opacity="0.4" />
        {/* roads */}
        <path
          d="M200 115 Q300 100 380 110 Q460 118 540 105 Q620 92 710 100"
          stroke="#2a3550"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M200 115 Q240 140 280 155 Q320 170 350 180 Q390 195 420 190"
          stroke="#2a3550"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M380 110 Q370 90 360 70 Q350 50 340 30"
          stroke="#2a3550"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M460 118 Q450 140 440 160 Q430 175 420 190"
          stroke="#2a3550"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M540 105 Q535 125 530 150 Q525 165 520 180"
          stroke="#2a3550"
          strokeWidth="1.5"
          fill="none"
        />
        {/* state border */}
        <path
          d="M180 30 Q220 20 280 25 Q340 15 400 20 Q500 10 580 30 Q650 50 700 80 Q720 110 710 140 Q700 170 680 190 Q640 210 580 220 Q500 230 440 225 Q380 220 320 215 Q260 205 220 190 Q180 170 165 140 Q155 110 160 80 Q165 55 180 30Z"
          stroke="#2563eb"
          strokeWidth="0.8"
          fill="none"
          opacity="0.3"
          strokeDasharray="4 3"
        />
        {/* city dots & labels */}
        <circle cx="620" cy="45" r="4" fill="#4a5568" />
        <text x="620" y="38" className="city-label">Nagpur</text>
        <circle cx="310" cy="155" r="4" fill="#4a5568" />
        <text x="310" y="148" className="city-label">Pune</text>
        <circle cx="185" cy="130" r="4" fill="#4a5568" />
        <text x="185" y="123" className="city-label">Mumbai</text>
        <circle cx="680" cy="108" r="4" fill="#4a5568" />
        <text x="680" y="101" className="city-label">Chandrapur</text>
        <circle cx="430" cy="195" r="4" fill="#4a5568" />
        <text x="430" y="188" className="city-label">Solapur</text>
        <circle cx="355" cy="72" r="4" fill="#4a5568" />
        <text x="355" y="65" className="city-label">Nashik</text>
        <circle cx="470" cy="120" r="4" fill="#4a5568" />
        <text x="470" y="113" className="city-label">Aurangabad</text>
        <circle cx="540" cy="50" r="3" fill="#4a5568" />
        <text x="540" y="43" className="city-label">Amravati</text>

        {/* Cluster green (2) near Nashik */}
        <g className="truck-pin">
          <circle className="truck-pin-circle cluster-circle" cx="320" cy="88" r="14" fill="#15803d" />
          <text className="pin-label" x="320" y="88">
            2
          </text>
        </g>
        {/* Cluster green (3) Aurangabad area */}
        <g className="truck-pin">
          <circle className="truck-pin-circle cluster-circle" cx="445" cy="138" r="14" fill="#15803d" />
          <text className="pin-label" x="445" y="138">
            3
          </text>
        </g>
        {/* Individual moving - Mumbai */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="193" cy="148" r="8" fill="#16a34a" />
          <rect x="188" y="144" width="10" height="7" rx="1.5" fill="white" opacity="0.9" />
        </g>
        {/* Individual stopped - near Pune */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="290" cy="168" r="8" fill="#dc2626" />
          <rect x="285" y="164" width="10" height="7" rx="1.5" fill="white" opacity="0.9" />
        </g>
        {/* Individual moving - Solapur */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="410" cy="185" r="8" fill="#16a34a" />
          <rect x="405" y="181" width="10" height="7" rx="1.5" fill="white" opacity="0.9" />
        </g>
        {/* Alert pin - Nanded area */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="560" cy="148" r="9" fill="#dc2626" />
          <text style={{ fontSize: '10px', fill: 'white', textAnchor: 'middle', dominantBaseline: 'central' }} x="560" y="148">
            !
          </text>
        </g>
        {/* Individual Nagpur */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="600" cy="62" r="8" fill="#16a34a" />
          <rect x="595" y="58" width="10" height="7" rx="1.5" fill="white" opacity="0.9" />
        </g>
        {/* Individual Chandrapur */}
        <g className="truck-pin">
          <circle className="truck-pin-circle" cx="668" cy="122" r="8" fill="#16a34a" />
          <rect x="663" y="118" width="10" height="7" rx="1.5" fill="white" opacity="0.9" />
        </g>
        {/* NH label badges */}
        <rect x="350" y="130" width="36" height="16" rx="4" fill="#1e3a5f" />
        <text x="368" y="141" style={{ fontSize: '9px', fill: '#60a5fa', textAnchor: 'middle', fontWeight: '600' }}>
          AH43
        </text>
        <rect x="490" y="100" width="36" height="16" rx="4" fill="#1e3a5f" />
        <text x="508" y="111" style={{ fontSize: '9px', fill: '#60a5fa', textAnchor: 'middle', fontWeight: '600' }}>
          AH48
        </text>

        {/* zoom controls */}
        <rect x="726" y="80" width="26" height="26" rx="5" fill="#1e2840" stroke="#252a35" strokeWidth="1" />
        <text x="739" y="97" style={{ fontSize: '16px', fill: '#d1d5e0', textAnchor: 'middle', dominantBaseline: 'central' }}>
          +
        </text>
        <rect x="726" y="112" width="26" height="26" rx="5" fill="#1e2840" stroke="#252a35" strokeWidth="1" />
        <text x="739" y="128" style={{ fontSize: '14px', fill: '#d1d5e0', textAnchor: 'middle', dominantBaseline: 'central' }}>
          −
        </text>
      </svg>
    </div>
  );
};

export default MapSection;
