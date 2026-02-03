import React from 'react';
import {
    Percent,
    CircleDollarSign,
    Star,
    ArrowRight,
    Package,
    Truck,
    ShieldCheck,
    Tag,
    MessageSquare,
    ChevronUp
} from 'lucide-react';
import toothbrushImg from '../assets/toothbrushs.png';
import creamImg from '../assets/Nivea.png';

const HeroSection = () => {
    const tags = [
        { name: 'Promotions', icon: <Percent className="w-3.5 h-3.5" />, color: 'bg-[#4fc3f7] text-white' },
        { name: 'Discounts', icon: <CircleDollarSign className="w-3.5 h-3.5" />, color: 'bg-[#ff9800] text-white' },
        { name: 'COVID-19', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'Allergy', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'Medical cosmetics', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'Intestine', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'Thrush', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'Joints', color: 'bg-white text-gray-400 border border-gray-100' },
        { name: 'More 52', color: 'bg-white text-gray-400 border border-gray-100' },
    ];

    const products = [
        { title: 'Nature\'s Bounty Skin, hair, nails, capsules 60 pcs', price: '244', rating: 5 },
        { title: 'Arbidol® - drug from ARVI and flu, 10 tablets', price: '145', rating: 5 },
        { title: 'Desmoxan - treatment for smoking cessation, 100 tablets', price: '444', rating: 5 },
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-6 py-4 font-sans bg-[#f8fbfa]">

            {/* Small Category Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
                {tags.map((tag, idx) => (
                    <button
                        key={idx}
                        className={`${tag.color} px-3 py-1.5 rounded-md text-[11px] font-bold flex items-center gap-1.5 transition-all`}
                    >
                        {tag.icon}
                        {tag.name}
                    </button>
                ))}
            </div>

            {/* Main Grid - Scaled Down for Precision */}
            <div className="flex flex-row gap-4 mb-8">

                {/* Oral-B Section - Balanced width */}
                <div className="flex-[5] bg-white rounded-[1.5rem] p-8 relative flex items-center overflow-hidden border border-gray-50 min-h-[380px]">
                    <div className="max-w-[280px] relative z-20">
                        <h2 className="text-[34px] font-extrabold text-[#002d67] leading-[1.1] mb-1 tracking-tight">
                            Oral-B vitality
                        </h2>
                        <h3 className="text-[20px] font-medium text-[#002d67] leading-tight mb-8">
                            electric toothbrush
                        </h3>
                        <p className="text-[#9ca3af] text-[12px] leading-relaxed mb-10 font-medium">
                            Clinically proven that an electric toothbrush cleans the oral cavity more effectively than a regular manual toothbrush.
                        </p>
                        <button className="bg-[#002d67] text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity">
                            GO TO CATALOG <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                    <div className="absolute right-0 top-0 bottom-0 w-[55%] flex justify-center items-center">
                        <img src={toothbrushImg} alt="Oral-B" className="h-[85%] w-auto object-contain transform translate-x-4" />
                    </div>
                </div>

                {/* Nivea Section - Slimmer high vertical */}
                <div className="flex-[3] bg-[#ff6b81] rounded-[1.5rem] p-8 relative flex flex-col items-center overflow-hidden">
                    <div className="text-center relative z-20 w-full mb-4">
                        <p className="text-white/90 text-[13px] font-medium mb-1">Moisturizing face cream</p>
                        <h2 className="text-[34px] font-black text-white leading-none">Nivea Care</h2>
                    </div>
                    <div className="flex-1 flex items-center justify-center w-full relative z-10">
                        <img src={creamImg} alt="Nivea" className="h-[180px] w-auto object-contain" />
                    </div>
                    <div className="relative z-20 w-full flex justify-center mt-4">
                        <button className="bg-[#f25e4d] text-white px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                            GO TO CATALOG <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Product Cards - Compact Column */}
                <div className="w-[300px] flex flex-col gap-3">
                    {products.map((p, idx) => (
                        <div key={idx} className="bg-white rounded-[1.5rem] p-3 flex items-center gap-3 hover:shadow-md transition-shadow border border-gray-50 h-[118px]">
                            <div className="w-20 h-20 bg-white flex items-center justify-center flex-shrink-0 relative">
                                <div className="absolute -top-1 -right-1 z-10">
                                    <span className="bg-[#ff4d4d] text-white text-[9px] font-black px-1.5 py-0.5 rounded-sm uppercase">
                                        HIT
                                    </span>
                                </div>
                                <div className="w-14 h-14 bg-gray-100 rounded-lg"></div>
                            </div>
                            <div className="flex flex-col flex-1 justify-center">
                                <h4 className="text-[11px] font-medium text-gray-500 leading-snug mb-2 line-clamp-2">
                                    {p.title}
                                </h4>
                                <div className="flex items-center justify-between">
                                    <span className="text-[14px] font-black text-[#002d67]">{p.price} руб.</span>
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-2.5 h-2.5 text-[#ffcc00] fill-[#ffcc00]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Feature List - Slimmer Bar */}
            <div className="flex items-center justify-between gap-2 py-6 px-10 bg-white rounded-[2rem] shadow-sm relative">
                <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                        <Package className="w-6 h-6 text-green-200" />
                    </div>
                    <div>
                        <h5 className="text-[13px] font-black text-[#002d67]">Assortment</h5>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">Equipment, furniture...</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                        <Truck className="w-6 h-6 text-red-100" />
                    </div>
                    <div>
                        <h5 className="text-[13px] font-black text-[#002d67]">Fast shipping</h5>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">To any point in Russia...</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-blue-100" />
                    </div>
                    <div>
                        <h5 className="text-[13px] font-black text-[#002d67]">Warranty</h5>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">All products certified</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                        <Tag className="w-6 h-6 text-orange-200" />
                    </div>
                    <div>
                        <h5 className="text-[13px] font-black text-[#002d67]">Low prices</h5>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">We try to keep prices lowest</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-pink-100" />
                    </div>
                    <div>
                        <h5 className="text-[13px] font-black text-[#002d67]">4349 reviews</h5>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">Real customer feedback</p>
                    </div>
                </div>
                <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#25d3af] text-white rounded-full flex items-center justify-center shadow-md">
                    <ChevronUp className="w-5 h-5" />
                </button>
            </div>

        </section>
    );
};

export default HeroSection;
