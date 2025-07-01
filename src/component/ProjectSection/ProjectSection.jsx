import GlitchLoadText from "../GlitchLoadText/GlitchLoadText"
import "./ProjectSection.css"
import Image from "next/image"
import project1 from "@/assets/projects/1.png"
import project2 from "@/assets/projects/2.png"
import project3 from "@/assets/projects/3.png"
import project4 from "@/assets/projects/4.png"
import project5 from "@/assets/projects/5.png"
import gsap from "gsap"
import { useCallback, useEffect, useRef } from "react"

export default function ProjectSection() {
    const projects_arr = useRef([])


    const projects_ref = (elem) => {
        if(elem) projects_arr.current.push(elem)

    }
    const openLink = useCallback((link) => {
        window.open(link, "_blank")
    })

    const handle_mouse_enter = useCallback((e) => {
        e.preventDefault();
        const ease_type =  "circ.out"
        const animation_duration = 0.6
        const [x, y] = [e.offsetX, e.offsetY]
        const {offsetHeight: height, offsetWidth: width} = e.currentTarget
        if(e.currentTarget.children[2]) {
            e.currentTarget.children[2].style.display = 'block'
            gsap.to(e.currentTarget.children[2], {
                opacity: 1,
                scale: 1,
            })
        }
        if(e.currentTarget.children[1]) {
            // background animation logic
            if(y <= height/2) {
            console.log({target: e.currentTarget})
            gsap.to(e.currentTarget.children[1].children[0], {
                y: 0,
                duration: animation_duration,
                ease: ease_type,
            })
        } else {
            gsap.to(e.currentTarget.children[1].children[1], {
                y: 0,
                duration: animation_duration,
                ease: ease_type,
            })
        }
        }
        
    }, [])

    const handle_mouse_move = (e) => {
        e.preventDefault();
        const ease_type =  "power1.inOut"
        const animation_duration = 0.5
        const [x, y] = [e.offsetX, e.offsetY]
        // console.log({elem: e.currentTarget.children[2]})
        if(e.currentTarget.children[2]) {
            gsap.to(e.currentTarget.children[2], {
                x : x,
                y : y,
                overwrite:"auto",
                duration:animation_duration,
                // ease: ease_type
            })
        }
    }

    const handle_mouse_leave = useCallback((e) => {
        e.preventDefault()
        const ease_type = "circ.out"
        const animation_duration = 0.6
        if(e.currentTarget.children[2]) {
            
            gsap.to(e.currentTarget.children[2], {
                opacity: 0,
                scale: 0.5,
                onComplete: () => {
                    if(e && e.currentTarget) {
                        e.currentTarget.children[2].style.display = 'block'
                    }
                }
            })
        }
        if(e.currentTarget.children[1]) {
            gsap.to(e.currentTarget.children[1].children[0], {
                y: "-100%",
                duration: animation_duration,
                ease: ease_type,
            })
            gsap.to(e.currentTarget.children[1].children[1], {
                y: '100%',
                duration: animation_duration,
                ease: ease_type,
            })
        }

    }, [])

    useEffect(() => {   
        projects_arr.current.forEach((elem, index) => {
            elem.addEventListener('mouseenter', handle_mouse_enter)
            elem.addEventListener('mouseleave', handle_mouse_leave)
            elem.addEventListener('mousemove', handle_mouse_move)
        })

        return () => {
            projects_arr.current = []
        }

    })

    return (<section style={{height:'100vh', width:'100vw'}} id="project">
      <div className="section_title">(03) PROJECTS</div>
    <div className="project_container">
        <div ref={projects_ref} className="project" style={{borderTop:"2px solid var(--color-shade5)"}} onClick={() => openLink('https://github.com/Rajnish8292/dining_table_configurator')}>
            <div className="project_wrapper">DINING TABLE CONFIGURATOR</div>
            <div  className="bg_wrapper">
                <div className="top_slide"></div>
                <div className="bottom_slide"></div>
            </div>
            <div className="floating_image">
                <Image src={project1.src} fill style={{objectFit: 'cover'}} />
            </div>
            

            {/* <div>Arrow</div>
            <div>Image</div> */}
        </div>
        <div ref={projects_ref} className="project" onClick={() => openLink('https://github.com/Rajnish8292/mustang')}>
            <div className="project_wrapper">MUSTANG SHOWCASE WEBSITE</div>
            <div  className="bg_wrapper">
                <div className="top_slide"></div>
                <div className="bottom_slide"></div>
            </div>
            <div className="floating_image">
                <Image src={project2.src} fill style={{objectFit: 'cover'}} />
            </div>
            {/* <div>Arrow</div>
            <div>Image</div> */}
        </div>
        <div ref={projects_ref} className="project" onClick={() => openLink('https://github.com/Rajnish8292/search_algorithm_visulazier')}>
            <div className="project_wrapper">GRAPH ALGORITHM VISUALIZER</div>
            <div  className="bg_wrapper">
                <div className="top_slide"></div>
                <div className="bottom_slide"></div>
            </div>
            <div className="floating_image">
                <Image src={project3.src} fill style={{objectFit: 'cover'}} />
            </div>
            {/* <div>Arrow</div>
            <div>Image</div> */}
        </div>
        <div ref={projects_ref} className="project" onClick={() => openLink('https://github.com/Rajnish8292/bloggingWebsite')}>
            <div className="project_wrapper">BLOGGING WEBSITE</div>
            <div  className="bg_wrapper">
                <div className="top_slide"></div>
                <div className="bottom_slide"></div>
            </div>
            <div className="floating_image">
                <Image src={project4.src} fill style={{objectFit: 'cover'}} />
            </div>
            {/* <div>Arrow</div>
            <div>Image</div> */}
        </div>
        
        <div ref={projects_ref} className="project" onClick={() => openLink('https://github.com/Rajnish8292/Brain-tumor-model')}>
            <div className="project_wrapper">BRAIN TUMOR CLASSIFIER</div>
            <div  className="bg_wrapper">
                <div className="top_slide"></div>
                <div className="bottom_slide"></div>
            </div>
            <div className="floating_image">
                <Image src={project5.src} fill style={{objectFit: 'cover'}} />
            </div>
            {/* <div>Arrow</div>
            <div>Image</div> */}
        </div>

    </div>
    </section>)
}
