import type { Metadata } from "next";
import { Jua, Gaegu } from "next/font/google";
import "./globals.css";

const jua = Jua({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jua",
});

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gaegu",
});

export const metadata: Metadata = {
  title: "New:ri 뉴리뉴리 | 오직, 당신만을 위한 핸드메이드",
  description:
    "반려동물·가족·연인의 사진으로 만드는 세상에 하나뿐인 커스텀 핸드메이드 굿즈. 쿠션 키링, 파우치, 카드지갑, 커스텀 인형까지.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${jua.variable} ${gaegu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
