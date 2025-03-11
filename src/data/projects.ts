export type Project = {
  id: number;
  title: string;
  summary: string;
  description: string;
  images: string[];
  technologies: string[];
  github: string;
  documentation: string;
  category: "university" | "hobby" | "gamejam";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    summary: "Project 1 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "hobby",
  },
  {
    id: 2,
    title: "Project 2",
    summary: "Project 2 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
  },
  {
    id: 3,
    title: "Project 3",
    summary: "Project 3 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
  },
  {
    id: 4,
    title: "Project 4",
    summary: "Project 4 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
  },
  {
    id: 5,
    title: "Project 5",
    summary: "Project 5 is so cool",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fringilla tempor finibus.",
    images: ["/images/breaking-bad.png"],
    technologies: ["React", "TypeScript", "TailwindCSS"],
    github: "",
    documentation: "",
    category: "university",
  },
];
