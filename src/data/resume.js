export const personal = {
  name: "Prajwal Ravi Teli",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "AI Security Enthusiast", "Problem Solver", "Hackathon Finalist"],
  email: "teliprajwal8@gmail.com",
  phone: "+91 8618824412",
  github: "https://github.com/PrajRT19",
  linkedin: "https://www.linkedin.com/in/prajwal-ravi-1751ab319?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  location: "Bengaluru, Karnataka, India",
  tagline: "Building secure, scalable software — from full-stack web apps to AI-powered security tools.",
  summary: "Computer Science Engineering student at NMIT Bengaluru (CGPA: 8.62) with a passion for building full-stack web applications and AI-powered tools. Experienced in designing secure, scalable systems and contributing to national-level hackathons. Driven by curiosity in AI security, trading platforms, and civic technology.",
};

export const education = [
  {
    institution: "Nitte Meenakshi Institute of Technology",
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    location: "Bengaluru, Karnataka, India",
    period: "Sept 2023 – Jul 2027",
    score: "CGPA: 8.62",
    highlight: true,
  },
  {
    institution: "Vagdevi Independent PU College",
    degree: "Class 12 — PCMCS",
    location: "Bagalkot, Karnataka",
    period: "Mar 2023",
    score: "96.5%",
  },
  {
    institution: "Vagdevi Independent PU College",
    degree: "Class 10",
    location: "Bagalkot, Karnataka",
    period: "Jul 2021",
    score: "88%",
  },
];

export const skills = {
  "Languages": ["Java", "C++", "Python", "JavaScript"],
  "Web Development": ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Bootstrap"],
  "APIs & Auth": ["REST APIs", "WebSockets", "JWT", "bcrypt"],
  "Databases": ["MySQL", "MongoDB", "Mongoose"],
  "CS Fundamentals": ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Networking"],
  "Tools": ["Git", "GitHub", "Postman", "VS Code", "Docker", "GitHub Actions", "Jest", "Commander.js"],
};

export const projects = [
  {
    title: "AgentShield",
    subtitle: "AI Agent Security Auditor",
    description: "An AI-powered security auditing platform to detect prompt injection attacks, secret leakage, and configuration vulnerabilities in AI agent environments.",
    problem: "AI agents are increasingly deployed in production but lack standardized security auditing tools — leaving them exposed to prompt injections, credential leaks, and misconfigurations.",
    features: [
      "7+ CLI commands for security scanning & vulnerability analysis",
      "Automated HTML reporting with risk scores & remediation steps",
      "Prompt injection attack detection engine",
      "Secret leakage and configuration vulnerability scanner",
      "GitHub Actions integration for CI/CD pipelines",
      "Docker containerized deployment",
    ],
    tech: ["JavaScript", "Node.js", "React.js", "Express.js", "Commander.js", "Docker", "GitHub Actions"],
    github: "https://github.com/prajwalteli/agentshield",
    live: null,
    accent: "#00d4ff",
    featured: true,
    icon: "🛡️",
  },
  {
    title: "TradeLite",
    subtitle: "AI-Powered Paper Trading Platform",
    description: "A full-stack paper trading platform enabling users to execute virtual stock trades, track portfolio performance, and monitor investments with real-time updates.",
    problem: "New traders need a risk-free environment to practice strategies, track decisions, and get intelligent insights without real financial exposure.",
    features: [
      "Real-time stock data via WebSockets",
      "JWT/bcrypt secure authentication",
      "AI-powered trading insights",
      "Weekly trade journal system",
      "Portfolio performance tracking",
      "Comprehensive Jest API & integration testing",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT", "bcrypt", "Jest"],
    github: "https://github.com/prajwalteli/tradelite",
    live: null,
    accent: "#f59e0b",
    featured: true,
    icon: "📈",
  },
  {
    title: "Civic Fix",
    subtitle: "Civic Issue Reporting System",
    description: "A full-stack civic issue reporting platform enabling citizens to submit, track, and manage complaints with real-time status updates and role-based access.",
    problem: "Citizens lack a transparent, digital channel to report and track civic issues — leading to unresolved complaints and poor accountability.",
    features: [
      "Role-based access control (Admin/User)",
      "JWT authentication + bcrypt hashing",
      "RESTful APIs for issue submission & tracking",
      "Real-time status updates",
      "Scalable MongoDB architecture",
      "Full CRUD for issue management",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Postman", "Git"],
    github: "https://github.com/prajwalteli/civicfix",
    live: null,
    accent: "#7c3aed",
    featured: false,
    icon: "🏙️",
  },
];

export const achievements = [
  {
    title: "NMIT Hacks — Top 5 Finalist",
    subtitle: "National-Level Hackathon",
    desc: "Achieved Top 5 Finalist position among hundreds of teams at NMIT's national hackathon.",
    icon: "🏆",
    accent: "#f59e0b",
  },
  {
    title: "GDG CodeSprint 4.0 — Finalist",
    subtitle: "National-Level Hackathon",
    desc: "Selected as a Finalist at Google Developer Groups CodeSprint 4.0 national competition.",
    icon: "🥇",
    accent: "#00d4ff",
  },
  {
    title: "Programming Using Java",
    subtitle: "Certification",
    desc: "Certified in core Java programming including OOP, data structures, and advanced language features.",
    icon: "☕",
    accent: "#f43f5e",
  },
  {
    title: "Delta — Full Stack Development",
    subtitle: "Certification",
    desc: "Completed full-stack development program covering modern web technologies end-to-end.",
    icon: "🚀",
    accent: "#7c3aed",
  },
  {
    title: "Division-Level Handball Player",
    subtitle: "Athletics",
    desc: "Competed at division level in handball, demonstrating teamwork, discipline, and competitive spirit.",
    icon: "🤾",
    accent: "#10b981",
  },
  {
    title: "District-Level Athlete",
    subtitle: "Athletics",
    desc: "Represented at district level in athletics, showcasing dedication and physical excellence.",
    icon: "🏃",
    accent: "#f59e0b",
  },
];

export const stats = [
  { label: "Projects Built", value: "3+", suffix: "" },
  { label: "Hackathons", value: "2", suffix: "🏆" },
  { label: "CGPA", value: "8.62", suffix: "" },
  { label: "Class 12 Score", value: "96.5", suffix: "%" },
];
