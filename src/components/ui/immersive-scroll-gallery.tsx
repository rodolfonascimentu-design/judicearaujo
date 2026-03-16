"use client";

import { useRef } from "react";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface iIPicture {
  src: string;
  scale: MotionValue<number>;
}

interface iImmersiveScrollGalleryProps {
  images?: { src: string; scale: MotionValue<number> | null }[];
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

const ImmersiveScrollGallery: React.FC<iImmersiveScrollGalleryProps> = ({
  images,
  className = "",
}) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 12]);

  const defaultImages = [
    { src: "", scale: null },
    { src: "", scale: null },
    { src: "", scale: null },
    { src: "", scale: null },
    { src: "", scale: null },
    { src: "", scale: null },
    { src: "", scale: null },
  ];

  const resolvedImages = images || defaultImages;

  const pictures = resolvedImages.map((img, index) => ({
    ...img,
    scale: [scale4, scale5, scale6, scale5, scale6, scale8, scale9][index % 7],
  }));

  return (
    <div ref={container} className={`relative overflow-hidden ${className}`}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="w-full h-full absolute top-0 flex items-center justify-center"
          >
            <div className={`relative ${IMAGE_STYLES[index % 7]}`}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
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
