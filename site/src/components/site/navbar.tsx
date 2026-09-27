import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Typing Game", href: "#typing-game" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-80px 0px -45% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      style={scrolled ? { borderBottomColor: "var(--color-border-strong)" } : undefined}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a href="#home" className="group flex flex-col leading-none">
          <span className="font-display text-base font-extrabold tracking-[0.18em] sm:text-lg">
            EXCEL INSTITUTE
          </span>
          <span className="mt-1 text-[0.6rem] font-semibold tracking-[0.3em] text-muted-foreground">
            COMPUTER INSTITUTE
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground",
                  active === link.href.slice(1) && "text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 transition-transform duration-300",
                    active === link.href.slice(1) && "scale-x-100",
                  )}
                  style={{ background: "var(--gradient-blue)" }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] sm:inline-flex"
            style={{ background: "var(--gradient-blue)" }}
          >
            Join Now
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
          >
            <span
              className={cn(
                "h-px w-5 bg-foreground transition-all duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-5 bg-foreground transition-all duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-blue)" }}
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
