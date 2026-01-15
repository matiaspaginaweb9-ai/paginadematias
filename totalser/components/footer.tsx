import Link from "next/link";
import { Github, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              TOTAL SERVICE
            </h3>
            <p className="text-gray-400 text-sm">
              Maquinaria pesada de alta calidad para tus proyectos de construcción, minería e infraestructura.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/acerca-de" className="hover:text-yellow-400 transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-yellow-400 transition-colors">
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a 
                  href="https://wa.me/56961582373" 
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  +56 9 6158 2373
                </a>
              </li>
              <li>
                <a 
                  href="mailto:TSERVICESSPA@GMAIL.COM" 
                  className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  TSERVICESSPA@GMAIL.COM
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Total Service. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Desarrollado por</span>
              <a 
                href="https://github.com/rxzkie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  rxzkie
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
