import { useLanguage } from "../../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-12 md:py-16 overflow-hidden">
      {/* Static gradient backgrounds - no animation, reduced blur, responsive sizes */}
      <div
        className="absolute top-0 left-1/4 w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-40 h-40 md:w-56 md:h-56 lg:w-[350px] lg:h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 
              className="mb-3 md:mb-4 tracking-tight hover:bg-gradient-to-r hover:from-[#a78bfa] hover:via-[#60a5fa] hover:to-[#f472b6] hover:bg-clip-text hover:text-transparent transition-all duration-300"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              }}
            >
              Kutlu Solutions
            </h3>
            <p 
              className="text-[#9ca3af] max-w-md leading-relaxed"
              style={{
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                lineHeight: '1.6',
              }}
            >
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 
              className="mb-3 md:mb-4 text-[#9ca3af]"
              style={{
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
              }}
            >
              {t('footer.menu')}
            </h4>
            <div className="space-y-2">
              {[
                { id: "expertise", labelKey: "nav.expertise" },
                { id: "industries", labelKey: "nav.industries" },
                { id: "approach", labelKey: "nav.approach" },
                { id: "contact", labelKey: "nav.contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-[#71717a] hover:text-white transition-colors duration-500 cursor-hover relative group hover:translate-x-1 min-h-[44px] flex items-center"
                  style={{
                    fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                  }}
                >
                  {t(link.labelKey)}
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="mb-3 md:mb-4 text-[#9ca3af]"
              style={{
                fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
              }}
            >
              {t('footer.contact')}
            </h4>
            <div className="space-y-3 md:space-y-4 text-[#71717a]">
              <a
                href="mailto:hello@kutlusolutions.com"
                className="cursor-hover block hover:text-[#a78bfa] hover:translate-x-1 transition-all duration-300 min-h-[44px] flex items-center break-all"
                style={{
                  fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                }}
              >
                hello@kutlusolutions.com
              </a>
              <a
                href="tel:+902126882112"
                className="cursor-hover block hover:text-[#60a5fa] hover:translate-x-1 transition-all duration-300 min-h-[44px] flex items-center"
                style={{
                  fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                }}
              >
                0212 688 21 12
              </a>
              
              {/* Headquarters */}
              <div className="cursor-hover leading-relaxed pt-2 hover:text-[#f472b6] hover:translate-x-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#9ca3af] mb-1">Headquarters</p>
                <p className="text-xs">7480 Bird Rd. STE 810</p>
                <p className="text-xs">33155 Miami, Florida</p>
                <p className="text-xs">USA</p>
              </div>

              {/* Turkey Office */}
              <div className="cursor-hover leading-relaxed pt-2 hover:text-[#f472b6] hover:translate-x-1 transition-all duration-300">
                <p className="text-xs font-semibold text-[#9ca3af] mb-1">Turkey Office</p>
                <p className="text-xs">Zekeriyaköy Mah. Mavromolos Sk.</p>
                <p className="text-xs">A Blok No: 8 A</p>
                <p className="text-xs">İç Kapı No: 22</p>
                <p className="text-xs">Sarıyer / İstanbul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 md:pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p 
              className="text-[#71717a] text-center md:text-left"
              style={{
                fontSize: 'clamp(0.75rem, 1vw, 0.75rem)',
              }}
            >
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </p>
            <button
              onClick={() => {
                // Privacy policy link - can be updated with actual page
                console.log("Privacy Policy clicked");
              }}
              className="text-[#71717a] hover:text-[#a78bfa] hover:translate-x-1 transition-all duration-300 cursor-hover min-h-[44px] flex items-center"
              style={{
                fontSize: 'clamp(0.75rem, 1vw, 0.75rem)',
              }}
            >
              {t('footer.privacy')}
            </button>
          </div>
        </div>
      </div>

      {/* Static grid pattern - no animation */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </footer>
  );
}
