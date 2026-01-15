import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const newScrolled = scrollY > 50;
          
          // Only update if state actually changed
          if (newScrolled !== scrolled && Math.abs(scrollY - lastScrollY) > 20) {
            setScrolled(newScrolled);
            lastScrollY = scrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "expertise", label: t("nav.expertise") },
    { id: "industries", label: t("nav.industries") },
    { id: "approach", label: t("nav.approach") },
    { id: "contact", label: t("nav.contact") },
    { id: "about", label: t("nav.about") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ${
        scrolled 
          ? "bg-[#f5f1ea]/90 shadow-lg border-b border-[#e5e7eb] backdrop-blur-sm py-1 md:py-2" 
          : "bg-[#f5f1ea]/40 py-1 md:py-2"
      }`}
    >
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <a href="/" className="flex items-center">
              <div 
                className="relative"
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <img
                  src="/images/logos/kutlu.png"
                  alt="Kutlu Solutions"
                  className="h-24 md:h-32 lg:h-40 w-auto object-contain"
                  style={{
                    backgroundColor: 'transparent',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.2) brightness(0.95)',
                    imageRendering: 'crisp-edges',
                  }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Center Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm text-[#52525b] hover:text-[#1a1d29] transition-colors duration-500 tracking-wide group font-medium hover:scale-105 min-h-[44px] flex items-center"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fb923c] to-[#1e40af] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </div>

          {/* Right CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="hover:scale-105 active:scale-95 transition-transform duration-300">
              <Button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="relative overflow-hidden bg-[#1e40af] text-white px-6 py-2.5 rounded-lg text-sm tracking-wide border-0 hover:bg-[#1e3a8a] transition-all duration-300 font-semibold cursor-hover shadow-lg shadow-[#1e40af]/30 min-h-[44px]"
              >
                <span className="relative z-10">{t("nav.cta")}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="w-10 h-10 rounded-md hover:bg-white/10 transition-colors duration-300 flex items-center justify-center min-h-[44px] min-w-[44px]"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-[#1a1d29]" />
                  ) : (
                    <Menu className="h-6 w-6 text-[#1a1d29]" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-sm bg-[#f5f1ea] border-[#e5e7eb]">
                <div className="flex flex-col h-full pt-8">
                  {/* Mobile Nav Items */}
                  <nav className="flex flex-col gap-2 mb-8">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className="text-left px-4 py-3 text-base text-[#52525b] hover:text-[#1a1d29] hover:bg-white/10 rounded-lg transition-colors duration-300 font-medium min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="mt-auto pb-8">
                    <Button
                      onClick={() => {
                        scrollToSection("contact");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a8a] py-3 rounded-lg text-base tracking-wide border-0 transition-all duration-300 font-semibold shadow-lg shadow-[#1e40af]/30 min-h-[44px]"
                    >
                      {t("nav.cta")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}