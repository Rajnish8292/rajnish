import "./HeroSectionReplica.css";
import HorizontalScroll from "../../ui/HorizontalScroll/HorizontalScroll";
import ImageArrayReplica from "../ImageArrayReplica/ImageArrayReplica";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMainContext } from "@/component/context/MainContextProvider";
export default function HeroSectionReplica() {

  const { cursorRadius, setCursorRadius, cursorPos, cursorRadiusRef  } = useMainContext()

  const maskRef = useRef();
  const triggerRef = useRef()
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

  }, [cursorRadius, cursorPos])

  

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
    <section className="hero_section_replica" ref={maskRef}>
    <div ref={triggerRef} style={{height : "400px", width : "400px", position : "absolute", left : "50%", top : "50%", transform: "translate(-50%, -50%)", zIndex: 1, background:"transparent"}}></div>

      <div className="text_back" style={{ color: "var(--color-shade1)" }}>
        <HorizontalScroll font_size={"var(--font-size-giant)"} />
      </div>

      <div className="showcase_box_wrapper">
        <div className="showcase">
          <ImageArrayReplica time={2} />
        </div>
        <div className="text_front" style={{ color: "var(--color-shade1)" }}>
          <HorizontalScroll font_size={"var(--font-size-giant)"} />
        </div>
      </div>
    </section>
  );
}
