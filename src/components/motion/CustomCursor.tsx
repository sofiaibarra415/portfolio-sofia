import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(query.matches);
    const handleChange = () => setEnabled(query.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const active = enabled && !prefersReducedMotion;

  useEffect(() => {
    document.body.classList.toggle("custom-cursor-active", active);
    return () => document.body.classList.remove("custom-cursor-active");
  }, [active]);

  useEffect(() => {
    if (!active) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [active, x, y]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference bg-white"
      style={{ x: springX, y: springY }}
      animate={{ width: hovering ? 48 : 32, height: hovering ? 48 : 32 }}
      transition={{ duration: 0.2 }}
    />
  );
}
