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
    <div className="relative bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl p-6">
      {/* Category Label */}
      <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
        {projects.category}
      </span>

      {/* Project Images (Only show the first image as preview) */}
      <Image
        src={projects.images[0]}
        alt={projects.title}
        width={400}
        height={250}
        className="w-full h-48 object-scale-down rounded-lg"
      />

      {/* Project Info */}
      <h3 className="text-xl font-bold mt-4">{projects.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{projects.description}</p>

      {/* Tech Stack Icons */}
      {/* <div className="flex space-x-2 mt-4">
        {project.techStack.map((tech, index) => (
          <Image
            key={index}
            src={tech.icon}
            alt={tech.name}
            width={24}
            height={24}
          />
        ))}
      </div> */}

      {/* Button to Open Modal for More Details */}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        More info
      </button>
    </div>
  );
}
