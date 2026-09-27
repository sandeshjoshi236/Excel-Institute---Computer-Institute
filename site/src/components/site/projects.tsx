import { ArrowRight } from "lucide-react";

import projectBusiness from "@/assets/project-business.jpg";
import projectCreative from "@/assets/project-creative.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectPython from "@/assets/project-python.jpg";

import { Reveal } from "./reveal";

const projects = [
  {
    image: projectPortfolio,
    alt: "Dark personal portfolio website design on a laptop",
    category: "Web Development",
    title: "Personal Portfolio",
    text: "Build a professional personal website.",
    tags: ["HTML", "CSS", "Layout"],
  },
  {
    image: projectBusiness,
    alt: "Business website design shown on a desktop monitor",
    category: "Web Development",
    title: "Business Website",
    text: "Create a responsive website for a real business.",
    tags: ["Responsive", "UI", "Content"],
  },
  {
    image: projectPython,
    alt: "Python source code on a dark screen",
    category: "Programming",
    title: "Python Mini Project",
    text: "Build a beginner-friendly Python application.",
    tags: ["Python", "Logic", "Functions"],
  },
  {
    image: projectCreative,
    alt: "Designer working on a creative digital layout",
    category: "Design + Code",
    title: "Creative Web Project",
    text: "Combine design and coding into an interactive experience.",
    tags: ["Design", "JavaScript", "Animation"],
  },
];

export function Projects() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Featured Projects</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Learn By Building.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Example project ideas students can work towards while studying.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="article"
              delay={(index % 2) * 120}
              className="group"
            >
              <div className="glow-border h-full overflow-hidden rounded-3xl">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.13 0.012 260 / 90%), transparent 60%)",
                    }}
                  />
                </div>
                <div className="p-7">
                  <p className="label-eyebrow">{project.category}</p>
                  <h3 className="mt-3 font-display text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[0.7rem] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow"
                  >
                    Explore Project
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
