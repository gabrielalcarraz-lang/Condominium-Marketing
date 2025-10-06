// src/components/Footer.tsx

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Columna de Marca y Copyright */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-xl font-bold">[Tu Marca]</h4>
            <p className="text-gray-400 text-sm mt-1">
              &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>

          {/* Columna de Enlaces Rápidos */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
            <Link href="#features" className="hover:text-blue-400 transition">
              Funcionalidades
            </Link>
            <Link href="#ai-advantage" className="hover:text-blue-400 transition">
              Tecnología IA
            </Link>
            <Link href="/privacy" className="hover:text-blue-400 transition">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition">
              Términos de Servicio
            </Link>
          </div>
          
          {/* Columna de Contacto Rápido */}
          <div className="mt-4 md:mt-0 text-sm">
            <p className="font-semibold">Contacto:</p>
            <p className="text-gray-400">ventas@[tumarca].com</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
}