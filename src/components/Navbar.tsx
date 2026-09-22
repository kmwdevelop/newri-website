"use client";

import Image from "next/image";

const NAV_LINKS = [
  { href: "#products", label: "상품 소개" },
  { href: "#story", label: "브랜드 스토리" },
  { href: "#process", label: "제작 과정" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-ink bg-white sticker-shadow-sm -rotate-6">
            <Image
              src="/brand/logo.jpg"
              alt="New:ri 뉴리뉴리"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <span className="font-display text-2xl tracking-tight text-ink">
            New:ri
          </span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 ${
                i % 2 === 0 ? "-rotate-2" : "rotate-2"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border-[3px] border-ink bg-pink px-5 py-2 font-display text-sm text-white sticker-shadow-sm transition-transform hover:-translate-y-0.5 hover:rotate-2 active:translate-y-0 active:shadow-none"
        >
          문의하기
        </a>
      </div>
    </header>
  );
}
