"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { userAgent } from 'next/server';

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
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#1B3B6B] mr-[15px]">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-[70px]">
          <Link href="/" className="flex items-center self-start mt-[5px]">
            <Image
              src="/logo-viva-sinaf.png"
              alt="Viva Sinaf"
              width={160}
              height={43}
              className="h-10 w-auto"
            />
          </Link>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link href="#inicio" className="nav-menu-link" onClick={toggleMenu}>
              O Viva
            </Link>
            <Link href="#como-funciona" className="nav-menu-link" onClick={toggleMenu}>
              Como fazer parte
            </Link>
            <Link href="#alo-doutor" className="nav-menu-link" onClick={toggleMenu}>
              Alô Doutor
            </Link>
            <Link href="#farmacias" className="nav-menu-link" onClick={toggleMenu}>
              Desconto em medicamentos
            </Link>
            <Link href="#exames" className="nav-menu-link" onClick={toggleMenu}>
              Desconto em Exames
            </Link>
            <Link href="#faq" className="nav-menu-link" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link 
              href="#como-funciona" 
              className="bg-[--primary-blue] text-[--primary-yellow] text-2xl xl:bg-[--primary-yellow] xl:text-[--primary-blue] px-8 py-4 xl:px-4 xl:py-2 rounded-lg xl:rounded font-medium xl:text-base xl:hover:bg-yellow-500 transition-colors inline-block"
            >
              Quero fazer parte
            </Link>
          </div>

          <button           
            className="hamburger-button xl:hidden text-white z-40" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 xl:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
} 