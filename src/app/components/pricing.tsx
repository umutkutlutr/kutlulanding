import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function Pricing() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <section id="pricing" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Fiyatlandırma
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto mb-12 leading-relaxed">
            Her proje benzersizdir. Kapsamınıza uygun özel teklif hazırlıyoruz.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            {/* 3D Card effect */}
            <motion.div
              className="relative p-12 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                background: "rgba(255, 255, 255, 0.01)",
              }}
              whileHover={{
                rotateX: 2,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Border glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                style={{ filter: "blur(20px)", transform: "translateZ(-1px)" }}
              />
              
              <div className="relative space-y-8" style={{ transform: "translateZ(20px)" }}>
                <div className="space-y-4">
                  {[
                    "Kapsamlı keşif ve mimari planlama",
                    "Kıdemli ekip ile tasarım ve geliştirme",
                    "Sürekli bakım ve destek hizmeti",
                    "Dokümantasyon ve ekip transferi"
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full mt-2.5"
                        style={{
                          background: `linear-gradient(135deg, #a78bfa, #60a5fa)`,
                          boxShadow: "0 0 10px rgba(167, 139, 250, 0.5)",
                        }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      <p className="text-[#9ca3af] text-left group-hover:text-white transition-colors duration-500">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setShowQuoteModal(true)}
                    className="w-full bg-white text-[#1a1d29] hover:bg-[#f3f4f6] py-6 text-sm tracking-wide rounded-md border-0 transition-colors duration-300 font-medium cursor-hover"
                  >
                    <span className="relative z-10">Teklif İste</span>
                  </Button>
                </motion.div>

                <p className="text-xs text-[#71717a] text-center">
                  Teklifler 24 saat içinde hazırlanır
                </p>
              </div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: i === 0 ? "#a78bfa" : i === 1 ? "#60a5fa" : "#f472b6",
                    boxShadow: `0 0 10px ${i === 0 ? "#a78bfa" : i === 1 ? "#60a5fa" : "#f472b6"}`,
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Quote Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="bg-[#0f0f14] border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl tracking-tight">
              Teklif Talep Formu
            </DialogTitle>
            <DialogDescription className="text-sm text-[#9ca3af]">
              Projeniz hakkında daha fazla bilgi vererek özel bir teklif alabilirsiniz.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-[#9ca3af]">
                  Ad Soyad
                </Label>
                <Input
                  id="name"
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 focus:border-[#a78bfa]/50 transition-colors"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#9ca3af]">
                  E-posta
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 focus:border-[#60a5fa]/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-[#9ca3af]">
                Şirket
              </Label>
              <Input
                id="company"
                placeholder=""
                className="bg-white/5 border-white/10 mt-2 focus:border-[#f472b6]/50 transition-colors"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-[#9ca3af]">
                Proje Hakkında
              </Label>
              <Textarea
                id="message"
                placeholder=""
                className="bg-white/5 border-white/10 mt-2 min-h-[120px] focus:border-[#a78bfa]/50 transition-colors"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-white text-[#1a1d29] hover:bg-[#f3f4f6] py-6 text-sm tracking-wide border-0 font-medium transition-colors duration-300"
            >
              Gönder
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}