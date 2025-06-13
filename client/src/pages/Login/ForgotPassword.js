import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomerLogin.css'; // Reuse styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  /*const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend password reset API
    alert(`Password reset link sent to ${email}`);
    navigate('/login/customer'); // Redirect after submission
  };*/
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message || `Password reset link sent to ${email}`);
      navigate('/login/customer');
    } else {
      alert(data.error || 'Failed to send reset link. Please try again.');
    }
  } catch (err) {
    alert('Server error. Please try again later.');
  }
};


  return (
    <div className="customer-login-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
