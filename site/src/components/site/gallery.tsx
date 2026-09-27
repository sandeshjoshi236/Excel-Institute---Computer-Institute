import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";

import aboutLab from "@/assets/about-lab.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import projectCreative from "@/assets/project-creative.jpg";
import projectPython from "@/assets/project-python.jpg";

import { Reveal } from "./reveal";

const images = [
  { src: heroLab, title: "Computer Laboratory", span: "sm:col-span-2 sm:row-span-2" },
  { src: gallery1, title: "Modern Workstations", span: "" },
  { src: gallery2, title: "Guided Learning", span: "" },
  { src: aboutLab, title: "Hands-On Practice", span: "" },
  { src: projectPython, title: "Programming Class", span: "" },
  { src: projectCreative, title: "Design Sessions", span: "sm:col-span-2" },
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  const active = openIndex === null ? null : images[openIndex];

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Gallery</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Inside Excel Institute
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Placeholder visuals — easy to swap once the institute's own photos
            are available.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[200px]">
          {images.map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View ${image.title}`}
              className={`group relative overflow-hidden rounded-3xl border border-border transition-all duration-500 hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-glow)] ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span
                className="absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.13 0.012 260 / 92%), transparent 62%)",
                }}
              />
              <span className="absolute inset-x-5 bottom-5 flex items-center justify-between text-left">
                <span className="text-sm font-semibold">{image.title}</span>
                <Expand className="h-4 w-4 text-primary-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-80 flex items-center justify-center bg-background/92 p-5 backdrop-blur-xl"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setOpenIndex(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-border"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active.src}
            alt={active.title}
            className="max-h-[82vh] w-auto rounded-3xl border border-border object-contain"
          />
        </div>
      )}
    </section>
  );
}
