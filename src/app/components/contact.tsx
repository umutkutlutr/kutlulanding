// Motion removed for performance
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState, useRef } from "react";
import { saveFormSubmission } from "../../utils/formSubmission";
import { useLanguage } from "../../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto cursor-hover"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="p-10 border border-white/5 rounded-xl bg-white/[0.01] backdrop-blur-sm relative overflow-hidden"
          >
            {/* Mouse-following gradient spotlight */}
            <div
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
                <div>
                  <Label htmlFor="contact-name" className="text-[#9ca3af] text-sm">
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder=""
                    className="bg-white/5 border-white/10 mt-2 focus:border-[#a78bfa]/50 transition-all duration-300"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-[#9ca3af] text-sm">
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder=""
                    className="bg-white/5 border-white/10 mt-2 focus:border-[#60a5fa]/50 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-company" className="text-[#9ca3af] text-sm">
                  {t('contact.form.company')}
                </Label>
                <Input
                  id="contact-company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 focus:border-[#f472b6]/50 transition-all duration-300"
                />
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-[#9ca3af] text-sm">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder=""
                  className="bg-white/5 border-white/10 mt-2 min-h-[140px] focus:border-[#a78bfa]/50 transition-all duration-300"
                />
              </div>

              <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
                <Button
                  type="submit"
                  className="w-full bg-white text-[#1a1d29] hover:bg-[#f3f4f6] transition-all duration-300 py-6 text-sm tracking-wide border-0 font-medium cursor-hover"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t('contact.form.submit')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>

              <div className="pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-[#9ca3af] mb-2">
                  {t('contact.email')}
                </p>
                <p className="text-xs text-[#71717a]">
                  {t('contact.response')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}