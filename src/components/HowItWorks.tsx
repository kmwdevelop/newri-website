import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "사진 전달",
    desc: "카카오톡 채널이나 인스타그램 DM으로 반려동물·가족·연인 사진을 보내주세요.",
    bg: "bg-sky",
  },
  {
    n: "02",
    title: "맞춤 제작",
    desc: "섬세한 손바느질과 고퀄리티 패브릭으로 정성껏 제작해드려요.",
    bg: "bg-mustard",
  },
  {
    n: "03",
    title: "수령 & 감동",
    desc: "선물 포장과 각인까지 완벽하게, 소중한 사람에게 전달해보세요.",
    bg: "bg-pink",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-ink/50">
            HOW IT WORKS
          </span>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            제작 과정은 이렇게 진행돼요
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className={`h-full ${s.bg} p-8`}>
                <span className="text-4xl font-black text-ink/25">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl font-black text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm font-bold leading-relaxed text-ink/70">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
