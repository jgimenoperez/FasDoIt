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
    beforeImage: "https://images.unsplash.com/photo-1664227430687-9299c593e3da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://media.istockphoto.com/id/2179552509/es/foto/lujoso-y-moderno-interior-de-ba%C3%B1o-con-acabado-en-m%C3%A1rmol-e-iluminaci%C3%B3n-tenue.jpg?s=2048x2048&w=is&k=20&c=jdPJUA0s4s681ICHy4boV0S0594PRhQoVnlGJN_ynxo=",
  },
  {
    id: 2,
    category: "Cocinas",
    title: "Cocina Abierta y Funcional",
    description: "Transformación de cocina con isla central. Instalación limpia y rápida.",
    beforeImage: "https://images.unsplash.com/photo-1746067506030-735f82592ef2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
  },
   {
    id: 3,
    category: "Baños",
    title: "Suite de Baño Minimalista",
    description: "Revestimiento de paredes y suelo con paneles de aluminio, creando un espacio sin juntas.",
    beforeImage: "https://images.unsplash.com/photo-1661954911253-711308722373?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://images.unsplash.com/photo-1722650271188-6a17e4829d9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    category: "Salones",
    title: "Salón con Pared de Acento",
    description: "Instalación de pavimento laminado y panelado decorativo. Finalizado en 1 día.",
    beforeImage: "https://images.unsplash.com/photo-1648717118978-f8ac6ce2ed6f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://plus.unsplash.com/premium_photo-1675616575391-45c8d9df6c63?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    category: "Obra pública",
    title: "Baños Públicos Hotel",
    description: "Renovación de baños para hotel con soluciones duraderas y de bajo mantenimiento.",
    beforeImage: "https://plus.unsplash.com/premium_photo-1664391683243-3ce894b7149b?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://plus.unsplash.com/premium_photo-1663091257768-8f089bf6b4fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    id: 6,
    category: "Cocinas",
    title: "Cocina con Toques de Madera",
    description: "Combinación de frentes blancos y madera para un look nórdico y acogedor.",
    beforeImage: "https://images.unsplash.com/photo-1721824294824-c08cb61a1a66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    afterImage: "https://images.unsplash.com/photo-1598698628529-78863e5d4b2b?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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