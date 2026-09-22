import Reveal from "./Reveal";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_nmVfn/friend";
const INSTAGRAM_URL = "https://www.instagram.com/newri_newri/";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-peach px-8 py-16 text-center shadow-soft sm:px-16">
            <span className="text-xs font-bold tracking-widest text-ink/50">
              CONTACT
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              지금 바로 문의해보세요
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-ink/70 sm:text-base">
              사진 한 장과 함께 편하게 말씀해주시면
              친절하게 안내해드릴게요.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={KAKAO_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#FEE500] px-8 py-3.5 text-sm font-bold text-ink shadow-soft-sm transition-transform hover:scale-105 sm:w-auto"
              >
                카카오톡 채널 상담
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-card px-8 py-3.5 text-sm font-bold text-ink shadow-soft-sm transition-transform hover:scale-105 sm:w-auto"
              >
                인스타그램 DM
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
