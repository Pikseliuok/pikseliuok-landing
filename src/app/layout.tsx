import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    locale: "lt_LT",
    siteName: "Pikseliuok",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pikseliuok yra r/place įkvėptas projektas, skirtas Lietuvai. Jame galima padėti pikselius ant bendros drobės, kuriant bendrą meno kūrinį.",
      },
    ],
  },
  title: "Pikseliuok",
  description:
    "Pikseliuok yra r/place įkvėptas projektas, skirtas Lietuvai. Jame galima padėti pikselius ant bendros drobės, kuriant bendrą meno kūrinį.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
