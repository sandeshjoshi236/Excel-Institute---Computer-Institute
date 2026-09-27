import { useEffect, useRef, useState } from "react";

import { Reveal } from "./reveal";

function Counter({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const formatted = display.toFixed(decimals);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const items = [
  { value: 5, decimal: true, suffix: " ★", label: "Google Rating" },
  { value: 386, suffix: "", label: "Reviews" },
  { text: "Computer Institute", label: "Specialization" },
  { text: "Prayagpokhari", label: "Location" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 90} className="text-center lg:text-left">
            <p className="font-display text-2xl font-extrabold text-gradient-blue sm:text-4xl">
              {item.text ? (
                item.text
              ) : (
                <Counter
                  value={item.decimal ? 5.0 : (item.value as number)}
                  suffix={item.suffix ?? ""}
                  decimals={item.decimal ? 1 : 0}
                />
              )}
            </p>
            <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
              {item.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
