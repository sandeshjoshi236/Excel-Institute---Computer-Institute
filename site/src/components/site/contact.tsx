import { ArrowRight, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "./reveal";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const courses = [
  "Computer Fundamentals",
  "Office Package",
  "Web Development",
  "Programming",
  "Graphic Design",
  "Digital Skills",
];

const fieldClass =
  "mt-2 w-full rounded-2xl border border-input bg-surface/50 px-4 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-[var(--color-border-strong)] focus:shadow-[var(--shadow-glow)]";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[0-9+\-\s()]{7,15}$/.test(phone)) next.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 5) next.message = "Please add a short message.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Talk To Excel Institute.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="glow-border h-full rounded-3xl p-8">
              <p className="font-display text-xl font-bold">
                Excel Institute - Computer Institute
              </p>
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                  <a href="tel:9769330417" className="hover:text-primary-glow">
                    9769330417
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
                  <span className="text-muted-foreground">
                    Prayagpokhari, 44600
                    <br />
                    Kathmandu, Nepal
                  </span>
                </li>
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                {/* EDITABLE: replace with the institute's exact Google Maps embed URL. */}
                <iframe
                  title="Map showing Prayagpokhari, Kathmandu"
                  src="https://www.google.com/maps?q=Prayagpokhari%2C%20Kathmandu%2C%20Nepal&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0 grayscale-[35%]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} noValidate className="glow-border rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs tracking-wide text-muted-foreground">
                    Full Name
                  </label>
                  <input id="name" name="name" className={fieldClass} placeholder="Your name" />
                  {errors.name && (
                    <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs tracking-wide text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="98XXXXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-xs text-destructive">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-xs tracking-wide text-muted-foreground">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="course" className="text-xs tracking-wide text-muted-foreground">
                    Course Interested In
                  </label>
                  <select id="course" name="course" className={fieldClass} defaultValue={courses[0]}>
                    {courses.map((course) => (
                      <option key={course} value={course} className="bg-surface">
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-xs tracking-wide text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={fieldClass}
                  placeholder="Tell us what you would like to learn"
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-glow)] sm:w-auto"
                style={{ background: "var(--gradient-blue)" }}
              >
                Send Inquiry
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-success">
                {sent
                  ? "Thank you! Your inquiry has been noted — please also call 9769330417 for a quick reply."
                  : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
