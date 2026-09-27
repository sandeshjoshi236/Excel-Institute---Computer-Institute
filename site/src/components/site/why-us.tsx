import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Practical Learning",
    text: "Learn by doing rather than only watching.",
  },
  {
    title: "Digital Skills",
    text: "Develop skills relevant to modern technology.",
  },
  {
    title: "Student Focus",
    text: "A learning experience centered around student growth.",
  },
  {
    title: "Technology Environment",
    text: "Learning presented in a modern digital environment.",
  },
  {
    title: "Skill Development",
    text: "Build knowledge through continuous practice.",
  },
  {
    title: "Kathmandu Location",
    text: "Conveniently located at Prayagpokhari.",
  },
];

const journey = [
  { step: "01", title: "Choose", text: "Select the skill you want to learn." },
  { step: "02", title: "Learn", text: "Understand the concepts." },
  { step: "03", title: "Practice", text: "Apply your knowledge." },
  { step: "04", title: "Build", text: "Create projects and practical work." },
  { step: "05", title: "Grow", text: "Continue developing your digital skills." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Why Excel Institute</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Why Learn With Us?
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 110}>
              <div className="glow-border relative h-full rounded-3xl p-7">
                <span className="font-display text-3xl font-extrabold text-primary/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{reason.text}</p>
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 lg:block"
                  style={{ background: "var(--gradient-blue)", opacity: 0.35 }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal className="max-w-2xl">
            <p className="label-eyebrow">Student Journey</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              From First Lesson To Real Skills.
            </h2>
          </Reveal>

          <ol className="relative mt-12 grid gap-6 md:grid-cols-5">
            <span
              className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px md:block"
              style={{ background: "var(--gradient-blue)", opacity: 0.25 }}
            />
            {journey.map((item, index) => (
              <Reveal as="li" key={item.step} delay={index * 120} className="relative">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-xs font-bold"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
