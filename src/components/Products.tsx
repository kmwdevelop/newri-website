import Reveal from "./Reveal";

type Product = {
  name: string;
  desc: string;
  tag: string;
  price?: string;
  bg: string;
  featured?: boolean;
};

const PRODUCTS: Product[] = [
  {
    name: "맞춤 쿠션 키링",
    desc: "사진 2장으로 제작하는 대표 상품. 가방에 달고 다니는 나만의 포인트.",
    tag: "BEST",
    price: "10,000원~",
    bg: "bg-cherry",
    featured: true,
  },
  {
    name: "커스텀 인형",
    desc: "사진 1장, 원하는 사이즈로 품에 안을 수 있는 굿즈.",
    tag: "인형",
    bg: "bg-sky",
  },
  {
    name: "카드지갑",
    desc: "사진 3장으로 디자인한 나만의 카드 수납 굿즈.",
    tag: "지갑",
    bg: "bg-mustard",
  },
  {
    name: "파우치",
    desc: "소지품을 넣어 데일리하게 들고 다니는 굿즈.",
    tag: "파우치",
    bg: "bg-grass",
  },
  {
    name: "인식표",
    desc: "사진 1장으로 제작, 개인정보를 담을 수 있는 우리 아이 인식표.",
    tag: "인식표",
    bg: "bg-violet",
  },
  {
    name: "털 보관 유리병 키링",
    desc: "소중한 털을 담아 우리 아이의 추억을 간직하는 기억 보관 굿즈.",
    tag: "메모리얼",
    bg: "bg-tangerine",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="text-xs font-bold tracking-widest text-ink/50">
            PRODUCTS
          </span>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            우리 아이를 담은 굿즈
          </h2>
          <p className="mt-3 max-w-md text-sm font-bold text-ink/60 sm:text-base">
            사진 한 장이면 충분해요. 반려동물·가족·연인의 순간을
            세상에 하나뿐인 굿즈로 만들어드려요.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.05}
              className={p.featured ? "lg:col-span-2" : undefined}
            >
              <div
                className={`group relative flex h-full min-h-[280px] flex-col justify-between ${p.bg} p-7`}
              >
                {p.featured && (
                  <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 text-xs font-bold text-paper">
                    {p.tag}
                  </span>
                )}
                {!p.featured && (
                  <span className="text-xs font-bold text-ink/50">
                    {p.tag}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-black text-ink">{p.name}</h3>
                  <p className="mt-2 max-w-xs text-sm font-bold leading-relaxed text-ink/70">
                    {p.desc}
                  </p>
                  <p className="mt-4 text-lg font-black text-ink">
                    {p.price ?? "가격 문의"}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-bold text-ink/40">
          * 실제 제작 사진과 상세 옵션은 카카오톡 채널 상담을 통해 안내해드려요.
        </p>
      </div>
    </section>
  );
}
