import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Mail,
  Menu,
  X,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hireMeBtnRef = useRef<HTMLButtonElement | null>(null);

  // shrink effect on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver for highlighting active section
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (!sections.length) return;

    const options = {
      root: null,
      rootMargin: "-40% 0px -55% 0px", // trigger when near center
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
      if (visible.length > 0) {
        setActiveLink(`#${visible[0].target.id}`);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    sections.forEach((s) => observer.observe(s));

    // initial check
    const init = sections.find((s) => {
      const rect = s.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.2
      );
    });
    if (init) setActiveLink(`#${init.id}`);

    return () => observer.disconnect();
  }, []);

  const menuItems = [
    { href: "#home", icon: Home, label: "Home" },
    { href: "#about", icon: User, label: "About" },
    { href: "#experience", icon: Briefcase, label: "Experience" },
    { href: "#projects", icon: FolderGit2, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" },
  ];

  const contactDetails = {
    phone: "+94 76 906 8534",
    email: "najadmohommed@gmail.com",
  };

  const handleNavClick = (href: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsOpen(false);
    const el = document.querySelector<HTMLElement>(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveLink(href);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 backdrop-blur-lg bg-black/50"
          : "py-4 backdrop-blur-md bg-black/30"
      } border-b border-red-500/20 shadow-md shadow-red-500/10`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Sparkles */}
      <motion.div
        className="absolute top-2 left-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-2 right-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-2 left-2 w-1 h-1 bg-red-400 rounded-full"
        animate={{ scale: [0.3, 0.8, 0.3], opacity: [0.1, 0.5, 0.1] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-mono font-bold text-white"
          onClick={handleNavClick("#home")}
        >
          <span className="text-red-500">Najad</span> Mohommed
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = activeLink === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-2 text-lg font-semibold transition-colors relative group ${
                  isActive
                    ? "text-red-500 font-bold"
                    : "text-gray-200 hover:text-red-400"
                }`}
              >
                <item.icon size={18} />
                {item.label}
                <span
                  className={`absolute bottom-[-4px] left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          <Button
            ref={hireMeBtnRef}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-shadow"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
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
              <X
                size={24}
                className="rotate-180 transition-transform duration-300"
              />
            ) : (
              <Menu
                size={24}
                className="rotate-0 transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  handleNavClick(item.href)(e);
                }}
                className={`flex items-center gap-2 text-lg font-semibold transition-colors ${
                  activeLink === item.href
                    ? "text-red-500 font-bold"
                    : "text-gray-200 hover:text-red-400"
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-500/50 transition-shadow"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                setIsModalOpen(true);
              }}
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}

      {/* Hire Me Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-[200px] bg-gray-900/80 backdrop-blur-xl border border-red-500/30 p-8 rounded-2xl shadow-xl w-full max-w-md text-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 100,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-red-500 hover:scale-110 transition-transform"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={26} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-4">
              Let’s Connect 🚀
            </h2>
            <p className="text-gray-300 mb-6">
              Choose your preferred way to contact me:
            </p>

            <div className="flex justify-center gap-14 mt-4">
              <motion.a
                href={`tel:${contactDetails.phone}`}
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-200 hover:text-red-500"
              >
                <PhoneIcon size={56} />
              </motion.a>
              <motion.a
                href={`mailto:${contactDetails.email}`}
                onClick={() => setIsModalOpen(false)}
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-200 hover:text-red-500"
              >
                <MailIcon size={56} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}
