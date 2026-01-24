"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" aria-label="Selected Projects" className="py-20 text-white relative z-20 overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-900/20 via-background to-accent-cyan-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center text-gradient">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <article className="group relative h-full">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Card */}
                <div className="relative h-full glass-card rounded-2xl overflow-hidden hover:border-accent-cyan-500 transition-all duration-500 hover:scale-[1.02] shadow-glow-purple">

                  {/* Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={`Screenshot of ${project.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-20">
                    <h3 className="text-2xl font-bold mb-3 text-gradient-secondary">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-purple-400 mb-2 block">
                        Tech Stack
                      </span>
                      <ul className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech, i) => (
                          <li
                            key={i}
                            className="bg-accent-purple-500/10 border border-accent-purple-500/30 text-accent-cyan-300 px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    {/* <div className="flex gap-3 mt-6">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-primary hover:opacity-90 text-white font-bold rounded-lg text-sm shadow-glow-purple transition-all hover:scale-105 text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border-2 border-accent-purple-500/50 hover:bg-accent-purple-900/10 hover:border-accent-cyan-500 text-white rounded-lg text-sm transition-all hover:scale-105 text-center font-semibold"
                      >
                        Source
                      </a>
                    </div> */}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
