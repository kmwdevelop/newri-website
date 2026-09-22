"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-sky/60 to-paper"
    >
      {/* soft scattered dots */}
      <span className="pointer-events-none absolute left-[10%] top-16 h-2 w-2 rounded-full bg-coral/50" />
      <span className="pointer-events-none absolute right-[14%] top-24 h-3 w-3 rounded-full bg-lavender-deep" />
      <span className="pointer-events-none absolute left-[20%] bottom-10 h-2.5 w-2.5 rounded-full bg-butter-deep" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 md:flex-row md:gap-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block rounded-full bg-card px-4 py-1.5 text-xs font-bold text-ink/70 shadow-soft-sm">
            PET · FAMILY · COUPLE CUSTOM HANDMADE
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.3] text-ink sm:text-5xl lg:text-6xl">
            오직, 당신만을 위한
            <br />
            <span className="text-coral">핸드메이드</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg md:mx-0">
            사랑하는 반려동물, 가족, 연인의 사진으로
            <br className="hidden sm:block" />
            세상에 하나뿐인 굿즈를 만들어드려요.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start justify-center">
            <a
              href="#contact"
              className="w-full rounded-full bg-[#FEE500] px-7 py-3.5 text-center text-sm font-bold text-ink shadow-soft-sm transition-transform hover:scale-105 sm:w-auto"
            >
              카카오톡으로 문의하기
            </a>
            <a
              href="#products"
              className="w-full rounded-full bg-card px-7 py-3.5 text-center text-sm font-bold text-ink shadow-soft-sm transition-transform hover:scale-105 sm:w-auto"
            >
              상품 둘러보기
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex flex-1 justify-center"
        >
          <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-[2rem] shadow-soft sm:w-80">
            <Image
              src="/brand/making.jpg"
              alt="뉴리뉴리 손바느질 제작 과정"
              fill
              priority
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/60 to-transparent p-4 pt-10">
              <p className="text-xs font-bold text-white sm:text-sm">
                한 땀 한 땀, 정성껏 손바느질로 제작해요
              </p>
            </div>
          </div>

          <div className="animate-bob absolute -left-4 top-4 rounded-full border-2 border-card bg-card p-1.5 shadow-soft-sm sm:-left-8">
            <Image
              src="/brand/mascot-tan.jpeg"
              alt="뉴리 마스코트"
              width={56}
              height={56}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
