export const profile = {
  name: "Jason Sianandar",
  role: "Full Stack Developer",
  headline: "Impactful Solutions.",
  location: "Indonesia",
  years: 3,
  email: "sianandarjason@gmail.com", // TODO: replace with your real email
  linkedin: "https://www.linkedin.com/in/jason-sianandar-1a9a40202/", // TODO
  github: "https://github.com/JSianandar", // TODO
  cv: "/JSenpai-CV.pdf", // put your CV in /public with this name
  intro: [
    "I'm a Full Stack Developer with 3+ years of experience turning ideas into fast, reliable web products, from finance and IoT platforms to websites for clients in all kinds of industries.",
    "I care about the outcome, not just the code: workflows that save people time, dashboards that make data clear, and sites that do their job well.",
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

export const skills: {
  group: string;
  items: { name: string; core?: boolean }[];
}[] = [
  {
    group: "Frontend Architecture",
    items: [
      { name: "Next.js", core: true },
      { name: "TypeScript", core: true },
      { name: "React", core: true },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "React Query" },
      { name: "React Native" },
    ],
  },
  {
    group: "Web Fundamentals",
    items: [
      { name: "JavaScript", core: true },
      { name: "HTML5", core: true },
      { name: "CSS" },
      { name: "jQuery" },
      { name: "Responsive design" },
      { name: "Cross-browser compatibility" },
    ],
  },
  {
    group: "Languages",
    items: [{ name: "PHP", core: true }, { name: "Python" }, { name: "Java" }],
  },
  {
    group: "Backend & Systems",
    items: [
      { name: "Node.js", core: true },
      { name: "Laravel", core: true },
      { name: "Express.js" },
      { name: "Springboot" },
      { name: "CodeIgniter" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Linux" },
      { name: "Amazon Web Services" },
    ],
  },

  {
    group: "Product & Tooling",
    items: [
      { name: "Git", core: true },
      { name: "Version control" },
      { name: "Docker" },
      { name: "Debugging" },
      { name: "Figma" },
      { name: "CI/CD" },
    ],
  },
  {
    group: "IoT & Integrations",
    items: [
      { name: "MQTT", core: true },
      { name: "Realtime Dashboards" },
      { name: "WebSockets" },
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "PT Generasi Paham Investasi (Ayovest), Jakarta",
    period: "Jan 2025 – Present",
    points: [
      "Built a approval flow (OA) that handles enabling, modifying and disabling items, working to QA specifications.",
      "Translated Figma UI/UX designs into responsive web applications using Next.js, Vue.js and React.js.",
      "Built and maintained back-end systems for Indonesia's financial services ecosystem with Java and MySQL.",
      "Developed and enhanced the Ayovest mobile app using React Native.",
      "Integrated third-party APIs to extend functionality and improve the user experience.",
      "Worked with cross-functional teams, delegating tasks and keeping everyone aligned through ClickUp and Jira.",
    ],
  },
  {
    role: "Software / Front-End Developer",
    company: "PT Inovasi Otomasi Teknologi, Jakarta",
    period: "Jul 2023 – Jan 2025",
    points: [
      "Engineered responsive interfaces that work across devices, improving accessibility and user engagement for client applications.",
      "Built custom dashboards, from paperless e-forms to monitoring dashboards, including OEE (Overall Equipment Effectiveness) dashboards.",
      "Worked mainly with React.js on the front end, Laravel on the back end and MySQL for the database.",
      "Deployed applications on Linux, Docker and AWS.",
    ],
  },
  {
    role: "Front-End Engineer Specialist (Internship)",
    company: "Your Company Name, Jakarta", // TODO: add company name
    period: "Aug 2021 – Feb 2022",
    points: [
      "Translated UI/UX designs into responsive web applications.",
      "Built pages for the product's landing page and dashboard.",
      "Implemented API requests for the product.",
      "Tech used: React.js, Next.js and SCSS.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Ninety Seven Web Developer",
    period: "Apr 2021 – Aug 2021", // TODO: add your dates
    points: [
      "Built the front end of websites and desktop apps with ReactJS.",
      "Worked with MongoDB for the API and implemented API requests for the product.",
    ],
  },
  {
    role: "Mobile Application Developer (Internship)",
    company: "Your Company Name, Jakarta", // TODO: add company name
    period: "Feb 2021 – May 2021",
    points: [
      "Developed and implemented a mobile app prototype based on client requirements.",
      "Gained working knowledge of the healthcare system and its needs.",
      "Built with Dart and Flutter, supported by Android Studio.",
    ],
  },
];

export const moncode = {
  name: "Moncode",
  url: "https://moncode.id",
  tagline: "Web development studio I'm building.",
  description:
    "Moncode is my freelance web development brand, helping businesses and brands launch fast, polished and scalable websites and web apps.",
  services: [
    {
      title: "Landing Pages",
      text: "Conversion-focused, responsive one-pagers.",
    },
    {
      title: "Company Websites",
      text: "Professional sites that tell your brand story.",
    },
    {
      title: "Web Apps",
      text: "Dashboards, internal tools and custom systems.",
    },
    {
      title: "Performance & SEO",
      text: "Fast loads, clean code, found on search.",
    },
  ],
  stats: [
    { label: "Projects shipped", value: 4, suffix: "+" }, // TODO
    { label: "Years building", value: 1, suffix: "" },
    { label: "Happy clients", value: 3, suffix: "+" }, // TODO
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
