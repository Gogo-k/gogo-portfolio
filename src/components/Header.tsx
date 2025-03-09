// import { useState, useEffect } from "react";
//import Link from "next/link";
//import { Moon, Sun } from "lucide-react";

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   //Theme change
//   const toggleDarkMode = () => {
//     const newTheme = !darkMode;
//     setDarkMode(newTheme);
//     document.documentElement.classList.toggle("dark", newTheme);
//     localStorage.setItem("theme", newTheme ? "dark" : "light");
//   };

// }
"use client";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="font-[Poppins-Medium] text-xl bg-emerald-900 fixed top-0 w-full shadow-md z-50 px-6 py-2">
      <div className="flex items-center justify-between">
        {/*My name left aligned*/}
        <div className="text-2xl font-[Poppins-SemiBold] text-gray-100 flex-1 text-left">
          <h1>Goran Kirovski</h1>
        </div>

        {/* Nav Functions - Center Aligned */}
        <nav className="flex space-x-8 justify-center">
          {/* <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-200 hover:text-white"
          >
            Home
          </Link> */}

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-200 hover:text-white"
          >
            About
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-200 hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-200 hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/*Dark/Light mode right aligned*/}
        <div className="flex-1 text-right">
          <h1 className="text-gray-200 hover:text-white transition px-2 py-1">
            Button
          </h1>
        </div>
      </div>
    </header>

    //Dark/Light mode right aligned

    //create a header component that will be used in all pages

    // <header className="bg-gray-900 shadow p-4">
    //   <nav className="container mx-auto flex justify-between">
    //     <Link href="/" className="text-xl font-bold">
    //       My Portfolio
    //     </Link>
    //     <div className="flex space-x-4">
    //       <Link href="/" className="hover:underline">
    //         Home
    //       </Link>
    //       <Link href="/projects" className="hover:underline">
    //         Projects
    //       </Link>
    //       <Link href="/about" className="hover:underline">
    //         About
    //       </Link>
    //     </div>
    //   </nav>
    // </header>
  );
}
