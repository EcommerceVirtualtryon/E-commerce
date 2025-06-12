import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

import './ResetPassword.css'; // ⬅️ Add this line at the top

 
const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');

  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setMessage('Invalid or missing token. Please check your reset link.');
      // Optional: redirect user after delay
      // setTimeout(() => navigate('/forgot-password'), 3000);
    }
  }, [token, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) return; // prevent submit without token
    try {
      const res = await axios.post('http://localhost:5000/api/reset-password', {
        token,
        newPassword,
      });
      setMessage(res.data.message);
      setTimeout(() => {
       navigate('/login/customer');
 // redirect to login after success
      }, 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="reset-container">
  <h2>Reset Your Password</h2>
  {message && <p>{message}</p>}
  {!message.includes('Invalid') && (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  )}
</div>

  );
};

export default ResetPassword;
