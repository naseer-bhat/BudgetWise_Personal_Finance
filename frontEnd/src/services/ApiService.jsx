import { getAuthToken } from './StorageService';

class ApiService {
  static baseUrl = 'https://api.example.com'; // Replace with your API URL

  static async get(endpoint) {
    return this.request(endpoint, 'GET');
  }

  static async post(endpoint, data) {
    return this.request(endpoint, 'POST', data);
  }

  static async put(endpoint, data) {
    return this.request(endpoint, 'PUT', data);
  }

  static async delete(endpoint) {
    return this.request(endpoint, 'DELETE');
  }

  static async request(endpoint, method, data = null) {
    const url = `${this.baseUrl}${endpoint}`;
    const token = getAuthToken();
    
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const options = {
      method,
      headers,
    };
    
    if (data) {
      options.body = JSON.stringify(data);
    }
    
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    } 
  }
}

export default ApiService;   