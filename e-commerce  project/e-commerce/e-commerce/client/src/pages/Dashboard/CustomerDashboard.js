// src/pages/Dashboard/CustomerDashboard.js
import React from 'react';
/*import { getUser, logout } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome, {user?.fullName || 'Customer'}!</h2>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CustomerDashboard;*/
 
/*import { getUser, logout } from '../../utils/auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const CustomerDashboard = () => {
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
        <a href="/dashboard">Dashboard</a>
        <a href="/orders">My Orders</a>
        <a href="/account">Account</a>
        <a onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</a>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1>Welcome, {user?.fullName || 'Customer'}!</h1>
          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Orders Placed</h3>
            <p>15</p>
          </div>
          <div className="card">
            <h3>Pending Delivery</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Wishlisted Items</h3>
            <p>5</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;*/
import { getUser, logout } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Include Link
import './Dashboard.css';

const CustomerDashboard = () => {
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
        <Link to="/dashboard/orders">My Orders</Link>
        <Link to="/dashboard/account">Account</Link>
        <span onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1>Welcome, {user?.fullName || 'Customer'}!</h1>
          <div className="user-info">
            <span>{user?.email}</span>
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h3>Orders Placed</h3>
            <p>15</p>
          </div>
          <div className="card">
            <h3>Pending Delivery</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Wishlisted Items</h3>
            <p>5</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;


