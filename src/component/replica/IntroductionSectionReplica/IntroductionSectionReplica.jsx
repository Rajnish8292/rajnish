import "./IntroductionSectionReplica.css";
import { useCallback, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function IntroductionSectionReplica() {
  const intro_ref = useRef();
  const intro_section_ref = useRef();

  // store viewport cursor position (clientX/clientY)
  const cursor_position = useRef({
    clientX: window.innerWidth * 0.8,
    clientY: window.innerHeight / 2,
  });

  // helper to apply clipPath using element-local coords
  const applyClip = useCallback((clientX, clientY) => {
    const el = intro_section_ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    // element-local coords
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;

    // distance check (use viewport coords for distance)
    const distance = Math.hypot(
      clientX - window.innerWidth * 0.8,
      clientY - window.innerHeight / 2
    );
    const radius = distance < 300 ? 150 : 50;

    gsap.to(el, {
      clipPath: `circle(${radius}px at ${Math.round(localX)}px ${Math.round(
        localY
      )}px)`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      // store viewport coords
      cursor_position.current = { clientX: e.clientX, clientY: e.clientY };
      applyClip(e.clientX, e.clientY);
    },
    [applyClip]
  );

  const handleWindowScroll = useCallback(() => {
    // on scroll, recalc local coords from stored viewport coords
    const { clientX, clientY } = cursor_position.current;
    applyClip(clientX, clientY);
  }, [applyClip]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleWindowScroll, { passive: true });

    // set initial clip so it's visible on load
    applyClip(cursor_position.current.clientX, cursor_position.current.clientY);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [handleMouseMove, handleWindowScroll, applyClip]);

  useGSAP(() => {
    if (!intro_ref.current || !intro_section_ref.current) return;
    gsap.from(intro_ref.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: intro_section_ref.current,
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });
  });

  return (
    <section className="intro_section_replica" ref={intro_section_ref}>
      <div className="section_title">(01) INTRODUCTION</div>
      <div className="introduction_paragraph" ref={intro_ref}>
        <div>
          <span>Rajnish</span> is a passionate{" "}
          <span style={{ fontFamily: "oranienbaum" }}>Front-end Developer</span>
          ,
        </div>
        <div>
          And Problem Solver. Experienced in building Modern, Scalable,{" "}
        </div>
        <div>and futuristic website that can help to engage visitors.</div>
      </div>
    </section>
  );
}
