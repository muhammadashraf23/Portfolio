"use client";

import { motion } from "framer-motion";
import Scene from "./canvas/Scene";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col h-full w-full" id="about">

      {/* Full Screen 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <Scene />
      </div>

      {/* Content Overlay */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen min-h-[600px] px-4 md:px-20 z-[20] pointer-events-none pt-[70px]">

        {/* Text Section - Centered and Interactive */}
        <div className="flex flex-col gap-4 md:gap-5 justify-center items-center text-center w-full max-w-[900px] pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-[6px] px-[12px] md:py-[8px] md:px-[10px] border border-accent-purple-500/50 opacity-[0.9] rounded-full w-fit glass-container"
          >
            <span className="text-gray-300 text-xs md:text-sm font-medium">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3 md:gap-6 mt-4 md:mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight"
          >
            <span>
              Hi, I'm{" "}
              <span className="text-gradient block sm:inline">
                Muhammad Ashraf
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base md:text-xl text-gray-400 my-4 md:my-5 max-w-[700px] leading-relaxed px-2 md:px-0"
          >
            I build modern, scalable web and mobile applications using cutting-edge technologies.
            Specialized in React, Vue, Node.js, and databases. Passionate about creating exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-3 md:gap-4 flex-wrap justify-center mt-2"
          >
            <a
              href="#contact"
              className="py-3 px-6 md:px-8 text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-all bg-gradient-primary shadow-glow-purple hover:shadow-glow-cyan font-bold text-sm md:text-base w-[160px] md:w-auto"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="py-3 px-6 md:px-8 border-2 border-accent-purple-500/50 text-white rounded-lg hover:border-accent-cyan-500 hover:bg-accent-purple-900/30 transition-all glass-container font-bold text-sm md:text-base w-[160px] md:w-auto"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        >
          <a href="#about" className="flex flex-col items-center gap-2 group">
            <span className="text-gray-400 text-sm font-medium group-hover:text-accent-cyan-400 transition-colors">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-accent-purple-500/50 rounded-full flex items-start justify-center p-2 group-hover:border-accent-cyan-500 transition-colors"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-gradient-primary rounded-full"
              />
            </motion.div>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
