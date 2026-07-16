import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function initLenis() {
  if (typeof window === "undefined") return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToHash(hash: string, headerHeight = 96) {
  if (!hash || typeof document === "undefined") return;
  const section = document.querySelector(hash) as HTMLElement | null;
  if (!section) return;

  const target = (section.firstElementChild as HTMLElement) ?? section;
  const visibleHeight = window.innerHeight - headerHeight;
  const targetHeight = target.getBoundingClientRect().height;
  const extraGap = Math.max(0, (visibleHeight - targetHeight) / 2);
  const offset = -(headerHeight + extraGap);

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
