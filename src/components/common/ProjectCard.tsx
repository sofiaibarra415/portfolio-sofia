import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, img, liveUrl, codeUrl } = project;

  return (
    <motion.div
      whileHover="hover"
      className="group w-full max-w-sm rounded-2xl bg-bg-surface border border-border overflow-hidden focus-within:ring-2 focus-within:ring-iris"
    >
      <div className="relative h-40 w-full overflow-hidden bg-bg-elevated">
        <motion.div
          variants={{ hover: { scale: 1.08 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image src={img} alt={title} fill className="object-cover" />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
        <p className="mt-2 text-sm text-ink-muted line-clamp-4">
          {description}
        </p>
        <div className="mt-5 flex items-center gap-5">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink hover:text-spring transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris rounded"
          >
            Live Preview
            <ArrowUpRight size={16} />
          </a>
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-ink hover:text-iris transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris rounded"
            >
              View Code
              <GithubLogo size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
