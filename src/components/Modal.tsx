// A pop-up to showcase the details of the project
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

// Define props for the modal
interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function Modal({ project, onClose }: ModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;
  const totalImages = project.images.length;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + totalImages) % totalImages
    );
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-blend-overlay bg-black/90 backdrop-blur-xs z-50"
      onClick={onClose}
    >
      <div
        // bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative overflow-auto max-h-[90vh]
        className="bg-[var(--primary)] p-6 rounded-lg shadow-lg max-w-5xl w-full relative overflow-auto h-[75vh] max-h-[75vh] flex flex-col justify-between"
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
              className="bg-gray-800 px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Description */}
        <p className="mt-2 text-left">{project.description}</p>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-[var(--background)]/80 text-[var(--text)] rounded-md">
                GitHub
              </button>
            </Link>
          )}
          {project.documentation && (
            <a
              href={project.documentation}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-[var(--background)]/80 text-[var(--text)] rounded-md">
                Documentation
              </button>
            </a>
          )}
        </div>

        {/* Image Display with Navigation Buttons Positioned Correctly */}
        <div className="relative w-full mt-3 flex items-center justify-center">
          {/* Previous Button (On Top of Image) */}
          {totalImages > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
            >
              ←
            </button>
          )}

          {/* Image Display */}
          <div className="relative w-full flex items-center justify-center overflow-hidden">
            <Image
              src={project.images[currentImageIndex]}
              alt={`Project ${currentImageIndex}`}
              width={800}
              height={500}
              className="rounded-lg transition-transform duration-300 width-auto height-auto object-contain"
              priority
            />
          </div>

          {/* Next Button (On Top of Image) */}
          {totalImages > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
            >
              →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
