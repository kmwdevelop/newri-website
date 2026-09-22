import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border-[4px] border-ink bg-pink px-8 py-16 text-center sticker-shadow-lg sm:px-16">
          <span className="pointer-events-none absolute left-6 top-10 text-3xl text-white/40">✦</span>
          <span className="pointer-events-none absolute right-10 bottom-10 text-2xl text-white/40">✧</span>

          <Reveal className="relative flex flex-col items-center">
            <div className="animate-bob rounded-full border-[3px] border-ink bg-white p-3 sticker-shadow-sm">
              <Image
                src="/brand/mascot-grey.jpeg"
                alt="뉴리 마스코트"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
            </div>

            <span className="mt-6 rounded-full border-2 border-white/60 px-3 py-1 text-xs font-bold tracking-widest text-white/90">
              BRAND STORY
            </span>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              뉴리뉴리 (New:ri New:ri)
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-hand text-lg leading-loose text-white sm:text-xl">
              &ldquo;오직, 당신만을 위한 핸드메이드&rdquo;라는 슬로건 아래
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
