"use client";

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function About() {
  const quickFacts = [
    { label: "Location", value: "Karachi, Pakistan", icon: "📍" },
    { label: "Education", value: "BS Computer Science", icon: "🎓" },
    { label: "Specialization", value: "Full Stack Development", icon: "⚡" },
    { label: "Available For", value: "Freelance & Full-time", icon: "💼" },
  ];

  return (
    <section
      id="about"
      aria-label="About Muhammad Ashraf"
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 text-white relative z-20 overflow-hidden"
    >
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-900/20 via-background to-accent-cyan-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)] z-0" />

      {/* Content Container */}
      <article className="max-w-6xl w-full p-8 md:p-12 glass-card rounded-3xl shadow-glow-purple relative z-10">

        {/* Subtle Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent-cyan-500/50 rounded-tl-3xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent-purple-500/50 rounded-br-3xl" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <AnimatedSection
            className="flex-shrink-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <Image
                src="/images/Profile picture.png"
                alt="Muhammad Ashraf Profile"
                width={288}
                height={288}
                priority={true}
                className="rounded-full shadow-2xl object-cover max-sm:w-52 max-sm:h-52 relative z-10 border-4 border-accent-purple-500/30 group-hover:border-accent-cyan-500/50 transition-colors duration-500"
              />
            </div>
          </AnimatedSection>

          {/* Text Section / Quick Facts */}
          <AnimatedSection
            className="flex-1 text-center md:text-left"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                Full Stack Developer with expertise in building scalable, high-performance web and mobile applications.
                I specialize in modern JavaScript frameworks including React, Vue.js, Next.js, and Nuxt, combined with
                robust backend solutions using Node.js and both SQL and NoSQL databases.
              </p>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                Currently pursuing BS in Computer Science at UBIT, University of Karachi, while actively working on
                real-world projects that solve actual problems. I'm passionate about writing clean, maintainable code
                and creating exceptional user experiences that make a difference.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-8">
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-accent-purple-900/10 border border-accent-purple-500/20 hover:border-accent-cyan-500/40 transition-all group/fact hover:bg-accent-purple-900/20"
                >
                  <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" aria-hidden="true">{fact.icon}</span>
                  <div className="text-left">
                    <span className="block text-[10px] text-gray-400 uppercase font-bold tracking-widest">{fact.label}</span>
                    <span className="text-sm md:text-base font-semibold text-white group-hover/fact:text-accent-cyan-300 transition-colors">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>
    </section>
  );
}
