import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Мужские Архетипы — Диагностика и Восстановление Силы",
  description:
    "Одностраничный funnel с диагностикой теневых архетипов и checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="bg-zinc-950 text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
