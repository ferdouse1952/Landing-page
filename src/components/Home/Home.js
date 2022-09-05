import React from 'react';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Hero    from '../Hero/Hero';
import Pricing from '../Pricing/Pricing';
import Testimonial from '../Testimonials/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div>
            
            <Hero></Hero>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <FAQ></FAQ>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;