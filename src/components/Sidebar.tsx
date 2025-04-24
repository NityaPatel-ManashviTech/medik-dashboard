import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaFlask, FaPills, FaHeart, FaUsers, FaClipboardList, FaEnvelope, FaDollarSign, FaCog } from 'react-icons/fa'; // Import React Icons
import "../styles/Sidebarc.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Appointment', icon: <FaCalendarAlt />, path: '/appointment' },
    { name: 'Lab Tests', icon: <FaFlask />, path: '/lab-tests' },
    { name: 'Medicine Order', icon: <FaPills />, path: '/medicine-order' },
    { name: 'Favourites', icon: <FaHeart />, path: '/favourites' },
    { name: 'Family', icon: <FaUsers />, path: '/family' },
    { name: 'Prescription', icon: <FaClipboardList />, path: '/prescription' },
    { name: 'Messages', icon: <FaEnvelope />, path: '/messages' },
    { name: 'Payments', icon: <FaDollarSign />, path: '/payments' },
    { name: 'Settings', icon: <FaCog />, path: '/settings' },
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
