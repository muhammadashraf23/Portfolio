"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { skills } from "@/data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 text-white relative z-20 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan-900/20 via-background to-accent-purple-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.15),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-5xl md:text-6xl font-bold mb-16 text-gradient">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.name}
              delay={index * 0.05}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
            >
              <div className="group relative w-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative flex flex-col items-center p-6 glass-container rounded-2xl hover:border-accent-cyan-500 border-2 border-transparent transition-all duration-300 hover:scale-110 hover:shadow-glow-cyan">
                  <div className="w-16 h-16 mb-3 relative">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="object-contain rounded-lg bg-white/90 p-2 relative z-10"
                    />
                  </div>
                  <p className="text-sm font-bold text-center text-gradient-secondary">
                    {skill.name}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
