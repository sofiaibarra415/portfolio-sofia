import Container from "@/components/common/Container";
import Layout from "@/components/common/Layout";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";
import Button from "@/components/common/Button";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import MagneticButton from "@/components/motion/MagneticButton";
import TechMarquee from "@/components/layout/TechMarquee";
import { projects } from "@/data/projects";
import { motion, Variants } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import toast from "react-hot-toast";
import { downloadCv } from "@/utils/downloadFile";
import Link from "next/link";
import { scrollToHash } from "@/lib/lenis";

const headlineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const headlineLine: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Home() {
  const handleDownload = () => {
    downloadCv("Sofia Ibarra - Resume.pdf");
    toast.success("Download started");
  };

  return (
    <Layout>
      <Container id="home">
        <div className="text-center flex flex-col items-center">
          <RevealOnScroll y={12}>
            <span className="font-display text-sm tracking-[0.2em] text-ink-faint">
              FRONT-END DEVELOPER
            </span>
          </RevealOnScroll>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={headlineContainer}
            className="font-display font-medium leading-none mt-6"
          >
            <motion.p
              variants={headlineLine}
              className="text-hero bg-gradient-to-r from-iris to-spring bg-clip-text text-transparent"
            >
              Hi! My name is Sofía.
            </motion.p>
            <motion.p
              variants={headlineLine}
              className="text-hero bg-gradient-to-r from-iris to-spring bg-clip-text text-transparent"
            >
              I turn ideas into interactive realities
            </motion.p>
          </motion.div>

          <RevealOnScroll delay={0.2}>
            <p className="mt-8 text-ink-muted max-w-2xl mx-auto px-6">
              Welcome to my digital space. I specialize in crafting engaging
              and user-friendly web experiences, blending creativity with
              technical expertise to bring your ideas to life.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} className="mt-10">
            <MagneticButton>
              <Link
                href="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHash("#projects");
                }}
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-iris to-spring text-bg font-display font-medium transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                View Projects
              </Link>
            </MagneticButton>
          </RevealOnScroll>

          <motion.button
            onClick={() => scrollToHash("#tech")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="mt-20 text-ink-faint hover:text-ink transition-colors focus-visible:outline-none"
            aria-label="Scroll to next section"
          >
            <CaretDown size={24} />
          </motion.button>
        </div>
      </Container>

      <Container id="tech">
        <div className="w-full">
          <SectionHeading
            title="My Tech Stack"
            subtitle="Technologies I work with"
          />
          <TechMarquee />
        </div>
      </Container>

      <Container id="about">
        <div className="w-full flex flex-col items-center">
          <SectionHeading
            title="About Me"
            subtitle="A bit about me"
          />
          <RevealOnScroll delay={0.15} className="mt-10">
            <p className="text-center px-8 max-w-3xl text-ink-muted">
              I have been studying the world of Front-End web development for
              3 years. I am currently studying a Bachelors Degree in Computer
              Science, which gives me a solid foundation in programming
              fundamentals, algorithms and data structures. I finished my
              secondary studies last year, but I had the possibility of
              accessing different courses during my school years. This has
              allowed me to develop good skills in languages like Javascript
              and libraries such as React Js. I continue to complement my
              academic training with specialized courses in technologies such
              as React.js, JavaScript, Node.js and Angular.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="pt-10">
            <Button label="Download CV" onClick={handleDownload} />
          </RevealOnScroll>
        </div>
      </Container>

      <Container id="projects">
        <div className="w-full">
          <SectionHeading
            title="Projects"
            subtitle="Things I've built so far"
          />
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center pt-8 md:pt-16">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.title} delay={i * 0.08}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
}
