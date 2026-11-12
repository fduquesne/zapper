import type { PropsWithChildren } from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zapper",
  description: "Shuffle through any YouTuber's videos with smart filters.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
