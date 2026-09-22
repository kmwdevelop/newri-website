import Reveal from "./Reveal";

type Product = {
  name: string;
  desc: string;
  tag: string;
  price?: string;
  bg: string;
  emoji: string;
  rotate: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    name: "맞춤 쿠션 키링",
    desc: "사진 2장으로 제작하는 대표 상품. 가방에 달고 다니는 나만의 포인트.",
    tag: "BEST",
    price: "10,000원~",
    bg: "bg-pink-soft",
    emoji: "🧸",
    rotate: "-rotate-2",
    featured: true,
  },
  {
    name: "커스텀 인형",
    desc: "사진 1장, 원하는 사이즈로 품에 안을 수 있는 굿즈.",
    tag: "인형",
    bg: "bg-sky-soft",
    emoji: "🐩",
    rotate: "rotate-2",
  },
  {
    name: "카드지갑",
    desc: "사진 3장으로 디자인한 나만의 카드 수납 굿즈.",
    tag: "지갑",
    bg: "bg-butter-soft",
    emoji: "💳",
    rotate: "-rotate-1",
  },
  {
    name: "파우치",
    desc: "소지품을 넣어 데일리하게 들고 다니는 굿즈.",
    tag: "파우치",
    bg: "bg-sage-soft",
    emoji: "👛",
    rotate: "rotate-1",
  },
  {
    name: "인식표",
    desc: "사진 1장으로 제작, 개인정보를 담을 수 있는 우리 아이 인식표.",
    tag: "인식표",
    bg: "bg-cream-deep",
    emoji: "🏷️",
    rotate: "-rotate-2",
  },
  {
    name: "털 보관 유리병 키링",
    desc: "소중한 털을 담아 우리 아이의 추억을 간직하는 기억 보관 굿즈.",
    tag: "메모리얼",
    bg: "bg-pink-soft",
    emoji: "🫙",
    rotate: "rotate-2",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <span className="inline-block rotate-1 rounded-full border-[3px] border-ink bg-white px-4 py-1 text-xs font-bold text-ink">
            PRODUCTS
          </span>
          <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
            우리 아이를 담은 굿즈
          </h2>
          <p className="mx-auto mt-3 max-w-md font-hand text-lg text-brown sm:text-xl">
            사진 한 장이면 충분해요. 반려동물·가족·연인의 순간을
            세상에 하나뿐인 굿즈로 만들어드려요.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.06}
              className={p.featured ? "lg:col-span-2" : undefined}
            >
              <div
                className={`group relative flex h-full flex-col justify-between rounded-3xl border-[3px] border-ink ${p.bg} p-7 sticker-shadow ${p.rotate} transition-all duration-200 hover:-translate-y-1.5 hover:rotate-0 hover:sticker-shadow-lg`}
              >
                {p.featured && (
                  <span className="absolute -top-4 -left-3 -rotate-12 rounded-full border-[3px] border-ink bg-butter px-3 py-1 font-display text-xs text-ink sticker-shadow-sm">
                    {p.tag} ★
                  </span>
                )}
                <div className="flex items-start justify-between">
                  {!p.featured && (
                    <span className="rounded-full border-2 border-ink bg-white px-3 py-1 text-[11px] font-bold text-ink">
                      {p.tag}
                    </span>
                  )}
                  <span className="ml-auto text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12">
                    {p.emoji}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-brown">
                    {p.desc}
                  </p>
                  <p className="mt-4 font-display text-lg text-ink">
                    {p.price ?? "가격 문의"}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-brown-muted">
          * 실제 제작 사진과 상세 옵션은 카카오톡 채널 상담을 통해 안내해드려요.
        </p>
      </div>
    </section>
  );
}
