import { products } from '../data/products';
import './Products.css';

function ProductCard({ product, onEnquire }) {
  return (
    <div className="product-card card">
      <div className="product-image">
        <img 
          src={product.image} 
          alt={`${product.name} - Premium quality ${product.category.toLowerCase()} supplied by Ashtavinayak Enterprises India`}
          title={`${product.name} - ${product.short}`}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/300x200/2F7A3E/ffffff?text=${encodeURIComponent(product.name)}`;
          }}
        />
        <div className="product-overlay">
          <button 
            className="btn btn-primary"
            onClick={() => onEnquire(product.name)}
          >
            Enquire Now
          </button>
        </div>
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-short">{product.short}</p>
        <div className="product-specs">
          <ul>
            {product.specs.slice(0, 3).map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
        <button 
          className="btn btn-outline enquire-btn"
          onClick={() => onEnquire(product.name)}
        >
          Get Details
        </button>
      </div>
    </div>
  );
}

export default function Products() {
  const handleEnquire = (productName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Store selected product for contact form
      sessionStorage.setItem('selectedProduct', productName);
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Optional: Update contact form with product name
      setTimeout(() => {
        const productField = document.querySelector('input[name="interestedIn"]');
        if (productField) {
          productField.value = productName;
        }
      }, 500);
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>Premium Paper & Packaging Products - Ashtavinayak Enterprises</h2>
          <p>High-Quality Eco-Friendly Paper, Kraft Paper, Duplex Sheets, Food-Grade Packaging & Sustainable Cardboard Solutions</p>
        </div>

        <div className="products-grid grid grid-3">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        <div className="products-cta text-center mt-8">
          <p>Custom Sizing & Bulk Orders Available</p>
          <button 
            className="btn btn-primary"
            onClick={() => handleEnquire('Custom Requirements')}
          >
            Contact Us for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
