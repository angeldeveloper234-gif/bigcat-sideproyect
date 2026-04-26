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
                <title>Big Cat Fumigaciones | Control de Plagas Profesional en México</title>
                <meta name="description" content="Servicios de control de plagas con 29+ años de experiencia. Productos 100% seguros para tu familia y mascotas. Cobertura nacional con servicio local. Certificados por COFEPRIS." />
                <link rel="canonical" href="https://bigcat.mx/" />
                <meta property="og:title" content="Big Cat Fumigaciones | Control de Plagas Profesional" />
                <meta property="og:description" content="Protege tu hogar y negocio con los expertos en control de plagas. Soluciones eficaces y seguras en todo México." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bigcat.mx/" />
                <meta property="og:image" content="https://bigcat.mx/logo/BIG CAT - Control de plagas.png" />
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
