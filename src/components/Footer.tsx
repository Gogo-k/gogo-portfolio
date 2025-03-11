//Footer to provide information contact information and social media links

//TODO : There isn't balance especially when looking at the header, fix either one.

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center text-center px-6">
        {/* Socials container */}
        <div className="flex justify-center items-center gap-12">
          {/* Github */}

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <Link
              href="https://www.linkedin.com/in/goran-kirovski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin-icon.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="inline w-6 h-6 mx-2"
              />
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
              <Image
                src="/icons/email-icon.svg"
                alt="Email"
                width={24}
                height={24}
                className="inline w-6 h-6 mx-2"
              />
            </Link>
            <p>goran.kirovski.2001@gmail.com</p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="https://github.com/gogo-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="inline w-6 h-6 mx-2"
              />
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
