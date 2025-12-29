import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import IntercomWidget from "@/components/IntercomWidget";
import { Suspense } from "react";

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
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/ef7b2fd3533bc70c853d94385f099d45/script.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YVDV6VPEX6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YVDV6VPEX6');
          `}
        </Script>

        <Suspense fallback={null}>
          <IntercomWidget />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
