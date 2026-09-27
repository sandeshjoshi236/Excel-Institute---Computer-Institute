import {
  ArrowRight,
  Braces,
  FileSpreadsheet,
  Globe,
  Monitor,
  Palette,
  Smartphone,
} from "lucide-react";

import { Reveal } from "./reveal";

const courses = [
  {
    icon: Monitor,
    title: "Computer Fundamentals",
    text: "Build strong computer basics.",
    tags: ["Hardware", "Windows", "Internet"],
  },
  {
    icon: FileSpreadsheet,
    title: "Office Package",
    text: "Develop practical productivity skills.",
    tags: ["Word", "Excel", "PowerPoint"],
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Learn how modern websites are created.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: Braces,
    title: "Programming",
    text: "Develop logical thinking and coding skills.",
    tags: ["Logic", "Python", "Problem solving"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    text: "Explore digital design and creative tools.",
    tags: ["Layout", "Colour", "Typography"],
  },
  {
    icon: Smartphone,
    title: "Digital Skills",
    text: "Develop useful modern computer skills.",
    tags: ["Email", "Cloud", "Online tools"],
  },
];

export function Courses() {
  return (
    <section id="courses" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Courses</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Skills For The Digital World.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Course areas taught at Excel Institute. Contact us for the current
            schedule and details.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Reveal
              key={course.title}
              as="article"
              delay={(index % 3) * 110}
              className="group"
            >
              <div className="glow-border relative h-full overflow-hidden rounded-3xl p-7">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.65 0.19 249 / 40%), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface transition-transform duration-500 group-hover:-translate-y-1">
                    <course.icon className="h-5 w-5 text-primary-glow" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {course.text}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-[0.7rem] tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow"
                  >
                    Explore Course
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
