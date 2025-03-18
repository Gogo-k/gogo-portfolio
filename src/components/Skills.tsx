import {
  DiJava as Java,
  DiJavascript as JS,
  DiPython as Python,
  DiMongodb as MongoDB,
  DiHtml5 as HTML,
  DiCss3 as CSS,
} from "react-icons/di";
import {
  SiNodedotjs as NodeJs,
  SiTailwindcss as TailwindCSS,
  SiReact as React,
  SiNextdotjs as NextJS,
  SiExpress as Express,
  SiTypescript as TypeScript,
  SiC as C,
} from "react-icons/si";
import { TbBrandCSharp as CSharp } from "react-icons/tb";
import { PiFileSql as SQL } from "react-icons/pi";
import Image from "next/image";

type SkillCardProps = {
  Icon: React.ElementType;
  name: string;
};

function SkillCard({ Icon, name }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--primary)] p-6 rounded-lg w-full hover:scale-120 transition">
      <Icon className="text-5xl mb-4" />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center min-h-screen text-center md:mb-96 mb-24"
    >
      {/* Background "skills" text */}
      {/*md:absolute relative text-[var(--primary)] text-[6rem] md:text-[12rem] font-black blur-xs uppercase opacity-100 -z-10 md:-top-[1%]  */}
      <h1 className="relative text-[var(--primary)] text-[6rem] md:text-[12rem] font-black uppercase opacity-100 -z-10">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 mt-2 px-4 w-full max-w-2xl">
        {/* Programming Languages */}
        <SkillCard Icon={Java} name="Java" />
        <SkillCard Icon={CSharp} name="C#" />
        <SkillCard Icon={C} name="C" />
        <SkillCard Icon={Python} name="Python" />
        <SkillCard Icon={TypeScript} name="TypeScript" />
        <SkillCard Icon={JS} name="JavaScript" />

        {/* Frameworks & Libraries */}
        <SkillCard Icon={React} name="React" />
        <SkillCard Icon={NextJS} name="Next.js" />
        <SkillCard Icon={TailwindCSS} name="Tailwind" />

        {/* Backend & Databases */}
        <SkillCard Icon={NodeJs} name="Node.js" />
        <SkillCard Icon={Express} name="Express" />
        <SkillCard Icon={MongoDB} name="MongoDB" />
        <SkillCard Icon={SQL} name="SQL" />

        {/* Other */}
        <SkillCard Icon={HTML} name="HTML" />
        <SkillCard Icon={CSS} name="CSS" />
        <SkillCard
          Icon={() => (
            <Image
              src="/icons/agile.svg"
              alt="Agile Development"
              width={48}
              height={48}
              className="w-12 h-12 invert mb-2"
            />
          )}
          name="Agile"
        />
      </div>
      <p className="text-lg font-semibold mt-8 italic">...and more.</p>
    </section>
  );
}
