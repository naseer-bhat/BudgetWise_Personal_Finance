import React, { useEffect, useState, useRef } from 'react';
import { getDashboardData } from '../../controller/DashboardController';
import ExpenseChart from './ExpenseChart';
import IncomeChart from './IncomeChart';
import TransactionList from './TransactionList';
import BudgetOverview from './BudgetOverview';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  // Create refs to handle chart cleanup
  const expenseChartRef = useRef(null);
  const incomeChartRef = useRef(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardData = await getDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
   
    fetchData();
    
    // Clean up chart instances on component unmount
    return () => {
      if (expenseChartRef.current && expenseChartRef.current.chartInstance) {
        expenseChartRef.current.chartInstance.destroy();
      }
      if (incomeChartRef.current && incomeChartRef.current.chartInstance) {
        incomeChartRef.current.chartInstance.destroy();
      }
    };
  }, []);
 
  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }
 
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Overview</h2>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500">Income</p>
              <p className="text-lg font-bold text-green-500">${data.monthlyIncome.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Expenses</p>
              <p className="text-lg font-bold text-red-500">${data.monthlyExpenses.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Savings</p>
              <p className="text-lg font-bold text-blue-500">${(data.monthlyIncome - data.monthlyExpenses).toFixed(2)}</p>
            </div>
          </div>
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Account Balances</h2>
          {data.accounts.map(account => (
            <div key={account.id} className="flex justify-between mb-2">
              <span>{account.name}</span>
              <span className="font-semibold">${account.balance.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Expense Breakdown</h2>
          <ExpenseChart data={data.expensesByCategory} ref={expenseChartRef} />
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Income Sources</h2>
          <IncomeChart data={data.incomeBySource} ref={incomeChartRef} />
        </div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <TransactionList transactions={data.recentTransactions} />
        </div>
       
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Budget Overview</h2>
          <BudgetOverview budgets={data.budgets} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;