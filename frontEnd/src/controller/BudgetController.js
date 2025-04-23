import ApiService from '../services/ApiService';

export const getBudgets = async () => {
  try {
    // In a real app, this would call an API endpoint
    return [
      { id: 1, category: 'Housing', amount: 1500, spent: 1500, period: 'monthly' },
      { id: 2, category: 'Food', amount: 600, spent: 650, period: 'monthly' },
      { id: 3, category: 'Transportation', amount: 500, spent: 450, period: 'monthly' },
      { id: 4, category: 'Entertainment', amount: 200, spent: 280, period: 'monthly' },
      { id: 5, category: 'Utilities', amount: 350, spent: 320, period: 'monthly' },
      { id: 6, category: 'Shopping', amount: 300, spent: 250, period: 'monthly' }
    ];
  } catch (error) {
    console.error('Error fetching budgets:', error);
    throw error;
  }
};

export const addBudget = async (budget) => {
  try {
    // In a real app, this would send data to an API
    console.log('Adding budget:', budget);
    return { ...budget, id: Math.floor(Math.random() * 1000), spent: 0 };
  } catch (error) {
    console.error('Error adding budget:', error);
    throw error;
  }
};

export const updateBudget = async (id, budget) => {
  try {
    // In a real app, this would send data to an API
    console.log('Updating budget:', id, budget);
    return { ...budget, id };
  } catch (error) {
    console.error('Error updating budget:', error);
    throw error;
  }
};

export const deleteBudget = async (id) => {
  try {
    // In a real app, this would send a request to an API
    console.log('Deleting budget:', id);
    return true;
  } catch (error) {
    console.error('Error deleting budget:', error);
    throw error;
  }
};