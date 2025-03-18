// Modal.tsx - Handles displaying project details in a pop-up
"use client";

import React from "react";
import Image from "next/image";
import type { Project } from "../data/projects";

// Define props for the modal
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-blend-overlay bg-black/80 backdrop-blur-xs z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--primary)] p-6 rounded-lg shadow-lg max-w-2xl w-full relative overflow-auto max-h-[120vh] "
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl bg-amber-950 rounded-2xl size-[2rem] z-51"
          onClick={onClose}
        >
          ✖
        </button>
        {/* Project Content */}

        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <span className="text-sm text-gray-600">
          {project.date} | {project.category}
        </span>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-700 mt-2">{project.description}</p>

        {/* Links */}
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository
          </a>
          {project.documentation && (
            <a
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-4"
            >
              Documentation
            </a>
          )}
          {/* Project Images (Basic Display for Now) */}
          <div className="">
            {project.images.map((image, index) => (
              <div key={index} className="relative h-62 mt-2">
                <Image
                  src={image}
                  alt={`Project ${index}`}
                  layout="fill"
                  objectFit="object-cover"
                  className="rounded-md"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
