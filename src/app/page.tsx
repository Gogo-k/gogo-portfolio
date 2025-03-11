import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <>
      {/*Hero Section (about me)*/}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        {/* Background (Seciton) text */}
        {/* absolute text-gray-200 text-9xl font-bold uppercase -z-10 opacity-30 */}
        <h1 className="section-title">ABOUT ME</h1>

        {/* Foreground (Information) text */}
        <h1 className="font-regular translate-y-4">
          Hello I{"'"}m Goran, a 23-year-old recent graduate software developer
          holding the title of{" "}
          <a
            href="https://your-university-website.com/your-degree-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent underline transition font-semibold"
          >
            BACHELOR OF SCIENCE (BSC) IN ENGINEERING (SOFTWARE)
          </a>{" "}
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget{" "}
          <br />
          magna blandit, aliquet nunc sed, luctus massa. Nullam non sem vel
          <br />
          lacus feugiat egestas. Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit. Etiam fringilla tempor finibus. Aliquam eu enim id mi
          <br />
          maximus euismod. Praesent nunc sapien, vulputate non augue in, <br />
          tincidunt facilisis augue. Vivamus et neque at nibh mattis malesuada.
          <br />
          Praesent vitae leo commodo, auctor turpis sit amet, cursus odio. Sed
          <br />
          risus risus, lacinia quis sagittis et, imperdiet vel augue. Curabitur{" "}
          <br />
          sed tellus non tortor auctor porttitor. Aenean convallis at massa sit
          amet feugiat.
          <br />
        </h1>
      </section>

      {/*Skills Section?*/}

      {/*Project Section*/}
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="section-title">Projects</h1>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {projects.map((projects) => (
            <ProjectCard key={projects.id} projects={projects} />
          ))}
        </div>
      </section>
    </>
  );
}
