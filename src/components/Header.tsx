import React, { useState } from 'react'
import "../styles/Header.css";
const Header = () => {
    const [searchQuery,setSearchQuery]=useState("")
  return (
    <div className="header">
    <div className="header-left">
      <div className="dropdown">
        <div className="dropdown-selected">Default</div>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search by doctor's name/ speciality etc"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      </div>
      <div className="header-right">
        <div className="notification-icon">🔔</div>
        <div className="profile-icon">👤</div>
      </div>
     
    </div>
  );
}

export default Header