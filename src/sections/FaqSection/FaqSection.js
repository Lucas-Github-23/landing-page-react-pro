import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import styles from './FaqSection.module.css';

const faqs = [
  {
    title: 'Para quem é este curso?',
    content: 'Este curso é para desenvolvedores que desejam dominar o React, desde iniciantes com base em JavaScript até programadores experientes que querem se atualizar.',
  },
  {
    title: 'Preciso saber algo antes de começar?',
    content: 'É recomendado ter uma boa base de HTML, CSS e, principalmente, JavaScript moderno (ES6+), incluindo conceitos como `let/const`, `arrow functions`, `promises` e `classes`.',
  },
  {
    title: 'Terei acesso vitalício?',
    content: 'Sim! Uma vez adquirido, o curso é seu para sempre, incluindo todas as futuras atualizações de aulas e projetos.',
  },
  {
    title: 'Como funciona o suporte?',
    content: 'Você terá acesso à nossa comunidade exclusiva de alunos no Discord, onde poderá tirar dúvidas diretamente com os instrutores e interagir com outros desenvolvedores.',
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Perguntas Frequentes</h2>
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

