import Image from "next/image";
import Reveal from "./Reveal";

export default function Craft() {
  return (
    <section className="bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <Reveal className="w-full md:flex-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[1.5rem] shadow-soft">
            <Image
              src="/brand/making.jpg"
              alt="뉴리뉴리 손바느질 제작 과정"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full md:flex-1 text-center md:text-left">
          <span className="text-xs font-bold tracking-widest text-white/50">
            OUR CRAFTSMANSHIP
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.4] text-white sm:text-4xl">
            기계가 아닌, 사람의 손끝으로
            <br />
            완성합니다
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-loose text-white/70 sm:text-base md:mx-0">
            뉴리뉴리의 모든 제품은 주문이 들어온 순간부터 한 땀 한 땀
            직접 재단하고 봉제해요. 고객님이 보내주신 사진 한 장을
            소중히 다뤄, 세상에 하나뿐인 결과물로 만들어드리는 것이
            저희의 원칙입니다.
          </p>

          <div className="mx-auto mt-8 grid max-w-md grid-cols-3 gap-4 md:mx-0">
            <div className="border-t border-white/15 pt-3 text-center md:text-left">
              <p className="font-display text-xl text-white">2022~</p>
              <p className="mt-1 text-xs text-white/50">제작 시작</p>
            </div>
            <div className="border-t border-white/15 pt-3 text-center md:text-left">
              <p className="font-display text-xl text-white">100%</p>
              <p className="mt-1 text-xs text-white/50">핸드메이드</p>
            </div>
            <div className="border-t border-white/15 pt-3 text-center md:text-left">
              <p className="font-display text-xl text-white">1:1</p>
              <p className="mt-1 text-xs text-white/50">맞춤 제작</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
