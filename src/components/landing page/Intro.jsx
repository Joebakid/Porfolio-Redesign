import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import profileImg from "./img/img.jpeg";

export default function Intro() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from("[data-intro-title]", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          "[data-intro-text]",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          "[data-intro-img]",
          {
            scale: 0.85,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container-main flex items-center justify-center flex-col mt-10"
    >
      <div className="flex gap-1.5 items-center">
        <div className="flex-1">
          <h1
            data-intro-title
            className="text-2xl font-extrabold md:text-3xl"
          >
            Hi, I’m Joseph Bawo
          </h1>

          <p
            data-intro-text
            className="text-[15px] md:text-[18px] mt-1"
          >
            Building modern web applications, tools, and digital products that
            scale.
          </p>
        </div>

        <img
          data-intro-img
          src={profileImg}
          alt="Joseph Bawo"
          className="w-[100px] h-[100px] flex-shrink-0 rounded-full object-cover"
        />
      </div>

      <div className="py-2" />
    </section>
  );
}
