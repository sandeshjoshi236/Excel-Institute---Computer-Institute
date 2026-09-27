import { Phone } from "lucide-react";

import { Reveal } from "./reveal";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-border-strong)] px-6 py-20 text-center sm:px-16">
            <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.65 0.19 249 / 30%), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                Your Next Skill Starts Here.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Take the first step toward stronger digital skills.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                  style={{ background: "var(--gradient-blue)" }}
                >
                  Explore Courses
                </a>
                <a
                  href="tel:9769330417"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]"
                >
                  <Phone className="h-4 w-4 text-primary-glow" />
                  Call 9769330417
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
