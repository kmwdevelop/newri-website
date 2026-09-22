"use client";

import Image from "next/image";

const NAV_LINKS = [
  { href: "#products", label: "상품 소개" },
  { href: "#story", label: "브랜드 스토리" },
  { href: "#process", label: "제작 과정" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/brand/logo.jpg"
            alt="New:ri 뉴리뉴리"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-lg font-black tracking-tight text-ink">
            NEW:RI
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-ink md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="bg-ink px-5 py-2.5 text-sm font-bold text-paper transition-opacity hover:opacity-80"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
