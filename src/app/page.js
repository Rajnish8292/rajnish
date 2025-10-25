"use client";

import HorizontalScroll from "@/component/ui/HorizontalScroll/HorizontalScroll";
import MainNav from "@/component/ui/MainNav/MainNav";
import ImageArray from "@/component/ui/ImageArray/ImageArray";
import SkillSection from "@/component/section/SkillSection/SkillSection";
import ProjectSection from "@/component/section/ProjectSection/ProjectSection";
import FooterSection from "@/component/section/FooterSection/FooterSection";
import HeroSectionReplica from "@/component/replica/HeroSectionReplica/HeroSectionReplica";
import IntroductionSection from "@/component/section/IntroductionSection/IntroductionSection";
import IntroductionSectionReplica from "@/component/replica/IntroductionSectionReplica/IntroductionSectionReplica";
import WorkSection from "@/component/section/WorkSection/WorkSection";

export default function page() {
  return (
    <>
      <MainNav />
      <div className="section_wrapper">
        <section className="hero_section" id="home">
          <div className="text_back">
            <HorizontalScroll font_size={"var(--font-size-giant)"} />
          </div>

          <div className="showcase_box_wrapper">
            <div className="showcase">
              <ImageArray time={2} />
            </div>
            <div className="text_front">
              <HorizontalScroll font_size={"var(--font-size-giant)"} />
            </div>
          </div>
        </section>
        <HeroSectionReplica />
      </div>
      <div className="section_wrapper">
        <IntroductionSection />
        <IntroductionSectionReplica />
      </div>
      <div className="section_wrapper">
        <SkillSection />
      </div>

      <div className="section_wrapper">
        <WorkSection />
      </div>

      <div className="section_wrapper" style={{ marginTop: "50px" }}>
        <ProjectSection />
      </div>

      <div className="section_wrapper">
        <FooterSection />
      </div>
    </>
  );
}
