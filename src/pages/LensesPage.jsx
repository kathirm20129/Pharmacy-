import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Star, Minus, Plus, ChevronLeft, ChevronRight, ShoppingCart, X } from 'lucide-react';

const LensesPage = () => {
    // Mock Cart Data
    const cartItems = [
        {
            id: 1,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantityInPack: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/img1.png",
            count: 1
        },
        {
            id: 2,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantityInPack: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 5,
            tag: null, // No tag for this one in screenshot? let's stick to design
            image: "/img2.png",
            count: 1
        },
        {
            id: 3,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantityInPack: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: null,
            image: "/img3.png",
            count: 1
        },
        {
            id: 4,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantityInPack: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: null,
            image: "/img4.png",
            count: 1
        }
    ];

    // Always Handy Items (Reuse mock data structure)
    const handyItems = [
        { id: 101, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", tag: "Product of the day", inStock: false, rating: 4, image: "/img1.png" },
        { id: 102, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", tag: "Product of the day", inStock: true, rating: 5, image: "/img2.png" },
        { id: 103, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", tag: "Product of the day", inStock: true, rating: 4, image: "/img3.png" },
        { id: 104, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", tag: "Product of the day", inStock: true, rating: 4, image: "/img4.png" },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans pb-32">
            <div className="max-w-[1440px] mx-auto px-6 py-6 font-sans">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-4">
                    <Link to="/" className="text-[#25d3af] hover:underline flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <span className="text-[#999]">Cart</span>
                </div>

                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-[36px] font-extrabold text-[#333] tracking-tight">Cart</h1>
                    <button className="flex items-center gap-2 text-[#999] hover:text-[#ff4d4d] transition-colors text-[12px] font-bold uppercase tracking-wider">
                        <Trash2 className="w-4 h-4" />
                        CLEAR CART
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-20">
                    {/* Cart Items List */}
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl p-6 relative flex flex-col md:flex-row items-start md:items-center gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                {/* Remove Icon (absolute) */}
                                <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-500">
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Tag */}
                                {item.tag && (
                                    <span className="absolute top-4 left-4 bg-[#25d3af] text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide z-10">{item.tag}</span>
                                )}

                                {/* Image */}
                                <div className="w-full md:w-[120px] h-[100px] flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg">
                                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] text-[#25d3af] font-bold">In stock</span>
                                        <div className="flex gap-0.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="text-[14px] font-bold text-[#333] leading-snug mb-2">{item.name}</h3>
                                    <div className="text-[10px] text-[#999] space-y-1">
                                        <p><span className="text-[#ccc] mr-1">•</span> Brand: {item.brand}</p>
                                        <p><span className="text-[#ccc] mr-1">•</span> Quantity in package: {item.quantityInPack}</p>
                                        <p><span className="text-[#ccc] mr-1">•</span> Product code: {item.code}</p>
                                    </div>
                                </div>

                                {/* Price & Actions */}
                                <div className="flex flex-row md:flex-col items-center md:items-end gap-6 md:gap-4 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-[18px] font-bold text-[#333] whitespace-nowrap">{item.price} RUB.</div>
                                        <div className="text-[11px] text-[#ff4d4d] line-through decoration-red-500/50">{item.oldPrice} RUB.</div>
                                    </div>

                                    <div className="flex items-center bg-[#f8fafc] rounded-full px-1 w-[100px] h-[36px] justify-between">
                                        <button className="w-8 h-full flex items-center justify-center text-[#ff4d4d] hover:bg-gray-100 rounded-l-full transition-colors">
                                            <Minus className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="text-[14px] font-bold text-[#333]">{item.count}</span>
                                        <button className="w-8 h-full flex items-center justify-center text-[#25d3af] hover:bg-gray-100 rounded-r-full transition-colors">
                                            <Plus className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <h2 className="text-[18px] font-extrabold text-[#333] mb-6">Your order</h2>

                            <div className="space-y-3 mb-8">
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="text-[#777]">Discount</span>
                                    <span className="font-bold text-[#333]">-32 rub</span>
                                </div>
                                <div className="flex justify-between items-center text-[13px]">
                                    <span className="text-[#777]">Total without delivery</span>
                                    <span className="font-bold text-[#333]">548 rub</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#25d3af] text-white font-bold text-[12px] py-4 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                PLACE ORDER
                            </button>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <h2 className="text-[18px] font-extrabold text-[#333] mb-4">Promo code</h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    className="w-full h-12 pl-4 pr-12 rounded-full border border-gray-200 text-[13px] outline-none focus:border-[#25d3af] bg-white transition-colors"
                                />
                                <button className="absolute right-1 top-1 w-10 h-10 bg-[#25d3af] rounded-full flex items-center justify-center text-white hover:bg-[#1ebf9e] transition-colors">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 'Always handy' Section */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-extrabold text-[#333]">Always handy</h2>
                        <div className="flex gap-2">
                            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors bg-white"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors bg-white"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {handyItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl p-6 border border-transparent hover:border-gray-200 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all relative flex flex-col group h-[420px]">
                                <span className="absolute top-4 left-4 bg-[#25d3af] text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide z-10">{item.tag}</span>

                                <div className="h-[160px] flex items-center justify-center mb-6 relative">
                                    <img src={item.image} alt={item.name} className="max-h-full object-contain mix-blend-multiply" />
                                </div>

                                <div className="mb-3">
                                    {item.inStock ? (
                                        <span className="text-[10px] text-[#25d3af] font-bold">In stock</span>
                                    ) : (
                                        <span className="text-[10px] text-[#ff4d4d] font-bold">Out of stock</span>
                                    )}
                                    <div className="flex gap-0.5 mt-1.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-[13px] font-bold text-[#333] leading-snug mb-3 flex-grow group-hover:text-[#25d3af] transition-colors">{item.name}</h3>

                                <div className="text-[10px] text-[#999] space-y-1.5 mb-6">
                                    <p><span className="text-[#ccc] mr-1">•</span> Brand: {item.brand}</p>
                                    <p><span className="text-[#ccc] mr-1">•</span> Quantity in package: 10 pcs</p>
                                    <p><span className="text-[#ccc] mr-1">•</span> Product code: 153249</p>
                                </div>

                                <div className="flex items-end justify-between mt-auto">
                                    <div>
                                        <div className="text-[18px] font-bold text-[#333]">{item.price} RUB.</div>
                                        <div className="text-[11px] text-[#ff4d4d] line-through decoration-red-500/50">{item.oldPrice} RUB.</div>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-[#25d3af] flex items-center justify-center text-white shadow-lg shadow-[#25d3af]/30 hover:bg-[#1ebf9e] transition-colors">
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll To Top Button (Fixed) */}
                <div className="fixed right-8 bottom-32 z-20">
                    <button className="w-12 h-12 rounded-full bg-[#25d3af] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebf9e] transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LensesPage;
