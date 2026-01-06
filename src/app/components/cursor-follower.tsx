import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring } from "motion/react";

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const rafId = useRef<number | null>(null);

  // Softer spring for better performance
  const cursorX = useSpring(0, { stiffness: 200, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 200, damping: 25 });

  // Throttle mouse move with requestAnimationFrame
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        rafId.current = null;
      });
    }
  }, [cursorX, cursorY]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    setIsHovering(
      target.tagName === "BUTTON" ||
      target.tagName === "A" ||
      !!target.closest("button") ||
      !!target.closest("a") ||
      target.classList.contains("cursor-hover")
    );
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleMouseMove, handleMouseOver]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-6 h-6 rounded-full border-2 border-white/40" />
        </motion.div>
      </motion.div>

      {/* Trailing cursor with gradient - optimized */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </>
  );
}
