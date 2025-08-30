import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3 className={styles.accordionTitle}>{title}</h3>
        <span className={styles.accordionIcon}>
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

