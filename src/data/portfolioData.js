// ============================================
// PORTFOLIO CONFIGURATION
// ============================================

export const portfolioData = {
  // Personal Info
  name: "Aayush Poudel",
  title: "Software Engineer",
  headline: "Computer Enginnering Student",
  subheadline:
    "Full-stack developer passionate about creating elegant, user-focused digital experiences with clean code and modern technologies.",
  photo: "/me.jpg",
  location: "Kathmandu, Nepal",
  availability: "Open to opportunities",
  languages: ["English", "Nepali", "Hindi"],

  // Bio
  bio: `I'm a software engineering student with a passion for building modern web applications. I specialize in creating responsive, accessible, and performant web experiences using the latest technologies.

Currently focused on mastering full-stack development with React, Django, and REST APIs while exploring security best practices and deployment strategies.`,

  lookingFor: ["Software Engineering Internships", "Junior Developer Roles", "Freelance Projects"],

  // Social Links
  socials: {
    github: "https://github.com/AayushPoudel002",
    linkedin: "https://linkedin.com/in/AayushPoudel002",
    email: "poudelaayush47@gmail.com",
    twitter: "https://twitter.com/AayushPoudel002",
  },

  // Resume
  resumeUrl: "/Aayush_Poudel_Resume.pdf",

  // Skills organized by category
  skills: [
    {
      category: "Front-end",
      icon: "layout",
      items: [
        "HTML5 Semantic Markup",
        "CSS3 / Flexbox / Grid",
        "Bootstrap 5",
        "Responsive Design",
        "Accessibility (WCAG)",
      ],
    },
    {
      category: "JavaScript",
      icon: "code",
      items: [
        "ES6+ Features",
        "DOM Manipulation",
        "Event Handling",
        "Form Validation",
        "localStorage / sessionStorage",
        "Async/Await & Promises",
        "Fetch API",
      ],
    },
    {
      category: "React",
      icon: "atom",
      items: [
        "Functional Components",
        "Props & State Management",
        "React Router",
        "Custom Hooks",
        "Context API",
        "Loading & Error States",
      ],
    },
    {
      category: "Python & Data Science",
      icon: "chart",
      items: [
        "Advanced Python",
        "NumPy & Pandas",
        "Data Visualization",
        "Numerical Methods",
        "Pygame Development",
        "Jupyter Notebooks",
      ],
    },
    {
      category: "Back-end",
      icon: "server",
      items: ["Django Framework", "Python Fundamentals", "Routing & Middleware", "Template Engines", "Database Design"],
    },
    {
      category: "APIs & Data",
      icon: "database",
      items: ["RESTful API Design", "JSON Data Handling", "API Validation", "Serialization", "Postman Testing"],
    },
    {
      category: "Security",
      icon: "shield",
      items: [
        "XSS Prevention",
        "SQL Injection Protection",
        "CSRF Protection",
        "Input Sanitization",
        "Authentication Best Practices",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "rocket",
      items: ["Git & GitHub", "CI/CD Basics", "Testing & QA", "PWA Concepts", "Vercel / Netlify"],
    },
  ],

  // Project categories for filtering
  projectCategories: ["All", "Frontend", "Full-stack", "Python", "API", "Security"],

  // Education & Timeline
timeline: [
  {
    id: 1,
    year: "2024 - Present",
    title: "Bachelor's in Computer Engineering",
    organization: "Himalaya College of Engineering",
    description: "Pursuing a Computer Engineering degree with a strong focus on software development, problem-solving, and system design. Actively applying academic knowledge to real-world projects and applications.",
    highlights: [
      "Proficient in C, C++, Python, and JavaScript",
      "Strong understanding of Data Structures and Algorithms",
      "Hands-on experience with Database Systems and SQL",
      "Explored Computer Graphics and system-level concepts",
    ],
  },
  {
    id: 2,
    year: "2023 - Present",
    title: "Self-Driven Skill Development & Projects",
    organization: "Independent Learning",
    description: "Continuously building practical skills through real-world projects, online learning, and experimentation with modern technologies.",
    highlights: [
      "Full-stack web development using React, Django, and REST APIs",
      "Developed multiple projects including CRUD systems and portfolio apps",
      "Implemented authentication, database integration, and deployment",
      "Version control using Git and collaborative development practices",
    ],
  },
  {
    id: 3,
    year: "2021 - 2023",
    title: "+2 Science (Higher Secondary Education)",
    organization: "Siddhartha English Boarding School",
    description: "Completed higher secondary education with a science major, building a strong analytical and mathematical foundation for engineering studies.",
    highlights: [
      "Focused on Physics, Chemistry, and Mathematics",
      "Developed logical reasoning and problem-solving abilities",
      "Successfully graduated in 2023",
    ],
  },
],

  // Achievements & Certifications
achievements: [
  {
    id: 1,
    title: "LeetCode Problem Solving Practice",
    issuer: "Data Structures & Algorithms (C++)",
    date: "2025",
    icon: "cpu",
  },
  {
    id: 2,
    title: "Full Stack Web Development (React + Django)",
    issuer: "Self-Developed Production Projects",
    date: "2025",
    icon: "globe",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning Practice",
    issuer: "Python, Pandas, Scikit-learn",
    date: "2025",
    icon: "brain",
  },
  {
    id: 4,
    title: "Academic Performance in Computer Engineering",
    issuer: "University Coursework (DBMS, DSA, OS, CN)",
    date: "2024-2026",
    icon: "graduation",
  },
  {
    id: 5,
    title: "Self-Learning Certifications (Online Platforms)",
    issuer: "Coursera, FreeCodeCamp, YouTube Learning Path",
    date: "2025",
    icon: "award",
  },
],

  // Navigation items
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  // SEO
  seo: {
    title: "Aayush Poudel | Software Engineer Portfolio",
    description:
      "Full-stack software engineer specializing in React, Django, modern web technologies, Python, C++. View my projects and get in touch.",
    ogImage: "/og-image.png",
  },

  // Tech stack pills for hero
  techStack: ["HTML/CSS", "JavaScript", "React", "Django", "REST APIs", "Security"],
};
