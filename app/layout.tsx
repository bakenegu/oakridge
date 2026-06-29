import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import TickerBanner from "./components/TickerBanner";
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
  title: "Oakridge Manor Living | Compassionate Assisted Living Community",
  description:
    "Oakridge Manor Living offers compassionate assisted living with personalized care, 24/7 support, nutritious dining, engaging activities, and a welcoming community where seniors can thrive with comfort, dignity, and independence.",
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
        <TickerBanner />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
