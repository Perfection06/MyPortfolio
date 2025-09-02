import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, FolderGit2, Code, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link state
  const [activeLink, setActiveLink] = useState(window.location.hash || "#home");
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Menu items with icons and labels
  const menuItems = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    { href: "#skills", icon: Code, label: "Skills" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 backdrop-blur-lg bg-black/50" : "py-4 backdrop-blur-md bg-black/30"
      } border-b border-red-500/20 shadow-md shadow-red-500/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sparkle effect in corners */}
      <motion.div
        className="absolute top-2 left-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-2 right-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-2 left-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-mono font-bold text-white">
          <span className="text-red-500">Najad</span> Mohommed
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 text-lg font-semibold text-gray-200 hover:text-red-400 transition-colors relative group ${
                activeLink === item.href ? "text-red-500 font-bold" : ""
              }`}
            >
              <item.icon size={18} />
              {item.label}
              {/* Animated underline */}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <Button className="ml-4 bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-shadow">
            Hire Me
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-gray-200 hover:text-red-400 transition-transform duration-300"
          >
            {isOpen ? (
              <X size={24} className="rotate-180 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="rotate-0 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-6 py-4 bg-black/90 backdrop-blur-md border-t border-red-500/20"
        >
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 text-lg font-semibold text-gray-200 hover:text-red-400 transition-colors ${
                  activeLink === item.href ? "text-red-500 font-bold" : ""
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            ))}
            <Button className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-shadow">
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}