import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "사진 전달",
    desc: "카카오톡 채널이나 인스타그램 DM으로 반려동물·가족·연인 사진을 보내주세요.",
  },
  {
    n: "02",
    title: "맞춤 제작",
    desc: "섬세한 손바느질과 고퀄리티 패브릭으로 정성껏 제작해드려요.",
  },
  {
    n: "03",
    title: "수령 & 감동",
    desc: "선물 포장과 각인까지 완벽하게, 소중한 사람에게 전달해보세요.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <span className="text-xs font-semibold tracking-widest text-brown-muted">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brown sm:text-4xl">
            제작 과정은 이렇게 진행돼요
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative rounded-3xl border border-brown/10 bg-white/60 p-8">
                <span className="text-4xl font-black text-brown/10">
                  {s.n}
                </span>
                <h3 className="mt-2 text-lg font-bold text-brown">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-muted">
                  {s.desc}
                </p>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-2xl text-brown/20 sm:block">
                    →
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
