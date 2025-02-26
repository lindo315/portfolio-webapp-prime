import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  {
    date: "2023",
    title: "Junior Web Developer",
    description: "Working on full-stack web applications using modern technologies.",
    type: "work"
  },
  {
    date: "2022",
    title: "Freelance Developer",
    description: "Built various client projects while learning new technologies.",
    type: "work"
  },
  {
    date: "2021",
    title: "Computer Science Degree",
    description: "Graduated with honors, specialized in web technologies.",
    type: "education"
  }
];

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-[#112240]" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Professional Journey
        </motion.h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#233554] border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="text-[#64FFDA] font-mono">{item.date}</span>
                    <h3 className="text-xl font-semibold text-[#CCD6F6]">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-[#8892B0]">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
