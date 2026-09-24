"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionContainer from "@/components/SectionContainer";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20 text-[#0a0a0a] relative z-20 overflow-hidden">
      <SectionContainer className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-gradient">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.name}
              delay={index * 0.04}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="h-full w-full"
            >
              <div className="group relative w-full h-full flex flex-col">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Card - Uniform width, height, and content alignment */}
                <div className="relative flex flex-col items-center justify-center p-3.5 sm:p-5 h-full w-full min-h-[120px] sm:min-h-[140px] glass-container rounded-2xl border-2 border-transparent transition-all duration-300 hover:scale-105 hover:border-accent-cyan-500 hover:shadow-glow-cyan">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 mb-2 sm:mb-3 relative flex items-center justify-center shrink-0">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={56}
                      height={56}
                      className="object-contain max-h-full max-w-full rounded-lg bg-white/90 p-1.5 sm:p-2 relative z-10"
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs md:text-sm font-bold text-center text-gradient-secondary leading-tight min-h-[28px] sm:min-h-[32px] flex items-center justify-center w-full">
                    {skill.name}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default SkillsSection;
