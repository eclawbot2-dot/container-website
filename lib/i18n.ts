export type Lang = 'en' | 'ar';

export type Dict = {
  dir: 'ltr' | 'rtl';
  nav: { about: string; lineup: string; visit: string; tickets: string };
  navLabel: string;
  menu: string;
  langToggle: { label: string; switchTo: string };
  hero: {
    kicker: string;
    title: string;
    tagline: string;
    cta: string;
    instagram: string;
    instagramSoon: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    stats: { value: string; label: string }[];
  };
  lineup: {
    eyebrow: string;
    title: string;
    subtitle: string;
    detailsCta: string;
    ticketsCta: string;
    ticketsSoon: string;
    tba: string;
    note: string;
  };
  event: {
    backToEvents: string;
    backHome: string;
    whenTitle: string;
    whereTitle: string;
    genreTitle: string;
    aboutTitle: string;
    doorsLabel: string;
    lineupNote: string;
    ticketsTitle: string;
    ticketsSoon: string;
    mapCta: string;
    metaTitle: (artist: string) => string;
    metaDesc: (artist: string, date: string) => string;
  };
  visit: {
    eyebrow: string;
    title: string;
    addressTitle: string;
    address: string;
    gettingThereTitle: string;
    gettingThere: string;
    hoursTitle: string;
    hours: string;
    mapCta: string;
    mapTitle: string;
    entryTitle: string;
    entry: string;
  };
  footer: {
    tagline: string;
    follow: string;
    contact: string;
    rights: string;
    eventsNote: string;
    instagramSoon: string;
    contactSoon: string;
  };
  months: string[];
  weekdays: string[];
};

// Per-event factual bios, bilingual. Keyed by EventItem.id.
// Kept deliberately short and factual — do not embellish.
export const eventBios: Record<string, Record<Lang, string>> = {
  'anja-schneider': {
    en: 'Berlin-based DJ, producer and broadcaster — a long-standing figure in international house and techno, and founder of the SOUS Music label.',
    ar: 'منسّقة أغانٍ ومنتجة ومذيعة مقيمة في برلين — شخصية راسخة في موسيقى الهاوس والتكنو العالمية، ومؤسِّسة لِيبل SOUS Music.',
  },
  cassy: {
    en: 'Austrian-Greek DJ and producer celebrated for deep, hypnotic house and techno and long, immersive sets; founder of Kwench Records.',
    ar: 'منسّقة أغانٍ ومنتجة نمساوية يونانية معروفة بموسيقى الهاوس والتكنو العميقة المنوّمة وبجلساتها الطويلة الغامرة؛ مؤسِّسة Kwench Records.',
  },
};

export const dict: Record<Lang, Dict> = {
  en: {
    dir: 'ltr',
    nav: { about: 'About', lineup: 'Events', visit: 'Visit', tickets: 'Tickets' },
    navLabel: 'Primary',
    menu: 'Menu',
    langToggle: { label: 'العربية', switchTo: 'Switch to Arabic' },
    hero: {
      kicker: 'Jeddah · Red Sea Port',
      title: 'THE CONTAINER',
      tagline:
        'Raw, industrial electronic music on the Red Sea. Steel, concrete, water and sound — where shipping containers become a stage from sunset to late.',
      cta: 'See the lineup',
      instagram: 'Follow on Instagram',
      instagramSoon: 'Instagram — coming soon',
    },
    about: {
      eyebrow: 'The Venue',
      title: 'A working port, repurposed for sound.',
      body: [
        'The Container lives inside Shams Container Terminal — a working shipping-container terminal on the Jeddah waterfront, reborn as a venue for techno and house. Towering stacks of steel, raw concrete and the open Red Sea set the stage for international and regional artists.',
        'It is industrial by nature: open-air and warehouse spaces, port lighting, and a sound system built for the long arc from golden-hour sunset to the small hours. No gloss, no pretense — just powerful music in a space that was never meant to be pretty, and is all the more striking for it.',
      ],
      stats: [
        { value: 'Red Sea', label: 'Waterfront port setting' },
        { value: 'Techno · House', label: 'International & regional DJs' },
        { value: 'Sunset → Late', label: 'Open-air & warehouse floors' },
      ],
    },
    lineup: {
      eyebrow: 'Upcoming',
      title: 'Events & Lineup',
      subtitle: 'World-class techno and house, on the edge of the Red Sea.',
      detailsCta: 'Event details',
      ticketsCta: 'Tickets & info',
      ticketsSoon: 'Tickets — coming soon',
      tba: 'More to be announced',
      note: 'Lineup and dates are subject to change. Ticketing details will be announced here ahead of each event.',
    },
    event: {
      backToEvents: 'All events',
      backHome: 'Back to home',
      whenTitle: 'When',
      whereTitle: 'Where',
      genreTitle: 'Sound',
      aboutTitle: 'About the artist',
      doorsLabel: 'Doors / start',
      lineupNote: 'Lineup subject to change.',
      ticketsTitle: 'Tickets',
      ticketsSoon: 'Tickets — coming soon',
      mapCta: 'Open in Maps',
      metaTitle: (artist) => `${artist} at The Container`,
      metaDesc: (artist, date) =>
        `${artist} live at The Container, Shams Container Terminal, Jeddah — ${date}. Industrial house & techno on the Red Sea port.`,
    },
    visit: {
      eyebrow: 'Plan your night',
      title: 'Visit',
      addressTitle: 'Location',
      address:
        'The Container — Shams Container Terminal, Al Moulysaa district, Jeddah port area, Red Sea coast, Saudi Arabia.',
      gettingThereTitle: 'Getting there',
      gettingThere:
        'The venue sits inside the industrial port zone on the waterfront. We recommend arriving by car or ride-hailing; on-site directions and the entry gate are shared with each event announcement.',
      hoursTitle: 'Timing',
      hours:
        'Doors and set times are published per event. Sets typically run from late afternoon through the night.',
      mapCta: 'Open in Maps',
      mapTitle: 'Map showing The Container venue in the Jeddah port area on the Red Sea coast',
      entryTitle: 'Entry',
      entry:
        'The Container hosts licensed live electronic-music events. Entry is for ticket-holders; please bring valid ID. Event-specific entry details are confirmed at announcement.',
    },
    footer: {
      tagline: "Jeddah's industrial techno & house venue on the Red Sea port.",
      follow: 'Follow',
      contact: 'Contact',
      rights: 'All rights reserved.',
      eventsNote: 'Live electronic music events · Jeddah, Saudi Arabia',
      instagramSoon: 'Instagram — coming soon',
      contactSoon: 'Contact details — coming soon',
    },
    months: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  ar: {
    dir: 'rtl',
    nav: { about: 'عن المكان', lineup: 'الفعاليات', visit: 'الزيارة', tickets: 'التذاكر' },
    navLabel: 'التنقّل الرئيسي',
    menu: 'القائمة',
    langToggle: { label: 'English', switchTo: 'التبديل إلى الإنجليزية' },
    hero: {
      kicker: 'جدة · ميناء البحر الأحمر',
      title: 'ذا كونتينر',
      tagline:
        'موسيقى إلكترونية صناعية خام على ساحل البحر الأحمر. فولاذ وخرسانة وماء وصوت — حيث تتحوّل حاويات الشحن إلى مسرح من غروب الشمس حتى وقت متأخر من الليل.',
      cta: 'استعرض الفعاليات',
      instagram: 'تابعنا على إنستغرام',
      instagramSoon: 'إنستغرام — قريبًا',
    },
    about: {
      eyebrow: 'المكان',
      title: 'ميناء عامل، أُعيد تصميمه من أجل الصوت.',
      body: [
        'يقع ذا كونتينر داخل محطة شمس للحاويات — محطة حاويات شحن عاملة على واجهة جدة البحرية، أُعيد إحياؤها كمكان لموسيقى التكنو والهاوس. أكوام شاهقة من الفولاذ، وخرسانة خام، والبحر الأحمر المفتوح، تشكّل خلفية لعروض فنانين عالميين وإقليميين.',
        'إنه مكان صناعي بطبعه: مساحات مفتوحة وأخرى مغلقة على طراز المستودعات، وإضاءة الميناء، ونظام صوت مصمَّم للامتداد الطويل من غروب الشمس الذهبي حتى ساعات الفجر الأولى. لا تنميق ولا تكلّف — مجرد موسيقى قوية في مساحة لم تُصمَّم يومًا لتكون جميلة، وهي بذلك أكثر تأثيرًا.',
      ],
      stats: [
        { value: 'البحر الأحمر', label: 'موقع على واجهة الميناء البحرية' },
        { value: 'تكنو · هاوس', label: 'منسّقو أغانٍ عالميون وإقليميون' },
        { value: 'الغروب ← وقت متأخر', label: 'مساحات مفتوحة ومستودعات' },
      ],
    },
    lineup: {
      eyebrow: 'القادم',
      title: 'الفعاليات والعروض',
      subtitle: 'تكنو وهاوس على أعلى مستوى، على حافة البحر الأحمر.',
      detailsCta: 'تفاصيل الفعالية',
      ticketsCta: 'التذاكر والمعلومات',
      ticketsSoon: 'التذاكر — قريبًا',
      tba: 'سيُعلن عن المزيد',
      note: 'العروض والتواريخ قابلة للتغيير. سيُعلَن عن تفاصيل التذاكر هنا قبل كل فعالية.',
    },
    event: {
      backToEvents: 'كل الفعاليات',
      backHome: 'العودة إلى الرئيسية',
      whenTitle: 'الموعد',
      whereTitle: 'المكان',
      genreTitle: 'الأسلوب',
      aboutTitle: 'عن الفنان',
      doorsLabel: 'الأبواب / البداية',
      lineupNote: 'العروض قابلة للتغيير.',
      ticketsTitle: 'التذاكر',
      ticketsSoon: 'التذاكر — قريبًا',
      mapCta: 'افتح في الخرائط',
      metaTitle: (artist) => `${artist} في ذا كونتينر`,
      metaDesc: (artist, date) =>
        `${artist} مباشرةً في ذا كونتينر، محطة شمس للحاويات، جدة — ${date}. هاوس وتكنو صناعي على ميناء البحر الأحمر.`,
    },
    visit: {
      eyebrow: 'خطّط لليلتك',
      title: 'الزيارة',
      addressTitle: 'الموقع',
      address:
        'محطة شمس للحاويات، حي المُليساء، منطقة ميناء جدة، ساحل البحر الأحمر، المملكة العربية السعودية.',
      gettingThereTitle: 'كيفية الوصول',
      gettingThere:
        'يقع المكان داخل منطقة الميناء الصناعية على الواجهة البحرية. نوصي بالوصول بالسيارة أو خدمات النقل التشاركي؛ تُشارَك إرشادات الوصول وبوابة الدخول مع كل إعلان فعالية.',
      hoursTitle: 'المواعيد',
      hours:
        'تُنشَر مواعيد الأبواب والعروض لكل فعالية. عادةً ما تمتد العروض من بعد الظهر حتى الليل.',
      mapCta: 'افتح في الخرائط',
      mapTitle: 'خريطة توضّح موقع ذا كونتينر في منطقة ميناء جدة على ساحل البحر الأحمر',
      entryTitle: 'الدخول',
      entry:
        'يستضيف ذا كونتينر فعاليات موسيقى إلكترونية حيّة مرخّصة. الدخول لحاملي التذاكر؛ يُرجى إحضار هوية سارية. تُؤكَّد تفاصيل الدخول الخاصة بكل فعالية عند الإعلان عنها.',
    },
    footer: {
      tagline: 'وجهة جدة لموسيقى التكنو والهاوس الصناعية على ميناء البحر الأحمر.',
      follow: 'تابعنا',
      contact: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      eventsNote: 'فعاليات موسيقى إلكترونية حيّة · جدة، المملكة العربية السعودية',
      instagramSoon: 'إنستغرام — قريبًا',
      contactSoon: 'تفاصيل التواصل — قريبًا',
    },
    months: [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
    ],
    weekdays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  },
};

export function formatEventDate(iso: string, lang: Lang): string {
  const d = new Date(iso + 'T00:00:00');
  const t = dict[lang];
  const wd = t.weekdays[d.getDay()];
  const day = d.getDate();
  const month = t.months[d.getMonth()];
  const year = d.getFullYear();
  // Use Western digits for both; readable in EN and AR
  return lang === 'ar'
    ? `${wd} · ${day} ${month} ${year}`
    : `${wd} · ${day} ${month} ${year}`;
}

// "23:00" (24h, Jeddah local) → a readable label in the active language.
export function formatEventTime(time: string, lang: Lang): string {
  const [hStr, mStr] = time.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr ?? '0', 10);
  const hh = ((h + 11) % 12) + 1; // 0→12, 13→1, 23→11
  const ampm = h < 12 ? 'AM' : 'PM';
  const mm = m === 0 ? '' : `:${mStr}`;
  if (lang === 'ar') {
    const period = h < 12 ? 'صباحًا' : 'مساءً';
    return `الساعة ${hh}${mm} ${period} (${time})`;
  }
  return `${hh}${mm} ${ampm} (${time})`;
}
