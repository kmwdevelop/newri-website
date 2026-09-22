"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-16 md:pt-24"
    >
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute -top-24 -left-32 h-96 w-96 rounded-full bg-blush blur-3xl" />
      <div className="pointer-events-none absolute top-10 -right-24 h-80 w-80 rounded-full bg-sky/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-butter/60 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          <span className="inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-brown-soft shadow-sm">
            PET · FAMILY · COUPLE CUSTOM HANDMADE
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-brown sm:text-5xl lg:text-6xl">
            오직, 당신만을 위한
            <br />
            <span className="text-[#e88ba0]">핸드메이드</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-brown-soft sm:text-lg md:mx-0">
            사랑하는 반려동물, 가족, 연인의 사진으로
            <br className="hidden sm:block" />
            세상에 하나뿐인 굿즈를 만들어드려요.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row md:justify-start justify-center">
            <a
              href="#contact"
              className="w-full rounded-full bg-[#FEE500] px-7 py-3.5 text-center text-sm font-bold text-[#3C1E1E] shadow-md transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              카카오톡으로 문의하기
            </a>
            <a
              href="#products"
              className="w-full rounded-full border border-brown/15 bg-white/70 px-7 py-3.5 text-center text-sm font-semibold text-brown transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              상품 둘러보기
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-brown-muted md:justify-start">
            <span>100% 핸드메이드</span>
            <span className="h-1 w-1 rounded-full bg-brown-muted/40" />
            <span>사진 기반 완전 맞춤</span>
            <span className="h-1 w-1 rounded-full bg-brown-muted/40" />
            <span>선물 포장 가능</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative flex flex-1 justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/60 shadow-xl sm:h-96 sm:w-96">
            <Image
              src="/brand/mascot-tan.jpeg"
              alt="뉴리 마스코트"
              width={280}
              height={280}
              priority
              className="h-56 w-56 object-contain drop-shadow-lg sm:h-72 sm:w-72"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-6 rounded-2xl bg-white/90 p-2 shadow-lg sm:-left-8"
          >
            <Image
              src="/brand/mascot-grey.jpeg"
              alt="뉴리 마스코트 그레이"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 bottom-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg sm:-right-6"
          >
            <p className="text-xs font-semibold text-brown">
              New:ri
              <br />
              <span className="text-brown-muted">Since 2025</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
