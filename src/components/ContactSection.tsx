import React from "react";
import { Button } from "@/components/ui/button";

const services = [
  { id: "alicatado", label: "Alicatado y solado profesional" },
  { id: "paneles", label: "Instalación de Onwall" },
  { id: "pavimentos", label: " Reformas para hoteles, alojamientos y pisos de alquiler" },
  { id: "prefabricados", label: "Showrooms y Stands" },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Solicita tu Presupuesto</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Nuestros Servicios</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{service.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t">
              <p className="text-primary font-bold">Garantía de respuesta en 24 horas</p>
              <p className="text-muted-foreground">Nos comprometemos a contactarte en menos de un día laborable para darte un presupuesto claro y sin compromiso.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Área de Servicio:</strong> Valencia y Castellón
              </p>
              <p>
                <strong>Teléfono / WhatsApp:</strong> +34 123 456 789
              </p>
              <p>
                <strong>Email:</strong> contacto@fastdoit.es
              </p>
              <div className="mt-6 pt-6 border-t">
                <p className="text-primary font-bold">¿Listo para transformar tu espacio?</p>
                <p>Contáctanos hoy mismo y obtén tu presupuesto personalizado sin compromiso.</p>
              </div>
            </div>
            <Button asChild className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white">
              <a href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
            <Button asChild className="mt-4 w-full">
              <a href="mailto:contacto@fastdoit.es">
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}