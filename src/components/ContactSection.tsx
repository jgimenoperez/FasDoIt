"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const services = [
  { id: "alicatado", label: "Alicatado y solado profesional" },
  { id: "paneles", label: "Instalación de Onwall" },
  { id: "pavimentos", label: " Reformas para hoteles, alojamientos y pisos de alquiler" },
  { id: "prefabricados", label: "Showrooms y Stands" },
];

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  comentario: string;
}

interface FormErrors {
  [key: string]: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    comentario: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    
    if (!formData.comentario.trim()) {
      newErrors.comentario = "El comentario es obligatorio";
    }
    
    return newErrors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          comentario: ""
        });
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Solicita tu Presupuesto</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          ¿Tienes dudas? ¿Quieres más información?
          <br />
          Contáctanos por WhatsApp o rellena el formulario. Estaremos encantados de ayudarte.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
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
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Formulario de Contacto</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                ¡Mensaje enviado correctamente! Te contactaremos pronto.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="nombre">Nombre *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={errors.nombre ? "border-red-500" : ""}
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>
              
              <div>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={errors.telefono ? "border-red-500" : ""}
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="comentario">Comentario *</Label>
                <Textarea
                  id="comentario"
                  name="comentario"
                  rows={4}
                  value={formData.comentario}
                  onChange={handleInputChange}
                  className={errors.comentario ? "border-red-500" : ""}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.comentario && <p className="text-red-500 text-sm mt-1">{errors.comentario}</p>}
              </div>
              
              <Button type="submit" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}