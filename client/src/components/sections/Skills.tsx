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
      },
      {
        name: "TypeScript",
        proficiency: 80,
        description: "Type systems, interfaces, generics, utility types",
      },
      {
        name: "CSS/Tailwind",
        proficiency: 90,
        description: "Responsive design, animations, custom components",
      },
      {
        name: "Next.js",
        proficiency: 75,
        description: "SSR, SSG, API routes, middleware",
      },
      {
        name: "JavaScript",
        proficiency: 85,
        description: "ES6+, async/await, functional programming",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        proficiency: 75,
        description: "RESTful APIs, authentication, file handling",
      },
      {
        name: "Express",
        proficiency: 80,
        description: "Routing, middleware, error handling",
      },
      {
        name: "PostgreSQL",
        proficiency: 70,
        description: "Schema design, queries, transactions",
      },
      {
        name: "MongoDB",
        proficiency: 65,
        description: "Document modeling, aggregation pipeline",
      },
      {
        name: "GraphQL",
        proficiency: 60,
        description: "Schemas, resolvers, Apollo Server",
      },
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      {
        name: "Git",
        proficiency: 85,
        description: "Version control, branching strategies, collaboration",
      },
      {
        name: "Docker",
        proficiency: 65,
        description: "Containerization, Docker Compose, basic orchestration",
      },
      {
        name: "AWS",
        proficiency: 60,
        description: "S3, EC2, Lambda, basic cloud architecture",
      },
      {
        name: "CI/CD",
        proficiency: 70,
        description: "GitHub Actions, automated testing, deployment",
      },
      {
        name: "Testing",
        proficiency: 75,
        description: "Jest, React Testing Library, integration testing",
      },
    ],
  },
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
          <TabsList className="w-full bg-[#112240] mb-8">
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

          {skills.map((skillGroup, groupIndex) => (
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
                    {skillGroup.items.map((skill, index) => (
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
                        <div className="flex justify-between text-[#8892B0]">
                          <span>{skill.name}</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <Progress
                          value={skill.proficiency}
                          className="h-2 bg-[#233554]"
                          indicatorClassName="bg-gradient-to-r from-[#64FFDA]/60 to-[#64FFDA]"
                        />
                      </motion.div>
                    ))}
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
                        <h3 className="text-xl text-[#CCD6F6] font-semibold mb-4">
                          {selectedSkill.name}
                        </h3>
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
