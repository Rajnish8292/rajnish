"use client"

import { PROJECTS } from "@/app/portfolio_data";
import GlitchLoadText from "@/component/ui/GlitchLoadText/GlitchLoadText";
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa6";

export default function Layout({children}) {
    const params = useParams()
    const tab = params?.tab ?? "home";
    const [currentTab, setCurrentTab] = useState(tab)

    const router = useRouter()

    const all_tabs = [...new Set(PROJECTS.map((p) => p.type.toLowerCase()))]

   
    

    return <>
        <div className="portfolio_nav">

            <div className="portfolio_header_conatainer">
                <div className="back_button" onClick={() => {window.location.href = "/"}}><FaArrowLeft /> Home</div>
                <div className="portfolio_header">
                    <GlitchLoadText
                        text={currentTab.split("_").join(" ").toLowerCase()}
                        onLoadAnimate
                        duration={3}
                        speed={15}
                        coefficient={0.9}
                    />
                </div>
            </div>

            <div className="tabs_container">
                {all_tabs.map((t) => <div className={`tab ${(t.toLowerCase() == currentTab.split("_").join(" ").toLowerCase()) ? "tab_active" : ""} `} onClick={() => {router.push("/portfolio/" + t.split(" ").join("_"))}}>{t}</div>)}
            </div>

        </div>
        {children}
    </>
}