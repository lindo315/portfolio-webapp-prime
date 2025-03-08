import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export function About() {
  const [activeTab, setActiveTab] = useState("background");

  const tabs = [
    { id: "background", label: "Background" },
    { id: "philosophy", label: "Philosophy" },
    { id: "interests", label: "Interests" },
  ];

  const tabContent = {
    background: (
      <div className="space-y-4">
        <p>
          Hello! I'm a passionate web developer who loves creating beautiful and
          functional digital experiences. My journey in web development started
          during my Digital Arts studies, where I discovered my love for
          frontend development and user experience design through Interactive
          Media.
        </p>
        <p>
          After graduating in 2024, I immediately jumped into freelancing to
          build a diverse portfolio while refining my skills across various
          projects and technologies. I'm still in this phase, eager to gain as
          much experience as an aspiring Web Developer. I work in honing my
          skills and building small agile projects to production-level
          applications.
        </p>
        <p>
          I specialize mostly in building modern web applications using React,
          TypeScript, and Node.js. I'm always eager to learn new technologies
          and improve my skills.
        </p>
      </div>
    ),
    philosophy: (
      <div className="space-y-4">
        <p>
          I believe that great software is a perfect blend of beautiful design
          and clean, efficient code. My approach centers around creating
          intuitive user experiences that solve real problems.
        </p>
        <p>
          I'm committed to writing maintainable, well-documented code and
          strongly believe in the importance of accessibility and performance
          optimization in every project I build.
        </p>
        <p>
          Continuous learning is at the core of my professional philosophy. The
          tech industry evolves rapidly, and I embrace the challenge of staying
          current by dedicating time each week to learning new tools and
          techniques.
        </p>
      </div>
    ),
    interests: (
      <div className="space-y-4">
        <p>
          When I'm not coding, you can find me contributing to open-source
          projects, tutoring fellow programmers on campus, or exploring new web
          technologies.
        </p>
        <p>
          I also like watching technical videos on YouTube, particularly focused
          on web performance optimization and design systems. I also enjoy
          attending local tech meetups and virtual conferences to connect with
          other developers.
        </p>
        <p>
          Outside of tech, I enjoy writing, reading, and on rare occasions -
          drawing. I think these activities that help me maintain a creative
          balance and fresh perspective on problem-solving.
        </p>
      </div>
    ),
  };

  return (
    <section className="py-20 px-4 bg-[#0A192F]" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6]">About Me</h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-[#112240] border-none h-3/4 overflow-hidden">
              <CardContent className="pt-6 p-0">
                <div className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-[#64FFDA]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    whileHover={{ opacity: 1 }}
                  />
                  <img
                    src="/images/profile.jpeg"
                    alt="Profile"
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-10 left-0 right-0 p-6 bg-[#112240] bg-opacity-100 transform translate-y-full group-hover:translate-y-40 transition-transform duration-500 top-10">
                    <h3 className="text-xl font-semibold text-[#CCD6F6] mb-4">
                      Quick Facts
                    </h3>
                    <ul className="space-y-2 text-[#8892B0]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#64FFDA]">▹</span> Based in
                        Johannesburg, South Africa
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#64FFDA]">▹</span> 3 years of
                        development experience
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#64FFDA]">▹</span> Degree in
                        Digital Arts
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#64FFDA]">▹</span> Fluent in
                        English and Zulu
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex space-x-2 mb-6">
              {tabs.map((tab) => (
                <Badge
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 text-sm ${
                    activeTab === tab.id
                      ? "bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/80"
                      : "bg-transparent text-[#8892B0] hover:text-[#CCD6F6] border-[#233554]"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Badge>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="text-[#8892B0]"
            >
              {tabContent[activeTab]}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
