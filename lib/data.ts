export const profile = {
  name: "JSenpai",
  role: "Full Stack Developer",
  headline: "Impactful Solutions.",
  location: "Indonesia",
  years: 4,
  email: "hello@moncode.id", // TODO: replace with your real email
  linkedin: "https://www.linkedin.com/in/your-handle", // TODO
  github: "https://github.com/your-handle", // TODO
  cv: "/JSenpai-CV.pdf", // put your CV in /public with this name
  intro: [
    "I'm a Full Stack Developer with 4 years of experience building fast, scalable web applications across the finance and IoT industries.",
    "I don't just write code to clear tickets. I build systems that drive change, from approval workflows to dashboards and client-facing sites, with a focus on real-world impact.",
  ],
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "moncode", label: "Moncode" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const skills: { group: string; items: { name: string; core?: boolean }[] }[] = [
  {
    group: "Frontend Architecture",
    items: [
      { name: "Next.js", core: true },
      { name: "TypeScript", core: true },
      { name: "React", core: true },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
    ],
  },
  {
    group: "Backend & Systems",
    items: [
      { name: "Node.js", core: true },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
    ],
  },
  {
    group: "IoT & Integrations",
    items: [{ name: "MQTT", core: true }, { name: "Realtime Dashboards" }, { name: "WebSockets" }],
  },
  {
    group: "Product & Tooling",
    items: [{ name: "Git" }, { name: "Figma" }, { name: "Agile (Scrum/Kanban)" }, { name: "CI/CD" }],
  },
]; // TODO: adjust to your real stack

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Your Current Company", // TODO
    period: "2023 – Present",
    points: [
      "Built the frontend approval flow (OA) used across internal teams.",
      "Improved performance and maintainability of the web platform.",
    ],
  },
  {
    role: "Frontend / IoT Developer",
    company: "Previous Company", // TODO
    period: "2022 – 2023",
    points: [
      "Built realtime IoT dashboards for monitoring devices.",
      "Collaborated with hardware and backend teams on data pipelines.",
    ],
  },
  {
    role: "Web Developer",
    company: "Finance Company", // TODO
    period: "2022 – 2023",
    points: ["Developed customer-facing finance features with strict compliance requirements."],
  },
]; // TODO: replace with your real work history

export const moncode = {
  name: "Moncode",
  url: "https://moncode.id",
  tagline: "Web development studio I'm building.",
  description:
    "Moncode is my freelance web development brand, helping businesses and brands launch fast, polished and scalable websites and web apps.",
  services: [
    { title: "Landing Pages", text: "Conversion-focused, responsive one-pagers." },
    { title: "Company Websites", text: "Professional sites that tell your brand story." },
    { title: "Web Apps", text: "Dashboards, internal tools and custom systems." },
    { title: "Performance & SEO", text: "Fast loads, clean code, found on search." },
  ],
  stats: [
    { label: "Projects shipped", value: 10, suffix: "+" }, // TODO
    { label: "Years building", value: 4, suffix: "" },
    { label: "Happy clients", value: 8, suffix: "+" }, // TODO
  ],
};

export const projects = [
  {
    title: "AKAR Studio Website",
    desc: "Company website for AKAR Studio (PT Idea Karya Kreasi), built as a modern, animated frontend.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    moncode: true,
  },
  {
    title: "Faunafella Care",
    desc: "One-page landing site for the Russell de Cerra pet grooming brand.",
    tags: ["Next.js", "Tailwind CSS"],
    moncode: true,
  },
  {
    title: "Approval Flow (OA)",
    desc: "Frontend approval workflow feature for an internal platform.",
    tags: ["React", "TypeScript"],
  },
]; // TODO: add links/images

export const education = {
  school: "Your University", // TODO
  degree: "Bachelor's Degree", // TODO
  period: "20XX – 20XX", // TODO
  points: ["Add highlights, GPA or achievements here."],
};

export const certifications = [
  { name: "Certification One", issuer: "Issuer", date: "2024" }, // TODO
  { name: "Certification Two", issuer: "Issuer", date: "2023" },
  { name: "Certification Three", issuer: "Issuer", date: "2022" },
];
