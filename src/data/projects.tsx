type Category = 'All' | 'Frontend' | 'Backend' | 'Libraries' | 'Hardware' | 'AI/ML' | 'Other';

interface Project {
  title: string;
  description: string;
  categories: Category[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Website",
    description: "You're looking at it right now! Built with Astro, React, and TypeScript. This website is a portfolio showcasing my projects and skills.",
    categories: ["Frontend"],
    tags: ["Website", "React", "Astro", "TypeScript"],
    githubUrl: "https://github.com/hhhug000/hhhug000.github.io"
  },
  {
    title: "Omnibase",
    description: "A backend as a service (BaaS) platform that provides a unified API for Postgres and SQLite. Simplifies data storage and auth for developers.",
    categories: ["Backend"],
    tags: ["Database", "Python", "SQL", "API"],
    githubUrl: "https://github.com/hhhug000/omnibase"
  },
  {
    title: "Koda",
    description: "A code editor based on the Monaco Editor. It is built with react, vite, and pywebview.",
    categories: ["Frontend"],
    tags: ["Editor", "React", "Vite", "PyWebView"],
    githubUrl: "https://github.com/hhhug000/koda"
  },
  {
    title: "Koda Mobile",
    description: "Like Koda, but for mobile. It is built with vite and uses Skulpt for python running. It is not intended for actual use, it's one of my school projects.",
    categories: ["Frontend"],
    tags: ["Editor", "React", "Vite", "Vibecode"],
    githubUrl: "https://github.com/hhhug000/koda-mobile"
  },
  {
    title: "Asp",
    description: "A 3d game engine for python. Based on Panda3d. Uses an entity-component-system architecture.",
    categories: ["Libraries"],
    tags: ["Python", "Panda3d", "3D", "Games"],
    githubUrl: "https://github.com/hhhug000/asp"
  },
  {
    title: "JankLang",
    description: "A programming language I made for fun. Made in Python for a Programming Evening competition.",
    categories: ["Libraries"],
    tags: ["Python", "Programming", "Language", "Compiler"],
    githubUrl: "https://github.com/hhhug000/JankLang"
  }
]

export default projects;