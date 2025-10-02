import './Hero.css';
import bgImage from '../assets/bg.png';

const heroContent = {
  title: "Ashtavinayak Enterprises",
  subtitle: "Premium Paper & Packaging Suppliers in India | Eco-Friendly Solutions Since 2013",
  description: "Leading suppliers of kraft paper, duplex sheets, food-grade packaging, and sustainable cardboard materials. Trusted by 500+ businesses across India with 98% on-time delivery.",
  background: bgImage,
  cta1: "Explore Products",
  cta2: "Get a Quote"
};

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div
          className="hero-slide active"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(17, 18, 18, 0.6) 0%, rgba(21, 23, 22, 0.5) 50%, rgba(17, 18, 18, 0.4) 100%), url(${heroContent.background})`
          }}
        >
          <div className="slide-content container">
            <h1 className="slide-title">{heroContent.title}</h1>
            <p className="slide-subtitle">{heroContent.subtitle}</p>
            <p className="slide-description">{heroContent.description}</p>
            <div className="slide-cta-buttons">
              <button
                className="btn btn-primary slide-cta"
                onClick={scrollToProducts}
              >
                {heroContent.cta1}
              </button>
              <button
                className="btn btn-secondary slide-cta"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {heroContent.cta2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
