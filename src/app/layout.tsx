
import type { Metadata } from "next";
import { Inter, Orbitron, Roboto_Slab, Titillium_Web } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const roboto = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  weight: '400',
  subsets: ["latin"],
});



const inter = Inter({
  variable: "--inter-default",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CubiHardware",
  description: "PC Hardware Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} ${roboto.variable} ${titillium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
