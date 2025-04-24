import React from 'react';
import '../styles/ConsultationSection.css';

const ConsultationSection: React.FC = () => {
  return (
    <div className="consultation-section">
      <div className="section-header">
        <h2>Upcoming Consultation</h2>
      </div>
      <div className="consultation-card">
        <div className="doctor-info">
          <div className="doctor-avatar">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Darlene Robertson" />
          </div>
          <div className="doctor-details">
            <div className="doctor-name">Dr. Darlene Robertson</div>
            <div className="doctor-specialty">Dental Specialist</div>
          </div>
        </div>
        <div className="appointment-details">
          <div className="appointment-date">
            <span className="calendar-icon">📅</span>
            <span>27 Oct 2021</span>
          </div>
          <div className="appointment-time">
            <span className="clock-icon">🕐</span>
            <span>11:00 - 12:00 AM</span>
          </div>
        </div>
        <div className="appointment-actions">
          <button className="cancel-btn">Cancel</button>
          <button className="reschedule-btn">Reschedule</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;