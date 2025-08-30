import React, { useState } from 'react';
import styles from './Navbar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';
import SideMenu from '../SideMenu/SideMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <a href="#hero">React Pro</a>
          </div>
          <div className={styles.desktopMenu}>
            <a href="#benefits">Benefícios</a>
            <a href="#modules">Módulos</a>
            <a href="#pricing">Preço</a>
            <a href="#faq">FAQ</a>
            <ThemeToggle />
          </div>
          <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;

