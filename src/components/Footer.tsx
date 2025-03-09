//Footer to provide information contact information and social media links

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
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

          {/*Email and Email Icon*/}
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
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Goran Kirovski :{")"}
        </p>
      </div>
    </footer>
  );
}
