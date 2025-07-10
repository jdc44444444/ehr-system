// Form validation utilities

const validation = {
  // Required field validation
  required: (value, fieldName = 'This field') => {
    if (!value || value.toString().trim() === '') {
      return `${fieldName} is required`;
    }
    return null;
  },

  // Email validation
  email: (value) => {
    if (!value) return null;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address';
    }
    return null;
  },

  // Phone number validation
  phone: (value) => {
    if (!value) return null;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(value)) {
      return 'Please enter phone in format: XXX-XXX-XXXX';
    }
    return null;
  },

  // Date validation
  date: (value, options = {}) => {
    if (!value) return null;
    
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return 'Please enter a valid date';
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (options.past && date > now) {
      return 'Date must be in the past';
    }

    if (options.future && date < now) {
      return 'Date must be in the future';
    }

    if (options.minAge) {
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - options.minAge);
      if (date > minDate) {
        return `Must be at least ${options.minAge} years old`;
      }
    }

    return null;
  },

  // Number validation
  number: (value, options = {}) => {
    if (!value && value !== 0) return null;
    
    const num = parseFloat(value);
    if (isNaN(num)) {
      return 'Please enter a valid number';
    }

    if (options.min !== undefined && num < options.min) {
      return `Must be at least ${options.min}`;
    }

    if (options.max !== undefined && num > options.max) {
      return `Must be no more than ${options.max}`;
    }

    if (options.integer && !Number.isInteger(num)) {
      return 'Must be a whole number';
    }

    return null;
  },

  // Length validation
  length: (value, options = {}) => {
    if (!value) return null;
    
    const length = value.toString().length;

    if (options.min !== undefined && length < options.min) {
      return `Must be at least ${options.min} characters`;
    }

    if (options.max !== undefined && length > options.max) {
      return `Must be no more than ${options.max} characters`;
    }

    if (options.exact !== undefined && length !== options.exact) {
      return `Must be exactly ${options.exact} characters`;
    }

    return null;
  },

  // Pattern validation
  pattern: (value, pattern, message = 'Invalid format') => {
    if (!value) return null;
    
    const regex = new RegExp(pattern);
    if (!regex.test(value)) {
      return message;
    }
    return null;
  },

  // Time validation
  time: (value) => {
    if (!value) return null;
    
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(value)) {
      return 'Please enter time in format: HH:MM';
    }
    return null;
  },

  // Medication dosage validation
  dosage: (value) => {
    if (!value) return null;
    
    // Allow formats like: "5mg", "10 mg", "2.5 mL", "1 tablet"
    const dosageRegex = /^\d+(\.\d+)?\s*(mg|mcg|g|mL|L|tablet|tablets|capsule|capsules|unit|units)$/i;
    if (!dosageRegex.test(value)) {
      return 'Please enter a valid dosage (e.g., 5mg, 10mL, 1 tablet)';
    }
    return null;
  },

  // Room number validation
  roomNumber: (value) => {
    if (!value) return null;
    
    // Allow formats like: "101", "A12", "203-B"
    const roomRegex = /^[A-Z]?\d{1,3}(-?[A-Z])?$/i;
    if (!roomRegex.test(value)) {
      return 'Please enter a valid room number';
    }
    return null;
  },

  // Password validation
  password: (value, options = {}) => {
    if (!value) return 'Password is required';
    
    const errors = [];
    
    if (value.length < (options.minLength || 8)) {
      errors.push(`at least ${options.minLength || 8} characters`);
    }

    if (options.requireUppercase && !/[A-Z]/.test(value)) {
      errors.push('one uppercase letter');
    }

    if (options.requireLowercase && !/[a-z]/.test(value)) {
      errors.push('one lowercase letter');
    }

    if (options.requireNumber && !/\d/.test(value)) {
      errors.push('one number');
    }

    if (options.requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      errors.push('one special character');
    }

    if (errors.length > 0) {
      return `Password must contain ${errors.join(', ')}`;
    }

    return null;
  },

  // Validate entire form
  validateForm: (formData, rules) => {
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach(field => {
      const value = formData[field];
      const fieldRules = rules[field];
      
      for (const rule of fieldRules) {
        const error = rule(value);
        if (error) {
          errors[field] = error;
          isValid = false;
          break;
        }
      }
    });

    return { isValid, errors };
  },

  // Common form validation rules
  commonRules: {
    residentForm: {
      name: [
        (v) => validation.required(v, 'Name'),
        (v) => validation.length(v, { min: 2, max: 100 })
      ],
      dateOfBirth: [
        (v) => validation.required(v, 'Date of birth'),
        (v) => validation.date(v, { past: true, minAge: 18 })
      ],
      room: [
        (v) => validation.required(v, 'Room number'),
        (v) => validation.roomNumber(v)
      ],
      emergencyContact: [
        (v) => validation.required(v, 'Emergency contact')
      ]
    },
    
    medicationForm: {
      name: [
        (v) => validation.required(v, 'Medication name')
      ],
      dosage: [
        (v) => validation.required(v, 'Dosage'),
        (v) => validation.dosage(v)
      ],
      frequency: [
        (v) => validation.required(v, 'Frequency')
      ],
      route: [
        (v) => validation.required(v, 'Route')
      ]
    },
    
    userForm: {
      name: [
        (v) => validation.required(v, 'Name'),
        (v) => validation.length(v, { min: 2, max: 100 })
      ],
      email: [
        (v) => validation.required(v, 'Email'),
        (v) => validation.email(v)
      ],
      password: [
        (v) => validation.password(v, {
          minLength: 8,
          requireUppercase: true,
          requireLowercase: true,
          requireNumber: true
        })
      ],
      role: [
        (v) => validation.required(v, 'Role')
      ]
    }
  }
};

export default validation;
