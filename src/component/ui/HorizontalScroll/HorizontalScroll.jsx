import "./HorizontalScroll.css";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function HorizontalScroll({ font_size }) {
  return (
    <>
      <div className="scroll_wrapper" style={{ pointerEvents: "none" }}>
        <div className="slide_primary" style={{ fontSize: font_size }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              PROBLEM
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>{" "}
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              SOLVING
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              CREATIVE
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              THINKING
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              PASSIONATE
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              WORK
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
        </div>
        <div className="slide_secondary" style={{ fontSize: font_size }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              PROBLEM
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>{" "}
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              SOLVING
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              CREATIVE
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              THINKING
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{ fontFamily: "NeueMontreal-bold" }}
              data-clip-active="true"
            >
              PASSIONATE
            </div>{" "}
            <div style={{ opacity: "0" }} data-clip-active="true">
              .
            </div>
            <div
              style={{
                fontFamily: "oranienbaum",
                transform: "translate(0, 4%)",
              }}
              data-clip-active="true"
            >
              WORK
            </div>
          </div>
          <FaArrowLeftLong data-clip-active="true" />
        </div>
      </div>
    </>
  );
}
