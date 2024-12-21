import type { Metadata } from "next";

import Footer from "@/components/common/Footer/Footer";
import NavBar from "@/components/common/NavBar/NavBar";
import WhatsAppIcon from "@/components/common/WhatsAppIcon/WhatsAppIcon";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Unique Tech",
  description: "Unique Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable} antialiased`}>
        <header>
          <NavBar />
        </header>
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppIcon />
      </body>
    </html>
  );
}
