// src/pages/Dashboard/CustomerLayout.js
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { getUser, logout } from '../../utils/auth';
import './Dashboard.css';

const CustomerLayout = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Customer Panel</h2>
        <Link to="/dashboard/customer">Dashboard</Link>
        <Link to="/dashboard/customer/orders">My Orders</Link>
        <Link to="/dashboard/customer/account">Account</Link>
        <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1>Welcome, {user?.fullName || 'Customer'}!</h1>
          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </div>

        <Outlet /> {/* Here sub-pages like Dashboard, Orders, Account will render */}
      </main>
    </div>
  );
};

export default CustomerLayout;
