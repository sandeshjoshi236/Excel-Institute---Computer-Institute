import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setDone(true), 1150);
    const t2 = window.setTimeout(() => setHidden(true), 1750);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background transition-opacity duration-500"
      style={{ opacity: done ? 0 : 1 }}
    >
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative text-center">
        <p className="font-display text-2xl font-extrabold tracking-[0.3em] sm:text-4xl">
          EXCEL INSTITUTE
        </p>
        <p className="label-eyebrow mt-3">Computer Institute</p>
        <div className="mx-auto mt-8 h-px w-56 overflow-hidden bg-border sm:w-72">
          <div
            className="h-full w-1/3 animate-sweep"
            style={{ background: "var(--gradient-blue)" }}
          />
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Initializing your learning experience...
        </p>
      </div>
    </div>
  );
}
