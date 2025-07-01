import "./FooterSection.css"
import GlitchLoadText from "../GlitchLoadText/GlitchLoadText"
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll"
import { useCallback } from "react"
export default function FooterSection() {
    const openLink = useCallback((link) => {
        window.open(link, "_blank")
    })
    const copyMail = useCallback(() => {
        navigator.clipboard.writeText('rajnish81018@gmail.com')
        .then(() => {
            alert("Mail copied!")
        })
        .catch((err) => {})
    })
    return (<>
        <div className="footer" id="contact">
        <HorizontalScroll font_size={'var(--font-size-giant)'} />
        <div className="contact_container">
            <div className="text" onClick={() => openLink('https://www.linkedin.com/in/rajnish-raj-9139602a4/')}><GlitchLoadText text={'LinkedIn'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>
            <div className="text" onClick={() => copyMail()}><GlitchLoadText text={'rajnish81018@gmail.com'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>
            <div className="text" onClick={() => openLink('https://github.com/Rajnish8292')}><GlitchLoadText text={'Github'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>

        </div>
        <div className="name_container">
            <div className="small_text">Final year at <span style={{fontWeight:"bold"}}>NIT Mizoram</span> :)</div>
            <div className="big_text">RAJNISH RAJ</div>
        </div>
    </div>
    </>)
}