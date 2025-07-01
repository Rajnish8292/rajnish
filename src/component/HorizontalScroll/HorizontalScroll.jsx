import './HorizontalScroll.css'
import { FaArrowLeftLong } from "react-icons/fa6";
export default function HorizontalScroll({font_size}) {
    return (<>
        <div className="scroll_wrapper">
            <div className="slide_primary" style={{fontSize: font_size}}>
                <div style={{display:'flex',alignItems: 'center', justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>PROBLEM</div> <div style={{opacity: '0'}}>.</div> <div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}} >SOLVING</div></div>
                <FaArrowLeftLong />
                <div style={{display:'flex',alignItems: 'center',  justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>CREATIVE</div> <div style={{opacity: '0'}}>.</div><div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}}>THINKING</div></div>
                <FaArrowLeftLong />
                <div style={{display:'flex',alignItems: 'center',  justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>PASSIONATE</div> <div style={{opacity: '0'}}>.</div><div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}}>WORK</div></div>
                <FaArrowLeftLong />
            </div>
            <div className="slide_secondary" style={{fontSize: font_size}}>
                <div style={{display:'flex',alignItems: 'center', justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>PROBLEM</div> <div style={{opacity: '0'}}>.</div> <div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}} >SOLVING</div></div>
                <FaArrowLeftLong />
                <div style={{display:'flex',alignItems: 'center',  justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>CREATIVE</div> <div style={{opacity: '0'}}>.</div><div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}}>THINKING</div></div>
                <FaArrowLeftLong />
                <div style={{display:'flex',alignItems: 'center',  justifyContent:'center'}}><div style={{fontFamily:'NeueMontreal-bold'}}>PASSIONATE</div> <div style={{opacity: '0'}}>.</div><div style={{fontFamily:'oranienbaum', transform:'translate(0, 4%)'}}>WORK</div></div>
                <FaArrowLeftLong />
            </div>
        </div>
    </>)
}