import Image from "next/image";

const KAKAO_CHANNEL_URL = "http://pf.kakao.com/_nmVfn/friend";
const INSTAGRAM_URL = "https://www.instagram.com/newri_newri/";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/brand/logo.jpg"
            alt="New:ri"
            width={26}
            height={26}
            className="rounded-full"
          />
          <span className="font-display text-base text-ink">뉴리뉴리 New:ri</span>
        </div>

        <p className="text-xs leading-relaxed text-ink/45">
          뉴리(New:ri) · 대표: 곽민우 · 서울특별시 용산구 한강대로104라길 34, 402호(후암동)
          <br />
          사업자등록번호: 189-02-02663 · 통신판매업신고: 제2022-서울용산-1519호
          <br />
          문의:{" "}
          <a
            href={KAKAO_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted hover:text-ink"
          >
            카카오톡 채널
          </a>{" "}
          /{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted hover:text-ink"
          >
            인스타그램
          </a>{" "}
          · &copy; {new Date().getFullYear()} New:ri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
