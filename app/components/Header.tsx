"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Ensure menu is closed when component mounts
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className={styles.header}>
      <div className="container-viva">
        <nav className={styles.header_nav}>
          <Link href="#inicio" className={styles.logo}>
            <Image
              src="/logo-viva-sinaf.png"
              alt="Viva Sinaf"
              width={160}
              height={43}
              className={styles.logo_img}
            />
          </Link>
          
          <div className={`${styles.nav_menu} ${isMenuOpen ? styles.nav_menu_open : ''}`}>
            <Link href="#inicio" className={styles.nav_menu_link} onClick={toggleMenu}>
              O Viva
            </Link>
            <Link href="#como-funciona" className={styles.nav_menu_link} onClick={toggleMenu}>
              Como fazer parte
            </Link>
            <Link href="#alo-doutor" className={styles.nav_menu_link} onClick={toggleMenu}>
              Alô Doutor
            </Link>
            <Link href="#farmacias" className={styles.nav_menu_link} onClick={toggleMenu}>
              Desconto em medicamentos
            </Link>
            <Link href="#exames" className={styles.nav_menu_link} onClick={toggleMenu}>
              Desconto em Exames
            </Link>
            <Link href="#faq" className={styles.nav_menu_link} onClick={toggleMenu}>
              FAQ
            </Link>
            
          </div>
          <div className="flex flex-row gap-2 items-center">
          <Link href="#como-funciona" className={styles.button_header}>
            Quero fazer parte
          </Link>

          <button           
            className={styles.hamburger_button}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg className={styles.hamburger_button_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={styles.hamburger_button_svg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          </div>
        </nav>
      </div>
    </header>
  );
} 