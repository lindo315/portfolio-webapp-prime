import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-[#112240]" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#CCD6F6] mb-12"
        >
          Get In Touch
        </motion.h2>
        <Card className="bg-[#233554] border-none">
          <CardContent className="pt-6">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#CCD6F6]">Name</label>
                  <Input 
                    className="bg-[#112240] border-[#64FFDA] text-[#CCD6F6]"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#CCD6F6]">Email</label>
                  <Input 
                    className="bg-[#112240] border-[#64FFDA] text-[#CCD6F6]"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[#CCD6F6]">Message</label>
                <Textarea 
                  className="bg-[#112240] border-[#64FFDA] text-[#CCD6F6]"
                  placeholder="Your message"
                  rows={6}
                />
              </div>
              <Button 
                className="bg-transparent hover:bg-[#64FFDA]/10 text-[#64FFDA] border-2 border-[#64FFDA]"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
