import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Lightbulb,
} from "lucide-react";

// Updated timeline data with your actual experience
const timeline = [
  {
    date: "2024 - Present",
    title: "Digital Arts Graduate",
    company: "University of the Witwatersrand",
    location: "Johannesburg, South Africa",
    description:
      "Transitioning from education to professional work while continuing to build personal projects and improve my skills.",
    details: [
      "Expected to graduate with a Digital Arts degree from Wits University",
      "Focusing on expanding my portfolio with meaningful projects",
      "Learning advanced frontend technologies and design systems",
      "Actively seeking entry-level opportunities in web development and digital design",
    ],
    type: "education",
    icon: GraduationCap,
    year: 2024,
  },
  {
    date: "2024",
    title: "UniHub Platform",
    company: "Personal Project",
    location: "Johannesburg, South Africa",
    description:
      "Developed a comprehensive platform for university students to find resources, connect with peers, and access academic tools.",
    details: [
      "Built with React and Next.js for a seamless, responsive user experience",
      "Implemented user authentication and profile management features",
      "Created a resource-sharing system for students to exchange study materials",
      "Designed an intuitive, accessible UI following modern design principles",
    ],
    type: "project",
    icon: Code,
    year: 2024,
  },
  {
    date: "2024",
    title: "Pet Adoption Platform",
    company: "Personal Project",
    location: "Johannesburg, South Africa",
    description:
      "Created a full-featured pet adoption website connecting shelters with potential pet owners.",
    details: [
      "Designed and developed a responsive web application using React and Tailwind CSS",
      "Built a filterable gallery of pets with detailed profile pages",
      "Implemented a favorites system and adoption application workflow",
      "Incorporated accessibility features to ensure the platform is usable by everyone",
    ],
    type: "project",
    icon: Code,
    year: 2024,
  },
  {
    date: "2023",
    title: "ABSA Bank UI/UX Hackathon",
    company: "Wits University Department Event",
    location: "Johannesburg, South Africa",
    description:
      "Participated in a competitive UI/UX design challenge focused on improving banking interfaces for younger users.",
    details: [
      "Collaborated in a small team to research, design, and prototype banking solutions",
      "Created wireframes and high-fidelity mockups for a next-generation banking app",
      "Presented our solution to a panel of ABSA representatives and university faculty",
      "Gained valuable experience in rapid prototyping and financial UX design",
    ],
    type: "achievement",
    icon: Award,
    year: 2023,
  },
  {
    date: "2023",
    title: "NASA Space Weather Site",
    company: "Personal Project",
    location: "Johannesburg, South Africa",
    description:
      "Developed an interactive web application that visualizes space weather data from NASA's open APIs.",
    details: [
      "Built with JavaScript and modern frontend frameworks to consume NASA's API data",
      "Created dynamic visualizations of solar activity, asteroid tracking, and space imagery",
      "Implemented responsive design principles for cross-device compatibility",
      "Gained experience working with external APIs and data visualization techniques",
    ],
    type: "project",
    icon: Code,
    year: 2023,
  },
  {
    date: "2021 - 2024",
    title: "Digital Arts Degree",
    company: "University of the Witwatersrand",
    location: "Johannesburg, South Africa",
    description:
      "Pursued a comprehensive education in digital arts, combining creative design with technical implementation.",
    details: [
      "Studied a diverse curriculum covering UI/UX design, web development, digital media, and visual communication",
      "Completed numerous projects combining artistic vision with technical implementation",
      "Developed skills in industry-standard design and development tools",
      "Collaborated with peers on interdisciplinary projects spanning various digital mediums",
    ],
    type: "education",
    icon: GraduationCap,
    year: 2021,
  },
  {
    date: "2021 - Present",
    title: "Continuous Learning",
    company: "Self-directed Education",
    location: "Remote",
    description:
      "Ongoing commitment to improving technical and design skills through self-directed learning.",
    details: [
      "Completed online courses in web development technologies including React, JavaScript, and CSS frameworks",
      "Participated in coding challenges and design competitions to strengthen problem-solving abilities",
      "Explored emerging technologies like animation libraries and state management tools",
      "Built a personal library of design patterns and code snippets for future projects",
    ],
    type: "education",
    icon: Lightbulb,
    year: 2021,
  },
];

export function Timeline() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeYear, setActiveYear] = useState(2024);

  // Get unique years from timeline (include all years in ranges)
  const getAllYears = () => {
    let years = new Set();

    timeline.forEach((item) => {
      const dateComponents = item.date
        .split(/[\s-]+/)
        .filter((part) => /^\d{4}$/.test(part));

      if (dateComponents.length === 2) {
        // For ranges like "2021 - 2024"
        const startYear = parseInt(dateComponents[0]);
        const endYear = parseInt(dateComponents[1]);

        for (let year = startYear; year <= endYear; year++) {
          years.add(year);
        }
      } else if (dateComponents.length === 1) {
        // For single years like "2024"
        years.add(parseInt(dateComponents[0]));
      }
    });

    return Array.from(years).sort((a, b) => b - a); // Sort descending
  };

  const timelineYears = getAllYears();

  const toggleExpand = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  // Get filtered items for the selected year
  const getFilteredItems = () => {
    return timeline.filter((item) => {
      // Check if the active year is in the item's date range
      const dateComponents = item.date
        .split(/[\s-]+/)
        .filter((part) => /^\d{4}$/.test(part));

      if (dateComponents.length === 2) {
        // For ranges like "2021 - 2024"
        const startYear = parseInt(dateComponents[0]);
        const endYear = parseInt(dateComponents[1]);
        return activeYear >= startYear && activeYear <= endYear;
      } else if (dateComponents.length === 1) {
        // For single years like "2024"
        return parseInt(dateComponents[0]) === activeYear;
      }

      return false;
    });
  };

  // Function to get appropriate icon background color based on type
  const getIconBackground = (type) => {
    switch (type) {
      case "education":
        return "bg-[#112240] text-blue-400";
      case "project":
        return "bg-[#112240] text-green-400";
      case "achievement":
        return "bg-[#112240] text-purple-400";
      default:
        return "bg-[#112240] text-[#64FFDA]";
    }
  };

  return (
    <section className="py-20 px-4 bg-[#112240]" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6]">My Journey</h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        {/* Timeline legend */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#112240] text-blue-400">
              <GraduationCap size={14} />
            </span>
            <span className="text-sm text-[#8892B0]">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#112240] text-green-400">
              <Code size={14} />
            </span>
            <span className="text-sm text-[#8892B0]">Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#112240] text-purple-400">
              <Award size={14} />
            </span>
            <span className="text-sm text-[#8892B0]">Achievements</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#112240] text-[#64FFDA]">
              <Lightbulb size={14} />
            </span>
            <span className="text-sm text-[#8892B0]">Learning</span>
          </div>
        </div>

        {/* Enhanced visual timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline track */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#233554] -translate-y-1/2"></div>

            {/* Year markers */}
            <div className="relative flex justify-between items-center px-4">
              {timelineYears.map((year) => (
                <motion.div
                  key={year}
                  className="relative z-10 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveYear(year)}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-2 transition-all duration-300 ${
                        activeYear === year
                          ? "bg-[#64FFDA] text-[#0A192F] scale-110"
                          : "bg-[#233554] text-[#8892B0] hover:bg-[#2A3F65]"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {year}
                    </motion.div>

                    {/* Count indicators */}
                    <div className="flex gap-1 mt-1">
                      {timeline
                        .filter((item) => {
                          const dateComponents = item.date
                            .split(/[\s-]+/)
                            .filter((part) => /^\d{4}$/.test(part));
                          if (dateComponents.length === 2) {
                            const startYear = parseInt(dateComponents[0]);
                            const endYear = parseInt(dateComponents[1]);
                            return year >= startYear && year <= endYear;
                          } else if (dateComponents.length === 1) {
                            return parseInt(dateComponents[0]) === year;
                          }
                          return false;
                        })
                        .slice(0, 3)
                        .map((item, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full ${
                              item.type === "education"
                                ? "bg-blue-400"
                                : item.type === "project"
                                ? "bg-green-400"
                                : item.type === "achievement"
                                ? "bg-purple-400"
                                : "bg-[#64FFDA]"
                            }`}
                          ></div>
                        ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Year title */}
          <motion.div
            className="text-center mt-8 mb-10"
            key={activeYear}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#64FFDA]">{activeYear}</h3>
            <p className="text-[#8892B0] mt-1">
              {activeYear === 2024
                ? "Graduation year & recent projects"
                : activeYear === 2023
                ? "Building projects & participating in events"
                : activeYear === 2022
                ? "Continuing education"
                : activeYear === 2021
                ? "Beginning my digital arts journey"
                : ""}
            </p>
          </motion.div>
        </div>

        {/* Timeline entries */}
        <div className="space-y-6">
          {getFilteredItems().map((item, index) => (
            <motion.div
              key={`${activeYear}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`bg-[#233554] border-none transition-shadow hover:shadow-lg ${
                  expandedItem === index ? "ring-2 ring-[#64FFDA]/50" : ""
                }`}
              >
                <CardContent className="pt-6">
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <span
                          className={`flex items-center justify-center w-10 h-10 rounded-full ${getIconBackground(
                            item.type
                          )}`}
                        >
                          <item.icon size={20} />
                        </span>
                      </div>

                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-1">
                          <h3 className="text-xl font-semibold text-[#CCD6F6]">
                            {item.title}
                          </h3>
                          <span className="text-sm font-mono text-[#64FFDA]">
                            @{item.company}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-[#8892B0] mb-3">
                          <span>{item.date}</span>
                          <span className="hidden sm:block">•</span>
                          <span>{item.location}</span>
                        </div>
                        <p className="text-[#8892B0]">{item.description}</p>
                      </div>
                    </div>

                    <button className="p-2 text-[#8892B0] hover:text-[#64FFDA] flex-shrink-0">
                      {expandedItem === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>

                  {expandedItem === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 ml-14 border-l-2 border-[#64FFDA]/30 pl-4"
                    >
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-[#8892B0]"
                          >
                            <span className="text-[#64FFDA] mt-1">▹</span>{" "}
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {getFilteredItems().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 text-[#8892B0]"
            >
              <p>No entries for this year. Select another year to view more.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
