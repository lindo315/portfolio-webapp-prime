import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "web applications.",
    "user interfaces.",
    "digital experiences.",
    "accessible products.",
  ];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentPhrase = phrases[index];
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.substring(0, text.length + 1));
      } else {
        // Wait a bit at the end of typing before changing phrase
        setTimeout(() => {
          setText("");
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [text, index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A192F] text-[#CCD6F6] p-4 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#64FFDA]/5"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 60 + 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div
        className="max-w-4xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-[#64FFDA] font-mono mb-4"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Lindo Dlamini.
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-[#8892B0] mb-6"
        >
          I build{" "}
          <span className="inline-block min-w-[17ch] text-[#64FFDA]">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-[#8892B0] max-w-xl mb-8"
        >
          I'm a junior web developer passionate about crafting exceptional
          digital experiences. Currently focused on building accessible,
          human-centered products that make a positive impact on people's lives.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button className="bg-transparent hover:bg-[#64FFDA]/10 text-[#64FFDA] border-2 border-[#64FFDA] px-8 py-6">
            Check out my work <ArrowRight className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="bg-[#112240] hover:bg-[#233554] text-[#CCD6F6] border-[#233554] px-8 py-6"
          >
            Download Resume
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 mt-12">
          <motion.a
            href="https://github.com/lindo315"
            whileHover={{ y: -5, color: "#64FFDA" }}
            className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lindokuhle-dlamini-211271263/"
            whileHover={{ y: -5, color: "#64FFDA" }}
            className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/lindo.315/"
            whileHover={{ y: -5, color: "#64FFDA" }}
            className="text-[#8892B0] hover:text-[#64FFDA] transition-colors"
          >
            <Instagram size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
