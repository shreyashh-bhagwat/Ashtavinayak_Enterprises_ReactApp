import './Hero.css';

const heroContent = {
  title: "Ashtavinayak Enterprises",
  subtitle: "Eco-friendly Paper & Cardboard Solutions for a Sustainable Future",
  description: "Reliable supplier of premium-grade paper, cardboard, and packaging materials across India.",
  background: "/src/assets/bg.png",
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
            backgroundImage: `linear-gradient(135deg, rgba(0, 20, 10, 0.6) 0%, rgba(0, 40, 20, 0.5) 50%, rgba(0, 60, 30, 0.4) 100%), url(${heroContent.background})`
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
