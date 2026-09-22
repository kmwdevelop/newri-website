import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-brown px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/5" />

          <Reveal className="relative flex flex-col items-center">
            <div className="rounded-full bg-white/10 p-4">
              <Image
                src="/brand/mascot-grey.jpeg"
                alt="뉴리 마스코트"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
            </div>

            <span className="mt-6 text-xs font-semibold tracking-widest text-cream/60">
              BRAND STORY
            </span>
            <h2 className="mt-3 text-2xl font-extrabold text-cream sm:text-3xl">
              뉴리뉴리 (New:ri New:ri)
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-cream/85 sm:text-base">
              뉴리뉴리는 &ldquo;오직, 당신만을 위한 핸드메이드&rdquo;라는 슬로건 아래
              반려동물·가족·연인을 테마로 맞춤 제작하는
              쿠션 키링·파우치·지갑 핸드메이드 브랜드예요.
              <br className="hidden sm:block" />
              고객의 소중한 사진을 바탕으로 섬세한 봉제와 고퀄리티 패브릭으로
              제작하며, 선물용 패키지·각인·맞춤 패키지 구성까지 가능해요.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
