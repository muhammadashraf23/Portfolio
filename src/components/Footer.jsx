import Image from 'next/image';
import { contact } from "@/data/contact";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 py-12 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple-900/30 via-background to-background z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.PNG"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl text-gradient">Muhammad Ashraf</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Full Stack Developer specializing in MERN stack and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4 text-gradient-secondary">Quick Links</h3>
            <div className="flex flex-col gap-2 text-gray-400">
              <a href="#about" className="hover:text-accent-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-accent-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-accent-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-accent-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg mb-4 text-gradient-secondary">Connect</h3>
            <div className="flex gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} Muhammad Ashraf. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, React Three Fiber & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
