"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="w-full h-[70px] fixed top-0 shadow-lg shadow-accent-purple-900/30 glass-container z-[100] px-4 md:px-10 border-b border-accent-purple-500/20">
      <div className="max-w-7xl h-full flex flex-row items-center justify-between mx-auto">
        <Link
          href="#about"
          className="h-auto w-auto flex flex-row items-center group z-50"
        >
          <Image
            src="/images/logo.PNG"
            alt="logo"
            width={35}
            height={35}
            className="cursor-pointer hover:animate-spin-slow rounded-full md:w-[40px] md:h-[40px]"
          />
          <span className="font-bold ml-[10px] hidden sm:block text-gray-300 group-hover:text-gradient transition-colors">
            Muhammad Ashraf
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 max-w-[500px] mx-4">
          <div className="flex items-center justify-between w-full h-auto border border-accent-purple-500/30 bg-background/50 backdrop-blur-sm px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="cursor-pointer hover:text-accent-cyan-400 transition-colors text-sm lg:text-base px-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          <a href="/resume.pdf" download className="text-white cursor-pointer hover:text-accent-cyan-400 transition-colors font-medium border border-accent-purple-500/30 px-4 py-1.5 rounded-full bg-accent-purple-900/10 text-sm">
            Resume
          </a>
          <a href="https://github.com/muhammadashraf23" target="_blank" rel="noreferrer" className="text-white cursor-pointer hover:text-accent-cyan-400 transition-colors font-medium text-sm">
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white cursor-pointer p-2 z-50 rounded-lg bg-accent-purple-900/20 border border-accent-purple-500/30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <span className="text-2xl block w-6 text-center">✕</span>
          ) : (
            <span className="text-2xl block w-6 text-center">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0118] z-40 md:hidden flex flex-col items-center justify-center gap-8 p-10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-white font-bold hover:text-accent-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 w-full mt-4">
              <a
                href="/resume.pdf"
                download
                className="w-full text-center py-4 bg-gradient-primary rounded-xl text-white font-bold"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/muhammadashraf23"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-4 border border-accent-purple-500/30 rounded-xl text-white font-bold"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
