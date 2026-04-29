import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './src/pages/Home';
import Reviews from './src/pages/Reviews';
import AboutPage from './src/pages/AboutPage';
import FAQPage from './src/pages/FAQPage';
import ServicePage from './src/pages/ServicePage';
import LocationPage from './src/pages/LocationPage';

import BlogArchivePage from './src/pages/BlogArchivePage';
import BlogPostPage from './src/pages/BlogPostPage';

const ScrollToHash: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const yOffset = -100; // Offset for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <div className="min-h-screen bg-white font-sans text-brand-dark overflow-x-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/servicios/:slug" element={<ServicePage />} />
              <Route path="/sedes/:city" element={<LocationPage />} />
              <Route path="/reseñas" element={<Reviews />} />
              <Route path="/blog" element={<BlogArchivePage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

