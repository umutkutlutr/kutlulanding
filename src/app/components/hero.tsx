// Motion removed for performance
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f1ea] py-16 md:py-24 lg:py-32">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0">
        {/* Layer 1 - Static gradient orbs - no animation */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(30, 64, 175, 0.1) 0%, transparent 50%)",
          }}
        />

      </div>

      {/* Simplified floating shapes - static, reduced blur, responsive sizes */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div>
          <h1 
            className="tracking-tight mb-6 md:mb-8 leading-[1.1] text-[#1a1d29] font-bold"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
            }}
          >
            {t('hero.title.line1')}
            <br />
            <span className="bg-gradient-to-r from-[#fb923c] to-[#1e40af] bg-clip-text text-transparent">
              {t('hero.title.line2')}
            </span>
          </h1>
        </div>

        <p 
          className="text-[#52525b] mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-medium"
          style={{
            fontSize: 'clamp(0.9375rem, 2vw, 1.25rem)',
            lineHeight: '1.6',
          }}
        >
          {t('hero.subtitle.line1')}
          <br />
          {t('hero.subtitle.line2')}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            onClick={() => scrollToSection("discovery")}
            className="relative overflow-hidden bg-[#1e40af] text-white w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 rounded-lg text-sm sm:text-base tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 cursor-hover font-semibold shadow-xl shadow-[#1e40af]/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95 min-h-[44px] sm:min-h-[52px]"
          >
            <span className="relative z-10 flex items-center justify-center">
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-500" />
            </span>
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-2 border-[#1a1d29] hover:border-[#fb923c] bg-transparent hover:bg-[#fb923c]/10 text-[#1a1d29] hover:text-[#1a1d29] w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-6 rounded-lg transition-all duration-300 text-sm sm:text-base tracking-wide cursor-hover font-semibold shadow-md hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 min-h-[44px] sm:min-h-[52px]"
          >
            {t('hero.cta.secondary')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator - removed for performance */}
    </section>
  );
}