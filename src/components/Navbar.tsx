"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#products", label: "상품 소개" },
  { href: "#story", label: "브랜드 스토리" },
  { href: "#process", label: "제작 과정" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(92,62,40,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/brand/logo.jpg"
            alt="New:ri 뉴리뉴리"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-lg font-extrabold tracking-tight text-brown">
            New:ri
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brown-soft md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brown"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-transform hover:scale-105 active:scale-95"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
