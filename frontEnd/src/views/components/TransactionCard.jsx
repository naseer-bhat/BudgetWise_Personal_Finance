import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatters';

const TransactionCard = ({ transaction }) => {
  const isExpense = transaction.type === 'expense';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{transaction.description}</h3>
          <p className="text-sm text-gray-500">{transaction.category}</p>
          <p className="text-xs text-gray-400">{formatDate(transaction.date)}</p>
        </div>
        <div className={`font-bold ${isExpense ? 'text-red-500' : 'text-green-500'}`}>
          {isExpense ? '-' : '+'}{formatCurrency(transaction.amount)}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;