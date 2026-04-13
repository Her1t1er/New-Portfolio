import { useEffect, useState } from "react";
import cvPdf from "../CV.pdf";

const content = {
  en: {
    nav: [
      { id: "overview", label: "About" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "credentials", label: "Awards" },
      { id: "contact", label: "Contact" },
    ],
    pdfCta: "Open CV",
    heroKicker: "Computer and Software Engineering Student",
    heroTitle: "Heritier\nNdayishimiye\nIrakoze",
    heroText:
      "Motivated and detail-oriented developer with a strong academic foundation in mathematics, physics, and computer science. Focused on web design, UI design, and web development, with a clear interest in building practical digital products that are clean, usable, and modern.",
    primaryCta: "Get in Touch",
    secondaryCta: "View PDF",
    locationLine: "Kigali, Rwanda",
    scrollLabel: "Scroll",
    stats: [
      { value: "2024", title: "University Journey", detail: "Started BSc studies in Computer and Software Engineering" },
      { value: "2+", title: "Certifications", detail: "Web design and IoT learning milestones" },
      { value: "3", title: "Languages", detail: "Kinyarwanda, English, and French" },
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
        items: ["Web Design", "Web Development", "UI Design"],
      },
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
      { id: "credentials", label: "Impamyabushobozi" },
      { id: "contact", label: "Twandikire" },
    ],
    pdfCta: "Fungura CV",
    heroKicker: "Umunyeshuri wa Computer and Software Engineering",
    heroTitle: "Heritier\nNdayishimiye\nIrakoze",
    heroText:
      "Ni umunyeshuri ufite umuhate kandi witonda mu kazi, ufite ubumenyi bw'ibanze bukomeye muri imibare, fiziki na mudasobwa. Yibanda kuri web design, UI design na web development, kandi ashishikajwe no gukora ibisubizo by'ikoranabuhanga byoroshye gukoresha kandi bigezweho.",
    primaryCta: "Vugana Nanjye",
    secondaryCta: "Reba PDF",
    locationLine: "Kigali, Rwanda",
    scrollLabel: "Komeza Hasi",
    stats: [
      { value: "2024", title: "Urugendo rwa Kaminuza", detail: "Yatangiye amasomo ya Computer and Software Engineering" },
      { value: "2+", title: "Impamyabushobozi", detail: "Intambwe mu kwiga web design na IoT" },
      { value: "3", title: "Indimi", detail: "Ikinyarwanda, Icyongereza n'Igifaransa" },
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
        items: ["Web Design", "Web Development", "UI Design"],
      },
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

function App() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copied, setCopied] = useState(false);
  const [locale, setLocale] = useState(() => localStorage.getItem("cv-locale") || "en");
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
    let cancelled = false;

    const loadVisits = async () => {
      try {
        const response = await fetch(
          "https://api.countapi.xyz/hit/her1t1er-new-portfolio/visits"
        );
        const data = await response.json();
        if (!cancelled && typeof data.value === "number") {
          setVisits(data.value);
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

  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_24%),linear-gradient(180deg,#081120_0%,#0b1424_48%,#081120_100%)]" />
      <div className="fixed inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-30" />
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] items-center justify-between gap-4 py-4">
          <a href="#overview" className="text-lg font-semibold tracking-tight text-slate-100">
            Heritier Irakoze
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm transition ${
                  activeSection === section.id ? "text-cyan-300" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              <span className="px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {t.langLabel}
              </span>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  locale === "en" ? "bg-cyan-400 text-slate-950" : "text-slate-300"
                }`}
              >
                {t.langEn}
              </button>
              <button
                type="button"
                onClick={() => setLocale("rw")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  locale === "rw" ? "bg-cyan-400 text-slate-950" : "text-slate-300"
                }`}
              >
                {t.langRw}
              </button>
            </div>
            <a
              href={cvPdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-300/10"
            >
              {t.pdfCta}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <section id="overview" className="grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{t.heroKicker}</p>
            <h1 className="mt-5 whitespace-pre-line text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-accent to-cyan-400 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                {t.primaryCta}
              </a>
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/5"
              >
                {t.secondaryCta}
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
              <span>{t.locationLine}</span>
              <span>{t.scrollLabel}</span>
            </div>
          </div>

          <div className="justify-self-start md:justify-self-end">
            <div className="relative flex h-[320px] w-[260px] items-end overflow-hidden rounded-[38px] border border-cyan-400/15 bg-slate-950/50 p-7 shadow-panel sm:h-[420px] sm:w-[320px]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(96,165,250,0.18),rgba(2,8,23,0.2))]" />
              <div className="relative">
                <div className="mb-4 h-20 w-20 rounded-full border border-cyan-300/40 bg-white/10" />
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">{t.locationLine}</p>
                <p className="mt-2 text-2xl font-semibold text-white">HI</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-px overflow-hidden rounded-[34px] border border-white/10 bg-white/10 md:grid-cols-3">
          {t.stats.map((stat) => (
            <div key={stat.title} className="bg-white/5 p-7 backdrop-blur">
              <p className="text-5xl font-semibold tracking-tight text-white">{stat.value}</p>
              <p className="mt-4 text-lg font-medium text-slate-100">{stat.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} />
          <div>
            <p className="max-w-3xl text-lg leading-9 text-slate-300">{t.aboutBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.focusTags.map((tag) => (
                <span key={tag} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.educationEyebrow} title={t.educationTitle} lead={t.educationLead} />
          <div className="space-y-10">
            {t.education.map((item) => (
              <article key={item.title} className="border-b border-white/10 pb-10 last:border-b-0 last:pb-0">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-base text-slate-400">{item.place}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} />
          <div className="grid gap-8 md:grid-cols-2">
            {t.skillGroups.map((group) => (
              <div key={group.title} className="rounded-[30px] border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="credentials" className="grid gap-12 border-t border-white/10 py-24 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.credentialsEyebrow} title={t.credentialsTitle} />
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-semibold text-white">Certifications</h3>
              <div className="mt-6 space-y-6">
                {t.certifications.map((cert) => (
                  <div key={cert.title} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{cert.date}</p>
                    <h4 className="mt-2 text-lg font-medium text-white">{cert.title}</h4>
                    <p className="mt-1 text-slate-400">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[30px] border border-white/10 bg-white/5 p-7">
                <h3 className="text-xl font-semibold text-white">{t.languagesTitle}</h3>
                <div className="mt-6 space-y-4">
                  {t.languages.map((language) => (
                    <div key={language.name} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <span className="font-medium text-white">{language.name}</span>
                      <span className="text-sm text-slate-400">{language.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-cyan-400/15 bg-slate-950/60 p-7 text-white">
                <p className="text-sm uppercase tracking-[0.22em] text-cyan-300">{t.interestsEyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold">{t.interestsTitle}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {t.interests.map((interest) => (
                    <span key={interest} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-8 border-t border-white/10 py-24 md:grid-cols-[0.45fr_1fr]">
          <SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} />
          <div className="rounded-[34px] border border-cyan-400/15 bg-slate-950/60 p-8 text-white">
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{t.contactText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleCopy}
                className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950"
              >
                {t.copyEmail}
              </button>
              <a
                href="mailto:ndirakozeheritier@gmail.com"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white"
              >
                {t.sendEmail}
              </a>
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white"
              >
                {t.pdfCta}
              </a>
            </div>
            <p className="mt-5 min-h-6 text-sm text-cyan-200">{copied ? t.copied : ""}</p>
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
              <a href="mailto:ndirakozeheritier@gmail.com" className="text-slate-300 transition hover:text-white">
                ndirakozeheritier@gmail.com
              </a>
              <a href="tel:+250793240559" className="text-slate-300 transition hover:text-white">
                +250 793 240 559
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p>{t.footerBlurb}</p>
            <p className="text-cyan-200">
              {locale === "rw" ? "Abasuye uru rubuga" : "Website visits"}:{" "}
              <span className="font-semibold text-white">
                {visits ?? (locale === "rw" ? "Birabarwa..." : "Counting...")}
              </span>
            </p>
          </div>
          <p>© 2026 Heritier Ndayishimiye Irakoze. {t.rights}</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-white">{title}</h2>
      {lead ? <p className="mt-4 max-w-xs text-base leading-8 text-slate-400">{lead}</p> : null}
    </div>
  );
}

export default App;
