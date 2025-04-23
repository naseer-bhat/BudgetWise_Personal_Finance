import React from 'react';

const BudgetOverview = ({ budgets }) => {
  if (budgets.length === 0) {
    return <p className="text-gray-500">No budgets found.</p>;
  }
 
  return (
    <div className="space-y-4">
      {budgets.map(budget => {
        const percentage = (budget.spent / budget.amount) * 100;
        const isOverBudget = percentage > 100;
       
        return (
          <div key={budget.id} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{budget.category}</span>
              <span className="text-sm font-medium">
                ${budget.spent.toFixed(2)} / ${budget.amount.toFixed(2)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full ${isOverBudget ? 'bg-red-500' : 'bg-blue-600'}`}
                style={{ width: `${Math.min(percentage, 100)}%` }}
              ></div>
            </div>
          </div>
        );
      })}
     
      <div className="text-center mt-4">
        <a href="/budgets" className="text-blue-500 hover:text-blue-700">
          View all budgets
        </a>
      </div>
    </div>
  );
};

export default BudgetOverview;