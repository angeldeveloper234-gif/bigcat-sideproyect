import React from 'react';
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
