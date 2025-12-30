import React from 'react';

const PaymentMethods = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 mt-8 opacity-90 hover:opacity-100 transition-opacity">
            <span className="text-white/60 text-sm font-medium whitespace-nowrap">Payment Options:</span>
            <div className="flex flex-wrap items-center justify-center gap-3">

                {/* VISA */}
                <div className="bg-white px-2 py-1 rounded-[6px] h-9 flex items-center justify-center min-w-[50px]">
                    <img src="/assets/payment-methods/visa.png" alt="Visa" className="h-full w-auto object-contain" />
                </div>

                {/* MASTERCARD */}
                <div className="bg-white px-2 py-1 rounded-[6px] h-9 flex items-center justify-center min-w-[50px]">
                    <img src="/assets/payment-methods/mastercard.png" alt="Mastercard" className="h-full w-auto object-contain" />
                </div>

                {/* UPI */}
                <div className="bg-white px-2 py-1 rounded-[6px] h-9 flex items-center justify-center min-w-[50px]">
                    <img src="/assets/payment-methods/upi.png" alt="UPI" className="h-3 w-auto object-contain" />
                </div>

                {/* Crypto */}
                <div className="flex items-center justify-center h-9">
                    <img src="/assets/payment-methods/crypto.png" alt="Crypto" className="h-full w-auto object-contain rounded-full" />
                </div>

            </div>
        </div>
    );
};

export default PaymentMethods;
