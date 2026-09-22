import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="bg-violet px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paper">
            <Image
              src="/brand/mascot-grey.jpeg"
              alt="뉴리 마스코트"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
          </div>

          <span className="mt-6 text-xs font-bold tracking-widest text-paper/70">
            BRAND STORY
          </span>
          <h2 className="mt-3 text-3xl font-black text-paper sm:text-4xl">
            뉴리뉴리 (New:ri New:ri)
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm font-bold leading-loose text-paper/90 sm:text-base">
            &ldquo;오직, 당신만을 위한 핸드메이드&rdquo;라는 슬로건 아래
            반려동물·가족·연인을 테마로 맞춤 제작하는
            쿠션 키링·파우치·지갑 핸드메이드 브랜드예요.
            <br className="hidden sm:block" />
            고객의 소중한 사진을 바탕으로 섬세한 봉제와 고퀄리티 패브릭으로
            제작하며, 선물용 패키지·각인·맞춤 패키지 구성까지 가능해요.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
