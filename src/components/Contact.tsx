import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

export default function Contact() {
  const contactDetails = {
    name: "Najad Mohommed",
    tagline: "Passionate Software Developer",
    email: "najadmohommed@gmail.com",
    phone: "+94 76 906 8534",
    location: "130/1, River Side Road, Ratnapura",
    mapEmbed: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.003850363572!2d80.39701737464096!3d6.682782393304835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3bf2b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRiver%20Side%20Rd%2C%20Ratnapura!5e0!3m2!1sen!2slk!4v1725508800" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    social: {
      github: "https://github.com/Perfection06",
      linkedin: "https://www.linkedin.com/in/mohommed-najad-ab2440284/",
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
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

  return (
    <section
      id="contact"
      className="w-full py-20 bg-black text-white flex justify-center relative overflow-hidden"
    >
      {/* Background Gradient and Animated Shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black"></div>
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-red-400/30 rounded-full opacity-50"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0.6, 1.4, 0.6],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut" as const,
              delay: Math.random() * 2,
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />
      </div>

      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Hero and Contact Details */}
        <div className="space-y-12">
          <motion.div
            className="p-10 bg-gray-900/80 backdrop-blur-md rounded-xl border border-red-500/40 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(239, 68, 68, 0.6)" }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-red-500 mb-4"
              variants={headingVariants}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              {contactDetails.tagline}
            </motion.p>
            <motion.h3
              className="text-3xl font-bold text-white mt-4"
              variants={itemVariants}
            >
              {contactDetails.name}
            </motion.h3>
          </motion.div>

          <motion.div
            className="p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-red-500/40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-red-500 mb-6"
              variants={headingVariants}
            >
              Contact Me
            </motion.h3>
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-red-500/10 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)" }}
              >
                <Mail size={24} className="text-red-500" />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactDetails.email}
                </a>
              </motion.div>
              <motion.div
                className="flex items-center gap-4 p-4 bg-black/50 rounded-lg hover:bg-red-500/10 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)" }}
              >
                <Phone size={24} className="text-red-500" />
                <a
                  href={`tel:${contactDetails.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactDetails.phone}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Social Icons and Map */}
        <div className="space-y-12">
          <motion.div
            className="p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-red-500/40 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <motion.h3
              className="text-2xl font-bold text-red-500 mb-6"
              variants={headingVariants}
            >
              Connect With Me
            </motion.h3>
            <div className="flex justify-center gap-8">
              <motion.a
                href={contactDetails.social.github}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotateX: 20, rotateY: 20, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={32} className="text-red-500 hover:text-red-300" />
              </motion.a>
              <motion.a
                href={contactDetails.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotateX: 20, rotateY: 20, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={32} className="text-red-500 hover:text-red-300" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="p-8 bg-gray-900/80 backdrop-blur-md rounded-xl border border-red-500/40"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
          >
            <motion.h3
              className="text-2xl font-bold text-red-500 mb-6"
              variants={headingVariants}
            >
              My Location
            </motion.h3>
            <div
              className="rounded-lg overflow-hidden border-2 border-red-500/40"
              dangerouslySetInnerHTML={{ __html: contactDetails.mapEmbed }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}