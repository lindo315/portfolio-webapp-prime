import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-[#0A192F]" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6"
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6]">Get In Touch</h2>
          <div className="h-px bg-[#233554] flex-grow"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#8892B0] text-lg max-w-xl mx-auto text-center mb-12"
        >
          My inbox is always open. Whether you have a question, a project idea,
          or just want to say hi, I'll do my best to get back to you!
        </motion.p>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold text-[#CCD6F6] mb-4">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#112240] rounded-lg text-[#64FFDA]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium">Email</h4>
                  <p className="text-[#8892B0]">hello@lindodlamini.dev</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#112240] rounded-lg text-[#64FFDA]">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium">Phone</h4>
                  <p className="text-[#8892B0]">+27 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#112240] rounded-lg text-[#64FFDA]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-[#CCD6F6] font-medium">Location</h4>
                  <p className="text-[#8892B0]">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-[#CCD6F6] mb-4">
                Availability
              </h3>
              <p className="text-[#8892B0] mb-4">
                I'm currently open to freelance projects and full-time
                opportunities.
              </p>
              <div className="flex gap-2">
                <div className="w-full bg-[#112240] p-4 rounded-lg text-center">
                  <p className="text-[#64FFDA] font-mono">Response time</p>
                  <p className="text-[#CCD6F6] font-bold text-lg">
                    24-48 Hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#CCD6F6] mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#233554] p-6 rounded-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-[#64FFDA]/20 rounded-full flex items-center justify-center mb-4">
                    <Send size={24} className="text-[#64FFDA]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#CCD6F6] mb-2">
                    Thank you!
                  </h4>
                  <p className="text-[#8892B0]">
                    Your message has been sent successfully.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[#8892B0] mb-2 block"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-[#233554] border-none text-[#CCD6F6]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[#8892B0] mb-2 block"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-[#233554] border-none text-[#CCD6F6]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-[#8892B0] mb-2 block"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-[#233554] border-none text-[#CCD6F6]"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-[#8892B0] mb-2 block"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="bg-[#233554] border-none text-[#CCD6F6] min-h-32"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#64FFDA] hover:bg-[#64FFDA]/80 text-[#0A192F] font-medium w-full py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-[#0A192F]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={16} />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
