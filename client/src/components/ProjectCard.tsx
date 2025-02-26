import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  link
}: ProjectCardProps) {
  return (
    <Card className="bg-[#233554] border-none overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-[#CCD6F6] mb-2">{title}</h3>
        <p className="text-[#8892B0] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-sm text-[#64FFDA] bg-[#112240] px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#CCD6F6] hover:text-[#64FFDA]"
              asChild
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {link && (
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#CCD6F6] hover:text-[#64FFDA]"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
