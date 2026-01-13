import { motion } from "motion/react";

export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      {/* Static gradient backgrounds - no scroll transforms */}
      <motion.div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-lg mb-4 tracking-tight"
              whileHover={{ 
                background: "linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              transition={{ duration: 0.3 }}
            >
              Kutlu Solutions
            </motion.h3>
            <p className="text-sm text-[#9ca3af] max-w-md leading-relaxed">
              Enterprise software consulting.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm mb-4 text-[#9ca3af]">Menu</h4>
            <div className="space-y-2">
              {[
                { id: "expertise", label: "Expertise" },
                { id: "industries", label: "Industries" },
                { id: "approach", label: "Our Approach" },
                { id: "contact", label: "Contact" },
              ].map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-[#71717a] hover:text-white transition-colors duration-500 cursor-hover relative group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm mb-4 text-[#9ca3af]">Contact</h4>
            <div className="space-y-3 text-sm text-[#71717a]">
              <motion.a
                href="mailto:hello@kutlusolutions.com"
                whileHover={{ 
                  color: "#a78bfa",
                  x: 5,
                }}
                transition={{ duration: 0.3 }}
                className="cursor-hover block"
              >
                hello@kutlusolutions.com
              </motion.a>
              <motion.a
                href="tel:+902126882112"
                whileHover={{ 
                  color: "#60a5fa",
                  x: 5,
                }}
                transition={{ duration: 0.3 }}
                className="cursor-hover block"
              >
                0212 688 21 12
              </motion.a>
              <motion.div
                whileHover={{ 
                  color: "#f472b6",
                  x: 5,
                }}
                transition={{ duration: 0.3 }}
                className="cursor-hover leading-relaxed pt-2"
              >
                <p className="text-xs">Zekeriyaköy Mahallesi,</p>
                <p className="text-xs">Mavromolos Sk. A Blok No: 8 A</p>
                <p className="text-xs">İç Kapı No: 22</p>
                <p className="text-xs">Sarıyer / İstanbul</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#71717a] text-center md:text-left">
              © {new Date().getFullYear()} Kutlu Solutions
            </p>
            <motion.button
              onClick={() => {
                // Privacy policy link - can be updated with actual page
                console.log("Privacy Policy clicked");
              }}
              className="text-xs text-[#71717a] hover:text-white transition-colors duration-500 cursor-hover"
              whileHover={{ 
                color: "#a78bfa",
                x: 3,
              }}
              transition={{ duration: 0.3 }}
            >
              Gizlilik Sözleşmesi
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          y: useTransform(scrollYProgress, [0, 1], [0, -20]),
        }}
      />
    </footer>
  );
}