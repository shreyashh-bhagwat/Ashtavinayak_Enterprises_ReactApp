import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ashtavinayak Enterprises</h3>
            <p>
              Sustainable Paper & Cardboard Solutions – Trusted by businesses across India since 2013.
            </p>
            <div className="social-links">
              
              <a href="#" aria-label="WhatsApp" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('about')} className="footer-link">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="footer-link">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="footer-link">
                  Contact
                </button>
              </li>
              
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Food Grade Paper</a></li>
              <li><a href="#" className="footer-link">Carry Bag Paper</a></li>
              <li><a href="#" className="footer-link">MG Paper Bags</a></li>
              <li><a href="#" className="footer-link">Duplex Paper</a></li>
              <li><a href="#" className="footer-link">Recycled Paper</a></li>
              <li><a href="#" className="footer-link">Custom Solutions</a></li>
            </ul>
          </div>


          <div className="footer-section">
            <h4>Reach Us</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Serve No. 205/3/1, Behind Irrigation Banglow<br />Janki Vishwa, Kopargaon, Maharashtra – 423601</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>
                  <a
                    href="https://wa.me/918698155151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link whatsapp-link"
                  >
                    +91 8698155151
                  </a> |
                  <a
                    href="https://wa.me/919423167809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link whatsapp-link"
                  >
                    +91 9423167809
                  </a>
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>ashtavinayak29@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Ashtavinayak Enterprises. All rights reserved. | Designed & Developed by Shreyash Bhagwat</p>
            <div className="footer-bottom-links">
             
              
              <a
              href="https://wa.me/918698155151"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link whatsapp-link"
            >
              Support
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
