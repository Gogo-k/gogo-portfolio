"use client";
import Image from "next/image";
import { Link } from "react-scroll";

export default function About() {
  return (
    /*Hero Section (about me)*/
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 mb-24"
    >
      {/* Background "about" text*/}
      <h1 className="relative  text-[6rem] md:text-[12rem] font-black uppercase">
        <div className="absolute left-1/2 -translate-x-1/2 right-[50%] top-[10%] h-[6rem] md:h-[12rem] w-sm md:w-3xl bg-[var(--primary)] rounded-tr-full rounded-bl-full"></div>
        <span className="relative z-10 text-[var(--text)]">About</span>
      </h1>

      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-left space-y-6 md:space-y-0">
        <div className="w-32 h-32 md:w-48 md:h-48 overflow-hidden rounded-full flex-shrink-0">
          {/* Image */}
          <Image
            src={"/images/cv.jpg"}
            alt={"Image of Goran Kirovski"}
            width={450}
            height={450}
            className="w-full h-full object-cover scale-100 object-[50%_15%] transform rotate-357"
          />
        </div>
        <div className="max-w-2xl md:ml-8">
          {/* About text */}
          <h2 className="text-2xl md:text-3xl font-bold">
            Hi, I{"'"}m Goran Kirovski,
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold opacity-70">
            A Software Engineer.
          </h2>
          <p className="mt-2">
            I{"'"}m a recent bachelor graduate in Software from Aalborg
            University Copenhagen, where I{"'"}ve gained experience in
            full-stack development, Agile development, and problem solving. I
            {"'"}m looking for an environment where I can apply my skills and it
            challenges me, so that I can continue to learn and develop. I{"'"}m
            seeking opportunities as a software engineer, where I can contribute
            to meaningful projects, so if you{"'"}re looking for someone with my
            background, or have a role I fit, feel free to{" "}
            <Link
              to="contact"
              smooth={true}
              duration={100}
              className="cursor-pointer italic underline"
            >
              contact me.
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
