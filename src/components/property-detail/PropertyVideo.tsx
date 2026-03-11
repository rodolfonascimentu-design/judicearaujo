import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { PropertyDetailData } from "@/data/propertyDetail";

interface Props {
  property: PropertyDetailData;
}

const PropertyVideo = ({ property }: Props) => {
  const video = property.video;
  if (!video) return null;

  const [playing, setPlaying] = useState(false);

  const getEmbedUrl = (url: string) => {
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    return url;
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
            Apresentação
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-foreground">
            Vídeo do Empreendimento
          </h2>
          <div className="w-10 h-px bg-primary mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-[4px] overflow-hidden bg-muted"
        >
          {!playing ? (
            <>
              <img
                src={video.thumbnail}
                alt="Vídeo do empreendimento"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="white" />
                </div>
              </button>
            </>
          ) : (
            <div className="relative w-full h-full">
              <iframe
                src={getEmbedUrl(video.url)}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vídeo do empreendimento"
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyVideo;
