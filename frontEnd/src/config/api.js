const config = {
    // API endpoints
    apiUrl: process.env.NODE_ENV === 'production' 
      ? 'https://api.financetracker.com/v1' 
      : 'http://localhost:3001/api',
    
    // Request timeouts
    timeout: 15000, // 15 seconds
    
    // Feature flags
    features: {
      enableNotifications: true,
      enableBudgetAlerts: true,
      enableDataExport: true,
      enableDarkMode: true,
      enableCategoryCustomization: true
    },
    
    // Default pagination settings
    pagination: {
      recordsPerPage: 10,
      maxPagesToShow: 5
    },
    
    // Default transaction categories
    defaultCategories: {
      income: [
        'Salary',
        'Freelance',
        'Investments',
        'Gifts',
        'Other Income'
      ],
      expense: [
        'Housing',
        'Food',
        'Transportation',
        'Utilities',
        'Entertainment',
        'Shopping',
        'Healthcare',
        'Education',
        'Travel',
        'Personal',
        'Debt',
        'Other'
      ]
    },
    
    // Chart colors
    chartColors: {
      primary: [
        '#3B82F6', // blue-500
        '#10B981', // emerald-500
        '#F59E0B', // amber-500
        '#EF4444', // red-500
        '#8B5CF6', // violet-500
        '#EC4899', // pink-500
        '#6366F1', // indigo-500
        '#14B8A6', // teal-500
        '#F97316', // orange-500
        '#84CC16'  // lime-500
      ],
      secondary: [
        '#BFDBFE', // blue-200
        '#A7F3D0', // emerald-200
        '#FDE68A', // amber-200
        '#FECACA', // red-200
        '#DDD6FE', // violet-200
        '#FBCFE8', // pink-200
        '#C7D2FE', // indigo-200
        '#99F6E4', // teal-200
        '#FED7AA', // orange-200
        '#D9F99D'  // lime-200
      ]
    }
  };
  
  export default config;