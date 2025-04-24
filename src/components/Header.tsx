import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FiBell, FiUser } from 'react-icons/fi';

const Header = ({ onSearch }: { onSearch?: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(searchQuery);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);


  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

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
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <span className="clear-icon" onClick={handleClear} style={{ cursor: 'pointer', marginLeft: '8px' }}>
              X
            </span>
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="notification-icon">
          <FiBell size={24} color="#555" /> 
        </div>
        <div className="profile-icon">
          <FiUser size={24} color="#555" /> 
        </div>
      </div>
    </div>
  );
};

export default Header;
