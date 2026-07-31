import "./IntroductionSectionReplica.css";
import { useCallback, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMainContext } from "@/component/context/MainContextProvider";

export default function IntroductionSectionReplica() {

  const { cursorRadius, setCursorRadius, cursorPos, cursorRadiusRef  } = useMainContext()

  const maskRef = useRef();
  const triggerRef = useRef(null);
  const cursor_position = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    if(!triggerRef.current) return;

    const mouseenterHandler = () => {

      gsap.to(cursorRadiusRef.current, {
          value : 150,
          duration: 0.5, 
          ease: "power2.out",
          onUpdate : () => {setCursorRadius({value : cursorRadiusRef.current.value})}
      })

    }

    const mouseleaveHandler = () => {
      gsap.to(cursorRadiusRef.current, {
          value : 50,
          duration: 0.5, 
          ease: "power2.out",
          onUpdate : () => {setCursorRadius({value : cursorRadiusRef.current.value})}
      })
    }

    triggerRef.current.addEventListener("mouseenter", mouseenterHandler);
    triggerRef.current.addEventListener("mouseleave", mouseleaveHandler);

    return () => {
        triggerRef.current.removeEventListener("mouseenter", mouseenterHandler);
        triggerRef.current.removeEventListener("mouseleave", mouseleaveHandler);
    }

  }, [])



  useEffect(() => {
    if (!maskRef.current) return;

    const updateClipPath = () => {
      const rect = maskRef.current.getBoundingClientRect();
      const xPos = cursorPos.x - rect.left;
      const yPos = cursorPos.y - rect.top;

      cursor_position.current = { x: xPos, y: yPos };

      maskRef.current.style.clipPath = `circle(${cursorRadius.value}px at ${xPos}px ${yPos}px)`;
    };

    updateClipPath();

    window.addEventListener("scroll", updateClipPath, { passive: true });

    return () => window.removeEventListener("scroll", updateClipPath);
  }, [cursorPos, cursorRadius]);

  useEffect(() => {
    if (!maskRef.current) return;

    const rect = maskRef.current.getBoundingClientRect();

    const xPos = cursorPos.x - rect.left;
    const yPos = cursorPos.y - rect.top;

    cursor_position.current = { x: xPos, y: yPos };

    gsap.to(maskRef.current, {
      clipPath: `circle(${cursorRadius.value}px at ${xPos}px ${yPos}px)`,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto", // important, see below
    });
  }, [cursorPos, cursorRadius]);





  return (
    <section className="intro_section_replica" ref={maskRef}>

      <div ref={triggerRef} style={{height : "100%", width : "40%", position : "absolute", right : 0, top : 0, zIndex: 1, background:"transparent"}}></div>

      <div className="section_title">(01) INTRODUCTION</div>
      <div className="introduction_paragraph">
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
