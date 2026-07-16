import Image from "next/image";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiMysql,
  SiPhp,
  SiHtml5,
  SiHaskell,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

type TechItem = {
  name: string;
  src?: string;
  Icon?: IconType;
  color?: string;
};

const TECHS: TechItem[] = [
  { name: "Next.js", src: "/images/next.png" },
  { name: "JavaScript", src: "/images/javascript.png" },
  { name: "React", src: "/images/react.png" },
  { name: "TypeScript", src: "/images/typescript.png" },
  { name: "Git", src: "/images/git.png" },
  { name: "Firebase", src: "/images/firebase.png" },
  { name: "Webflow", src: "/images/webflow.webp" },
  { name: "Tailwind", src: "/images/tailwind.png" },
  { name: "WordPress", src: "/images/wordpress.png" },
  { name: "Node.js", src: "/images/node.png" },
  { name: "CSS", src: "/images/css.png" },
  { name: "Figma", src: "/images/figma.png" },
  { name: "Angular", src: "/images/angular.png" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "Java", Icon: DiJava, color: "#F89820" },
  { name: "C", Icon: SiC, color: "#A8B9CC" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Haskell", Icon: SiHaskell, color: "#5D4F85" },
];

export default function TechMarquee() {
  return (
    <div className="mt-12 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-x-6 gap-y-10 justify-items-center">
      {TECHS.map((item, i) => (
        <RevealOnScroll key={item.name} delay={i * 0.05}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            {item.Icon ? (
              <item.Icon
                size={56}
                color={item.color}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            ) : (
              <Image
                src={item.src as string}
                alt={item.name}
                width={56}
                height={56}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            )}
            <span className="text-xs text-ink-faint">{item.name}</span>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
