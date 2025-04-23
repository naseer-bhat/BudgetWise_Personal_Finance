import ApiService from './ApiService';
import { setAuthToken, removeAuthToken } from './StorageService';

export const login = async (email, password) => {
  try {
    // In a real app, this would be an API call
    const response = await ApiService.post('/auth/login', { email, password });
    setAuthToken(response.token);
    return response.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const signup = async (name, email, password) => {
  try {
    // In a real app, this would be an API call
    const response = await ApiService.post('/auth/signup', { name, email, password });
    setAuthToken(response.token);
    return response.user;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    // In a real app, you might need to call the server to invalidate the token
    removeAuthToken();
    return true;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};