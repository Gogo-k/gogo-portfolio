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
  category: "University" | "Hobby" | "Gamejam";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Streamlining a recruiters process",
    summary:
      "A software prototype streamlines the recruiting process, by parsing applicants and ranking them, based on user-defined parameters.",
    description: `The initial university project had a goal of students gaining experience in teamwork, communication, and solving a real-world problem. 
    Through research the group narrowed the project down to a problem statement regarding streamlining the recruitment process. 
    Interviews were conducted with HR representatives from DSB, Jyske Bank, and other companies to gain an understanding on real-world hiring processes and challenges. 
    This project was centered on automating the job application screening process, by developing a command-line prototype in C. 
    The prototype processes text files (job applications) and evaluates them based on user-defined weighted keywords. 
    It ranks candidates, and extracts relevant information, such as their contact information, and key sentences including the keywords, thus streaming the recruiters recruitment process.
    The project was developed using the iterative approach, incorporating feedback to improve the solution. 
    (More information about the project can be read in the documentation/report).`,
    images: ["/images/p1/P1_ss1.png"],
    technologies: ["C"],
    github: "https://github.com/Gogo-k/2021-AAU-Semester-1-Project",
    documentation: "/pdfs/P1.pdf",
    category: "University",
    date: "Fall 2021",
  },
  {
    id: 2,
    title: "Personal Budget and Expense Tracker",
    summary:
      "Web application designed to help students manage their finances via budget and expense tracking.",
    description: `For this project, a full-stack web application was developed, to monitor and manage one's personal finances via budget and expenses tracking. 
    The main demographic is students, with low-income or poor money management habits. 
    The goal of the application is for the users to gain better financial control, and thus reduce their finance-related stress. 
    The project was built using the MVC (Model-View-Controller) architectural/design pattern, to ensure potential scalability of the application. 
    (More information about the project can be read in the documentation/report).`,
    images: [
      "/images/p2/P2_ss1.png",
      "/images/p2/P2_ss2.png",
      "/images/p2/P2_ss3.png",
      "/images/p2/P2_ss4.png",
      "/images/p2/P2_ss5.png",
      "/images/p2/P2_ss6.png",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "EJS",
      "MongoDB",
      "Node.JS",
      "Express.JS",
    ],
    github: "https://github.com/Gogo-k/2022-AAU-Semester-2-Project",
    documentation: "/pdfs/P2.pdf",
    category: "University",
    date: "Spring 2022",
  },
  {
    id: 3,
    title: "Lego Bookers",
    summary:
      " A reservation system for managing seating at a LEGO office, to reduce uncertainty in availability.",
    description: `In this project, a software solution, specifically, a web application was developed for a LEGO office in Billund. 
    The goal was to create a solution that helped manage seating availability at their office, which has a flexible seating arrangement.
    The employees faced challenges regarding seating availability, especially when working in teams. 
    The application allows users to reserve seats in designated office zones either for themselves or their teams, and it also allows them to check the location of colleagues to assist with collaboration. 
    The application was developed using Java and Spring for backend, for the frontend Thymeleaf, HTML, CSS, and JavaScript, and data was stored in a MYSQL database.
    (More information about the project can be read in the documentation/report).`,
    images: [
      "/images/p3/P3_ss1.png",
      "/images/p3/P3_ss2.png",
      "/images/p3/P3_ss3.png",
      "/images/p3/P3_ss4.png",
      "/images/p3/P3_ss5.png",
      "/images/p3/P3_ss6.png",
      "/images/p3/P3_ss7.png",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Spring Boot"],
    github: "",
    documentation: "/pdfs/P3.pdf",
    category: "University",
    date: "Fall 2022",
  },
  {
    id: 4,
    title: "Spark",
    summary:
      "A programming language for beginners, with a simplified syntax, and integrated drawing capabilities .",
    description: `For this project, we had to create a programming language and a compiler, that will compile our language into another language (we chose to compile into Java). 
    The project revolves around designing and implementing "Spark", a new programming language targeted for beginners. 
    The language was based on research on programming challenges for beginners, industry best practices, and expert interviews. 
    Spark is designed with a simplified syntax, having minimal keywords, easy-to-follow grammar rules, and an integrated support for visual programming (via a Java library, called "Processing"). 
    (More information about the project can be read in the documentation/report).`,
    images: [
      "/images/p4/P4_ss1.jpg",
      "/images/p4/P4_ss2.jpg",
      "/images/p4/P4_ss3.png",
      "/images/p4/P4_ss4.jpg",
    ],
    technologies: ["Java", "ANTLR"],
    github: "https://github.com/Gogo-k/2023-AAU-Semester-4-Project",
    documentation: "/pdfs/P4.pdf",
    category: "University",
    date: "Spring 2023",
  },
  {
    id: 5,
    title: "The Educado Project - Web Application",
    summary:
      "A digital learning platform developed to educate waste pickers in Brazil.",
    description: `This project is part of Educado, a digital education platform, with a goal of providing learning resources to waste pickers in Brazil. 
    The project is a collaboration effort between Aalborg University and University of Brasília, supported by Erasmus. 
    My group (group 6), was initially tasked to develop a Virtual Tutor, but after discussions with the Product Owner (PO), 
    it was discovered that the content creation aspect required a major overhaul. 
    The existing content creation system lacked features, and did not align with the project's vision and expectations. 
    The project was developed using an Agile methodology, specifically the Nexus Framework (Scrum Scaled). 
    Our team worked in sprints,  collaborated with other teams, in order to deliver value to the PO.
    (More information about the project can be read in the documentation/report).`,
    images: [
      "/images/p5/P5_ss1.png",
      "/images/p5/P5_ss2.png",
      "/images/p5/P5_ss3.png",
      "/images/p5/P5_ss4.png",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
    ],
    github: "https://github.com/Educado-App",
    documentation: "/pdfs/P5.pdf",
    category: "University",
    date: "Fall 2023",
  },
  {
    id: 6,
    title: "Bachelor Project - Echoboard",
    summary:
      "An Android keyboard with an assistive messaging feature, that showcases how a screen reader interprets your message.",
    description: `Echoboard is an extension of an open-source Android keyboard, OpenBoard, designed to display how a screen reader interprets written messages. 
    The project was developed to raise awareness among sighted users about how their messages are interpreted by screen readers. 
    Echoboard converts user input into a preview box that shows a transcription of how a screen reader would vocalize it, and also provides an option to read the message out loud.
    The keyboard was developed using Android Studio, and written in Java and Kotlin. 
    To access and convert the user's input, Echoboard makes use of Android's Accessibility Service, Text-To-Speech for audio preview, and Vosk Speech-To-Text to generate transcriptions.
    (More information about the project can be read in the documentation/report).`,
    images: ["/images/p6/P6_ss1.jpg"],
    technologies: ["Java", "Kotlin"],
    github: "https://github.com/Gogo-k/2024-AAU-Semester-6-Project/tree/main",
    documentation: "/pdfs/P6.pdf",
    category: "University",
    date: "Spring 2024",
  },
  {
    id: 7,
    title: "The Lego Waitress",
    summary: "A game submission for the Nordic Game Jam 2022.",
    description:
      'A Nordic Game Jam 2022 submission, where we were provided 48h to create a game. Where we recieved the themes "Duplo (Lego)", "Margarita", "(a herb, can\'t remember the name)", and based on these themes we created a game in Unity and C#. The game is a 3D bartender simulator, where the player must collect orders, and serve drinks to customers within a time limit, the faster the player serves the drinks, the higher the score.',
    images: ["/images/gj1/GJ1_ss1.png", "/images/gj1/GJ1_ss2.png"],
    technologies: ["C#"],
    github: "",
    documentation: "https://kimberlyblue.itch.io/lego-bartender",
    category: "Gamejam",
    date: "Spring 2023",
  },
  {
    id: 8,
    title: "One Shot Wonder",
    summary: "A game submission for the Nordic Game Jam 2023.",
    description:
      'A Nordic Game Jam 2023 submission, where we were provided 48h to create a game. From the available themes we chose "Mechanics: Reflection", and created a game in Unity and C#. The game is a 2D shooter, where the player can only shoot once, and must reflect the bullet on mirrors to hit enemies.',
    images: [
      "/images/gj2/GJ2_ss1.png",
      "/images/gj2/GJ2_ss2.png",
      "/images/gj2/GJ2_ss3.png",
      "/images/gj2/GJ2_ss4.png",
    ],
    technologies: ["C#"],
    github: "",
    documentation: "https://gochill.itch.io/one-shot-wonder",
    category: "Gamejam",
    date: "Spring 2024",
  },
  {
    id: 9,
    title: "This website",
    summary:
      "A personal portfolio website, built with Next.js, Tailwind CSS, and TypeScript, designed to present my projects and skills.",
    description:
      "My portfolio website provides insight into my programming journey, presenting who I am (About section), the experiences I've gained, translated into technical skills (Skills section), and the projects I've worked on (Projects section). Within the Projects section, each project includes a detailed explanation, possibly accompanied by links to GitHub repositories and relevant documentation (such as reports). The website is a single-page application, loosely designed in Figma, and deployed via Vercel.",
    images: [
      "/images/port/Port_ss1.jpg",
      "/images/port/Port_ss2.jpg",
      "/images/port/Port_ss3.jpg",
      "/images/port/Port_ss4.jpg",
      "/images/port/Port_ss5.jpg",
    ],
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Gogo-k/gogo-portfolio",
    documentation: "",
    category: "Hobby",
    date: "Spring 2025",
  },
];
