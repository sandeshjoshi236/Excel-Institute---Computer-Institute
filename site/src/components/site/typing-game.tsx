import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

const SENTENCES = [
  "Technology changes the way we learn and create.",
  "Practice makes your digital skills stronger.",
  "Great ideas become powerful when you build them.",
  "Every expert once started with the very first lesson.",
  "Typing faster gives you more time to think clearly.",
];

type Status = "idle" | "running" | "finished";

export function TypingGame() {
  const [status, setStatus] = useState<Status>("idle");
  const [sentence, setSentence] = useState(SENTENCES[0]!);
  const [typed, setTyped] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status !== "running") return;
    const id = window.setInterval(() => {
      if (startRef.current) {
        setElapsed((performance.now() - startRef.current) / 1000);
      }
    }, 100);
    return () => window.clearInterval(id);
  }, [status]);

  const correctChars = useMemo(() => {
    let count = 0;
    for (let i = 0; i < typed.length; i += 1) {
      if (typed[i] === sentence[i]) count += 1;
    }
    return count;
  }, [typed, sentence]);

  const accuracy = typed.length ? Math.round((correctChars / typed.length) * 100) : 100;
  const minutes = elapsed / 60;
  const wpm = minutes > 0 ? Math.max(0, Math.round(correctChars / 5 / minutes)) : 0;
  const score = status === "finished" ? Math.round(wpm * (accuracy / 100) * 10) : 0;

  const start = useCallback(() => {
    const next = SENTENCES[Math.floor(Math.random() * SENTENCES.length)]!;
    setSentence(next);
    setTyped("");
    setElapsed(0);
    startRef.current = performance.now();
    setStatus("running");
    window.setTimeout(() => inputRef.current?.focus(), 30);
  }, []);

  const onChange = (value: string) => {
    if (status !== "running") return;
    const next = value.slice(0, sentence.length);
    setTyped(next);
    if (next.length === sentence.length) {
      if (startRef.current) setElapsed((performance.now() - startRef.current) / 1000);
      setStatus("finished");
    }
  };

  const metrics = [
    { label: "WPM", value: wpm },
    { label: "Accuracy", value: `${accuracy}%` },
    { label: "Time", value: `${elapsed.toFixed(1)}s` },
    { label: "Score", value: score },
  ];

  return (
    <section id="typing-game" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 animate-pulse-glow rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.19 249 / 16%), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="label-eyebrow">Interactive</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Challenge Your Typing Speed.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="glow-border rounded-3xl p-6 text-left sm:p-10">
            <p className="font-display text-lg font-bold">Typing Challenge</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Type the sentence below as quickly and accurately as possible.
            </p>

            <p
              className="mt-7 rounded-2xl border border-border bg-surface/60 p-5 font-mono text-base leading-relaxed sm:text-lg"
              aria-live="polite"
            >
              {sentence.split("").map((char, index) => {
                const typedChar = typed[index];
                const state =
                  typedChar === undefined
                    ? "pending"
                    : typedChar === char
                      ? "correct"
                      : "wrong";
                return (
                  <span
                    key={`${char}-${index}`}
                    className={cn(
                      "transition-colors duration-150",
                      state === "pending" && "text-muted-foreground",
                      state === "correct" && "text-primary-glow",
                      state === "wrong" &&
                        "rounded-sm bg-destructive/25 text-destructive-foreground",
                      status === "running" &&
                        index === typed.length &&
                        "border-b-2 border-primary",
                    )}
                  >
                    {char}
                  </span>
                );
              })}
            </p>

            <label htmlFor="typing-input" className="sr-only">
              Type the sentence
            </label>
            <input
              id="typing-input"
              ref={inputRef}
              value={typed}
              disabled={status !== "running"}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              onChange={(event) => onChange(event.target.value)}
              placeholder={
                status === "running" ? "Start typing..." : "Press Start Game to begin"
              }
              className="mt-5 w-full rounded-2xl border border-input bg-background/60 px-5 py-4 text-base outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-[var(--color-border-strong)] focus:shadow-[var(--shadow-glow)] disabled:opacity-60"
            />

            <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border bg-surface/50 px-4 py-4 text-center"
                >
                  <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-extrabold text-gradient-blue">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={start}
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
                style={{ background: "var(--gradient-blue)" }}
              >
                {status === "idle" ? "Start Game" : "Restart"}
              </button>
              {status === "finished" && (
                <div className="text-sm">
                  <p className="font-semibold">Great work! Keep practicing.</p>
                  <p className="text-muted-foreground">Ready to learn more?</p>
                </div>
              )}
            </div>

            {status === "finished" && (
              <a
                href="#courses"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-glow"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
