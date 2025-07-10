// Simple authentication utilities
// In production, this would use proper encryption and server-side validation

const AUTH_KEY = 'ehr_auth_user';
const SESSION_TIMEOUT = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

class Auth {
  constructor() {
    this.currentUser = this.loadUser();
  }

  // Load user from localStorage
  loadUser() {
    try {
      const stored = localStorage.getItem(AUTH_KEY);
      if (!stored) return null;
      
      const { user, timestamp } = JSON.parse(stored);
      
      // Check if session expired
      if (Date.now() - timestamp > SESSION_TIMEOUT) {
        this.logout();
        return null;
      }
      
      return user;
    } catch (error) {
      console.error('Error loading user:', error);
      return null;
    }
  }

  // Save user to localStorage
  saveUser(user) {
    try {
      localStorage.setItem(AUTH_KEY, JSON.stringify({
        user,
        timestamp: Date.now()
      }));
      this.currentUser = user;
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  // Login function
  async login(email, password) {
    // In production, this would validate against a secure backend
    // For demo purposes, we'll use simple validation
    
    // Demo credentials
    const demoUsers = [
      {
        id: 1,
        email: 'admin@example.com',
        password: 'admin123',
        name: 'Admin User',
        role: 'Administrator'
      },
      {
        id: 2,
        email: 'nurse@example.com',
        password: 'nurse123',
        name: 'Sarah Johnson',
        role: 'Nurse'
      },
      {
        id: 3,
        email: 'tech@example.com',
        password: 'tech123',
        name: 'Mike Chen',
        role: 'Medication Technician'
      }
    ];

    const user = demoUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      this.saveUser(userWithoutPassword);
      return { success: true, user: userWithoutPassword };
    }
    
    return { success: false, error: 'Invalid email or password' };
  }

  // Logout function
  logout() {
    localStorage.removeItem(AUTH_KEY);
    this.currentUser = null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.currentUser !== null;
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Check user permissions
  hasPermission(permission) {
    if (!this.currentUser) return false;
    
    const permissions = {
      Administrator: ['all'],
      Nurse: ['view_residents', 'edit_residents', 'add_notes', 'view_medications', 'administer_medications'],
      'Medication Technician': ['view_residents', 'view_medications', 'administer_medications']
    };
    
    const userPermissions = permissions[this.currentUser.role] || [];
    return userPermissions.includes('all') || userPermissions.includes(permission);
  }

  // Update session timestamp
  updateSession() {
    if (this.currentUser) {
      this.saveUser(this.currentUser);
    }
  }
}

// Create and export singleton instance
const auth = new Auth();
export default auth;
