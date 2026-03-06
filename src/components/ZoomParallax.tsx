import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import parallax1 from "@/assets/parallax-1.jpg";
import parallax2 from "@/assets/parallax-2.jpg";
import parallax3 from "@/assets/parallax-3.jpg";
import parallax4 from "@/assets/parallax-4.jpg";
import parallax5 from "@/assets/parallax-5.jpg";
import parallax6 from "@/assets/parallax-6.jpg";
import parallax7 from "@/assets/parallax-7.jpg";

const images = [
  { src: parallax1, scale: [4, 1] as [number, number] },
  { src: parallax2, scale: [5, 1] as [number, number], top: "-30vh", left: "5vw", width: "35vw", height: "30vh" },
  { src: parallax3, scale: [6, 1] as [number, number], top: "-10vh", left: "-25vw", width: "20vw", height: "45vh" },
  { src: parallax4, scale: [5, 1] as [number, number], left: "27.5vw", width: "25vw", height: "25vh" },
  { src: parallax5, scale: [6, 1] as [number, number], top: "27.5vh", left: "5vw", width: "20vw", height: "25vh" },
  { src: parallax6, scale: [8, 1] as [number, number], top: "27.5vh", left: "-22.5vw", width: "30vw", height: "25vh" },
  { src: parallax7, scale: [9, 1] as [number, number], top: "22.5vh", left: "25vw", width: "15vw", height: "15vh" },
];

const ZoomParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.map((img, i) => {
          const scale = useTransform(scrollYProgress, [0, 1], img.scale);

          return (
            <motion.div
              key={i}
              style={{ scale }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center will-change-transform"
            >
              <div
                className="relative overflow-hidden rounded-md"
                style={{
                  width: img.width || "25vw",
                  height: img.height || "25vh",
                  top: img.top || "0",
                  left: img.left || "0",
                }}
              >
                <img
                  src={img.src}
                  alt="Propriedade de luxo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
