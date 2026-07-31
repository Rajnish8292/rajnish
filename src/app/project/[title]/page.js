
"use client"

import { useParams } from "next/navigation";
import styles from "./page.module.css"
import { FaArrowLeft } from "react-icons/fa6";
import { PROJECTS } from "@/app/portfolio_data";
import { style } from "framer-motion/client";
import FooterSection from "@/component/section/FooterSection/FooterSection";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
export default function Page() {
    const params = useParams()
    const project_title = params?.title ?? "home";
    const project_detail = PROJECTS.find((p) => (p.title.toLowerCase().split(" ").join("_") == project_title.toLocaleLowerCase() ))



    if(!project_detail) {
        return <div style={{height : "100svh", width: " 100svw", display: "flex", justifyContent: " center", alignItems: " center"}}><h1>Sorry! Project not found.</h1></div>
    }

    return <>
        <div className={styles.project_page}>
             <div className="back_button" onClick={() => {window.location.href = "/portfolio/" + project_detail.type.split(" ").join("_").toLowerCase()}}><FaArrowLeft /> Back to {project_detail.type}</div>

             <div className={styles.project_container}>
                <div className={styles.video_container}>
                    <video src={project_detail.video} width={"100%"} autoPlay></video>
                </div>
                <div className={styles.detail_container}>
                    <div className={styles.category_capsule}>{project_detail.category}</div>
                    <div className={styles.project_title}>{project_detail.title}</div>
                    <div className={styles.project_description}>{project_detail.description}</div>
                    <div className={styles.project_stack}>Tech Stack : {project_detail.techStack.join(" ,")}</div>
                    <div className={styles.link_container}>
                        <div className={styles.link_button} 
                            onClick={() => {window.location.href = project_detail.url}}
                        >Live Demo <GoArrowUpRight /></div>
                        <div className={[styles.link_button, styles.link_button_github].join(" ")}><FaGithub /> Github</div>
                    </div>
                </div>
             </div>
    </div>
    <FooterSection />
    </>
}