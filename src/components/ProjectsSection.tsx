"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Baños",
    title: "Baño Moderno con Paneles",
    description: "Renovación completa sin obras en 48 horas. Acabado cerámico de lujo.",
    beforeImage: "https://images.unsplash.com/photo-1582730305382-40cf7013328c?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616465821035-780654fe47e1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Cocinas",
    title: "Cocina Abierta y Funcional",
    description: "Transformación de cocina con isla central. Instalación limpia y rápida.",
    beforeImage: "https://images.unsplash.com/photo-1556912173-35f75e2c59f6?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
  },
   {
    id: 3,
    category: "Baños",
    title: "Suite de Baño Minimalista",
    description: "Revestimiento de paredes y suelo con paneles de aluminio, creando un espacio sin juntas.",
    beforeImage: "https://images.unsplash.com/photo-1593349390234-5f615e34aa24?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1585672524430-804f8744ace9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Salones",
    title: "Salón con Pared de Acento",
    description: "Instalación de pavimento laminado y panelado decorativo. Finalizado en 1 día.",
    beforeImage: "https://images.unsplash.com/photo-1585412723938-23588a426197?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618220179428npm-22790b461013?q=80&w=2127&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Obra pública",
    title: "Baños Públicos Hotel",
    description: "Renovación de baños para hotel con soluciones duraderas y de bajo mantenimiento.",
    beforeImage: "https://images.unsplash.com/photo-1620626353457-377190364344?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1631049339239-a9a3d4554b73?q=80&w=2070&auto=format&fit=crop",
  },
   {
    id: 6,
    category: "Cocinas",
    title: "Cocina con Toques de Madera",
    description: "Combinación de frentes blancos y madera para un look nórdico y acogedor.",
    beforeImage: "https://images.unsplash.com/photo-1588854337236-6889d631f133?q=80&w=2070&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1558495039-b265ae672458?q=80&w=2070&auto=format&fit=crop",
  },
];

const categories = ["Todos", "Baños", "Cocinas", "Salones", "Obra pública"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  
  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setLightboxOpen(true);
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Proyectos Realizados</h2>
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="relative">
                    <img 
                      src={project.beforeImage} 
                      alt="Antes"
                      className="w-full h-32 object-cover rounded cursor-pointer hover:opacity-80"
                      onClick={() => openLightbox(project.beforeImage)}
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Antes
                    </span>
                  </div>
                  <div className="relative">
                    <img 
                      src={project.afterImage} 
                      alt="Después"
                      className="w-full h-32 object-cover rounded cursor-pointer hover:opacity-80"
                      onClick={() => openLightbox(project.afterImage)}
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Después
                    </span>
                  </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    <div className="flex justify-center mt-2 space-x-2">
                        <Button variant="ghost" size="sm" onClick={() => openLightbox(project.beforeImage)}>Ver Antes</Button>
                        <Button variant="ghost" size="sm" onClick={() => openLightbox(project.afterImage)}>Ver Después</Button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
       {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-4 right-4 text-white z-10" onClick={() => setLightboxOpen(false)}>
            <X size={32}/>
          </button>
          <img src={selectedImage} alt="Proyecto ampliado" className="max-w-[90vw] max-h-[90vh] object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}