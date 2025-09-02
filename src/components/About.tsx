import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";

export default function About() {
  // Animation variants for left-right split

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

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "HTML", icon: "/html.png", className: "icon-html" },
        { name: "CSS", icon: "/css.png", className: "icon-css" },
        { name: "JavaScript", icon: "/js.png", className: "icon-javascript" },
        { name: "PHP", icon: "/php.png", className: "icon-php" },
        { name: "Python", icon: "/python.png", className: "icon-python" },
        { name: "C#", icon: "/c-sharp.png", className: "icon-csharp" },
        { name: "Java", icon: "/java.png", className: "icon-java" },
        { name: "C++", icon: "/C++.png", className: "icon-cpp" },
      ],
    },
    {
      category: "Frameworks/Libraries",
      skills: [
        { name: "Bootstrap", icon: "/bootstrap.png", className: "icon-bootstrap" },
        { name: "Tailwind CSS", icon: "/Tailwind CSS.png", className: "icon-tailwind" },
        { name: "React JS", icon: "/React.png", className: "icon-react" },
        { name: "Laravel", icon: "/Laravel.png", className: "icon-laravel" },
        { name: "ASP.Net", icon: "/NET.png", className: "icon-dotnet" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "Microsoft SQL Server", icon: "/Microsoft SQL Server.png", className: "icon-mssql" },
        { name: "MySQL", icon: "/MySQL.png", className: "icon-mysql" },
        { name: "SQL Lite", icon: "/SQLite.png", className: "icon-sqlite" },
        { name: "MongoDB", icon: "/MongoDB.png", className: "icon-mongodb" },
      ],
    },
    {
      category: "UI/UX",
      skills: [
        { name: "Figma", icon: "/Figma.png", className: "icon-figma" },
        { name: "Canva", icon: "/Canva.png", className: "icon-canva" },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white flex justify-center relative overflow-hidden pt-20 pb-10"
    >
      {/* Background: Subtle waves at top and sparkles */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 w-[200%] h-1/2 wave-bg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(239, 68, 68, 0.1)"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,0,0Z"
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

      <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
        {/* Left: Centered Portrait Photo */}
        <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            // Add this to prevent re-animation on updates
            key="portrait-image"
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
        <motion.div variants={rightVariants} initial="hidden" animate="visible" className="space-y-6">
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

            {/* Tabs Content Wrapper for Fixed Height */}
            <div className="min-h-[500px] mt-6">
              {/* Summary Tab */}
              <TabsContent value="summary">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-black/50 backdrop-blur-md rounded-lg text-gray-300"
                >
                  <p className="text-lg mb-4">
                    I'm Najad Mohommed, a passionate full-stack software developer from Ratnapura, Sri Lanka, dedicated to building innovative, high-performance digital solutions. My expertise spans web and desktop applications, leveraging technologies like HTML, CSS, JavaScript, PHP, Laravel, Python, Java, and C++ to create seamless user experiences.
                  </p>
                  <p className="text-lg">
                    As a freelancer since September 2024, I’ve completed over 50 projects, delivering robust solutions for clients, including web and desktop applications, system optimizations, and technical documentation. My commitment to quality, creativity, and timely delivery drives me to exceed expectations while continuously honing my skills in the ever-evolving tech landscape.
                  </p>
                </motion.div>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-gray-300">
                    My academic journey at ICBT, Colombo, provided a solid foundation in software engineering, equipping me with practical skills to tackle real-world challenges through hands-on projects and industry-aligned coursework.
                  </p>
                  {[
                    {
                      title: "Higher National Diploma in Computing and Software Engineering",
                      institution: "ICBT, Colombo",
                      date: "November 2024",
                      description: "Mastered advanced concepts in full-stack development, software design, and project management, applying them to real-world projects that enhanced my technical and problem-solving skills.",
                    },
                    {
                      title: "Diploma in Information Communication and Technology",
                      institution: "ICBT, Colombo",
                      date: "November 2021",
                      description: "Built a strong foundation in IT systems, programming fundamentals, and database management, paving the way for my career in software development.",
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
              <TabsContent value="skills">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-black/50 backdrop-blur-md rounded-lg"
                >
                  
                  {skillCategories.map((category, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-xl font-semibold text-red-500 mb-2">{category.category}</h3>
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                        {category.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center p-2 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-all hover:scale-105"
                            title={skill.name}
                          >
                            <img src={skill.icon} alt={skill.name} className={`w-8 h-8 ${skill.className}`} />
                            <span className="text-xs text-gray-300 mt-1">{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}