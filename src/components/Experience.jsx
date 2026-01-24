"use client";
import React from "react";
import AnimatedSection from './AnimatedSection';
import { experiences } from '@/data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 flex flex-col items-center justify-center gap-10 relative z-20 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan-900/20 via-background to-accent-purple-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.1),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient">
          Work Experience
        </h2>

        {/* Refined Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-purple-500/50 via-accent-cyan-500/50 to-accent-purple-500/50 hidden md:block" />

        <div className="w-full flex flex-col gap-16 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <AnimatedSection
                className={`relative w-full md:w-[45%] group`}
                delay={index * 0.1}
              >
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative p-8 glass-card rounded-2xl hover:border-accent-cyan-500 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-500">

                  {/* Timeline Dot */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 shadow-glow-purple hidden md:block ${index % 2 === 0 ? '-right-[calc(11.1%+8px)]' : '-left-[calc(11.1%+8px)]'}`} />

                  {/* Subtle Corner Accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent-cyan-500/30 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent-purple-500/30 rounded-bl-2xl" />

                  <h3 className="text-3xl font-bold text-gradient-secondary mb-3">
                    {experience.title}
                  </h3>
                  <div className="flex flex-row items-center gap-4 mb-4">
                    <span className="px-4 py-2 bg-gradient-secondary text-white font-bold rounded-lg text-sm">
                      {experience.company}
                    </span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
