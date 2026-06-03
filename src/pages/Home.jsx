import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
