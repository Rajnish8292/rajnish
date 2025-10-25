"use client";

import image1 from "@/assets/image1_replica.jpg";
import image2 from "@/assets/image2_replica.jpg";
import image3 from "@/assets/image3_replica.jpg";
import { useEffect, useRef } from "react";
export default function ImageArrayReplica({ time }) {
  const ref = useRef([]);

  const init_ref = (index) => (elem) => {
    ref.current[index] = elem;
  };

  useEffect(() => {
    const image_arr = ref.current;

    if (image_arr.length !== 3 || image_arr.some((el) => !el)) return;

    // Wait until all images are fully loaded
    const imagesLoaded = image_arr.map((img) => {
      return new Promise((resolve) => {
        if (img.complete) resolve();
        else img.onload = resolve;
      });
    });

    Promise.all(imagesLoaded).then(() => {
      let counter = 0;
      const interval = setInterval(() => {
        image_arr.forEach((elem) => (elem.style.display = "none"));
        image_arr[++counter % image_arr.length].style.display = "block";
      }, time * 1000);

      // Clear interval on unmount
      return () => clearInterval(interval);
    });
  }, [time]);

  return (
    <>
      <img
        ref={init_ref(0)}
        src={image1.src}
        width="100%"
        style={{ display: "block", filter: "brightness(110%)" }}
        data-clip-active="true"
      />
      <img
        ref={init_ref(1)}
        src={image2.src}
        width="100%"
        style={{ display: "none" }}
        data-clip-active="true"
      />
      <img
        ref={init_ref(2)}
        src={image3.src}
        width="100%"
        style={{ display: "none" }}
        data-clip-active="true"
      />
    </>
  );
}
