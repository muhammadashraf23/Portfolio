import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="bg-background">
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
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
