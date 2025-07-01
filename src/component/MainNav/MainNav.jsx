import { useCallback, useRef, useEffect } from "react"
import GlitchLoadText from "../GlitchLoadText/GlitchLoadText"
import Logo from "../Logo/Logo"
import "./MainNav.css"
import Lenis from "@studio-freight/lenis"
export default function MainNav() {
      const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 1, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

    const scrollTo = useCallback((id) => {
        const elem = document.querySelector(`#${id}`)

        if(elem) {
            lenis.current.scrollTo(elem)
        }

    }, [])
    return (<nav>

    <Logo size={'large'} />

    <div className="links">
        <div className="link" onClick={() => scrollTo("home")}><GlitchLoadText text={'HOME'} onHoverAnimate onLoadAnimate duration={3} speed={15} coefficient={0.9}/></div>
        <div className="link" onClick={() => scrollTo("project")}><GlitchLoadText text={'PROJECT'} onHoverAnimate onLoadAnimate duration={5} speed={15} coefficient={0.9}/></div>
        <div className="link" onClick={() => scrollTo("contact")}><GlitchLoadText text={'CONTACT'} onHoverAnimate onLoadAnimate duration={5} speed={15} coefficient={0.9}/></div>
    </div> 
    </nav>)
}