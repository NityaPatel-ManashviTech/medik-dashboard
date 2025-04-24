import React from 'react';
import '../styles/ProductSection.css';

interface ProductProps {
  name: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
}

const ProductItem: React.FC<ProductProps> = ({ name, currentPrice, originalPrice, image }) => {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className="product-pricing">
          <div className="current-price">${currentPrice.toFixed(2)}</div>
          <div className="original-price">${originalPrice.toFixed(2)}</div>
        </div>
      </div>
      <div className="product-arrow">→</div>
    </div>
  );
};
const ProductSection: React.FC = () => {
    const products = [
      {
        name: 'Necessaire 75ML',
        currentPrice: 27.60,
        originalPrice: 34.7,
        image: 'https://via.placeholder.com/60',
      },
      {
        name: 'Mario 118ml',
        currentPrice: 25.70,
        originalPrice: 32.7,
        image: 'https://via.placeholder.com/60',
      },
      {
        name: 'Allergy Relief 25mg',
        currentPrice: 25.70,
        originalPrice: 32.7,
        image: 'https://via.placeholder.com/60',
      },
    ];   return (
        <div className="product-section">
          <div className="section-header">
            <h2>Popular Product</h2>
            <a href="#" className="view-all">
              View all →
            </a>
          </div>
          <div className="product-list">
            {products.map((product, index) => (
              <ProductItem key={index} {...product} />
            ))}
          </div>
        </div>
      );
    };
    
    export default ProductSection;