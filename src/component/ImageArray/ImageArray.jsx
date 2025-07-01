'use client';

import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
export default function ImageArray({ time }) {
  const ref = useRef([]);

  const init_ref = (index) => (elem) => {
    ref.current[index] = elem;
  };

  useEffect(() => {
    const image_arr = ref.current;

    if (image_arr.length !== 3 || image_arr.some((el) => !el)) return;

    let counter = 0;
    const interval = setInterval(() => {
      image_arr.forEach((elem) => (elem.style.display = 'none'));
      image_arr[(++counter) % image_arr.length].style.display = 'block';
    }, time * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <>
      <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} ref={init_ref(0)} src={image1.src} width="100%" style={{ display: 'block' }} />
      <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} ref={init_ref(1)} src={image2.src} width="100%" style={{ display: 'none' }} />
      <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} ref={init_ref(2)} src={image3.src} width="100%" style={{ display: 'none' }} />
    </>
  );
}
