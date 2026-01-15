import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../../contexts/LanguageContext";
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
import { Calendar, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { saveFormSubmission } from "../../utils/formSubmission";

export function DiscoveryCall() {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); // 1: Form, 2: Calendar, 3: Confirmation
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    projectBrief: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const availableDates = [
    { date: "2026-01-15", day: "Wednesday" },
    { date: "2026-01-16", day: "Thursday" },
    { date: "2026-01-17", day: "Friday" },
    { date: "2026-01-20", day: "Monday" },
    { date: "2026-01-21", day: "Tuesday" },
    { date: "2026-01-23", day: "Thursday" },
  ];

  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleTimeSelection = () => {
    try {
      // Save form submission to localStorage
      saveFormSubmission({
        ...formData,
        selectedDate,
        selectedTime,
        type: 'discovery-call',
      });
    setStep(3);
    } catch (error) {
      console.error('Error saving form submission:', error);
      alert('There was an error scheduling your call. Please try again.');
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        projectBrief: "",
      });
      setSelectedDate("");
      setSelectedTime("");
    }, 300);
  };

  return (
    <section 
      ref={sectionRef}
      id="discovery" 
      className="relative py-14 md:py-20 lg:py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-white opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
      }}
    >
      {/* Static gradient orbs - no animation, reduced blur, responsive sizes */}
      <div
        className="absolute top-10 left-1/4 md:top-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-10 right-1/4 md:bottom-20 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div 
          className="text-center opacity-0 translate-y-4 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '200ms',
          }}
        >
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#1e40af] uppercase font-medium">
              {t('discovery.badge')}
            </span>
          </div>

          <h2 
            className="tracking-tight mb-4 md:mb-6 text-[#1a1d29]"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            {t('discovery.title')}
          </h2>
          <p 
            className="text-[#71717a] max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
            }}
          >
            {t('discovery.subtitle')}
          </p>

          <div className="relative max-w-2xl mx-auto">
            {/* Card */}
            <div className="relative p-6 md:p-8 lg:p-12 rounded-xl md:rounded-2xl border-2 border-[#e5e7eb] backdrop-blur-sm overflow-hidden bg-white/60 hover:scale-[1.01] transition-transform duration-300">
              {/* Static gradient background */}
              <div className="absolute inset-0 opacity-20" style={{
                background: "radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
              }} />
              
              <div className="relative space-y-8" style={{ transform: "translateZ(20px)" }}>
                <div className="space-y-4">
                  {[
                    "discovery.feature.0",
                    "discovery.feature.1",
                    "discovery.feature.2",
                    "discovery.feature.3"
                  ].map((featureKey, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 group"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2.5"
                        style={{
                          background: `linear-gradient(135deg, #fb923c, #1e40af)`,
                          boxShadow: "0 0 10px rgba(251, 146, 60, 0.5)",
                        }}
                      />
                      <p className="text-[#52525b] text-left group-hover:text-[#1a1d29] transition-colors duration-500">
                        {t(featureKey)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300">
                  <Button
                    onClick={() => setShowModal(true)}
                    className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-4 md:py-6 text-sm tracking-wide rounded-lg border-0 transition-colors duration-300 font-semibold cursor-hover shadow-xl shadow-[#1e40af]/30 min-h-[44px] md:min-h-[52px]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t('discovery.cta')}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>

                <p className="text-xs text-[#9ca3af] text-center">
                  {t('discovery.footer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Call Modal */}
      <Dialog open={showModal} onOpenChange={handleClose}>
        <DialogContent className="bg-white border-[#e5e7eb] max-w-3xl rounded-xl md:rounded-2xl max-h-[90vh] overflow-y-auto mx-4 md:mx-0">
          <DialogHeader>
            <DialogTitle className="text-3xl tracking-tight text-[#1a1d29]">
              {step === 1 && t('discovery.modal.step1.title')}
              {step === 2 && t('discovery.modal.step2.title')}
              {step === 3 && t('discovery.modal.step3.title')}
            </DialogTitle>
            <DialogDescription className="text-base text-[#71717a]">
              {step === 1 && t('discovery.modal.step1.subtitle')}
              {step === 2 && t('discovery.modal.step2.subtitle')}
              {step === 3 && t('discovery.modal.step3.subtitle')}
            </DialogDescription>
          </DialogHeader>

          {/* Step 1: Form */}
          {step === 1 && (
            <form onSubmit={handleFormSubmit} className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-[#52525b] font-medium">
                    {t('discovery.form.name')} *
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder={t('discovery.form.namePlaceholder') || "e.g., Michael Chen"}
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full min-h-[44px]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#52525b] font-medium">
                    {t('discovery.form.email')} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t('discovery.form.emailPlaceholder') || "e.g., mchen@productionco.com"}
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full min-h-[44px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-[#52525b] font-medium">
                    {t('discovery.form.company')} *
                  </Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder={t('discovery.form.companyPlaceholder') || "e.g., Production Co. Manufacturing"}
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full min-h-[44px]"
                  />
                </div>
                <div>
                  <Label htmlFor="role" className="text-[#52525b] font-medium">
                    {t('discovery.form.role')} *
                  </Label>
                  <Input
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    placeholder={t('discovery.form.rolePlaceholder') || "e.g., Operations Director, Plant Manager"}
                    className="bg-white border-[#e5e7eb] mt-2 focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#52525b] font-medium">
                  {t('discovery.form.phone')}
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder={t('discovery.form.phonePlaceholder') || "e.g., +1 (555) 123-4567"}
                  className="bg-white border-[#e5e7eb] mt-2 focus:border-[#fb923c] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full min-h-[44px]"
                />
              </div>

              <div>
                <Label htmlFor="projectBrief" className="text-[#52525b] font-medium">
                  {t('discovery.form.projectBrief')} *
                </Label>
                <Textarea
                  id="projectBrief"
                  required
                  value={formData.projectBrief}
                  onChange={(e) => setFormData({...formData, projectBrief: e.target.value})}
                  placeholder={t('discovery.form.projectBriefPlaceholder') || "Describe your production challenges, current systems, goals, and timeline..."}
                  className="bg-white border-[#e5e7eb] mt-2 min-h-[120px] focus:border-[#1e40af] transition-colors text-[#1a1d29] placeholder:text-[#9ca3af] w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-6 text-base tracking-wide border-0 font-semibold transition-colors duration-300 shadow-lg shadow-[#1e40af]/30"
              >
                {t('discovery.form.continue')}
              </Button>
            </form>
          )}

          {/* Step 2: Calendar */}
          {step === 2 && (
            <div className="space-y-8 pt-6">
              {/* Date Selection */}
              <div>
                <Label className="text-[#52525b] font-medium mb-4 block">
                  Select a Date
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableDates.map((dateObj, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedDate(dateObj.date)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedDate === dateObj.date
                          ? "border-[#fb923c] bg-[#fb923c]/10"
                          : "border-[#e5e7eb] hover:border-[#fb923c]/50"
                      }`}
                    >
                      <Calendar className="w-5 h-5 mx-auto mb-2 text-[#1e40af]" />
                      <p className="text-sm font-semibold text-[#1a1d29]">{dateObj.day}</p>
                      <p className="text-xs text-[#71717a]">{dateObj.date}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                      <div>
                  <Label className="text-[#52525b] font-medium mb-4 block">
                          {t('discovery.calendar.selectTime')}
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {availableTimes.map((time, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                          selectedTime === time
                            ? "border-[#1e40af] bg-[#1e40af]/10"
                            : "border-[#e5e7eb] hover:border-[#1e40af]/50"
                        }`}
                      >
                        <Clock className="w-4 h-4 mx-auto mb-1 text-[#1e40af]" />
                        <p className="text-xs font-semibold text-[#1a1d29]">{time}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              {selectedDate && selectedTime && (
                        <div>
                  <Button
                    onClick={handleTimeSelection}
                    className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-6 text-base tracking-wide border-0 font-semibold transition-colors duration-300 shadow-lg shadow-[#1e40af]/30"
                  >
                            {t('discovery.calendar.confirm')}
                  </Button>
                        </div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#10b981]/10 mb-6">
                <CheckCircle className="w-10 h-10 text-[#10b981]" />
              </div>

              <h3 className="text-2xl font-semibold text-[#1a1d29] mb-4">
                {t('discovery.confirmation.title')}
              </h3>
              
              <div className="bg-[#f9fafb] rounded-xl p-6 mb-6 space-y-2">
                <p className="text-sm text-[#71717a]">
                  <strong className="text-[#1a1d29]">{formData.name}</strong>
                </p>
                <p className="text-sm text-[#71717a]">{formData.email}</p>
                <div className="h-px bg-[#e5e7eb] my-4" />
                <p className="text-sm text-[#1a1d29] font-semibold">
                  {selectedDate} at {selectedTime} EST
                </p>
              </div>

              <p className="text-[#71717a] mb-8">
                {t('discovery.confirmation.message', { email: formData.email })}
              </p>

              <Button
                onClick={handleClose}
                className="bg-[#1e40af] text-white hover:bg-[#1e3a8a] px-8 py-3 rounded-lg font-semibold"
              >
                {t('discovery.confirmation.done')}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}