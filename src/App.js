import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import HeroSection from './sections/HeroSection/HeroSection';
import BenefitsSection from './sections/BenefitsSection/BenefitsSection';
import ModulesSection from './sections/ModulesSection/ModulesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import PricingSection from './sections/PricingSection/PricingSection';
import FaqSection from './sections/FaqSection/FaqSection';
import Footer from './components/Footer/Footer';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const motionProps = {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.2 },
    variants: sectionVariants,
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <motion.div {...motionProps}><BenefitsSection /></motion.div>
        <motion.div {...motionProps}><ModulesSection /></motion.div>
        <motion.div {...motionProps}><TestimonialsSection /></motion.div>
        <motion.div {...motionProps}><PricingSection /></motion.div>
        <motion.div {...motionProps}><FaqSection /></motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

