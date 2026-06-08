import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oakridge Manor Living | Assisted Living in Plano, TX",
  description:
    "Oakridge Manor Living offers thoughtfully designed assisted living at 2421 London Dr, Plano, TX. Warm-hearted care, vibrant community life, and beautiful surroundings. Schedule a tour today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
