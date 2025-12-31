import React from "react";
import Image from "next/image";

const payoutImages = [
    "/assets/payout_1.webp?v=whatsapp",
    "/assets/payout_2.webp?v=whatsapp",
    "/assets/payout_3.webp?v=whatsapp",
    "/assets/payout_4.webp?v=whatsapp",
    "/assets/payout_5.webp?v=whatsapp",
    "/assets/payout_6.webp?v=whatsapp",
    "/assets/payout_7.webp?v=whatsapp",
    "/assets/payout_8.webp?v=whatsapp",
    "/assets/payout_9.webp?v=whatsapp",
    "/assets/payout_10.webp?v=whatsapp"
];

const initialPayouts = [
    { amount: "$470.37", user: "Shekhar Kohil", img: payoutImages[0] },
    { amount: "$392", user: "Shubham Mondal", img: payoutImages[1] },
    { amount: "$306.81", user: "Kaushal Thakur", img: payoutImages[2] },
    { amount: "$583.2", user: "Hari Rajput", img: payoutImages[3] },
    { amount: "$792", user: "Jayant Kumar", img: payoutImages[4] },
    { amount: "$1075", user: "Tanishq", img: payoutImages[5] },
    { amount: "$688.96", user: "Sudarshan Pandey", img: payoutImages[6] },
    { amount: "$194.02", user: "Sujt Singh", img: payoutImages[7] },
    { amount: "$4,855", user: "Krushna Belhekar", img: payoutImages[8] },
    { amount: "$580.2", user: "Vishal Gaikwad", img: payoutImages[9] }
];

export default function PayoutsTicker() {
    const [payouts, setPayouts] = React.useState(initialPayouts);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes marquee-scroll {
                        0% { transform: translate3d(0, 0, 0); }
                        100% { transform: translate3d(-50%, 0, 0); }
                    }
                    .marquee-animation {
                        animation: marquee-scroll 40s linear infinite;
                    }
                `
            }} />
            <div className="bg-[rgba(143,155,245,0.15)] overflow-hidden relative rounded-[16px] md:rounded-[20px] w-full h-[80px] md:h-[90px] lg:h-[120px] flex items-center border border-white/5 backdrop-blur-sm">
                {/* Gradient Overlays for Fade Effect */}
                <div className="absolute left-0 top-0 h-full w-[10%] md:w-[120px] z-10 bg-gradient-to-r from-[#171a39] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-[10%] md:w-[120px] z-10 bg-gradient-to-l from-[#171a39] to-transparent pointer-events-none" />

                {/* Marquee Track */}
                <div className="flex gap-4 md:gap-6 lg:gap-8 marquee-animation whitespace-nowrap px-4">
                    {[...payouts, ...payouts, ...payouts, ...payouts].map((payout, index) => (
                        <div
                            key={index}
                            className="bg-[rgba(143,155,245,0.15)] flex-shrink-0 relative overflow-hidden rounded-[12px] md:rounded-[16px] w-[180px] md:w-[240px] lg:w-[300px] h-[60px] md:h-[70px] lg:h-[95px] flex items-center border border-white/5"
                        >
                            {/* Image */}
                            <div className="absolute left-[5px] md:left-[6px] top-[5px] md:top-[6px] h-[50px] md:h-[58px] lg:h-[83px] w-[80px] md:w-[100px] lg:w-[125px] rounded-[8px] md:rounded-[10px] overflow-hidden flex items-center justify-center">
                                <img
                                    alt="Certificate"
                                    className="w-full h-full object-contain"
                                    src={payout.img}
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col justify-center ml-[90px] md:ml-[115px] lg:ml-[140px] gap-0 md:gap-0.5 pointer-events-none pr-4">
                                <p className="font-sans text-[8px] md:text-[10px] text-blue-200/80 uppercase tracking-wider leading-none mb-0.5 md:mb-1">
                                    REWARD CERTIFICATE
                                </p>
                                <p className="font-sans font-bold text-[16px] md:text-[20px] lg:text-[26px] text-white leading-none tracking-tight shadow-black drop-shadow-lg">
                                    {payout.amount}
                                </p>
                                <p className="font-sans font-medium text-[10px] md:text-[12px] lg:text-[14px] text-white/60 leading-tight mt-0.5">
                                    {payout.user}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}