import React from 'react'
import "../styles/Sidebarc.css";
const Sidebar: React.FC = () => {
    const menuItems = [
      { name: 'Home', icon: '🏠' },
      { name: 'Appointment', icon: '📅' },
      { name: 'Lab Tests', icon: '🧪' },
      { name: 'Medicine Order', icon: '💊' },
      { name: 'Favourites', icon: '❤️' },
      { name: 'Family', icon: '👪' },
      { name: 'Prescription', icon: '📝' },
      { name: 'Messages', icon: '✉️' },
      { name: 'Payments', icon: '💰' },
      { name: 'Settings', icon: '⚙️' },
    ];
  
    const handleMenuClick = (item: string) => {
      console.log(`Navigating to ${item}`);
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
                onClick={() => handleMenuClick(item.name)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-text">{item.name}</span>
              </div>
            ))}
          </nav>
        </div>
      );
    
}
export default Sidebar;
