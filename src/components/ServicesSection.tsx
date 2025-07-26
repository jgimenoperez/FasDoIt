import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Paneles de Aluminio Tipo Cerámico",
    description: "Sin necesidad de picar azulejos, sin escombros ni polvo, acabado tipo porcelánico en pocas horas. Ideal para baños, cocinas y salones.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1683121248255-9816c1cef6b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target: "Baños, cocinas y salones"
  },
  {
    title: "Alicatado y solado profesional",
    description: "Revestimiento de suelos y paredes con cerámica, porcelánico, piedra natural y otros materiales.Trabajos limpios, precisos y duraderos en interiores y exteriores.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1682973057048-c4f8eeb7e19c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // imageUrl: "https://images.unsplash.com/photo-1560440021-33f9b867899d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target: "Reformas completas"
  },
  {
    title: "Colocación de Pavimentos",
    description: "Instalación limpia y precisa de pavimentos para interior y exterior, en todos los formatos, incluyendo imitación madera.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    target: "Salones, cocinas, terrazas"
  },
  {
    title: "Baños Prefabricados",
    description: "Soluciones modulares para ferias y promociones, con instalación completa de alicatado y pavimento. Ideal para hoteles y espacios temporales.",
    imageUrl: "https://media.istockphoto.com/id/1291917591/es/foto/foto-de-stock-de-modern-bathroom-interior.jpg?s=2048x2048&w=is&k=20&c=KBsfNkie9KMUjo4sXuxBjY4W7OXBM8NCSgxjEIgqQ4A=",
    // imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    target: "Hoteles, eventos"
  }
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}