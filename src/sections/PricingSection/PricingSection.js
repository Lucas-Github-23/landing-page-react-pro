import React from 'react';
import styles from './PricingSection.module.css';
import { FaShieldAlt } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.pricingCard}>
        <h2 className={styles.title}>Acesso Imediato e Vitalício</h2>
        <div className={styles.priceContainer}>
          <span className={styles.oldPrice}>De R$ 597,00</span>
          <span className={styles.newPrice}>Por apenas R$ 297,00</span>
          <span className={styles.installments}>ou 12x de R$ 29,82</span>
        </div>
        <a href="#" className={styles.ctaButton}>
          QUERO ME INSCREVER AGORA!
        </a>
        <div className={styles.guarantee}>
          <FaShieldAlt />
          <span>Garantia de 7 dias. Risco zero!</span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

