import React, { useState } from 'react';
import './B2BLogin.css'; // Optional: Add CSS for styling
import { Link, useNavigate } from 'react-router-dom';
 
import { getUser, logout, requestPasswordReset } from '../../utils/auth';


/*const B2BLogin = () => {
  const [businessId, setBusinessId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/b2b/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        localStorage.setItem('token', data.token);
        // Redirect or navigate here if needed
      } else {
        setError(data.msg || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Business Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Business ID"
          value={businessId}
          onChange={(e) => setBusinessId(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link><br />
        <Link to="/register" className="register-link">
          Don't have an account? Register
        </Link><br />
        <button type="submit">Login</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default B2BLogin;*/


/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './B2BLogin.css';*/
 

/*const B2BLogin = () => {
  const [businessId, setBusinessId] = useState('');
  const [email, setEmail] = useState('');         // <-- add email state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/b2b/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId, email, password }),  // include email here
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        // Assuming your backend sends a token, if not adjust accordingly
        localStorage.setItem('token', data.token || 'dummy-token');
        navigate('/dashboard'); // redirect after success
      } else {
        setError(data.error || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Business Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Business ID"
          value={businessId}
          onChange={(e) => setBusinessId(e.target.value)}
          required
        /><br />
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
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link><br />
        <Link to="/register" className="register-link">
          Don't have an account? Register
        </Link><br />
        <button type="submit">Login</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default B2BLogin;
*/


 
 
/*const B2BLogin = () => {
  const [businessId, setBusinessId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Trim inputs to avoid trailing spaces
    const trimmedBusinessId = businessId.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password;

    console.log('📤 Sending login request with:', {
      businessId: trimmedBusinessId,
      email: trimmedEmail,
      password: trimmedPassword,
    });

    try {
      const response = await fetch('http://localhost:5000/api/b2b/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessId: trimmedBusinessId,
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        // Save token if backend sends one; else use dummy token for now
        localStorage.setItem('token', data.token || 'dummy-token');
        navigate('/dashboard'); // Redirect after successful login
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Business Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Business ID"
          value={businessId}
          onChange={(e) => setBusinessId(e.target.value)}
          required
        /><br />
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
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link><br />
        <Link to="/register" className="register-link">
          Don't have an account? Register
        </Link><br />
        <button type="submit">Login</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default B2BLogin;*/

 
const B2BLogin = () => {
  const [businessId, setBusinessId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const trimmedBusinessId = businessId.trim();
    const trimmedEmail = email.trim();

    try {
  const response = await fetch('http://localhost:5000/api/b2b/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      businessId: trimmedBusinessId,
      email: trimmedEmail,
      password,
    }),
  });

  const data = await response.json();

  console.log("Response status:", response.status);  // Debug
  console.log("Raw response data:", data);           // Debug

  if (response.ok) {
    console.log("Login successful, saving data...");

    localStorage.setItem('token', data.token || 'dummy-token');
    localStorage.setItem('user', JSON.stringify({
      role: 'business',
      email: data.email || trimmedEmail,
      fullName: data.fullName || data.name || trimmedEmail,
      businessId: data.businessId || trimmedBusinessId,
    }));
    navigate('/dashboard/business');
  } else {
    setError(data.message || 'Login failed. Please try again.');
  }
} catch (err) {
  console.error("Fetch error:", err);
  setError('Server error. Please try again later.');
}

  };

  return (
    <div className="login-page">
      <h2>Business Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Business ID"
          value={businessId}
          onChange={(e) => setBusinessId(e.target.value)}
          required
        /><br />
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
        <Link to="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </Link><br />
        <Link to="/register" className="register-link">
          Don't have an account? Register
        </Link><br />
        <button type="submit">Login</button>
        {success && <p className="success">{success}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default B2BLogin;

