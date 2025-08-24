import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedPixels from "@/app/components/AnimatedPixels";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pikseliuok.lt"),
  openGraph: {
    type: "website",
    locale: "lt_LT",
    siteName: "Pikseliuok",
    images: [
      {
        url: "/logo.png",
        width: 914,
        height: 915,
        alt: "Pikseliuok yra r/place įkvėptas projektas, skirtas Lietuvai. Jame galima padėti pikselius ant bendros drobės, kuriant bendrą meno kūrinį.",
      },
    ],
  },
  title: "Pikseliuok",
  description:
    "Pikseliuok yra r/place įkvėptas projektas, skirtas Lietuvai. Jame galima padėti pikselius ant bendros drobės, kuriant bendrą meno kūrinį.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <AnimatedPixels asBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow flex justify-center items-start px-4 py-8">
            <div className="rounded-2xl shadow-2xl">{children}</div>
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
