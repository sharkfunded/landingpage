import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.sharkfunded.com/about-us',
    },
};

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
