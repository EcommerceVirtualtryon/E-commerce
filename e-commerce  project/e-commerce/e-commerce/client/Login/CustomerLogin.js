import React from 'react';

const CustomerLogin = () => {
  return (
    <div className="login-page">
      <h2>Customer Login</h2>
      <form>
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CustomerLogin;

