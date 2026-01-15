import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero
    'hero.title.line1': 'Operational efficiency through',
    'hero.title.line2': 'measured systems.',
    'hero.subtitle.line1': 'We build software that increases throughput, reduces downtime, and improves traceability for manufacturing operations.',
    'hero.subtitle.line2': 'Workflow-specific systems. Hardware integrations. Measurable outcomes.',
    'hero.cta.primary': 'Schedule a Discovery Call',
    'hero.cta.secondary': 'Request a Technical Review',
    
    // Navbar
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.industries': 'Industries',
    'nav.approach': 'Our Approach',
    'nav.contact': 'Contact',
    'nav.cta': 'Talk to the Team',
    
    // ProofStrip
    'proof.stats.0.label': 'On-site workflow discovery',
    'proof.stats.1.label': 'Clean data, clear actions',
    'proof.stats.2.label': 'Built for reliability and scale',
    
    // About
    'about.badge': 'About',
    'about.headline': 'Trust, craft, reliability.',
    'about.intro': 'We build software that increases operational efficiency and quality for manufacturers. Our systems are designed for measurable outcomes: reduced downtime, improved throughput, better traceability.',
    'about.howWeWork.title': 'How we work',
    'about.howWeWork.bullet.0': 'On-site discovery to understand your workflows',
    'about.howWeWork.bullet.1': 'Clear scope definition and measurable outcomes',
    'about.howWeWork.bullet.2': 'Senior-led development with maintainability in mind',
    'about.howWeWork.bullet.3': 'Ongoing support and continuous improvement',
    'about.howWeWork.bullet.4': 'Long-term relationships, not project handoffs',
    'about.whatWeDeliver.title': 'What we deliver',
    'about.whatWeDeliver.bullet.0': 'Manufacturing systems: OEE monitoring, production tracking, shopfloor visibility',
    'about.whatWeDeliver.bullet.1': 'Business systems: workflow-specific CRM and pre-accounting',
    'about.whatWeDeliver.bullet.2': 'Integrations: hardware, sensors, ERPs, and existing infrastructure',
    'about.ai.title': 'Decision support and automation',
    'about.ai.description': 'We integrate AI where it materially improves decisions or automation: planning optimization, exception detection, automated reporting, forecasting. No hype, just practical applications.',
    'about.cta': 'Discuss Your Workflow',
    
    // Expertise
    'expertise.title': 'Expertise',
    'expertise.heading': 'What we do',
    'expertise.subtitle': 'Reliable software for critical business processes.',
    'expertise.0.title': 'Manufacturing Operations Software',
    'expertise.0.brief': 'Systems that improve throughput and reduce waste.',
    'expertise.0.details.0': 'Production tracking and OEE-style monitoring',
    'expertise.0.details.1': 'Real-time shopfloor visibility and reporting',
    'expertise.0.details.2': 'Traceability and quality checkpoint systems',
    'expertise.0.details.3': 'Planning and scheduling optimization',
    'expertise.0.details.4': 'Data-driven decision support',
    'expertise.0.approach': 'We start with on-site discovery. Our team understands your production workflows, constraints, and quality requirements before proposing solutions. Measurable outcomes: reduced downtime, lower scrap rates, improved cycle times.',
    'expertise.1.title': 'Workflow-Specific Business Systems',
    'expertise.1.brief': 'CRM and pre-accounting tailored to your processes.',
    'expertise.1.details.0': 'Customer and sales management aligned with your workflow',
    'expertise.1.details.1': 'Pre-accounting and invoicing automation',
    'expertise.1.details.2': 'Operations and approval workflows',
    'expertise.1.details.3': 'Role-based access and permissions',
    'expertise.1.details.4': 'Integration with existing systems',
    'expertise.1.approach': 'Every company\'s processes are different. We build systems that match how your teams actually work, not force-fit standard solutions. Clear scope, measurable outcomes, maintainable code.',
    'expertise.2.title': 'Hardware and System Integration',
    'expertise.2.brief': 'Secure connections between devices and data.',
    'expertise.2.details.0': 'IoT and edge device integrations',
    'expertise.2.details.1': 'Camera and sensor data pipelines',
    'expertise.2.details.2': 'ERP and legacy system connections',
    'expertise.2.details.3': 'Real-time data synchronization',
    'expertise.2.details.4': 'Built for harsh environments and uptime',
    'expertise.2.approach': 'We integrate hardware where it adds measurable value. Secure data pipelines, reliable connections, and systems designed for production environments. No over-engineering, just practical solutions.',
    'expertise.3.title': 'Ongoing Support and Maintenance',
    'expertise.3.brief': 'Long-term relationships, continuous improvement.',
    'expertise.3.details.0': 'Dedicated support team, not offshore help desk',
    'expertise.3.details.1': 'Proactive monitoring and maintenance',
    'expertise.3.details.2': 'Regular feature improvements based on usage',
    'expertise.3.details.3': 'Technology updates and dependency management',
    'expertise.3.details.4': 'Annual roadmap planning with stakeholders',
    'expertise.3.approach': 'Most client relationships span 5-10+ years. We treat your system as our own. Proactive support, measured improvements, and clear communication. No surprises.',
    'expertise.learnMore': 'Learn more',
    'expertise.modal.title': 'What This Includes',
    
    // DiscoveryCall
    'discovery.badge': 'Start Here',
    'discovery.title': 'Schedule a Discovery Call',
    'discovery.subtitle': 'Every operation is unique. We start with a discovery call to understand your workflows, constraints, and objectives before proposing solutions.',
    'discovery.feature.0': '45-minute technical consultation',
    'discovery.feature.1': 'Understand your operational challenges',
    'discovery.feature.2': 'Discuss scope and measurable outcomes',
    'discovery.feature.3': 'Receive preliminary recommendations',
    'discovery.cta': 'Schedule Your Call',
    'discovery.footer': 'No commitment required',
    'discovery.modal.step1.title': 'Tell us about your project',
    'discovery.modal.step1.subtitle': 'We\'ll use this information to prepare for our conversation.',
    'discovery.modal.step2.title': 'Choose a time',
    'discovery.modal.step2.subtitle': 'Select a date and time that works best for you.',
    'discovery.modal.step3.title': 'You\'re all set!',
    'discovery.modal.step3.subtitle': 'We\'ve sent a calendar invite to your email.',
    'discovery.form.name': 'Full Name',
    'discovery.form.namePlaceholder': 'e.g., Michael Chen',
    'discovery.form.email': 'Email',
    'discovery.form.emailPlaceholder': 'e.g., mchen@productionco.com',
    'discovery.form.company': 'Company',
    'discovery.form.companyPlaceholder': 'e.g., Production Co. Manufacturing',
    'discovery.form.role': 'Your Role',
    'discovery.form.rolePlaceholder': 'e.g., Operations Director, Plant Manager',
    'discovery.form.phone': 'Phone Number (optional)',
    'discovery.form.phonePlaceholder': 'e.g., +1 (555) 123-4567',
    'discovery.form.projectBrief': 'Brief Project Description',
    'discovery.form.projectBriefPlaceholder': 'Describe your production challenges, current systems, goals, and timeline...',
    'discovery.success.title': 'Discovery Call Scheduled',
    'discovery.success.message': 'Your discovery call has been scheduled. We\'ll send a calendar invite to your email shortly.',
    'discovery.success.button': 'Close',
    'discovery.form.continue': 'Continue to Scheduling',
    'discovery.calendar.selectDate': 'Select a Date',
    'discovery.calendar.selectTime': 'Select a Time (EST)',
    'discovery.calendar.confirm': 'Confirm Meeting',
    'discovery.confirmation.title': 'Meeting Scheduled!',
    'discovery.confirmation.message': 'We\'ve sent a calendar invite to {email}. You\'ll receive a Zoom link 24 hours before the meeting.',
    'discovery.confirmation.done': 'Done',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Discuss your operational challenges.',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'e.g., Sarah Johnson',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'e.g., sarah.johnson@manufacturing.com',
    'contact.form.company': 'Company',
    'contact.form.companyPlaceholder': 'e.g., Acme Manufacturing Inc.',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Describe your operational challenges, current systems, and what you\'re looking to improve...',
    'contact.success.title': 'Message Sent',
    'contact.success.message': 'Thank you for reaching out. We\'ll respond within 24 hours.',
    'contact.success.button': 'Close',
    'contact.form.submit': 'Send Message',
    'contact.email': 'hello@kutlusolutions.com',
    'contact.response': 'Response within 24 hours',
    
    // Footer
    'footer.description': 'Software for manufacturing operations.',
    'footer.menu': 'Menu',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© {year} Kutlu Solutions',
    
    // Work
    'work.badge': 'References',
    'work.title': 'Trusted partners',
    'work.subtitle': 'Serving manufacturing companies across industries',
    
    // Process
    'process.title': 'Our Approach',
    'process.subtitle': 'Transparent and predictable delivery.',
    'process.step.0.title': 'Discovery',
    'process.step.0.description': 'On-site workshops. Stakeholder interviews. Process mapping. We learn your business before proposing solutions.',
    'process.step.0.detail.0': 'Multi-day on-site workshops with your team',
    'process.step.0.detail.1': 'Process mapping and stakeholder interviews',
    'process.step.0.detail.2': 'Technical infrastructure assessment',
    'process.step.0.detail.3': 'Identify integration requirements',
    'process.step.1.title': 'Architecture',
    'process.step.1.description': 'System design reviews. Technology selection. Security planning. We build a foundation for the long term.',
    'process.step.1.detail.0': 'System architecture design and review',
    'process.step.1.detail.1': 'Technology stack selection for stability',
    'process.step.1.detail.2': 'Security architecture planning',
    'process.step.1.detail.3': 'Database design and data modeling',
    'process.step.2.title': 'Development',
    'process.step.2.description': 'Senior-led implementation. Weekly progress reviews. Continuous testing. No surprises.',
    'process.step.2.detail.0': 'Senior developers lead implementation',
    'process.step.2.detail.1': 'Weekly progress reviews with stakeholders',
    'process.step.2.detail.2': 'Continuous integration and testing',
    'process.step.2.detail.3': 'Code reviews and quality assurance',
    'process.step.3.title': 'Deployment',
    'process.step.3.description': 'Phased rollouts. Staff training. Documentation. We ensure smooth transitions.',
    'process.step.3.detail.0': 'Phased deployment strategy',
    'process.step.3.detail.1': 'Comprehensive staff training',
    'process.step.3.detail.2': 'Full technical documentation',
    'process.step.3.detail.3': 'Performance monitoring and optimization',
    'process.step.4.title': 'Support',
    'process.step.4.description': 'Ongoing maintenance. Feature improvements. Technology updates. We stay engaged.',
    'process.step.4.detail.0': 'Dedicated support team (not offshore)',
    'process.step.4.detail.1': 'Proactive monitoring and maintenance',
    'process.step.4.detail.2': 'Regular feature enhancements',
    'process.step.4.detail.3': 'Annual roadmap planning sessions',
    'process.modal.title': 'What This Includes',
    
    // Maintenance
    'maintenance.title': 'Continuity & Maintenance',
    'maintenance.subtitle': 'Your software stays current, secure, and performant.',
    'maintenance.feature.0.title': 'Proactive Monitoring',
    'maintenance.feature.0.description': '24/7 system health monitoring. Security updates. Performance optimization.',
    'maintenance.feature.1.title': 'Guaranteed Response Times',
    'maintenance.feature.1.description': 'Dedicated support team. Clear SLAs. Direct access to senior engineers.',
    'maintenance.feature.2.title': 'Continuous Improvement',
    'maintenance.feature.2.description': 'Regular feature enhancements. Technology updates. Annual roadmap planning.',
    
    // Common
    'common.discovery': 'Discovery Call',
    'common.contact': 'Contact',
  },
  tr: {
    // Hero
    'hero.title.line1': 'Üretim verimliliğini',
    'hero.title.line2': 'ölçülebilir kılan yazılımlar',
    'hero.subtitle.line1': 'OEE, izlenebilirlik, planlama ve shopfloor görünürlüğü için entegre sistemler.',
    'hero.subtitle.line2': 'Operasyonel mükemmellik, veriyle desteklenir.',
    'hero.cta.primary': 'Keşif Görüşmesi Planla',
    'hero.cta.secondary': 'Çözümlerimiz',
    
    // Navbar
    'nav.expertise': 'Uzmanlık',
    'nav.industries': 'Sektörler',
    'nav.approach': 'Yaklaşımımız',
    'nav.contact': 'İletişim',
    'nav.cta': 'İletişime Geç',
    
    // ProofStrip
    'proof.stats.0.label': 'Yönetilen sistemler',
    'proof.stats.1.label': 'Ortalama ekip deneyimi',
    'proof.stats.2.label': 'Sadece',
    
    // Expertise
    'expertise.title': 'Uzmanlık',
    'expertise.heading': 'Ne yapıyoruz',
    'expertise.subtitle': 'Kritik iş süreçleri için güvenilir yazılım.',
    'expertise.0.title': 'Özel Kurumsal Yazılım',
    'expertise.0.brief': 'Aylar değil, on yıllar için tasarlandı.',
    'expertise.0.details.0': '10+ yıllık yaşam döngüleri için tasarlanmış sistemler',
    'expertise.0.details.1': 'Her projede kıdemli mimarlar liderlik eder',
    'expertise.0.details.2': 'Kararlılık ve sürdürülebilirlik için seçilmiş teknolojiler',
    'expertise.0.details.3': 'İç uzmanlık, dış kaynak kullanımı yok',
    'expertise.0.details.4': 'Tam dokümantasyon ve bilgi transferi',
    'expertise.0.approach': 'Derin operasyonel keşif ile başlıyoruz. Ekibimiz, tek bir satır kod yazmadan önce iş akışlarınızı, kısıtlarınızı ve uzun vadeli vizyonunuzu anlamak için sahada zaman geçirir.',
    'expertise.1.title': 'Sahada Keşif',
    'expertise.1.brief': 'Size geliyoruz. İşinizi öğreniyoruz.',
    'expertise.1.details.0': 'Ekibinizle çok günlük saha workshop\'ları',
    'expertise.1.details.1': 'Süreç haritalama ve paydaş görüşmeleri',
    'expertise.1.details.2': 'Teknik altyapı değerlendirmesi',
    'expertise.1.details.3': 'Entegrasyon gereksinimlerini belirleme',
    'expertise.1.details.4': 'Geliştirmeden önce ortak anlayış oluşturma',
    'expertise.1.approach': 'Keşif bir formalite değildir. Gerçek sorunları anlamak için ekibinizle birlikte çalışıyoruz—sadece belirtilen gereksinimleri değil. Bu temel, daha sonra pahalı hataları önler.',
    'expertise.2.title': 'Güvenli ve Uyumlu',
    'expertise.2.brief': 'İlk günden itibaren kurumsal düzeyde güvenlik.',
    'expertise.2.details.0': 'Güvenlik mimarisi incelemesi dahil',
    'expertise.2.details.1': 'Uyumluluk gereksinimleri (SOC2, HIPAA, vb.)',
    'expertise.2.details.2': 'Düzenli güvenlik denetimleri ve güncellemeler',
    'expertise.2.details.3': 'Olay müdahale planlaması',
    'expertise.2.details.4': 'Güvenli geliştirme konusunda personel eğitimi',
    'expertise.2.approach': 'Güvenlik bir eklenti değildir. Tehdit modelleme ile tasarlıyoruz, derinlemesine savunma uyguluyoruz ve sisteminizin tüm yaşam döngüsü boyunca sürekli uyanıklık sağlıyoruz.',
    'expertise.3.title': 'Uzun Vadeli Bakım',
    'expertise.3.brief': 'Kalıyoruz. Destekliyoruz. İyileştiriyoruz.',
    'expertise.3.details.0': 'Özel destek ekibi, offshore yardım masası değil',
    'expertise.3.details.1': 'Proaktif izleme ve bakım',
    'expertise.3.details.2': 'Düzenli özellik iyileştirmeleri ve optimizasyonlar',
    'expertise.3.details.3': 'Teknoloji güncellemeleri ve bağımlılık yönetimi',
    'expertise.3.details.4': 'Yıllık yol haritası planlama oturumları',
    'expertise.3.approach': 'Uzun vadede buradayız. Müşteri ilişkilerimizin çoğu 5-10+ yıl sürer. Sisteminize kendi sistemimiz gibi davranıyoruz, çünkü etkin olarak öyle.',
    'expertise.learnMore': 'Daha fazla bilgi',
    'expertise.modal.title': 'Bunun İçeriği',
    
    // DiscoveryCall
    'discovery.badge': 'Başlangıç',
    'discovery.title': 'Keşif Görüşmesi Planla',
    'discovery.subtitle': 'Sabit fiyatlı paketler sunmuyoruz. Her işletmenin benzersiz ihtiyaçları vardır. Bir teklif sunmadan önce gereksinimlerinizi anlamak için bir keşif görüşmesi ile başlayın.',
    'discovery.feature.0': '45 dakikalık video danışmanlık',
    'discovery.feature.1': 'İş ve teknik ihtiyaçlarınızı anlayın',
    'discovery.feature.2': 'Proje kapsamı ve zaman çizelgesini tartışın',
    'discovery.feature.3': 'Ön öneriler alın',
    'discovery.cta': 'Görüşmenizi Planlayın',
    'discovery.footer': 'Taahhüt gerekmez • Ücretsiz danışmanlık',
    'discovery.modal.step1.title': 'Projeniz hakkında bilgi verin',
    'discovery.modal.step1.subtitle': 'Bu bilgiyi konuşmamız için hazırlanmak için kullanacağız.',
    'discovery.modal.step2.title': 'Bir zaman seçin',
    'discovery.modal.step2.subtitle': 'Size en uygun tarih ve saati seçin.',
    'discovery.modal.step3.title': 'Hazırsınız!',
    'discovery.modal.step3.subtitle': 'E-postanıza bir takvim davetiyesi gönderdik.',
    'discovery.form.name': 'Ad Soyad',
    'discovery.form.email': 'E-posta',
    'discovery.form.company': 'Şirket',
    'discovery.form.role': 'Rolünüz',
    'discovery.form.phone': 'Telefon Numarası (opsiyonel)',
    'discovery.form.projectBrief': 'Kısa Proje Açıklaması',
    'discovery.form.continue': 'Planlamaya Devam Et',
    'discovery.calendar.selectDate': 'Bir Tarih Seçin',
    'discovery.calendar.selectTime': 'Bir Saat Seçin (EST)',
    'discovery.calendar.confirm': 'Toplantıyı Onayla',
    'discovery.confirmation.title': 'Toplantı Planlandı!',
    'discovery.confirmation.message': '{email} adresine bir takvim davetiyesi gönderdik. Toplantıdan 24 saat önce bir Zoom bağlantısı alacaksınız.',
    'discovery.confirmation.done': 'Tamam',
    
    // Contact
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Projenizi tartışalım.',
    'contact.form.name': 'Ad Soyad',
    'contact.form.namePlaceholder': 'Ahmet Yılmaz',
    'contact.form.email': 'E-posta',
    'contact.form.emailPlaceholder': 'ahmet@sirket.com',
    'contact.form.company': 'Şirket',
    'contact.form.companyPlaceholder': 'Şirket Adı',
    'contact.form.message': 'Mesaj',
    'contact.form.messagePlaceholder': 'Projeniz hakkında bize bilgi verin...',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.email': 'hello@kutlusolutions.com',
    'contact.response': '24 saat içinde yanıt',
    
    // Footer
    'footer.description': 'Kurumsal yazılım danışmanlığı.',
    'footer.menu': 'Menü',
    'footer.contact': 'İletişim',
    'footer.privacy': 'Gizlilik Sözleşmesi',
    'footer.copyright': '© {year} Kutlu Solutions',
    
    // Work
    'work.badge': 'Referanslar',
    'work.title': 'Güvenilen markalar',
    'work.subtitle': 'Farklı sektörlerden önde gelen şirketlere hizmet veriyoruz',
    
    // Common
    'common.discovery': 'Keşif Görüşmesi',
    'common.contact': 'İletişim',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string, params?: Record<string, string>): string => {
    let translation = translations[language][key] || key;
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        translation = translation.replace(`{${paramKey}}`, paramValue);
      });
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
