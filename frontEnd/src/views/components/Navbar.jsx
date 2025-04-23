import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContent';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">FinanceTracker</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center">
                <span className="mr-4">{user.name}</span>
                <button
                  onClick={logout}
                  className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link 
                  to="/login" 
                  className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm mr-2"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-3 py-1 rounded text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
