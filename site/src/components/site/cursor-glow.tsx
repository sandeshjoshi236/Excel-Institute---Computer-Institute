import { useEffect, useRef, useState } from "react";

/**
 * Soft blue radial glow that trails the pointer. Desktop / fine-pointer only,
 * GPU friendly (transform on a single fixed layer), disabled for reduced motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-30 h-[600px] w-[600px] rounded-full opacity-70 mix-blend-screen will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.65 0.19 249 / 16%) 0%, oklch(0.72 0.16 225 / 7%) 38%, transparent 68%)",
      }}
    />
  );
}
