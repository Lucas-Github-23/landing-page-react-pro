import React from 'react';
import styles from './SideMenu.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const SideMenu = ({ isOpen, toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      ></div>
      <div className={`${styles.sideMenu} ${isOpen ? styles.active : ''}`}>
        <nav className={styles.navLinks}>
          <a href="#benefits" onClick={handleLinkClick}>Benefícios</a>
          <a href="#modules" onClick={handleLinkClick}>Módulos</a>
          <a href="#pricing" onClick={handleLinkClick}>Preço</a>
          <a href="#faq" onClick={handleLinkClick}>FAQ</a>
        </nav>
        <div className={styles.themeToggleWrapper}>
            <p>Alterar Tema:</p>
            <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default SideMenu;

