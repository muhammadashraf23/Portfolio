"use client";
import React from "react";
import AnimatedSection from './AnimatedSection';
import { education } from '@/data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 z-20 relative overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-900/20 via-background to-accent-cyan-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,182,212,0.1),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gradient">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
          {education.map((item, index) => (
            <AnimatedSection
              key={index}
              className="group relative"
              delay={index * 0.15}
            >
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Card with Gradient Border */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-accent-purple-500/50 via-accent-cyan-500/50 to-accent-purple-500/50 shadow-glow-purple group-hover:shadow-glow-cyan transition-all duration-500">

                {/* Inner Card */}
                <div className="bg-background rounded-2xl p-6 md:p-8 h-full w-full flex flex-col justify-between hover:bg-[#0a0520] transition-all duration-500 relative overflow-hidden">

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-accent-purple-500/50 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-accent-cyan-500/50 rounded-br-2xl" />

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-3xl font-bold text-gradient-secondary mb-3">
                      {item.degree || item.certification}
                    </h3>
                    <p className="text-gray-400 text-base md:text-xl mb-4 font-semibold">
                      {item.institution || item.provider}
                    </p>
                  </div>

                  <div className="border-t border-accent-purple-500/30 pt-4 relative z-10">
                    <p className="text-accent-cyan-400 font-bold text-base md:text-lg">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
