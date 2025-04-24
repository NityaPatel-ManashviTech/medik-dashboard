import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaFlask, FaPills, FaHeart, FaUsers, FaClipboardList, FaEnvelope, FaDollarSign, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import "../styles/Sidebarc.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

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
    if (isMobile) {
      setShowSidebar(false);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };


  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
     
      {isMobile && (
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          {showSidebar ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <div className={`sidebar ${showSidebar ? 'active' : ''} ${isMobile ? 'mobile' : ''}`}>
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
    </>
  );
};

export default Sidebar;