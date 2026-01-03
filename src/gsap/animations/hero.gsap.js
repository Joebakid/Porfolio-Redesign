import { gsap } from "gsap";

export function heroIntro(scope) {
  const tl = gsap.timeline();

  tl.from("[data-hero-title]", {
    y: 80,
    opacity: 0,
    stagger: 0.15,
  })
    .from(
      "[data-hero-sub]",
      { y: 40, opacity: 0 },
      "-=0.4"
    )
    .from(
      "[data-hero-cta]",
      { scale: 0.9, opacity: 0 },
      "-=0.3"
    );

  return tl;
}
