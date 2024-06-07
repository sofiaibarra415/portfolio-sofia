import { useState } from "react";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, X, List } from "@phosphor-icons/react";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="bg-white w-full h-24 z-10 md:shadow-sm sticky top-0">
      <div className="flex justify-between items-center h-24 w-full px-4 2xl:px-16">
        <Link href="">
          <Image
            src="/images/logo.png"
            className="p-4"
            alt="Logo"
            width={75}
            height={75}
          />
        </Link>
        <nav className="hidden md:flex p-4">
          <ul className="hidden md:flex text-grey">
            <Link href="">
              <li className="text-base ml-10">Home</li>
            </Link>
            <Link href="/#tech">
              <li className="text-base ml-10 ">Tech Skills</li>
            </Link>
            <Link href="/#about">
              <li className="text-base ml-10">About</li>
            </Link>
            <Link href="/#projects">
              <li className="text-base ml-10">Projects</li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/lucia-espana/"
              target="_blank"
            >
              <LinkedinLogo size={25} className="ml-10" />
            </Link>
            <Link href="https://github.com/luespana" target="_blank">
              <GithubLogo size={25} className="ml-8" />
            </Link>
          </ul>
        </nav>
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <List size={30} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[65%] md:hidden h-screen bg-white p-10 shadow-lg transition-transform ease-in-out duration-300 transform translate-x-0"
            : "fixed top-0 left-[100%] p-10 transition-transform ease-in-out duration-300 transform translate-x-full"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <X size={30} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-[#666666]">
            <Link href="">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Home
              </li>
            </Link>
            <Link href="/#tech">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Tech Skills
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="py-4 cursor-pointer"
              >
                Projects
              </li>
            </Link>
            <div className="flex justify-start py-4">
              <Link
                href="https://www.linkedin.com/in/lucia-espana/"
                target="_blank"
              >
                <LinkedinLogo size={25} />
              </Link>
              <Link href="https://github.com/luespana" target="_blank">
                <GithubLogo size={25} className="ml-6" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}
