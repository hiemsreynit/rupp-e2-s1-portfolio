"use client";
import About from "@/components/layouts/About";
import HeroSection from "@/components/layouts/HeroSection";

export default function Portfolio() {
 
  return (
    <main className="px-6 md:px-16 lg:px-36">
      <HeroSection />
      <About/>
    </main>
  );
}
