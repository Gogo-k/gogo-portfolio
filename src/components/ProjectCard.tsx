// A project card to preview the project

//This component will be a box where a picutre of a project will be displayed, along with a title (name of the project)
//and a description of the project.
import Image from "next/image";
import { Project } from "../data/projects";

type ProjectProps = {
  projects: Project;
};

export default function ProjectCard({ projects }: ProjectProps) {
  return (
    <div className="bg-[var(--primary)] flex-row shadow-[var(--primary)] rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl w-full max-w-xs">
      <div className="relative">
        {/* Category Label (Fixed inside the card) */}
        <span className="absolute right-2 top-2 text-[var(--primary)] bg-[var(--tetriary)] text-xs px-3 py-1 rounded-full">
          {projects.date}
        </span>
        {/* Category Label (Fixed inside the card) */}
        <span className="absolute left-2 top-2 text-[var(--primary)] bg-[var(--tetriary)] text-xs px-3 py-1 rounded-full">
          {projects.category}
        </span>
        {/* Project Images (Only show the first image as preview) */}
        <div className="flex h-48 w-full">
          <Image
            src={projects.images[0]}
            alt={projects.title}
            width={400}
            height={250}
            className="rounded-t-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start h-58 mt-4">
        {/* Project Info */}
        <h3 className="text-xl font-bold mx-4">{projects.title}</h3>
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-2 justify-center">
          {projects.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm mt-2 text-left mx-4 text-[var(--tetriary)] opacity-30">
          {projects.summary}
        </p>

        {/* Button to Open Modal for More Details */}
        <button className="mt-auto w-full px-6 py-3 mb-2">More Info</button>
      </div>
    </div>
  );
}
