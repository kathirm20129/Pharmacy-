import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Star, Heart, ShoppingCart, MapPin, Truck, Info,
    ChevronRight, ChevronLeft, Minus, Plus, Check
} from 'lucide-react';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const productImages = [
        "/product.png",
        "/product.png",
        "/product.png"
    ];

    const analogs = [
        { id: 1, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", stock: true, rating: 4, image: "img1.png" },
        { id: 2, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Femibion", price: "41 108", oldPrice: "49 999", stock: true, rating: 5, image: "img2.png" },
        { id: 3, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", stock: true, rating: 4, image: "img3.png" },
        { id: 4, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", stock: true, rating: 3, image: "img4.png" },
        { id: 5, name: "Velson tablets covered. film. 3 mg, 30 pcs.", brand: "Abbott", price: "41 108", oldPrice: "49 999", stock: false, rating: 5, image: "img5.png" },
    ];

    const reviews = [
        { id: 1, author: "Elena", date: "17 January 2020", rating: 4, text: "I ordered the Amulet knife, made of Damascus steel. Today the transport company brought it. A beautiful knife, although small, but made perfectly! The blade is sharp, the razor fits comfortably within the hand grip and catchy, very stylish, such cool-looking! A huge thank you to the Master! I advise everyone to recommend this store!", likes: 2, dislikes: 0 },
        { id: 2, author: "Vladimir", date: "17 January 2020", rating: 4, text: "A huge thank you to the collective of the Kavkaz Suvenir store for the work. I bow and I am grateful to the Masters! As for the quality of service: the speed when creating the order, especially PP Kizlyar and Kuznechny Dvor for their professionalism and conscientiousness. Congratulations to everyone on Victory Day. I wish you success and prosperity.", likes: 0, dislikes: 4 },
        { id: 3, author: "Vladimir", date: "17 January 2020", rating: 4, text: "", likes: 0, dislikes: 4 },
    ];

    return (
        <div className="bg-white min-h-screen font-sans pb-20">
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-100 py-3 hidden md:block">
                <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar justify-start">
                    <button className="bg-[#2eb9ff] text-white px-3 py-1.5 rounded-sm flex items-center gap-1 hover:bg-[#25b0f5] flex-shrink-0 text-[12px] font-bold">
                        % Promotions
                    </button>
                    <button className="bg-[#ff9900] text-white px-3 py-1.5 rounded-sm flex items-center gap-1 hover:bg-[#f59300] flex-shrink-0 text-[12px] font-bold">
                        <span className="font-bold">P</span> Discounts
                    </button>
                    {["COVID-19", "Allergy", "Medical Cosmetics", "Intestine", "Thrush", "Joints"].map((tag, i) => (
                        <button key={i} className="bg-white border border-[#e5e7eb] text-[#555] px-3 py-1.5 rounded-sm hover:border-[#ccc] flex-shrink-0 text-[12px] whitespace-nowrap">
                            {tag}
                        </button>
                    ))}
                    <button className="bg-white border border-[#e5e7eb] text-[#555] px-3 py-1.5 rounded-sm hover:border-[#ccc] flex-shrink-0 text-[12px]">
                        More 52
                    </button>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 pt-6">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-4 overflow-hidden whitespace-nowrap text-ellipsis">
                    <Link to="/" className="text-[#25d3af] hover:underline flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <Link to="#" className="text-[#25d3af] hover:underline">Medicines</Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <Link to="#" className="text-[#25d3af] hover:underline">Enzyme preparations</Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <span className="text-[#999]">Irritable bowel</span>
                </div>

                <h1 className="text-[28px] md:text-[34px] font-extrabold text-[#333] mb-8 leading-tight">
                    Kreon 10000, capsules enteric soluble 10000 units 20 pcs.
                </h1>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8 flex gap-8 text-[13px] font-bold text-[#999] uppercase tracking-wider overflow-x-auto no-scrollbar">
                    <button className="text-[#333] border-b-2 border-[#ffcc00] pb-4 whitespace-nowrap">MAIN</button>
                    <button className="hover:text-[#333] pb-4 whitespace-nowrap transition-colors">INSTRUCTION</button>
                    <button className="hover:text-[#333] pb-4 whitespace-nowrap transition-colors">VARIANTS</button>
                    <button className="hover:text-[#333] pb-4 whitespace-nowrap transition-colors">REVIEWS</button>
                    <button className="hover:text-[#333] pb-4 whitespace-nowrap transition-colors">DELIVERY</button>
                    <button className="hover:text-[#333] pb-4 whitespace-nowrap transition-colors">PICKUP</button>
                </div>

                {/* Main Product Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 mb-20">
                    {/* Left Column - Gallery */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible">
                            {productImages.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`w-[88px] h-[88px] rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 relative ${activeImage === i ? 'border-[#25d3af]' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <div className="absolute top-1 left-1 bg-[#22c55e] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">Product of the day</div>
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                            <button className="w-[88px] h-[40px] bg-[#ffcc00] flex items-center justify-center rounded-lg text-white font-bold hover:bg-[#e6b800] transition-colors">
                                <ChevronRight className="w-6 h-6 rotate-90" />
                            </button>
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 bg-white rounded-xl border border-gray-100 p-8 relative order-1 md:order-2 flex items-center justify-center min-h-[400px]">
                            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                                <span className="bg-[#25d3af] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Product of the day</span>
                                <span className="bg-[#3b82f6] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase flex items-center gap-1">
                                    <Info className="w-3 h-3" /> Pickup only
                                </span>
                            </div>
                            <img src={productImages[activeImage]} alt="Product Main" className="max-w-full max-h-[400px] object-contain" />
                        </div>
                    </div>

                    {/* Right Column - Info */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 text-[#ffcc00] fill-[#ffcc00]" />)}
                                <Star className="w-4 h-4 text-gray-200 fill-gray-200" />
                                <span className="text-[12px] text-[#999] ml-2">6 reviews</span>
                                <span className="text-[12px] text-[#25d3af] font-medium ml-4">In stock</span>
                            </div>
                            <span className="text-[12px] text-[#999]">Article: 25563</span>
                        </div>

                        <h3 className="text-[13px] font-bold text-[#333] mb-4 uppercase tracking-widest">CHARACTERISTICS</h3>
                        <div className="bg-[#fcfdfd] border border-gray-100 rounded-lg p-6 space-y-4 mb-8">
                            <div className="flex items-start gap-2">
                                <span className="text-[#999] min-w-[140px] text-[13px]">• Manufacturer:</span>
                                <span className="text-[#333] font-bold text-[13px]">Abbott, USA</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-[#999] min-w-[140px] text-[13px]">• Active substance:</span>
                                <span className="text-[#333] font-bold text-[13px]">Pancreatin</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-[#999] min-w-[140px] text-[13px]">• Shelf life:</span>
                                <span className="text-[#333] font-bold text-[13px]">Long term</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-[#999] min-w-[140px] text-[13px]">• Manufacturer:</span>
                                <span className="text-[#333] font-bold text-[13px]">Abbott, USA</span>
                            </div>
                        </div>

                        <div className="bg-[#f8fafc] rounded-xl p-6 border border-gray-100 mb-8">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <p className="text-[12px] text-[#777] mb-1">Actual price</p>
                                    <div className="text-[13px] text-[#ff4d4d] line-through decoration-red-500/50 mb-1">10 000 000 rub.</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[28px] font-bold text-[#333]">9 999 999 <span className="text-[16px]">rub.</span></span>
                                    </div>
                                </div>
                                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ff4d4d] hover:border-[#ff4d4d] transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="flex items-center bg-white rounded-full border border-gray-200 px-1 w-[120px] h-[48px] justify-between shadow-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-full flex items-center justify-center text-[#ff4d4d] hover:bg-gray-50 rounded-l-full transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="text-[16px] font-bold text-[#333]">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-full flex items-center justify-center text-[#25d3af] hover:bg-gray-50 rounded-r-full transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                                <button className="flex-1 bg-[#25d3af] text-white font-bold text-[12px] rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                    IN CART
                                </button>
                            </div>

                            <button className="w-full bg-white border border-[#333] text-[#333] font-bold text-[12px] h-[48px] rounded-full uppercase tracking-widest hover:bg-gray-50 transition-colors">
                                BUY IN 1 CLICK
                            </button>
                        </div>

                        {/* Tabs small */}
                        <div className="flex gap-6 border-b border-gray-100 mb-6 text-[11px] font-bold uppercase tracking-wider text-[#999]">
                            <button className="text-[#333] border-b-2 border-[#333] pb-2">DELIVERY AND PICKUP</button>
                            <button className="hover:text-[#333] pb-2 transition-colors">STORAGE CONDITIONS</button>
                        </div>

                        {/* Delivery Info Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-[#3b82f6]" />
                                    <span className="text-[12px] font-bold text-[#3b82f6]">Sold only by prescription</span>
                                </div>
                                <p className="text-[10px] text-[#999] leading-tight">Goods requiring a prescription are not sent by mail.</p>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-4 h-4 text-[#25d3af]" />
                                    <span className="text-[12px] font-bold text-[#333]">In Moscow</span>
                                </div>
                                <p className="text-[10px] text-[#777] leading-tight mb-1">Delivery today, <span className="font-bold">free from 500 rub.</span></p>
                                <p className="text-[10px] text-[#777] leading-tight">Pickup from pharmacy today, <span className="font-bold">free</span></p>
                            </div>
                            <div className="sm:col-start-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Check className="w-4 h-4 text-[#25d3af]" />
                                    <span className="text-[12px] font-bold text-[#333]">Outside MKAD</span>
                                </div>
                                <p className="text-[10px] text-[#777] leading-tight mb-1">Delivery today, <span className="font-bold">free from 500 rub.</span></p>
                                <p className="text-[10px] text-[#777] leading-tight">Pickup from pharmacy today, <span className="font-bold">free</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analogs Section */}
                <div className="mb-20">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">Analogs</h2>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#333] hover:text-[#333] transition-colors"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {analogs.map((item) => (
                            <div key={item.id} className="group bg-white rounded-xl p-4 border border-transparent hover:border-gray-200 hover:shadow-lg transition-all relative flex flex-col">
                                <span className="absolute top-4 left-4 bg-[#25d3af] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">Product of the day</span>
                                <div className="h-[120px] flex items-center justify-center mb-4">
                                    <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                                </div>
                                <div className="mb-2">
                                    {item.stock ? (
                                        <span className="text-[10px] text-[#25d3af] font-bold">In stock</span>
                                    ) : (
                                        <span className="text-[10px] text-[#ff4d4d] font-bold">Out of stock</span>
                                    )}
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-[13px] font-bold text-[#333] leading-snug mb-2 flex-grow group-hover:text-[#25d3af] transition-colors line-clamp-3">{item.name}</h3>
                                <div className="text-[10px] text-[#999] space-y-1 mb-4">
                                    <p><span className="text-[#ccc]">•</span> Brand: {item.brand}</p>
                                    <p><span className="text-[#ccc]">•</span> Quantity in package: 10 pcs</p>
                                    <p><span className="text-[#ccc]">•</span> Product code: 153249</p>
                                </div>
                                <div className="flex items-end justify-between mt-auto">
                                    <div>
                                        <div className="text-[16px] font-bold text-[#333]">{item.price} RUB.</div>
                                        <div className="text-[11px] text-[#ff4d4d] line-through decoration-red-500/50">{item.oldPrice} RUB.</div>
                                    </div>
                                    <button className="w-9 h-9 rounded-full bg-[#25d3af] flex items-center justify-center text-white shadow-md hover:bg-[#1ebf9e] transition-colors">
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pay Attention Section (Together Cheaper) */}
                <div className="mb-20">
                    <h2 className="text-[26px] font-bold text-[#333] mb-8">Pay attention</h2>
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Card 1 */}
                        <div className="bg-[#f8fafc] rounded-xl p-6 flex gap-6 items-center flex-1 w-full relative h-[140px]">
                            <div className="w-[100px] h-[100px] flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                                <img src="/img1.png" className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] text-[#25d3af] font-bold mb-1 block">In stock</span>
                                <h3 className="text-[13px] font-bold text-[#333] mb-1 line-clamp-2">Velson tablets covered. film. 3 mg, 30 pcs.</h3>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#ffcc00] fill-[#ffcc00]" />)}
                                </div>
                            </div>
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-[#25d3af] z-10">
                                <Plus className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#f8fafc] rounded-xl p-6 flex gap-6 items-center flex-1 w-full relative h-[140px]">
                            <div className="w-[100px] h-[100px] flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                                <img src="/img2.png" className="max-w-full max-h-full object-contain" alt="" />
                            </div>
                            <div className="flex-1">
                                <span className="text-[10px] text-[#25d3af] font-bold mb-1 block">In stock</span>
                                <h3 className="text-[13px] font-bold text-[#333] mb-1 line-clamp-2">Velson tablets covered. film. 3 mg, 30 pcs.</h3>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#ffcc00] fill-[#ffcc00]" />)}
                                </div>
                            </div>
                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-[#25d3af] z-10">
                                <span className="text-xl font-bold">=</span>
                            </div>
                        </div>

                        {/* Total Card */}
                        <div className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center w-full lg:w-[260px] h-[140px]">
                            <p className="text-[11px] text-[#999] mb-1 uppercase tracking-wider font-bold">Together cheaper</p>
                            <div className="text-[22px] font-bold text-[#333] mb-0.5">41 108 RUB.</div>
                            <div className="text-[12px] text-[#ff4d4d] line-through mb-4">49 999 RUB.</div>
                            <button className="w-full bg-[#25d3af] text-white font-bold text-[11px] py-2.5 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                IN CART
                            </button>
                        </div>
                    </div>
                </div>

                {/* Analogs Section 4 (Repeated for visual consistency with screenshot) */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">Analogs</h2>
                        <span className="text-[26px] font-bold text-[#e5e7eb]">4</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {analogs.slice(0, 4).map((item) => (
                            <div key={item.id} className="group bg-white rounded-xl p-4 border border-transparent hover:border-gray-200 hover:shadow-lg transition-all relative flex flex-col">
                                <span className="absolute top-4 left-4 bg-[#25d3af] text-white text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">Product of the day</span>
                                <div className="h-[120px] flex items-center justify-center mb-4">
                                    <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                                </div>
                                <div className="mb-2">
                                    <span className="text-[10px] text-[#25d3af] font-bold">In stock</span>
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3 h-3 ${i < item.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-[13px] font-bold text-[#333] leading-snug mb-2 flex-grow group-hover:text-[#25d3af] transition-colors">{item.name}</h3>
                                <div className="text-[10px] text-[#999] space-y-1 mb-4">
                                    <p><span className="text-[#ccc]">•</span> Brand: {item.brand}</p>
                                    <p><span className="text-[#ccc]">•</span> Quantity in package: 10 pcs</p>
                                    <p><span className="text-[#ccc]">•</span> Product code: 153249</p>
                                </div>
                                <div className="flex items-end justify-between mt-auto">
                                    <div>
                                        <div className="text-[16px] font-bold text-[#333]">{item.price} RUB.</div>
                                        <div className="text-[11px] text-[#ff4d4d] line-through decoration-red-500/50">{item.oldPrice} RUB.</div>
                                    </div>
                                    <button className="w-9 h-9 rounded-full bg-[#25d3af] flex items-center justify-center text-white shadow-md hover:bg-[#1ebf9e] transition-colors">
                                        <ShoppingCart className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Instructions & Reviews Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Instructions */}
                    <div>
                        <h2 className="text-[26px] font-bold text-[#333] mb-6">Instructions for use</h2>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Manufacturer", "Briefly about product", "Indications", "How to take, course and dosage", "Description", "Functional benefits", "Storage conditions", "Shelf life", "Active substance", "Pharmaceutical form"].map((tag, i) => (
                                <button key={i} className={`px-3 py-1.5 rounded-sm text-[11px] font-medium border ${i === 0 ? 'bg-[#25d3af] text-white border-[#25d3af]' : 'bg-white border-gray-200 text-[#555] hover:border-gray-300'}`}>
                                    {tag}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-[18px] font-bold text-[#333] mb-4">Manufacturer</h3>
                                <p className="text-[13px] font-bold text-[#25d3af]">Abbott, USA</p>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-[#333] mb-4">Briefly about the product</h3>
                                <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                                    One should not forget, however, that the further development of various forms of activity plays an important role in the formation of further directions of development. The task of the organization, especially the consultation with a broad asset requires us to analyze further development directions.
                                </p>
                                <p className="text-[13px] text-[#555] leading-relaxed">
                                    The task of the organization, especially the new model of organizational activity largely determines the creation of a personnel training system that meets urgent needs. Everyday practice shows that constant information and propaganda support of our activities allows us to assess the importance of progressive development directions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold text-[#333] mb-4">Indications</h3>
                                <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                                    One should not forget, however, that the further development of various forms of activity plays an important role in the formation of further directions of development. The task of the organization, especially the consultation with a broad asset requires us to analyze further development directions.
                                </p>
                                <p className="text-[13px] text-[#555] leading-relaxed mb-6">
                                    Kreon ® 10 000 may be useful:
                                </p>
                            </div>
                        </div>

                        <button className="bg-[#25d3af] text-white font-bold text-[11px] px-8 py-3 rounded-sm uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors w-full sm:w-auto">
                            SHOW FULL TEXT
                        </button>
                    </div>

                    {/* Reviews */}
                    <div>
                        <h2 className="text-[26px] font-bold text-[#333] mb-6">Reviews</h2>

                        <div className="bg-[#f8fafc] rounded-xl p-8 mb-8">
                            <h3 className="text-[16px] font-bold text-[#333] mb-4">Leave a review</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="text-[13px] text-[#555]">Rating:</span>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#ffcc00] fill-[#ffcc00] cursor-pointer" />)}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="h-10 px-4 rounded-full border border-gray-200 text-[12px] outline-none focus:border-[#25d3af] bg-white" />
                                <input type="email" placeholder="Your e-mail" className="h-10 px-4 rounded-full border border-gray-200 text-[12px] outline-none focus:border-[#25d3af] bg-white" />
                            </div>
                            <textarea placeholder="Write a detailed review, it's important..." className="w-full h-24 p-4 rounded-xl border border-gray-200 text-[12px] outline-none focus:border-[#25d3af] bg-white resize-none mb-4"></textarea>

                            <div className="flex items-center gap-4">
                                <button className="bg-[#25d3af] text-white font-bold text-[11px] px-8 py-2.5 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                    SEND
                                </button>
                                <p className="text-[9px] text-[#999] leading-tight max-w-[200px]">
                                    By clicking the button, you agree to the processing of <a href="#" className="text-[#25d3af] underline">personal data</a>
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {reviews.map(review => (
                                <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                                <img src={`https://ui-avatars.com/api/?name=${review.author}&background=random`} alt={review.author} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="text-[14px] font-bold text-[#333]">{review.author}</h4>
                                                <div className="flex gap-0.5">
                                                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-2.5 h-2.5 ${i < review.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />)}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-[11px] text-[#999]">{review.date}</span>
                                            <button className="text-[#3b82f6] text-[11px] hover:underline">Reply</button>
                                            <div className="flex items-center gap-1 text-[11px] text-[#999]">
                                                <button className="hover:text-[#25d3af] flex items-center gap-0.5"><img src="https://img.icons8.com/material-outlined/24/000000/thumb-up.png" className="w-3 h-3 opacity-50" /> {review.likes}</button>
                                                <button className="hover:text-[#ff4d4d] flex items-center gap-0.5"><img src="https://img.icons8.com/material-outlined/24/000000/thumb-down.png" className="w-3 h-3 opacity-50" /> {review.dislikes}</button>
                                            </div>
                                        </div>
                                    </div>
                                    {review.text && (
                                        <p className="text-[12px] text-[#555] leading-relaxed bg-[#f9fafb] p-3 rounded-lg">
                                            {review.text}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#25d3af] text-white font-bold text-[11px] px-8 py-3 rounded-sm uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors w-full mt-8">
                            SHOW ALL REVIEWS
                        </button>
                    </div>
                </div>

                {/* Delivery & Pickup Tables Details */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-[24px] font-bold text-[#333] mb-2 leading-tight">Delivery and pickup in Moscow and region</h2>
                        <p className="text-[12px] text-[#777] mb-6">Delivery of orders within MKAD</p>

                        <div className="bg-white rounded-none border-t border-b border-gray-100 text-[13px] mb-8 overflow-x-auto">
                            <div className="min-w-[300px]">
                                <div className="grid grid-cols-3 bg-[#fcfdfd] py-3 text-[11px] font-bold text-[#999] uppercase tracking-wider">
                                    <span>Order delivery</span>
                                    <span>up to 500 rub.</span>
                                    <span>from 500 rub.</span>
                                </div>
                                <div className="grid grid-cols-3 py-4 text-[#333] font-medium border-t border-gray-100">
                                    <span>within MKAD</span>
                                    <span>150 rub.</span>
                                    <span>Free</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-[12px] text-[#777] mb-6">Delivery of orders outside MKAD</p>
                        <div className="bg-white rounded-none border-t border-b border-gray-100 text-[13px] overflow-x-auto">
                            <div className="min-w-[300px]">
                                <div className="grid grid-cols-3 bg-[#fcfdfd] py-3 text-[11px] font-bold text-[#999] uppercase tracking-wider">
                                    <span>Order delivery</span>
                                    <span>up to 500 rub.</span>
                                    <span>from 500 rub.</span>
                                </div>
                                <div className="grid grid-cols-3 py-4 text-[#333] font-medium border-t border-gray-100">
                                    <span>outside MKAD</span>
                                    <span>150 rub.</span>
                                    <span>Free</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[24px] font-bold text-[#333] mb-2 leading-tight">Pickup in Moscow and region</h2>
                        <p className="text-[12px] text-[#777] mb-6">Delivery of orders within MKAD</p>

                        <div className="bg-white rounded-none border-t border-b border-gray-100 text-[13px] overflow-x-auto">
                            <div className="min-w-[400px]">
                                <div className="grid grid-cols-[1fr_100px_80px] bg-[#fcfdfd] py-3 text-[11px] font-bold text-[#999] uppercase tracking-wider">
                                    <span>List of pharmacies</span>
                                    <span>Issuance of goods</span>
                                    <span>Cost</span>
                                </div>
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="grid grid-cols-[1fr_100px_80px] py-4 text-[#333] font-medium border-t border-gray-100">
                                        <span className="pr-4">EAPTEKA Moscow region, Podolsk city, Sverdlova st, 13</span>
                                        <span className="text-[#999] text-[12px]">within hour</span>
                                        <span className="text-[#999] text-[12px]">Free</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link to="#" className="text-[11px] text-[#25d3af] font-bold uppercase tracking-widest mt-6 inline-block hover:underline">
                            + ALL DELIVERY CONDITIONS
                        </Link>
                    </div>
                </div>

                {/* SEO Text */}
                <div className="md:col-span-2 text-[12px] text-[#777] leading-relaxed mb-16 space-y-4">
                    <h3 className="text-[24px] font-bold text-[#333] mb-4">SEO text</h3>
                    <p>
                        Business center Barklay Plaza class B+, built in 2008, despite its age, is one of the most popular Business Centers in the Western Administrative District of Moscow. Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow City, as well as walking distance to three metro stations adds to its relevance. Thus, Park Pobedy metro station is only 800 meters away.
                    </p>
                    <p>
                        Barklay Plaza stands out with a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls. Ceiling height in offices is more than 3 meters.
                    </p>
                    <p>
                        The activity of our company is based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The speed of preparing dishes of any complexity and the quality of your cooks' work depend on the quality of the equipment. We offer you high-quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, for fast food, neutral. The activity of our company is based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools.
                    </p>
                    <div className="bg-[#e0f7fa] p-6 rounded-lg flex gap-4 text-[#006064] text-[12px] my-6">
                        <Info className="w-6 h-6 flex-shrink-0" />
                        <p className="leading-relaxed">
                            The activity of our company is based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The speed of preparing dishes of any complexity and the quality of your cooks' work depend on the quality of the equipment. We offer you high-quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, for fast food, neutral.
                        </p>
                    </div>
                    <Link to="#" className="text-[#25d3af] font-bold uppercase tracking-widest text-[11px] hover:underline flex items-center gap-1">
                        + SHOW ALL TEXT
                    </Link>
                </div>

                {/* Blog Section (User added - preserving but formatting) */}
                <div className="max-w-[1440px] mx-auto px-6 mb-20">
                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">Health Blog</h2>
                        <Link to="/blog" className="text-[11px] font-bold text-[#25d3af] uppercase tracking-wider hover:underline">SHOW ALL</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "https://i.pinimg.com/1200x/46/c8/54/46c854a58a8ec3b49ae8627ecb90e0eb.jpg",
                            "https://i.pinimg.com/736x/87/08/ed/8708edba2ec137f629352db04b01cb6f.jpg",
                            "https://i.pinimg.com/736x/5d/29/ac/5d29ac489b2a58ecc080a7c51c2eae4a.jpg",
                            "https://i.pinimg.com/736x/95/c1/c4/95c1c408d9ffc0f51d05bae9c4d89fd0.jpg"
                        ].map((imgUrl, i) => (
                            <div key={i} className="bg-white group cursor-pointer">
                                <div className="relative h-[200px] bg-gray-100 overflow-hidden mb-4 rounded-sm">
                                    <img src={imgUrl} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all opacity-90 hover:opacity-100 scale-100 group-hover:scale-105" alt="Blog Post" />
                                </div>
                                <h3 className="text-[14px] font-bold text-[#333] leading-snug mb-2 group-hover:text-[#25d3af] transition-colors">How not to get sick in the cold season?</h3>
                                <p className="text-[11px] text-[#777] leading-relaxed line-clamp-3">Doctors' advice and effective methods for preventing flu and SARS. Learn how to strengthen your immunity and stay healthy.</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductPage;
