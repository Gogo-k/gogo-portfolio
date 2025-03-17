import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const sortedProjects = [...projects].sort((a, b) => {
  const getYear = (date: string) => parseInt(date.match(/\d{4}/)![0]);
  const getSeason = (date: string) => (date.startsWith("Fall") ? 1 : 0);

  return (
    getYear(b.date) - getYear(a.date) || getSeason(b.date) - getSeason(a.date)
  );
});

export default function Project() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen text-center mb-32"
    >
      {/* Section title -> old "text-[var(--primary)] text-[4rem] md:text-[12rem] font-black blur-xs uppercase opacity-90 -z-10" */}
      <h1 className="text-[var(--primary)] text-[4rem] md:text-[12rem] font-black uppercase opacity-100 -z-10">
        Projects
      </h1>
      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 max-w-md sm:grid-cols-2 sm:max-w-2xl lg:grid-cols-3 gap-8 lg:max-w-7xl mx-4 mt-8">
        {sortedProjects.map((projects) => (
          <ProjectCard key={projects.id} projects={projects} />
        ))}
      </div>
    </section>
  );
}
