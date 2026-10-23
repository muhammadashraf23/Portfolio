"use client";
import React from "react";
import AnimatedSection from './AnimatedSection';
import { education } from '@/data/education';
import SectionContainer from './SectionContainer';

const Education = () => {
  return (
    <section id="education" className="py-20 z-20 relative overflow-hidden">
      {/* Background gradients removed for global layout consistency */}

      <SectionContainer className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {education.map((item, index) => (
            <AnimatedSection
              key={index}
              className="group relative"
              delay={index * 0.15}
            >
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-zinc-200 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Card with Gradient Border */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 shadow-sm group-hover:shadow-lg transition-all duration-500">

                {/* Inner Card */}
                <div className="bg-background rounded-2xl p-8 md:p-10 h-full w-full flex flex-col justify-between hover:bg-zinc-200 transition-all duration-500 relative overflow-hidden">

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-zinc-300 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-zinc-300 rounded-br-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-3xl font-bold text-gradient-secondary mb-3">
                      {item.degree || item.certification}
                    </h3>
                    <p className="text-zinc-600 text-base md:text-xl mb-4 font-semibold">
                      {item.institution || item.provider}
                    </p>
                  </div>

                  <div className="border-t border-zinc-300 pt-4 relative z-10">
                    <p className="text-zinc-500 font-bold text-base md:text-lg">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Education;
