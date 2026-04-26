import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
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
