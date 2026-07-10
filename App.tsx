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
import NotFound from './src/pages/NotFound';

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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "PestControlService"],
    "name": "Big Cat - Control de Plagas",
    "alternateName": "Bigcat",
    "url": "https://bigcat.mx/",
    "telephone": "+528111150958",
    // Service Area Business: atendemos al cliente en su domicilio/negocio en todo
    // México, por eso no se declara una dirección de calle (sede) específica.
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Pedro Garza García",
      "addressRegion": "N.L.",
      "addressCountry": "MX"
    },
    "areaServed": [
      "Monterrey", "San Pedro Garza García", "Querétaro", "San Juan del Río", "San Miguel de Allende", "Saltillo", "Torreón", "Reynosa", "Tampico", "Matamoros", "Guadalajara", "León", "Ciudad de México", "Puebla", "Tijuana", "Mérida", "San Luis Potosí", "Aguascalientes", "Hermosillo", "Mexicali", "Culiacán", "Cd. Juárez"
    ],
    "openingHours": "Mo-Su 08:00-20:00",
    "image": "https://bigcat.mx/logo/BIG CAT - Control de plagas.png",
    "priceRange": "$$",
    "sameAs": [
      "https://web.facebook.com/profile.php?id=61561957291508",
      "https://www.instagram.com/bigcat.mx/"
    ]
  };

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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Router>
    </HelmetProvider>
  );
};

export default App;

