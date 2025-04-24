import React, { useState } from 'react';
import '../styles/ConsultationSection.css';

const ConsultationSection: React.FC = () => {
  const [appointmentDate, setAppointmentDate] = useState<string>('');
  const [appointmentTime, setAppointmentTime] = useState<string>('11:00');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentDate(event.target.value);
  };

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentTime(event.target.value);
  };

  return (
    <div className="upcoming">
      <h2>Upcoming Consultation</h2>

      <div className="consultation-section">
        <div className="section-header"></div>

        <div className="consultation-card">
          <div className="consult-info">
            <div className="upcomingc-info">
              <div className="doctor-avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Dr. Darlene Robertson"
                />
              </div>
              <div className="doctor-details">
                <div className="doctor-name">Dr. Darlene Robertson</div>
                <div className="doctor-specialty">Dental Specialist</div>
              </div>
            </div>

            <div className="appointment-details">
              <div className="appointment-date">
                <span className="calendar-icon">📅</span>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={handleDateChange}
                  placeholder="Select Appointment Date"
                />
              </div>
              <div className="appointment-time">
                <span className="clock-icon">🕐</span>
                <input
                  type="time"
                  value={appointmentTime}
                  onChange={handleTimeChange}
                  placeholder="Select Appointment Time"
                />
              </div>
            </div>

            <div className="appointment-actions">
              <button className="cancel-btn">Cancel</button>
              <button className="reschedule-btn">Reschedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSection;
