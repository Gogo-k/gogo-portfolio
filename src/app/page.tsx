import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/*Hero Section (about me)*/}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 text-center md:text-left space-y-6 md:space-y-0"
      >
        {/* Background "about" text */}
        <h1 className="text-[var(--primary)] absolute text-[6rem] md:text-[12rem] font-black blur-xs uppercase opacity-40 -z-10 md:top-[20%] top-[10%]">
          About
        </h1>

        <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full flex-shrink-0">
          {/* Image */}
          <Image
            src={"/images/breaking-bad.png"}
            alt={"Image of Goran Kirovski"}
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl md:ml-8">
          {/* relative top-20 md:text-[14rem] text-8xl font-black uppercase -z-10 opacity-10 blur-sm */}
          {/* <h1 className="md:text-5xl text-5xl font-black uppercase">ABOUT ME</h1> */}
          {/* Foreground (Information) text */}
          <h2 className="text-2xl md:text-3xl font-bold">
            Hi, I{"'"}m Goran Kirovski
          </h2>
          <p className="mt-2">
            A recent bachelor graduate in Software Engineering from Aalborg
            University Copenhagen. The uni has had a focus on problem-based
            learning and developing real-world solutions. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Nam dolor diam, commodo et varius
            in, scelerisque vel nibh. diam, commodo et varius in, scelerisque
            vel nibh.diam, commodo et varius in, scelerisque vel nibh.diam,
            commodo et varius in, scelerisque vel nibh.diam, commodo et varius
            in, scelerisque vel nibh.diam, commodo et varius in, scelerisque vel
            nibh.diam, commodo et varius in, scelerisque vel nibh.
          </p>
        </div>
      </section>

      {/*Skills Section?*/}

      {/*Project Section*/}
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        {/* <h1 className="section-title">Projects</h1> */}

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 max-w-md sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 gap-8 lg:max-w-7xl mx-4">
          {projects.map((projects) => (
            <ProjectCard key={projects.id} projects={projects} />
          ))}
        </div>
      </section>
    </>
  );
}
