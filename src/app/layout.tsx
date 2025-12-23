import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import IntercomWidget from "@/components/IntercomWidget";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SharkFunded - Premium Prop Firm",
  description: "Join SharkFunded and start your trading journey.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};



// ... existing imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased`}
      >
        <SmoothScroll />
        <IntercomWidget />
        {children}
      </body>
    </html>
  );
}
