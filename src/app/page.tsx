import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";

export default function HomePage() {
  return (
    <>
      {/* <p className="mt-20 text-[var(--text)]/50 md:text-2xl text-lg italic text-center">
        Website is still work in progress
      </p> */}

      {/*About Section*/}
      <About />

      {/*Skills Section?*/}
      <Skills />

      {/*Project Section*/}
      <Project />
    </>
  );
}
