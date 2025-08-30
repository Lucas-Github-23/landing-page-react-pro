import React from 'react';
import styles from './ModulesSection.module.css';

const modules = [
  'Fundamentos do React e JSX',
  'Componentes, Props e Estado',
  'Hooks Essenciais (useState, useEffect, useContext)',
  'Renderização Condicional e Listas',
  'Estilização: CSS Modules e Styled Components',
  'Gerenciamento de Estado Avançado com Redux',
  'Roteamento com React Router',
  'Consumo de APIs e Requisições HTTP',
  'Testes em Aplicações React',
  'Build e Deploy (Netlify, Vercel)',
];

const ModulesSection = () => {
  return (
    <section id="modules" className={styles.modulesSection}>
      <h2 className={styles.title}>O que você vai aprender?</h2>
      <p className={styles.subtitle}>Uma trilha de aprendizado completa para você se tornar um especialista.</p>
      <div className={styles.modulesList}>
        {modules.map((module, index) => (
          <div key={index} className={styles.moduleItem}>
            <div className={styles.moduleNumber}>{String(index + 1).padStart(2, '0')}</div>
            <h3 className={styles.moduleTitle}>{module}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModulesSection;


