//Footer to provide information contact information and social media links

//TODO : There isn't balance especially when looking at the header, fix either one.

import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--primary)] py-6 mt-10 h-auto">
      <div className="container mx-auto items-center text-center px-6">
        {/* <h2 className="text-[var(--text)] text-[4rem] md:text-[6rem] font-black uppercase opacity-100 -z-10">
          Contact Me
        </h2> */}
        {/* Socials container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-24">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <Link
              href="https://www.linkedin.com/in/goran-kirovski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} className="inline w-6 h-6 mx-2" />
            </Link>
            <p>Goran-Kirovski</p>
          </div>

          {/*Email and Email Icon*/}
          <div className="flex flex-col items-center">
            <Link
              href="mailto: goran.kirovski.2001@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={32} className="inline w-6 h-6 mx-2" />
            </Link>
            <p>goran.kirovski.2001@gmail.com</p>
          </div>

          {/* Github */}
          <div className="flex flex-col items-center">
            <Link
              href="https://github.com/gogo-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} className="inline w-6 h-6 mx-2" />
            </Link>
            <p>Gogo-k</p>
          </div>
        </div>

        {/* <p className="pt-8 align-bottom">
          &copy; {new Date().getFullYear()} Goran Kirovski :{")"}{" "}
        </p> */}
      </div>
    </footer>
  );
}
