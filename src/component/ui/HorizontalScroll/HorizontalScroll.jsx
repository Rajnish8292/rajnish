import "./HorizontalScroll.css";
import { FaArrowLeftLong } from "react-icons/fa6";

// Helper component to avoid duplicating code
function SlideItem() {
  return (
    <div className="slide_content">
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "NeueMontreal-bold" }} data-clip-active="true">
          PROBLEM
        </span>
        <span style={{ opacity: 0, margin: "0 0.25em" }} data-clip-active="true">
          .
        </span>
        <span
          style={{
            fontFamily: "oranienbaum",
            transform: "translate(0, 4%)",
          }}
          data-clip-active="true"
        >
          SOLVING
        </span>
      </div>

      <FaArrowLeftLong data-clip-active="true" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "NeueMontreal-bold" }} data-clip-active="true">
          CREATIVE
        </span>
        <span style={{ opacity: 0, margin: "0 0.25em" }} data-clip-active="true">
          .
        </span>
        <span
          style={{
            fontFamily: "oranienbaum",
            transform: "translate(0, 4%)",
          }}
          data-clip-active="true"
        >
          THINKING
        </span>
      </div>

      <FaArrowLeftLong data-clip-active="true" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontFamily: "NeueMontreal-bold" }} data-clip-active="true">
          PASSIONATE
        </span>
        <span style={{ opacity: 0, margin: "0 0.25em" }} data-clip-active="true">
          .
        </span>
        <span
          style={{
            fontFamily: "oranienbaum",
            transform: "translate(0, 4%)",
          }}
          data-clip-active="true"
        >
          WORK
        </span>
      </div>

      <FaArrowLeftLong data-clip-active="true" />
    </div>
  );
}

export default function HorizontalScroll({ font_size }) {
  return (
    <div className="scroll_wrapper" style={{ pointerEvents: "none", fontSize: font_size }}>
      <div className="slide_track">
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  );
}