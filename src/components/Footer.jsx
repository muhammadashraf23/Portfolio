import Image from 'next/image';
import { contact } from "@/data/contact";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 py-14 text-[#0a0a0a] overflow-hidden bg-gradient-to-t from-accent-purple-100/20 via-background to-background">
      {/* Background */}
      {/* Removed extra background div for cleaner look */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 max-w-6xl mx-auto glass-card p-10 rounded-3xl border border-accent-cyan-500/20 shadow-glow-cyan">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-cyan-500 rounded-full blur-md opacity-40 group-hover:opacity-80 transition-opacity"></div>
                <Image
                  src="/images/logo.PNG"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full relative z-10 border-2 border-background"
                />
              </div>
              <span className="font-bold text-2xl text-gradient font-orbitron tracking-wider">Muhammad Ashraf</span>
            </div>
            <p className="text-zinc-600 text-sm md:text-base text-center md:text-left leading-relaxed max-w-sm">
              Crafting premium digital experiences through scalable full-stack architecture and modern web design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl mb-6 text-gradient-secondary font-orbitron tracking-widest uppercase text-sm">Navigation</h3>
            <div className="flex flex-col gap-3 text-zinc-600 font-medium">
              <a href="#about" className="hover:text-accent-cyan-500 hover:translate-x-1 transition-transform">About</a>
              <a href="#skills" className="hover:text-accent-cyan-500 hover:translate-x-1 transition-transform">Skills</a>
              <a href="#projects" className="hover:text-accent-cyan-500 hover:translate-x-1 transition-transform">Projects</a>
              <a href="#experience" className="hover:text-accent-cyan-500 hover:translate-x-1 transition-transform">Experience</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-xl mb-6 text-gradient-secondary font-orbitron tracking-widest uppercase text-sm">Connect</h3>
            <div className="flex gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110 text-white border border-zinc-700 hover:border-accent-cyan-500"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110 text-white border border-zinc-700 hover:border-accent-cyan-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110 text-white border border-zinc-700 hover:border-accent-cyan-500"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 flex justify-center">
          <div className="h-[2px] w-2/3 bg-gradient-to-r from-accent-cyan-400/0 via-accent-cyan-400/40 to-accent-cyan-400/0 rounded-full" />
        </div>

        {/* Copyright */}
        <div className="text-center text-zinc-600 text-sm">
          <p>© {currentYear} Muhammad Ashraf. All rights reserved.</p>
          <p className="mt-2">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
