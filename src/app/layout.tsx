
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
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
        className={`${orbitron.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
