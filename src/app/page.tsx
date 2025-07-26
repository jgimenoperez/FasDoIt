"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, Sparkles, Layers, ClipboardCheck } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Header } from "@/components/Header";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

export default function Home() {
  return (
    <ScrollAnimationWrapper>
      <Header />
      <div id="inicio" className="relative bg-cover bg-center text-white pt-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <main className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="flex items-center gap-6 scroll-fade-in relative z-10">
            <div className="flex gap-2">
              <div className="flex flex-col gap-2">
                <div className="w-8 h-8 bg-white rounded-sm shadow-2xl"></div>
                <div className="w-8 h-8 bg-white rounded-sm shadow-2xl"></div>
              </div>
              <div className="w-8 h-16 bg-white rounded-sm shadow-2xl"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-wider drop-shadow-2xl">
              FASTDOIT
            </h1>
          </div>
          <p className="text-xl md:text-2xl mt-4 text-gray-200 scroll-fade-in scroll-delay-100">
            Reformas rápidas, limpias y profesionales.
          </p>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-300 scroll-fade-in scroll-delay-200">
            En <strong>FASTDOIT</strong> transformamos tu espacio en tiempo récord, sin escombros ni molestias.
            <br />  Especialistas en alicatado, solado e instalación de Onwall
          </p>

          <div className="mt-8 flex gap-4 flex-col sm:flex-row">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 scroll-scale scroll-delay-300">
              Solicita tu presupuesto
            </Button>
            <Button
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 scroll-scale scroll-delay-300">
              Ver trabajos realizados
            </Button>

          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 scroll-fade-in scroll-delay-100">
              <Zap className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Instalación rápida</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 scroll-fade-in scroll-delay-200">
              <Sparkles className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Sin polvo ni escombros</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 scroll-fade-in scroll-delay-300">
              <Layers className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Revestimientos modernos</h3>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 scroll-fade-in scroll-delay-400">
              <ClipboardCheck className="h-10 w-10 text-gray-200" />
              <h3 className="mt-4 font-semibold text-lg text-white">Presupuesto en 24h</h3>
            </div>
          </div>
        </main>
      </div>
      <div className="scroll-fade-in">
        <ServicesSection />
      </div>
      <div className="scroll-slide-left">
        <ProjectsSection />
      </div>
      <div className="scroll-slide-right">
        <AboutSection />
      </div>
      <div className="scroll-fade-in">
        <ContactSection />
      </div>
      <Footer />
    </ScrollAnimationWrapper>
  );
}
