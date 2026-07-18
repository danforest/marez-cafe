import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Marez Café • Feel-Good Feasting",
  description:
    "North African sunshine on every plate. Brunch, lunch and everything in between — the café for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full scroll-smooth`}>
      <body className={`${dmSans.className} relative min-h-full`}>
        {/* Logo watermark — sits behind all page content */}
        <div className="logo-watermark" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/marez-logo.png" alt="" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
