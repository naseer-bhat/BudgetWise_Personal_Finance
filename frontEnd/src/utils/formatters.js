export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };
  
  // Format dates
  export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  };
  
  // Format percentages
  export const formatPercent = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }).format(value / 100);
  };
  
  // Format large numbers with abbreviations (K, M, B)
  export const formatLargeNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };
  
  // Format time periods
  export const formatTimePeriod = (period) => {
    const periods = {
      'daily': 'Daily',
      'weekly': 'Weekly',
      'monthly': 'Monthly',
      'quarterly': 'Quarterly',
      'yearly': 'Yearly'
    };
    
    return periods[period] || period;
  };
  
  // utils/validators.js
  // Validate email format
  export const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  // Validate password strength
  export const isStrongPassword = (password) => {
    // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };
  
  // Validate amount (positive number with optional decimal points)
  export const isValidAmount = (amount) => {
    const re = /^[0-9]+(\.[0-9]{1,2})?$/;
    return re.test(amount) && parseFloat(amount) > 0;
  };
  
  // Validate date format (YYYY-MM-DD)
  export const isValidDate = (dateString) => {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    if (!re.test(dateString)) return false;
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;
    
    // Check if the date is in the expected format (handling invalid dates like 2021-02-30)
    return date.toISOString().slice(0, 10) === dateString;
  };
  
  // Check if a category name is valid
  export const isValidCategoryName = (name) => {
    // Category name should be at least 3 characters and not more than 30
    return typeof name === 'string' && name.trim().length >= 3 && name.trim().length <= 30;
  };
  
  // Validate phone number format
  export const isValidPhoneNumber = (phone) => {
    // Basic US phone number validation (XXX-XXX-XXXX or (XXX) XXX-XXXX or XXXXXXXXXX)
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(phone);
  };