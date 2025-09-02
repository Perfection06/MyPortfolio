import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { Github, Linkedin, Mail, Phone, Hand } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background: Red gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black"></div>
      {/* Animated SVG wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-[200%] h-1/2 wave-bg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(239, 68, 68, 0.2)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-[200%] h-1/2 wave-bg"
          style={{ animationDelay: "-10s" }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(239, 68, 68, 0.1)"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,160C672,181,768,235,864,245.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"
          />
        </svg>
        {/* Subtle sparkling particles above waves */}
        <div className="absolute inset-0 z-10">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-red-400 rounded-full opacity-30"
              initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                scale: [0.3, 0.8, 0.3],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text with animated Hand icon */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold flex items-center justify-center md:justify-start gap-2"
          >
            Hi, I’m <span className="text-red-500">Najad</span>
            <Hand className="wave-hand w-12 h-12 text-red-500" />
          </motion.h1>

          <AnimatedText
            text="Innovative Full-Stack Software Engineer & Dynamic Web Architect"
            className="text-xl md:text-2xl text-gray-300"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-400 max-w-lg"
          >
            Crafting cutting-edge digital experiences with mastery in modern tech stacks. From sleek responsive interfaces to robust backend systems, I turn complex challenges into seamless, high-performance solutions that drive real impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition"
            >
              View My Work
            </a>
            <a
              href="/MyCv.pdf"
              download
              className="px-6 py-3 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-4 flex justify-center md:justify-start gap-4"
          >
            <a href="https://github.com/Perfection06" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mohommed-najad-ab2440284/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:najadmohommed@gmail.com" className="text-red-500 hover:text-red-300">
              <Mail size={24} />
            </a>
            <a href="tel:+94769068534" className="text-red-500 hover:text-red-300">
              <Phone size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.7)] overflow-hidden animate-bounce-slow hover:scale-105 transition-transform duration-500">
            <img
              src="/myImage.jpg"
              alt="Najad"
              className="w-full h-full object-contain scale-110"
            />
            {/* Glowing breathing border */}
            <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 w-full flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-red-500 text-3xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}