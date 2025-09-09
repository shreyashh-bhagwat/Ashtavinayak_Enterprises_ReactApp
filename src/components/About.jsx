import './About.css';

const stats = [
  { number: '11+', label: 'Years in Business' },
  { number: '80+', label: 'Cities Served' },
  { number: '98%', label: 'On-time Dispatch' },
  { number: '100%', label: 'Eco-Friendly' }
];

const whyChooseUs = [
  {
    icon: '✅',
    title: 'Eco-Friendly Products',
    description: '100% sustainable & recycled paper options for environmentally conscious businesses'
  },
  {
    icon: '💰',
    title: 'Competitive Rates',
    description: 'Best pricing with flexible supply options to meet your budget requirements'
  },
  {
    icon: '🚚',
    title: 'Pan-India Supply',
    description: 'Delivered to 80+ cities with strong logistics network and reliable delivery'
  },
  {
    icon: '🤝',
    title: 'Trusted Clients',
    description: 'Long-term partnerships with Padmaja Packaging Kolhapur, Sonai Dairy Sonai, Excel Packaging'
  },
  {
    icon: '🎯',
    title: 'Zero Rejection Rate',
    description: '98% dispatch success with reliable quality assurance and consistent performance'
  }
];

const milestones = [
  { year: '2013', event: 'Company established with focus on paper & packaging solutions' },
  { year: '2017', event: 'Expanded operations with wider product portfolio' },
  { year: '2021', event: 'National-level presence with pan-India client network' },
  { year: '2025', event: 'Maintaining consistent quality supplies with 98% on-time dispatch' }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header text-center">
          
        </div>

        <div className="about-content">
          <div className="about-story">
            <h3>Ashtavinayak Enterprises – Your Trusted  Paper Suppliers</h3>
            <p>
              Founded in 2013 by Mr. Sumit Unsale (Business Development Executive), Ashtavinayak Enterprises has grown into one of India's trusted suppliers of eco-friendly, high-quality paper and cardboard solutions.
            </p>
            <p>
              With 11+ years of experience, we are committed to quality, trust, and sustainability. Our journey began with a focus on paper and packaging solutions, and through consistent growth and dedication, we have expanded our operations to serve a wider product portfolio and established a national-level presence with a strong pan-India client network.
            </p>
          </div>

          <div className="stats-section">
            <div className="stats-grid grid grid-4">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card card text-center">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-choose-section">
            <h3 className="text-center mb-8">Why Choose Cardboard Traders</h3>
            <div className="features-grid grid grid-2">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="timeline-section">
            <h3 className="text-center mb-8">Our Journey</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{milestone.year}</div>
                    <div className="timeline-event">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mission-section text-center">
            <h3>Our Mission</h3>
            <p className="mission-text">
              To provide sustainable, high-quality, and cost-effective packaging solutions that protect our customers' products while supporting a greener future for India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
