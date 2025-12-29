import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "What is Prop Trading? | SharkFunded - Premium Prop Firm",
    description: "Learn about proprietary trading and how SharkFunded's modern prop trading model provides traders with virtual capital to trade without risking their own funds while earning real rewards.",
    alternates: {
        canonical: "https://www.sharkfunded.com/what-is-prop-trading",
    },
    openGraph: {
        title: "What is Prop Trading? | SharkFunded",
        description: "Learn about proprietary trading and how SharkFunded provides traders with virtual capital to earn real rewards.",
        url: "https://www.sharkfunded.com/what-is-prop-trading",
        siteName: "SharkFunded",
        type: "website",
    },
};

export default function WhatIsPropTradingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
