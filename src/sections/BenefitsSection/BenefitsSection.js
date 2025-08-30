import React from 'react';
import styles from './BenefitsSection.module.css';
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaCode />,
    title: 'Aprenda na Prática',
    description: 'Projetos reais do início ao fim, sem enrolação. Código limpo e moderno.',
  },
  {
    icon: <FaRocket />,
    title: 'Do Zero ao Deploy',
    description: 'Você aprenderá todo o ecossistema React e como colocar seus projetos no ar.',
  },
  {
    icon: <FaUsers />,
    title: 'Comunidade Exclusiva',
    description: 'Faça parte de uma comunidade de desenvolvedores para tirar dúvidas e networking.',
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className={styles.benefitsSection}>
      <h2 className={styles.title}>Por que escolher o React Pro?</h2>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.benefitCard}>
            <div className={styles.icon}>{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;

