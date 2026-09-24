"use client";
import React from "react";
import AnimatedSection from './AnimatedSection';
import { experiences } from '@/data/experience';
import SectionContainer from './SectionContainer';

const Experience = () => {
  return (
    <section id="experience" className="py-20 max-sm:py-2 flex flex-col items-center justify-center gap-10 relative z-20 overflow-hidden">
      {/* Background gradients removed for global layout consistency */}

      <SectionContainer className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Work Experience
        </h2>

        {/* Refined Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-300 hidden md:block top-0" />

        <div className="w-full flex flex-col gap-16">
          {experiences.map((experience, index) => (
            <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <AnimatedSection
                className={`relative w-full md:w-[45%] group`}
                delay={index * 0.1}
              >
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-zinc-200 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative p-8 md:p-10 glass-card rounded-2xl hover:border-zinc-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-zinc-200">

                  {/* Timeline Dot */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] hidden md:block ${index % 2 === 0 ? '-right-[calc(11.1%+8px)]' : '-left-[calc(11.1%+8px)]'}`} />

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-zinc-300 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-zinc-300 rounded-bl-2xl" />

                  <h3 className="text-2xl md:text-3xl font-bold text-gradient-secondary mb-3">
                    {experience.title}
                  </h3>
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#0a0a0a] text-white font-bold rounded-lg text-xs md:text-sm">
                      {experience.company}
                    </span>
                  </div>
                  <p className="text-zinc-700 text-sm md:text-base leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Experience;
