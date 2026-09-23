import type { Dict } from "./fa";

export const en: Dict = {
  meta: {
    title: "MooKalaQi — AmirArsalan Zolfaghari",
    description: "Frontend software engineer. Interfaces that are fast, careful and properly built.",
  },
  langToggle: { label: "فا", aria: "Switch language to Persian" },
  ui: {
    loading: "Loading",
    themeToggle: "Toggle light and dark mode",
    sectionsLabel: "sections",
    sectionsNav: "Page sections",
    close: "Close",
    copy: "copy",
    copied: "copied",
    copyAria: "Copy {label}",
    copiedAria: "{label} copied",
    showCaption: "Show photo caption",
    backToPhoto: "Back to photo",
  },
  profile: {
    name: "AmirArsalan Zolfaghari",
    role: "Frontend Software Engineer",
    statement: { first: "from idea", secondPrefix: "to ", secondAccent: "launch" },
    intro:
      "I build interfaces that are fast and that sweat the details. With Vue, TypeScript and an obsession with small things. And lately, with AI alongside me, my speed and precision have multiplied several times over.",
    photoCaption:
      "This photo was taken while I was studying for my bachelor's degree at Azad University, Kerman.",
  },
  sections: { home: "Home", about: "About", contact: "Contact", coffee: "Coffee" },
  hero: {
    primaryCta: "[ let's talk ]",
    secondaryCta: "[ about me ]",
    stats: [
      { value: "2 years", label: "professional experience" },
      { value: "3 languages", label: "Persian, English, German" },
      { value: "Berlin", label: "remote team" },
      { value: "Tehran", label: "based in" },
    ],
  },
  about: {
    title: "The road so far",
    bio: "I work on the frontend, and most of my time goes into making interfaces actually work — not just look like they do. My experience comes from working remotely with a team in Berlin, where I learned how much difference maintainable, tested code really makes.",
    experienceLabel: "experience",
    skillsLabel: "skills",
    educationLabel: "education",
    experience: [
      {
        company: "Taxmaro",
        place: "Berlin · Remote",
        role: "Frontend Developer",
        period: "Oct 2023 — Jul 2025",
        points: [
          "Built responsive interfaces with Vue.js and Vuetify.",
          "Wrote maintainable, type-safe components with TypeScript in the Vue 3 Composition API.",
          "Wrote and ran end-to-end tests with Playwright to keep UI quality in check.",
          "Worked in an Agile team and contributed to real production codebases.",
        ],
      },
    ],
    skills: [
      { group: "Frontend", items: ["Vue.js", "Vue 3 Composition API", "TypeScript", "Vuetify"] },
      { group: "Testing", items: ["Playwright", "E2E Testing"] },
      { group: "Tooling", items: ["Docker", "Git", "Terminal"] },
      { group: "Languages", items: ["Persian — native", "English — fluent", "German — intermediate"] },
    ],
    education: [
      {
        degree: "Master's in Management",
        school: "Azad University, Science and Research Branch, Tehran",
        period: "Oct 2025 — present",
        points: ["Advanced Strategic Management", "Advanced Management Theory", "Organizational Behaviour", "Small Business Management"],
      },
      {
        degree: "Bachelor's in Computer Engineering",
        school: "Azad University, Kerman",
        period: "Oct 2019 — 2025",
        points: ["Operating Systems", "Data Structures", "Advanced Programming", "Databases"],
      },
    ],
  },
  contact: {
    title: "Let's talk",
    intro: "For work, a project, or even a simple question — any of these reaches me.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
  },
  coffee: {
    title: { prefix: "Buy me a ", accent: "coffee" },
    text: "If something I wrote or built was useful to you, you can support me with a coffee. It isn't required — but it isn't nothing either.",
    button: "[ buy me a coffee ]",
    modal: {
      title: "Card to card, the way we do it here",
      description:
        "I would have loved to put a proper button here; you click, coffee arrives. But on this side of the world we still pass card numbers around. So here you go, the most romantic part of the site:",
      note: "The copy button takes the number without spaces or dashes, so it pastes straight into a banking app. If you actually send something, drop me a message so I know whose health I'm drinking to.",
      bank: "Saman Bank",
      ibanLabel: "IBAN",
      cardLabel: "Card number",
    },
  },
  footer: "built with Next.js and Tailwind",
  socials: { label: "Social links", x: "X", instagram: "Instagram", spotify: "Spotify" },
};
