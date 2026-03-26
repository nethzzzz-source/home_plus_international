/* Home Plus International - EN/DE i18n (toggle on same page) */

(function () {
  const STORAGE_KEY = 'homeplus_lang';

  const dict = {
    en: {
      'brand.name': 'Home Plus International',
      'brand.tagline': 'Reliable drinks distribution',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Contact',

      'cta.quote': 'Get a Quote',
      'cta.contact': 'Contact Us',

      'footer.about.heading': 'About Home Plus',
      'footer.about.copy':
        'Home Plus International delivers reliable beverages with competitive pricing, secure shipping, and long-term B2B partnerships.',
      'footer.rights': 'All rights reserved.',
      'footer.quicklinks.heading': 'Quick Links',
      'footer.contact.heading': 'Contact',
      'footer.contact.copy': 'Email: info@homeplus.example<br/>Phone: +49 000 000 000<br/>Location: Frankfurt (placeholder)',
      'footer.catalog': 'Download Product Catalog',

      // Home page (major sections)
      'home.hero.title': 'Reliable Drinks Distribution You Can Trust',
      'home.hero.subtitle':
        'Competitive pricing, fast delivery, and quality service for retailers, restaurants, and business customers.',
      'home.hero.cta.quote': 'Get a Quote',
      'home.hero.cta.contact': 'Contact Us',

      // Home metrics (hero)
      'home.metrics.fast.title': 'Fast Delivery',
      'home.metrics.fast.copy': 'Tracking-ready logistics (placeholder)',
      'home.metrics.b2b.title': 'B2B Focus',
      'home.metrics.b2b.copy': 'Wholesale-friendly operations',

      'home.highlights.pricing': 'Competitive Pricing & Attractive Discounts',
      'home.highlights.pricing.copy':
        'Bulk ordering options with transparent, business-friendly pricing and seasonal promotions.',
      'home.highlights.shipping': 'Secure & Reliable Shipping',
      'home.highlights.shipping.copy':
        'Careful handling, tracking support, and dependable delivery schedules—every time.',
      'home.highlights.range': 'Wide Range of Beverage Products',
      'home.highlights.range.copy':
        'From soft drinks and juices to mineral water and energy drinks—built for everyday demand.',
      'home.highlights.expertise': 'Experience & Operational Excellence',
      'home.highlights.expertise.copy':
        'Logistics know-how, supplier partnerships, and efficient workflows that scale with you.',

      'home.expertise.title': 'Our Expertise & Experience',
      'home.expertise.copy':
        'Home Plus International combines industry knowledge with logistics expertise to support long-term partnerships.',
      'home.expertise.b1': 'Logistics expertise & efficient fulfillment',
      'home.expertise.b2': 'Reliable delivery processes at scale',
      'home.expertise.b3': 'Strong supplier and client partnerships',
      'home.expertise.c1': 'From order planning to secure packaging, we keep deliveries consistent.',
      'home.expertise.c2': 'Predictable delivery schedules for busy B2B partners.',
      'home.expertise.c3': 'We work closely with suppliers and customers to secure availability.',

      'home.featured.title': 'Featured Products / Bestseller',
      'home.featured.copy': 'Popular items chosen for consistent availability and business-friendly value.',

      'badge.bestSeller': 'Best Seller',
      'badge.discountAvailable': 'Discount Available',

      'home.testimonials.title': 'What Customers Say',
      'home.testimonials.copy': 'Trusted by business customers who value reliability and competitive pricing.',

      'home.testimonials.t1.quote':
        'Home Plus International keeps our shelves stocked with consistent quality and fair pricing. Delivery is punctual and well handled.',
      'home.testimonials.t1.business': 'Retail buyer (placeholder)',
      'home.testimonials.t2.quote':
        'Fast response, stable supply, and transparent terms. Their wholesale scheduling makes our inventory planning easier.',
      'home.testimonials.t2.business': 'Restaurant owner (placeholder)',
      'home.testimonials.t3.quote':
        'Reliable shipments and good variety. We get discounts when ordering in bulk and the service stays professional.',
      'home.testimonials.t3.business': 'Business event organizer (placeholder)',

      'home.value.title': 'Key Value Propositions',
      'home.value.pricing.title': 'Competitive Pricing & Attractive Discounts',
      'home.value.pricing.copy': 'Bulk deals, custom pricing for businesses, and transparent terms.',
      'home.value.shipping.title': 'Secure & Reliable Shipping',
      'home.value.shipping.copy': 'Safe handling, timely delivery, and delivery tracking support.',
      'home.value.reliability.title': 'Reliability You Can Count On',
      'home.value.reliability.copy': 'Operational consistency built for long-term partnerships.',
      'home.value.section.copy': 'Pricing, shipping reliability, and value designed for long-term B2B partnerships.',

      'home.cta.title': 'Looking for the best deals on beverage distribution?',
      'home.cta.copy': 'Request a quote and we will help you optimize costs with dependable delivery.',
      'home.cta.button': 'Request a Quote',

      'home.contact.title': 'Contact Us',
      'home.contact.copy': 'Tell us what you need—our team will respond with a competitive offer.',
      'home.contact.map.placeholder': 'Map placeholder (city/area).',
      'home.contact.wholesale.note':
        'For wholesale: include expected quantities so we can prepare an attractive, custom offer.',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.company': 'Company',
      'contact.message': 'Message',
      'contact.submit': 'Send Request',
      'contact.success.title': 'Message sent successfully',
      'contact.success.copy': 'Thank you. We will get back to you shortly.',
      'contact.mailto.fallback': 'If you prefer, email us at info@homeplus.example',

      // Products page (containers)
      'products.b2b.title': 'Bulk & B2B Advantage',
      'products.b2b.copy':
        'Wholesale ordering options, custom pricing for businesses, and flexible delivery schedules.',
      'products.tabs.all': 'All Products',
      'products.search.placeholder': 'Search products…',
      'products.requestQuote': 'Request Quote',
      'products.why.title': 'Why Choose Us',
      'products.why.copy': 'Efficiency, reliability, and scalable logistics—built for business growth.',
      'products.noResults': 'No products found for your search.',

      // Quote modal
      'quote.modal.title': 'Request a Quote',
      'quote.modal.product': 'Selected product',
      'quote.modal.qty': 'Quantity (estimated)',
      'quote.modal.note':
        'You will be redirected to our contact form with your request prefilled.',
      'quote.modal.send': 'Send Request',
      'quote.modal.close': 'Close',

      // Contact page
      'contact.page.title': 'Contact Home Plus International',
      'contact.page.copy':
        'Send your inquiry and we will prepare a competitive quote. For wholesale, please include expected quantities.',
      'contact.page.location': 'Location & Logistics',
      'contact.page.map.placeholder': 'Map placeholder (city/area).',

      // About page
      'about.hero.title': 'Trusted Drinks Distribution for Business Customers',
      'about.hero.subtitle':
        'Home Plus International supports retailers and hospitality partners with reliable logistics, competitive pricing, and long-term relationships.',

      'about.values.excellence.title': 'Operational Excellence',
      'about.values.excellence.copy':
        'We focus on dependable fulfillment and careful shipping processes designed for business continuity.',
      'about.values.trust.title': 'Trust & Professionalism',
      'about.values.trust.copy':
        'Clear communication, transparent terms, and a service mindset built around long-term partnerships.',
      'about.values.partnerships.title': 'Long-Term Partnerships',
      'about.values.partnerships.copy':
        'We collaborate closely with suppliers and clients to ensure consistent availability and steady supply.',

      'about.mission.title': 'Mission',
      'about.mission.copy':
        'Deliver reliable beverage distribution with competitive pricing, fast delivery, and quality service—every time.',
      'about.vision.title': 'Vision',
      'about.vision.copy':
        'Become the preferred wholesale partner by scaling logistics excellence and building trust with our business customers.',
      'about.experience.title': 'Experience',
      'about.experience.b1': 'Years of industry knowledge in drinks distribution',
      'about.experience.b2': 'Logistics expertise and operational reliability',
      'about.experience.b3': 'Partnerships with suppliers and business clients',

      'about.cta.title': 'Ready for dependable wholesale supply?',
      'about.cta.copy':
        'Request a quote and we will propose flexible options for your business schedule.',

      'about.branding.title': 'Brand Logos (placeholders)',
      'about.branding.copy': 'Add real supplier logos when available.',
    },
    de: {
      'brand.name': 'Home Plus International',
      'brand.tagline': 'Zuverlässige Getränkelogistik',

      'nav.home': 'Startseite',
      'nav.about': 'Über uns',
      'nav.products': 'Produkte',
      'nav.testimonials': 'Stimmen',
      'nav.contact': 'Kontakt',

      'cta.quote': 'Angebot anfordern',
      'cta.contact': 'Kontakt aufnehmen',

      'footer.about.heading': 'Über Home Plus',
      'footer.about.copy':
        'Home Plus International liefert verlässliche Getränke zu wettbewerbsfähigen Preisen, mit sicherem Versand und langfristigen B2B-Partnerschaften.',
      'footer.rights': 'Alle Rechte vorbehalten.',
      'footer.quicklinks.heading': 'Schnellzugriff',
      'footer.contact.heading': 'Kontakt',
      'footer.contact.copy': 'E-Mail: info@homeplus.example<br/>Telefon: +49 000 000 000<br/>Standort: Frankfurt (Platzhalter)',
      'footer.catalog': 'Produktkatalog herunterladen',

      // Home
      'home.hero.title': 'Zuverlässige Getränkelieferung, der Sie vertrauen können',
      'home.hero.subtitle':
        'Attraktive Preise, schnelle Lieferung und exzellenten Service für Handel, Gastronomie und Geschäftskunden.',
      'home.hero.cta.quote': 'Angebot anfordern',
      'home.hero.cta.contact': 'Kontakt aufnehmen',

      // Home metrics (hero)
      'home.metrics.fast.title': 'Schnelle Lieferung',
      'home.metrics.fast.copy': 'Logistik mit Tracking (Platzhalter)',
      'home.metrics.b2b.title': 'Fokus auf B2B',
      'home.metrics.b2b.copy': 'Großhandelsfreundliche Abläufe',

      'home.highlights.pricing': 'Attraktive Preise & Rabatte',
      'home.highlights.pricing.copy':
        'Großbestellungen mit transparenten, geschäftsorientierten Preisen und saisonalen Aktionen.',
      'home.highlights.shipping': 'Sicherer & Verlässlicher Versand',
      'home.highlights.shipping.copy':
        'Sorgfältige Handhabung, Unterstützung bei der Sendungsverfolgung und verlässliche Lieferzeiten.',
      'home.highlights.range': 'Große Auswahl an Getränken',
      'home.highlights.range.copy':
        'Von Softdrinks und Säften bis zu Mineralwasser und Energy-Drinks – für den täglichen Bedarf.',
      'home.highlights.expertise': 'Erfahrung & operative Exzellenz',
      'home.highlights.expertise.copy':
        'Logistik-Know-how, Lieferantenpartnerschaften und effiziente Prozesse – skaliert mit Ihrem Bedarf.',

      'home.expertise.title': 'Unsere Expertise & Erfahrung',
      'home.expertise.copy':
        'Home Plus International verbindet Branchenwissen mit Logistik-Kompetenz – für langfristige Partnerschaften.',
      'home.expertise.b1': 'Logistik-Know-how & effiziente Abwicklung',
      'home.expertise.b2': 'Verlässliche Lieferprozesse im Maßstab',
      'home.expertise.b3': 'Starke Partnerschaften mit Lieferanten & Kunden',
      'home.expertise.c1': 'Von der Bestellplanung bis zur sicheren Verpackung halten wir die Lieferung zuverlässig.',
      'home.expertise.c2': 'Planbare Lieferzeiten für geschäftige B2B-Partner.',
      'home.expertise.c3': 'Wir arbeiten eng mit Lieferanten und Kunden zusammen, um Verfügbarkeit sicherzustellen.',

      'home.featured.title': 'Empfohlene Produkte / Bestseller',
      'home.featured.copy': 'Beliebte Artikel mit konstanter Verfügbarkeit und gutem Preis-Leistungs-Verhältnis.',

      'badge.bestSeller': 'Bestseller',
      'badge.discountAvailable': 'Rabatt verfügbar',

      'home.testimonials.title': 'Was Kunden sagen',
      'home.testimonials.copy': 'Vertrauen von Geschäftskunden, die Zuverlässigkeit und faire Preise schätzen.',

      'home.testimonials.t1.quote':
        'Home Plus International sorgt dafür, dass unsere Regale stets gefüllt sind – mit gleichbleibender Qualität und fairen Preisen. Die Lieferung ist pünktlich und sorgfältig gehandhabt.',
      'home.testimonials.t1.business': 'Einkäufer Handel (Platzhalter)',
      'home.testimonials.t2.quote':
        'Schnelle Rückmeldung, stabile Versorgung und transparente Konditionen. Die Großhandelsplanung erleichtert unsere Lagerplanung erheblich.',
      'home.testimonials.t2.business': 'Restaurantinhaber (Platzhalter)',
      'home.testimonials.t3.quote':
        'Zuverlässige Sendungen und gute Auswahl. Bei Großbestellungen erhalten wir Rabatte und der Service bleibt professionell.',
      'home.testimonials.t3.business': 'Veranstalter Business (Platzhalter)',

      'home.value.title': 'Kern-Mehrwerte',
      'home.value.pricing.title': 'Attraktive Preise & Rabatte',
      'home.value.pricing.copy': 'Großdeals, individuelle Preise für Geschäftskunden und transparente Konditionen.',
      'home.value.shipping.title': 'Sicherer & Verlässlicher Versand',
      'home.value.shipping.copy': 'Sichere Handhabung, termingerechte Lieferung und Tracking-Unterstützung.',
      'home.value.reliability.title': 'Verlässlichkeit, auf die Sie bauen können',
      'home.value.reliability.copy': 'Operative Konstanz – für langfristige Zusammenarbeit.',
      'home.value.section.copy': 'Preise, Versandzuverlässigkeit und Mehrwert – ausgelegt für langfristige B2B-Partnerschaften.',

      'home.cta.title': 'Suchen Sie die besten Angebote für Getränkelieferungen?',
      'home.cta.copy': 'Fordern Sie ein Angebot an und wir helfen Ihnen, Kosten mit verlässlicher Lieferung zu optimieren.',
      'home.cta.button': 'Angebot anfordern',

      'home.contact.title': 'Kontaktieren Sie uns',
      'home.contact.copy': 'Sagen Sie uns, was Sie benötigen – unser Team meldet sich mit einem attraktiven Angebot.',
      'home.contact.map.placeholder': 'Karten-Platzhalter (Stadt/Region).',
      'home.contact.wholesale.note':
        'Für Großbestellungen: Bitte erwartete Mengen angeben, damit wir ein attraktives, individuelles Angebot vorbereiten können.',
      'contact.name': 'Name',
      'contact.email': 'E-Mail',
      'contact.company': 'Unternehmen',
      'contact.message': 'Nachricht',
      'contact.submit': 'Anfrage senden',
      'contact.success.title': 'Nachricht erfolgreich gesendet',
      'contact.success.copy': 'Vielen Dank. Wir melden uns in Kürze.',
      'contact.mailto.fallback': 'Wenn Sie möchten: E-Mail an info@homeplus.example',

      // Products
      'products.b2b.title': 'Großbestellungen & B2B-Vorteil',
      'products.b2b.copy': 'Großhandels-Optionen, individuelle Preise für Geschäftskunden und flexible Lieferoptionen.',
      'products.tabs.all': 'Alle Produkte',
      'products.search.placeholder': 'Produkte suchen…',
      'products.requestQuote': 'Angebot anfordern',
      'products.why.title': 'Warum Home Plus?',
      'products.why.copy': 'Effizienz, Verlässlichkeit und skalierbare Logistik – für Wachstum im Business.',
      'products.noResults': 'Keine Produkte für Ihre Suche gefunden.',

      // Quote modal
      'quote.modal.title': 'Angebot anfordern',
      'quote.modal.product': 'Ausgewähltes Produkt',
      'quote.modal.qty': 'Menge (geschätzt)',
      'quote.modal.note': 'Sie werden zum Kontaktformular weitergeleitet – Ihre Anfrage ist vorausgefüllt.',
      'quote.modal.send': 'Anfrage senden',
      'quote.modal.close': 'Schließen',

      // Contact page
      'contact.page.title': 'Kontakt zu Home Plus International',
      'contact.page.copy':
        'Senden Sie Ihre Anfrage – wir erstellen ein attraktives Angebot. Für Großbestellungen nennen Sie bitte die erwartete Menge.',
      'contact.page.location': 'Standort & Logistik',
      'contact.page.map.placeholder': 'Karten-Platzhalter (Stadt/Region).',

      // About
      'about.hero.title': 'Zuverlässige Getränkelieferung für Geschäftskunden',
      'about.hero.subtitle':
        'Home Plus International unterstützt Handel und Hospitality-Partner mit verlässlicher Logistik, attraktiven Preisen und langfristigen Beziehungen.',

      'about.values.excellence.title': 'Operative Exzellenz',
      'about.values.excellence.copy':
        'Wir fokussieren auf zuverlässige Abwicklung und sorgfältigen Versand, ausgelegt für die Kontinuität im Geschäft.',
      'about.values.trust.title': 'Vertrauen & Professionalität',
      'about.values.trust.copy':
        'Klare Kommunikation, transparente Konditionen und ein Serviceansatz, der auf langfristige Partnerschaften ausgerichtet ist.',
      'about.values.partnerships.title': 'Langfristige Partnerschaften',
      'about.values.partnerships.copy':
        'Wir arbeiten eng mit Lieferanten und Kunden zusammen, damit Verfügbarkeit konsistent bleibt und die Versorgung stabil ist.',

      'about.mission.title': 'Mission',
      'about.mission.copy':
        'Zuverlässige Getränkelogistik mit wettbewerbsfähigen Preisen, schneller Lieferung und exzellentem Service – immer wieder.',
      'about.vision.title': 'Vision',
      'about.vision.copy':
        'Der bevorzugte Großhandels-Partner werden – mit skalierbarer Logistik-Exzellenz und Vertrauen bei unseren Geschäftskunden.',
      'about.experience.title': 'Erfahrung',
      'about.experience.b1': 'Jahre Branchenwissen in der Getränke-Distribution',
      'about.experience.b2': 'Logistik-Expertise und operative Zuverlässigkeit',
      'about.experience.b3': 'Partnerschaften mit Lieferanten und Geschäftskunden',

      'about.cta.title': 'Bereit für eine verlässliche Großhandelsversorgung?',
      'about.cta.copy': 'Fordern Sie ein Angebot an – wir unterbreiten flexible Optionen passend zu Ihrem Zeitplan.',

      'about.branding.title': 'Marken-Logos (Platzhalter)',
      'about.branding.copy': 'Wenn verfügbar: echte Lieferantenlogos ergänzen.',
    },
  };

  function isGermanPreferred() {
    const l = (navigator.language || '').toLowerCase();
    return l.startsWith('de');
  }

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'de') return stored;
    return isGermanPreferred() ? 'de' : 'en';
  }

  function t(key, lang) {
    const selected = lang || getLang();
    return dict[selected] && dict[selected][key] ? dict[selected][key] : key;
  }

  function getLang() {
    return document.documentElement.dataset.lang === 'de' ? 'de' : 'en';
  }

  function setLang(lang) {
    const next = lang === 'de' ? 'de' : 'en';
    document.documentElement.dataset.lang = next;
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    applyI18n();

    document.dispatchEvent(new CustomEvent('i18n:langchange', { detail: { lang: next } }));
  }

  function applyI18n() {
    const lang = getLang();
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = t(key, lang);
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value);
        return;
      }

      const htmlMode = el.getAttribute('data-i18n-mode') === 'html';
      if (htmlMode) el.innerHTML = value;
      else el.textContent = value;
    });

    // Update language toggle aria-pressed state
    document.querySelectorAll('.lang-btn[data-lang]').forEach((btn) => {
      const langBtn = btn.getAttribute('data-lang');
      btn.setAttribute('aria-pressed', langBtn === lang ? 'true' : 'false');
    });
  }

  function init() {
    document.documentElement.dataset.lang = document.documentElement.dataset.lang || getInitialLang();
    document.documentElement.lang = getLang();
    applyI18n();

    // Bind language toggle if present (header is injected by layout.js)
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (!target.matches('.lang-btn[data-lang]')) return;
      const lang = target.getAttribute('data-lang');
      setLang(lang);
    });
  }

  window.HomePlusI18n = {
    getLang,
    setLang,
    t,
  };

  document.addEventListener('layout:ready', () => {
    // Header injection can happen after this script; ensure i18n re-applies.
    applyI18n();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

