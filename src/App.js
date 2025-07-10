import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ClientList from './pages/ClientList';
import ClientProfile from './pages/ClientProfile';
import FaceSheet from './pages/FaceSheet';
import MonthlyNursingNote from './pages/MonthlyNursingNote';
import MAR from './pages/MAR';
import CarePlan from './pages/CarePlan';
import VitalSignsFlowSheet from './pages/VitalSignsFlowSheet';
import AdmissionAssessment from './pages/AdmissionAssessment';
import DocumentManager from './pages/DocumentManager';
import Reports from './pages/Reports';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/clients" element={<PrivateRoute><ClientList /></PrivateRoute>} />
          <Route path="/clients/:id" element={<PrivateRoute><ClientProfile /></PrivateRoute>} />
          <Route path="/clients/:id/face-sheet" element={<PrivateRoute><FaceSheet /></PrivateRoute>} />
          <Route path="/clients/:id/nursing-note" element={<PrivateRoute><MonthlyNursingNote /></PrivateRoute>} />
          <Route path="/clients/:id/mar" element={<PrivateRoute><MAR /></PrivateRoute>} />
          <Route path="/clients/:id/care-plan" element={<PrivateRoute><CarePlan /></PrivateRoute>} />
          <Route path="/clients/:id/vitals" element={<PrivateRoute><VitalSignsFlowSheet /></PrivateRoute>} />
          <Route path="/clients/:id/admission" element={<PrivateRoute><AdmissionAssessment /></PrivateRoute>} />
          <Route path="/clients/:id/documents" element={<PrivateRoute><DocumentManager /></PrivateRoute>} />
          <Route path="/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
