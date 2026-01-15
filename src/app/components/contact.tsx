// Motion removed for performance
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useState, useRef, useEffect } from "react";
import { saveFormSubmission } from "../../utils/formSubmission";
import { useLanguage } from "../../contexts/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
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
    try {
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
      // Show success dialog
      setShowSuccessDialog(true);
    } catch (error) {
      console.error('Error saving form submission:', error);
      alert('There was an error submitting your message. Please try again.');
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-14 md:py-20 lg:py-32 border-t border-white/5 overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {/* Static background gradient - no animation, reduced blur, responsive sizes */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div 
          className="text-center mb-12 md:mb-16 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '200ms',
          }}
        >
          <h2 
            className="tracking-tight mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            {t('contact.title')}
          </h2>
          <p 
            className="text-[#9ca3af] leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
              lineHeight: '1.6',
            }}
          >
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
            className="p-6 md:p-8 lg:p-10 border border-[#e5e7eb] rounded-xl bg-white shadow-lg relative overflow-hidden"
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

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative" style={{ transform: "translateZ(20px)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <Label htmlFor="contact-name" className="text-[#52525b] font-medium text-sm mb-2 block">
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t('contact.form.namePlaceholder') || "e.g., Sarah Johnson"}
                    className="bg-white border-[#e5e7eb] text-[#1a1d29] placeholder:text-[#9ca3af] mt-0 focus:border-[#a78bfa] focus:ring-[#a78bfa]/20 focus:ring-2 transition-all duration-300 w-full min-h-[48px] text-base shadow-sm hover:border-[#d1d5db]"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-[#52525b] font-medium text-sm mb-2 block">
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t('contact.form.emailPlaceholder') || "e.g., sarah.johnson@manufacturing.com"}
                    className="bg-white border-[#e5e7eb] text-[#1a1d29] placeholder:text-[#9ca3af] mt-0 focus:border-[#60a5fa] focus:ring-[#60a5fa]/20 focus:ring-2 transition-all duration-300 w-full min-h-[48px] text-base shadow-sm hover:border-[#d1d5db]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-company" className="text-[#52525b] font-medium text-sm mb-2 block">
                  {t('contact.form.company')}
                </Label>
                <Input
                  id="contact-company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder={t('contact.form.companyPlaceholder') || "e.g., Acme Manufacturing Inc."}
                  className="bg-white border-[#e5e7eb] text-[#1a1d29] placeholder:text-[#9ca3af] mt-0 focus:border-[#f472b6] focus:ring-[#f472b6]/20 focus:ring-2 transition-all duration-300 w-full min-h-[48px] text-base shadow-sm hover:border-[#d1d5db]"
                />
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-[#52525b] font-medium text-sm mb-2 block">
                  {t('contact.form.message')}
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder={t('contact.form.messagePlaceholder') || "Describe your operational challenges, current systems, and what you're looking to improve..."}
                  className="bg-white border-[#e5e7eb] text-[#1a1d29] placeholder:text-[#9ca3af] mt-0 min-h-[120px] md:min-h-[140px] focus:border-[#a78bfa] focus:ring-[#a78bfa]/20 focus:ring-2 transition-all duration-300 w-full text-base shadow-sm hover:border-[#d1d5db] resize-y"
                />
              </div>

              <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
                <Button
                  type="submit"
                  className="w-full bg-white text-[#1a1d29] hover:bg-[#f3f4f6] transition-all duration-300 py-4 md:py-6 text-sm tracking-wide border-0 font-medium cursor-hover min-h-[44px] md:min-h-[52px]"
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

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-white border-[#e5e7eb] max-w-md rounded-xl">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-2xl text-center text-[#1a1d29]">
              {t('contact.success.title')}
            </DialogTitle>
            <DialogDescription className="text-center text-[#52525b] mt-2">
              {t('contact.success.message')}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-3 rounded-lg text-base font-semibold transition-colors duration-300"
            >
              {t('contact.success.button')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}