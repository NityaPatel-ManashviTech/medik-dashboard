
import '../styles/ProductSection.css';
import productImg from "../assets/img1.jpg";
import productImg1 from "../assets/img2.jpg";
import productImg2 from "../assets/img3.jpg";


interface ProductProps {
  name: string;
  currentPrice: number;
  originalPrice: number;
  image: string;
}

const ProductItem: React.FC<ProductProps> = ({ name, currentPrice, originalPrice, image }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <div className="product-name">{name}</div>
      
      </div>
      <div className="product-pricing">
          <span className="current-price">${currentPrice.toFixed(2)}</span>
          <span className="original-price">${originalPrice.toFixed(2)}</span>
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
        image: productImg,
      },
      {
        name: 'Mario 118ml',
        currentPrice: 25.70,
        originalPrice: 32.7,
        image: productImg1,
      },
      {
        name: 'Allergy Relief 25mg',
        currentPrice: 25.70,
        originalPrice: 32.7,
        image: productImg2,
      },
    ];  return (
      <div className="">
       <div className='section-main'>
       <h3 className="section-title">Popular Product</h3> 
        <div className="section-header">
            <a href="#" className="view-all">
              View all →
            </a>
            </div>
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