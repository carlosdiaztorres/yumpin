import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import heroBg from './assets/hero-jump.jpg';
import brandingBg from './assets/branding-jump.jpg';
import socialBg from './assets/social-jump.jpg';
import aiBg from './assets/ai-jump.jpg';
import servicesBg from './assets/services-jump.jpg';
import aboutBg from './assets/about-jump.jpg';
import portfolioBg from './assets/portfolio-jump.jpg';
import contactBg from './assets/contact-jump.jpg';

const LoadingScreen = () => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'var(--color-dark-blue)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    color: 'white'
  }}>
    <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Yumppin.com</div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToPreload = [
      heroBg, brandingBg, socialBg, aiBg,
      servicesBg, aboutBg, portfolioBg, contactBg
    ];

    const preloadImages = async () => {
      const promises = imagesToPreload.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.error("Error preloading images", error);
      } finally {
        // Ensure loading screen stays for at least a moment or until loaded
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
