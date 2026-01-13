import { useLanguage } from "../../contexts/LanguageContext";

export function ProofStrip() {
  const { t } = useLanguage();

  const stats = [
    { 
      number: "$2.3B+", 
      labelKey: "proof.stats.0.label",
      color: "#fb923c",
      gradient: "from-[#fb923c] to-[#f97316]"
    },
    { 
      number: "18 years", 
      labelKey: "proof.stats.1.label",
      color: "#1e40af",
      gradient: "from-[#1e40af] to-[#1e3a8a]"
    },
    { 
      number: "Enterprise", 
      labelKey: "proof.stats.2.label",
      color: "#f97316",
      gradient: "from-[#f97316] to-[#fb923c]"
    },
  ];

  return (
    <section className="relative py-24 border-y border-[#e5e7eb] overflow-hidden bg-gradient-to-b from-[#fafaf9] to-white">
      {/* Static gradient backgrounds - no animation */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.15) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Static floating orbs - no animation, reduced blur */}
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, i) => {
            return (
              <div
                key={i}
                className="text-center relative group"
              >
                {/* Card wrapper */}
                <div
                  className="relative cursor-hover hover:scale-105 transition-transform duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Static glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle, ${stat.color}20 0%, transparent 70%)`,
                      filter: "blur(15px)",
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Number with gradient */}
                  <div
                    className="relative mb-4"
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <p
                      className={`text-5xl md:text-6xl tracking-tight bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                      style={{
                        textShadow: `0 0 40px ${stat.color}40`,
                      }}
                    >
                      {stat.number}
                    </p>
                  </div>

                  {/* Label */}
                  <p 
                    className="text-sm text-[#9ca3af] relative"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    {t(stat.labelKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
