export const personalInfo = {
  name: "Moeed Shah",
  role: "Web Development Student & Aspiring Freelance Developer",
  location: "Lahore, Pakistan",
  education: {
    institution: "Government College University Lahore",
    degree: "I.Com — Intermediate in Commerce",
    status: "Currently Studying",
    note: "Balancing commerce studies with daily hands-on web development practice, focusing on modern frontend technologies.",
  },
  bioSummary: "I'm a web development student from Lahore, Pakistan, focused on building clean, responsive, and user-friendly websites. I enjoy translating ideas into functional interfaces and am actively looking for real-world projects and freelance opportunities.",
  heroParagraph: "I’m learning web development by building real projects, experimenting with modern frontend tools, and continuously improving how I design and develop websites.",
  contactEmail: "moeedshah.dev@gmail.com",
  socials: {
    github: {
      url: "https://github.com/moeedshah0056-cyber",
      label: "GitHub",
      isPlaceholder: false,
      note: "GitHub profile",
    },
    linkedin: {
      url: "https://linkedin.com",
      label: "LinkedIn",
      isPlaceholder: true,
      note: "Replace with your LinkedIn profile link",
    },
  },
  formspreeEndpoint: "https://formspree.io/f/xbglryjn",
  availability: "Open to freelance projects & collaborations",
};

export const skillsData = {
  languages: [
    {
      name: "HTML5",
      description: "Semantic markup, accessibility fundamentals, and clean document structure.",
      badge: "Core",
    },
    {
      name: "CSS3",
      description: "Modern flexbox, grid layouts, custom variables, and responsive media queries.",
      badge: "Styling",
    },
    {
      name: "JavaScript",
      description: "ES6+ syntax, DOM manipulation, asynchronous operations (fetch/promises), and array methods.",
      badge: "Logic",
    },
  ],
  frameworks: [
    {
      name: "React",
      description: "Functional components, state & props management, hooks (useState, useEffect), and modular UI.",
      badge: "Framework",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first rapid styling, responsive prefixes, custom themes, and clean modern interfaces.",
      badge: "CSS Library",
    },
    {
      name: "Vite",
      description: "Modern lightning-fast build tooling, hot module replacement, and production asset bundling.",
      badge: "Tooling",
    },
  ],
  practices: [
    {
      name: "Responsive Web Design",
      description: "Crafting fluid layouts that look and feel natural on smartphones, tablets, and large screens.",
      badge: "Standard",
    },
    {
      name: "Component-Based Architecture",
      description: "Writing reusable, modular code blocks that stay maintainable as applications grow.",
      badge: "Architecture",
    },
    {
      name: "Frontend UI Development",
      description: "Translating layout ideas and user flows into interactive, accessible, and polished web pages.",
      badge: "Specialty",
    },
    {
      name: "Basic Git & GitHub Workflow",
      description: "Version control, branching, committing changes, and hosting code repositories.",
      badge: "Workflow",
    },
    {
      name: "Website Deployment",
      description: "Deploying and hosting live web applications with platforms like Vercel with automated CI/CD.",
      badge: "Deployment",
    },
  ],
};

export const projectsData = [
  {
    id: "hospital-website",
    title: "Hospital Website",
    category: "Healthcare Web Application",
    technologies: ["React", "Tailwind CSS", "Vite", "React Router"],
    shortDescription: "A comprehensive hospital website built with React and Tailwind CSS, focusing on structured sections, responsive design, reusable components, services, departments, and a professional healthcare-oriented interface.",
    longDescription: "A fully developed healthcare website project designed to showcase a modern medical center. Features interactive department showcases, doctors roster with specialties, service catalogs, an emergency banner with quick contact options, patient appointment booking simulation, and health packages.",
    previewType: "hospital",
    features: [
      "Department and specialized medical service directory",
      "Doctor cards with qualifications and consultation badges",
      "Interactive appointment booking form with instant validation",
      "Emergency quick-call banner with 24/7 hotline display",
      "Patient health package cards and responsive layout",
    ],
    demoType: "internal-route",
    demoRoute: "/demo/hospital",
    githubPlaceholder: "https://github.com/moeedshah/hospital-website",
    accentColor: "blue",
    featured: true,
  },
  {
    id: "cafe-website",
    title: "Café Website",
    category: "Food & Beverage Concept",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    shortDescription: "A modern café website concept focused on an attractive homepage, categorized menu presentation, services, an about story section, contact information, and a warm, inviting responsive layout.",
    longDescription: "Designed for a cozy artisanal coffee shop. Focuses on visual menu browsing by category (Espresso, Brews, Bakery, Breakfast), operating hours, location details, a table reservation concept, and smooth micro-interactions that elevate the dining experience.",
    previewType: "cafe",
    features: [
      "Warm, modern café visual design and clear branding",
      "Categorized interactive menu tab system with pricing and tags",
      "About section highlighting artisanal bean roasting and cozy ambience",
      "Table reservation request form with date and party size selectors",
      "Operating hours, location map placeholder, and direct contact details",
    ],
    demoType: "interactive-preview",
    githubPlaceholder: "https://github.com/moeedshah/cafe-website",
    accentColor: "amber",
    featured: true,
  },
  {
    id: "smart-watch-website",
    title: "Smart Watch Website",
    category: "Product Landing Page",
    technologies: ["React", "Tailwind CSS", "Vite"],
    shortDescription: "A frontend website concept created to practice tech product presentation, interactive feature cards, sections, responsive layouts, subtle animations, and modern UI design.",
    longDescription: "Created to practice consumer electronics landing page design. Includes interactive color & strap variations, dynamic feature cards detailing health sensors, battery specs, water resistance, and an interactive technical specifications comparison table.",
    previewType: "watch",
    features: [
      "Modern product showcase with interactive color/finish switcher",
      "Key spec highlight cards (AMOLED display, 7-day battery, 50m water resistant)",
      "Sensor & fitness tracking feature breakdown",
      "Responsive technical comparison table",
      "Clean call-to-action cards with pre-order simulation",
    ],
    demoType: "interactive-preview",
    githubPlaceholder: "https://github.com/moeedshah/smart-watch-website",
    accentColor: "indigo",
    featured: true,
  },
];

export const servicesData = [
  {
    id: "responsive-websites",
    title: "Responsive Websites",
    description: "Modern websites designed to adapt seamlessly across mobile phones, tablets, laptops, and desktop monitors.",
    highlights: ["Mobile-first approach", "Fluid layout grids", "Cross-browser testing"],
    icon: "Layout",
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Building clean, maintainable frontend user interfaces using modern standards: HTML5, CSS3, JavaScript, React, and Tailwind CSS.",
    highlights: ["Clean component structure", "Reusable UI elements", "Fast client-side rendering"],
    icon: "Code2",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description: "Focused, modern landing pages for personal brands, small local businesses, product concepts, and startups.",
    highlights: ["Clear visual hierarchy", "Effective call-to-actions", "Optimized loading speed"],
    icon: "Sparkles",
  },
  {
    id: "website-ui-development",
    title: "Website UI Development",
    description: "Translating wireframes, sketches, and visual ideas into living, responsive, and interactive web components.",
    highlights: ["Design fidelity", "Accessible form inputs", "Subtle interactive feedback"],
    icon: "MonitorCheck",
  },
  {
    id: "website-deployment",
    title: "Website Deployment",
    description: "Taking completed websites live on fast global hosting platforms such as Vercel with automatic build checks.",
    highlights: ["Vercel hosting setup", "Custom domain configuration", "Production build optimization"],
    icon: "Rocket",
  },
];

export const learningData = [
  {
    title: "Advanced React & State Patterns",
    status: "In Progress",
    description: "Deepening knowledge of custom hooks, Context API, state machines, and effective component decomposition.",
    progress: "Active Focus",
  },
  {
    title: "Tailwind CSS Design Systems",
    status: "In Progress",
    description: "Mastering utility composition, custom theme tokens, dark mode paradigms, and responsive design patterns.",
    progress: "Active Focus",
  },
  {
    title: "Core JavaScript Fundamentals",
    status: "Continuous",
    description: "Strengthening asynchronous programming, closures, event delegation, and modular ES script design.",
    progress: "Daily Practice",
  },
  {
    title: "Git & Collaborative Workflows",
    status: "Practicing",
    description: "Gaining comfort with feature branching, merge strategies, code reviews, and remote repository hygiene.",
    progress: "Consistent Practice",
  },
  {
    title: "Real-World Client Projects",
    status: "Next Horizon",
    description: "Actively seeking freelance and collaborative project opportunities to solve practical client challenges.",
    progress: "Open for Opportunities",
  },
];

export const whyWorkWithMe = [
  {
    title: "Dedicated to Responsive Layouts",
    description: "I prioritize mobile experiences from the start, ensuring interfaces look intentional on any screen size.",
  },
  {
    title: "Clean, Understandable UI",
    description: "I value simple, readable code and clean visual layouts over confusing clutter and unnecessary complexity.",
  },
  {
    title: "Modern Frontend Stack",
    description: "I build using current industry tools like React, Tailwind CSS, and Vite rather than outdated practices.",
  },
  {
    title: "Honest & Clear Communication",
    description: "I provide transparent updates on what I am building, what I can deliver, and project timelines.",
  },
  {
    title: "Fast & Eager Learner",
    description: "If a project calls for a specific tool or package I haven't mastered yet, I dig in and learn it quickly.",
  },
  {
    title: "Practical, Project-Driven Mindset",
    description: "I measure progress by building working websites that real people can navigate and interact with.",
  },
];
