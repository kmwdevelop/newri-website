import Reveal from "./Reveal";

type Product = {
  name: string;
  desc: string;
  tag: string;
  price?: string;
  bg: string;
  emoji: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    name: "맞춤 쿠션 키링",
    desc: "사진 2장으로 제작하는 대표 상품. 가방에 달고 다니는 나만의 포인트.",
    tag: "BEST",
    price: "10,000원~",
    bg: "bg-blush",
    emoji: "🧸",
    featured: true,
  },
  {
    name: "커스텀 인형",
    desc: "사진 1장, 원하는 사이즈로 품에 안을 수 있는 굿즈.",
    tag: "인형",
    bg: "bg-sky",
    emoji: "🐩",
  },
  {
    name: "카드지갑",
    desc: "사진 3장으로 디자인한 나만의 카드 수납 굿즈.",
    tag: "지갑",
    bg: "bg-butter",
    emoji: "💳",
  },
  {
    name: "파우치",
    desc: "소지품을 넣어 데일리하게 들고 다니는 굿즈.",
    tag: "파우치",
    bg: "bg-mint",
    emoji: "👛",
  },
  {
    name: "인식표",
    desc: "사진 1장으로 제작, 개인정보를 담을 수 있는 우리 아이 인식표.",
    tag: "인식표",
    bg: "bg-lavender",
    emoji: "🏷️",
  },
  {
    name: "털 보관 유리병 키링",
    desc: "소중한 털을 담아 우리 아이의 추억을 간직하는 기억 보관 굿즈.",
    tag: "메모리얼",
    bg: "bg-peach",
    emoji: "🫙",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-ink/40">
            PRODUCTS
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            우리 아이를 담은 굿즈
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/60 sm:text-base">
            사진 한 장이면 충분해요. 반려동물·가족·연인의 순간을
            세상에 하나뿐인 굿즈로 만들어드려요.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.05}
              className={p.featured ? "lg:col-span-2" : undefined}
            >
              <div
                className={`group flex h-full flex-col justify-between rounded-3xl ${p.bg} p-7 shadow-soft-sm transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-card px-3 py-1 text-[11px] font-bold text-ink/70">
                    {p.tag}
                  </span>
                  <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                    {p.emoji}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-xl text-ink">{p.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/65">
                    {p.desc}
                  </p>
                  <p className="mt-4 font-display text-base text-ink">
                    {p.price ?? "가격 문의"}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/40">
          * 실제 제작 사진과 상세 옵션은 카카오톡 채널 상담을 통해 안내해드려요.
        </p>
      </div>
    </section>
  );
}
