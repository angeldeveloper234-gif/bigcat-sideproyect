import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import AboutUs from '../../components/AboutUs';

import EnvironmentalAdaptation from '../../components/EnvironmentalAdaptation';
import QuoteSection from '../../components/QuoteSection';
import CostCalculator from '../../components/CostCalculator';

import Testimonials from '../../components/Testimonials';
import RestaurantMap from '../../components/RestaurantMap';
import Blog from '../../components/Blog';

import Contact from '../../components/Contact';
import StickyCTA from '../../components/StickyCTA';

const Home: React.FC = () => {
    return (
        <main className="relative">
            <Helmet>
                <title>Big Cat - Control de Plagas | Expertos en Fumigación en México</title>
                <meta name="description" content="Big Cat - Control de Plagas: Servicios profesionales de fumigación en México con 29+ años de experiencia. Eliminación garantizada de cucarachas, termitas y más. ¡Cotiza hoy!" />
                <meta name="keywords" content="big cat, bigcat, big cat control de plagas, fumigaciones en mexico, control de plagas residencial, fumigación profesional" />
                <link rel="canonical" href="https://bigcat.mx/" />
                <meta property="og:title" content="Big Cat - Control de Plagas | Expertos en Fumigación" />
                <meta property="og:description" content="Protege tu hogar y negocio con Big Cat. Servicios certificados por COFEPRIS con resultados garantizados." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bigcat.mx/" />
                <meta property="og:image" content="https://bigcat.mx/logo/BIG CAT - Control de plagas.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Big Cat - Control de Plagas | Expertos en Fumigación" />
                <meta name="twitter:description" content="Protege tu hogar y negocio con Big Cat. Resultados garantizados en todo México." />
            </Helmet>
            {/* 1. Attention & CTA */}
            <Hero />
            <TrustBar />
            
            {/* 2. Authority & Trust */}
            <AboutUs />

            
            {/* 3. Interest (The Problem we solve) */}
            <EnvironmentalAdaptation />
            
            {/* 4. Desire (Lead Magnets & Proof) */}
            <QuoteSection />
            <CostCalculator />
            <Testimonials />
            
            {/* 5. Action & Footprint */}

            <RestaurantMap />
            <Blog />
            <Contact />
            <StickyCTA />
        </main>
    );
};

export default Home;

