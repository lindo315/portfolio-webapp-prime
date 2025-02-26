import { motion } from "framer-motion";
import { ProjectCard } from "../ProjectCard";

const projects = [
  {
    title: "Project Management Dashboard",
    description: "A modern project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    technologies: ["React", "TypeScript", "Node.js", "Socket.IO"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with inventory management and payment processing.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for tracking social media engagement and performance metrics.",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    technologies: ["Vue.js", "D3.js", "Express", "MongoDB"],
    github: "https://github.com",
    link: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-[#112240]" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Some Things I've Built
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
