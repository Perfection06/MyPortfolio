import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Code2, Database, Paintbrush } from "lucide-react";

export default function About() {
  // Animation variants for left-right split
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillIcons = [
    { name: "HTML", icon: Code2 },
    { name: "CSS", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Bootstrap", icon: Code2 },
    { name: "Tailwind CSS", icon: Code2 },
    { name: "React JS", icon: Code2 },
    { name: "PHP", icon: Code2 },
    { name: "Laravel", icon: Code2 },
    { name: "Python", icon: Code2 },
    { name: "C#", icon: Code2 },
    { name: "ASP.Net", icon: Code2 },
    { name: "Java", icon: Code2 },
    { name: "C++", icon: Code2 },
    { name: "Microsoft SQL Server", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "SQL Lite", icon: Database },
    { name: "MongoDB", icon: Database },
    { name: "Figma", icon: Paintbrush },
    { name: "Canva", icon: Paintbrush },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white flex justify-center relative overflow-hidden pt-20"
    >
      {/* Background: Subtle waves and sparkles */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 w-[200%] h-full wave-bg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(239, 68, 68, 0.1)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,0,320Z"
          />
        </svg>
        {[...Array(5)].map((_, i) => (
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

      <motion.div
        className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left: Centered Portrait Photo */}
        <motion.div
          variants={leftVariants}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-red-500 neon-pulse overflow-hidden group">
            <motion.img
              src="/myImage.jpg"
              alt="Najad Mohommed"
              className="w-full h-full object-contain scale-110"
              whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.5 } }}
            />
          </div>
        </motion.div>

        {/* Right: Tabs with Summary, Education, Skills */}
        <motion.div variants={rightVariants} className="space-y-6">
          <h2 className="text-4xl font-bold text-red-500 text-center md:text-left">
            Who I Am
          </h2>

          <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto md:mx-0 bg-black/50 backdrop-blur-md">
              <TabsTrigger value="summary" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Summary
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                Skills
              </TabsTrigger>
            </TabsList>

            {/* Summary Tab */}
            <TabsContent value="summary" className="mt-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-black/50 backdrop-blur-md rounded-lg text-gray-300"
              >
                <p className="text-lg mb-4">
                  I'm Najad Mohommed, a passionate full-stack software developer from Ratnapura, Sri Lanka, driven by a love for crafting innovative, high-performance digital solutions. With expertise spanning web and desktop applications, I thrive on turning complex challenges into seamless user experiences using technologies like HTML, CSS, JavaScript, PHP, Laravel, Python, Java, and C++.
                </p>
                <p className="text-lg">
                  Beyond coding, I've successfully completed over 50 freelance projects, delivering assignments and systems with a focus on quality, originality, and timely delivery. My work includes school management systems, theater booking platforms, and more, always aiming to exceed expectations. I'm committed to continuous learning and pushing the boundaries of what's possible in software engineering.
                </p>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="mt-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300">
                  My academic journey at ICBT, Colombo, equipped me with a strong foundation in software engineering and practical skills in building real-world applications.
                </p>
                {[
                  {
                    title: "Higher National Diploma in Computing and Software Engineering",
                    institution: "ICBT, Colombo",
                    date: "November 2024",
                    description: "Developed advanced skills in software design, full-stack development, and project management through hands-on projects and industry-relevant coursework.",
                  },
                  {
                    title: "Diploma in Information Communication and Technology",
                    institution: "ICBT, Colombo",
                    date: "November 2021",
                    description: "Gained foundational knowledge in IT systems, programming, and database management, laying the groundwork for my career in software development.",
                  },
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.3 }}
                    className="p-6 bg-black/50 backdrop-blur-md rounded-lg flex items-start gap-4"
                  >
                    <GraduationCap size={24} className="text-red-500" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-gray-400">{edu.date}</p>
                      <p className="text-gray-400 mt-2">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-black/50 backdrop-blur-md rounded-lg"
              >
                <p className="text-lg text-gray-300 mb-4">
                  My versatile skill set spans web and desktop development, database management, and UI/UX design, enabling me to build comprehensive solutions for diverse challenges.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {skillIcons.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center p-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-all hover:scale-105"
                      title={skill.name}
                    >
                      <skill.icon size={32} className="text-red-400" />
                      <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}