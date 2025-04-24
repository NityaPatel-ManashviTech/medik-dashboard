import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Appointment } from './components/pages/Appointment';
import LabTests from './components/pages/LabTests';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Family from './components/pages/Family';
import MedicineOrder from './components/pages/MedicineOrder';
import Favourites from './components/pages/Favourites';
import Prescription from './components/pages/Prescription';
import Messages from './components/pages/Messages';
import Payments from './components/pages/Payments';
import Settings from './components/pages/Settings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/family" element={<Family />} />
            <Route path="/medicine-order" element={<MedicineOrder />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
