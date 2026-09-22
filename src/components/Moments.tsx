import Image from "next/image";
import Reveal from "./Reveal";

const SEASONS = [
  { src: "/banners/spring.png", label: "봄", rotate: "-rotate-3", tape: "bg-pink" },
  { src: "/banners/summer.png", label: "여름", rotate: "rotate-2", tape: "bg-sky" },
  { src: "/banners/autumn.png", label: "가을", rotate: "rotate-3", tape: "bg-butter" },
  { src: "/banners/winter.png", label: "겨울", rotate: "-rotate-2", tape: "bg-sage" },
];

export default function Moments() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <span className="inline-block -rotate-1 rounded-full border-[3px] border-ink bg-white px-4 py-1 text-xs font-bold text-ink">
            MOMENTS
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            당신의 하루에 귀여운 온기를
          </h2>
          <p className="mx-auto mt-3 max-w-md font-hand text-lg text-brown sm:text-xl">
            일상 중 귀여움이 가득한 순간들, 소소한 행복을 담아
            당신의 하루를 더 사랑스럽게.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
          {SEASONS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`group relative rounded-lg border-[3px] border-ink bg-white p-3 pb-10 sticker-shadow ${s.rotate} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
              >
                <span
                  className={`absolute -top-3 left-8 h-6 w-16 -rotate-6 rounded-sm border-2 border-ink/40 ${s.tape} opacity-90`}
                />
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border-2 border-ink/20">
                  <Image
                    src={s.src}
                    alt={`New:ri ${s.label} 시즌 일러스트`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <span className="absolute bottom-2 right-4 font-hand text-2xl text-brown">
                  #{s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
