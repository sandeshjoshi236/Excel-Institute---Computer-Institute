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

export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.18em]">
            EXCEL INSTITUTE
          </p>
          <p className="mt-1 text-[0.65rem] tracking-[0.3em] text-muted-foreground">
            COMPUTER INSTITUTE
          </p>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Building digital skills for a changing world.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label-eyebrow">Explore</p>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="label-eyebrow">Contact</p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="tel:9769330417" className="transition-colors hover:text-foreground">
                9769330417
              </a>
            </li>
            <li>Prayagpokhari, 44600</li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground sm:px-8">
        © Excel Institute - Computer Institute. All rights reserved.
      </p>
    </footer>
  );
}
