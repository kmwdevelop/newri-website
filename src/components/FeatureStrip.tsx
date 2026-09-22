import Reveal from "./Reveal";

const FEATURES = [
  { emoji: "🧵", title: "100% 핸드메이드", desc: "하나하나 정성껏 손바느질로 제작해요", bg: "bg-blush" },
  { emoji: "🐾", title: "완전 맞춤 제작", desc: "우리 아이 사진을 그대로 담아드려요", bg: "bg-sky" },
  { emoji: "🎁", title: "선물 포장 & 각인", desc: "특별한 날 선물로도 완벽해요", bg: "bg-butter" },
  { emoji: "🌷", title: "빠른 제작", desc: "퀄리티는 그대로, 빠르게 만나보세요", bg: "bg-mint" },
];

export default function FeatureStrip() {
  return (
    <section className="px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.06}>
            <div
              className={`flex h-full flex-col items-center gap-1.5 rounded-3xl ${f.bg} p-6 text-center shadow-soft-sm`}
            >
              <span className="text-2xl">{f.emoji}</span>
              <p className="font-display text-sm text-ink">{f.title}</p>
              <p className="text-xs leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
