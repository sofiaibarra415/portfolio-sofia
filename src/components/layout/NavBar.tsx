import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { GithubLogo, LinkedinLogo, X, List } from "@phosphor-icons/react";
import Image from "next/image";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToHash } from "@/lib/lenis";

const NAV_LINKS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "tech", label: "Tech Skills", href: "/#tech" },
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
];

const drawerVariants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  closed: {},
};

const drawerItemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: 24 },
};

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    if (menuOpen) {
      setHidden(false);
      return;
    }
    setHidden(latest > previous && latest > 120);
  });

  const handleNav = () => setMenuOpen((v) => !v);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToHash(href.replace("/", ""));
  };

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-24 z-50 sticky top-0 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center h-24 w-full px-4 2xl:px-16">
        <Link href="/#home" onClick={(e) => handleLinkClick(e, "/#home")}>
          <Image
            src="/images/logo.png"
            className="p-4"
            alt="Logo"
            width={75}
            height={75}
          />
        </Link>
        <nav className="hidden md:flex p-4">
          <ul className="hidden md:flex items-center text-ink-muted">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <li className="relative text-base ml-10 transition-colors hover:text-ink">
                  {link.label}
                  {activeId === link.id && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-iris to-spring"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </li>
              </Link>
            ))}
            <Link
              href="https://www.linkedin.com/in/sofia-carolina-ibarra/"
              target="_blank"
            >
              <LinkedinLogo
                size={25}
                className="ml-10 text-ink-muted hover:text-ink transition-colors"
              />
            </Link>
            <Link href="https://github.com/sofiaibarra415" target="_blank">
              <GithubLogo
                size={25}
                className="ml-8 text-ink-muted hover:text-ink transition-colors"
              />
            </Link>
          </ul>
        </nav>
        <button
          onClick={handleNav}
          className="md:hidden cursor-pointer pl-24 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris rounded"
          aria-label="Toggle menu"
        >
          <List size={30} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-0 top-0 w-[75%] md:hidden h-screen bg-bg-elevated p-10 shadow-2xl border-l border-border"
          >
            <div className="flex w-full items-center justify-end">
              <button
                onClick={handleNav}
                className="cursor-pointer text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris rounded"
                aria-label="Close menu"
              >
                <X size={30} />
              </button>
            </div>
            <motion.div
              initial="closed"
              animate="open"
              variants={drawerVariants}
              className="flex-col py-4"
            >
              <ul className="text-ink-muted">
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.id} variants={drawerItemVariants}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <span className="block py-4 cursor-pointer text-lg hover:text-ink transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
                <motion.div
                  variants={drawerItemVariants}
                  className="flex justify-start py-4"
                >
                  <Link
                    href="https://www.linkedin.com/in/sofia-carolina-ibarra/"
                    target="_blank"
                  >
                    <LinkedinLogo size={25} className="text-ink-muted" />
                  </Link>
                  <Link
                    href="https://github.com/sofiaibarra415"
                    target="_blank"
                  >
                    <GithubLogo size={25} className="ml-6 text-ink-muted" />
                  </Link>
                </motion.div>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
