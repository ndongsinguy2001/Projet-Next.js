// components/Navbar.tsx
// Barre de navigation - Menu principal du site

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nom */}
          <Link href="/" className="text-lg md:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors" onClick={closeMenu}>
           NDONG Mr STRATEGE
          </Link>

          {/* Menu de navigation - Caché sur mobile */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Bouton Hamburger - Visible uniquement sur mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Menu Mobile - S'ouvre quand on clique sur le hamburger */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-4 pt-4">
            <li>
              <Link href="/" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={closeMenu}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={closeMenu}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/projects" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={closeMenu}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}