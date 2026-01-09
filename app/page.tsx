"use client";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";
import Project from "@/components/layouts/Project";
import Skills from "@/components/layouts/Skills";

export default function Portfolio() {
 
  return (
    <main className="mt-20 min-h-screen flex flex-col gap-30 md:gap-20 lg:gap-40">
      <section className="px-12 md:px-16 lg:px-36 flex flex-col gap-y-40">
        <HeroSection />
        <About/>
        <Skills/>
      </section>
      <Project/>
    </main>
  );
}
