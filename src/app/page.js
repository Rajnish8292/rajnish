'use client'

import HorizontalScroll from "@/component/HorizontalScroll/HorizontalScroll";
import MainNav from "@/component/MainNav/MainNav";
import ImageArray from "@/component/ImageArray/ImageArray";
import SkillSection from "@/component/SkillSection/SkillSection";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ProjectSection from "@/component/ProjectSection/ProjectSection";
import FooterSection from "@/component/FooterSection/FooterSection";
export default function page() {
  const intro_ref = useRef()
  const intro_section_ref = useRef()

  useGSAP(() => {
    if(!intro_ref.current || !intro_section_ref.current) return;
    gsap.registerPlugin(ScrollTrigger)    

    gsap.from(intro_ref.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: intro_section_ref.current,
        start: 'top center',
        end: 'top top',
        scrub: true,
      }
    })

  })
  return (<>
    <MainNav />

    <section className="hero_section" id="home">
      <div className="text_back">
        <HorizontalScroll font_size={'var(--font-size-giant)'}/>
      </div>

      <div className="showcase_box_wrapper">
        <div className="showcase">
          <ImageArray time={2} />
        </div>
        <div className="text_front">
          <HorizontalScroll font_size={'var(--font-size-giant)'} />
        </div>
      </div>
    </section>


    <section className="intro_section" ref={intro_section_ref}>
      <div className="section_title">(01) INTRODUCTION</div>
      <div className="introduction_paragraph" ref={intro_ref}>
        <div>Rajnish is a passionate Front-end Developer,</div>
        <div>And Problem Solver. Experienced in building Modern, Scalable,   </div>
        <div>and futuristic website that can help to engage visitors.</div>
      </div>
    </section>

    <SkillSection />
    <ProjectSection />
    <FooterSection />
    
  </>)
}