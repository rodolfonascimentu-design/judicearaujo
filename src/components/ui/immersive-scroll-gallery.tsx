"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface iImmersiveScrollGalleryProps {
  images?: { src: string; scale: null }[];
  className?: string;
}

const IMAGE_STYLES = [
  "w-[25vw] h-[25vh]",
  "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]",
  "w-[20vw] h-[55vh] -top-[15vh] -left-[25vw]",
  "w-[25vw] h-[25vh] left-[27.5vw]",
  "w-[20vw] h-[30vh] top-[30vh] left-[5vw]",
  "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]",
  "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]",
];

const springConfig = { stiffness: 80, damping: 30, mass: 0.5 };

const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images = [],
  className = "",
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const scale25 = useTransform(smoothProgress, [0, 1], [1, 2.5]);
  const scale5 = useTransform(smoothProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(smoothProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(smoothProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(smoothProgress, [0, 1], [1, 9]);

  const scales = [scale25, scale5, scale6, scale5, scale6, scale8, scale9];

  const resolvedImages = images.length > 0 ? images : [];

  const pictures = resolvedImages.map((img, index) => ({
    ...img,
    scale: scales[index % scales.length],
  }));

  return (
    <div ref={container} className={`relative overflow-hidden ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="w-full h-full absolute top-0 flex items-center justify-center will-change-transform"
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
    </div>
  );
};

export default ImmersiveScrollGallery;
