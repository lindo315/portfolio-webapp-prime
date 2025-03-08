import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-[#0A192F]/90 backdrop-blur-sm shadow-lg"
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-[#64FFDA] font-mono text-xl">
          _lindo.dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
            >
              <span className="font-mono text-[#64FFDA]">{index + 1}. </span>
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#64FFDA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0A192F] shadow-lg"
        >
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-mono text-[#64FFDA]">{index + 1}. </span>
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
