import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GsapProvider({ children }) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    gsap.defaults({
      ease: "power3.out",
      duration: 0.8,
    });
  }, []);

  return <div ref={scope}>{children}</div>;
}
