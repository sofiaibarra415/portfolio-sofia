import React from "react";
import Link from "next/link";
import { ChatCircle, EnvelopeSimple } from "@phosphor-icons/react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white w-full h-36 flex items-center justify-around shadow-2xl mt-6">
      <div className="flex flex-row justify-between items-center">
        <Link href="">
          <Image
            src="/images/logo.png"
            className="p-4"
            alt="Logo"
            width={70}
            height={70}
          />
        </Link>
        <div className="hidden text-grey md:flex md:flex-row">
          <Link href="mailto:sofiaibarra415@gmail.com" target="_blank">
            <EnvelopeSimple size={28} className="ml-8" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=541150514028&text=Hi!%20I%20saw%20your%20profile..."
            target="_blank"
          >
            <ChatCircle size={26} className="ml-8" />
          </Link>
        </div>
      </div>
      <div className="md:flex md:flex-row items-center">
        <div
          style={{
            background: "linear-gradient(to right, #7AAEEA, #7AEABB)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          <p>Built by Sofía Ibarra :)</p>
        </div>
      </div>
    </div>
  );
}
