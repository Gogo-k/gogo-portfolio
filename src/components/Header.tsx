"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="font-medium text-xl bg-[var(--primary)]/99  mx-auto fixed top-0 w-full shadow-lg z-50 px-6 py-3">
      <div className="flex items-center justify-between">
        {/*My name left aligned*/}
        <div className="text-2xl font-semibold flex-1 text-left">
          <h1>Goran Kirovski</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Nav Functions - Right Aligned */}
        <nav className="hidden space-x-8 justify-center sm:block">
          <Link
            to="about"
            smooth={true}
            duration={100}
            className="cursor-pointer hover:text-[var(--secondary)]"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={100}
            className="cursor-pointer hover:text-[var(--secondary)]"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={100}
            className="cursor-pointer hover:text-[var(--secondary)]"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={100}
            className="cursor-pointer hover:text-[var(--secondary)]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation Panel */}
        <div
          className={`fixed inset-0 bg-[var(--primary)] flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } sm:hidden`}
        >
          <button
            className="absolute top-5 right-5"
            onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </button>

          <Link
            to="about"
            smooth={true}
            duration={100}
            offset={-120}
            className="cursor-pointer hover:text-[var(--secondary)]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={100}
            offset={-40}
            className="cursor-pointer hover:text-[var(--secondary)]"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={100}
            offset={-80}
            className="cursor-pointer hover:text-[var(--secondary)]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className="cursor-pointer hover:text-[var(--secondary)]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
