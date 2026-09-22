import Reveal from "./Reveal";

const FEATURES = [
  { emoji: "🧵", title: "100% 핸드메이드", desc: "하나하나 정성껏 손바느질로 제작해요" },
  { emoji: "🐾", title: "완전 맞춤 제작", desc: "우리 아이 사진을 그대로 담아드려요" },
  { emoji: "🎁", title: "선물 포장 & 각인", desc: "특별한 날 선물로도 완벽해요" },
  { emoji: "⚡", title: "빠른 제작", desc: "퀄리티는 그대로, 빠르게 만나보세요" },
];

export default function FeatureStrip() {
  return (
    <section className="px-6 py-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white/70 p-6 shadow-sm sm:p-8 md:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-left">
                <span className="text-2xl">{f.emoji}</span>
                <p className="text-sm font-bold text-brown">{f.title}</p>
                <p className="text-xs leading-relaxed text-brown-muted">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
