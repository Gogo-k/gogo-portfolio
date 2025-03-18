export type Project = {
  id: number;
  title: string;
  summary: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  documentation: string;
  date: `${"Spring" | "Fall"} ${number}`;
  category: "university" | "hobby" | "gamejam";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Streamlining a recruiters process",
    summary:
      "A software prototype streamlines the recruiting process, by parsing applicants and ranking them, based on user-defined parameters.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["C"],
    github: "",
    documentation: "",
    category: "university",
    date: "Fall 2021",
  },
  {
    id: 2,
    title: "Personal Budget and Expense Tracker",
    summary:
      "Web application designed to help students manage their finances via budget and expense tracking.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "MongoDB",
      "Node.JS",
      "Express.JS",
    ],
    github: "",
    documentation: "",
    category: "university",
    date: "Spring 2022",
  },
  {
    id: 3,
    title: "Lego Bookers",
    summary: "Project 3 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
    date: "Fall 2022",
  },
  {
    id: 4,
    title: "Spark",
    summary: "A programming language for beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
    date: "Spring 2023",
  },
  {
    id: 5,
    title: "The Educado Project - Web Application",
    summary:
      "A digital learning platform developed to educate waste pickers in Brazil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
    date: "Fall 2023",
  },
  {
    id: 6,
    title: "Bachelor Project - Echoboard",
    summary:
      "An Android keyboard showcasing how a screen reader interprets your message",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["Java", "Kotlin"],
    github: "",
    documentation: "",
    category: "university",
    date: "Spring 2024",
  },
  {
    id: 7,
    title: "The Lego Waitress",
    summary:
      "A software prototype streamlines the recruiting process, by parsing applicants and ranking them, based on user-defined parameters.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["C#"],
    github: "",
    documentation: "https://kimberlyblue.itch.io/lego-bartender",
    category: "gamejam",
    date: "Spring 2023",
  },
  {
    id: 8,
    title: "One Shot Wonder",
    summary:
      "A software prototype streamlines the recruiting process, by parsing applicants and ranking them, based on user-defined parameters.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["C#"],
    github: "",
    documentation: "https://gochill.itch.io/one-shot-wonder",
    category: "gamejam",
    date: "Spring 2024",
  },
  {
    id: 9,
    title: "This website",
    summary:
      "A personal portfolio website, built with Next.js, Tailwind CSS, and TypeScript, designed to present my projects and skills.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "hobby",
    date: "Spring 2025",
  },
];
