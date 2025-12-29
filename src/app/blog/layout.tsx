import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | SharkFunded - Trading Insights & News",
    description: "Stay updated with the latest prop trading insights, market analysis, and SharkFunded news.",
    alternates: {
        canonical: 'https://www.sharkfunded.com/blog',
    },
    openGraph: {
        title: "Blog | SharkFunded",
        description: "Stay updated with the latest prop trading insights, market analysis, and SharkFunded news.",
        url: "https://www.sharkfunded.com/blog",
        siteName: "SharkFunded",
        type: "website",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
