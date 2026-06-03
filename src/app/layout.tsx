import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "최수호 | 영상 콘텐츠 제작자",
  description: "서비스와 기능을 쉽게 이해되는 영상으로 만드는 영상 콘텐츠 제작자 최수호의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
