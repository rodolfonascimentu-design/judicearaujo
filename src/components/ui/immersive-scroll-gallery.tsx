"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface iImmersiveScrollGalleryProps {
  images?: { src: string; scale: null }[];
  className?: string;
}

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[25vh] top-[27vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[25vh] -left-[22.5vw]",
];

const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = [],
  className = "",
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const scales = [scale4, scale5, scale6, scale8, scale9, scale10];

  return (
    <div ref={container} className={`h-screen relative overflow-hidden ${className}`}>
      {images.map(({ src }, index) => (
        <motion.div
          key={index}
          style={{ scale: scales[index % scales.length] }}
          className="w-full h-full absolute top-0 flex items-center justify-center"
        >
          <div className={`relative ${IMAGE_STYLES[index % IMAGE_STYLES.length]}`}>
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover rounded-[2px]"
              loading="lazy"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImmersiveScrollGallery;
