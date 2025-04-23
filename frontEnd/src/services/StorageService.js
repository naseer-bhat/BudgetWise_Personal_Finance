// Token management
export const setAuthToken = (token) => {
  localStorage.setItem('auth_token', token);
};

export const getAuthToken = () => {
  return localStorage.getItem('auth_token');
};

export const removeAuthToken = () => {
  localStorage.removeItem('auth_token');
};

// User preferences
export const setUserPreference = (key, value) => {
  localStorage.setItem(`pref_${key}`, JSON.stringify(value));
};

export const getUserPreference = (key, defaultValue = null) => {
  const value = localStorage.getItem(`pref_${key}`);
  return value ? JSON.parse(value) : defaultValue;
};

// Temporary storage
export const setTemporaryData = (key, value, expiryMinutes = 30) => {
  const data = {
    value,
    expiry: new Date().getTime() + (expiryMinutes * 60 * 1000)
  };
  localStorage.setItem(`temp_${key}`, JSON.stringify(data));
};

export const getTemporaryData = (key) => {
  const data = localStorage.getItem(`temp_${key}`);
  if (!data) return null;
  
  const item = JSON.parse(data);
  
  // Check if the item has expired
  if (new Date().getTime() > item.expiry) {
    localStorage.removeItem(`temp_${key}`);
    return null;
  }
  
  return item.value;
};

export const clearTemporaryData = (key) => {
  localStorage.removeItem(`temp_${key}`);
};