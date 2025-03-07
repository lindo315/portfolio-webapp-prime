import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", proficiency: 85 },
      { name: "TypeScript", proficiency: 80 },
      { name: "CSS/Tailwind", proficiency: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", proficiency: 75 },
      { name: "Express", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 70 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", proficiency: 85 },
      { name: "Docker", proficiency: 65 },
      { name: "AWS", proficiency: 60 },
    ],
  },
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-[#0A192F]" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="space-y-12">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#64FFDA] mb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-[#8892B0]">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="h-2 bg-[#233554]"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
