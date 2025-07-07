import Wave1 from "../assets/icons/wave1.svg?react";

function Section({ title, text, children, odd = false }) {
  return (
    <section className={`space-y-16 py-10 basis-64 ${odd ? "bg-neutral-200" : ""}`}>
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{text}</p>
        </div>
        <div className="md:w-1/2 flex flex-wrap gap-3 mt-4 md:mt-0">
          {children}
        </div>
      </div>
    </section>
  );
}

function Button({ href, children, odd = false })
{
  return (
    <a
      href={href}
      className={`px-4 py-2 rounded-full text-sm ${odd ? "bg-gray-50 hover:bg-gray-200" : "bg-gray-200 hover:bg-gray-300"}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const skills = ["JavaScript", "React", "CSS", "HTML", "Tailwind", "Node.js", "MongoDB", "Lua", "C++", "C#"];
  const projects = ["Taggly", "Warble", "Be Fit Beyond Fifty", "Sales Script"];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="space-y-16 py-10 basis-96">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
          {/* Left: Intro Text */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-gray-600">I'm a JavaScript developer with experience in React, Node.js, and compiler design.</p>
          </div>
          {/* Right: Placeholder Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-48 h-48 bg-gray-300 rounded-lg"></div> 
          </div>
        </div>
      </section>

      <Section
        title={"Skills"}
        text={"Here are some of the technologies I work with:"}
        odd={true}
      >
        {skills.map((skill) => (
          <Button
            key={skill}
            href={`/skills/${skill.toLowerCase().replace(/\s+/g, "-")}`}
            odd={true}
          >
            {skill}
          </Button>
        ))}
      </Section>

      <Section
        title={"Projects"}
        text={"Some of the projects I’ve worked on:"}
        odd={false}
      >
        {projects.map((project) => (
          <Button
            key={project}
            href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}
            odd={false}
          >
            {project}
          </Button>
        ))}
      </Section>

      <section>
        <Wave1 className="w-full h-auto text-neutral-200" />
      </section>

      <section className="pb-40 basis-64 dark:bg-gray-600">
        {/* <div className="w-full text-left relative pointer-events-none">
          <Wave1 className="absolute bottom-0 w-full h-auto text-neutral-200" />
        </div> */}
        <div className="flex flex-col md:flex-row flex-wrap max-w-5xl mx-auto px-4">
          <div className="w-full text-left">
            <h3 className="text-gray-600 dark:text-gray-400">// What I can do</h3>
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold">
              Projects
              <span className="opacity-40 select-none">:</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col flex-wrap gap-3 mt-4 md:mt-0">
            <span className="text-3xl opacity-40 select-none">{"["}</span>
            {projects.map((project) => (
              <a className="dark:hover:bg-gray-600 hover:underline" key={project} href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="px-4"></span>
                {/* <span className="opacity-40 select-none">"</span> */}
                <span
                  className={`py-2 rounded-full text-2xl text-blue-300 hover:underline hover:text-blue-200`}
                >
                  {project}
                </span>
                {/* <span className="opacity-40 select-none">"</span> */}
                <span className="opacity-40 select-none">()</span>
                <span className="opacity-40 select-none">{","}</span>
                {/* <span className="text-gray-400">{" // "}</span> */}
              </a>
            ))}
            <span className="text-3xl opacity-40 select-none">{"]"}</span>
          </div>
        </div>
      </section>

      <section className="pb-40 basis-94 dark:bg-gray-700">
        {/* <div className="text-left relative pointer-events-none z-0">
          <Wave2 className="absolute bottom-0 w-full h-auto text-gray-700" />
        </div> */}
        <div className="relative flex flex-col md:flex-row flex-wrap max-w-5xl mx-auto px-4 z-10">
          <div className="w-full text-left">
            <h3 className="text-gray-600 dark:text-gray-400">// Some of the projects I've worked on</h3>
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-semibold">
              Projects
              <span className="opacity-40 select-none">:</span>
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col flex-wrap gap-3 mt-4 md:mt-0">
            <span className="text-3xl opacity-40 select-none">{"["}</span>
            {projects.map((project) => (
              <a className="dark:hover:bg-gray-600 hover:underline" key={project} href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="px-4"></span>
                {/* <span className="opacity-40 select-none">"</span> */}
                <span
                  className={`py-2 rounded-full text-2xl text-blue-300 hover:underline hover:text-blue-200`}
                >
                  {project}
                </span>
                {/* <span className="opacity-40 select-none">"</span> */}
                <span className="opacity-40 select-none">()</span>
                <span className="opacity-40 select-none">{","}</span>
                {/* <span className="text-gray-400">{" // "}</span> */}
              </a>
            ))}
            <span className="text-3xl opacity-40 select-none">{"]"}</span>
          </div>
        </div>
        {/* <div className="relative w-full text-left pointer-events-none z-0">
          <Wave1 className="absolute bottom-0 w-full h-auto text-neutral-200" />
        </div> */}
      </section>

      <Section
        title={"Projects"}
        text={"Some of the projects I’ve worked on:"}
        odd={false}
      >
        {projects.map((project) => (
          <Button
            key={project}
            href={`/projects/${project.toLowerCase().replace(/\s+/g, "-")}`}
            odd={false}
          >
            {project}
          </Button>
        ))}
      </Section>

    </div>
  );
}

