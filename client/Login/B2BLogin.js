import React from 'react';

const B2BLogin = () => {
  return (
    <div className="login-page">
      <h2>B2B Login</h2>
      <form>
        <input type="text" placeholder="Business ID" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default B2BLogin;
