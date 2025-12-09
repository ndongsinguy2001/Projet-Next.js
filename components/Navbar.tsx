// components/Navbar.tsx
// Barre de navigation - Menu principal du site

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nom */}
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
           NDONG Mr STRATEGE
          </Link>

          {/* Menu de navigation */}
          <ul className="flex space-x-8">
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
            <li>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}