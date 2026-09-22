import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "사진 전달",
    desc: "카카오톡 채널이나 인스타그램 DM으로 반려동물·가족·연인 사진을 보내주세요.",
    bg: "bg-sky-soft",
    rotate: "-rotate-2",
  },
  {
    n: "02",
    title: "맞춤 제작",
    desc: "섬세한 손바느질과 고퀄리티 패브릭으로 정성껏 제작해드려요.",
    bg: "bg-butter-soft",
    rotate: "rotate-2",
  },
  {
    n: "03",
    title: "수령 & 감동",
    desc: "선물 포장과 각인까지 완벽하게, 소중한 사람에게 전달해보세요.",
    bg: "bg-pink-soft",
    rotate: "-rotate-1",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <span className="inline-block rotate-1 rounded-full border-[3px] border-ink bg-white px-4 py-1 text-xs font-bold text-ink">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            제작 과정은 이렇게 진행돼요
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div
                className={`relative rounded-3xl border-[3px] border-ink ${s.bg} p-8 ${s.rotate} sticker-shadow transition-transform hover:rotate-0 hover:-translate-y-1`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-white font-display text-lg text-ink">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown">
                  {s.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-6 top-1/2 hidden -translate-y-1/2 font-display text-3xl text-ink/30 sm:block">
                    ⇢
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
