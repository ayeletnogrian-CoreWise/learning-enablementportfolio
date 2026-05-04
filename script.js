'use strict';

/* ============================================================
   TRANSLATION OBJECT
   data-i18n  → el.textContent  (plain text)
   data-i18n-html → el.innerHTML (content that contains <br>)
   ============================================================ */
const translations = {
  en: {
    /* --- nav --- */
    'nav-about':     'About',
    'nav-education': 'Education',
    'nav-skills':    'Skills',
    'nav-tools':     'Tools',
    'nav-projects':  'Projects',
    'nav-contact':   'Contact',

    /* --- hero --- */
    'hero-label':   'Learning & AI Enablement Portfolio',
    'hero-tagline': 'Learning & Organizational Development professional with an academic background in Psychology, Education, Labor Studies, Global Management and Organizational Change. I combine L&D, onboarding, AI enablement, knowledge management, facilitation, dashboards, and digital learning tools to build practical learning solutions for organizations.',
    'hero-cta':     'View Projects',

    /* --- about --- */
    'section-about':  'About',
    'about-p1':       'I am a Learning & Organizational Development professional based in Tel Aviv, with experience in training operations, LMS administration, onboarding, manager enablement, AI enablement, knowledge management, stakeholder collaboration, and KPI-based learning measurement.',
    'about-p2':       'My academic background combines Psychology, Education, Labor Studies, Global Management, Organizational Change, Organizational Consulting, and Group Facilitation. I use this foundation to design learning solutions that connect people, business needs, manager enablement, and measurable adoption.',
    'about-p3':       'This portfolio demonstrates how I translate organizational challenges into practical L&D programs, facilitator decks, dashboards, learning portals, knowledge hubs, case studies, and implementation resources.',
    'stat-programs':  'Enterprise Programs',
    'stat-regions':   'Global Regions',
    'stat-data':      'Data-Backed Design',

    /* --- academic to practice --- */
    'section-academic': 'From Academic Learning to Practical L&D Solutions',
    'academic-p1':      'The projects in this portfolio were developed from topics I studied, researched, and chose during my academic journey in Psychology, Education, Labor Studies, Global Management, Organizational Change, and Group Facilitation.',
    'academic-p2':      'Each project began as an academic or research-based topic and was then translated into a practical Learning & Development asset: a training program, workshop structure, facilitator deck, case study, dashboard, learning portal mockup, knowledge hub, and implementation resources.',
    'academic-p3':      'This portfolio reflects my ability to connect theory with practice — taking organizational, managerial, and learning-related concepts and turning them into structured, usable, and measurable learning solutions for real workplace challenges.',

    /* --- education --- */
    'section-education':     'Education',
    'edu-tau-institution':   'Tel Aviv University',
    'edu-tau-degree':        'M.A. in Labor Studies',
    'edu-tau-spec':          'Specialization: Global Management &amp; Organizational Change<br>Additional academic focus: Organizational Consulting, Group Facilitation, Labor Law coursework',
    'edu-tau-dates':         '2023 – 2025',
    'edu-ariel-institution': 'Ariel University',
    'edu-ariel-degree':      'B.A. in Psychology',
    'edu-ariel-dates':       '2020 – 2023',

    /* --- honors --- */
    'section-honors': 'Honors & Distinctions',
    'honor1-meta':    'Military Service Distinction',
    'honor1-title':   'Military Service Distinction — Leadership & Education Role, Southern Region',
    'honor1-desc':    'Recognized for excellence, responsibility, and leadership during military service. In addition to my operational role, I took ownership of the Education Officer responsibilities for the Southern Region, leading educational and training initiatives while managing two roles in parallel.',
    'honor2-meta':    'Military Recognition',
    'honor2-title':   'Outstanding Operations Officer — Swords of Iron War, Nahal Brigade',
    'honor2-desc':    'Recognized for outstanding performance as an Operations Officer during the Swords of Iron War in the Nahal Brigade. Led and managed the operations cell, demonstrated human-centered leadership under pressure, and built a smart Excel-based operations log to track, organize, and improve operational clarity and follow-up.',

    /* --- skills --- */
    'section-skills': 'Core Skills',
    'skill-ld':       'Learning & Development',
    'skill-od':       'Organizational Development',
    'skill-ai':       'AI Enablement',
    'skill-mgr':      'Manager Enablement',
    'skill-onboard':  'Onboarding',
    'skill-ops':      'Learning Operations',
    'skill-lms':      'LMS Administration',
    'skill-km':       'Knowledge Management',
    'skill-tna':      'Training Needs Analysis',
    'skill-fac':      'Facilitation',
    'skill-gfac':     'Group Facilitation',
    'skill-stake':    'Stakeholder Management',
    'skill-change':   'Change Enablement',
    'skill-global':   'Global Collaboration',
    'skill-kpi':      'KPI Measurement',
    'skill-dash':     'Dashboard Design',
    'skill-portal':   'Learning Portal Design',
    'skill-id':       'Instructional Design',
    'skill-cd':       'Content Development',
    'skill-rai':      'Responsible AI',
    'skill-prompt':   'Prompt Design',
    'skill-port':     'Portfolio Design',

    /* --- tools --- */
    'section-tools':  'Tools & Platforms',
    'tool-ppt-name':  'PowerPoint',
    'tool-ppt-desc':  'Facilitator decks, training presentations, learning materials, and manager enablement slides.',
    'tool-cv-name':   'Canva',
    'tool-cv-desc':   'Case study design, portfolio visuals, visual storytelling, learning assets, and branded templates.',
    'tool-xl-name':   'Excel',
    'tool-xl-desc':   'KPI dashboards, learning impact measurement, adoption tracking, data summaries, and reporting.',
    'tool-fg-name':   'Figma',
    'tool-fg-desc':   'Learning portal mockups, LMS screens, dashboard interfaces, and user experience design.',
    'tool-nt-name':   'Notion',
    'tool-nt-desc':   'Knowledge hubs, resource libraries, onboarding spaces, templates, and structured documentation.',
    'tool-gh-name':   'GitHub',
    'tool-gh-desc':   'Portfolio website, project documentation, file organization, and project presentation.',
    'tool-ai-name':   'AI Tools',
    'tool-ai-desc':   'Prompt design, AI enablement materials, content structuring, workflow templates, and adoption support.',
    'tool-lms-name':  'LMS Administration',
    'tool-lms-desc':  'Content upload, learner support, user management, permissions, reporting, and adoption tracking.',

    /* --- projects --- */
    'section-projects': 'Portfolio Projects',
    'projects-note': 'The following projects were developed from academic topics and coursework into practical portfolio assets for L&D, OD, onboarding, AI enablement, change enablement, and global team development.',
    'p1-title': 'AI Enablement Program',
    'p1-desc':  'A structured learning initiative designed to move employees and managers from AI awareness to practical, responsible, and measurable AI use in daily work.',
    'p1-tag1':  'AI Enablement',  'p1-tag2': 'Instructional Design',
    'p1-tag3':  'Change Management', 'p1-tag4': 'L&D Analytics', 'p1-tag5': 'Facilitation',
    'p2-title': '30/60/90 Onboarding Journey for Customer Success Managers',
    'p2-desc':  'A structured onboarding program designed to improve onboarding consistency, reduce time-to-productivity, and support managers with readiness criteria.',
    'p2-tag1':  'Onboarding', 'p2-tag2': 'Curriculum Design',
    'p2-tag3':  'Manager Enablement', 'p2-tag4': 'KPI Measurement', 'p2-tag5': 'CSM Enablement',
    'p3-title': 'Change Readiness & Learning Enablement Program',
    'p3-desc':  'A change enablement program designed to help global technology teams understand strategic change, translate it into daily work, build new capabilities, and measure adoption.',
    'p3-tag1':  'Change Enablement', 'p3-tag2': 'Learning Strategy',
    'p3-tag3':  'Global Collaboration', 'p3-tag4': 'Stakeholder Management', 'p3-tag5': 'KPI Measurement',
    'p4-title': 'Global Conflict Management Enablement Program',
    'p4-desc':  'A practical learning and manager enablement program focused on cross-cultural communication, conflict prevention, mediation, and collaboration norms for global teams.',
    'p4-tag1':  'Global Collaboration', 'p4-tag2': 'Manager Enablement',
    'p4-tag3':  'Facilitation', 'p4-tag4': 'Learning Portal Design', 'p4-tag5': 'Stakeholder Management',

    /* --- file buttons --- */
    'btn-case-study':   'Case Study',
    'btn-facilitator':  'Facilitator Deck',
    'btn-dashboard':    'Dashboard',
    'btn-content-pack': 'Content Pack',
    'btn-overview':     'Program Overview',

    /* --- demonstrates --- */
    'section-demonstrates': 'What This Portfolio Demonstrates',
    'demonstrates-text':    'This portfolio demonstrates end-to-end L&D thinking: identifying organizational needs, mapping learning gaps, designing practical programs, creating facilitator decks and learning assets, building dashboards, developing learning portals and knowledge hubs, and connecting learning to adoption and measurable impact.',

    /* --- contact --- */
    'section-contact':       'Get in Touch',
    'contact-subtitle':      "Interested in collaborating on learning programs, AI enablement, or organizational change initiatives? Let's connect.",
    'contact-linkedin-label':'LinkedIn Profile',
    'contact-location-label':'Tel Aviv, Israel',

    /* --- footer --- */
    'footer-text': '© 2026 Ayelet Nogrian · Learning & AI Enablement Portfolio',
  },

  /* ===================== HEBREW ===================== */
  he: {
    /* --- nav --- */
    'nav-about':     'אודות',
    'nav-education': 'השכלה',
    'nav-skills':    'מיומנויות',
    'nav-tools':     'כלים',
    'nav-projects':  'פרויקטים',
    'nav-contact':   'יצירת קשר',

    /* --- hero --- */
    'hero-label':   'תיק עבודות בלמידה, פיתוח ארגוני והטמעת AI',
    'hero-tagline': 'אשת למידה ופיתוח ארגוני עם רקע אקדמי בפסיכולוגיה, חינוך, לימודי עבודה, ניהול גלובלי ושינוי ארגוני. אני משלבת למידה ופיתוח, אונבורדינג, הטמעת AI, ניהול ידע, הנחיה, דשבורדים וכלים דיגיטליים כדי לבנות פתרונות למידה פרקטיים לארגונים.',
    'hero-cta':     'צפייה בפרויקטים',

    /* --- about --- */
    'section-about':  'אודות',
    'about-p1':       'אני אשת למידה ופיתוח ארגוני מתל אביב, עם ניסיון בתפעול הדרכה, ניהול LMS, אונבורדינג, פיתוח מנהלים, הטמעת AI, ניהול ידע, עבודה מול בעלי עניין ומדידת תהליכי למידה באמצעות KPI.',
    'about-p2':       'הרקע האקדמי שלי משלב פסיכולוגיה, חינוך, לימודי עבודה, ניהול גלובלי, שינוי ארגוני, ייעוץ ארגוני והנחיית קבוצות. אני משתמשת בבסיס הזה כדי לבנות פתרונות למידה שמחברים בין אנשים, צרכים עסקיים, פיתוח מנהלים ואימוץ מדיד של תהליכים.',
    'about-p3':       'תיק העבודות הזה מציג איך אני מתרגמת אתגרים ארגוניים לתוכניות למידה מעשיות, מצגות הדרכה, דשבורדים, פורטלי למידה, מרכזי ידע, תיאורי מקרה ומשאבי יישום.',
    'stat-programs':  'תוכניות ארגוניות',
    'stat-regions':   'אזורים גלובליים',
    'stat-data':      'מבוסס נתונים',

    /* --- academic to practice --- */
    'section-academic': 'מהאקדמיה לפרקטיקה ארגונית',
    'academic-p1':      'הפרויקטים בתיק העבודות נבנו מתוך נושאים שלמדתי, חקרתי ובחרתי לעסוק בהם במהלך התואר והלימודים האקדמיים שלי בפסיכולוגיה, חינוך, לימודי עבודה, ניהול גלובלי, שינוי ארגוני והנחיית קבוצות.',
    'academic-p2':      'כל פרויקט התחיל כנושא אקדמי או מחקרי, ולאחר מכן תורגם לתוצר פרקטי בעולמות הלמידה והפיתוח הארגוני: תוכנית הדרכה, מבנה סדנה, מצגת מנחה, תיאור מקרה, דשבורד, מוקאפ לפורטל למידה, מרכז ידע ומשאבי יישום.',
    'academic-p3':      'תיק העבודות מציג את היכולת שלי לחבר בין תאוריה לפרקטיקה — לקחת רעיונות ארגוניים, ניהוליים ולמידתיים ולהפוך אותם לפתרונות למידה מובנים, שימושיים ומדידים עבור אתגרים אמיתיים בסביבת העבודה.',

    /* --- education --- */
    'section-education':     'השכלה',
    'edu-tau-institution':   'אוניברסיטת תל אביב',
    'edu-tau-degree':        'תואר שני בלימודי עבודה',
    'edu-tau-spec':          'התמחות: ניהול גלובלי ושינוי ארגוני<br>מיקוד אקדמי נוסף: ייעוץ ארגוני, הנחיית קבוצות ודיני עבודה',
    'edu-tau-dates':         '2023 – 2025',
    'edu-ariel-institution': 'אוניברסיטת אריאל',
    'edu-ariel-degree':      'תואר ראשון בפסיכולוגיה',
    'edu-ariel-dates':       '2020 – 2023',

    /* --- honors --- */
    'section-honors': 'הצטיינויות והוקרה',
    'honor1-meta':    'הצטיינות בשירות הצבאי',
    'honor1-title':   'הצטיינות בשירות הצבאי — הובלה ותיק חינוך, מרחב דרום',
    'honor1-desc':    'הוקרה על תפקוד מצטיין, אחריות, הובלה ומצוינות במהלך השירות הצבאי. בנוסף לתפקידי המבצעי, לקחתי אחריות על תיק החינוך במרחב דרום, הובלתי יוזמות חינוך והדרכה, וניהלתי שני תחומי אחריות במקביל.',
    'honor2-meta':    'הוקרה צבאית',
    'honor2-title':   'קצינת מבצעים מצטיינת — מלחמת חרבות ברזל, חטיבת הנח״ל',
    'honor2-desc':    'הוקרה על תפקוד מצטיין כקצינת מבצעים במהלך מלחמת חרבות ברזל בחטיבת הנח״ל. ניהלתי והובלתי את תא המבצעים, הפגנתי מנהיגות אנושית תחת לחץ, ובניתי יומן מבצעים חכם באקסל לצורך מעקב, סדר, תיעוד ושיפור הבהירות המבצעית.',

    /* --- skills --- */
    'section-skills': 'מיומנויות מרכזיות',
    'skill-ld':       'למידה ופיתוח',
    'skill-od':       'פיתוח ארגוני',
    'skill-ai':       'הטמעת AI',
    'skill-mgr':      'פיתוח והעצמת מנהלים',
    'skill-onboard':  'אונבורדינג',
    'skill-ops':      'תפעול למידה',
    'skill-lms':      'ניהול LMS',
    'skill-km':       'ניהול ידע',
    'skill-tna':      'ניתוח צורכי למידה',
    'skill-fac':      'הנחיה',
    'skill-gfac':     'הנחיית קבוצות',
    'skill-stake':    'עבודה מול בעלי עניין',
    'skill-change':   'הטמעת שינוי',
    'skill-global':   'שיתוף פעולה גלובלי',
    'skill-kpi':      'מדידת KPI',
    'skill-dash':     'עיצוב דשבורדים',
    'skill-portal':   'עיצוב פורטלי למידה',
    'skill-id':       'עיצוב למידה',
    'skill-cd':       'פיתוח תוכן',
    'skill-rai':      'שימוש אחראי ב־AI',
    'skill-prompt':   'עיצוב פרומפטים',
    'skill-port':     'עיצוב תיק עבודות',

    /* --- tools --- */
    'section-tools':  'כלים ופלטפורמות',
    'tool-ppt-name':  'PowerPoint',
    'tool-ppt-desc':  'בניית מצגות הדרכה, Facilitator Decks, חומרי למידה ומצגות לפיתוח מנהלים.',
    'tool-cv-name':   'Canva',
    'tool-cv-desc':   'עיצוב Case Studies, נכסי למידה, תבניות ממותגות וסטוריטלינג ויזואלי.',
    'tool-xl-name':   'Excel',
    'tool-xl-desc':   'בניית דשבורדים, מדידת KPI, מעקב אימוץ, ניתוח נתונים ודוחות למידה.',
    'tool-fg-name':   'Figma',
    'tool-fg-desc':   'עיצוב מוקאפ לפורטלי למידה, מסכי LMS, ממשקי דשבורד וחוויית משתמש.',
    'tool-nt-name':   'Notion',
    'tool-nt-desc':   'בניית מרכזי ידע, ספריות משאבים, עמודי אונבורדינג, תבניות ותיעוד מובנה.',
    'tool-gh-name':   'GitHub',
    'tool-gh-desc':   'הצגת תיק עבודות, תיעוד פרויקטים, ארגון קבצים ובניית אתר פורטפוליו.',
    'tool-ai-name':   'כלי AI',
    'tool-ai-desc':   'עיצוב פרומפטים, בניית חומרי הטמעת AI, ארגון תוכן, תבניות עבודה ותהליכי אימוץ.',
    'tool-lms-name':  'ניהול LMS',
    'tool-lms-desc':  'העלאת תכנים, תמיכה בלומדים, ניהול משתמשים והרשאות, דוחות ומעקב אימוץ.',

    /* --- projects --- */
    'section-projects': 'פרויקטים',
    'projects-note': 'הפרויקטים הבאים פותחו מתוך נושאים אקדמיים ועבודות שביצעתי במהלך התואר, והפכו לנכסי תיק עבודות פרקטיים בעולמות למידה ופיתוח ארגוני, אונבורדינג, הטמעת AI, ניהול שינוי ופיתוח צוותים גלובליים.',
    'p1-title': 'תוכנית הטמעת AI בארגון',
    'p1-desc':  'יוזמת למידה מובנית שנועדה להעביר עובדים ומנהלים ממודעות בסיסית ל־AI לשימוש מעשי, אחראי ומדיד בכלי AI בעבודה היומיומית. הפרויקט כולל מצגת הדרכה, צ׳קליסט שימוש אחראי, ספריית פרומפטים, דשבורד אימוץ, מוקאפ לפורטל למידה וחבילת תוכן מלאה.',
    'p1-tag1':  'הטמעת AI',    'p1-tag2': 'עיצוב למידה',
    'p1-tag3':  'ניהול שינוי', 'p1-tag4': 'אנליטיקס למידה', 'p1-tag5': 'הנחיה',
    'p2-title': 'מסלול אונבורדינג 30/60/90 למנהלי Customer Success',
    'p2-desc':  'תוכנית אונבורדינג מובנית למנהלי Customer Success חדשים, שנועדה לשפר עקביות בתהליך הקליטה, להפחית Time-to-Productivity, ולספק למנהלים קריטריונים ברורים להערכת מוכנות.',
    'p2-tag1':  'אונבורדינג',          'p2-tag2': 'עיצוב תכנית לימודים',
    'p2-tag3':  'פיתוח מנהלים',        'p2-tag4': 'מדידת KPI', 'p2-tag5': 'הכשרת CSM',
    'p3-title': 'תוכנית מוכנות והטמעת שינוי ארגוני',
    'p3-desc':  'תוכנית Change Enablement שמסייעת לעובדים ולמנהלים להבין שינוי אסטרטגי, לתרגם אותו לעבודה היומיומית, לבנות יכולות חדשות, להתמודד עם התנגדויות ולמדוד אימוץ באמצעות נכסי למידה ודשבורדים.',
    'p3-tag1':  'הטמעת שינוי',         'p3-tag2': 'אסטרטגיית למידה',
    'p3-tag3':  'שיתוף פעולה גלובלי',  'p3-tag4': 'עבודה מול בעלי עניין', 'p3-tag5': 'מדידת KPI',
    'p4-title': 'תוכנית לניהול קונפליקטים בצוותים גלובליים',
    'p4-desc':  'תוכנית למידה ופיתוח מנהלים המתמקדת בתקשורת בין־תרבותית, מניעת קונפליקטים, גישור, עבודה אסינכרונית, הסכמות צוותיות ומדידת שיפור בשיתוף פעולה גלובלי.',
    'p4-tag1':  'שיתוף פעולה גלובלי',  'p4-tag2': 'פיתוח מנהלים',
    'p4-tag3':  'הנחיה',               'p4-tag4': 'עיצוב פורטלי למידה', 'p4-tag5': 'עבודה מול בעלי עניין',

    /* --- file buttons --- */
    'btn-case-study':   'תיאור מקרה',
    'btn-facilitator':  'מצגת הדרכה',
    'btn-dashboard':    'דשבורד',
    'btn-content-pack': 'חבילת תוכן',
    'btn-overview':     'סקירת תוכנית',

    /* --- demonstrates --- */
    'section-demonstrates': 'מה תיק העבודות מציג',
    'demonstrates-text':    'תיק העבודות מציג חשיבה מקצה לקצה בעולמות הלמידה והפיתוח הארגוני: זיהוי צרכים ארגוניים, מיפוי פערי למידה, עיצוב תוכניות פרקטיות, בניית מצגות הדרכה ונכסי למידה, פיתוח דשבורדים, יצירת פורטלי למידה ומרכזי ידע, וחיבור בין למידה לבין אימוץ, ביצועים והשפעה מדידה.',

    /* --- contact --- */
    'section-contact':       'יצירת קשר',
    'contact-subtitle':      'מעוניינת לשתף פעולה על תוכניות למידה, הטמעת AI, או יוזמות שינוי ארגוני? בואו נתחבר.',
    'contact-linkedin-label':'פרופיל לינקדאין',
    'contact-location-label':'תל אביב, ישראל',

    /* --- footer --- */
    'footer-text': '© 2026 איילת נוגריאן · תיק עבודות בלמידה, פיתוח ארגוני והטמעת AI',
  }
};

/* ============================================================
   APPLY LANGUAGE
   ============================================================ */
function setLang(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');

  const t = translations[lang];

  // Plain-text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML translations (elements that contain <br> or HTML entities)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  try { localStorage.setItem('portfolio-lang', lang); } catch (_) {}
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  // Navbar scroll shadow
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Restore saved preference, default EN
  let saved = 'en';
  try { saved = localStorage.getItem('portfolio-lang') || 'en'; } catch (_) {}
  setLang(saved);
});
