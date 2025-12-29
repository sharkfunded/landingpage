import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://www.sharkfunded.com/privacy-policy',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
