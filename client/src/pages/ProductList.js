import React from 'react';
import ProductCard from '../components/ProductCard';
import men1  from  '../assets/men1.jpg';
import mens from '../assets/mens.jpg';

const sampleProducts = [
  { id: 1, name: 'Casual Shirt', price: 29.99, image: men1 },
  { id: 2, name: 'Denim Jacket', price: 59.99, image: mens },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>All Products</h2>
      <div className="product-grid">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
