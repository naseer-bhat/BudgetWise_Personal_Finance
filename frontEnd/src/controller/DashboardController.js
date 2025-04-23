import ApiService from '../services/ApiService';

export const getDashboardData = async () => {
  try {
    // In a real app, this would call an API endpoint
    // For this example, we'll return mock data
    return {
      monthlyIncome: 5200,
      monthlyExpenses: 3800,
      accounts: [
        { id: 1, name: 'Checking Account', balance: 2450.75 },
        { id: 2, name: 'Savings Account', balance: 8752.32 },
        { id: 3, name: 'Credit Card', balance: -420.50 }
      ],
      expensesByCategory: [
        { category: 'Housing', amount: 1500 },
        { category: 'Food', amount: 650 },
        { category: 'Transportation', amount: 450 },
        { category: 'Utilities', amount: 320 },
        { category: 'Entertainment', amount: 280 },
        { category: 'Other', amount: 600 }
      ],
      incomeBySource: [
        { source: 'Salary', amount: 4500 },
        { source: 'Freelance', amount: 600 },
        { source: 'Investments', amount: 100 }
      ],
      recentTransactions: [
        { id: 1, description: 'Grocery Store', category: 'Food', amount: 85.20, type: 'expense', date: new Date(2025, 3, 22) },
        { id: 2, description: 'Monthly Salary', category: 'Income', amount: 4500, type: 'income', date: new Date(2025, 3, 20) },
        { id: 3, description: 'Netflix Subscription', category: 'Entertainment', amount: 15.99, type: 'expense', date: new Date(2025, 3, 18) },
        { id: 4, description: 'Electric Bill', category: 'Utilities', amount: 112.50, type: 'expense', date: new Date(2025, 3, 15) },
        { id: 5, description: 'Freelance Payment', category: 'Income', amount: 600, type: 'income', date: new Date(2025, 3, 14) }
      ],
      budgets: [
        { id: 1, category: 'Housing', amount: 1500, spent: 1500, period: 'monthly' },
        { id: 2, category: 'Food', amount: 600, spent: 650, period: 'monthly' },
        { id: 3, category: 'Transportation', amount: 500, spent: 450, period: 'monthly' },
        { id: 4, category: 'Entertainment', amount: 200, spent: 280, period: 'monthly' }
      ]
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};
