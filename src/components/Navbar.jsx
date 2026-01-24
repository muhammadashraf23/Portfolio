"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-accent-purple-900/30 glass-container z-50 px-10 border-b border-accent-purple-500/20">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about"
          className="h-auto w-auto flex flex-row items-center group"
        >
          <Image
            src="/images/logo.PNG"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-spin-slow rounded-full"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300 group-hover:text-gradient transition-colors">
            Muhammad Ashraf
          </span>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-accent-purple-500/30 bg-background/50 backdrop-blur-sm mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="#about" className="cursor-pointer hover:text-accent-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="cursor-pointer hover:text-accent-cyan-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer hover:text-accent-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="cursor-pointer hover:text-accent-cyan-400 transition-colors">
              Experience
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <a href="/resume.pdf" download className="text-white cursor-pointer hover:text-accent-cyan-400 transition-colors font-medium">
            Resume
          </a>
          <a href="https://github.com/muhammadashraf23" target="_blank" rel="noreferrer" className="text-white cursor-pointer hover:text-accent-cyan-400 transition-colors font-medium">
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white cursor-pointer text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[65px] left-0 w-full glass-card border-b border-accent-purple-500/30 p-5 flex flex-col gap-4 text-white md:hidden"
        >
          <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-cyan-400 transition-colors">About</Link>
          <Link href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-cyan-400 transition-colors">Skills</Link>
          <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-cyan-400 transition-colors">Projects</Link>
          <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-accent-cyan-400 transition-colors">Experience</Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
