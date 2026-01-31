/* assets/js/i18n.js
   Shared bilingual system for ALL pages.
   - Add data-i18n="key" on any element you want translated
   - Set <body data-page="home"> etc to apply active nav
*/

const I18N = {
  fr: {
    // NAV
    "nav.tagline": "Événements élégants au Cameroun",
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.portfolio": "Réalisations",
    "nav.packages": "Formules",
    "nav.testimonials": "Avis",
    "nav.contact": "Contact",
    "nav.cta": "Demander un devis",

    // FOOTER
    "footer.line": "Basée à Yaoundé • Service national au Cameroun",
    "footer.rights": "Tous droits réservés",

    // HOME
    "home.badge": "Basée à Yaoundé • Service national",
    "home.title": "Chaque instant devient magique",
    "home.subtitle": "Décoration événementielle, organisation de mariages et service traiteur partout au Cameroun. Une expérience élégante, fluide et sans stress.",
    "home.cta1": "Demander un devis",
    "home.cta2": "Voir nos réalisations",
    "home.cta3": "Appeler maintenant",
    "home.pill1": "Mariages",
    "home.pill2": "Baptêmes",
    "home.pill3": "Événements corporate",
    "home.pill4": "Traiteur",
    "home.pill5": "Déplacements possibles",
    "home.card1Title": "Service national",
    "home.card1Text": "Interventions possibles à Yaoundé, Douala, Bafoussam, Kribi, Garoua et partout au Cameroun (sur devis).",
    "home.card2Title": "Un seul interlocuteur",
    "home.card2Text": "Décor + traiteur + coordination : une solution complète, claire, et bien organisée.",
    "home.card3Title": "Expérience hôtellerie",
    "home.card3Text": "Standards de service, ponctualité, présentation et attention aux détails.",
    "home.sectionTitle": "Une approche simple, premium et fiable",
    "home.sectionLead": "Nous créons des ambiances élégantes, gérons la logistique essentielle et coordonnons le jour J pour que vous profitiez pleinement.",
   "home.signatureTitle": "Décor signature (luxe)",
"home.signatureLead": "Drapés ivoire, fleurs premium et lumière chaleureuse — pour des célébrations élégantes et intemporelles.",
"home.signaturePoint1": "Décor cérémonie & réception",
"home.signaturePoint2": "Style or + ivoire (effet “mariage platinum”)",
"home.signaturePoint3": "Installation + coordination + démontage",
"home.signatureCta2": "Découvrir les services",

"home.previewTitle": "Aperçu de nos réalisations",
"home.previewLead": "Quelques exemples de décor et de traiteur. Plus de photos dans la page Réalisations.",

"home.step1Title": "Brief",
"home.step1Text": "Date, ville, invités, style, budget.",
"home.step2Title": "Devis",
"home.step2Text": "Proposition claire + validation par étapes.",
"home.step3Title": "Exécution",
"home.step3Text": "Installation + coordination + démontage.",

"home.ctaTitle": "Prêt(e) à organiser votre événement ?",
"home.ctaLead": "Indiquez la date, la ville, le nombre d’invités et le style souhaité. Nous répondons rapidement avec un devis clair.",
// HOME – New sections
"home.signatureTitle": "Décor signature (luxe)",
"home.signatureLead": "Drapés ivoire, fleurs premium et lumière chaleureuse — pour des célébrations élégantes et intemporelles.",
"home.signaturePoint1": "Décor cérémonie & réception",
"home.signaturePoint2": "Style or + ivoire (effet “mariage platinum”)",
"home.signaturePoint3": "Installation + coordination + démontage",
"home.signatureCta2": "Découvrir les services",

"home.previewTitle": "Aperçu de nos réalisations",
"home.previewLead": "Quelques exemples de décor et de traiteur. Plus de photos dans la page Réalisations.",

"home.step1Title": "Brief",
"home.step1Text": "Date, ville, invités, style, budget.",
"home.step2Title": "Devis",
"home.step2Text": "Proposition claire + validation par étapes.",
"home.step3Title": "Exécution",
"home.step3Text": "Installation + coordination + démontage.",

"home.ctaTitle": "Prêt(e) à organiser votre événement ?",
"home.ctaLead": "Indiquez la date, la ville, le nombre d’invités et le style souhaité. Nous répondons rapidement avec un devis clair.",
  
    // ABOUT
    "about.title": "À propos",
    "about.lead": "Aimée Bridal Events est une entreprise basée à Yaoundé, spécialisée dans la décoration événementielle, l’organisation de mariages et le service traiteur, avec possibilité d’intervention partout au Cameroun.",
    "about.missionTitle": "Notre mission",
    "about.missionText": "Transformer votre événement en une expérience élégante et mémorable, en respectant votre thème, votre budget et vos priorités — tout en vous offrant un accompagnement professionnel et rassurant.",
    "about.positionTitle": "Notre positionnement",
    "about.positionText": "Une approche “boutique” : qualité, détails, personnalisation. Nous travaillons avec un réseau de prestataires fiables pour livrer une prestation cohérente, belle et ponctuelle.",
    "about.valuesTitle": "Nos valeurs",
    "about.v1": "Élégance",
    "about.v2": "Transparence",
    "about.v3": "Ponctualité",
    "about.v4": "Respect du budget",
    "about.v5": "Satisfaction client",

    // SERVICES
    "services.title": "Services",
    "services.lead": "Choisissez une prestation unique ou une solution complète. Nous adaptons chaque offre à votre style, vos invités et votre budget.",
    "services.s1Title": "Décoration événementielle",
    "services.s1a": "Conception du thème & palette couleurs",
    "services.s1b": "Arches, centres de table, mise en scène",
    "services.s1c": "Installation, démontage, coordination",
    "services.s2Title": "Organisation de mariages",
    "services.s2a": "Planification & rétroplanning",
    "services.s2b": "Coordination jour J",
    "services.s2c": "Gestion prestataires & déroulé",
    "services.s3Title": "Service traiteur",
    "services.s3a": "Menus personnalisés (cocktail, buffet, service à table)",
    "services.s3b": "Présentation soignée & respect des quantités",
    "services.s3c": "Options desserts & boissons (sur demande)",
    "services.s4Title": "Baptêmes & événements religieux",
    "services.s4Text": "Décoration élégante, réception, mise en place, traiteur et coordination.",
    "services.s5Title": "Corporate & institutions",
    "services.s5Text": "Dîners, lancements, conférences, soirées : décor sobre ou premium, logistique et restauration.",
    "services.s6Title": "Service national",
    "services.s6Text": "Basée à Yaoundé, déplacements possibles partout au Cameroun (frais selon ville & logistique).",

    // PORTFOLIO
    "portfolio.title": "Réalisations",
    "portfolio.lead": "Photos reelles de mariages, tables, buffets de decorations.",
    "portfolio.p1": "Mariage — Décor floral",
    "portfolio.tag1": "Yaoundé",
    "portfolio.p2": "Table d’honneur — Doré & blanc",
    "portfolio.tag2": "Douala",
    "portfolio.p3": "Service traiteur — Buffet",
    "portfolio.tag3": "Bafoussam",
    "portfolio.cta": "Je veux le même style",

    // PACKAGES
    "packages.title": "Formules",
    "packages.lead": "4 formules simples pour guider vos choix. Le prix dépend du lieu, du nombre d’invités et du niveau de décoration.",
    "packages.aTitle": "Essentielle",
    "packages.aText": "Décoration simple & élégante pour petit/moyen événement.",
    "packages.bTitle": "Élégance",
    "packages.bText": "Décor + coordination partielle pour une journée fluide.",
    "packages.cTitle": "Prestige",
    "packages.cText": "Expérience complète haut de gamme, attention maximale aux détails.",
    "packages.dTitle": "Destination Cameroun",
    "packages.dText": "Pour diaspora et événements hors Yaoundé (logistique selon formule).",
    "packages.priceHint": "Sur devis",
    "packages.aBullets": "• Thème • Installation • Démontage",
    "packages.bBullets": "• Décor premium • Planification • Jour J",
    "packages.cBullets": "• Décor signature • Coordination complète • Options luxe",
    "packages.dBullets": "• Appels vidéo • Contrat clair • Mises à jour",

    // TESTIMONIALS
    "testi.title": "Avis clients",
    "testi.lead": "Ajoutez ici des avis WhatsApp/Facebook/Google. La preuve sociale est l’un des meilleurs leviers au Cameroun.",
    "testi.q1": "“Une décoration magnifique et un service impeccable. Notre famille a adoré.”",
    "testi.q1f": "— Mariage, Yaoundé",
    "testi.q2": "“Très professionnelle, ponctuelle, et le traiteur était excellent.”",
    "testi.q2f": "— Baptême, Douala",

    // CONTACT
    "contact.title": "Contact & Devis",
    "contact.lead": "Indiquez la date, la ville, le type d’événement et le nombre d’invités. Nous répondons rapidement avec une proposition claire.",
    "contact.infoTitle": "Coordonnées",
    "contact.city": "Basée à Yaoundé • Service national",
    "contact.phoneLabel": "Téléphone:",
    "contact.howTitle": "Comment ça marche",
    "contact.step1": "Vous remplissez le formulaire (date, ville, invités, style).",
    "contact.step2": "Nous confirmons par appel/WhatsApp et envoyons un devis.",
    "contact.step3": "Validation + acompte → planification → exécution jour J.",
    "contact.formTitle": "Formulaire de demande",

    "form.name": "Nom complet",
    "form.phone": "Téléphone / WhatsApp",
    "form.city": "Ville (au Cameroun)",
    "form.type": "Type d’événement",
    "form.select": "Sélectionner…",
    "form.optWedding": "Mariage",
    "form.optBaptism": "Baptême",
    "form.optCorporate": "Corporate",
    "form.optBirthday": "Anniversaire",
    "form.optOther": "Autre",
    "form.date": "Date",
    "form.guests": "Nombre d’invités",
    "form.budget": "Budget estimatif (FCFA)",
    "form.message": "Message (style, couleurs, besoins)",
    "form.submit": "Envoyer ma demande",
    "form.whatsapp": "WhatsApp direct",
    "form.note": "En envoyant ce formulaire, vous acceptez d’être contacté(e) pour finaliser le devis (appel/WhatsApp/email)."
  },

  en: {
    // NAV
    "nav.tagline": "Elegant events across Cameroon",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.packages": "Packages",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",
    "nav.cta": "Request a quote",

    // FOOTER
    "footer.line": "Based in Yaoundé • Nationwide service in Cameroon",
    "footer.rights": "All rights reserved",

    // HOME
    "home.badge": "Based in Yaoundé • Nationwide service",
    "home.title": "Every moment becomes magical",
    "home.subtitle": "Event decoration, wedding planning, and catering services across Cameroon. Elegant, smooth, and stress-free.",
    "home.cta1": "Request a quote",
    "home.cta2": "View portfolio",
    "home.cta3": "Call now",
    "home.pill1": "Weddings",
    "home.pill2": "Baptisms",
    "home.pill3": "Corporate events",
    "home.pill4": "Catering",
    "home.pill5": "Travel available",
    "home.card1Title": "Nationwide service",
    "home.card1Text": "Available in Yaoundé, Douala, Bafoussam, Kribi, Garoua and across Cameroon (quote-based).",
    "home.card2Title": "One point of contact",
    "home.card2Text": "Décor + catering + coordination: one clear, well-managed solution.",
    "home.card3Title": "Hospitality experience",
    "home.card3Text": "Service standards, punctuality, presentation and attention to detail.",
    "home.sectionTitle": "Simple, premium and reliable",
    "home.sectionLead": "We create elegant setups, manage key logistics, and coordinate on the day—so you can truly enjoy your event.",
   "home.signatureTitle": "Signature luxury décor",
"home.signatureLead": "Ivory draping, premium florals and warm lighting—designed for elegant, timeless celebrations.",
"home.signaturePoint1": "Ceremony & reception décor",
"home.signaturePoint2": "Gold + ivory “platinum wedding” look",
"home.signaturePoint3": "Setup + coordination + teardown",
"home.signatureCta2": "Explore services",

"home.previewTitle": "Portfolio highlights",
"home.previewLead": "A few examples of décor and catering style. More photos available on the portfolio page.",

"home.step1Title": "Brief",
"home.step1Text": "Date, city, guests, style, budget.",
"home.step2Title": "Quote",
"home.step2Text": "Clear proposal + step-by-step validation.",
"home.step3Title": "Execution",
"home.step3Text": "Setup + coordination + teardown.",

"home.ctaTitle": "Ready to plan your event?",
"home.ctaLead": "Share the date, city, number of guests and your style. We reply quickly with a clear quote.",

"home.signatureTitle": "Signature luxury décor",
"home.signatureLead": "Ivory draping, premium florals and warm lighting—designed for elegant, timeless celebrations.",
"home.signaturePoint1": "Ceremony & reception décor",
"home.signaturePoint2": "Gold + ivory “platinum wedding” look",
"home.signaturePoint3": "Setup + coordination + teardown",
"home.signatureCta2": "Explore services",

"home.previewTitle": "Portfolio highlights",
"home.previewLead": "A few examples of décor and catering style. More photos available on the portfolio page.",

"home.step1Title": "Brief",
"home.step1Text": "Date, city, guests, style, budget.",
"home.step2Title": "Quote",
"home.step2Text": "Clear proposal + step-by-step validation.",
"home.step3Title": "Execution",
"home.step3Text": "Setup + coordination + teardown.",

"home.ctaTitle": "Ready to plan your event?",
"home.ctaLead": "Share the date, city, number of guests and your style. We reply quickly with a clear quote.",
      
    // ABOUT
    "about.title": "About",
    "about.lead": "Aimée Bridal Events is a Yaoundé-based company specializing in event decoration, wedding planning, and catering, with the ability to serve clients across Cameroon.",
    "about.missionTitle": "Our mission",
    "about.missionText": "Turn your event into an elegant, memorable experience while respecting your theme, budget, and priorities—with professional, reassuring support.",
    "about.positionTitle": "Our positioning",
    "about.positionText": "A boutique approach: quality, details, personalization. We work with a trusted vendor network to deliver consistent, beautiful, on-time events.",
    "about.valuesTitle": "Our values",
    "about.v1": "Elegance",
    "about.v2": "Transparency",
    "about.v3": "Punctuality",
    "about.v4": "Budget respect",
    "about.v5": "Client satisfaction",

    // SERVICES
    "services.title": "Services",
    "services.lead": "Choose one service or a complete solution. We tailor every offer to your style, guests, and budget.",
    "services.s1Title": "Event decoration",
    "services.s1a": "Theme concept & color palette",
    "services.s1b": "Arches, centerpieces, staging",
    "services.s1c": "Setup, teardown, coordination",
    "services.s2Title": "Wedding planning",
    "services.s2a": "Planning & timeline",
    "services.s2b": "Day-of coordination",
    "services.s2c": "Vendor management & run-of-show",
    "services.s3Title": "Catering service",
    "services.s3a": "Custom menus (cocktail, buffet, plated service)",
    "services.s3b": "Beautiful presentation & proper quantities",
    "services.s3c": "Dessert & drinks options (on request)",
    "services.s4Title": "Baptisms & religious events",
    "services.s4Text": "Elegant décor, reception setup, catering and coordination.",
    "services.s5Title": "Corporate & institutions",
    "services.s5Text": "Dinners, launches, conferences, parties: clean or premium décor, logistics and catering.",
    "services.s6Title": "Nationwide coverage",
    "services.s6Text": "Based in Yaoundé, we can travel across Cameroon (travel cost depends on city & logistics).",

    // PORTFOLIO
    "portfolio.title": "Portfolio",
    "portfolio.lead": " Real photos of weddings, tables, buffets and decorations",
    "portfolio.p1": "Wedding — Floral décor",
    "portfolio.tag1": "Yaoundé",
    "portfolio.p2": "Head table — Gold & white",
    "portfolio.tag2": "Douala",
    "portfolio.p3": "Catering — Buffet",
    "portfolio.tag3": "Bafoussam",
    "portfolio.cta": "I want this style",

    // PACKAGES
    "packages.title": "Packages",
    "packages.lead": "Four simple packages to guide your choice. Pricing depends on location, guest count, and décor level.",
    "packages.aTitle": "Essential",
    "packages.aText": "Simple, elegant décor for small/medium events.",
    "packages.bTitle": "Elegance",
    "packages.bText": "Décor + partial coordination for a smooth day.",
    "packages.cTitle": "Prestige",
    "packages.cText": "High-end full experience with maximum attention to detail.",
    "packages.dTitle": "Cameroon Destination",
    "packages.dText": "For diaspora and events outside Yaoundé (logistics depends on package).",
    "packages.priceHint": "Quote-based",
    "packages.aBullets": "• Theme • Setup • Teardown",
    "packages.bBullets": "• Premium décor • Planning • Day-of",
    "packages.cBullets": "• Signature décor • Full coordination • Luxury options",
    "packages.dBullets": "• Video calls • Clear contract • Updates",

    // TESTIMONIALS
    "testi.title": "Client reviews",
    "testi.lead": "Add WhatsApp/Facebook/Google reviews here. Social proof is one of the strongest growth levers in Cameroon.",
    "testi.q1": "“Beautiful decoration and excellent service. Our family loved it.”",
    "testi.q1f": "— Wedding, Yaoundé",
    "testi.q2": "“Very professional, punctual, and the catering was excellent.”",
    "testi.q2f": "— Baptism, Douala",

    // CONTACT
    "contact.title": "Contact & Quote",
    "contact.lead": "Share the date, city, event type and number of guests. We respond quickly with a clear proposal.",
    "contact.infoTitle": "Details",
    "contact.city": "Based in Yaoundé • Nationwide service",
    "contact.phoneLabel": "Phone:",
    "contact.howTitle": "How it works",
    "contact.step1": "Fill the form (date, city, guests, style).",
    "contact.step2": "We confirm via call/WhatsApp and send a quote.",
    "contact.step3": "Approval + deposit → planning → execution on the day.",
    "contact.formTitle": "Request form",

    "form.name": "Full name",
    "form.phone": "Phone / WhatsApp",
    "form.city": "City (Cameroon)",
    "form.type": "Event type",
    "form.select": "Select…",
    "form.optWedding": "Wedding",
    "form.optBaptism": "Baptism",
    "form.optCorporate": "Corporate",
    "form.optBirthday": "Birthday",
    "form.optOther": "Other",
    "form.date": "Date",
    "form.guests": "Number of guests",
    "form.budget": "Estimated budget (XAF)",
    "form.message": "Message (style, colors, needs)",
    "form.submit": "Send my request",
    "form.whatsapp": "Direct WhatsApp",
    "form.note": "By submitting this form, you agree to be contacted to finalize the quote (call/WhatsApp/email)."
  }
};

function abeApplyLang(lang){
  const dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Translate select option texts that use data-i18n too (textContent already handled)

  // Placeholders (only if fields exist on this page)
  const ph = {
    fr: { name:"Nom", phone:"+237 ...", city:"Yaoundé / Douala / ...", guests:"Ex: 120", budget:"Ex: 500 000", message:"Décrivez votre vision…" },
    en: { name:"Name", phone:"+237 ...", city:"Yaoundé / Douala / ...", guests:"e.g., 120", budget:"e.g., 500,000", message:"Describe your vision…" }
  }[lang] || ph?.fr;

  const setPH = (id, val) => { const el = document.getElementById(id); if(el) el.placeholder = val; };
  setPH("name", ph.name);
  setPH("phone", ph.phone);
  setPH("city", ph.city);
  setPH("guests", ph.guests);
  setPH("budget", ph.budget);
  setPH("message", ph.message);

  localStorage.setItem("abe_lang", lang);
  const langSelect = document.getElementById("langSelect");
  if(langSelect) langSelect.value = lang;
}

function abeInitI18n(){
  // Year
  const year = document.getElementById("year");
  if(year) year.textContent = new Date().getFullYear();

  // Language
  const saved = localStorage.getItem("abe_lang");
  const fallback = (navigator.language || "").toLowerCase().startsWith("en") ? "en" : "fr";
  const initial = saved || fallback;
  abeApplyLang(initial);

  const langSelect = document.getElementById("langSelect");
  if(langSelect){
    langSelect.addEventListener("change", (e)=> abeApplyLang(e.target.value));
  }

  // Active nav highlight
  const page = document.body.getAttribute("data-page");
  if(page){
    const active = document.querySelector(`[data-nav="${page}"]`);
    if(active) active.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", abeInitI18n);
