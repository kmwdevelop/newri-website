"use client";

import Image from "next/image";

const NAV_LINKS = [
  { href: "#products", label: "상품 소개" },
  { href: "#story", label: "브랜드 스토리" },
  { href: "#process", label: "제작 과정" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft-sm">
            <Image
              src="/brand/logo.jpg"
              alt="New:ri 뉴리뉴리"
              width={30}
              height={30}
              className="rounded-full"
            />
          </div>
          <span className="font-display text-lg text-ink">New:ri</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/70 transition-colors hover:bg-blush hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-soft-sm transition-transform hover:scale-105"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
