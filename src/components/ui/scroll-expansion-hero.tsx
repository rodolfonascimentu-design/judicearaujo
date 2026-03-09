import { useEffect, useState, ReactNode, useCallback } from 'react';
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
  const [scrollProgress, setScrollProgress] = useState(skipAnimation ? 1 : 0);
  const [showContent, setShowContent] = useState(skipAnimation);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(skipAnimation);
  const [touchStartY, setTouchStartY] = useState(0);
  const [pageReady, setPageReady] = useState(skipAnimation);
  const [contentFadeOut, setContentFadeOut] = useState(1);

  useEffect(() => {
    if (skipAnimation) return;
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    onScrollProgress?.(scrollProgress);
  }, [scrollProgress, onScrollProgress]);

  const handleClickExpand = useCallback(() => {
    if (mediaFullyExpanded) return;
    let start: number | null = null;
    const startProgress = scrollProgress;
    const duration = 600;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const newProgress = startProgress + (1 - startProgress) * eased;
      setScrollProgress(newProgress);
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setScrollProgress(1);
        setMediaFullyExpanded(true);
        setShowContent(true);
        markHeroAnimationSeen();
      }
    };
    requestAnimationFrame(animate);
  }, [mediaFullyExpanded, scrollProgress]);

  useEffect(() => {
    if (skipAnimation) return;

    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        setScrollProgress(prev => {
          const newProgress = Math.min(Math.max(prev + scrollDelta, 0), 1);
          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
            markHeroAnimationSeen();
          } else {
            setShowContent(false);
          }
          return newProgress;
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        setScrollProgress(prev => {
          const newProgress = Math.min(Math.max(prev + scrollDelta, 0), 1);
          if (newProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
            markHeroAnimationSeen();
          } else {
            setShowContent(false);
          }
          return newProgress;
        });
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY, skipAnimation]);

  useEffect(() => {
    if (skipAnimation) return;
    const timer = setTimeout(() => setPageReady(true), 800);
    return () => clearTimeout(timer);
  }, [skipAnimation]);

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
            {mediaType === 'video' ?
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
                filter: showContent
                  ? 'blur(0px)'
                  : `blur(${6 - scrollProgress * 6}px)`,
                transition: 'filter 0.4s ease',
              }}
              controls={false}
              disablePictureInPicture /> :
            <img src={mediaSrc} alt={title || ''} className="w-full h-full object-cover scale-110" />
            }
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'hsl(var(--charcoal))' }}
              animate={{
                opacity: showContent
                  ? 0.30
                  : 0.45 - scrollProgress * 0.15,
              }}
              transition={{ duration: skipAnimation ? 0 : 0.8 }} />
          </div>

          <div
            className="flex-1 flex flex-col items-center justify-center relative z-10"
            onClick={!mediaFullyExpanded ? handleClickExpand : undefined}
            style={{ cursor: !mediaFullyExpanded ? 'pointer' : undefined }}
          >
            {/* Scroll hint */}
            <motion.div
              className="absolute bottom-12 flex flex-col items-center pointer-events-none"
              animate={{ opacity: showContent ? 0 : pageReady && scrollProgress === 0 ? 0.7 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-5 h-9 rounded-full border-[1.5px] border-cream/50 flex items-start justify-center pt-1.5"
              >
                <motion.div
                  className="w-[3px] h-[7px] rounded-full bg-cream/60"
                  animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            {overlayContent &&
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6"
              initial={{ opacity: skipAnimation ? 1 : 0 }}
              animate={{ opacity: showContent ? contentFadeOut : 0 }}
              transition={{ duration: 0.3, delay: 0 }}
              style={{ pointerEvents: showContent && contentFadeOut > 0.1 ? 'auto' : 'none' }}>
                {overlayContent}
              </motion.div>
            }

            <motion.section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}>
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>);
};

export default ScrollExpandMedia;
