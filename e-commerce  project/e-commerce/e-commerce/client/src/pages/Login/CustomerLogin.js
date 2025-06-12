import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomerLogin.css';

import { getUser, logout, requestPasswordReset } from '../../utils/auth';

/*const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer login with', email, password);
  };

  return (
    <div className="customer-login-page">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link><br />
        <Link to="/register" className="register-link">Don't have an account? Register</Link><br /> {/* Use Link, not <a> or <link> */
       /* <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;*/

/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomerLogin.css';*/

/*const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/customer/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);  // store JWT token
        navigate('/dashboard'); // or any protected page
      } else {
        setError(data.msg || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="customer-login-page">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br />
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link><br />
        <Link to="/register" className="register-link">Don't have an account? Register</Link><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default CustomerLogin;*/

 
const CustomerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/customer/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        // Save token and user info in localStorage
       localStorage.setItem('user', JSON.stringify({
  role: 'customer',
  email: data.user.email,
  fullName: data.user.name || data.user.email,
}));

// ✅ Save customer ID for future API calls
localStorage.setItem('customerId', data.user._id);




        navigate('/dashboard/customer');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div className="customer-login-page">
      <h2>Customer Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br />
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link><br />
        <Link to="/register" className="register-link">Don't have an account? Register</Link><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
};

export default CustomerLogin;


