import Reveal from "./Reveal";

const REVIEW_BG = ["bg-blush", "bg-sky", "bg-butter", "bg-mint", "bg-lavender", "bg-peach"];

const PLACEHOLDER_REVIEWS = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  bg: REVIEW_BG[i % REVIEW_BG.length],
}));

export default function Reviews() {
  return (
    <section id="reviews" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-bold tracking-widest text-ink/40">
            REVIEWS
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            고객님 후기
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink/60 sm:text-base">
            뉴리뉴리와 함께한 소중한 순간들, 고객님들의 후기로 채워질 자리예요.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.05}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft-sm">
                {/* 이미지 자리 — 고객님 사진 전달받으면 교체 예정 */}
                <div
                  className={`flex aspect-square items-center justify-center border-b-2 border-dashed border-ink/15 ${r.bg}`}
                >
                  <div className="flex flex-col items-center gap-1.5 text-ink/50">
                    <span className="text-3xl">📷</span>
                    <span className="text-xs font-bold">사진 준비중</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-sm tracking-wide text-butter-deep">
                    ★★★★★
                  </span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    여기에 고객님의 실제 후기 내용이 들어갈 예정이에요.
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs font-bold text-ink/50">
                    <span>구매자 ○○○</span>
                    <span>맞춤 쿠션 키링</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/40">
          * 실제 후기와 사진으로 순차적으로 채워질 예정이에요.
        </p>
      </div>
    </section>
  );
}
