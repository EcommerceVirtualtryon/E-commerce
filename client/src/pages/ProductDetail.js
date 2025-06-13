import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="product-detail">
      <h2>Product Detail - ID: {id}</h2>
      {/* In a real app, fetch and display product info by ID */}
    </div>
  );
};

export default ProductDetail;

