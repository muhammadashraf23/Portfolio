import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-stretch">
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
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
