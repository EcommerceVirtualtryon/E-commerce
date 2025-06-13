import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UnifiedRegister.css';
/*import React, { useState } from 'react';
import './UnifiedRegister.css';

const UnifiedRegister = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessId: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (userType === 'customer') {
      console.log('Customer Registration Data:', formData);
    } else {
      console.log('Business Registration Data:', formData);
    }

    // TODO: Send formData to backend API
  };

  return (
    <div className="unified-register">
      <h2>Register</h2>

      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="business">Business</option>
      </select>

      <form onSubmit={handleSubmit}>
        {userType === 'business' ? (
          <>
            <input
              type="text"
              name="businessId"
              placeholder="Business ID"
              value={formData.businessId}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </>
        ) : (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UnifiedRegister;*/

{/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UnifiedRegister.css';

const UnifiedRegister = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessId: '',
    kycFile: null
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setMessage('❌ Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    // Print to console (Simulating backend submission)
    console.log(`${userType === 'customer' ? 'Customer' : 'Business'} Registration Data:`, formData);

    // Set success message
    setMessage('✅ Registration successful! Proceed to login.');

    // TODO: Send formData to backend API
  };

  return (
    <div className="unified-register">
      <h2>Register</h2>

      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="business">Business</option>
      </select>

      <form onSubmit={handleSubmit}>
        {userType === 'business' && (
          <>
            <input
              type="text"
              name="businessId"
              placeholder="Business ID"
              value={formData.businessId}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>KYC Document</label>
            <input
              type="file"
              name="kycFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              required
            />
          </>
        )}

        {userType === 'customer' && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <p style={{ marginTop: '10px', color: message.startsWith('✅') ? 'green' : 'red' }}>{message}</p>}

      {/*<p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already registered?{' '}
        <Link to="/login/customer">Login here</Link>
      </p>*/}
     {/* <p style={{ textAlign: 'center', marginTop: '15px' }}>
  Already registered? 
  <Link to="/login/customer" style={{ marginLeft: '5px' }}>Customer Login</Link> | 
  <Link to="/login/b2b" style={{ marginLeft: '5px' }}>Business Login</Link>
</p>

    </div>
  );
};

export default UnifiedRegister;*/}



 

const UnifiedRegister = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessId: '',
    kycFile: null
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setMessage('❌ Password must be at least 8 characters and include uppercase, lowercase, number, and special character.');
      return;
    }

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('password', formData.password);
      data.append('userType', userType);

      if (userType === 'business') {
        data.append('businessId', formData.businessId);
        data.append('kycFile', formData.kycFile);
      }

      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ Registration successful! Proceed to login.');
      } else {
        setMessage(`❌ ${result.message || 'Registration failed.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('❌ Server error. Try again later.');
    }
  };

  return (
    <div className="unified-register">
      <h2>Register</h2>

      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="business">Business</option>
      </select>

      <form onSubmit={handleSubmit}>
        {userType === 'business' && (
          <>
            <input
              type="text"
              name="businessId"
              placeholder="Business ID"
              value={formData.businessId}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>KYC Document</label>
            <input
              type="file"
              name="kycFile"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleChange}
              required
            />
          </>
        )}

        {userType === 'customer' && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && (
        <p style={{ marginTop: '10px', color: message.startsWith('✅') ? 'green' : 'red' }}>
          {message}
        </p>
      )}

      <p style={{ textAlign: 'center', marginTop: '15px' }}>
        Already registered?
        <Link to="/login/customer" style={{ marginLeft: '5px' }}>Customer Login</Link> |
        <Link to="/login/b2b" style={{ marginLeft: '5px' }}>Business Login</Link>
      </p>
    </div>
  );
};

export default UnifiedRegister;




