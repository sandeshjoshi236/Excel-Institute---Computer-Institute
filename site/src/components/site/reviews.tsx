import { ArrowRight, Star } from "lucide-react";

import { Reveal } from "./reveal";

const facts = [
  { value: "5.0", label: "Average Google rating" },
  { value: "386", label: "Total Google reviews" },
  { value: "Prayagpokhari", label: "Kathmandu, Nepal" },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Reviews</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Trusted By Learners.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="glow-border grid gap-10 rounded-3xl p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="font-display text-6xl font-extrabold text-gradient-blue">
                5.0
              </p>
              <div className="mt-3 flex justify-center gap-1 lg:justify-start" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-primary-glow text-primary-glow"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Based on <span className="text-foreground">386 reviews</span> on Google
              </p>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border bg-surface/50 p-5"
                  >
                    <p className="font-display text-xl font-bold">{fact.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{fact.label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Individual review quotes are not published here yet. Once the
                institute shares its Google Business Profile link, the button
                below will open the full list of verified reviews.
              </p>
              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)]"
              >
                View Reviews
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
