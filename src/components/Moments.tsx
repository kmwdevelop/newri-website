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
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-widest text-brown-muted">
            MOMENTS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brown sm:text-4xl">
            당신의 하루에 귀여운 온기를
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-brown-muted sm:text-base">
            일상 중 귀여움이 가득한 순간들, 소소한 행복을 담아
            당신의 하루를 더 사랑스럽게.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SEASONS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative aspect-[16/10] overflow-hidden rounded-3xl shadow-sm">
                <Image
                  src={s.src}
                  alt={`New:ri ${s.label} 시즌 일러스트`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-brown shadow-sm">
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
