import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
// Passo 1: Importar a imagem da pasta de assets
import HeroBackgroundImage from '../../assets/hero-background.png';

function HeroSection() {
  const [text, setText] = useState('');
  const fullText = "React Pro: Do Zero ao Deploy";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [fullText]);

  // Passo 2: Criar um objeto de estilo para passar a imagem como uma variável CSS
  const sectionStyle = {
    '--background-image-url': `url(${HeroBackgroundImage})`
  };

  return (
    // Passo 3: Aplicar o estilo ao elemento da secção
    <section className={styles.heroSection} style={sectionStyle}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.title} ${text.length === fullText.length ? '' : styles.typingEffect}`}>
          {text}
        </h1>
        <p className={styles.subtitle}>
          Domine a biblioteca que revolucionou o desenvolvimento front-end e construa aplicações modernas e de alta performance.
        </p>
        <motion.a 
          href="#pricing" 
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GARANTIR MINHA VAGA
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;


