/* ================================================
   T\u00c9MAV\u00c1LT\u00d3 (S\u00f6t\u00e9t / Vil\u00e1gos m\u00f3d)
   ================================================ */
const THEME_KEY = 'kincsek-theme';
const LANG_KEY  = 'kincsek-lang';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
}

/* ================================================
   FORDÍT\u00c1SOK (HU / EN / DE)
   ================================================ */
const translations = {
  hu: {
    /* Navbar */
    'nav-rolunk':           'R\u00f3lunk',
    'nav-koncepcio':        'M\u0171v\u00e9szeti Koncepci\u00f3',
    'nav-napirend':         'Napirend',
    'nav-kapcsolat':        'Jelentkez\u00e9s',
    'nav-klub':             'Kincsek Klub',
    /* Hero */
    'hero-badge':           'Kincsek M\u0171v\u00e9szeti Csal\u00e1di B\u00f6lcs\u0151de Budapest',
    'hero-title':           'Kincsek M\u0171v\u00e9szeti Csal\u00e1di B\u00f6lcs\u0151de Budapest 9. ker\u00fclet\u00e9ben',
    'hero-desc':            'Szeretettel v\u00e1runk minden kisgyermeket a IX. ker\u00fcletben, a <strong>T\u0171zolt\u00f3 utca 68.</strong> sz\u00e1m alatt tal\u00e1lhat\u00f3 csal\u00e1di mag\u00e1nb\u00f6lcs\u0151d\u00e9nkben. Biztons\u00e1gos, j\u00e1t\u00e9kos \u00e9s inspir\u00e1l\u00f3 <strong>b\u00f6lcs\u0151de Budapest</strong> sz\u00edv\u00e9ben, zenei \u00e9s k\u00e9pz\u0151m\u0171v\u00e9szeti f\u00f3kusszal.',
    'hero-btn-apply':       'Jelentkez\u00e9s b\u00f6lcs\u0151d\u00e9be',
    'hero-btn-club':        'Ismerd meg k\u00f6z\u00f6ss\u00e9gi programjainkat a Kincsek Klubban!',
    'float-music-title':    'J\u00e1t\u00e9kos Zenei Nevel\u00e9s',
    'float-music-sub':      'Minden nap dalolunk!',
    'float-art-title':      'Kreat\u00edv Alkot\u00e1s',
    'float-art-sub':        'Fest\u00e9s, gyurma, rajzol\u00e1s',
    /* R\u00f3lunk szekci\u00f3 */
    'section-about-title':  'Kincsek M\u0171v\u00e9szeti Csal\u00e1di B\u00f6lcs\u0151de Budapest',
    'section-about-desc':   'Hisz\u00fcnk abban, hogy a kora gyermekkori m\u0171v\u00e9szeti \u00e9lm\u00e9nyek megalapozz\u00e1k a kreat\u00edv gondolkod\u00e1st. Ha az ide\u00e1lis <strong>b\u00f6lcs\u0151de 9. ker\u00fclet</strong> vagy <strong>b\u00f6lcs\u0151de Budapest</strong> kateg\u00f3ri\u00e1ban a keres\u00e9sed t\u00e1rgya, a Kincsek a legjobb v\u00e1laszt\u00e1s.',
    'card-art-title':       'K\u00e9pz\u0151m\u0171v\u00e9szet',
    'card-art-desc':        'Ujjfest\u00e9s, agyagoz\u00e1s, koll\u00e1zsok k\u00e9sz\u00edt\u00e9se \u00e9s term\u00e9szetes anyagok haszn\u00e1lata. N\u00e1lunk az alkot\u00e1s folyamata \u00e9s a felfedez\u00e9s \u00f6r\u00f6me a legfontosabb.',
    'card-music-title':     'Zene & Mozg\u00e1s',
    'card-music-desc':      'N\u00e9pdalok, mond\u00f3k\u00e1k, \u00f6lbeli j\u00e1t\u00e9kok \u00e9s ritmushangszerek haszn\u00e1lata. A zene fejleszti a besz\u00e9det, a mozg\u00e1s pedig a koordin\u00e1ci\u00f3t \u00e9s az egyens\u00falyt.',
    'card-groups-title':    'Csal\u00e1dias l\u00e9gk\u00f6r',
    'card-groups-desc':     'Maximum 7-8 f\u0151s kis csoportokkal dolgozunk, \u00edgy minden kisgyermek szem\u00e9lyre szabott figyelmet, szeretetet \u00e9s gondoskod\u00e1st kap.',
    'card-safety-title':    '\u00c9rzelmi biztons\u00e1g',
    'card-safety-desc':     'Szoros egy\u00fcttm\u0171k\u00f6d\u00e9s a sz\u00fcl\u0151kkel, z\u00f6kken\u0151mentes beszoktat\u00e1s \u00e9s kisz\u00e1m\u00edthat\u00f3, \u00e9rzelmileg stabil, t\u00e1mogat\u00f3 k\u00f6rnyezet a nap minden perc\u00e9ben.',
    'about-why-title':      'Mi\u00e9rt a Kincsek M\u0171v\u00e9szeti B\u00f6lcs\u0151de?',
    'about-why-p1':         'A T\u0171zolt\u00f3 utca 68. alatti b\u00f6lcs\u0151d\u00e9nk kialak\u00edt\u00e1sakor arra t\u00f6rekedt\u00fcnk, hogy a kicsik otthon \u00e9rezz\u00e9k magukat. Bar\u00e1ts\u00e1gos tereink tele vannak inspir\u00e1l\u00f3, term\u00e9szetes j\u00e1t\u00e9kokkal \u00e9s alkot\u00f3eszk\u00f6z\u00f6kkel.',
    'about-why-p2':         'Pedag\u00f3gusaink nagy tapasztalattal \u00e9s v\u00e9gtelen t\u00fcrelemmel seg\u00edtik a gyermekek \u00f6n\u00e1ll\u00f3 szem\u00e9lyis\u00e9g\u00e9nek kibontakoz\u00e1s\u00e1t, mik\u00f6zben kiemelt figyelmet ford\u00edtunk a m\u0171v\u00e9szeti nevel\u00e9sre. A <strong>Kincsek</strong> n\u00e9v garancia a min\u0151s\u00e9gi gondoskod\u00e1sra.',
    'about-feat-1':         'M\u0171v\u00e9szetk\u00f6zpont\u00fa egy\u00e9ni fejleszt\u00e9s',
    'about-feat-2':         'Eg\u00e9szs\u00e9ges, ellen\u0151rz\u00f6tt bio alapanyag\u00fa \u00e9telek naponta n\u00e9gyszer',
    'about-feat-3':         'Saj\u00e1t fejleszt\u0151 \u00e9s biztons\u00e1gos j\u00e1tsz\u00f3sarok',
    'about-feat-4':         'Kapcsol\u00f3d\u00e1s a Kincsek Klub csal\u00e1di programjaihoz',
    /* Napirend */
    'section-schedule-title': 'Csal\u00e1dias B\u00f6lcs\u0151dei Napirend\u00fcnk (9. ker\u00fclet)',
    'section-schedule-desc':  'A kisgyermekek sz\u00e1m\u00e1ra a napirend jelenti a biztons\u00e1got \u00e9s a kisz\u00e1m\u00edthat\u00f3s\u00e1got. Tev\u00e9kenys\u00e9geinket rugalmasan, a gyermekek aktu\u00e1lis ig\u00e9nyeihez igaz\u00edtva alak\u00edtjuk.',
    'tl-1-title': '\u00c9rkez\u00e9s \u00e9s Szabad J\u00e1t\u00e9k',
    'tl-1-desc':  'A gyermekek folyamatos \u00e9rkez\u00e9se, k\u00f6tetlen besz\u00e9lget\u00e9s a sz\u00fcl\u0151kkel. Nyugodt, szabad j\u00e1t\u00e9k a szob\u00e1ban, r\u00e1hangol\u00f3d\u00e1s a napra.',
    'tl-2-title': 'K\u00f6z\u00f6s Eg\u00e9szs\u00e9ges Reggeli',
    'tl-2-desc':  'Finom, vitaminokban gazdag reggeli z\u00f6lds\u00e9gekkel, p\u00e9k\u00e1ruval \u00e9s gy\u00fcm\u00f6lcste\u00e1val. Tiszt\u00e1lkod\u00e1s, k\u00e9zmos\u00e1s.',
    'tl-3-title': 'M\u0171v\u00e9szeti & Zenei Foglalkoz\u00e1s',
    'tl-3-desc':  'Ir\u00e1ny\u00edtott k\u00e9pz\u0151m\u0171v\u00e9szeti tev\u00e9kenys\u00e9gek (fest\u00e9s, gyurma, ragaszt\u00e1s) vagy k\u00f6z\u00f6s zene, ritmusj\u00e1t\u00e9kok, torna \u00e9s meseolvas\u00e1s.',
    'tl-4-title': 'Udvari Szabad J\u00e1t\u00e9k / S\u00e9ta',
    'tl-4-desc':  'J\u00f3 id\u0151 eset\u00e9n j\u00e1t\u00e9k a saj\u00e1t biztons\u00e1gos udvarunkon, homokoz\u00e1s, mozg\u00e1sfejleszt\u0151 kismotoroz\u00e1s vagy s\u00e9ta a k\u00f6zeli parkban.',
    'tl-5-title': 'K\u00e9sz\u00fcl\u0151d\u00e9s \u00e9s Kiad\u00f3s Eb\u00e9d',
    'tl-5-desc':  'K\u00e9zmos\u00e1s, \u00f6n\u00e1ll\u00f3s\u00e1gra nevel\u00e9s az \u00e9tkez\u00e9s sor\u00e1n. Eg\u00e9szs\u00e9ges k\u00e9tfog\u00e1sos meleg eb\u00e9d elfogyaszt\u00e1sa.',
    'tl-6-title': 'Meseolvas\u00e1s \u00e9s Csendespihen\u0151',
    'tl-6-desc':  'Szem\u00e9lyes alv\u00f3ka, cumi vagy takar\u00f3 k\u00eds\u00e9ret\u00e9ben, halk zene \u00e9s halk meseolvas\u00e1s mellett pihennek \u00e9s alszanak a gyerekek.',
    'tl-7-title': 'Uzsonna \u00e9s D\u00e9lut\u00e1ni J\u00e1t\u00e9k',
    'tl-7-desc':  '\u00c9bred\u00e9s ut\u00e1ni uzsonn\u00e1z\u00e1s (gy\u00fcm\u00f6lcs, joghurt, keksz), majd j\u00e1t\u00e9k a sz\u00fcl\u0151k meg\u00e9rkez\u00e9s\u00e9ig \u00e9s hazamenetelig.',
    /* Kapcsolat */
    'section-contact-title': 'Kapcsolat & Jelentkez\u00e9s \u2013 Kincsek B\u00f6lcs\u0151de Budapest',
    'section-contact-desc':  'Szeretn\u00e9d megtekinteni a b\u00f6lcs\u0151d\u00e9nket szem\u00e9lyesen is? K\u00fcldd el jelentkez\u00e9sed vagy k\u00e9rd\u00e9sed, \u00e9s munkat\u00e1rsunk 24 \u00f3r\u00e1n bel\u00fcl felveszi veled a kapcsolatot!',
    'contact-address-label': 'C\u00edm\u00fcnk',
    'contact-address-sub':   '(IX. ker\u00fclet / Ferencv\u00e1ros, k\u00f6nnyen megk\u00f6zel\u00edthet\u0151 helyen)',
    'contact-phone-label':   'Telefon',
    'contact-hours':         'H\u00e9tf\u0151t\u0151l-P\u00e9ntekig: 08:00 - 17:00',
    'contact-email-label':   'Email c\u00edm',
    /* \u0170rlap */
    'form-title':          'Jelentkez\u00e9si Lap',
    'form-label-parent':   'Sz\u00fcl\u0151 teljes neve *',
    'form-ph-parent':      'Pl. Kis M\u00e1ria',
    'form-err-parent':     'K\u00e9rj\u00fck, add meg a nevedet!',
    'form-label-child':    'Gyermek neve \u00e9s sz\u00fclet\u00e9si ideje *',
    'form-ph-child':       'Pl. Kis Bence, 2024.05.12.',
    'form-err-child':      'K\u00e9rj\u00fck, add meg a gyermek nev\u00e9t \u00e9s sz\u00fclet\u00e9si d\u00e1tum\u00e1t!',
    'form-label-email':    'Email c\u00edm *',
    'form-ph-email':       'Pl. maria@example.com',
    'form-err-email':      'K\u00e9rj\u00fck, adj meg egy \u00e9rv\u00e9nyes email c\u00edmet!',
    'form-label-phone':    'Telefonsz\u00e1m *',
    'form-ph-phone':       'Pl. +36 30 123 4567',
    'form-err-phone':      'K\u00e9rj\u00fck, adj meg egy \u00e9rv\u00e9nyes telefonsz\u00e1mot!',
    'form-label-msg':      '\u00dczenet / K\u00e9rd\u00e9s (opcion\u00e1lis)',
    'form-ph-msg':         'B\u00e1rmilyen k\u00e9rd\u00e9sed van a beszoktat\u00e1ssal vagy egyedi ig\u00e9nyekkel kapcsolatban...',
    'form-privacy':        'Elfogadom az Adatv\u00e9delmi T\u00e1j\u00e9koztat\u00f3t, \u00e9s hozz\u00e1j\u00e1rulok, hogy a b\u00f6lcs\u0151de kapcsolatba l\u00e9pjen velem a megadott adatokon. *',
    'form-submit':         'Jelentkez\u00e9s elk\u00fcld\u00e9se',
    /* Footer */
    'footer-links-title':   'Linkek',
    'footer-contact-title': 'El\u00e9rhet\u0151s\u00e9gek',
    'footer-address-label': 'B\u00f6lcs\u0151de C\u00edme',
    'footer-brand-p1':      'A Kincsek M\u0171v\u00e9szeti Csal\u00e1di B\u00f6lcs\u0151de szeretetteljes, m\u0171v\u00e9szet- \u00e9s gyermekk\u00f6zpont\u00fa napk\u00f6zbeni ell\u00e1t\u00e1st biztos\u00edt Budapest belv\u00e1ros\u00e1ban, Ferencv\u00e1rosban.',
    'footer-brand-p2':      'Alapozzuk meg k\u00f6z\u00f6sen gyermeked boldog \u00e9s kreat\u00edv j\u00f6v\u0151j\u00e9t a legkreat\u00edvabb 9. ker\u00fcleti b\u00f6lcs\u0151d\u00e9ben!',
    'footer-banner-title':  'K\u00f6z\u00f6ss\u00e9gi \u00e9let a Kincsek Klubban!',
    'footer-banner-desc':   'Csatlakozz sz\u00fcl\u0151klubunkhoz, h\u00e9tv\u00e9gi csal\u00e1di napjainkhoz \u00e9s m\u0171v\u00e9szeti workshopjainkhoz.',
    'footer-banner-btn':    'Ismerd meg k\u00f6z\u00f6ss\u00e9gi programjainkat a Kincsek Klubban!',
    'footer-copy':          '\u00a9 2026 Kincsek M\u0171v\u00e9szeti Csal\u00e1di B\u00f6lcs\u0151de. Minden jog fenntartva.',
    'footer-privacy':       'Adatv\u00e9delmi T\u00e1j\u00e9koztat\u00f3',
    'footer-contact-link':  'Kapcsolat',
  },

  en: {
    /* Navbar */
    'nav-rolunk':           'About Us',
    'nav-koncepcio':        'Arts Concept',
    'nav-napirend':         'Daily Schedule',
    'nav-kapcsolat':        'Apply Now',
    'nav-klub':             'Kincsek Club',
    /* Hero */
    'hero-badge':           'Kincsek Arts Family Nursery Budapest',
    'hero-title':           'Kincsek Arts Family Nursery in Budapest\'s 9th District',
    'hero-desc':            'We warmly welcome every child in District IX, at <strong>68 T\u0171zolt\u00f3 Street</strong>. A safe, playful and inspiring <strong>nursery in Budapest</strong> with a focus on music and visual arts.',
    'hero-btn-apply':       'Enrol Your Child',
    'hero-btn-club':        'Discover our community programmes at Kincsek Club!',
    'float-music-title':    'Playful Music Education',
    'float-music-sub':      'We sing every single day!',
    'float-art-title':      'Creative Arts',
    'float-art-sub':        'Painting, clay, drawing',
    /* About */
    'section-about-title':  'Kincsek Arts Family Nursery Budapest',
    'section-about-desc':   'We believe early-childhood art experiences build creative thinking. If you are looking for the best <strong>nursery in the 9th district</strong> or <strong>nursery in Budapest</strong>, Kincsek is your answer.',
    'card-art-title':       'Visual Arts',
    'card-art-desc':        'Finger painting, clay modelling, collage making and the use of natural materials. The joy of creation and discovery is what matters most to us.',
    'card-music-title':     'Music & Movement',
    'card-music-desc':      'Folk songs, rhymes, lap games and rhythm instruments. Music develops language, while movement builds coordination and balance.',
    'card-groups-title':    'Family Atmosphere',
    'card-groups-desc':     'We work in small groups of maximum 7–8 children so that each child receives personalised attention, love and care.',
    'card-safety-title':    'Emotional Safety',
    'card-safety-desc':     'Close cooperation with parents, a smooth settling-in process, and a predictable, emotionally stable and supportive environment every moment of the day.',
    'about-why-title':      'Why Kincsek Arts Nursery?',
    'about-why-p1':         'When designing our nursery at 68 T\u0171zolt\u00f3 Street we strived to make the little ones feel right at home. Our warm spaces are full of inspiring natural toys and art supplies.',
    'about-why-p2':         'Our educators guide children\'s individual development with vast experience and endless patience, while placing special emphasis on arts education. The name <strong>Kincsek</strong> is a guarantee of quality care.',
    'about-feat-1':         'Arts-centred individual development',
    'about-feat-2':         'Healthy, certified organic meals four times a day',
    'about-feat-3':         'Our own dedicated and safe play corner',
    'about-feat-4':         'Connection to Kincsek Club family programmes',
    /* Schedule */
    'section-schedule-title': 'Our Family Nursery Daily Schedule (9th District)',
    'section-schedule-desc':  'A predictable routine gives young children security and stability. We adapt our activities flexibly to the children\'s current needs.',
    'tl-1-title': 'Arrival & Free Play',
    'tl-1-desc':  'Children arrive gradually; relaxed chats with parents. Calm free play in the room to ease into the day.',
    'tl-2-title': 'Healthy Shared Breakfast',
    'tl-2-desc':  'A nutritious breakfast with vegetables, fresh pastries and fruit tea. Hand washing and hygiene routine.',
    'tl-3-title': 'Arts & Music Activity',
    'tl-3-desc':  'Guided visual arts activities (painting, clay, gluing) or group music, rhythm games, gymnastics and storytime.',
    'tl-4-title': 'Outdoor Free Play / Walk',
    'tl-4-desc':  'Weather permitting: play in our safe garden, sandbox, balance bikes or a walk in the nearby park.',
    'tl-5-title': 'Getting Ready & Hearty Lunch',
    'tl-5-desc':  'Hand washing, fostering independence at the table. A healthy two-course hot lunch.',
    'tl-6-title': 'Storytime & Quiet Rest',
    'tl-6-desc':  'Children rest and sleep with their personal comfort item, soft music and quiet storytelling.',
    'tl-7-title': 'Snack & Afternoon Play',
    'tl-7-desc':  'Afternoon snack after waking (fruit, yoghurt, biscuit), then play until parents arrive.',
    /* Contact */
    'section-contact-title': 'Contact & Enrolment – Kincsek Nursery Budapest',
    'section-contact-desc':  'Would you like to visit our nursery in person? Send us your application or question and a staff member will contact you within 24 hours!',
    'contact-address-label': 'Our Address',
    'contact-address-sub':   '(9th District / Ferencv\u00e1ros, easily accessible)',
    'contact-phone-label':   'Phone',
    'contact-hours':         'Monday to Friday: 08:00 – 17:00',
    'contact-email-label':   'Email Address',
    /* Form */
    'form-title':          'Enrolment Form',
    'form-label-parent':   'Parent\'s full name *',
    'form-ph-parent':      'e.g. Jane Smith',
    'form-err-parent':     'Please enter your name!',
    'form-label-child':    'Child\'s name and date of birth *',
    'form-ph-child':       'e.g. Tom Smith, 2024-05-12',
    'form-err-child':      'Please enter the child\'s name and date of birth!',
    'form-label-email':    'Email address *',
    'form-ph-email':       'e.g. jane@example.com',
    'form-err-email':      'Please enter a valid email address!',
    'form-label-phone':    'Phone number *',
    'form-ph-phone':       'e.g. +36 30 123 4567',
    'form-err-phone':      'Please enter a valid phone number!',
    'form-label-msg':      'Message / Question (optional)',
    'form-ph-msg':         'Any questions about the settling-in process or special needs...',
    'form-privacy':        'I accept the Privacy Policy and consent to the nursery contacting me via the details provided. *',
    'form-submit':         'Submit Application',
    /* Footer */
    'footer-links-title':   'Links',
    'footer-contact-title': 'Contact',
    'footer-address-label': 'Nursery Address',
    'footer-brand-p1':      'Kincsek Arts Family Nursery provides loving, arts- and child-centred daytime care in the heart of Budapest, Ferencv\u00e1ros.',
    'footer-brand-p2':      'Let\'s build your child\'s happy, creative future together at the most creative nursery in the 9th district!',
    'footer-banner-title':  'Community Life at Kincsek Club!',
    'footer-banner-desc':   'Join our parent club, weekend family days and art workshops.',
    'footer-banner-btn':    'Discover our community programmes at Kincsek Club!',
    'footer-copy':          '\u00a9 2026 Kincsek Arts Family Nursery. All rights reserved.',
    'footer-privacy':       'Privacy Policy',
    'footer-contact-link':  'Contact',
  },

  de: {
    /* Navbar */
    'nav-rolunk':           '\u00dcber uns',
    'nav-koncepcio':        'Kunstkonzept',
    'nav-napirend':         'Tagesablauf',
    'nav-kapcsolat':        'Anmelden',
    'nav-klub':             'Kincsek Klub',
    /* Hero */
    'hero-badge':           'Kincsek Kunst-Krippe Budapest',
    'hero-title':           'Kincsek Kunst-Familienpflege im 9. Bezirk Budapest',
    'hero-desc':            'Wir begr\u00fc\u00dfen alle Kleinkinder herzlich im IX. Bezirk, in unserer Familienkrippe in der <strong>T\u0171zolt\u00f3 utca 68.</strong> Eine sichere, spielerische und inspirierende <strong>Krippe in Budapest</strong> mit Schwerpunkt Musik und bildende Kunst.',
    'hero-btn-apply':       'Jetzt anmelden',
    'hero-btn-club':        'Entdecke unsere Gemeinschaftsprogramme im Kincsek Klub!',
    'float-music-title':    'Spielerische Musikerziehung',
    'float-music-sub':      'Wir singen jeden Tag!',
    'float-art-title':      'Kreatives Gestalten',
    'float-art-sub':        'Malen, Ton, Zeichnen',
    /* About */
    'section-about-title':  'Kincsek Kunst-Familienpflege Budapest',
    'section-about-desc':   'Wir glauben, dass k\u00fcnstlerische Erfahrungen im fr\u00fchen Kindesalter kreatives Denken f\u00f6rdern. Wer die beste <strong>Krippe im 9. Bezirk</strong> oder <strong>Krippe in Budapest</strong> sucht, ist bei Kincsek richtig.',
    'card-art-title':       'Bildende Kunst',
    'card-art-desc':        'Fingermalerei, Tonmodellieren, Collagen und nat\u00fcrliche Materialien. Bei uns z\u00e4hlt der Prozess des Gestaltens und die Freude am Entdecken.',
    'card-music-title':     'Musik & Bewegung',
    'card-music-desc':      'Volkslieder, Reime, Schossspiele und Rhythmusinstrumente. Musik f\u00f6rdert die Sprache, Bewegung Koordination und Gleichgewicht.',
    'card-groups-title':    'Famili\u00e4re Atmosph\u00e4re',
    'card-groups-desc':     'Wir arbeiten in kleinen Gruppen von maximal 7–8 Kindern, damit jedes Kind individuelle Aufmerksamkeit, Liebe und F\u00fcrsorge erh\u00e4lt.',
    'card-safety-title':    'Emotionale Sicherheit',
    'card-safety-desc':     'Enge Zusammenarbeit mit den Eltern, sanftes Eingew\u00f6hnen und eine verl\u00e4ssliche, emotional stabile und unterst\u00fctzende Umgebung den ganzen Tag.',
    'about-why-title':      'Warum Kincsek Kunstkrippe?',
    'about-why-p1':         'Bei der Gestaltung unserer Krippe in der T\u0171zolt\u00f3 utca 68. haben wir darauf geachtet, dass sich die Kleinen wie zuhause f\u00fchlen. Unsere freundlichen R\u00e4ume sind voller inspirierender Naturspielzeuge und Kunstmaterialien.',
    'about-why-p2':         'Unsere p\u00e4dagogischen Fachkr\u00e4fte begleiten die individuelle Entwicklung jedes Kindes mit gro\u00dfer Erfahrung und unendlicher Geduld. Der Name <strong>Kincsek</strong> steht f\u00fcr erstklassige F\u00fcrsorge.',
    'about-feat-1':         'Kunstzentrierte individuelle F\u00f6rderung',
    'about-feat-2':         'Gesunde, zertifizierte Bio-Mahlzeiten viermal t\u00e4glich',
    'about-feat-3':         'Eigene, sichere Spielecke',
    'about-feat-4':         'Verbindung zu den Familienprogrammen des Kincsek Klubs',
    /* Schedule */
    'section-schedule-title': 'Unser Familienkrippen-Tagesablauf (9. Bezirk)',
    'section-schedule-desc':  'Ein vorhersehbarer Tagesrhythmus gibt Kleinkindern Sicherheit. Wir passen unsere Aktivit\u00e4ten flexibel an die aktuellen Bed\u00fcrfnisse der Kinder an.',
    'tl-1-title': 'Ankunft & Freispiel',
    'tl-1-desc':  'Die Kinder kommen nach und nach an; zwanglose Gespr\u00e4che mit den Eltern. Ruhiges, freies Spielen im Zimmer.',
    'tl-2-title': 'Gemeinsames gesundes Fr\u00fchst\u00fcck',
    'tl-2-desc':  'N\u00e4hrstoffreiches Fr\u00fchst\u00fcck mit Gem\u00fcse, Backwaren und Fr\u00fcchtetee. H\u00e4nde waschen, K\u00f6rperpflege.',
    'tl-3-title': 'Kunst- & Musikaktivit\u00e4t',
    'tl-3-desc':  'Angeleitete bildnerische T\u00e4tigkeiten (Malen, Ton, Kleben) oder gemeinsame Musik, Rhythmusspiele, Turnen und Vorlesen.',
    'tl-4-title': 'Freispiel im Freien / Spaziergang',
    'tl-4-desc':  'Bei gutem Wetter spielen wir in unserem sicheren Garten, im Sandkasten, fahren Laufrad oder spazieren im nahen Park.',
    'tl-5-title': 'Vorbereitung & Mittagessen',
    'tl-5-desc':  'H\u00e4nde waschen, F\u00f6rderung der Selbstst\u00e4ndigkeit beim Essen. Ein gesundes warmes Zweigangmittagessen.',
    'tl-6-title': 'Vorlesezeit & Mittagsruhe',
    'tl-6-desc':  'Die Kinder ruhen und schlafen mit ihrem pers\u00f6nlichen Kuscheltier, sanfter Musik und leisem Vorlesen.',
    'tl-7-title': 'Vesper & Nachmittagsspiel',
    'tl-7-desc':  'Vesper nach dem Aufwachen (Obst, Joghurt, Keks), dann spielen bis zur Abholung.',
    /* Contact */
    'section-contact-title': 'Kontakt & Anmeldung – Kincsek Krippe Budapest',
    'section-contact-desc':  'M\u00f6chten Sie unsere Krippe pers\u00f6nlich besichtigen? Senden Sie uns Ihre Anmeldung oder Frage und wir melden uns innerhalb von 24 Stunden bei Ihnen!',
    'contact-address-label': 'Unsere Adresse',
    'contact-address-sub':   '(9. Bezirk / Ferencv\u00e1ros, gut erreichbar)',
    'contact-phone-label':   'Telefon',
    'contact-hours':         'Montag bis Freitag: 08:00 – 17:00',
    'contact-email-label':   'E-Mail-Adresse',
    /* Form */
    'form-title':          'Anmeldeformular',
    'form-label-parent':   'Vollst\u00e4ndiger Name des Elternteils *',
    'form-ph-parent':      'z.B. Maria M\u00fcller',
    'form-err-parent':     'Bitte geben Sie Ihren Namen ein!',
    'form-label-child':    'Name und Geburtsdatum des Kindes *',
    'form-ph-child':       'z.B. Max M\u00fcller, 2024-05-12',
    'form-err-child':      'Bitte geben Sie Name und Geburtsdatum des Kindes ein!',
    'form-label-email':    'E-Mail-Adresse *',
    'form-ph-email':       'z.B. maria@beispiel.de',
    'form-err-email':      'Bitte geben Sie eine g\u00fcltige E-Mail-Adresse ein!',
    'form-label-phone':    'Telefonnummer *',
    'form-ph-phone':       'z.B. +36 30 123 4567',
    'form-err-phone':      'Bitte geben Sie eine g\u00fcltige Telefonnummer ein!',
    'form-label-msg':      'Nachricht / Frage (optional)',
    'form-ph-msg':         'Haben Sie Fragen zur Eingewöhnungszeit oder besonderen Bedürfnissen...',
    'form-privacy':        'Ich akzeptiere die Datenschutzerkl\u00e4rung und stimme zu, dass die Krippe mich \u00fcber die angegebenen Kontaktdaten erreicht. *',
    'form-submit':         'Anmeldung absenden',
    /* Footer */
    'footer-links-title':   'Links',
    'footer-contact-title': 'Kontakt',
    'footer-address-label': 'Adresse der Krippe',
    'footer-brand-p1':      'Die Kincsek Kunst-Familienpflege bietet liebevolle, kunst- und kindgerechte Tagesbetreuung im Herzen Budapests, in Ferencv\u00e1ros.',
    'footer-brand-p2':      'Lassen Sie uns gemeinsam eine gl\u00fcckliche und kreative Zukunft f\u00fcr Ihr Kind aufbauen!',
    'footer-banner-title':  'Gemeinschaftsleben im Kincsek Klub!',
    'footer-banner-desc':   'Treten Sie unserem Elternklub, unseren Familienwochenenden und Kunstworkshops bei.',
    'footer-banner-btn':    'Entdecke unsere Gemeinschaftsprogramme im Kincsek Klub!',
    'footer-copy':          '\u00a9 2026 Kincsek Kunst-Familienkrippe. Alle Rechte vorbehalten.',
    'footer-privacy':       'Datenschutzerkl\u00e4rung',
    'footer-contact-link':  'Kontakt',
  }
};

/* ================================================
   I18N - Ford\u00edt\u00e1s alkalmaz\u00e1sa
   ================================================ */
function applyTranslation(lang) {
  const t = translations[lang];
  if (!t) return;

  // Egyszer\u0171 textContent csere
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML csere (HTML tageket tartalmaz\u00f3 sz\u00f6vegekhez)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholder csere
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // HTML lang attrib\u00fatum friss\u00edt\u00e9s
  document.documentElement.lang = lang;

  // Nyelv mentes\u00e9se
  localStorage.setItem(LANG_KEY, lang);

  // Lang gombok friss\u00edt\u00e9se
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function initLang() {
  const saved = localStorage.getItem(LANG_KEY) || 'hu';
  applyTranslation(saved);
}

document.addEventListener('DOMContentLoaded', () => {


  // 1. Zsugorodó fejléc görgetésre
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobil Hamburger Menü vezérlése
  const menuToggle = document.getElementById('menu-toggle-btn');
  const navMenu = document.getElementById('nav-menu-list');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Menü bezárása, ha rákattintunk egy linkre
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Menü bezárása, ha a menün kívülre kattintunk
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      closeMenu();
    }
  });

  // 3. Smooth Scroll (Lágy görgetés) belső hivatkozásokhoz
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // Zárjuk be a mobilmenüt, ha nyitva volt
        closeMenu();

        const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Kapcsolatfelvételi űrlap validáció és AJAX Formspree beküldés
  const form = document.getElementById('nursery-contact-form');
  const statusBox = document.getElementById('form-status-box');
  const submitBtn = document.getElementById('form-submit-btn');

  // Input mezők és hozzájuk tartozó hibaüzenetek
  const fields = [
    { id: 'parent-name', errorId: 'parent-name-error' },
    { id: 'child-name', errorId: 'child-name-error' },
    { id: 'email', errorId: 'email-error' },
    { id: 'phone', errorId: 'phone-error' }
  ];

  // Egyedi valós idejű validáció
  const validateField = (input, errorEl) => {
    let isValid = true;
    
    if (input.type === 'email') {
      // Egyszerű email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(input.value.trim());
    } else if (input.type === 'tel') {
      // Telefonszám regex
      const phoneRegex = /^\+?[0-9\s\-]{9,15}$/;
      isValid = phoneRegex.test(input.value.trim());
    } else {
      // Általános kötelező mező ellenőrzés
      isValid = input.value.trim() !== '';
    }

    if (isValid) {
      input.classList.remove('user-invalid');
      errorEl.style.display = 'none';
      return true;
    } else {
      input.classList.add('user-invalid');
      errorEl.style.display = 'block';
      return false;
    }
  };

  // Eseménykezelők az interaktív validációhoz
  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const errorEl = document.getElementById(field.errorId);
    
    input.addEventListener('blur', () => validateField(input, errorEl));
    input.addEventListener('input', () => {
      if (input.classList.contains('user-invalid')) {
        validateField(input, errorEl);
      }
    });
  });

  // Form elküldése
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    let isFormValid = true;
    
    // Minden mező ellenőrzése
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorEl = document.getElementById(field.errorId);
      const isFieldValid = validateField(input, errorEl);
      if (!isFieldValid) isFormValid = false;
    });

    // Adatvédelmi nyilatkozat ellenőrzése
    const privacyCheck = document.getElementById('privacy-check');
    if (!privacyCheck.checked) {
      isFormValid = false;
      privacyCheck.nextElementSibling.style.color = '#E63946';
    } else {
      privacyCheck.nextElementSibling.style.color = '';
    }

    if (!isFormValid) {
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>Kérjük, tölts ki minden kötelező mezőt helyesen és fogadd el az adatvédelmi tájékoztatót!</span>
      `;
      statusBox.style.display = 'flex';
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    // Küldés folyamatban állapot
    submitBtn.disabled = true;
    const origBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <span>Küldés folyamatban...</span>
      <svg class="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-dasharray="30 30"></circle>
      </svg>
    `;
    
    // Spinner stílus hozzáadása dinamikusan
    if (!document.getElementById('spinner-style')) {
      const style = document.createElement('style');
      style.id = 'spinner-style';
      style.innerHTML = '@keyframes spin { 100% { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }

    statusBox.style.display = 'none';

    try {
      // Formspree API beküldés
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          szulo_neve: document.getElementById('parent-name').value,
          gyermek_adatai: document.getElementById('child-name').value,
          email: document.getElementById('email').value,
          telefon: document.getElementById('phone').value,
          uzenet: document.getElementById('message').value
        })
      });

      if (response.ok) {
        // Sikeres beküldés
        statusBox.className = 'form-status success';
        statusBox.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Köszönjük! Jelentkezésedet sikeresen továbbítottuk. Hamarosan felvesszük veled a kapcsolatot a megadott elérhetőségeken!</span>
        `;
        statusBox.style.display = 'flex';
        form.reset();
        privacyCheck.checked = false;
      } else {
        throw new Error('Formspree error response');
      }
    } catch (error) {
      // Hiba a beküldés során
      statusBox.className = 'form-status error';
      statusBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
        <span>Sajnáljuk, hiba történt a küldés során. Kérjük, próbáld meg újra, vagy lépj kapcsolatba velünk közvetlenül a <a href="mailto:kincsek9@gmail.com">kincsek9@gmail.com</a> címen!</span>
      `;
      statusBox.style.display = 'flex';
    } finally {
      // Gomb visszaállítása
      submitBtn.disabled = false;
      submitBtn.innerHTML = origBtnText;
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  // 5. Görgetési animációk fallback (IntersectionObserver régebbi böngészőkhöz és Firefox-hoz)
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    // Elemek kiválasztása, amik animálódni fognak
    const revealTargets = [
      ...document.querySelectorAll('.concept-card'),
      ...document.querySelectorAll('.about-text'),
      ...document.querySelectorAll('.about-image'),
      ...document.querySelectorAll('.timeline-item'),
      ...document.querySelectorAll('.contact-info-card'),
      ...document.querySelectorAll('.contact-form-container')
    ];

    // Osztályok rárakása a kezdeti rejtéshez
    revealTargets.forEach(target => {
      target.classList.add('js-reveal', 'js-reveal-hidden');
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('js-reveal-hidden');
          entry.target.classList.add('js-reveal-visible');
          // Ha már megjelent, nem kell tovább figyelni
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealTargets.forEach(target => {
      revealObserver.observe(target);
    });
  }

  // 6. Témaváltó gomb
  initTheme();
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // 7. Nyelvváltó gombok
  initLang();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTranslation(btn.dataset.lang);
    });
  });
});
