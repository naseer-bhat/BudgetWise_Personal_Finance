import ApiService from '../services/ApiService';

export const getTransactions = async (filters = {}) => {
  try {
    // In a real app, this would call an API endpoint with filters
    // For this example, we'll return mock data
    return [
      { id: 1, description: 'Grocery Store', category: 'Food', amount: 85.20, type: 'expense', date: new Date(2025, 3, 22) },
      { id: 2, description: 'Monthly Salary', category: 'Income', amount: 4500, type: 'income', date: new Date(2025, 3, 20) },
      { id: 3, description: 'Netflix Subscription', category: 'Entertainment', amount: 15.99, type: 'expense', date: new Date(2025, 3, 18) },
      { id: 4, description: 'Electric Bill', category: 'Utilities', amount: 112.50, type: 'expense', date: new Date(2025, 3, 15) },
      { id: 5, description: 'Freelance Payment', category: 'Income', amount: 600, type: 'income', date: new Date(2025, 3, 14) },
      { id: 6, description: 'Restaurant Dinner', category: 'Food', amount: 76.30, type: 'expense', date: new Date(2025, 3, 12) },
      { id: 7, description: 'Gas', category: 'Transportation', amount: 45.80, type: 'expense', date: new Date(2025, 3, 10) },
      { id: 8, description: 'Water Bill', category: 'Utilities', amount: 58.75, type: 'expense', date: new Date(2025, 3, 5) }
    ];
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error;
  }
};

export const addTransaction = async (transaction) => {
  try {
    // In a real app, this would send data to an API
    console.log('Adding transaction:', transaction);
    return { ...transaction, id: Math.floor(Math.random() * 1000) };
  } catch (error) {
    console.error('Error adding transaction:', error);
    throw error;
  }
};

export const updateTransaction = async (id, transaction) => {
  try {
    // In a real app, this would send data to an API
    console.log('Updating transaction:', id, transaction);
    return { ...transaction, id };
  } catch (error) {
    console.error('Error updating transaction:', error);
    throw error;
  }
};

export const deleteTransaction = async (id) => {
  try {
    // In a real app, this would send a request to an API
    console.log('Deleting transaction:', id);
    return true;
  } catch (error) {
    console.error('Error deleting transaction:', error);
    throw error;
  }
};