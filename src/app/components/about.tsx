import { useLanguage } from "../../contexts/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const advisoryBoard = [
    {
      name: "Martin BERGSTROM",
      role: "Corporate finance and M&A advisor",
      description: "Focused on capital raising and strategic financing.",
      image: null, // Fotoğraf sonradan eklenecek
    },
    {
      name: "Edon IDRIZI",
      role: "International investment professional",
      description: "Specializing in venture capital, cross-border M&A.",
      image: null, // Fotoğraf sonradan eklenecek
    },
  ];

  return (
    <section id="about" className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-[#fafaf9]">
      {/* Static background elements */}
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.06) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm tracking-[0.3em] text-[#fb923c] uppercase font-medium">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
            Advisory Board
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
            Experienced advisors guiding our strategic direction.
          </p>
        </div>

        {/* Advisory Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisoryBoard.map((member, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border-2 border-[#e5e7eb] bg-white hover:border-[#1e40af]/40 hover:shadow-xl hover:shadow-[#1e40af]/10 transition-all duration-500"
            >
              {/* Photo placeholder - sonradan fotoğraf eklenecek */}
              <div className="mb-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#e5e7eb] group-hover:border-[#1e40af]/40 transition-colors duration-500"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#fb923c]/20 to-[#1e40af]/20 border-2 border-[#e5e7eb] group-hover:border-[#1e40af]/40 flex items-center justify-center transition-colors duration-500">
                    <span className="text-2xl font-semibold text-[#1a1d29]/40">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight text-[#1a1d29]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#1e40af] mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-[#71717a] leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Decorative element */}
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "#1e40af",
                  boxShadow: "0 0 10px #1e40af",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

