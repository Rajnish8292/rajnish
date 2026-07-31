"use client";

import { PROJECTS } from "@/app/portfolio_data";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Page() {
  const params = useParams();
  const current_tab = params?.tab ?? "home";

  const filtered = PROJECTS.filter(
    (p) => p.type.toLocaleLowerCase().split(" ").join("_") === current_tab.toLocaleLowerCase()
  );

  return (
    <motion.div
      className="portfolio_container"
      key={current_tab}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {filtered.map((p, index) => (
        <motion.div
          key={index}
          className="portfolio_item"
          variants={item}
          style={{
            background: `url('${p.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => {window.location.href = "/project/" + p.title.toLocaleLowerCase().split(" ").join("_")}}
        >
            {/* <div className="title_overlay">
                <div className="title_text">{p.title}</div>
            </div> */}
        </motion.div>
      ))}
    </motion.div>
  );
}