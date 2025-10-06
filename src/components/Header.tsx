// src/components/Header.tsx

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Marca */}
        <Link href="/" className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition">
          [Tu Marca] 🤖
        </Link>
        
        {/* Navegación Principal */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="#features" className="text-gray-600 hover:text-blue-600 transition">
            Características
          </Link>
          <Link href="#ai-advantage" className="text-gray-600 hover:text-blue-600 transition">
            Ventaja IA
          </Link>
          <Link href="#contact" 
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Solicitar Demo
          </Link>
        </div>

        {/* Botón de Login */}
        <Link href="/login" 
              className="hidden sm:block text-blue-600 border border-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition">
            Acceso Clientes
        </Link>
      </nav>
    </header>
  );
}