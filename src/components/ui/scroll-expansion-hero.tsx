import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

// Module-level flag: resets on page refresh, persists during SPA navigation
let heroAnimationSeen = false;
export const markHeroAnimationSeen = () => { heroAnimationSeen = true; };
export const hasHeroAnimationBeenSeen = () => heroAnimationSeen;

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  title?: string;
  children?: ReactNode;
  overlayContent?: ReactNode;
  onScrollProgress?: (progress: number) => void;
  skipAnimation?: boolean;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  title,
  children,
  overlayContent,
  onScrollProgress,
  skipAnimation = false,
}: ScrollExpandMediaProps) => {
  const [showContent, setShowContent] = useState(skipAnimation);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(skipAnimation);
  const [contentFadeOut, setContentFadeOut] = useState(1);

  // Notify parent of progress
  useEffect(() => {
    onScrollProgress?.(mediaFullyExpanded ? 1 : 0);
  }, [mediaFullyExpanded, onScrollProgress]);

  // Auto-expand after logo animation completes (~3s delay after logos appear)
  useEffect(() => {
    if (skipAnimation) return;
    // Logos appear at ~1.8s, wait ~3s after that = ~4.8s total
    const timer = setTimeout(() => {
      setMediaFullyExpanded(true);
      setShowContent(true);
      markHeroAnimationSeen();
    }, 4800);
    return () => clearTimeout(timer);
  }, [skipAnimation]);

  // Content fade on scroll (search bar fades after 150px deadzone)
  useEffect(() => {
    if (!mediaFullyExpanded) {
      setContentFadeOut(1);
      return;
    }
    const onScroll = () => {
      const deadZone = 150;
      const fadeRange = 150;
      const scrollY = window.scrollY;
      if (scrollY <= deadZone) {
        setContentFadeOut(1);
      } else {
        const fade = Math.max(0, 1 - (scrollY - deadZone) / fadeRange);
        setContentFadeOut(fade);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [mediaFullyExpanded]);

  return (
    <div className="relative">
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-screen flex flex-col">
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {mediaType === 'video' ? (
              <video
                src={mediaSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover scale-110"
                style={{
                  filter: showContent ? 'blur(0px)' : 'blur(6px)',
                  transition: 'filter 0.8s ease',
                }}
                controls={false}
                disablePictureInPicture
              />
            ) : (
              <img src={mediaSrc} alt={title || ''} className="w-full h-full object-cover scale-110" />
            )}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'hsl(var(--charcoal))' }}
              animate={{
                opacity: showContent ? 0.30 : 0.45,
              }}
              transition={{ duration: skipAnimation ? 0 : 1.2 }}
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            {overlayContent && (
              <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center px-6"
                initial={{ opacity: skipAnimation ? 1 : 0 }}
                animate={{ opacity: showContent ? contentFadeOut : 0 }}
                transition={{ duration: 0.6 }}
                style={{ pointerEvents: showContent && contentFadeOut > 0.1 ? 'auto' : 'none' }}
              >
                {overlayContent}
              </motion.div>
            )}

            <motion.section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;