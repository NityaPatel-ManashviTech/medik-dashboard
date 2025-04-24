import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Sidebarc.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Appointment', icon: '📅', path: '/appointment' },
    { name: 'Lab Tests', icon: '🧪', path: '/lab-tests' },
    { name: 'Medicine Order', icon: '💊', path: '/medicine-order' },
    { name: 'Favourites', icon: '❤️', path: '/favourites' },
    { name: 'Family', icon: '👪', path: '/family' },
    { name: 'Prescription', icon: '📝', path: '/prescription' },
    { name: 'Messages', icon: '✉️', path: '/messages' },
    { name: 'Payments', icon: '💰', path: '/payments' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-check">✓</span>
        <span className="logo-text">medik</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="sidebar-item"
            onClick={() => handleMenuClick(item.path)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
