import Image from "next/image";
import Reveal from "./Reveal";

const SEASONS = [
  { src: "/banners/spring.png", label: "봄" },
  { src: "/banners/summer.png", label: "여름" },
  { src: "/banners/autumn.png", label: "가을" },
  { src: "/banners/winter.png", label: "겨울" },
];

export default function Moments() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-ink/50">
            MOMENTS
          </span>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            당신의 하루에 귀여운 온기를
          </h2>
          <p className="mt-3 max-w-md text-sm font-bold text-ink/60 sm:text-base">
            일상 중 귀여움이 가득한 순간들, 소소한 행복을 담아
            당신의 하루를 더 사랑스럽게.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2">
          {SEASONS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="group relative aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src={s.src}
                  alt={`New:ri ${s.label} 시즌 일러스트`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 text-xs font-bold text-paper">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
