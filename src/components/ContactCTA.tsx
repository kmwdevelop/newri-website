import Reveal from "./Reveal";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_nmVfn/friend";
const INSTAGRAM_URL = "https://www.instagram.com/newri_newri/";

export default function ContactCTA() {
  return (
    <section id="contact" className="bg-lime px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-xs font-bold tracking-widest text-ink/50">
            CONTACT
          </span>
          <h2 className="mt-2 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            지금 바로 문의해보세요
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-bold text-ink/70 sm:text-base">
            사진 한 장과 함께 편하게 말씀해주시면
            친절하게 안내해드릴게요.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-ink px-8 py-4 text-sm font-bold text-paper transition-opacity hover:opacity-80 sm:w-auto"
            >
              카카오톡 채널 상담
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-2 border-ink px-8 py-4 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-paper sm:w-auto"
            >
              인스타그램 DM
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
