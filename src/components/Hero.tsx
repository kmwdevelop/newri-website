"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-tangerine">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:gap-4 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-block bg-ink px-3 py-1 text-xs font-bold tracking-widest text-paper">
            PET · FAMILY · COUPLE CUSTOM HANDMADE
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            오직, 당신만을
            <br />
            위한 핸드메이드
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base font-bold leading-relaxed text-ink/80 sm:text-lg md:mx-0">
            사랑하는 반려동물, 가족, 연인의 사진으로
            세상에 하나뿐인 굿즈를 만들어드려요.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:justify-start justify-center">
            <a
              href="#contact"
              className="w-full bg-ink px-8 py-4 text-center text-sm font-bold text-paper transition-opacity hover:opacity-80 sm:w-auto"
            >
              카카오톡으로 문의하기
            </a>
            <a
              href="#products"
              className="w-full border-2 border-ink px-8 py-4 text-center text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-paper sm:w-auto"
            >
              상품 둘러보기
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-1 justify-center"
        >
          <div className="flex h-72 w-72 items-center justify-center rounded-full bg-paper sm:h-96 sm:w-96">
            <Image
              src="/brand/mascot-tan.jpeg"
              alt="뉴리 마스코트"
              width={300}
              height={300}
              priority
              className="h-56 w-56 object-contain sm:h-72 sm:w-72"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
