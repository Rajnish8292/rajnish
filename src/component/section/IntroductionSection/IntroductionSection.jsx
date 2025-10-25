import "./IntroductionSection.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

export default function IntroductionSection() {
  const intro_ref = useRef();
  const intro_section_ref = useRef();

  useGSAP(() => {
    if (!intro_ref.current || !intro_section_ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(intro_ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: intro_section_ref.current,
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });
  });

  return (
    <section className="intro_section" ref={intro_section_ref}>
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
