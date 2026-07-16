import { useEffect } from "react";
import { Space_Grotesk, Inter } from "next/font/google";
import NavBar from "@/components/layout/NavBar";
import Footer from "../layout/Footer";
import CustomCursor from "@/components/motion/CustomCursor";
import ScrollProgressNav from "@/components/motion/ScrollProgressNav";
import { initLenis, scrollToHash } from "@/lib/lenis";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    initLenis();

    if (window.location.hash) {
      const raf = requestAnimationFrame(() => {
        scrollToHash(window.location.hash);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, []);

  return (
    <main
      className={`${display.variable} ${body.variable} font-sans bg-bg text-ink`}
    >
      <CustomCursor />
      <ScrollProgressNav />
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
