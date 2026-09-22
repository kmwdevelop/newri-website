const ITEMS = [
  "사진 한 장이면 충분해요",
  "100% 핸드메이드",
  "오직, 당신만을 위한 선물",
  "반려동물 · 가족 · 연인",
];

export default function Marquee() {
  const line = ITEMS.join("   /   ") + "   /   ";

  return (
    <div className="overflow-hidden bg-ink py-3">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((rep) => (
          <span
            key={rep}
            className="flex shrink-0 items-center whitespace-nowrap px-4 text-sm font-bold uppercase tracking-wider text-paper sm:text-base"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
