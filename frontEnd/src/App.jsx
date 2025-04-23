import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './views/Layout';
import Login from './views/auth/Longin';
import Signup from './views/auth/Signup';
import Dashboard from './views/dashboard/Dashboard';
import { AuthProvider } from './context/AuthContent';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;