import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { 
  Building2, 
  Heart, 
  Factory, 
  Cpu, 
  ShoppingBag, 
  Zap, 
  Truck, 
  Home,
  GraduationCap,
  Radio,
  Film,
  Briefcase,
  Bitcoin,
  Plane,
  ShieldCheck,
  Leaf
} from "lucide-react";

export function Industries() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industries = [
    {
      icon: Building2,
      title: "Financial Services",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
      subsectors: [
        {
          name: "Banking & Lending",
          solutions: ["Core banking systems", "Loan origination platforms", "Credit scoring engines", "Digital banking portals"]
        },
        {
          name: "Investment Management",
          solutions: ["Portfolio management systems", "Trading platforms", "Risk analytics tools", "Client reporting dashboards"]
        },
        {
          name: "Insurance",
          solutions: ["Policy administration systems", "Claims management platforms", "Underwriting automation", "Agent portals"]
        },
        {
          name: "Payment Processing",
          solutions: ["Payment gateway integration", "Fraud detection systems", "Settlement platforms", "Mobile payment solutions"]
        }
      ]
    },
    {
      icon: Bitcoin,
      title: "Crypto & DeFi",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/10",
      subsectors: [
        {
          name: "Cryptocurrency Exchanges",
          solutions: ["Trading engines", "Order matching systems", "Wallet infrastructure", "KYC/AML compliance tools"]
        },
        {
          name: "DeFi Protocols",
          solutions: ["Smart contract development", "Liquidity pool management", "Yield farming platforms", "Governance systems"]
        },
        {
          name: "Wallet Solutions",
          solutions: ["Multi-chain wallets", "Hardware wallet integration", "Custody solutions", "Transaction signing systems"]
        },
        {
          name: "Blockchain Infrastructure",
          solutions: ["Node management", "Block explorers", "API services", "Chain indexing systems"]
        }
      ]
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
      subsectors: [
        {
          name: "Hospital Systems",
          solutions: ["Electronic health records (EHR)", "Patient management systems", "Bed management", "Emergency room optimization"]
        },
        {
          name: "Pharmaceuticals",
          solutions: ["Drug discovery platforms", "Clinical trial management", "Regulatory compliance systems", "Supply chain tracking"]
        },
        {
          name: "Medical Devices",
          solutions: ["IoT device connectivity", "Data collection platforms", "Remote monitoring systems", "Device management portals"]
        },
        {
          name: "Telemedicine",
          solutions: ["Video consultation platforms", "Remote diagnosis tools", "E-prescription systems", "Patient engagement apps"]
        },
        {
          name: "Biotech",
          solutions: ["Laboratory information systems (LIMS)", "Genomics data platforms", "Research collaboration tools", "Sample tracking systems"]
        }
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
      subsectors: [
        {
          name: "Automotive",
          solutions: ["Manufacturing execution systems (MES)", "Quality control automation", "Supply chain management", "Connected vehicle platforms"]
        },
        {
          name: "Aerospace",
          solutions: ["Maintenance tracking systems", "Parts inventory management", "Compliance documentation", "Flight data analytics"]
        },
        {
          name: "Industrial Equipment",
          solutions: ["Predictive maintenance platforms", "Asset tracking systems", "Equipment monitoring IoT", "Service scheduling tools"]
        },
        {
          name: "Consumer Goods",
          solutions: ["Demand forecasting systems", "Production planning tools", "Packaging automation", "Distribution management"]
        },
        {
          name: "Electronics",
          solutions: ["Component traceability", "Quality assurance systems", "Test automation platforms", "Yield optimization tools"]
        }
      ]
    },
    {
      icon: Cpu,
      title: "Technology & Software",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
      subsectors: [
        {
          name: "SaaS Platforms",
          solutions: ["Multi-tenant architecture", "Subscription management", "Usage analytics", "API marketplace"]
        },
        {
          name: "Enterprise Software",
          solutions: ["ERP systems", "CRM platforms", "Workflow automation", "Integration middleware"]
        },
        {
          name: "Hardware",
          solutions: ["Firmware development", "Device management platforms", "Update distribution systems", "Performance monitoring"]
        },
        {
          name: "AI/ML",
          solutions: ["Model training pipelines", "Data labeling platforms", "Inference engines", "MLOps automation"]
        },
        {
          name: "Cybersecurity",
          solutions: ["Threat detection systems", "Security information platforms", "Vulnerability management", "Incident response tools"]
        }
      ]
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
      subsectors: [
        {
          name: "Online Retail",
          solutions: ["E-commerce platforms", "Shopping cart systems", "Payment integration", "Order tracking portals"]
        },
        {
          name: "Omnichannel",
          solutions: ["Unified inventory systems", "Customer data platforms", "Cross-channel analytics", "Store fulfillment tools"]
        },
        {
          name: "Marketplace Platforms",
          solutions: ["Vendor management systems", "Commission tracking", "Dispute resolution platforms", "Seller analytics"]
        },
        {
          name: "D2C Brands",
          solutions: ["Customer relationship management", "Subscription platforms", "Personalization engines", "Loyalty programs"]
        },
        {
          name: "Luxury Goods",
          solutions: ["Authentication systems", "Exclusivity management", "Concierge platforms", "VIP customer portals"]
        }
      ]
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/10",
      subsectors: [
        {
          name: "Oil & Gas",
          solutions: ["Production monitoring systems", "Pipeline management", "Trading platforms", "Reserves management"]
        },
        {
          name: "Renewable Energy",
          solutions: ["Solar farm monitoring", "Wind turbine analytics", "Energy storage management", "Grid integration systems"]
        },
        {
          name: "Electric Utilities",
          solutions: ["Smart grid management", "Outage management systems", "Load forecasting", "Billing automation"]
        },
        {
          name: "Water & Waste",
          solutions: ["Treatment plant automation", "Distribution monitoring", "Quality testing systems", "Customer billing platforms"]
        },
        {
          name: "Smart Grid",
          solutions: ["Demand response platforms", "Energy management systems", "Meter data management", "Grid optimization tools"]
        }
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
      subsectors: [
        {
          name: "Freight & Shipping",
          solutions: ["Transportation management (TMS)", "Route optimization", "Load planning systems", "Freight tracking portals"]
        },
        {
          name: "Aviation",
          solutions: ["Flight scheduling systems", "Crew management", "Maintenance tracking", "Passenger booking platforms"]
        },
        {
          name: "Maritime",
          solutions: ["Vessel tracking systems", "Port management", "Container tracking", "Maritime documentation"]
        },
        {
          name: "Last-Mile Delivery",
          solutions: ["Delivery optimization", "Driver mobile apps", "Real-time tracking", "Customer notification systems"]
        },
        {
          name: "Fleet Management",
          solutions: ["Vehicle telematics", "Fuel management", "Driver behavior monitoring", "Maintenance scheduling"]
        }
      ]
    },
    {
      icon: Home,
      title: "Real Estate & Construction",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
      subsectors: [
        {
          name: "Commercial Real Estate",
          solutions: ["Property management systems", "Lease administration", "Tenant portals", "Space optimization tools"]
        },
        {
          name: "Residential Development",
          solutions: ["Sales management systems", "Customer portals", "Homeowner apps", "Community management platforms"]
        },
        {
          name: "Construction Management",
          solutions: ["Project management tools", "BIM integration", "Safety compliance systems", "Subcontractor management"]
        },
        {
          name: "Property Tech",
          solutions: ["Smart building platforms", "Virtual tour systems", "Rental marketplaces", "Property valuation tools"]
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Education",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
      subsectors: [
        {
          name: "Higher Education",
          solutions: ["Learning management systems (LMS)", "Student information systems", "Research collaboration tools", "Alumni engagement platforms"]
        },
        {
          name: "K-12",
          solutions: ["Classroom management tools", "Parent communication portals", "Student assessment systems", "Attendance tracking"]
        },
        {
          name: "EdTech Platforms",
          solutions: ["Interactive learning tools", "Content management systems", "Student progress tracking", "Gamification platforms"]
        },
        {
          name: "Corporate Training",
          solutions: ["Training management systems", "Skills assessment tools", "Certification tracking", "Learning analytics"]
        },
        {
          name: "E-Learning",
          solutions: ["Video streaming platforms", "Course authoring tools", "Quiz and assessment engines", "Mobile learning apps"]
        }
      ]
    },
    {
      icon: Radio,
      title: "Telecommunications",
      color: "#f97316",
      gradient: "from-[#f97316]/20 to-[#fb923c]/10",
      subsectors: [
        {
          name: "Mobile Networks",
          solutions: ["Network management systems", "Service assurance platforms", "Subscriber management", "Revenue assurance tools"]
        },
        {
          name: "ISPs",
          solutions: ["Bandwidth management", "Customer self-service portals", "Billing systems", "Network monitoring"]
        },
        {
          name: "5G Infrastructure",
          solutions: ["Network slicing management", "Edge computing platforms", "IoT connectivity", "Performance analytics"]
        },
        {
          name: "Cable & Satellite",
          solutions: ["Content delivery systems", "Set-top box management", "Viewing analytics", "Channel scheduling"]
        },
        {
          name: "VoIP",
          solutions: ["Call routing systems", "Quality monitoring", "SIP trunk management", "Unified communications"]
        }
      ]
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
      subsectors: [
        {
          name: "Streaming Platforms",
          solutions: ["Content delivery networks (CDN)", "Streaming optimization", "Subscriber management", "Recommendation engines"]
        },
        {
          name: "Gaming",
          solutions: ["Multiplayer infrastructure", "In-game economy systems", "Player analytics", "Anti-cheat systems"]
        },
        {
          name: "Publishing",
          solutions: ["Content management systems", "Digital rights management", "Distribution platforms", "Reader analytics"]
        },
        {
          name: "Broadcasting",
          solutions: ["Broadcast automation", "Content scheduling", "Live streaming infrastructure", "Audience measurement"]
        },
        {
          name: "Live Events",
          solutions: ["Ticketing systems", "Venue management", "Live streaming platforms", "Audience engagement tools"]
        }
      ]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      color: "#fb923c",
      gradient: "from-[#fb923c]/20 to-[#f97316]/10",
      subsectors: [
        {
          name: "Consulting",
          solutions: ["Project management platforms", "Time tracking systems", "Resource allocation tools", "Client portals"]
        },
        {
          name: "Legal Services",
          solutions: ["Case management systems", "Document automation", "Legal research platforms", "Client billing systems"]
        },
        {
          name: "Accounting",
          solutions: ["Tax preparation software", "Audit management tools", "Financial reporting systems", "Client data platforms"]
        },
        {
          name: "HR Services",
          solutions: ["Applicant tracking systems", "Payroll management", "Performance review platforms", "Employee onboarding"]
        },
        {
          name: "Marketing Agencies",
          solutions: ["Campaign management tools", "Analytics dashboards", "Creative collaboration platforms", "Client reporting systems"]
        }
      ]
    },
    {
      icon: Plane,
      title: "Travel & Hospitality",
      color: "#1e40af",
      gradient: "from-[#1e40af]/20 to-[#1e3a8a]/10",
      subsectors: [
        {
          name: "Airlines",
          solutions: ["Reservation systems", "Revenue management", "Flight operations platforms", "Loyalty program management"]
        },
        {
          name: "Hotels & Resorts",
          solutions: ["Property management systems", "Booking engines", "Guest experience platforms", "Housekeeping management"]
        },
        {
          name: "Travel Agencies",
          solutions: ["Tour operator systems", "Multi-channel booking", "Itinerary management", "Customer relationship tools"]
        },
        {
          name: "Cruise Lines",
          solutions: ["Onboard service management", "Shore excursion booking", "Inventory management", "Guest entertainment systems"]
        },
        {
          name: "Booking Platforms",
          solutions: ["Aggregation engines", "Price comparison tools", "Review management", "Supplier integration APIs"]
        }
      ]
    },
    {
      icon: ShieldCheck,
      title: "Government & Public Sector",
      color: "#1e3a8a",
      gradient: "from-[#1e3a8a]/20 to-[#1e40af]/10",
      subsectors: [
        {
          name: "Federal Agencies",
          solutions: ["Citizen service portals", "Regulatory compliance systems", "Interagency collaboration tools", "Data governance platforms"]
        },
        {
          name: "State & Local Gov",
          solutions: ["Permitting systems", "Tax collection platforms", "Public records management", "Service request tracking"]
        },
        {
          name: "Defense",
          solutions: ["Logistics management", "Asset tracking systems", "Secure communication platforms", "Mission planning tools"]
        },
        {
          name: "Public Safety",
          solutions: ["Emergency response systems", "Dispatch management", "Incident reporting tools", "First responder communication"]
        },
        {
          name: "Social Services",
          solutions: ["Case management platforms", "Benefits administration", "Eligibility determination", "Service coordination tools"]
        }
      ]
    },
    {
      icon: Leaf,
      title: "Agriculture & Food",
      color: "#10b981",
      gradient: "from-[#10b981]/20 to-[#059669]/10",
      subsectors: [
        {
          name: "AgTech",
          solutions: ["Precision farming platforms", "Crop monitoring systems", "IoT sensor integration", "Yield prediction tools"]
        },
        {
          name: "Food Processing",
          solutions: ["Quality control systems", "Production tracking", "Recipe management", "Compliance documentation"]
        },
        {
          name: "Distribution",
          solutions: ["Cold chain monitoring", "Logistics optimization", "Traceability systems", "Inventory management"]
        },
        {
          name: "Farm Management",
          solutions: ["Field management software", "Equipment tracking", "Financial management tools", "Worker management systems"]
        },
        {
          name: "Supply Chain",
          solutions: ["Farm-to-table tracking", "Supplier management", "Demand forecasting", "Quality assurance platforms"]
        }
      ]
    },
  ];

  return (
    <section id="industries" ref={ref} className="relative py-32 border-t border-[#e5e7eb]/50 overflow-hidden bg-white">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(30, 64, 175, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-sm tracking-[0.3em] text-[#1e40af] uppercase font-medium">
              Industries
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-[#1a1d29]">
            Deep industry expertise
          </h2>
          <p className="text-[#71717a] max-w-2xl mx-auto leading-relaxed text-lg">
            We understand the unique challenges, regulations, and opportunities within each sector.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [20 * (i % 2 === 0 ? 1 : -1), -20 * (i % 2 === 0 ? 1 : -1)]
            );

            return (
              <IndustryCard
                key={i}
                industry={industry}
                index={i}
                yOffset={yOffset}
                isHovered={selectedIndustry === i}
                onHover={() => setSelectedIndustry(i)}
                onLeave={() => setSelectedIndustry(null)}
              />
            );
          })}
        </div>

        {/* Hovered Industry Details */}
        {selectedIndustry !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-16 p-10 rounded-2xl border-2 bg-white shadow-2xl"
            style={{
              borderColor: industries[selectedIndustry].color,
            }}
          >
            {/* Industry Title */}
            <motion.div 
              className="mb-8 pb-6 border-b border-[#e5e7eb]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 
                className="text-2xl tracking-tight mb-2"
                style={{ color: industries[selectedIndustry].color }}
              >
                {industries[selectedIndustry].title}
              </h3>
              <p className="text-sm text-[#71717a]">
                Specialized software solutions for each subsector
              </p>
            </motion.div>

            {/* Subsectors with their Solutions */}
            <div className="space-y-8">
              {industries[selectedIndustry].subsectors.map((subsector, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  {/* Subsector Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-3 h-3 rounded-full transition-all duration-300" 
                      style={{ 
                        backgroundColor: industries[selectedIndustry].color,
                        boxShadow: `0 0 12px ${industries[selectedIndustry].color}70`
                      }}
                    />
                    <h4 className="text-lg font-semibold text-[#1a1d29]">
                      {subsector.name}
                    </h4>
                  </div>

                  {/* Solutions for this Subsector */}
                  <div className="pl-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {subsector.solutions.map((solution, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (i * 0.1) + (j * 0.03) }}
                        className="flex items-start gap-2 group/solution"
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-all duration-300 group-hover/solution:scale-150" 
                          style={{ 
                            backgroundColor: industries[selectedIndustry].color,
                            opacity: 0.6
                          }}
                        />
                        <p className="text-sm text-[#52525b] group-hover/solution:text-[#1a1d29] group-hover/solution:translate-x-1 transition-all duration-300 leading-relaxed">
                          {solution}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider line (except for last item) */}
                  {i < industries[selectedIndustry].subsectors.length - 1 && (
                    <motion.div 
                      className="mt-6 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: (i * 0.1) + 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function IndustryCard({ industry, index, yOffset, isHovered, onHover, onLeave }: any) {
  const handleClick = () => {
    if (isHovered) {
      onLeave();
    } else {
      onHover();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ y: yOffset }}
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Card */}
      <motion.div
        className="relative p-6 rounded-xl border-2 transition-all duration-500 overflow-hidden bg-white"
        style={{
          borderColor: isHovered ? industry.color : "#e5e7eb",
          boxShadow: isHovered ? `0 20px 40px ${industry.color}20` : "0 4px 6px rgba(0,0,0,0.05)",
        }}
        whileHover={{ y: -5 }}
      >
        {/* Gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 transition-opacity duration-500`}
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Icon with animation */}
        <motion.div
          className="relative mb-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <industry.icon 
            className="h-8 w-8 transition-colors duration-500" 
            strokeWidth={1.5} 
            style={{ 
              color: isHovered ? industry.color : "#71717a",
              filter: isHovered ? `drop-shadow(0 0 10px ${industry.color}50)` : "none"
            }}
          />
        </motion.div>

        <h3 className="relative text-base font-semibold mb-2 tracking-tight text-[#1a1d29]">
          {industry.title}
        </h3>

        {/* Subsector count */}
        <p className="relative text-xs text-[#9ca3af]">
          {industry.subsectors.length} subsectors
        </p>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.span
            className="text-xs"
            style={{ color: industry.color }}
            animate={{ x: isHovered ? [0, 4, 0] : 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.div>

        {/* Floating particle */}
        <motion.div
          className="absolute top-3 right-3 w-1 h-1 rounded-full"
          style={{
            background: industry.color,
            boxShadow: `0 0 10px ${industry.color}`,
            opacity: 0.6,
          }}
          animate={{
            y: isHovered ? [0, -8, 0] : 0,
            opacity: isHovered ? [0.4, 1, 0.4] : 0.6,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}