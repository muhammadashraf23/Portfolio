import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// Code-split below-the-fold sections to minimize initial client JS bundle while keeping 100% SSR
const SkillsSection = dynamic(() => import("@/components/SkillsSection"));
const Projects = dynamic(() => import("@/components/Projects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Education = dynamic(() => import("@/components/Education"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full flex flex-col items-center">
      <main className="w-full flex flex-col items-stretch">
        <HeroSection />
        
        <div className="section-divider max-sm:mt-2" />
        <About />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
        <div className="section-divider" />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
