import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
import SedesPage from './src/pages/SedesPage';
import CoberturaPage from './src/pages/CoberturaPage';
import AnalyticsListener from './components/AnalyticsListener';
import WhatsappPanel from './components/WhatsappPanel';

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
      {/*
        VALORES POR DEFECTO DEL SITIO.

        Van acá y no en index.html por una razón concreta: Helmet solo puede
        reemplazar las etiquetas que él mismo administra. Las que estaban
        escritas a mano en index.html sobrevivían al prerender y se sumaban a
        las de cada página, así que las 52 servían dos og:title, dos
        og:description y dos twitter:card.

        Desde acá, una página que declare lo suyo PISA este valor en vez de
        duplicarlo, y una que no lo declare lo hereda. Es lo mismo que se
        buscaba con index.html, pero funcionando.

        Lo que NO está acá: geo.region y geo.placename (son de las páginas de
        ciudad) ni el JSON-LD del negocio. El Organization va solo en la home y
        cada sede declara su LocalBusiness (src/lib/schema.ts): un LocalBusiness
        global se repetía en todas las páginas, con un horario y una lista de
        ciudades que no estaban verificados.
      */}
      <Helmet>
        <meta property="og:site_name" content="Big Cat - Control de Plagas" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:image" content="https://bigcat.mx/logo/BIG CAT - Control de plagas.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://bigcat.mx/logo/BIG CAT - Control de plagas.png" />
        <meta name="twitter:title" content="Big Cat - Control de Plagas y Fumigación en México" />
        <meta name="twitter:description" content="Control de plagas y fumigación en México. Cotización sin costo." />
      </Helmet>
      <Router>
        <ScrollToHash />
        <AnalyticsListener />
        <div className="min-h-screen bg-white font-sans text-brand-dark overflow-x-hidden">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/servicios/:slug" element={<ServicePage />} />
              <Route path="/sedes" element={<SedesPage />} />
              <Route path="/sedes/:city" element={<LocationPage />} />
              <Route path="/cobertura" element={<CoberturaPage />} />
              <Route path="/reseñas" element={<Reviews />} />
              <Route path="/blog" element={<BlogArchivePage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
          <WhatsappPanel />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

