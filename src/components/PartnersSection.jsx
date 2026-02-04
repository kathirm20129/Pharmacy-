import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
    // We'll create "CSS-only" logos to approximate the look without needing 12 external assets.
    // This maintains visual fidelity to the screenshot's color/weight layout.
    const partners = [
        {
            id: 1,
            logo: (
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full border-[3px] border-[#81bd41] flex items-center justify-center relative">
                        <div className="w-2 h-2 rounded-full border border-[#81bd41] absolute top-0 right-0 translate-x-[2px] -translate-y-[1px]"></div>
                    </div>
                    <span className="text-[#81bd41] font-bold text-lg tracking-tight">otpbank</span>
                </div>
            )
        },
        {
            id: 2,
            logo: (
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#00915a] flex items-center justify-center text-white text-[8px] font-bold">★</div>
                    <span className="text-[#444] font-bold text-sm tracking-widest uppercase">BNP PARIBAS</span>
                </div>
            )
        },
        {
            id: 3,
            logo: (
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#ff8c00] flex items-center justify-center text-white text-[10px] font-bold">Q</div>
                    <div className="flex flex-col leading-none">
                        <span className="text-[#ff8c00] font-black text-lg uppercase">QIWI</span>
                        <span className="text-[#ff8c00] text-[7px] uppercase tracking-wider">Wallet</span>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            logo: (
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#ffed00] flex items-center justify-center">
                        <span className="text-black font-bold text-xs">X</span>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-[#333] font-bold text-[10px] uppercase">Raiffeisen</span>
                        <span className="text-[#333] font-bold text-[10px] uppercase">BANK</span>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            logo: (
                <div className="flex items-center gap-1">
                    <span className="text-[#003087] font-bold italic text-xl">PayPal</span>
                </div>
            )
        },
        {
            id: 6,
            logo: (
                <div className="flex items-center gap-1">
                    <div className="w-4 h-5 rounded-full bg-[#e30613] -rotate-12"></div>
                    <span className="text-[#e30613] font-black text-lg uppercase tracking-wide">MTS</span>
                    <span className="text-[#e30613] font-medium text-[10px] uppercase mt-1">BANK</span>
                </div>
            )
        },
        {
            id: 7,
            logo: (
                <div className="flex items-center gap-2">
                    <div className="text-[#e30613] font-bold text-xl">🌾</div>
                    <span className="text-[#666] font-bold text-lg tracking-tight">Ziraat Bank</span>
                </div>
            )
        },
        {
            id: 8,
            logo: (
                <div className="flex items-center gap-1">
                    <span className="text-[#4a90e2] font-bold text-sm uppercase">Vostochny Bank</span>
                </div>
            )
        },
        {
            id: 9,
            logo: (
                <div className="flex items-center gap-1">
                    <div className="w-6 h-3 bg-[#00a8e1] skew-x-[-20deg]"></div>
                    <span className="text-[#444] font-bold text-lg uppercase">VTB</span>
                </div>
            )
        },
        {
            id: 10,
            logo: (
                <div className="flex items-center gap-2">
                    <span className="text-[#72c7d5] font-bold text-xl">▲</span>
                    <span className="text-[#72c7d5] font-bold text-sm uppercase tracking-tighter">SEVERGAZBANK</span>
                </div>
            )
        },
        {
            id: 11,
            logo: (
                <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-[#a885d8] text-white flex items-center justify-center font-bold text-xs">IO</div>
                    <span className="text-[#666] font-bold text-lg">money</span>
                </div>
            )
        },
        {
            id: 12,
            logo: (
                <div className="flex items-center gap-2">
                    <span className="text-[#888] font-bold text-lg">✿</span>
                    <span className="text-[#666] font-black text-lg uppercase">VBRR</span>
                </div>
            )
        },
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-20 font-sans">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] font-extrabold text-[#333]">Our Partners</h2>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25d3af] hover:border-[#25d3af] transition-all">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25d3af] hover:border-[#25d3af] transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {partners.map((partner) => (
                    <div key={partner.id} className="h-20 flex items-center justify-center transition-all cursor-pointer hover:scale-105">
                        {partner.logo}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;
