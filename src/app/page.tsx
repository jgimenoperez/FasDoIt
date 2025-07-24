import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Layers, ClipboardCheck } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />
      <div id="inicio" className="relative bg-cover bg-center text-white pt-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider">
            FASTDOIT
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-200">
            Espacios renovados. Sin obras, sin esperas.
          </p>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-300">
            Transformamos tu espacio con un enfoque revolucionario: rápido, limpio y sin las molestias de las reformas tradicionales. Calidad y diseño sin complicaciones.
          </p>
          <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
            Solicita tu presupuesto
          </Button>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Zap className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Instalación rápida</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Sparkles className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Sin polvo ni escombros</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Layers className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Revestimientos modernos</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <ClipboardCheck className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Presupuesto en 24h</h3>
            </div>
          </div>
        </main>
      </div>
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
