// src/utils/auth.js

/*export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem('user');
};*/

// Save user data to localStorage
// utils/auth.js
// src/utils/auth.js

/*export const getUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};*/
// src/utils/auth.js

// Function for forgot password request
export async function requestPasswordReset(email) {
  if (!email) throw new Error('Email is required');

  const response = await fetch('http://localhost:5000/api/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to request password reset');
  }

  return response.json();
}

// Function to get currently logged-in user (example)
export function getUser() {
  const userJson = localStorage.getItem('user');
  if (!userJson) return null;
  try {
    return JSON.parse(userJson);
  } catch {
    return null;
  }
}

// Function to logout user
export function logout() {
  localStorage.removeItem('user');
  window.location.href = '/login/customer';  // redirect to login page
}


