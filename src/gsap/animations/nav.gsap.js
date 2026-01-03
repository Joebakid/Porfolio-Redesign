import { gsap } from "gsap";

/**
 * Navbar intro animation
 * SAFE: does not touch translateY
 */
export function navIntro(navEl) {
  if (!navEl) return;

  const items = navEl.querySelectorAll("[data-nav-item]");

  const tl = gsap.timeline();

  tl.from(navEl, {
    opacity: 0.5,
    scale: 0.96,
    duration: 0.6,
    ease: "power3.out",
  }).from(
    items,
    {
      opacity: 1,
      scale: 0.9,
      stagger: 0.08,
      duration: 0.35,
      ease: "power3.out",
    },
    "-=0.3"
  );

  return tl;
}
