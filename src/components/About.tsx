"use client";

import AnimatedSection from './AnimatedSection';
import Image from 'next/image';
import SectionContainer from './SectionContainer';

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
      className="py-16 md:py-24 text-[#0a0a0a] relative z-20 overflow-hidden flex flex-col justify-center items-center"
    >
      <SectionContainer>
        <article className="w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14 lg:gap-16">
            
            {/* Image Column */}
            <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
              <div className="relative group">
                {/* Subtle soft backdrop glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500/20 to-accent-cyan-500/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                
                <Image
                  src="/images/new_profile_photo.png"
                  alt="Muhammad Ashraf Profile"
                  width={300}
                  height={400}
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 360px"
                  className="w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-[420px] lg:w-[340px] lg:h-[450px] rounded-3xl shadow-xl object-cover object-top relative z-10 border border-black/10 group-hover:border-black/30 transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Text & Details Column */}
            <AnimatedSection
              className="flex-1 text-left w-full flex flex-col justify-start"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-600 mb-2 block font-orbitron">
                  Who I Am
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-tight text-[#0a0a0a]">
                  About Me
                </h2>
              </div>

              <div className="space-y-4 text-zinc-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  Full Stack Developer with expertise in building scalable, high-performance web and mobile applications.
                  I specialize in modern JavaScript frameworks including React, Vue.js, Next.js, and Nuxt, combined with
                  robust backend solutions using Node.js and both SQL and NoSQL databases.
                </p>
                <p>
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
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/70 border border-black/10 shadow-sm hover:border-black/30 hover:shadow-md transition-all group/fact"
                  >
                    <span className="text-2xl filter drop-shadow-sm" aria-hidden="true">{fact.icon}</span>
                    <div className="text-left">
                      <span className="block text-[10px] text-zinc-500 uppercase font-bold tracking-widest font-orbitron">{fact.label}</span>
                      <span className="text-sm md:text-base font-semibold text-[#0a0a0a]">{fact.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </article>
      </SectionContainer>
    </section>
  );
}
