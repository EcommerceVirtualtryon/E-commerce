// src/pages/Dashboard/BusinessDashboard.js
import React from 'react';
/*import { getUser, logout } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const BusinessDashboard = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome, {user?.fullName || 'Business User'}!</h2>
      <p>Email: {user?.email}</p>
      <p>Business ID: {user?.businessId}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default BusinessDashboard;*/

 
import { getUser, logout } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


const BusinessDashboard = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Business Panel</h2>
        <a href="/dashboard">Dashboard</a>
        <a href="/products">Products</a>
        <a href="/orders">Orders</a>
        <a href="/profile">Profile</a>
        <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1>Welcome, {user?.fullName || 'Business User'}!</h1>
          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Business ID</h3>
            <p>{user?.businessId || 'N/A'}</p>
          </div>
          <div className="card">
            <h3>Total Products</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Active Orders</h3>
            <p>34</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboard;

