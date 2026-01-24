'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "muhammadashraf2921323@gmail.com", href: "mailto:muhammadashraf2921323@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "+92 327 2003387", href: "tel:+923272003387" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Karachi, Pakistan", href: "#" },
  ];

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/muhammadashraf23" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammadashrafz23/" },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 text-white relative z-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan-900/20 via-background to-accent-purple-900/20 z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.15),transparent_50%)] z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-4 max-w-2xl mx-auto text-base md:text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
        <p className="text-center text-accent-cyan-400 mb-10 md:mb-16 text-xs md:text-sm font-medium uppercase tracking-widest">
          ⚡ I'll respond within 24 hours
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="glass-card p-6 md:p-8 rounded-3xl shadow-glow-purple order-2 lg:order-1"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 px-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border-2 border-accent-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan-500 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 px-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border-2 border-accent-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan-500 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 px-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-background border-2 border-accent-purple-500/30 rounded-xl px-4 py-2 md:py-3 focus:outline-none focus:border-accent-cyan-500 transition-colors text-white"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 px-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-background border-2 border-accent-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-cyan-500 transition-colors text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-primary text-white font-bold rounded-xl shadow-glow-purple hover:shadow-glow-cyan transition-all hover:scale-[1.02] active:scale-95"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>

          {/* Contact Details */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2 px-2 md:px-0">
            <AnimatedSection
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 md:gap-6 p-4 md:p-6 glass-card rounded-2xl border-transparent hover:border-accent-cyan-500 hover:shadow-glow-cyan transition-all group"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow-purple group-hover:scale-110 transition-transform">
                      <item.icon className="text-xl md:text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm md:text-lg font-semibold text-white group-hover:text-accent-cyan-400 transition-colors break-words">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient-secondary text-center lg:text-left">Social Channels</h3>
              <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl glass-card flex items-center justify-center border-accent-purple-500/30 hover:border-accent-cyan-500 hover:shadow-glow-cyan transition-all hover:scale-110 text-white hover:text-accent-cyan-400 shadow-glow-purple"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl md:text-2xl" />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
