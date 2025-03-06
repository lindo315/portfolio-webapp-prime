import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin } from "lucide-react";

export function SocialLinks() {
  const socials = [
    { icon: Github, href: "https://github.com/lindo315" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lindokuhle-dlamini-211271263/",
    },
    { icon: Instagram, href: "https://www.instagram.com/lindo.315/" },
  ];

  return (
    <motion.div
      className="fixed left-8 bottom-0 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col items-center space-y-6">
        {socials.map((social, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        ))}
        <div className="w-px h-24 bg-[#8892B0]" />
      </div>
    </motion.div>
  );
}
