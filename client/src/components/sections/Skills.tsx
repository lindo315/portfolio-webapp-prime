import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        proficiency: 85,
        description: "Component architecture, hooks, context API, Redux",
        confidence: "Expert",
        confidenceColor: "bg-green-500",
      },
      {
        name: "TypeScript",
        proficiency: 73,
        description: "Type systems, interfaces, generics, utility types",
        confidence: "Confident",
        confidenceColor: "bg-blue-500",
      },
      {
        name: "CSS/Tailwind",
        proficiency: 90,
        description: "Responsive design, animations, custom components",
        confidence: "Expert",
        confidenceColor: "bg-green-500",
      },
      {
        name: "Next.js",
        proficiency: 65,
        description: "SSR, SSG, API routes, middleware",
        confidence: "Comfortable",
        confidenceColor: "bg-blue-400",
      },
      {
        name: "JavaScript",
        proficiency: 85,
        description: "ES6+, async/await, functional programming",
        confidence: "Expert",
        confidenceColor: "bg-green-500",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        proficiency: 65,
        description: "RESTful APIs, authentication, file handling",
        confidence: "Learning",
        confidenceColor: "bg-yellow-500",
      },
      {
        name: "Express",
        proficiency: 60,
        description: "Routing, middleware, error handling",
        confidence: "Learning",
        confidenceColor: "bg-yellow-500",
      },
      {
        name: "PostgreSQL",
        proficiency: 70,
        description: "Schema design, queries, transactions",
        confidence: "Comfortable",
        confidenceColor: "bg-blue-400",
      },
      {
        name: "MongoDB",
        proficiency: 65,
        description: "Document modeling, aggregation pipeline",
        confidence: "Still Learning",
        confidenceColor: "bg-yellow-500",
      },
      {
        name: "GraphQL",
        proficiency: 60,
        description: "Schemas, resolvers, Apollo Server",
        confidence: "Learning",
        confidenceColor: "bg-purple-500",
      },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      {
        name: "Git",
        proficiency: 70,
        description: "Version control, branching strategies, collaboration",
        confidence: "Comfortable",
        confidenceColor: "bg-blue-400",
      },
      {
        name: "Docker",
        proficiency: 65,
        description: "Containerization, Docker Compose, basic orchestration",
        confidence: "Learning",
        confidenceColor: "bg-yellow-500",
      },
      {
        name: "AWS",
        proficiency: 50,
        description: "S3, EC2, Lambda, basic cloud architecture",
        confidence: "Beginner",
        confidenceColor: "bg-orange-500",
      },
      {
        name: "CI/CD",
        proficiency: 60,
        description: "GitHub Actions, automated testing, deployment",
        confidence: "Learning",
        confidenceColor: "bg-yellow-500",
      },
      {
        name: "Testing",
        proficiency: 65,
        description: "Jest, React Testing Library, integration testing",
        confidence: "Growing",
        confidenceColor: "bg-yellow-400",
      },
    ],
  },
];

// New confidenceTypes for tab filter
const confidenceTypes = [
  "All",
  "Expert",
  "Confident",
  "Comfortable",
  "Learning",
  "Beginner",
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [confidenceFilter, setConfidenceFilter] = useState("All");

  // Filter skills based on confidence level if filter is active
  const getFilteredSkills = (skillGroup) => {
    if (confidenceFilter === "All") {
      return skillGroup.items;
    }
    return skillGroup.items.filter(
      (skill) => skill.confidence === confidenceFilter
    );
  };

  return (
    <section className="py-20 px-4 bg-[#0A192F]" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6]">
            Skills & Technologies
          </h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        <Tabs defaultValue="Frontend" className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between mb-8 gap-4">
            <TabsList className="bg-[#112240]">
              {skills.map((skillGroup) => (
                <TabsTrigger
                  key={skillGroup.category}
                  value={skillGroup.category}
                  className="data-[state=active]:bg-[#64FFDA] data-[state=active]:text-[#0A192F] text-[#8892B0] data-[state=active]:shadow"
                >
                  {skillGroup.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Confidence filter tabs */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
              {confidenceTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setConfidenceFilter(type)}
                  className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all ${
                    confidenceFilter === type
                      ? "bg-[#64FFDA] text-[#0A192F] font-medium"
                      : "bg-[#112240] text-[#8892B0]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {skills.map((skillGroup) => (
            <TabsContent key={skillGroup.category} value={skillGroup.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {getFilteredSkills(skillGroup).map((skill, index) => (
                      <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setSelectedSkill(skill)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="flex justify-between items-center text-[#8892B0]">
                          <div className="flex items-center gap-2">
                            <span>{skill.name}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full text-white ${skill.confidenceColor}`}
                            >
                              {skill.confidence}
                            </span>
                          </div>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <Progress
                          value={skill.proficiency}
                          className="h-2 bg-[#233554]"
                          indicatorClassName="bg-gradient-to-r from-[#64FFDA]/60 to-[#64FFDA]"
                        />
                      </motion.div>
                    ))}

                    {getFilteredSkills(skillGroup).length === 0 && (
                      <div className="py-6 text-center text-[#8892B0]">
                        <p>
                          No skills match the selected confidence level in this
                          category.
                        </p>
                      </div>
                    )}
                  </div>

                  <motion.div
                    className="bg-[#112240] p-6 rounded-lg border border-[#233554]"
                    animate={{
                      opacity: selectedSkill ? 1 : 0.7,
                      scale: selectedSkill ? 1 : 0.98,
                    }}
                  >
                    {selectedSkill ? (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-xl text-[#CCD6F6] font-semibold">
                            {selectedSkill.name}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full text-white ${selectedSkill.confidenceColor}`}
                          >
                            {selectedSkill.confidence}
                          </span>
                        </div>
                        <p className="text-[#8892B0] mb-4">
                          {selectedSkill.description}
                        </p>
                        <div className="mt-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[#64FFDA] text-sm">
                              Proficiency
                            </span>
                            <span className="text-[#8892B0] text-sm">
                              {selectedSkill.proficiency}%
                            </span>
                          </div>
                          <Progress
                            value={selectedSkill.proficiency}
                            className="h-1 bg-[#233554]"
                          />
                        </div>

                        {/* Confidence level explanation */}
                        <div className="mt-6 pt-4 border-t border-[#233554]">
                          <h4 className="text-[#64FFDA] text-sm mb-2">
                            My Confidence Level
                          </h4>
                          <p className="text-[#8892B0] text-sm">
                            {selectedSkill.confidence === "Expert" &&
                              "I've mastered this technology and can solve complex problems with it."}
                            {selectedSkill.confidence === "Confident" &&
                              "I'm very comfortable with this and use it regularly in my projects."}
                            {selectedSkill.confidence === "Comfortable" &&
                              "I can work with this effectively but still learning advanced concepts."}
                            {selectedSkill.confidence === "Learning" &&
                              "I'm actively improving my skills with this technology."}
                            {selectedSkill.confidence === "Beginner" &&
                              "I have basic understanding but need more practical experience."}
                            {selectedSkill.confidence === "Learning" &&
                              "I'm currently exploring this technology and its possibilities."}
                            {selectedSkill.confidence === "Growing" &&
                              "I'm expanding my knowledge in this area gradually."}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="text-center text-[#8892B0] py-12">
                        <p>Click on a skill to see details</p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
