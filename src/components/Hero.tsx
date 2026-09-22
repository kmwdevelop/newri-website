"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-14 md:pt-20"
    >
      {/* saturated blobs */}
      <div className="pointer-events-none absolute -top-20 -left-28 h-80 w-80 rounded-full bg-pink-soft blur-2xl" />
      <div className="pointer-events-none absolute top-0 -right-20 h-72 w-72 rounded-full bg-sky-soft blur-2xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-butter-soft blur-2xl" />

      {/* scattered sparkles */}
      <span className="pointer-events-none absolute left-[8%] top-24 text-3xl text-pink">✦</span>
      <span className="pointer-events-none absolute right-[12%] top-16 text-2xl text-sky">✧</span>
      <span className="pointer-events-none absolute left-[18%] bottom-10 text-2xl text-butter">★</span>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block -rotate-2 rounded-full border-[3px] border-ink bg-butter px-4 py-1.5 text-xs font-bold text-ink sticker-shadow-sm">
            PET · FAMILY · COUPLE CUSTOM HANDMADE
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[1.2] text-ink sm:text-6xl lg:text-7xl">
            오직, 당신만을 위한
            <br />
            <span className="relative inline-block text-pink">
              핸드메이드
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 10 Q 75 2 150 8 T 298 6"
                  stroke="var(--color-butter)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-md font-hand text-xl leading-relaxed text-brown sm:text-2xl md:mx-0">
            사랑하는 반려동물, 가족, 연인의 사진으로
            <br className="hidden sm:block" />
            세상에 하나뿐인 굿즈를 만들어드려요 🐾
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start justify-center">
            <a
              href="#contact"
              className="w-full rounded-full border-[3px] border-ink bg-[#FEE500] px-7 py-3.5 text-center font-display text-lg text-ink sticker-shadow transition-transform hover:-translate-y-1 hover:rotate-1 active:translate-y-0 active:shadow-none sm:w-auto"
            >
              카카오톡으로 문의하기
            </a>
            <a
              href="#products"
              className="w-full rounded-full border-[3px] border-ink bg-white px-7 py-3.5 text-center font-display text-lg text-ink sticker-shadow transition-transform hover:-translate-y-1 hover:-rotate-1 active:translate-y-0 active:shadow-none sm:w-auto"
            >
              상품 둘러보기
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {["100% 핸드메이드", "사진 기반 완전 맞춤", "선물 포장 가능"].map(
              (t, i) => (
                <span
                  key={t}
                  className={`rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold text-brown ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  {t}
                </span>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative flex flex-1 justify-center"
        >
          <div className="animate-bob relative flex h-72 w-72 items-center justify-center rounded-full border-[5px] border-ink bg-butter-soft sticker-shadow-lg sm:h-96 sm:w-96">
            <Image
              src="/brand/mascot-tan.jpeg"
              alt="뉴리 마스코트"
              width={280}
              height={280}
              priority
              className="h-52 w-52 object-contain sm:h-64 sm:w-64"
            />
          </div>

          <div className="animate-wiggle absolute -left-2 top-2 rotate-[-8deg] rounded-2xl border-[3px] border-ink bg-white p-1.5 sticker-shadow-sm sm:-left-6">
            <Image
              src="/brand/mascot-grey.jpeg"
              alt="뉴리 마스코트 그레이"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </div>

          <div className="absolute -right-2 bottom-8 rotate-6 rounded-xl border-[3px] border-ink bg-white p-1.5 shadow-md sm:-right-8">
            <Image
              src="/brand/tagline.png"
              alt="일상 중 귀여움이 가득한 순간들"
              width={160}
              height={64}
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>

          <div className="absolute right-0 top-4 rotate-3 rounded-full border-[3px] border-ink bg-pink px-3 py-2 text-xs font-display text-white sticker-shadow-sm sm:right-2">
            New:ri
            <br />
            Since 2025
          </div>
        </motion.div>
      </div>
    </section>
  );
}
