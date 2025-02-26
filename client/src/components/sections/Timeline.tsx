import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";

// Extended timeline data with more details
const timeline = [
  {
    date: "2023 - Present",
    title: "Junior Web Developer",
    company: "TechNova Solutions",
    location: "Johannesburg, South Africa",
    description:
      "Working on full-stack web applications using modern technologies including React, Node.js, and PostgreSQL.",
    details: [
      "Developed responsive front-end interfaces for client projects using React and Tailwind CSS",
      "Collaborated on RESTful API development using Node.js and Express",
      "Implemented automated testing strategies that improved code quality by 30%",
      "Participated in agile development processes, contributing to sprint planning and retrospectives",
    ],
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2022 - 2023",
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    description:
      "Built various client projects while learning new technologies and expanding my portfolio.",
    details: [
      "Designed and developed e-commerce websites for small businesses using Next.js",
      "Created custom content management systems tailored to client requirements",
      "Implemented SEO best practices resulting in improved search rankings for clients",
      "Managed client relationships and project timelines independently",
    ],
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2021",
    title: "Computer Science Degree",
    company: "University of Cape Town",
    location: "Cape Town, South Africa",
    description:
      "Graduated with honors, specialized in web technologies and software development.",
    details: [
      "Graduated with First Class Honors (GPA: 3.8/4.0)",
      "Final year project: Developed a machine learning-powered recommendation system",
      "Specialized in web development, data structures, and algorithms",
      "Active member of the university's Computer Science Society",
    ],
    type: "education",
    icon: GraduationCap,
  },
  {
    date: "2021",
    title: "Hackathon Winner",
    company: "AfricaTech Challenge",
    location: "Virtual Event",
    description:
      "Won first place in a competitive hackathon focused on developing solutions for local communities.",
    details: [
      "Led a team of 4 developers to create a resource-sharing platform for underserved communities",
      "Designed and implemented the core application architecture in 48 hours",
      "Presented solution to a panel of industry experts and investors",
      "Featured in local tech publications for innovative approach",
    ],
    type: "achievement",
    icon: Award,
  },
];

export function Timeline() {
  const [expandedItem, setExpandedItem] = useState(null);

  // Group timeline items by year for the visual timeline
  const timelineYears = [
    ...new Set(timeline.map((item) => item.date.split(" ")[0])),
  ].sort((a, b) => parseInt(b) - parseInt(a));

  const toggleExpand = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
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
          <h2 className="text-3xl font-bold text-[#CCD6F6]">
            Professional Journey
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        {/* Visual timeline */}
        <div className="mb-16">
          <div className="relative flex justify-between items-center mb-8">
            {timelineYears.map((year, index) => (
              <div key={index} className="text-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-6 h-6 rounded-full ${
                      index === 0 ? "bg-[#64FFDA]" : "bg-[#233554]"
                    } mb-2`}
                  ></div>
                  <span
                    className={`text-sm ${
                      index === 0 ? "text-[#64FFDA]" : "text-[#8892B0]"
                    }`}
                  >
                    {year}
                  </span>
                </div>
              </div>
            ))}

            <div className="absolute top-3 left-0 right-0 h-px bg-[#233554] -z-10"></div>
          </div>
        </div>

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`bg-[#233554] border-none transition-shadow hover:shadow-lg ${
                  expandedItem === index ? "ring-2 ring-[#64FFDA]" : ""
                }`}
              >
                <CardContent className="pt-6">
                  <div
                    className="flex justify-between items-start cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex gap-4">
                      <div className="mt-1">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#112240] text-[#64FFDA]">
                          <item.icon size={20} />
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
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

                    <button className="p-2 text-[#8892B0] hover:text-[#64FFDA]">
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
        </div>
      </div>
    </section>
  );
}
