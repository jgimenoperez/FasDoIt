import React from "react";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold uppercase mb-4">FASTDOIT</h3>
            <p className="text-gray-400">Espacios renovados. <br/>Sin obras, sin esperas.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-primary">Proyectos</a></li>
              <li><a href="#nosotros" className="hover:text-primary">Quiénes Somos</a></li>
              <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-gray-400">Valencia - Castellón</p>
            <p className="text-gray-400">contacto@fastdoit.es</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© FASTDOIT 2025 - Todos los derechos reservados</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Aviso Legal</a>
            <a href="#" className="hover:text-white">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}