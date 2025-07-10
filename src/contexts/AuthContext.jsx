import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('ehrUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate authentication
    if (email && password) {
      const user = {
        id: '1',
        email: email,
        name: 'Sarah Johnson',
        role: 'nurse',
        initials: 'SJ'
      };
      setCurrentUser(user);
      localStorage.setItem('ehrUser', JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid credentials');
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('ehrUser');
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
