"use client"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import './SkillSection.css'
import { useRef } from 'react'


export default function SkillSection() {

    gsap.registerPlugin(ScrollTrigger)

    const skill_section_ref = useRef()
    const count_slider_ref = useRef()
    const title_slider_ref = useRef()
    const paragraph_ref = useRef()

    

    useGSAP(() => {
        if(!skill_section_ref.current) return;
        if(!count_slider_ref.current) return;
        if(!title_slider_ref.current) return;
        if(!paragraph_ref.current) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skill_section_ref.current,
                start: 'top top',
                end: 'bottom top',
                pin :true,
                scrub: true,
            }
        })

        const count_slide_height = count_slider_ref.current.children[0].offsetHeight;
        const title_slide_height = title_slider_ref.current.children[0].offsetHeight;
        const line_slide_height =  paragraph_ref.current.children[0].children[0].children[0].offsetHeight;
        tl.to(count_slider_ref.current, {
            y:0,
            duration: 0.1
        })
        .to(title_slider_ref.current, {
            y:0,
            duration:0.1
        }, '<')
        .to([...paragraph_ref.current.children].map((elem) => elem.children[0]), {
            y: 0,
            duration: 0.1
        }, '<')

        .to(count_slider_ref.current, {
            y: `-${count_slide_height}px`
        } )
        .to(title_slider_ref.current, {
            y: `-${title_slide_height}px`,
        }, '<')
        .to([...paragraph_ref.current.children].map((elem) => elem.children[0]), {
            y: `-${line_slide_height}px`
        }, '<')

        .to(count_slider_ref.current, {
            y: `-${2 * count_slide_height}px`
        } )
         .to(title_slider_ref.current, {
            y:  `-${2 * title_slide_height}px`,
        }, '<')
        .to([...paragraph_ref.current.children].map((elem) => elem.children[0]), {
            y: `-${2 * line_slide_height}px`
        }, '<')

        .to(count_slider_ref.current, {
            y: `-${3 * count_slide_height}px`
        } )
         .to(title_slider_ref.current, {
            y:  `-${3 * title_slide_height}px`,
        }, '<')
        .to([...paragraph_ref.current.children].map((elem) => elem.children[0]), {
            y: `-${3 * line_slide_height}px`
        }, '<')

     
    })


    return(<section ref = {skill_section_ref} className="skills_section">
      <div className="section_title">(02) SKILLS</div>
      <div className="skill_wrapper">
        <div className="skill_count">
          <div className="count_number">0</div>
          <div className="count_number">
          <div ref={count_slider_ref} className="slide_wrapper">
            <div className="count_slide">#</div>
            <div className="count_slide">1</div>
            <div className="count_slide">2</div>
            <div className="count_slide">3</div>
          </div>

          </div>
        </div>
        <div className="skill_description">
          <div className="skill_title">
          <div className="title_slide_Wrapper" ref={title_slider_ref}>
                <div className="title_slide">Coding Language</div>
                <div className="title_slide">Front-end development</div>
                <div className="title_slide">Back-end & Dev Ops</div>
                <div className="title_slide">Artifical Intelligence</div>
          </div>
          </div>
          <div className="skill_paragraph" ref={paragraph_ref}>
            <div className="line_wrapper">
                <div className="line_slider">
                <div className="line">JavaScript, C/C++, Python, TypeScript, GLSL</div>
                <div className="line">Have experience in building interactive</div>
                <div className="line">Worked with technologies like Node.js, OAuth</div>
                <div className="line">Have experience with Tensorflow, Keras, MatplotLib</div>
                </div>
            </div>
            <div className="line_wrapper">
                <div className="line_slider">
                <div className="line"></div>
                <div className="line"> front-end using Next.js, React.js, TailwindCSS</div>
                <div className="line">Express.js, MongoDB, RestFul Apis, Docker</div>
                <div className="line"> Scikit-Learb, OpenCV, Numpy, Pandas, CUDA</div>
                </div>
            </div>
             <div className="line_wrapper">
                <div className="line_slider">
                <div className="line"></div>
                <div className="line"> GSAP, Framer-motion, GLSL, ReactThreeFiber</div>
                <div className="line">Git, Github, GCP (Compute Engine), Vercel</div>
                <div className="line"></div>
                </div>
            </div>
             <div className="line_wrapper">
                <div className="line_slider">
                <div className="line"></div>
                <div className="line">wordpress, Webflow.</div>
                <div className="line"></div>
                <div className="line"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
}