import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Symbols | SharkFunded - Trading Instruments",
    description: "Explore the wide range of trading instruments available at SharkFunded, including Forex, Crypto, Commodities, and Indices.",
    alternates: {
        canonical: 'https://www.sharkfunded.com/symbols',
    },
    openGraph: {
        title: "Symbols | SharkFunded",
        description: "Explore the wide range of trading instruments available at SharkFunded.",
        url: "https://www.sharkfunded.com/symbols",
        siteName: "SharkFunded",
        type: "website",
    },
};

export default function SymbolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
