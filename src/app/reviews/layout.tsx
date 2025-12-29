import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trader Reviews | SharkFunded - Premium Prop Firm",
    description: "Read reviews from thousands of successful traders. See what our community has to say about their SharkFunded experience with fast payouts and excellent support.",
    alternates: {
        canonical: "https://www.sharkfunded.com/reviews",
    },
    openGraph: {
        title: "Trader Reviews | SharkFunded",
        description: "Read reviews from thousands of successful traders. See what our community has to say about their SharkFunded experience.",
        url: "https://www.sharkfunded.com/reviews",
        siteName: "SharkFunded",
        type: "website",
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
