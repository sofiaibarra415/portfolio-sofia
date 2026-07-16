import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToHash } from "@/lib/lenis";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "tech", label: "Stack" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
];

export default function ScrollProgressNav() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));

  return (
    <nav
      aria-label="Section progress"
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-5"
    >
      {SECTIONS.map((section, i) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToHash(`#${section.id}`)}
            className="group flex items-center gap-3 focus-visible:outline-none"
            aria-current={isActive}
          >
            <span
              className={`text-xs font-display tracking-wide transition-opacity ${
                isActive
                  ? "opacity-100 text-ink"
                  : "opacity-0 group-hover:opacity-60 text-ink-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")} — {section.label}
            </span>
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  isActive ? "bg-transparent" : "bg-ink-faint group-hover:bg-ink-muted"
                }`}
              />
              {isActive && (
                <motion.span
                  layoutId="scroll-progress-dot"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-iris to-spring"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
