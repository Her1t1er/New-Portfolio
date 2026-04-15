import { useEffect, useState } from "react";
import { 
  Instagram, 
  Twitter, 
  Github, 
  Send, 
  Code2, 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MessageSquare, 
  User, 
  Type,
  ExternalLink,
  MapPin
} from "lucide-react";
import cvPdf from "../CV.pdf";
import photo2 from "../photos/IMG_0876.JPG";
import photo3 from "../photos/IMG_1621.jpg";
import photo4 from "../photos/IMG_2778.JPEG";
import youthguard from "../photos/youthguard.png";
import bulb from "../photos/bulb.png";

const content = {
  en: {
    nav: [
      { id: "overview", label: "About" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "gallery", label: "Gallery" },
      { id: "credentials", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    pdfCta: "Open CV",
    heroKicker: "Computer and Software Engineering Student",
    heroTitle: "Heritier\nNDAYISHIMIYE\nIRAKOZE",
    heroText:
      "Motivated and detail-oriented developer with a strong academic foundation in mathematics, physics, and computer science. Focused on web design, UI design, and web development, with a clear interest in building practical digital products that are clean, usable, and modern.",
    primaryCta: "Get in Touch",
    secondaryCta: "View PDF",
    locationLine: "Kigali, Rwanda",
    scrollLabel: "Scroll",
    stats: [
      { value: "2024", title: "University Journey", detail: "Started BSc studies in Computer and Software Engineering" },
      { value: "2+", title: "Certifications", detail: "Web design and IoT learning milestones" },
      { value: "4", title: "Languages", detail: "Kinyarwanda, English, swahili and French" },
    ],
    aboutEyebrow: "about me",
    aboutTitle: "Builder. Learner. Future Engineer.",
    aboutBody:
      "I am a Computer and Software Engineering student with interest in frontend development, user interface design, and practical software solutions. I enjoy combining structure, visual clarity, and problem solving to build products people can actually use.",
    focusTags: ["Web Design", "Web Development", "UI Design", "Problem Solving"],
    educationEyebrow: "education",
    educationTitle: "Academic Path",
    educationLead: "From strong secondary-school science foundations to software engineering studies at university.",
    education: [
      {
        title: "BSc. in Computer and Software Engineering",
        place: "University of Rwanda",
        period: "Sept 2024 - Expected in 2028",
        bullets: [
          "Developing core foundations in software engineering and computing.",
          "Building long-term direction toward modern web and software products.",
        ],
      },
      {
        title: "High School Diploma (A2) in Maths-Physics-Computer Science",
        place: "College Saint Andre",
        period: "August 2023",
        bullets: [
          "Completed a science-focused track grounded in mathematics and physics.",
          "Built early confidence in computing and analytical thinking.",
        ],
      },
    ],
    skillsEyebrow: "skills",
    skillsTitle: "What I Know",
    skillGroups: [
      {
        title: "Professional Skills",
        items: ["Critical Thinking", "Communication Skills", "Problem Solving", "Negotiation"],
      },
      {
        title: "Technical Skills",
        items: ["Web Design", "Web Development", "UI Design", "Backend Development", "IoT and Embedded Systems"],
      },
    ],
    projectsEyebrow: "projects",
    projectsTitle: "Recent Work",
    projects: [
      {
        title: "YouthGuard",
        category: "Featured Project",
        description: "A platform designed to help people locate available contraceptives easily and safely. By providing clear information on where to find specific products, the system saves time and reduces the stigma associated with seeking reproductive health resources, ultimately promoting safer choices and preventing STIs and unwanted pregnancies.",
        tags: ["Web App", "Healthcare", "Social Impact"],
        image: youthguard,
        color: "from-blue-600/20 to-cyan-400/20"
      },
      {
        title: "Smart_buld",
        category: "Personal Project",
        description: "An IoT project that allows users to remotely switch house lights and monitor their status online via a smartphone. It provides convenience and energy management through a modern, connected interface.",
        tags: ["IoT", "Mobile Control", "Home Automation"],
        image: bulb,
        color: "from-orange-500/20 to-yellow-400/20"
      }
    ],
    galleryEyebrow: "gallery",
    galleryTitle: "Moments & Memories",
    galleryImages: [
      { src: photo2, alt: "Heritier Portrait 2" },
      { src: photo3, alt: "Heritier Portrait 3" },
      { src: photo4, alt: "Heritier Portrait 4" },
    ],
    credentialsEyebrow: "credentials",
    credentialsTitle: "Certifications and Languages",
    certifications: [
      { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "October 2024" },
      { title: "IoT and Embedded Systems", issuer: "Independent Certification", date: "June 2025" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Kinyarwanda", level: "Native" },
      { name: "English", level: "Proficiency" },
      { name: "French", level: "Basic" },
      { name: "Swahili", level: "Moderate" },
    ],
    interestsEyebrow: "interests",
    interestsTitle: "What Interests Me",
    interests: [
      "Advanced Web Development",
      "IoT and Embedded Systems",
      "Artificial Intelligence",
      "Mobile Development",
    ],
    contactEyebrow: "contact",
    contactTitle: "Available for learning, collaboration, and growth opportunities.",
    contactText:
      "This website presents the CV in a more personal and accessible format, while the original PDF remains available for direct sharing.",
    formName: "Full Name",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send Message",
    socialsTitle: "Connect With Me",
    copyEmail: "Copy Email",
    sendEmail: "Send Email",
    copied: "Email copied to clipboard.",
    langLabel: "Language",
    langEn: "EN",
    langRw: "RW",
    footerBlurb: "Personal profile and CV website built with React and Tailwind CSS.",
    rights: "All rights reserved.",
  },
  rw: {
    nav: [
      { id: "overview", label: "Incamake" },
      { id: "education", label: "Amashuri" },
      { id: "skills", label: "Ubumenyi" },
      { id: "projects", label: "Imishinga" },
      { id: "gallery", label: "Amafoto" },
      { id: "credentials", label: "Impamyabushobozi" },
      { id: "contact", label: "Twandikire" },
    ],
    pdfCta: "Fungura CV",
    heroKicker: "Umunyeshuri wa Computer and Software Engineering",
    heroTitle: "Heritier\nNDAYISHIMIYE\nIRAKOZE",
    heroText:
      "Ni umunyeshuri ufite umuhate kandi witonda mu kazi, ufite ubumenyi bw'ibanze bukomeye muri imibare, fiziki na mudasobwa. Yibanda kuri web design, UI design na web development, kandi ashishikajwe no gukora ibisubizo by'ikoranabuhanga byoroshye gukoresha kandi bigezweho.",
    primaryCta: "Vugana Nanjye",
    secondaryCta: "Reba PDF",
    locationLine: "Kigali, Rwanda",
    scrollLabel: "Komeza Hasi",
    stats: [
      { value: "2024", title: "Urugendo rwa Kaminuza", detail: "Yatangiye amasomo ya Computer and Software Engineering" },
      { value: "2+", title: "Impamyabushobozi", detail: "Intambwe mu kwiga web design na IoT" },
      { value: "4", title: "Indimi", detail: "Ikinyarwanda, Icyongereza, Igiswahili n'Igifaransa" },
    ],
    aboutEyebrow: "ibyanjye",
    aboutTitle: "Umwubatsi. Umwigira. Injeniyeri uri gukura.",
    aboutBody:
      "Ndi umunyeshuri wa Computer and Software Engineering ufite ubushake mu gukora frontend, UI design, n'ibisubizo bya software bifatika. Nkunda guhuza imiterere myiza, ubwiza bw'igaragara, no gukemura ibibazo kugira ngo hubakwe ibicuruzwa bifitiye abantu akamaro.",
    focusTags: ["Web Design", "Web Development", "UI Design", "Gukemura Ibibazo"],
    educationEyebrow: "amashuri",
    educationTitle: "Urugendo rw'Amashuri",
    educationLead: "Kuva ku musingi ukomeye w'amasomo ya siyansi mu mashuri yisumbuye kugera kuri software engineering muri kaminuza.",
    education: [
      {
        title: "Impamyabumenyi ya mbere muri Computer and Software Engineering",
        place: "University of Rwanda",
        period: "Nzeri 2024 - Azarangiza mu 2028",
        bullets: [
          "Ari gukomeza kubaka ubumenyi bw'ibanze muri software engineering na computing.",
          "Ari kwitegura kubaka ibisubizo bya web na software bigezweho.",
        ],
      },
      {
        title: "Diplome y'Amashuri yisumbuye (A2) mu Mibare-Fiziki-Mudasobwa",
        place: "College Saint Andre",
        period: "Kanama 2023",
        bullets: [
          "Yarangije amasomo ya siyansi yubakiye ku mibare na fiziki.",
          "Yahakuye icyizere cya mbere mu ikoranabuhanga no gutekereza gusesengura.",
        ],
      },
    ],
    skillsEyebrow: "ubumenyi",
    skillsTitle: "Ibyo Nzi",
    skillGroups: [
      {
        title: "Ubumenyi bwo mu mwuga",
        items: ["Gutekereza Byimbitse", "Ubushobozi bwo Gutumanaho", "Gukemura Ibibazo", "Kuganira no Kumvikanisha"],
      },
      {
        title: "Ubumenyi bwa Tekiniki",
        items: ["Web Design", "Web Development", "UI Design", "Backend Development", "IoT and Embedded Systems"],
      },
    ],
    projectsEyebrow: "imishinga",
    projectsTitle: "Ibyo nakoze vuba",
    projects: [
      {
        title: "YouthGuard",
        category: "Umushinga wa mbere",
        description: "Urubuga rufasha abantu kumenya aho bakura uburyo bwo kuboneza urubyaro mu buryo bworoshye kandi bwizewe. Mugutanga amakuru asobanutse, ubu buryo bugabanya igihe n'isoni zo kubaza, bikarinda indwara n'inda zitateganyijwe.",
        tags: ["Web App", "Ubuzima", "Imibereho Myiza"],
        image: youthguard,
        color: "from-blue-600/20 to-cyan-400/20"
      },
      {
        title: "Smart_buld",
        category: "Umushinga bwite",
        description: "Umushinga wa IoT ufasha abantu gukoresha amatara yo mu rugo bifashishije terefone binyuze kuri interineti. Bituma gukoresha ingufu biba byiza kandi byoroshye.",
        tags: ["IoT", "Terefone", "Urugo Rugezweho"],
        image: bulb,
        color: "from-orange-500/20 to-yellow-400/20"
      }
    ],
    galleryEyebrow: "amafoto",
    galleryTitle: "Ibihe n'Urwibutso",
    galleryImages: [
      { src: photo2, alt: "Heritier Portrait 2" },
      { src: photo3, alt: "Heritier Portrait 3" },
      { src: photo4, alt: "Heritier Portrait 4" },
    ],
    credentialsEyebrow: "impamyabushobozi",
    credentialsTitle: "Impamyabushobozi n'Indimi",
    certifications: [
      { title: "Responsive Web Design", issuer: "freeCodeCamp", date: "Ukwakira 2024" },
      { title: "IoT and Embedded Systems", issuer: "Independent Certification", date: "Kamena 2025" },
    ],
    languagesTitle: "Indimi",
    languages: [
      { name: "Ikinyarwanda", level: "Ururimi kavukire" },
      { name: "Icyongereza", level: "Avuga neza" },
      { name: "Igifaransa", level: "Shingiro" },
      { name: "Igiswahili", level: "Aracyivuga akanacyumva" },
    ],
    interestsEyebrow: "ibyo nkunda",
    interestsTitle: "Ibintu Binsunikira",
    interests: [
      "Advanced Web Development",
      "IoT and Embedded Systems",
      "Artificial Intelligence",
      "Mobile Development",
    ],
    contactEyebrow: "twandikire",
    contactTitle: "Yiteguye amahirwe yo kwiga, gukorana n'abandi no gukura mu mwuga.",
    contactText:
      "Uru rubuga rwerekana CV mu buryo busomeka kandi bw'umwihariko, mu gihe PDF y'umwimerere igikomeza kuboneka kugira ngo isangizwe byoroshye.",
    formName: "Izina Ryuzuye",
    formSubject: "Intego",
    formMessage: "Ubutumwa",
    formSend: "Ohereza Ubutumwa",
    socialsTitle: "Twandikire hano",
    copyEmail: "Koporora Email",
    sendEmail: "Ohereza Email",
    copied: "Email yakoporowe.",
    langLabel: "Ururimi",
    langEn: "EN",
    langRw: "RW",
    footerBlurb: "Urubuga rw'umwirondoro na CV rwubakishijwe React na Tailwind CSS.",
    rights: "Uburenganzira bwose bwihariwe.",
  },
};

const socials = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/heritier._", handle: "@heritier._" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/ik1nege", handle: "@ik1nege" },
  { name: "GitHub", icon: Github, url: "https://github.com/Her1t1er", handle: "Her1t1er" },
  { name: "Telegram", icon: Send, url: "https://t.me/her1tier", handle: "@her1tier" },
  { name: "LeetCode", icon: Code2, url: "https://leetcode.com/u/heritier_/", handle: "heritier_" },
];

function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copied, setCopied] = useState(false);
  const [locale, setLocale] = useState(() => localStorage.getItem("cv-locale") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("cv-theme") || "dark");
  const [visits, setVisits] = useState(null);
  const t = content[locale];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0.1 }
    );

    content.en.nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    localStorage.setItem("cv-locale", locale);
    document.documentElement.lang = locale === "rw" ? "rw" : "en";
  }, [locale]);

  useEffect(() => {
    localStorage.setItem("cv-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    let cancelled = false;

    const loadVisits = async () => {
      try {
        const response = await fetch(
          "https://api.counterapi.dev/v1/heritier-irakoze-portfolio/visits/up"
        );
        const data = await response.json();
        if (!cancelled && typeof data.count === "number") {
          setVisits(data.count);
        }
      } catch {
        if (!cancelled) {
          setVisits(null);
        }
      }
    };

    loadVisits();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ndirakozeheritier@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    const mailtoUrl = `mailto:ndirakozeheritier@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_48%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_24%),linear-gradient(180deg,#081120_0%,#0b1424_48%,#081120_100%)]" />
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-[0.03] dark:opacity-30" />
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] items-center justify-between gap-4 py-4">
          <a href="#overview" className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Heritier Irakoze
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition ${
                  activeSection === section.id ? "text-blue-600 dark:text-cyan-300" : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:bg-white/10"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 dark:border-white/10 dark:bg-white/5">
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  locale === "en" ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950" : "text-slate-500 dark:text-slate-300"
                }`}
              >
                {t.langEn}
              </button>
              <button
                type="button"
                onClick={() => setLocale("rw")}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  locale === "rw" ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950" : "text-slate-500 dark:text-slate-300"
                }`}
              >
                {t.langRw}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <section id="overview" className="grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-cyan-300">{t.heroKicker}</p>
            <h1 className="mt-5 whitespace-pre-line text-5xl font-extrabold leading-[0.9] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-8xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t.heroText}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 dark:bg-gradient-to-r dark:from-accent dark:to-cyan-400 dark:hover:opacity-90"
              >
                {t.primaryCta}
              </a>
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50 dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/5"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2"><MapPin size={14} /> {t.locationLine}</span>
              <span>{t.scrollLabel}</span>
            </div>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <div className="relative flex h-[320px] w-[260px] items-end overflow-hidden rounded-[38px] border border-slate-200 bg-white p-7 shadow-xl dark:border-cyan-400/15 dark:bg-slate-950/50 dark:shadow-panel sm:h-[420px] sm:w-[320px]">
              <img 
                src={photo2} 
                alt="Heritier Irakoze" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(255,255,255,0.9))] dark:bg-[linear-gradient(180deg,transparent_60%,rgba(8,17,32,0.9))]" />
              <div className="relative z-10 w-full">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700 dark:text-cyan-200">{t.locationLine}</p>
                <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">HI</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-px overflow-hidden rounded-[34px] border border-slate-200 bg-slate-200 dark:border-white/10 dark:bg-white/10 md:grid-cols-3">
          {t.stats.map((stat) => (
            <div key={stat.title} className="bg-white p-7 backdrop-blur dark:bg-white/5">
              <p className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-4 text-lg font-bold text-slate-900 dark:text-slate-100">{stat.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
          <div>
            <p className="max-w-3xl text-lg leading-9 text-slate-600 dark:text-slate-300">{t.aboutBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.focusTags.map((tag) => (
                <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.educationEyebrow} title={t.educationTitle} lead={t.educationLead} />
          <div className="space-y-10">
            {t.education.map((item) => (
              <article key={item.title} className="border-b border-slate-100 pb-10 last:border-b-0 last:pb-0 dark:border-white/10">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-base font-medium text-slate-500 dark:text-slate-400">{item.place}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 font-medium text-slate-600 dark:text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 dark:bg-cyan-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} />
          <div className="grid gap-8 md:grid-cols-2">
            {t.skillGroups.map((group) => (
              <div key={group.title} className="rounded-[30px] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} />
          <div className="grid gap-8 lg:grid-cols-2">
            {t.projects.map((project) => (
              <div key={project.title} className="group relative flex flex-col overflow-hidden rounded-[34px] border border-slate-200 bg-white transition-all hover:border-blue-400 dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400">
                <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${project.color}`}>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  
                  {project.category && (
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur-md dark:bg-slate-900/80 dark:text-white">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.galleryEyebrow} title={t.galleryTitle} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {t.galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[3/4] overflow-hidden rounded-[30px] border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-slate-950/60" />
              </div>
            ))}
          </div>
        </section>

        <section id="credentials" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.credentialsEyebrow} title={t.credentialsTitle} />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[30px] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              <div className="mt-6 space-y-6">
                {t.certifications.map((cert) => (
                  <div key={cert.title} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0 dark:border-white/10">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">{cert.date}</p>
                    <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{cert.title}</h4>
                    <p className="mt-1 font-medium text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[30px] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-white/5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.languagesTitle}</h3>
                <div className="mt-6 space-y-4">
                  {t.languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0 dark:border-white/10">
                      <span className="font-bold text-slate-900 dark:text-white">{language.name}</span>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-blue-100 bg-blue-50/50 p-7 text-slate-900 dark:border-cyan-400/15 dark:bg-slate-950/60 dark:text-white">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">{t.interestsEyebrow}</p>
                <h3 className="mt-3 text-xl font-bold">{t.interestsTitle}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {t.interests.map((interest) => (
                    <span key={interest} className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-100">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-12 border-t border-slate-200 py-24 dark:border-white/10 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} />
          <div className="space-y-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[34px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-slate-900/50">
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                      {t.formName}
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        name="name"
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-cyan-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                      {t.formSubject}
                    </label>
                    <div className="relative">
                      <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        required
                        name="subject"
                        type="text"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-cyan-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300">
                      {t.formMessage}
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                      <textarea
                        required
                        name="message"
                        rows="4"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-900 outline-none transition focus:border-blue-400 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-cyan-400"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-bold text-white transition hover:bg-blue-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                  >
                    <Send size={18} />
                    {t.formSend}
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6">
                <div className="rounded-[34px] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-slate-900/50">
                  <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">{t.socialsTitle}</h3>
                  <div className="grid gap-3">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50 dark:border-white/5 dark:bg-white/5 dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/5"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm transition group-hover:text-blue-600 dark:bg-white/10 dark:text-slate-400 dark:group-hover:text-cyan-300">
                            <social.icon size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{social.name}</p>
                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{social.handle}</p>
                          </div>
                        </div>
                        <ExternalLink size={16} className="text-slate-300 group-hover:text-blue-400 dark:text-slate-600 dark:group-hover:text-cyan-400" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-[34px] border border-blue-100 bg-blue-50 p-8 dark:border-cyan-400/10 dark:bg-cyan-400/5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-cyan-400 dark:text-slate-950">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-300">Email Me</p>
                      <a href="mailto:ndirakozeheritier@gmail.com" className="text-lg font-bold text-slate-900 dark:text-white">
                        ndirakozeheritier@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm dark:bg-cyan-400 dark:text-slate-950">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-300">Call Me</p>
                      <a href="tel:+250793240559" className="text-lg font-bold text-slate-900 dark:text-white">
                        +250 793 240 559
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-12 dark:border-white/10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] flex-col gap-8 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-medium">{t.footerBlurb}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-bold text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 dark:bg-cyan-400"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500 dark:bg-cyan-500"></span>
                </span>
                {locale === "rw" ? "Abasuye uru rubuga" : "Live Visitors"}:{" "}
                {visits ?? (locale === "rw" ? "..." : "...")}
              </div>
            </div>
          </div>
          <p className="font-medium">© 2026 Heritier Ndayishimiye Irakoze. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white">{title}</h2>
      {lead ? <p className="mt-4 max-w-xs text-base font-medium leading-8 text-slate-500 dark:text-slate-400">{lead}</p> : null}
    </div>
  );
}

export default App;
