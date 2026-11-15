import React from 'react';
import { Helmet } from 'react-helmet-async';
import { canonical } from '../lib/urls';
import { descripcion } from '../lib/descriptions';
import { organizationSchema } from '../lib/schema';
import Hero from '../../components/Hero';
import TrustBar from '../../components/TrustBar';
import AboutUs from '../../components/AboutUs';
import EnvironmentalAdaptation from '../../components/EnvironmentalAdaptation';

import QuoteSection from '../../components/QuoteSection';
import CostCalculator from '../../components/CostCalculator';

import Testimonials from '../../components/Testimonials';
import MapaDiferido from '../../components/MapaDiferido';
import Blog from '../../components/Blog';
import SedesLinks from '../../components/SedesLinks';

import Contact from '../../components/Contact';
import StickyCTA from '../../components/StickyCTA';

const Home: React.FC = () => {
    return (
        <main className="relative">
            <Helmet>
                <title>Big Cat | Fumigación y control de plagas en México</title>
                {/* La imagen del hero es el elemento más grande de la home (LCP):
                    se precarga acá, y no en index.html, para que no se baje en
                    las otras 55 páginas, que no la usan. */}
                <link rel="preload" as="image" href="/images/hero.webp" />
                {/* La del home tambien sale de la lista literal: es la unica
                    forma de que quien la cambie la cambie en un solo lugar. */}
                <meta name="description" content={descripcion('/', '')} />
                <meta name="keywords" content="big cat, bigcat, big cat control de plagas, fumigaciones en mexico, control de plagas residencial, fumigación profesional" />
                <link rel="canonical" href={canonical('/')} />
                <meta property="og:title" content="Big Cat | Fumigación y control de plagas en México" />
                <meta property="og:description" content={descripcion('/', '')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonical('/')} />
                <meta property="og:image" content="https://bigcat.mx/logo/BIG%20CAT%20-%20Control%20de%20plagas.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Big Cat | Fumigación y control de plagas en México" />
                <meta name="twitter:description" content={descripcion('/', '')} />
                <script type="application/ld+json">{JSON.stringify(organizationSchema())}</script>
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

            <MapaDiferido />
            <SedesLinks />
            <Blog />
            <Contact />
            <StickyCTA />
        </main>
    );
};

export default Home;

