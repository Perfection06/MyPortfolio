import { motion } from "framer-motion";
import { Briefcase, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Experience() {
  const experiences = [
    {
      title: "Freelancer",
      company: "Self-Employed",
      location: "Ratnapura, Sri Lanka",
      period: "September 2024 – Present",
      description:
        "Working as a freelancer, completing more than 50+ assignments and projects successfully without failure. My expertise includes documentation and research with Harvard-style referencing, accounting, business-related tasks, system development such as web applications (PHP, Laravel, Python), desktop applications (Java, C++), as well as diagrams, reports, and technical writing. I always ensure quality, originality, and on-time delivery to support students in achieving their academic goals.",
      icon: User,
      extraDetails:
        "As a versatile freelancer, I've tackled diverse projects ranging from academic support to full-scale application development. Key achievements include delivering over 50 projects on time, maintaining a 100% success rate, and receiving positive feedback for high-quality, original work. Technologies frequently used: PHP, Laravel, Python, Java, C++, and various documentation tools.",
      screenshots: [], // Add paths to screenshots if available, e.g., ["/freelance-screenshot1.jpg"]
    },
    {
      title: "Web Developer",
      company: "Reliance International School",
      location: "Ratnapura, Sri Lanka",
      period: "September 2024 – January 2025",
      description:
        "Developed a comprehensive school management system for Reliance International School in Ratnapura, implementing a wide range of features to streamline school operations. The system included modules for examination management, fee tracking, class management, grade management, user management, messaging, and mailing. Utilized HTML, CSS, JavaScript, PHP, Bootstrap, and APIs to build and enhance the platform. Dedicated to continuously improving and expanding system functionality, ensuring that the platform met the school’s evolving needs.",
      icon: Briefcase,
      extraDetails:
        "This role involved full-cycle development of a school management system, from initial design to deployment and ongoing maintenance. Highlights include integrating multiple modules for efficient operations and using APIs for enhanced functionality. The project significantly improved administrative efficiency for the school.",
      screenshots: [], // Add paths to screenshots if available, e.g., ["/school-system-screenshot1.jpg"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const glowVariants = {
    hidden: { boxShadow: "0 0 0 rgba(239, 68, 68, 0)" },
    visible: {
      boxShadow: "0 0 15px rgba(239, 68, 68, 0.4)",
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        bounce: 0.3,
      },
    },
  };

  return (
    <section
      id="experience"
      className="w-full py-16 bg-black text-white flex justify-center relative overflow-hidden"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black"></div>

      {/* Sparkling Background Animation */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [0.3, 1.2, 0.3],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-red-500 text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Trigger animation when 30% of heading is in view
        >
          Experience
        </motion.h2>

        {/* Vertical Timeline */}
        <motion.div
          className="relative flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // Trigger animation when 30% of section is in view
        >
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 w-1 bg-red-500/50"></div>

          {experiences.map((exp, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  className="relative w-full max-w-3xl my-8 p-6 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-red-500/40 hover:bg-gray-800/80 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    variants={glowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                  />

                  {/* Timeline Marker with Border */}
                  <motion.div
                    className="absolute left-3 top-8 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  {/* Content */}
                  <div className="flex items-start space-x-4 pl-10">
                    <exp.icon size={40} className="text-red-500 flex-shrink-0" />
                    <div>
                      <motion.h3
                        className="text-xl md:text-2xl font-semibold text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {exp.title} at {exp.company}
                      </motion.h3>
                      <motion.p
                        className="text-gray-400 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {exp.period} • {exp.location}
                      </motion.p>
                      <motion.p
                        className="text-gray-300 mt-2 text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {exp.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 text-white border border-red-500 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <DialogHeader>
                    <DialogTitle className="text-red-500 text-xl md:text-2xl">
                      {exp.title} at {exp.company}
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      {exp.period} • {exp.location}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-gray-300 mt-4 text-sm md:text-base">{exp.extraDetails}</p>
                  {exp.screenshots.length > 0 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {exp.screenshots.map((src, idx) => (
                        <motion.img
                          key={idx}
                          src={src}
                          alt={`Screenshot ${idx + 1}`}
                          className="rounded-lg shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.2 }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </section>
  );
}