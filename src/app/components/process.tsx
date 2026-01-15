import React, { useState, useEffect, useRef } from "react";
import { Search, Palette, Code, Rocket, Settings } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

export function Process() {
  const { t } = useLanguage();
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const steps = [
    {
      icon: Search,
      number: "01",
      titleKey: "process.step.0.title",
      descriptionKey: "process.step.0.description",
      color: "#fb923c",
      detailKeys: [
        "process.step.0.detail.0",
        "process.step.0.detail.1",
        "process.step.0.detail.2",
        "process.step.0.detail.3",
      ],
    },
    {
      icon: Palette,
      number: "02",
      titleKey: "process.step.1.title",
      descriptionKey: "process.step.1.description",
      color: "#1e40af",
      detailKeys: [
        "process.step.1.detail.0",
        "process.step.1.detail.1",
        "process.step.1.detail.2",
        "process.step.1.detail.3",
      ],
    },
    {
      icon: Code,
      number: "03",
      titleKey: "process.step.2.title",
      descriptionKey: "process.step.2.description",
      color: "#f97316",
      detailKeys: [
        "process.step.2.detail.0",
        "process.step.2.detail.1",
        "process.step.2.detail.2",
        "process.step.2.detail.3",
      ],
    },
    {
      icon: Rocket,
      number: "04",
      titleKey: "process.step.3.title",
      descriptionKey: "process.step.3.description",
      color: "#1e3a8a",
      detailKeys: [
        "process.step.3.detail.0",
        "process.step.3.detail.1",
        "process.step.3.detail.2",
        "process.step.3.detail.3",
      ],
    },
    {
      icon: Settings,
      number: "05",
      titleKey: "process.step.4.title",
      descriptionKey: "process.step.4.description",
      color: "#1e58a8",
      detailKeys: [
        "process.step.4.detail.0",
        "process.step.4.detail.1",
        "process.step.4.detail.2",
        "process.step.4.detail.3",
      ],
    },
  ];

  return (
    <section id="approach" className="relative py-14 md:py-20 lg:py-32 border-t border-white/5 overflow-hidden">
      {/* Static gradient background - no animation, responsive sizes */}
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-[500px] lg:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-out" ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                  observer.unobserve(el);
                }
              });
            }, { threshold: 0.1 });
            observer.observe(el);
          }
        }}>
          <h2 
            className="tracking-tight mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 3.75rem)',
              lineHeight: '1.1',
            }}
          >
            {t('process.title')}
          </h2>
          <p 
            className="text-[#9ca3af] max-w-2xl mx-auto leading-relaxed"
            style={{
              fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
              lineHeight: '1.6',
            }}
          >
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Static Connecting Line */}
          <div className="absolute left-6 md:left-8 lg:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block">
            <div className="w-full h-full bg-gradient-to-b from-[#a78bfa] via-[#60a5fa] to-[#f472b6]" />
          </div>

          <div className="space-y-6 md:space-y-8">
            {steps.map((step, i) => {
              return (
                <ProcessStep 
                  key={i} 
                  step={step} 
                  index={i} 
                  onClick={() => setSelectedStep(i)}
                  t={t}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="bg-[#0f0f14] border-white/10 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3 tracking-tight">
              {selectedStep !== null && (
                <>
                  <span className="text-white/40">{steps[selectedStep].number}</span>
                  {t(steps[selectedStep].titleKey)}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-sm text-[#9ca3af]">
              {selectedStep !== null && t(steps[selectedStep].descriptionKey)}
            </DialogDescription>
          </DialogHeader>
          {selectedStep !== null && (
            <div className="space-y-6 pt-4">
              <div className="space-y-3">
                {steps[selectedStep].detailKeys.map((detailKey, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0" 
                      style={{
                        background: steps[selectedStep].color,
                        boxShadow: `0 0 10px ${steps[selectedStep].color}`,
                      }}
                    />
                    <p className="text-sm text-[#9ca3af]">{t(detailKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProcessStep({ step, index, onClick, t }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (stepRef.current) {
              observer.unobserve(stepRef.current);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4 md:gap-6 lg:gap-8">
        {/* Number Circle */}
        <div
          className="relative flex-shrink-0 z-10 cursor-hover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden hover:scale-110 transition-transform duration-300 min-h-[64px] md:min-h-[80px] lg:min-h-[96px]"
          >
            {/* Animated glow */}
            <div
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${step.color}30 0%, transparent 70%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />
            
            <span 
              className="tracking-tight relative z-10 transition-colors duration-300"
              style={{
                color: isHovered ? step.color : "rgba(255, 255, 255, 0.4)",
                textShadow: isHovered ? `0 0 20px ${step.color}50` : "none",
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              }}
            >
              {step.number}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          onClick={onClick}
          className="flex-1 group cursor-pointer pt-2 md:pt-4 cursor-hover hover:translate-x-2 transition-transform duration-300 min-h-[44px] flex items-center"
        >
          <div className="transition-all duration-500 relative w-full">
            <h3 
              className="mb-1 md:mb-2 tracking-tight group-hover:text-white/80 transition-colors duration-500"
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                lineHeight: '1.2',
              }}
            >
              {t(step.titleKey)}
            </h3>
            <p 
              className="text-[#9ca3af] leading-relaxed"
              style={{
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                lineHeight: '1.6',
              }}
            >
              {t(step.descriptionKey)}
            </p>
            <p
              className="text-xs mt-3 group-hover:text-white/50 transition-colors duration-500 opacity-50"
              style={{ color: step.color }}
            >
              Details →
            </p>

            {/* Hover indicator */}
            <div
              className="absolute -left-2 top-0 bottom-0 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to bottom, ${step.color}, transparent)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}