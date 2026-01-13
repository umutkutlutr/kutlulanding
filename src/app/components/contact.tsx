import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState, useRef } from "react";
import { saveFormSubmission } from "../../utils/formSubmission";

export function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Throttle with requestAnimationFrame
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x, y });
        rafRef.current = null;
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveFormSubmission({
      ...formData,
      type: 'contact',
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Static background gradient - no animation, reduced blur */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Get in Touch
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            Let's discuss your project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto cursor-hover"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            className="p-10 border border-white/5 rounded-xl bg-white/[0.01] backdrop-blur-sm relative overflow-hidden"
          >
            {/* Mouse-following gradient spotlight */}
            <motion.div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle 300px at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(167, 139, 250, 0.1), transparent)`,
                opacity: isHovered ? 1 : 0,
              }}
            />

                  {/* Static border glow - reduced blur */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-700"
                    style={{
                      background: "linear-gradient(135deg, rgba(167, 139, 250, 0.15), rgba(96, 165, 250, 0.15))",
                      filter: "blur(15px)",
                      transform: "translateZ(-1px)",
                      opacity: isHovered ? 1 : 0,
                    }}
                  />

            <form onSubmit={handleSubmit} className="space-y-6 relative" style={{ transform: "translateZ(20px)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Label htmlFor="contact-name" className="text-[#9ca3af] text-sm">
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=""
                    className="bg-white/5 border-white/10 mt-2 focus:border-[#a78bfa]/50 transition-all duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Label htmlFor="contact-email" className="text-[#9ca3af] text-sm">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder=""
                    className="bg-white/5 border-white/10 mt-2 focus:border-[#60a5fa]/50 transition-all duration-300"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Label htmlFor="contact-company" className="text-[#9ca3af] text-sm">
                  Company
                </Label>
                <Input
                  id="contact-company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 focus:border-[#f472b6]/50 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Label htmlFor="contact-message" className="text-[#9ca3af] text-sm">
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 min-h-[140px] focus:border-[#a78bfa]/50 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-white text-[#1a1d29] hover:bg-[#f3f4f6] transition-all duration-300 py-6 text-sm tracking-wide border-0 font-medium cursor-hover"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>

              <motion.div 
                className="pt-6 border-t border-white/5 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-sm text-[#9ca3af] mb-2">
                  hello@kutlusolutions.com
                </p>
                <p className="text-xs text-[#71717a]">
                  Response within 24 hours
                </p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}