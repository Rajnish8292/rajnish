import "./FooterSection.css"
import GlitchLoadText from "../GlitchLoadText/GlitchLoadText"
import HorizontalScroll from "../HorizontalScroll/HorizontalScroll"
export default function FooterSection() {
    
    return (<>
    
        <div className="footer" id="contact">
        <HorizontalScroll font_size={'var(--font-size-giant)'} />
        <div className="contact_container">
            <div className="text"><GlitchLoadText text={'LinkedIn'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>
            <div className="text"><GlitchLoadText text={'rajnish81018@gmail.com'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>
            <div className="text"><GlitchLoadText text={'Github'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>

        </div>
        <div className="name_container">
            <div className="small_text">Final year at <span style={{fontWeight:"bold"}}>NIT Mizoram</span> :)</div>
            <div className="big_text">RAJNISH RAJ</div>
        </div>
    </div>
    </>)
}