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
    'hero.title.line1': 'Software built for the',
    'hero.title.line2': 'long term.',
    'hero.subtitle.line1': 'We partner with enterprises to build mission-critical systems.',
    'hero.subtitle.line2': 'Senior-led. On-site discovery. Ongoing support.',
    'hero.cta.primary': 'Schedule a Discovery Call',
    'hero.cta.secondary': 'Our Expertise',
    
    // Navbar
    'nav.expertise': 'Expertise',
    'nav.industries': 'Industries',
    'nav.approach': 'Our Approach',
    'nav.contact': 'Contact',
    'nav.cta': "Let's Talk",
    
    // ProofStrip
    'proof.stats.0.label': 'Systems under management',
    'proof.stats.1.label': 'Average team tenure',
    'proof.stats.2.label': 'Exclusively',
    
    // Expertise
    'expertise.title': 'Expertise',
    'expertise.heading': 'What we do',
    'expertise.subtitle': 'Reliable software for critical business processes.',
    'expertise.0.title': 'Custom Enterprise Software',
    'expertise.0.brief': 'Built to last decades, not months.',
    'expertise.0.details.0': 'We build systems designed for 10+ year lifecycles',
    'expertise.0.details.1': 'Senior architects lead every engagement',
    'expertise.0.details.2': 'Technologies chosen for stability and maintainability',
    'expertise.0.details.3': 'In-house expertise, no outsourcing',
    'expertise.0.details.4': 'Full documentation and knowledge transfer',
    'expertise.0.approach': 'We start with deep operational discovery. Our team spends time on-site understanding your workflows, constraints, and long-term vision before writing a single line of code.',
    'expertise.1.title': 'On-Site Discovery',
    'expertise.1.brief': 'We come to you. We learn your business.',
    'expertise.1.details.0': 'Multi-day on-site workshops with your team',
    'expertise.1.details.1': 'Process mapping and stakeholder interviews',
    'expertise.1.details.2': 'Technical infrastructure assessment',
    'expertise.1.details.3': 'Identify integration requirements',
    'expertise.1.details.4': 'Build shared understanding before development',
    'expertise.1.approach': 'Discovery is not a formality. We embed with your team to understand the real problems—not just the stated requirements. This foundation prevents costly mistakes later.',
    'expertise.2.title': 'Secure & Compliant',
    'expertise.2.brief': 'Enterprise-grade security from day one.',
    'expertise.2.details.0': 'Security architecture review included',
    'expertise.2.details.1': 'Compliance requirements (SOC2, HIPAA, etc.)',
    'expertise.2.details.2': 'Regular security audits and updates',
    'expertise.2.details.3': 'Incident response planning',
    'expertise.2.details.4': 'Staff training on secure development',
    'expertise.2.approach': 'Security is not an add-on. We design with threat modeling, implement defense in depth, and maintain ongoing vigilance through your system\'s entire lifecycle.',
    'expertise.3.title': 'Long-Term Maintenance',
    'expertise.3.brief': 'We stay. We support. We improve.',
    'expertise.3.details.0': 'Dedicated support team, not offshore help desk',
    'expertise.3.details.1': 'Proactive monitoring and maintenance',
    'expertise.3.details.2': 'Regular feature improvements and optimizations',
    'expertise.3.details.3': 'Technology updates and dependency management',
    'expertise.3.details.4': 'Annual roadmap planning sessions',
    'expertise.3.approach': 'We\'re in it for the long term. Most of our client relationships span 5-10+ years. We treat your system as if it\'s our own, because effectively, it is.',
    'expertise.learnMore': 'Learn more',
    'expertise.modal.title': 'What This Includes',
    
    // DiscoveryCall
    'discovery.badge': 'Start Here',
    'discovery.title': 'Schedule a Discovery Call',
    'discovery.subtitle': 'We don\'t offer fixed-price packages. Every enterprise has unique needs. Start with a discovery call to understand your requirements before we propose an engagement.',
    'discovery.feature.0': '45-minute video consultation',
    'discovery.feature.1': 'Understand your business and technical needs',
    'discovery.feature.2': 'Discuss project scope and timeline',
    'discovery.feature.3': 'Receive preliminary recommendations',
    'discovery.cta': 'Schedule Your Call',
    'discovery.footer': 'No commitment required • Free consultation',
    'discovery.modal.step1.title': 'Tell us about your project',
    'discovery.modal.step1.subtitle': 'We\'ll use this information to prepare for our conversation.',
    'discovery.modal.step2.title': 'Choose a time',
    'discovery.modal.step2.subtitle': 'Select a date and time that works best for you.',
    'discovery.modal.step3.title': 'You\'re all set!',
    'discovery.modal.step3.subtitle': 'We\'ve sent a calendar invite to your email.',
    'discovery.form.name': 'Full Name',
    'discovery.form.email': 'Email',
    'discovery.form.company': 'Company',
    'discovery.form.role': 'Your Role',
    'discovery.form.phone': 'Phone Number (optional)',
    'discovery.form.projectBrief': 'Brief Project Description',
    'discovery.form.continue': 'Continue to Scheduling',
    'discovery.calendar.selectDate': 'Select a Date',
    'discovery.calendar.selectTime': 'Select a Time (EST)',
    'discovery.calendar.confirm': 'Confirm Meeting',
    'discovery.confirmation.title': 'Meeting Scheduled!',
    'discovery.confirmation.message': 'We\'ve sent a calendar invite to {email}. You\'ll receive a Zoom link 24 hours before the meeting.',
    'discovery.confirmation.done': 'Done',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss your project.',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'John Smith',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'john@company.com',
    'contact.form.company': 'Company',
    'contact.form.companyPlaceholder': 'Company Name',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'contact.email': 'hello@kutlusolutions.com',
    'contact.response': 'Response within 24 hours',
    
    // Footer
    'footer.description': 'Enterprise software consulting.',
    'footer.menu': 'Menu',
    'footer.contact': 'Contact',
    'footer.privacy': 'Gizlilik Sözleşmesi',
    'footer.copyright': '© {year} Kutlu Solutions',
    
    // Work
    'work.badge': 'References',
    'work.title': 'Trusted brands',
    'work.subtitle': 'Serving leading companies across different industries',
    
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
