import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

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
        <Loader>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Loader>
        <Analytics />
      </body>
    </html>
  );
}
