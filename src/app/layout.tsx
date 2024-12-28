import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/components/common/Footer/Footer";
import NavBar from "@/components/common/NavBar/NavBar";
import WhatsAppIcon from "@/components/common/WhatsAppIcon/WhatsAppIcon";
import { Inter, Pacifico } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

/* Inter font */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

/* Pacifico font */
const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
  display: "swap",
});

/* Global metadata */
export const metadata: Metadata = {
  title: {
    default: "Unique Tech",
    template: "%s - Unique Tech",
  },
  description:
    "Unique tech is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.",
  keywords: "tech, unique tech, technology solutions, innovative tech",
  twitter: {
    card: "summary_large_image",
    site: "@UniqueTech",
    title: "Unique Tech",
    description:
      "Unique tech is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
  },
  openGraph: {
    title: "Unique Tech",
    description:
      "Unique tech is where your imagination and our expertise converge to create design solutions that elevate your brand and set you apart from the competition.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Unique Tech Logo",
        width: 320,
        height: 320,
      },
    ],
    url: "https://unique-tech-six.vercel.app",
  },
};

/* Root layout */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable} antialiased`}>
        <header>
          <ToastContainer />
          <NavBar />
        </header>
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppIcon />
      </body>
    </html>
  );
}
