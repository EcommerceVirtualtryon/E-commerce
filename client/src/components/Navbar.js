/*import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import photo1 from '../assets/photo.webp';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo1.jpg';
import style from '../assets/style.jpg';
import style1 from '../assets/style1.jpg';
import style2 from '../assets/style2.jpg';
import men from '../assets/men.jpg';
import men1 from '../assets/men1.jpg';
import mens from '../assets/mens.jpg';
import men_a from '../assets/style2.jpg';

import boy from '../assets/boy.jpg';
import boy1 from '../assets/boy1.jpg';
import boy2 from '../assets/boy2.jpg';
import see from '../assets/see.jpg';

const Navbar = () => {
  return (
    <>
      {/* Navbar */
      /*nav className="navbar">
        <Link to="/" className="logo">E-Commerce</Link>
        <ul className="nav-links">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/tryon">Try-On</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {/* Dropdown Login Menu */
          /*<li className="dropdown">
            <span className="dropdown-title">Login ⮟</span>
            <ul className="dropdown-menu">
              <li><Link to="/login/customer">Customer Login</Link></li>
              <li><Link to="/login/b2b">Business Login</Link></li>
            </ul>
          </li>

          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>

      {/* ✨ Upgrade Your Style Section */
      /*<section className="upgrade-style">
        <h2>Upgrade Your Style</h2>
        <p>Try on clothes virtually before you buy!</p>
        <Link to="/tryon">
          <button className="try-now-btn">Try It Now</button>
        </Link>
      </section>

      {/* Image Slider Section */
     /* <section className="image-slider">
        <div className="slider-track">
          <img src={style} alt="Slide 1" />
          <img src={style1} alt="Slide 2" />
          <img src={style2} alt="Slide 3" />
          <img src={men} alt="Slide 4" />
          <img src={men1} alt="Slide 5" />
          {/*<img src={mens} alt="Slide 6" />*/
          /*<img src={mens} alt="Slide 7" />
          <img src={men_a} alt="Slide 8" />
          
          <img src={boy} alt="Slide 9" />
          <img src={boy1} alt="Slide 10" />
          <img src={boy2} alt="Slide 11" />
          <img src={see} alt="Slide 12" />
        </div>
      </section>

      {/* Featured Products */
      /*<section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={photo1} alt="Product 1" />
            <p>Stylish T-Shirt</p>
            <span>$19.99</span>
          </div>
          <div className="product-card">
            <img src={photo2} alt="Product 2" />
            <p>Denim Jacket</p>
            <span>$39.99</span>
          </div>
          <div className="product-card">
            <img src={photo3} alt="Product 3" />
            <p>Casual Wears</p>
            <span>$49.99</span>
          </div>
          <div className="product-card">
            <img src={photo1} alt="Product 4" />
            <p>Elegant Dresses</p>
            <span>$129.99</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;*/



/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { getUser, logout } from '../utils/auth';

import photo1 from '../assets/photo.webp';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/photo1.jpg';
import style from '../assets/style.jpg';
import style1 from '../assets/style1.jpg';
import style2 from '../assets/style2.jpg';
import men from '../assets/men.jpg';
import men1 from '../assets/men1.jpg';
import mens from '../assets/mens.jpg';
import men_a from '../assets/style2.jpg';

import boy from '../assets/boy.jpg';
import boy1 from '../assets/boy1.jpg';
import boy2 from '../assets/boy2.jpg';
import see from '../assets/see.jpg';

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Toggle profile dropdown
  const toggleProfileDropdown = () => {
    setProfileOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */
      /*<nav className="navbar">
        <Link to="/" className="logo">E-Commerce</Link>
        <ul className="nav-links">
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/tryon">Try-On</Link></li>
          <li><Link to="/cart">Cart</Link></li>

          {!user && (
            <>
              <li className="dropdown">
                <span className="dropdown-title">Login ⮟</span>
                <ul className="dropdown-menu">
                  <li><Link to="/login/customer">Customer Login</Link></li>
                  <li><Link to="/login/b2b">Business Login</Link></li>
                </ul>
              </li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}

          {user && (
            <li className="dropdown profile-dropdown" onClick={toggleProfileDropdown} style={{ cursor: 'pointer', position: 'relative' }}>
              <span className="dropdown-title">
                {user.fullName ? user.fullName : user.email} ⮟
              </span>
              {profileOpen && (
                <ul className="dropdown-menu profile-menu" style={{ position: 'absolute', right: 0, top: '100%', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '4px', zIndex: 10 }}>
                  <li><Link to={user.role === 'business' ? '/dashboard/business' : '/dashboard/customer'} onClick={() => setProfileOpen(false)}>Profile</Link></li>
                  <li><button onClick={handleLogout} style={{ background: 'none', border: 'none', padding: '8px 16px', width: '100%', textAlign: 'left', cursor: 'pointer' }}>Logout</button></li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </nav>

      {/* ✨ Upgrade Your Style Section */
      /*<section className="upgrade-style">
        <h2>Upgrade Your Style</h2>
        <p>Try on clothes virtually before you buy!</p>
        <Link to="/tryon">
          <button className="try-now-btn">Try It Now</button>
        </Link>
      </section>

      {/* Image Slider Section */
      /*<section className="image-slider">
        <div className="slider-track">
          {[style, style1, style2, men, men1, mens, men_a, boy, boy1, boy2, see].map((imgSrc, i) => (
            <img key={i} src={imgSrc} alt={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Featured Products */
      /*<section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src={photo1} alt="Product 1" />
            <p>Stylish T-Shirt</p>
            <span>$19.99</span>
          </div>
          <div className="product-card">
            <img src={photo2} alt="Product 2" />
            <p>Denim Jacket</p>
            <span>$39.99</span>
          </div>
          <div className="product-card">
            <img src={photo3} alt="Product 3" />
            <p>Casual Wears</p>
            <span>$49.99</span>
          </div>
          <div className="product-card">
            <img src={photo1} alt="Product 4" />
            <p>Elegant Dresses</p>
            <span>$129.99</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;*/

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const user = getUser();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">E-Shop</Link>
      <ul className="nav-links">
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/tryon">Try-On</Link></li>
        <li><Link to="/cart">Cart</Link></li>

        {!user ? (
          <>
            <li className="dropdown">
              <span className="dropdown-title">Login ⮟</span>
              <ul className="dropdown-menu">
                <li><Link to="/login/customer">Customer Login</Link></li>
                <li><Link to="/login/b2b">Business Login</Link></li>
              </ul>
            </li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li
            className="dropdown profile-dropdown"
            onClick={toggleProfileDropdown}
            style={{ cursor: 'pointer' }}
          >
            <span className="dropdown-title">
              {user.fullName || user.email} ⮟
            </span>
            {profileOpen && (
              <ul className="dropdown-menu" style={{ right: 0, left: 'auto' }}>
                <li>
                  <Link to={user.role === 'business' ? '/dashboard/business' : '/dashboard/customer'}>Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout} style={{
                    background: 'none',
                    border: 'none',
                    padding: '8px 16px',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}>
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;



