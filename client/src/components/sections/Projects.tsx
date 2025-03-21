import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// Extended project data with more details
const projects = [
  {
    title: "Solar System Explorer",
    description:
      "An interactive display of the solar system with detailed information on planets - which allows users to compare planets to each other based on their properties.",
    longDescription:
      "I developed a small interactive web application with the intent of using educating myself how to design and program what I envision. In this case, an ethetic web application that uses comparison data between planets and neatly structure the differences in an engaging way.",
    image: "/images/space-explorer2.png",
    technologies: ["React", "TypeScript", "Vercel", "SQL", "Chart.js"],
    github: "https://github.com",
    link: "https://solar-system-ruby-alpha.vercel.app/",
    highlights: [
      "Comparison data between planets",
      "Interactive display of the solar system",
      "Detailed information on planets",
      "Engaging way to structure differences",
    ],
  },
  {
    title: "Cuisine Connection",
    description:
      "A recipe finder designed to help users navigate and find different recipes and instructions on how to cook their preferred meal.",
    longDescription:
      "I developed Cuisine Connection, a web application designed to help users discover, save, and explore delicious recipes from around the world. The goal was to create an engaging platform that makes cooking and meal planning enjoyable and accessible for everyone.",
    image: "/images/cuisine-connection2.png",
    technologies: [
      "React",
      "TypeScript",
      "Vercel",
      "Context API",
      "Tailwind CSS",
    ],
    github: "https://github.com",
    link: "https://cuisine-connection.vercel.app/",
    highlights: [
      "Advanced search and filtering options",
      "User authentication and profile management",
      "Recipe saving and meal planning features",
      "Automated collection recipes generation",
    ],
  },
  {
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media engagement and performance metrics. Visualizes reach, engagement, and audience demographics.",
    longDescription:
      "COMING SOON: A comprehensive analytics platform that aggregates data from multiple social media platforms via their APIs. The dashboard provides actionable insights through interactive visualizations and customizable reports. Users can track metrics like reach, engagement, follower growth, and content performance over time, helping businesses optimize their social media strategy based on data-driven decisions.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: [
      "Vue.js",
      "D3.js",
      "Express",
      "MongoDB",
      "Twitter API",
      "Instagram API",
    ],
    highlights: [
      "Integration with multiple social media APIs",
      "Advanced data visualization with D3.js",
      "Customizable reporting and export options",
      "Automated weekly performance summaries",
    ],
  },
  {
    title: "Fitness Tracking App",
    description:
      "Mobile-first web application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
    longDescription:
      "COMING SOON: A fitness tracking app that helps users monitor their workouts, nutrition, and overall progress. The app features workout planning with exercise demonstrations, calorie tracking, body measurement logging, and progress visualization. It provides personalized recommendations based on user goals and integrates with popular fitness devices via their APIs.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "Chart.js",
      "Node.js",
      "Express",
    ],
    highlights: [
      "Cross-platform mobile experience",
      "Personalized workout recommendations",
      "Progress tracking with interactive charts",
      "Integration with fitness wearables",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 px-4 bg-[#112240]" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6]">
            Some Things I've Built
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-xl text-[#64FFDA] font-mono mb-4">
            Featured Project
          </h3>

          <div className="relative">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-2xl font-bold text-[#CCD6F6]">
                {projects[currentIndex].title}
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevProject}
                  className="p-2 rounded-full bg-[#233554] text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 rounded-full bg-[#233554] text-[#8892B0] hover:text-[#64FFDA] transition-colors"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                key={`image-${currentIndex}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-[#64FFDA]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-[#233554] border-none h-full">
                  <CardContent className="pt-6">
                    <p className="text-[#8892B0] mb-6">
                      {projects[currentIndex].longDescription}
                    </p>

                    <h5 className="text-[#CCD6F6] font-semibold mb-3">
                      Highlights:
                    </h5>
                    <ul className="space-y-2 mb-6">
                      {projects[currentIndex].highlights.map(
                        (highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[#8892B0]"
                          >
                            <span className="text-[#64FFDA] mt-1">▹</span>{" "}
                            {highlight}
                          </li>
                        )
                      )}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[currentIndex].technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          className="bg-[#112240] text-[#8892B0] hover:bg-[#112240]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-4">
                    <a
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <h3 className="text-xl text-[#64FFDA] font-mono mb-6">
          Other Noteworthy Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#233554] border-none h-full hover:translate-y-[-10px] transition-transform duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[#CCD6F6] mb-2">
                        {project.title}
                      </h4>
                      <p className="text-[#8892B0] text-sm mb-4">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-[#112240] text-[#8892B0] hover:bg-[#112240]"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge className="bg-[#112240] text-[#8892B0] hover:bg-[#112240]">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
