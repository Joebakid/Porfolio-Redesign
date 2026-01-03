import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "../components/landing page/Intro";
import About from "../components/landing page/About";
import Experience from "../components/landing page/Experience";
import Education from "../components/landing page/Education";
import Stack from "../components/landing page/Stack";
import Projects from "../components/landing page/project";
import Footer from "../components/landing page/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const triggers = [];

    // Normal sections
    gsap.utils.toArray("[data-reveal]").forEach((section) => {
      const tween = gsap.fromTo(
        section,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        }
      );

      triggers.push(tween.scrollTrigger);
    });

    // Footer (special handling)
    const footerTween = gsap.fromTo(
      "[data-footer]",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-footer]",
          start: "top 90%",
          once: true,
        },
      }
    );

    triggers.push(footerTween.scrollTrigger);

    // ✅ SAFE CLEANUP
    return () => {
      triggers.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <main className="app">
      {/* Intro loads immediately */}
      <Intro />

      <section data-reveal>
        <About />
      </section>

      <section data-reveal>
        <Experience />
      </section>

      <section data-reveal>
        <Education />
      </section>

      <section data-reveal>
        <Stack />
      </section>

      <section data-reveal>
        <Projects />
      </section>

      {/* Footer must NOT be inside data-reveal */}
      <section data-footer>
        <Footer />
      </section>
    </main>
  );
}
