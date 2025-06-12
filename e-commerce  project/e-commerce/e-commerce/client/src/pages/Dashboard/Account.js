import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Account = () => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const customerId = user?.id; // Save user ID in localStorage during login

    if (!customerId) return;

    axios.get(`http://localhost:5000/api/customer/${customerId}`)
      .then(res => {
        setAccountInfo(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching account info:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading account info...</p>;

  return (
    <div>
      <h2>Account Info</h2>
      <p><strong>Name:</strong> {accountInfo.name}</p>
      <p><strong>Email:</strong> {accountInfo.email}</p>
    </div>
  );
};

export default Account;
