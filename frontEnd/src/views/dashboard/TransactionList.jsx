import React from 'react';
import TransactionCard from '../components/TransactionCard';

const TransactionList = ({ transactions }) => {
  if (transactions.length === 0) {
    return <p className="text-gray-500">No recent transactions found.</p>;
  }
  
  return (
    <div className="space-y-4">
      {transactions.map(transaction => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
      
      <div className="text-center mt-4">
        <a href="/transactions" className="text-blue-500 hover:text-blue-700">
          View all transactions
        </a>
      </div>
    </div>
  );
};

export default TransactionList;