import { motion, type Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "School Management System",
      company: "Reliance International Collage",
      shortDescription: "A vast system to manage school progress, students, and staff, saving information securely.",
      detailedDescription:
        "Developed a comprehensive school management system for Reliance International School, implementing modules for examination management, fee tracking, class management, grade management, user management, messaging, and mailing. Utilized HTML, CSS, JavaScript, PHP, Bootstrap, and APIs to build and enhance the platform, ensuring continuous improvements to meet the school’s evolving needs.",
      tech: [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "JavaScript", icon: "/js.png" },
        { name: "PHP", icon: "/php.png" },
        { name: "Bootstrap", icon: "/bootstrap.png" },
      ],
      screenshots: ["/SMS/Login.png", "/SMS/Admin Panel.png", "/SMS/Teacher Dashboard.png", "/SMS/Student Dashboard.png"], // Add paths if available, e.g., ["/school1.jpg", "/school2.jpg"]
      sourceCode: "https://github.com/Perfection06/School-Management-System.git", 
    },
    {
      title: "Theater Management System",
      company: "Savoy Cinema",
      shortDescription: "A system to browse movies and reserve seats efficiently.",
      detailedDescription:
        "Built a theater management system for Savoy Cinema, allowing users to browse movies, view showtimes, and reserve seats online. Integrated features for seat selection, payment processing, and admin management of movie listings. Developed using HTML, CSS, PHP, and MySQL for a robust backend and user-friendly frontend.",
      tech: [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "PHP", icon: "/php.png" },
        { name: "MySQL", icon: "/MySQL.png" },
      ],
      screenshots: ["/savoyCinema/Admin Panel.jpg", "/savoyCinema/Home.jpg", "/savoyCinema/Login.png", "/savoyCinema/Movie Booking.png"], // Add paths if available
      sourceCode: "https://github.com/Perfection06/Theater-Management-System.git", 
    },
    {
      title: "Tutor Management System",
      company: "Own Project",
      shortDescription: "A tutor portal to manage students, share materials, and more.",
      detailedDescription:
        "Created a personal tutor management system as an own project, featuring student registration, material sharing, progress tracking, and communication tools. Implemented with HTML, CSS, Tailwind CSS, PHP, and MySQL for a modern, responsive interface and secure backend.",
      tech: [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "Tailwind CSS", icon: "/Tailwind CSS.png" },
        { name: "PHP", icon: "/php.png" },
        { name: "MySQL", icon: "/MySQL.png" },
      ],
      screenshots: ["/TMS/Login.png", "/TMS/Admin Panel.png", "/TMS/Class Student.png", "/TMS/Course Student.png"], 
      sourceCode: "https://github.com/Perfection06/Tutor-Management-System---Individual.git", 
    },
    {
      title: "Computer Shop System",
      company: "Assignment",
      shortDescription: "A system to manage inventory, orders, and supplier quotations for computer items.",
      detailedDescription:
        "Developed as an assignment, this computer shop system handles inventory management, order processing, and supplier interactions through quotations. Features include stock tracking, purchase orders, sales reporting, and supplier database. Built using Java, C#, or ASP.Net with Microsoft SQL Server for data management.",
      tech: [
        { name: "Java", icon: "/java.png" },
        { name: "C#", icon: "/c-sharp.png" },
        { name: "Microsoft SQL Server", icon: "/Microsoft SQL Server.png" },
      ],
      screenshots: ["/TechFix/Login.png", "/TechFix/Admin Dashboard.png", "/TechFix/Manager Dashboard.png", "/TechFix/Supplier Dashboard.png"], // Add paths if available
      sourceCode: "https://github.com/Perfection06/Techfix---Computer-Shop-System.git", // Replace with actual GitHub link
    },
    {
      title: "Salon System",
      company: "Assignment",
      shortDescription: "A system for online bookings, product management, and shop data tracking.",
      detailedDescription:
        "Created as an assignment, the salon system enables online appointment bookings, product inventory management, and tracking of shop operations data. Includes features for customer profiles, service scheduling, payment integration, and analytics. Developed with PHP, Laravel, Bootstrap, and MySQL for a user-friendly interface and secure backend.",
      tech: [
        { name: "PHP", icon: "/php.png" },
        { name: "Laravel", icon: "/Laravel.png" },
        { name: "Bootstrap", icon: "/bootstrap.png" },
        { name: "MySQL", icon: "/MySQL.png" },
      ],
      screenshots: ["/Saloon/Home.png", "/Saloon/Admin Panel.png", "/Saloon/Staff Dashboard.png", "/Saloon/Customer Panel.png"], // Add paths if available
      sourceCode: "https://github.com/Perfection06/Ivory-Glow---Saloon-Management-System.git", // Replace with actual GitHub link
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const glowVariants: Variants = {
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

  const headingVariants: Variants = {
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

  const imageSplitVariants: Variants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -50 : 50,
      y: Math.floor(i / 2) === 0 ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const imagePreviewVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        type: "spring" as const,
        bounce: 0.3,
      },
    },
  };

  const glowBorderVariants: Variants = {
    hidden: { boxShadow: "0 0 0 rgba(239, 68, 68, 0)" },
    visible: {
      boxShadow: "0 0 20px rgba(239, 68, 68, 0.6)",
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <section
      id="projects"
      className="w-full py-16 bg-black text-white flex justify-center relative overflow-hidden"
    >
      {/* Simplified Background: Subtle Gradient */}
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
              ease: "easeInOut" as const,
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
          viewport={{ amount: 0.3 }}
        >
          My Projects
        </motion.h2>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {projects.map((proj, index) => (
            <React.Fragment key={index}>
              {/* Detail Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    variants={itemVariants}
                    className="p-4 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-red-500/40 cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glowing Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      variants={glowVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ amount: 0.3 }}
                    />

                    {/* Image Preview for Screenshot Modal */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          className="relative h-40 bg-gray-700 rounded-md overflow-hidden mb-4 cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {proj.screenshots[0] ? (
                            <img
                              src={proj.screenshots[0]}
                              alt={proj.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full text-gray-400">
                              Screenshot Placeholder
                            </div>
                          )}
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent
                        className="bg-gray-900 text-white border border-red-500 max-w-[95vw] max-h-[95vh] overflow-y-auto p-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <DialogHeader>
                            <DialogTitle className="text-red-500 text-xl md:text-2xl">
                              Screenshots for {proj.title}
                            </DialogTitle>
                          </DialogHeader>
                          {/* Image Grid with Split Animation */}
                          <div className="mt-6 grid grid-cols-2 gap-4">
                            {Array.from({ length: 4 }).map((_, idx) => (
                              <Dialog key={idx}>
                                <DialogTrigger asChild>
                                  <motion.div
                                    custom={idx}
                                    variants={imageSplitVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative h-40 bg-gray-700 rounded-md overflow-hidden cursor-pointer"
                                    whileHover={{
                                      scale: 1.05,
                                      rotate: 2,
                                      boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
                                      transition: { duration: 0.3 },
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {proj.screenshots[idx] ? (
                                      <img
                                        src={proj.screenshots[idx]}
                                        alt={`Screenshot ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                                        No Screenshot
                                      </div>
                                    )}
                                  </motion.div>
                                </DialogTrigger>
                                <DialogContent
                                  className="bg-gray-900 text-white border border-red-500 max-w-[95vw] max-h-[95vh] flex flex-col items-center justify-center p-4"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <motion.div
                                    variants={imagePreviewVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="relative max-w-[90vw] max-h-[80vh]"
                                  >
                                    <motion.div
                                      className="absolute inset-0"
                                      variants={glowBorderVariants}
                                      initial="hidden"
                                      animate="visible"
                                    />
                                    {proj.screenshots[idx] ? (
                                      <motion.img
                                        src={proj.screenshots[idx]}
                                        alt={`Preview ${idx + 1}`}
                                        className="max-w-[90vw] max-h-[80vh] object-contain rounded-md"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    ) : (
                                      <div className="flex items-center justify-center max-w-[90vw] max-h-[80vh] text-gray-400 bg-gray-700 rounded-md">
                                        No Screenshot
                                      </div>
                                    )}
                                  </motion.div>
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        </motion.div>
                      </DialogContent>
                    </Dialog>

                    {/* Project Info */}
                    <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{proj.company}</p>
                    <p className="text-gray-300 text-sm mb-4">{proj.shortDescription}</p>

                    {/* Removed Source Code Button from Card */}
                  </motion.div>
                </DialogTrigger>
                <DialogContent
                  className="bg-gray-900 text-white border border-red-500 max-w-2xl overflow-y-auto max-h-[80vh] p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-red-500 text-xl md:text-2xl">
                        {proj.title} - {proj.company}
                      </DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {proj.shortDescription}
                      </DialogDescription>
                    </DialogHeader>
                    <p className="text-gray-300 mt-4 text-sm md:text-base">{proj.detailedDescription}</p>

                    {/* Tech Stack */}
                    <div className="mt-4">
                      <h4 className="text-red-500 font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((t, idx) => (
                          <div key={idx} className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded-md">
                            <img src={t.icon} alt={t.name} className="w-4 h-4" />
                            <span className="text-gray-300 text-xs">{t.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Source Code Button in Detail Modal */}
                    <div className="mt-4 flex justify-center">
                      <a
                        href={proj.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-red-500 text-red-500 rounded-md text-sm hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                      >
                        Source Code
                      </a>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}