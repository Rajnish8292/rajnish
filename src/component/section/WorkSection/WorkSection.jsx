import "./WorkSection.css";
import { IoStar } from "react-icons/io5";
import { FaCodePullRequest } from "react-icons/fa6";

import Image from "next/image";
import musicblock_logo from "@/assets/musicblock_logo.png";
import algolia_logo from "@/assets/algolia_logo.png";
import fiverr_logo from "@/assets/fiverr_logo.png";
import miraigate_logo from "@/assets/miraigate.jpg"

import bg from "@/assets/bg.png";
export default function WorkSection() {
  return (
    <section>
      <div className="section_title">(03) Work</div>
      <div className="work_container">


                <div className="miraigate">
          <div className="work_heading">Frontend Developer Intern (Igaming)</div>
          <div className="freelance_work work_box">
            <div className="work_detail">
              <div className="work_avatar">
                <Image
                  src={miraigate_logo.src}
                  height={50}
                  width={50}
                  alt="freelancer photo"
                />
              </div>

              <div className="work_info">
                <div className="work_title">Miraigate technologies</div>
                <div className="work_role">
                  Frontend Developer Intern<span className="dot"></span>Remote
                </div>
              </div>
            </div>

            <div className="work_description">
              Shipped 8 production casino games, including Crash, Aviator, Roulette, and a 3D Russian Roulette game, using React, Phaser, Three.js, and WebSockets. Integrated Rive and Spine animations, synchronized REST and WebSocket data with automatic reconnection handling, and optimized rendering through Three.js performance techniques, texture compression, and React memoization to consistently deliver smooth 60 FPS gameplay across desktop and mobile devices.
            </div>
            <div className="tech_stack">
              <span style={{ fontWeight: "bold" }}>Tech Stack :</span>{" "}
              <span
                style={{
                  fontFamily: "oranienbaum",
                  color: "var(--color-shade4)",
                }}
              >
                HTML5, CSS3, JavaScript, TypeScript WebSocket, TailwindCSS, Rive, Spine, Phaser, HTML Canvas
              </span>
            </div>

            <div className="remark">
              <div className="remark_card">
                <div className="remark_title">Internship Duration</div>
                <div className="remark_container">
                  6 month
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="freelance_work_container">
          <div className="work_heading">Freelance</div>
          <div className="freelance_work work_box">
            <div className="work_detail">
              <div className="work_avatar">
                <Image
                  src={fiverr_logo.src}
                  height={50}
                  width={50}
                  alt="freelancer photo"
                />
              </div>

              <div className="work_info">
                <div className="work_title">Christophee Eskidoos</div>
                <div className="work_role">
                  Front-end Developer<span className="dot"></span>Fiverr
                </div>
              </div>
            </div>

            <div className="work_description">
              Successfully delivered multiple freelance projects on time,
              integrating advanced GSAP animations into WordPress sites to
              improve user experience. Developed reusable, scalable UI
              components using HTML5, CSS3, and JavaScript, including 3D
              interactive books and custom sprite animations.
            </div>
            <div className="tech_stack">
              <span style={{ fontWeight: "bold" }}>Tech Stack :</span>{" "}
              <span
                style={{
                  fontFamily: "oranienbaum",
                  color: "var(--color-shade4)",
                }}
              >
                HTML5, CSS3, JavaScript, GSAP, WordPress
              </span>
            </div>

            <div className="remark">
              <div className="remark_card">
                <div className="remark_title">Rating by Client</div>
                <div className="remark_container">
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                  <IoStar />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="open_source_work_container">
          <div className="work_heading">Open source contributor</div>
          <div className="freelance_work work_box">
            <div className="work_detail">
              <div className="work_avatar">
                <Image
                  src={musicblock_logo.src}
                  height={50}
                  width={50}
                  alt="musicblock logo"
                />
              </div>
              <div className="work_info">
                <div className="work_title">MusicBlock</div>
                <div className="work_role">
                  Front-end Developer<span className="dot"></span>Open Source
                </div>
              </div>
            </div>
            <div className="work_description">
              I identified and documented key issues to improve Music Blocks’ UI
              and functionality, fixed critical bugs to enhance reliability and
              user experience, and wrote clean, maintainable code following
              guidelines to ensure high quality and long-term efficiency.
            </div>
            <div className="tech_stack">
              <span style={{ fontWeight: "bold" }}>Tech Stack :</span>
              <span
                style={{
                  fontFamily: "oranienbaum",
                  color: "var(--color-shade4)",
                }}
              >
                HTML5, JavaScript, Git, Github
              </span>
            </div>

            <div className="remark">
              <div className="remark_card">
                <div className="remark_title"></div>
                <div className="remark_container">
                  <FaCodePullRequest style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="challenge_work_container">
          <div className="work_heading">Algolia challenge</div>
          <div className="freelance_work work_box">
            <div className="work_detail">
              <div className="work_avatar">
                <Image
                  src={algolia_logo.src}
                  height={50}
                  width={50}
                  alt="algolia logo"
                />
              </div>
              <div className="work_info">
                <div className="work_title">Algolia MCP Server Challenge</div>
                <div className="work_role">
                  Full-stack Developer<span className="dot"></span>Innovation
                  Challenge
                </div>
              </div>
            </div>
            <div className="work_description">
              I developed Dask in Challenge, which earned recognition from
              senior developers for innovation and high-quality work. I created
              an AI-powered search engine capable of querying 2500+ DSA problems
              using natural language, designed algorithms to reduce AI
              hallucinations for accurate results, optimized performance through
              component-based architecture, and ensured seamless functionality
              with rigorous cross-browser compatibility testing and monitoring.
            </div>
            <div className="tech_stack">
              <span style={{ fontWeight: "bold" }}>Tech Stack :</span>{" "}
              <span
                style={{
                  fontFamily: "oranienbaum",
                  color: "var(--color-shade4)",
                }}
              >
                HTML5, CSS, JavaScript, React.js, Next.js, Algolia MCP Server,
                Gemini 2.5 flash, Algorithms
              </span>
            </div>

            <div className="remark">
              <div className="remark_card">
                <div className="remark_title"></div>
                <div className="remark_container">
                  <FaCodePullRequest style={{ fontSize: "22px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
