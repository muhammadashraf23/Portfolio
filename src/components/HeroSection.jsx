"use client";

import { motion } from "framer-motion";
import Scene from "./canvas/Scene";
import { FaReact, FaVuejs, FaNodeJs, FaDatabase } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col h-full w-full bg-[#050014] overflow-hidden" id="about">

      {/* Cyber Grid Pattern Background */}
      <div className="bg-cyber-grid pointer-events-none opacity-60"></div>

      {/* Full Screen 3D Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <Scene />
      </div>

      {/* Content Overlay */}
      <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 md:px-20 z-[20] pt-[120px] pb-[100px]">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full max-w-5xl mt-8"
        >
          {/* Subtitle */}
          <span className="text-accent-cyan font-bold font-orbitron tracking-[0.2em] md:tracking-[0.3em] text-sm md:text-md uppercase mb-2 md:mb-4 text-glow-cyan text-center">
            FULL STACK DEVELOPER
          </span>

          {/* Main Title */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-[6rem] lg:text-[7rem] font-black text-white leading-[1.05] mb-6 uppercase md:tracking-wide text-glow-purple font-orbitron">
            HI, I'M MUHAMMAD<br />ASHRAF
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-center max-w-[700px] text-sm md:text-base mb-10 leading-relaxed px-4 opacity-90 drop-shadow-md">
            I build modern, scalable web and mobile applications using cutting-edge technologies. 
            Specialized in React, Vue, Node.js, and databases. Passionate about creating exceptional user experiences.
          </p>

          {/* Skills Row */}
          <div className="flex flex-col items-center mb-12 w-full mt-2">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-6 tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] font-orbitron">Skills</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-skill-card bg-[rgba(20,10,40,0.6)] backdrop-blur-xl border border-[#a855f7]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(168,85,247,0.2)] rounded-[20px] w-[100px] h-[110px] md:w-[130px] md:h-[140px] flex flex-col items-center justify-center cursor-default group"
              >
                <div className="relative mb-3">
                   <div className="absolute inset-0 bg-[#06b6d4] blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
                   <FaReact className="text-[#06b6d4] text-[2.5rem] md:text-[3.5rem] relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,1)] transition-all" />
                </div>
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md">React</span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-skill-card bg-[rgba(20,10,40,0.6)] backdrop-blur-xl border border-[#a855f7]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(168,85,247,0.2)] rounded-[20px] w-[100px] h-[110px] md:w-[130px] md:h-[140px] flex flex-col items-center justify-center cursor-default group"
              >
                <div className="relative mb-3">
                   <div className="absolute inset-0 bg-[#4ade80] blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
                   <FaVuejs className="text-[#4ade80] text-[2.5rem] md:text-[3.5rem] relative z-10 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(74,222,128,1)] transition-all" />
                </div>
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md">Vue.js</span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-skill-card bg-[rgba(20,10,40,0.6)] backdrop-blur-xl border border-[#a855f7]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(168,85,247,0.2)] rounded-[20px] w-[100px] h-[110px] md:w-[130px] md:h-[140px] flex flex-col items-center justify-center cursor-default group"
              >
                <div className="relative mb-3">
                   <div className="absolute inset-0 bg-[#84cc16] blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
                   <FaNodeJs className="text-[#84cc16] text-[2.5rem] md:text-[3.5rem] relative z-10 drop-shadow-[0_0_8px_rgba(132,204,22,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(132,204,22,1)] transition-all" />
                </div>
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md">Node.js</span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-skill-card bg-[rgba(20,10,40,0.6)] backdrop-blur-xl border border-[#a855f7]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(168,85,247,0.2)] rounded-[20px] w-[100px] h-[110px] md:w-[130px] md:h-[140px] flex flex-col items-center justify-center cursor-default group"
              >
                <div className="relative mb-3">
                   <div className="absolute inset-0 bg-[#e2e8f0] blur-xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity"></div>
                   <FaDatabase className="text-[#e2e8f0] text-[2.5rem] md:text-[3.5rem] relative z-10 drop-shadow-[0_0_8px_rgba(226,232,240,0.8)] group-hover:drop-shadow-[0_0_15px_rgba(226,232,240,1)] transition-all" />
                </div>
                <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md">Databases</span>
              </motion.div>

            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center font-orbitron tracking-widest mt-2">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#8b31ea] to-[#b354f3] text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)]"
            >
              GET IN TOUCH
            </a>
            <a
              href="#projects"
              className="border border-[#a855f7]/70 text-gray-200 px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-sm hover:text-white hover:bg-[#a855f7]/10 transition-colors shadow-[0_0_15px_rgba(168,85,247,0.2),inset_0_0_15px_rgba(168,85,247,0.1)]"
            >
              VIEW PROJECTS
            </a>
          </div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#skills" className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 md:w-[22px] md:h-9 border-[1.5px] border-gray-400 rounded-full flex justify-center p-1"
            >
              <div className="w-[3px] h-2 bg-gray-400 rounded-full mt-[2px]" />
            </motion.div>
          </a>
        </motion.div>

      </section>
    </div>
  );
}
