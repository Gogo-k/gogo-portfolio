export default function HomePage() {
  return (
    <>
      {/*Hero Section (about me)*/}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="text-4xl font-[Poppins-Black]">About Me</h1>
        <h1 className="font-[Poppins-Regular]">
          Hello I{"'"}m Goran, a 23-year-old recent graduate software developer
          holding the title of{" "}
          <a
            href="https://your-university-website.com/your-degree-page"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent underline transition font-[Poppins-SemiBold]"
          >
            BACHELOR OF SCIENCE (BSC) IN ENGINEERING (SOFTWARE)
          </a>{" "}
        </h1>
      </section>

      {/*Skills Section?*/}

      {/*Project Section*/}
      <section
        id="projects"
        className="flex flex-col items-center justify-center min-h-screen text-center"
      >
        <h1 className="text-4xl font-[Poppins-Black]">Projects</h1>
      </section>
    </>
  );
}
