import "./HeroSectionReplica.css";
import HorizontalScroll from "../../ui/HorizontalScroll/HorizontalScroll";
import ImageArrayReplica from "../ImageArrayReplica/ImageArrayReplica";
import { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function HeroSectionReplica() {
  const maskRef = useRef();
  const cursor_position = useRef({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e) => {
    e.preventDefault();

    const { clientX, clientY } = e;
    let xPos = clientX + window.scrollX;
    let yPos = clientY + window.scrollY;

    cursor_position.current = { x: xPos, y: yPos };
    let activeRadius = 300;

    if (maskRef.current) {
      if (
        Math.sqrt(
          (xPos - window.innerWidth / 2) ** 2 +
            (yPos - window.innerHeight / 2) ** 2
        ) < activeRadius
      ) {
        gsap.to(maskRef.current, {
          clipPath: `circle(150px at ${cursor_position.current.x}px ${cursor_position.current.y}px)`,
          duration: 0.5, // Smooth animation
          ease: "power2.out",
        });
      } else {
        gsap.to(maskRef.current, {
          clipPath: `circle(50px at ${cursor_position.current.x}px ${cursor_position.current.y}px)`,
          duration: 0.5, // Smooth animation
          ease: "power2.out",
        });
      }
    }
  });

  const windowScrollHandler = useCallback((e) => {
    let activeRadius = 300;

    if (maskRef.current) {
      if (
        Math.sqrt(
          (cursor_position.current.x - window.innerWidth / 2) ** 2 +
            (cursor_position.current.y - window.innerHeight / 2) ** 2
        ) < activeRadius
      ) {
        gsap.to(maskRef.current, {
          clipPath: `circle(150px at ${cursor_position.current.x}px ${
            cursor_position.current.y + window.scrollY
          }px)`,
          duration: 0.5, // Smooth animation
          ease: "power2.out",
        });
      } else {
        gsap.to(maskRef.current, {
          clipPath: `circle(50px at ${cursor_position.current.x}px ${
            cursor_position.current.y + window.scrollY
          }px)`,
          duration: 0.5, // Smooth animation
          ease: "power2.out",
        });
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", windowScrollHandler);
    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, [windowScrollHandler]);

  useEffect(() => {
    if (!maskRef.current) return;
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero_section_replica" ref={maskRef}>
      <div className="text_back" style={{ color: "var(--color-shade1)" }}>
        <HorizontalScroll font_size={"var(--font-size-giant)"} />
      </div>

      <div className="showcase_box_wrapper">
        <div className="showcase">
          {/* <ImageArray time={2} /> */}
          <ImageArrayReplica time={2} />
        </div>
        <div className="text_front" style={{ color: "var(--color-shade1)" }}>
          <HorizontalScroll font_size={"var(--font-size-giant)"} />
        </div>
      </div>
    </section>
  );
}
