import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1️⃣ Reset scroll instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // 2️⃣ Fade page in
    gsap.fromTo(
      "#page",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        clearProps: "opacity",
      }
    );
  }, [pathname]);

  return null;
}
