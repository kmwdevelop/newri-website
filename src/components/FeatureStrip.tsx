import Reveal from "./Reveal";

const FEATURES = [
  { title: "100% 핸드메이드", desc: "하나하나 정성껏 손바느질로 제작해요", bg: "bg-lime" },
  { title: "완전 맞춤 제작", desc: "우리 아이 사진을 그대로 담아드려요", bg: "bg-sky" },
  { title: "선물 포장 & 각인", desc: "특별한 날 선물로도 완벽해요", bg: "bg-mustard" },
  { title: "빠른 제작", desc: "퀄리티는 그대로, 빠르게 만나보세요", bg: "bg-pink" },
];

export default function FeatureStrip() {
  return (
    <section className="grid grid-cols-2 gap-px bg-ink/10 md:grid-cols-4">
      {FEATURES.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.06}>
          <div className={`flex h-full flex-col gap-1.5 ${f.bg} p-6`}>
            <p className="text-base font-black text-ink">{f.title}</p>
            <p className="text-xs font-bold leading-relaxed text-ink/70">
              {f.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
