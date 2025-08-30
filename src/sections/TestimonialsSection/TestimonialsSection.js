import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Joana Silva',
    role: 'Desenvolvedora Frontend',
    text: 'Este curso foi um divisor de águas na minha carreira. A didática é incrível e os projetos são muito relevantes para o mercado de trabalho.',
    avatar: 'https://placehold.co/100x100/EFEFEF/333333?text=JS'
  },
  {
    name: 'Carlos Pereira',
    role: 'Desenvolvedor Full Stack',
    text: 'Mesmo já trabalhando com React, aprendi técnicas e padrões de projeto que otimizaram muito meu código. Recomendo fortemente!',
    avatar: 'https://placehold.co/100x100/EFEFEF/333333?text=CP'
  },
  {
    name: 'Mariana Costa',
    role: 'Estudante de Sistemas',
    text: 'Consegui meu primeiro estágio graças ao portfólio que construí durante o curso. A comunidade também ajuda muito!',
    avatar: 'https://placehold.co/100x100/EFEFEF/333333?text=MC'
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <h2 className={styles.title}>O que os alunos dizem</h2>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.text}>"{testimonial.text}"</p>
            <div className={styles.authorInfo}>
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
              <div>
                <h4 className={styles.name}>{testimonial.name}</h4>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

