import { ArrowRight, MapPin, Star } from "lucide-react";

import heroLab from "@/assets/hero-lab.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 animate-pulse-glow rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.19 249 / 22%), transparent 65%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <p className="label-eyebrow">Excel Institute • Computer Education</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Build Skills.
            <br />
            <span className="text-gradient-blue">Create Your Future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Learn practical computer and digital skills in a modern learning
            environment designed to help you move confidently into the digital
            world.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-blue)" }}
            >
              Explore Courses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#typing-game"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]"
            >
              Start Learning
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-primary-glow text-primary-glow"
                  />
                ))}
              </span>
              <span className="font-semibold text-foreground">5.0</span>
              <span>• 386 Reviews</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-glow" />
              Prayagpokhari, Kathmandu
            </span>
          </div>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-10 rounded-[3rem] blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, oklch(0.65 0.19 249 / 28%), transparent 70%)",
            }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]">
            <img
              src={heroLab}
              alt="Students learning programming at computers in a modern computer laboratory"
              width={1280}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.13 0.012 260 / 75%), transparent 55%)",
              }}
            />
          </div>

          <div className="absolute -left-3 top-8 animate-drift rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-xl sm:-left-8">
            <p className="font-display text-xl font-extrabold">386</p>
            <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              REVIEWS
            </p>
          </div>

          <div
            className="absolute -right-2 top-1/3 animate-drift rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-xl sm:-right-6"
            style={{ animationDelay: "1.5s" }}
          >
            <p className="font-display text-xl font-extrabold">5.0 ★</p>
            <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground">
              GOOGLE RATING
            </p>
          </div>

          <div
            className="absolute -bottom-5 left-1/2 animate-drift -translate-x-1/2 rounded-2xl border border-border bg-background/70 px-5 py-3 backdrop-blur-xl"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm font-semibold">Computer Education</p>
          </div>
        </div>
      </div>
    </section>
  );
}
