import React from "react";

const payoutImages = [
    "/assets/payout_1.png",
    "/assets/payout_2.png",
    "/assets/payout_3.png"
];

const payouts = [
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[0] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[1] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[2] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[0] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[1] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[2] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[0] },
    { amount: "$6,314.74", user: "Krishna Kumar", img: payoutImages[1] },
];

export default function PayoutsTicker() {
    return (
        <div className="bg-[rgba(143,155,245,0.15)] overflow-hidden relative rounded-[16px] md:rounded-[20px] w-full h-[80px] md:h-[90px] lg:h-[120px] flex items-center border border-white/5 backdrop-blur-sm">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute left-0 top-0 h-full w-[10%] md:w-[120px] z-10 bg-gradient-to-r from-[#171a39] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-[10%] md:w-[120px] z-10 bg-gradient-to-l from-[#171a39] to-transparent pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex gap-4 md:gap-6 lg:gap-8 animate-marquee whitespace-nowrap px-4 w-full">
                {[...payouts, ...payouts, ...payouts, ...payouts].map((payout, index) => (
                    <div
                        key={index}
                        className="bg-[rgba(143,155,245,0.15)] flex-shrink-0 relative overflow-hidden rounded-[12px] md:rounded-[16px] w-[180px] md:w-[240px] lg:w-[300px] h-[60px] md:h-[70px] lg:h-[95px] flex items-center border border-white/5"
                    >
                        {/* Image */}
                        <div className="absolute left-[5px] md:left-[6px] top-[5px] md:top-[6px] h-[50px] md:h-[58px] lg:h-[83px] w-[70px] md:w-[90px] lg:w-[110px] rounded-[8px] md:rounded-[10px] overflow-hidden">
                            <img alt="" className="w-full h-full object-cover" src={payout.img} />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-center ml-[80px] md:ml-[105px] lg:ml-[125px] gap-0 md:gap-0.5 pointer-events-none">
                            <p className="font-sans font-bold text-[14px] md:text-[18px] lg:text-[24px] text-white leading-tight tracking-tight">
                                {payout.amount}
                            </p>
                            <p className="font-sans font-normal text-[9px] md:text-[12px] lg:text-[14px] text-white/80 leading-tight">
                                {payout.user}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
