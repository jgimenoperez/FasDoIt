import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const problems = [
    "Reformas eternas que se alargan semanas o meses",
    "Obras sucias, llenas de polvo, ruidos y escombros",
    "Coordinación caótica entre gremios",
    "Presupuestos que se disparan",
    "Falta de profesionalidad y puntualidad",
];

const solutions = [
    "Sin obra sucia ni escombros",
    "Rapidez real: reformas en horas o días",
    "Limpieza garantizada",
    "Equipo propio especializado",
    "Puntualidad y compromiso",
    "Presupuesto claro en menos de 24h",
];

const philosophyPillars = [
    "Rapidez sin sacrificar calidad",
    "Limpieza y respeto por el entorno",
    "Profesionalidad en cada detalle",
    "Acabados modernos, funcionales y elegantes",
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground mb-8">
            FASTDOIT revoluciona las reformas con soluciones limpias, rápidas y eficientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-100 p-8 rounded-lg">
             <h3 className="text-2xl font-bold mb-4 text-center">Nuestra Filosofía</h3>
            <ul className="space-y-4">
              {philosophyPillars.map((pillar) => (
                <li key={pillar} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="prose max-w-none">
            <p>Tras años de experiencia en el sector de la construcción y el montaje técnico, vimos que la mayoría de las reformas eran lentas, sucias y llenas de problemas para el cliente. Por eso decidimos hacerlo diferente.</p>
            <p>Formamos un equipo propio de instaladores especializados en panelado, alicatado y pavimento, con sistemas que permiten transformar espacios en tiempo récord y sin las molestias de una obra tradicional.</p>
             <p><strong>FASTDOIT no vende solo reformas. Vendemos comodidad, confianza y un resultado impecable.</strong></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Problemas que Resolvemos</h3>
            <ul className="space-y-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-center">
                  <XCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-800">Nuestras Soluciones</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}