import Reveal from "./Reveal";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_nmVfn/friend";
const INSTAGRAM_URL = "https://www.instagram.com/newri_newri/";

export default function ContactCTA() {
  return (
    <section id="contact" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border-[4px] border-ink bg-butter px-8 py-16 text-center sticker-shadow-lg sm:px-16">
            <span className="pointer-events-none absolute left-8 top-8 text-2xl">✦</span>
            <span className="pointer-events-none absolute right-8 bottom-8 text-2xl">✧</span>

            <span className="inline-block -rotate-2 rounded-full border-[3px] border-ink bg-white px-4 py-1 text-xs font-bold text-ink">
              CONTACT
            </span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              지금 바로 문의해보세요
            </h2>
            <p className="mx-auto mt-4 max-w-md font-hand text-lg text-brown sm:text-xl">
              사진 한 장과 함께 편하게 말씀해주시면
              친절하게 안내해드릴게요.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={KAKAO_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border-[3px] border-ink bg-[#FEE500] px-8 py-3.5 font-display text-lg text-ink sticker-shadow transition-transform hover:-translate-y-1 hover:rotate-1 active:translate-y-0 active:shadow-none sm:w-auto"
              >
                카카오톡 채널 상담
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border-[3px] border-ink bg-white px-8 py-3.5 font-display text-lg text-ink sticker-shadow transition-transform hover:-translate-y-1 hover:-rotate-1 active:translate-y-0 active:shadow-none sm:w-auto"
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
