import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.source),
    datasets: [
      {
        data: data.map(item => item.amount),
        backgroundColor: [
          '#4BC0C0',
          '#36A2EB',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#4BC0C0',
          '#36A2EB',
          '#9966FF',
          '#FF9F40',
          '#FF6384',
          '#FFCE56'
        ]
      }
    ]
  };
 
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
 
  return (
    <div className="h-64">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default IncomeChart;