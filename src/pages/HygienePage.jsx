import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Star, Heart, Plus, ChevronLeft, ChevronRight, Check, Package, Sparkles, ShieldCheck, BadgePercent, XCircle, Info } from 'lucide-react';

const HygienePage = () => {
    // Mock Product Data
    const products = [
        {
            id: 1,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 2,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 5,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 3,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 4,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 5,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: false,
            rating: 5,
            tag: "Product of the day",
            image: "/product.png"
        },
        // Duplicate row for grid
        {
            id: 6,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: false,
            rating: 5,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 7,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 8,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 5,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 9,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
        {
            id: 10,
            name: "Velson tablets covered. film. 3 mg, 30 pcs.",
            brand: "Lirina",
            quantity: "10 pcs",
            code: "153249",
            price: "41 108",
            oldPrice: "49 999",
            inStock: true,
            rating: 4,
            tag: "Product of the day",
            image: "/product.png"
        },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans pb-32">
            {/* Breadcrumbs */}
            <div className="max-w-[1440px] mx-auto px-6 py-6 font-sans">
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-4">
                    <Link to="/" className="text-[#25d3af] hover:underline flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <span className="text-[#999]">Favorites</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <h1 className="text-[36px] font-extrabold text-[#333] tracking-tight">Favorites</h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-[#999] hover:text-[#ff4d4d] transition-colors text-[12px] font-bold uppercase tracking-wider">
                            <Trash2 className="w-4 h-4" />
                            CLEAR ALL
                        </button>
                        <button className="bg-[#25d3af] text-white font-bold text-[11px] px-8 py-3 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                            ADD ALL TO CART
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
                    {products.map((item) => (
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
                                <p><span className="text-[#ccc] mr-1">•</span> Quantity in package: {item.quantity}</p>
                                <p><span className="text-[#ccc] mr-1">•</span> Product code: {item.code}</p>
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

                    {/* Scroll to Top Arrow - positioned at end of grid in design? No, usually fixed or conditional. 
                         Screenshot has a green arrow circle button on the right edge. Fixed position.
                     */}
                </div>

                {/* Floating Action Button */}
                <div className="fixed right-8 bottom-32 z-20">
                    <button className="w-12 h-12 rounded-full bg-[#25d3af] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebf9e] transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

                {/* Always Useful Section */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[28px] font-extrabold text-[#333]">Always handy</h2>
                        <div className="flex gap-2">
                            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors bg-white"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors bg-white"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[...products].slice(0, 4).map((item) => (
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
                                    <p><span className="text-[#ccc] mr-1">•</span> Quantity in package: {item.quantity}</p>
                                    <p><span className="text-[#ccc] mr-1">•</span> Product code: {item.code}</p>
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

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                    <div className="flex flex-col items-center text-center">
                        <Package className="w-12 h-12 text-[#25d3af] mb-4 stroke-1" />
                        <h3 className="text-[15px] font-bold text-[#333] mb-2">Assortment</h3>
                        <p className="text-[11px] text-[#777] leading-relaxed max-w-[200px]">Equipment, furniture, tableware and inventory</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Sparkles className="w-12 h-12 text-[#3b82f6] mb-4 stroke-1" />
                        <h3 className="text-[15px] font-bold text-[#333] mb-2">Fast delivery</h3>
                        <p className="text-[11px] text-[#777] leading-relaxed max-w-[200px]">To anywhere in Russia quickly</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ShieldCheck className="w-12 h-12 text-[#a855f7] mb-4 stroke-1" />
                        <h3 className="text-[15px] font-bold text-[#333] mb-2">Warranty</h3>
                        <p className="text-[11px] text-[#777] leading-relaxed max-w-[200px]">All products are certified</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <BadgePercent className="w-12 h-12 text-[#f97316] mb-4 stroke-1" />
                        <h3 className="text-[15px] font-bold text-[#333] mb-2">Low prices</h3>
                        <p className="text-[11px] text-[#777] leading-relaxed max-w-[200px]">We try to keep the lowest prices</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HygienePage;
