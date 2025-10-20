import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import Contact from '../components/home/Contact';
import Footer from '../components/Footer';
import '../styles/pages/home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
