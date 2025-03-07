import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="py-20 px-4 bg-[#0A192F]" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#112240] border-none h-full">
              <CardContent className="pt-6">
                <img
                  src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                  alt="Profile"
                  className="rounded-lg mb-6"
                />
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-4 text-[#8892B0]">
              <p>
                Hello! I'm a passionate web developer who loves creating
                beautiful and functional digital experiences. My journey in web
                development started during my computer science studies, where I
                discovered my love for frontend development and user experience
                design.
              </p>
              <p>
                I specialize in building modern web applications using React,
                TypeScript, and Node.js. I'm always eager to learn new
                technologies and improve my skills.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical blog posts, or exploring new web
                technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
