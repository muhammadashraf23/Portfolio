"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionContainer from "@/components/SectionContainer";

const Projects = () => {
  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 text-[#0a0a0a] relative z-20 overflow-hidden bg-background">
      <SectionContainer className="relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-700 mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] font-orbitron tracking-tight text-[#0a0a0a]">
            Ideas Turned Into Experience
          </h2>
          <p className="mt-6 text-zinc-600 md:text-lg max-w-lg">
            A curated look at recent builds that blend thoughtful design, strong product thinking, and dependable engineering.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-16 md:gap-24 relative">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = (index + 1).toString().padStart(2, '0');
            const hasConnector = false; // Set to true if you want to show the connector line between projects

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 lg:gap-24 relative`}
              >
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[50%] relative group"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-200 bg-zinc-100 aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-zinc-200/50 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[45%] flex flex-col justify-center"
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-sm font-bold text-zinc-400 font-orbitron">{projectNumber}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-[#0a0a0a] tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full border border-zinc-300 text-zinc-600 bg-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 font-medium">
                    {project.liveDemo && project.liveDemo !== "#" && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-[#0a0a0a] hover:text-[#9333ea] transition-colors group"
                      >
                        <span className="text-sm tracking-wide">Live Demo</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    {project.github && project.github !== "#" && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 text-zinc-500 hover:text-[#0a0a0a] transition-colors group"
                      >
                        <span className="text-sm tracking-wide">Source Code</span>
                        <svg className="w-4 h-4 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>

                {hasConnector && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-full z-0 hidden md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="mx-auto h-16 w-[80%] max-w-[1000px] overflow-visible"
                      viewBox="0 0 1000 60"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id={`connectorGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6b7280" stopOpacity="0.42" />
                          <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.22" />
                        </linearGradient>
                      </defs>
                      <path
                        d={
                          isEven
                            ? "M220 36 C360 50 640 50 780 36"
                            : "M780 36 C640 50 360 50 220 36"
                        }
                        fill="none"
                        stroke={`url(#connectorGradient-${index})`}
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeDasharray="4 9"
                        opacity="0.75"
                      />
                      <circle
                        cx={isEven ? "220" : "780"}
                        cy="36"
                        r="4"
                        className="fill-white stroke-zinc-400"
                        strokeWidth="1.4"
                      />
                      <circle
                        cx={isEven ? "780" : "220"}
                        cy="36"
                        r="4"
                        className="fill-white stroke-zinc-400"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                )}

              </div>
            );
          })}
        </div>
        
        {/* View All Projects Button */}
        <div className="mt-32 flex justify-center">
          <a
            href="https://github.com/MuhammadAshraf23"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-[#0a0a0a] text-white font-bold rounded-full text-sm shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all flex items-center gap-3"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </SectionContainer>
    </section>
  );
};

export default Projects;
