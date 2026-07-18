import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Marez Café • Feel-Good Feasting",
  description:
    "North African sunshine on every plate. Brunch, lunch and everything in between. The café for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full">
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
