// Date and time formatting utilities

const dateHelpers = {
  // Format date to MM/DD/YYYY
  formatDate: (date) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    
    return `${month}/${day}/${year}`;
  },

  // Format date to YYYY-MM-DD (for input fields)
  formatDateInput: (date) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  },

  // Format time to HH:MM AM/PM
  formatTime: (date) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    return `${hours}:${minutes} ${ampm}`;
  },

  // Format date and time
  formatDateTime: (date) => {
    if (!date) return '';
    return `${dateHelpers.formatDate(date)} ${dateHelpers.formatTime(date)}`;
  },

  // Format date relative to now (e.g., "2 hours ago", "Yesterday")
  formatRelative: (date) => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    const now = new Date();
    const diffMs = now - d;
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffSecs < 60) {
      return 'Just now';
    } else if (diffMins < 60) {
      return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return dateHelpers.formatDate(date);
    }
  },

  // Calculate age from date of birth
  calculateAge: (dateOfBirth) => {
    if (!dateOfBirth) return '';
    const dob = new Date(dateOfBirth);
    if (isNaN(dob.getTime())) return '';
    
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    
    return age;
  },

  // Get days between two dates
  daysBetween: (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return 0;
    
    const diffMs = Math.abs(d2 - d1);
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  },

  // Get month name
  getMonthName: (date) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    return months[d.getMonth()];
  },

  // Get day of week
  getDayOfWeek: (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    
    return days[d.getDay()];
  },

  // Check if date is today
  isToday: (date) => {
    const d = new Date(date);
    const today = new Date();
    
    return d.getDate() === today.getDate() &&
           d.getMonth() === today.getMonth() &&
           d.getFullYear() === today.getFullYear();
  },

  // Check if date is in the past
  isPast: (date) => {
    const d = new Date(date);
    const now = new Date();
    return d < now;
  },

  // Check if date is in the future
  isFuture: (date) => {
    const d = new Date(date);
    const now = new Date();
    return d > now;
  },

  // Get start of day
  startOfDay: (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  },

  // Get end of day
  endOfDay: (date) => {
    const d = new Date(date);
    d.setHours(23, 59, 59, 999);
    return d;
  },

  // Get dates for a month
  getMonthDates: (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const dates = [];
    
    for (let d = 1; d <= lastDay.getDate(); d++) {
      dates.push(new Date(year, month, d));
    }
    
    return dates;
  },

  // Format medication times
  formatMedicationTimes: (times) => {
    if (!Array.isArray(times)) return '';
    return times.map(time => dateHelpers.formatTime(new Date(`2000-01-01 ${time}`))).join(', ');
  },

  // Get next medication time
  getNextMedicationTime: (frequency, lastGiven) => {
    const now = new Date();
    const frequencyHours = {
      'Once daily': 24,
      'Twice daily': 12,
      'Three times daily': 8,
      'Four times daily': 6,
      'Every 4 hours': 4,
      'Every 6 hours': 6,
      'Every 8 hours': 8,
      'Every 12 hours': 12,
      'As needed': null
    };
    
    const hours = frequencyHours[frequency];
    if (!hours) return null;
    
    if (lastGiven) {
      const last = new Date(lastGiven);
      last.setHours(last.getHours() + hours);
      return last;
    }
    
    // Default times for new medications
    const defaultTimes = {
      'Once daily': '09:00',
      'Twice daily': '09:00',
      'Three times daily': '08:00',
      'Four times daily': '08:00'
    };
    
    const defaultTime = defaultTimes[frequency] || '08:00';
    const nextTime = new Date();
    const [hours24, minutes] = defaultTime.split(':');
    nextTime.setHours(parseInt(hours24), parseInt(minutes), 0, 0);
    
    if (nextTime < now) {
      nextTime.setDate(nextTime.getDate() + 1);
    }
    
    return nextTime;
  }
};

export default dateHelpers;
