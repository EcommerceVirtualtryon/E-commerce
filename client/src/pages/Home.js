/*import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header';

const Home = () => {
  return (
    
    <div className="home">
       
       
      {/* You can map featured products here if needed */
   /* </div>
  );
};

export default Home;*/


import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import Header from '../components/Header';

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

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroBanner />

      {/* Upgrade Your Style Section */}
      <section className="upgrade-style">
        <h2>Upgrade Your Style</h2>
        <p>Try on clothes virtually before you buy!</p>
        <Link to="/tryon">
          <button className="try-now-btn">Try It Now</button>
        </Link>
      </section>

      {/* Image Slider Section */}
      <section className="image-slider">
        <div className="slider-track">
          {[style, style1, style2, men, men1, mens, men_a, boy, boy1, boy2, see].map((imgSrc, i) => (
            <img key={i} src={imgSrc} alt={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
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
            <p>Casual Wear</p>
            <span>$49.99</span>
          </div>
          <div className="product-card">
            <img src={photo1} alt="Product 4" />
            <p>Elegant Dress</p>
            <span>$129.99</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


