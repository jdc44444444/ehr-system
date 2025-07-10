import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import MainLayout from './MainLayout';

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
}

export default PrivateRoute;
