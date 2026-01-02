import { Metadata } from "next";
import RedirectLogic from "./RedirectLogic";

export const metadata: Metadata = {
    title: "Thank You - SharkFunded",
    description: "Thank you for joining SharkFunded.",
    alternates: {
        canonical: "https://sharkfunded.com/thank-you",
    },
};

export default function ThankYouPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-black text-white">
            <RedirectLogic />
        </main>
    );
}
