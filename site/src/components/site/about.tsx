import { Hammer, Lightbulb, Repeat } from "lucide-react";

import aboutLab from "@/assets/about-lab.jpg";

import { Reveal } from "./reveal";

const pillars = [
  {
    icon: Lightbulb,
    title: "Learn",
    text: "Build strong fundamentals.",
  },
  {
    icon: Repeat,
    title: "Practice",
    text: "Turn knowledge into practical skills.",
  },
  {
    icon: Hammer,
    title: "Create",
    text: "Use your skills to build real projects.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-8 rounded-[3rem] blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 40% 50%, oklch(0.65 0.19 249 / 20%), transparent 70%)",
              }}
            />
            <img
              src={aboutLab}
              alt="Student writing code on a laptop inside the computer lab"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-full rounded-[2rem] border border-border object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="label-eyebrow">About Excel Institute</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            More Than Just Computer Classes.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Excel Institute is a computer institute in Prayagpokhari, Kathmandu,
            focused on practical computer education and everyday digital skills.
            Learning happens hands-on: you work directly on the computer,
            practise what you learn, and apply it to real tasks.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            The goal is simple — help every student move from understanding a
            concept to confidently using technology on their own.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 100}
                className="glow-border rounded-2xl p-5"
              >
                <pillar.icon className="h-5 w-5 text-primary-glow" />
                <p className="mt-4 font-display text-lg font-bold">{pillar.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{pillar.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
