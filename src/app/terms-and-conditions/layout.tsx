import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.sharkfunded.com/terms-and-conditions',
    },
};

export default function TermsAndConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
