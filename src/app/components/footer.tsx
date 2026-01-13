export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-16 overflow-hidden">
      {/* Static gradient backgrounds - no animation, reduced blur */}
      <div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg mb-4 tracking-tight hover:bg-gradient-to-r hover:from-[#a78bfa] hover:via-[#60a5fa] hover:to-[#f472b6] hover:bg-clip-text hover:text-transparent transition-all duration-300">
              Kutlu Solutions
            </h3>
            <p className="text-sm text-[#9ca3af] max-w-md leading-relaxed">
              Enterprise software consulting.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm mb-4 text-[#9ca3af]">Menu</h4>
            <div className="space-y-2">
              {[
                { id: "expertise", label: "Expertise" },
                { id: "industries", label: "Industries" },
                { id: "approach", label: "Our Approach" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-sm text-[#71717a] hover:text-white transition-colors duration-500 cursor-hover relative group hover:translate-x-1"
                >
                  {link.label}
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm mb-4 text-[#9ca3af]">Contact</h4>
            <div className="space-y-3 text-sm text-[#71717a]">
              <a
                href="mailto:hello@kutlusolutions.com"
                className="cursor-hover block hover:text-[#a78bfa] hover:translate-x-1 transition-all duration-300"
              >
                hello@kutlusolutions.com
              </a>
              <a
                href="tel:+902126882112"
                className="cursor-hover block hover:text-[#60a5fa] hover:translate-x-1 transition-all duration-300"
              >
                0212 688 21 12
              </a>
              <div className="cursor-hover leading-relaxed pt-2 hover:text-[#f472b6] hover:translate-x-1 transition-all duration-300">
                <p className="text-xs">Zekeriyaköy Mahallesi,</p>
                <p className="text-xs">Mavromolos Sk. A Blok No: 8 A</p>
                <p className="text-xs">İç Kapı No: 22</p>
                <p className="text-xs">Sarıyer / İstanbul</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#71717a] text-center md:text-left">
              © {new Date().getFullYear()} Kutlu Solutions
            </p>
            <button
              onClick={() => {
                // Privacy policy link - can be updated with actual page
                console.log("Privacy Policy clicked");
              }}
              className="text-xs text-[#71717a] hover:text-[#a78bfa] hover:translate-x-1 transition-all duration-300 cursor-hover"
            >
              Gizlilik Sözleşmesi
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
