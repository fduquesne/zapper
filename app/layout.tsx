import type { PropsWithChildren } from "react";
import { Metadata } from "next";
import { inter, spaceGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zapper",
  description: "Shuffle through any YouTuber's videos with smart filters.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
