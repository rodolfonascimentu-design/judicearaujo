import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  title?: string;
  children?: ReactNode;
  overlayContent?: ReactNode;
  onScrollProgress?: (progress: number) => void;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  title,
  children,
  overlayContent,
  onScrollProgress
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    onScrollProgress?.(scrollProgress);
  }, [scrollProgress, onScrollProgress]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else {
          setShowContent(false);
        }
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
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else {
          setShowContent(false);
        }
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
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-screen flex flex-col">
          {/* Background video - stays fixed */}
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
              style={{ filter: showContent ? 'blur(2px)' : 'blur(4px)' }}
              controls={false}
              disablePictureInPicture /> :


            <img src={mediaSrc} alt={title || ''} className="w-full h-full object-cover scale-110" />
            }
            {/* Overlay - 15% brighter than before (was 0.5/0.82, now 0.35/0.67) */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: 'hsl(var(--charcoal))' }}
              animate={{ opacity: showContent ? 0.55 : 0.25 }}
              transition={{ duration: 0.8 }} />
            
          </div>

          <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            {/* Scroll hint - appears after logo animation */}
            <motion.div
              className="absolute bottom-12 flex-col gap-3 flex items-center justify-end"
              animate={{ opacity: showContent ? 0 : pageReady && scrollProgress === 0 ? 0.85 : 0 }}
              transition={{ duration: 0.5 }}>
              
              <motion.div
                className="w-px h-12 bg-cream/60"
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
              
              <p className="text-cream/70 font-sans text-[11px] tracking-[0.3em] uppercase">
                Scroll
              </p>
            </motion.div>

            {/* Overlay content (search etc.) - appears after full expansion */}
            {overlayContent &&
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.6, delay: showContent ? 0.2 : 0 }}
              style={{ pointerEvents: showContent ? 'auto' : 'none' }}>
              
                {overlayContent}
              </motion.div>
            }

            {/* Post-expansion content */}
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