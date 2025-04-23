import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'home' },
    { name: 'Transactions', path: '/transactions', icon: 'list' },
    { name: 'Budgets', path: '/budgets', icon: 'pie-chart' },
    { name: 'Accounts', path: '/accounts', icon: 'credit-card' },
    { name: 'Reports', path: '/reports', icon: 'bar-chart' },
    { name: 'Settings', path: '/settings', icon: 'settings' }
  ];
  
  return (
    <aside className="bg-gray-800 text-white w-64 flex-shrink-0 hidden md:block">
      <div className="p-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                  location.pathname === item.path ? 'bg-gray-700' : ''
                }`}
              >
                <span className="material-icons mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
