import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const PremiumSlider = ({ beforeImage, afterImage }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // 🔥 Auto animation (preview effect)
  useEffect(() => {
    let interval;
    if (!isDragging) {
      interval = setInterval(() => {
        setPosition((prev) => (prev >= 80 ? 20 : prev + 20));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isDragging]);

  const handleMove = (clientX) => {
    const bounds = containerRef.current.getBoundingClientRect();
    let x = clientX - bounds.left;
    let percent = (x / bounds.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setPosition(percent);
  };

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize group"
        onMouseMove={(e) => isDragging && handleMove(e.clientX)}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
        onTouchEnd={stopDrag}
      >
        {/* BEFORE */}
        <img
          src={beforeImage}
          alt="Before"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />

        {/* AFTER */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={afterImage}
            alt="After"
            loading="lazy"
            className="w-full h-full object-contain bg-black"
          />
        </div>

        {/* 🔥 Animated Slider Line */}
        <motion.div
          className="absolute top-0 h-full w-0.75 bg-white/80 backdrop-blur-md"
          style={{ left: `${position}%` }}
          animate={{ left: `${position}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          {/* Handle */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-lg border border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-xl"
          >
            <span className="text-white text-xs font-semibold text-center">
              DRAG
            </span>
          </motion.div>
        </motion.div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs">
          BEFORE
        </div>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs">
          AFTER
        </div>

        {/* Gradient Overlay (premium look) */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default PremiumSlider;