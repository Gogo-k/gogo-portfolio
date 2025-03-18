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
      {/* md:absolute relative text-[var(--primary)] text-[6rem] md:text-[12rem] font-black blur-xs uppercase opacity-80 -z-10 md:top-[20%]  */}
      <h1 className="text-[var(--primary)] text-[6rem] md:text-[12rem] font-black uppercase opacity-80">
        About
      </h1>

      <div className="relative flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left space-y-6 md:space-y-0">
        <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full flex-shrink-0">
          {/* Image */}
          <Image
            src={"/images/cv.jpg"}
            alt={"Image of Goran Kirovski"}
            width={150}
            height={150}
            className="w-full h-full object-cover scale-110 -translate-x-1"
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
            learning and developing real-world solutions. I{"'"}ve gained a lot
            of practical experience developing software in a group setting based
            on agile methodologies, which has helped me improve my collaboration
            and problem-solving skills. I{"'"}m looking for a place where I can
            continue to learn and put my skills in a professional setting. If
            you want to know more about me, feel free to{" "}
            <Link
              to="contact"
              smooth={true}
              duration={100}
              className="cursor-pointer italic underline"
            >
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
