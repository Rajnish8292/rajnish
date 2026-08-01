"use client"

import { PROJECTS } from "@/app/portfolio_data";
import GlitchLoadText from "@/component/ui/GlitchLoadText/GlitchLoadText";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { FaArrowLeft } from "react-icons/fa6";

export default function Layout({ children }) {
    const params = useParams()
    const tab = params?.tab ?? "home";
    const [currentTab, setCurrentTab] = useState(tab)

    const router = useRouter()
    const tabsContainerRef = useRef(null)
    const tabRefs = useRef({})

    const all_tabs = [...new Set(PROJECTS.map((p) => p.type.toLowerCase()))]

    const normalizedCurrentTab = currentTab.split("_").join(" ").toLowerCase()

    // Keep currentTab in sync whenever the route param changes
    // (covers browser back/forward too, not just clicks)
    useEffect(() => {
        setCurrentTab(tab)
    }, [tab])

    // Center the active tab whenever it changes, after layout has settled
    useEffect(() => {
        const el = tabRefs.current[normalizedCurrentTab]
        const container = tabsContainerRef.current
        if (!el || !container) return

        const frame = requestAnimationFrame(() => {
            const targetScrollLeft =
                el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2

            container.scrollTo({
                left: targetScrollLeft,
                behavior: "smooth",
            })
        })

        return () => cancelAnimationFrame(frame)
    }, [normalizedCurrentTab])

    const handleTabClick = (t) => {
        router.push("/portfolio/" + t.split(" ").join("_"))
    }

    return <>
        <div className="portfolio_nav">

            <div className="portfolio_header_conatainer">
                <div className="back_button" onClick={() => { window.location.href = "/" }}><FaArrowLeft /> Home</div>
                <div className="portfolio_header">
                    <GlitchLoadText
                        text={normalizedCurrentTab}
                        onLoadAnimate
                        duration={3}
                        speed={15}
                        coefficient={0.9}
                    />
                </div>
            </div>

            <div className="tabs_container" ref={tabsContainerRef}>
                {all_tabs.map((t) => (
                    <div
                        key={t}
                        ref={(el) => (tabRefs.current[t] = el)}
                        className={`tab ${(t.toLowerCase() == normalizedCurrentTab) ? "tab_active" : ""}`}
                        onClick={() => handleTabClick(t)}
                    >
                        {t}
                    </div>
                ))}
            </div>

        </div>
        {children}
    </>
}