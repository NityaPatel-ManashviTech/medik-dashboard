import React from 'react';
import '../styles/MedicationSection.css';

interface MedicationProps {
  name: string;
  dosage: string;
  instructions: string;
}

const MedicationItem: React.FC<MedicationProps> = ({ name, dosage, instructions }) => {
  return (
    <div className="medication-item">
      <div className="medication-header">
        <div className="medication-name">{name} {dosage}</div>
      </div>
      <div className="medication-instructions">{instructions}</div>
    </div>
  );
};

const MedicationSection: React.FC = () => {
    const medications = [
      {
        name: 'Acetaminophen',
        dosage: '500 mg',
        instructions: 'Take with food every morning',
      },
      {
        name: 'Doxycycline',
        dosage: '100 mg',
        instructions: 'Take 1 with food twice a day, and avoid drinking alcohol for 2 hours after',
      },
      {
        name: 'Hydrochlorothiazide',
        dosage: '23 mg',
        instructions: 'Take 3 tablets, 3 times a day for 7 days',
      },
    ];
    return (
        <div className="medication-section">
          <div className="section-header">
            <h2>Medications</h2>
            <div className="more-options">•••</div>
          </div>
          <div className="medication-list">
            {medications.map((medication, index) => (
              <MedicationItem key={index} {...medication} />
            ))}
          </div>
        </div>
      );
    };
    
    export default MedicationSection;
      