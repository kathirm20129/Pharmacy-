import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronDown, Check, ChevronRight, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';


const MedicinesPage = () => {
    // Mock Top Categories
    const topCategories = [
        { name: "External Remedies", image: "/cat-bottle.png" },
        { name: "Syrups, drops, suspensions", image: "/cat-syrup.png" },
        { name: "Tablets and capsules", image: "/cat-pills.png" },
        { name: "External Remedies", image: "/cat-bottle.png" },
        { name: "Tablets and capsules", image: "/cat-pills.png" },
        { name: "External Remedies", image: "/cat-bottle.png" },
        { name: "Syrups, drops, suspensions", image: "/cat-syrup.png" },
        { name: "Syrups, drops, suspensions", image: "/cat-syrup.png" },
    ];

    // Mock Popular Brands
    const popularBrands = [
        ["Smeg", "Gastrorag", "Mach Easy", "Krupps"],
        ["Abat", "Dihr", "Adler", "MEC"],
        ["Comenda", "Elettrobar", "Solis", "Meiko"],
        ["Kocateq", "Silanos", "Amika", "Omniwash"],
        ["Apach", "Electrolux", "Fagor", "Tatra"],
        ["Modular", "Vortmax", "ATA", "Viatto"],
        ["Compack", "EKSI", "Kromo", "Winterhalter"],
        ["Apach", "Electrolux", "Fagor", "Tatra"]
    ];

    // Mock Products
    const productSamples = [
        { name: "Femibion NATALCARE II 30 tablets", brand: "Femibion", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: true, image: "/img1.png" },
        { name: "Sinuforte lyophilisate for solution", brand: "Lirina", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: false, image: "/img2.png" },
        { name: "Detragel gel for external use", brand: "Lirina", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: false, image: "/img3.png" },
        { name: "Heptral 400 mg tablets", brand: "Abbott", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: false, image: "/img4.png" },
        { name: "Velson tablets coated 3 mg, 30 pcs.", brand: "Lirina", price: "41 108", oldPrice: "49 999", isHit: true, isProductOfDay: false, image: "/img5.png" },
        { name: "Bicyclol dispersible tablets", brand: "Lirina", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: false, image: "/img1.png" },
        { name: "Bifiform gastro-resistant capsules", brand: "Pfizer", price: "41 108", oldPrice: "49 999", isHit: false, isProductOfDay: true, image: "/img5.png" },
        { name: "Arbidol capsules 100 mg 10 pcs.", brand: "Otisipharm", price: "41 108", oldPrice: "49 999", isHit: true, isProductOfDay: false, image: "/img2.png" }
    ];

    const products = Array(12).fill(null).map((_, i) => {
        const sample = productSamples[i % productSamples.length];
        return {
            id: i,
            name: sample.name,
            brand: sample.brand,
            packing: "10 pcs",
            code: "153249",
            price: sample.price,
            oldPrice: sample.oldPrice,
            rating: 4,
            isHit: sample.isHit,
            isProductOfDay: sample.isProductOfDay,
            inStock: i !== 3 && i !== 7,
            image: sample.image
        };
    });

    return (
        <div className="bg-[#f8fafc] min-h-screen pb-0 font-sans">
            {/* Header Area */}
            <div className="max-w-[1440px] mx-auto px-6 py-5">
                {/* Top Tags Bar */}
                <div className="flex items-center gap-2 mb-6 text-[12px] font-medium overflow-x-auto pb-2 no-scrollbar">
                    <button className="bg-[#2eb9ff] text-white px-3 py-1.5 rounded-sm flex items-center gap-1 hover:bg-[#25b0f5] flex-shrink-0">
                        % Promotions
                    </button>
                    <button className="bg-[#ff9900] text-white px-3 py-1.5 rounded-sm flex items-center gap-1 hover:bg-[#f59300] flex-shrink-0">
                        <span className="font-bold">P</span> Discounts
                    </button>
                    {["COVID-19", "Allergy", "Medical Cosmetics", "Intestine", "Thrush", "Joints"].map((tag, i) => (
                        <button key={i} className="bg-white border border-[#e5e7eb] text-[#555] px-3 py-1.5 rounded-sm hover:border-[#ccc] flex-shrink-0 whitespace-nowrap">
                            {tag}
                        </button>
                    ))}
                    <button className="bg-white border border-[#e5e7eb] text-[#555] px-3 py-1.5 rounded-sm hover:border-[#ccc] flex-shrink-0">
                        More 52
                    </button>
                </div>

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-4">
                    <Link to="/" className="text-[#25d3af] hover:underline flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <span className="text-[#999]">Alphabetical Search</span>
                </div>

                <h1 className="text-[32px] font-bold text-[#333] leading-tight mb-8">Medicines</h1>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 mb-20">

                {/* FILTER SIDEBAR  */}
                <aside className="hidden lg:block space-y-6">
                    {/* Categories Filter */}
                    <div className="bg-white rounded-sm border border-[#e5e7eb] p-5">
                        <h3 className="text-[13px] font-bold text-[#333] uppercase mb-4 tracking-wide">CATEGORIES</h3>
                        <ul className="space-y-3">
                            {["Obstetrics, gynecology", "Allergy", "Anesthesia, resuscitation", "Antibiotics", "Blood diseases", "Pain, fever", "Hemorrhoids", "Eyes", "Worms, lice, scabies", "Homeopathy", "Diabetes", "Diagnostic means", "Respiratory system", "Stomach, intestine, liver"].map((cat, idx) => (
                                <li key={idx} className={`text-[13px] cursor-pointer hover:text-[#25d3af] transition-colors ${idx === 2 ? 'font-bold text-[#333]' : 'text-[#777]'}`}>
                                    {cat}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 w-full bg-[#25d3af] text-white text-[11px] font-bold py-3 uppercase tracking-wider hover:bg-[#1ebf9e] transition-colors rounded-sm">
                            SHOW ALL CATEGORIES
                        </button>
                    </div>

                    {/* General Filter Block */}
                    <div className="bg-white rounded-sm border border-[#e5e7eb] p-5 space-y-8">
                        <h3 className="text-[13px] font-bold text-[#333] uppercase tracking-wide">FILTER</h3>

                        {/* Price */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[13px] font-bold text-[#333]">Price</span>
                                <ChevronDown className="w-4 h-4 text-[#ccc]" />
                            </div>
                            <div className="flex gap-2 mb-4">
                                <input type="text" placeholder="from 2365" className="w-full h-9 px-3 bg-white border border-[#e5e7eb] rounded-sm text-[12px] placeholder-gray-300 outline-none focus:border-[#25d3af]" />
                                <input type="text" placeholder="to 865878" className="w-full h-9 px-3 bg-white border border-[#e5e7eb] rounded-sm text-[12px] placeholder-gray-300 outline-none focus:border-[#25d3af]" />
                            </div>
                            {/* Slider visual */}
                            <div className="relative h-1 bg-[#e5e7eb] rounded-full mb-2 mt-2">
                                <div className="absolute left-0 w-1/3 h-full bg-[#91d46d] rounded-full"></div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#ffdb4d] rounded-full shadow cursor-pointer z-10"></div>
                                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white border-2 border-[#ffdb4d] rounded-full shadow cursor-pointer z-10"></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-[#ccc] font-medium mt-1">
                                <span>2365</span>
                                <span>865878</span>
                            </div>
                        </div>

                        {/* Country */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[13px] font-bold text-[#333]">Country</span>
                                <ChevronDown className="w-4 h-4 text-[#ccc]" />
                            </div>
                            <div className="space-y-2">
                                {['Belarus', 'Germany', 'Greece', 'Ireland', 'Spain', 'Italy', 'China'].map((country, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer group select-none">
                                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${i === 4 ? 'border-[#25d3af] bg-[#25d3af]' : 'border-[#e5e7eb] bg-white group-hover:border-[#ccc]'}`}>
                                            {i === 4 && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                        </div>
                                        <span className={`text-[13px] ${i === 4 ? 'text-[#333]' : 'text-[#777]'}`}>{country}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Intention/Effect */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[13px] font-bold text-[#333]">Intention</span>
                                <ChevronDown className="w-4 h-4 text-[#ccc]" />
                            </div>
                            <div className="relative mb-3">
                                <input type="text" placeholder="Search..." className="w-full h-8 px-3 bg-white border border-[#e5e7eb] rounded-sm text-[12px] outline-none focus:border-[#25d3af]" />
                                <Search className="w-3.5 h-3.5 text-[#ccc] absolute right-3 top-1/2 -translate-y-1/2" />
                            </div>
                            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                                {['For bronchi', 'For hair', 'For eyes', 'For throat', 'For lips', 'For respiratory tract', 'For stomach'].map((item, i) => (
                                    <label key={i} className="flex items-center gap-3 cursor-pointer group select-none">
                                        <div className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${i === 5 ? 'border-[#25d3af] bg-[#25d3af]' : 'border-[#e5e7eb] bg-white group-hover:border-[#ccc]'}`}>
                                            {i === 5 && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                                        </div>
                                        <span className={`text-[13px] ${i === 5 ? 'text-[#333]' : 'text-[#777]'}`}>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[13px] font-bold text-[#333]">Availability</span>
                                <ChevronDown className="w-4 h-4 text-[#ccc]" />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 cursor-pointer select-none">
                                    <div className="w-4 h-4 rounded-full border-[5px] border-[#25d3af]"></div>
                                    <span className="text-[13px] text-[#25d3af] font-medium">In stock</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer select-none">
                                    <div className="w-4 h-4 rounded-full border border-[#e5e7eb]"></div>
                                    <span className="text-[13px] text-[#777]">On order</span>
                                </label>
                            </div>
                        </div>

                        {/* Sidebar Buttons */}
                        <div className="pt-2 flex gap-2">
                            <button className="flex-1 bg-[#25d3af] text-white text-[11px] font-bold py-3 rounded-sm uppercase tracking-wider hover:bg-[#1ebf9e] transition-colors relative shadow-sm">
                                SHOW
                            </button>
                            <button className="flex-1 bg-[#f1f5f9] text-[#999] text-[11px] font-bold py-3 rounded-sm uppercase tracking-wider hover:bg-[#e2e8f0] transition-colors">
                                RESET
                            </button>
                        </div>
                    </div>

                    {/* Small Sidebar Banners (HIT SALES) */}
                    <div className="space-y-4">
                        <h3 className="text-[13px] font-bold text-[#333] uppercase tracking-wide">HIT SALES</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-sm border border-[#e5e7eb] flex items-center gap-3 relative shadow-sm cursor-pointer hover:shadow-md transition-all">
                                <span className="absolute top-2 left-2 bg-[#ff4d4d] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase">HIT</span>
                                <div className="w-12 h-12 bg-gray-50 flex-shrink-0 flex items-center justify-center p-1"><img src="/img3.png" className="w-full h-full object-contain opacity-80" alt="Sidebar Product" /></div>
                                <div>
                                    <p className="text-[11px] font-medium text-[#333] leading-tight mb-1">Vitamins for eyes complivit...</p>
                                    <p className="text-[12px] font-bold text-[#333]">1 230 RUB.</p>
                                    <div className="flex text-[#ffdb4d] gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-2.5 h-2.5 ${i < 4 ? 'fill-current' : 'text-[#e5e7eb]'}`} />)}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-sm border border-[#e5e7eb] flex items-center gap-3 relative shadow-sm cursor-pointer hover:shadow-md transition-all">
                                <span className="absolute top-2 left-2 bg-[#25d3af] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm uppercase">NEW</span>
                                <div className="w-12 h-12 bg-gray-50 flex-shrink-0 flex items-center justify-center p-1"><img src="/img4.png" className="w-full h-full object-contain opacity-80" alt="Sidebar Product" /></div>
                                <div>
                                    <p className="text-[11px] font-medium text-[#333] leading-tight mb-1">Hematogen russian with raisins...</p>
                                    <p className="text-[12px] font-bold text-[#333]">45 RUB.</p>
                                    <div className="flex text-[#ffdb4d] gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-2.5 h-2.5 ${i < 5 ? 'fill-current' : 'text-[#e5e7eb]'}`} />)}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-3 rounded-sm border border-[#e5e7eb] flex items-center gap-3 relative shadow-sm cursor-pointer hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-gray-50 flex-shrink-0 flex items-center justify-center p-1"><img src="/img5.png" className="w-full h-full object-contain opacity-80" alt="Sidebar Product" /></div>
                                <div>
                                    <p className="text-[11px] font-medium text-[#333] leading-tight mb-1">Cough tablets licorice...</p>
                                    <p className="text-[12px] font-bold text-[#333]">150 RUB.</p>
                                    <div className="flex text-[#ffdb4d] gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className={`w-2.5 h-2.5 ${i < 3 ? 'fill-current' : 'text-[#e5e7eb]'}`} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area (Right Column) */}
                <section>
                    <h2 className="text-[13px] font-bold text-[#333] uppercase mb-4 tracking-wide">CATALOG</h2>
                    {/* Top Categories Grid (Corrected to 4 cols wide cards) */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {topCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white rounded border border-[#e5e7eb] p-2 pr-3 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer h-[60px]">
                                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center p-1">
                                    <img src={cat.image} className="w-full h-full object-contain opacity-80" alt={cat.name} />
                                </div>
                                <span className="text-[11px] font-bold text-[#333] leading-tight">{cat.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Popular Brands List (Scrollable) */}
                    <div className="mb-8">
                        <h3 className="text-[13px] font-bold text-[#333] uppercase mb-4 tracking-wide">POPULAR BRANDS</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-1 text-[11px] text-[#777] max-h-[140px] overflow-y-auto custom-scrollbar pr-2">
                            {/* Duplicating to show scrolling effect */}
                            {[...popularBrands, ...popularBrands].map((col, i) => (
                                <div key={i} className="flex flex-col gap-1.5">
                                    {col.map((brand, j) => (
                                        <a key={j} href="#" className="hover:text-[#25d3af] transition-colors">{brand}</a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sort and Pagination Bar */}
                    <div className="bg-[#f8fafc] mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <span className="text-[12px] font-bold text-[#333] uppercase tracking-wide">SORT BY:</span>
                            <div className="flex items-center gap-6 text-[13px]">
                                <button className="text-[#25d3af] font-bold flex items-center gap-2">
                                    <MenuIconLines /> By price
                                </button>
                                <button className="text-[#999] font-medium hover:text-[#333] transition-colors">
                                    By popularity
                                </button>
                            </div>
                        </div>

                        {/* Top Pagination */}
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4].map(p => (
                                <button key={p} className={`w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-bold transition-all ${p === 1 ? 'bg-white text-[#25d3af] shadow-sm' : 'bg-transparent text-[#999] hover:text-[#333]'}`}>
                                    {p}
                                </button>
                            ))}
                            <span className="text-[#999] text-[11px] font-bold px-1">...</span>
                            <button className="w-7 h-7 rounded-sm flex items-center justify-center text-[11px] font-bold text-[#999] hover:text-[#333]">
                                32
                            </button>
                        </div>
                    </div>

                    {/* Products Grid with Mixed Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {/* First 8 products */}
                        {products.slice(0, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}

                        {/* Benefits Banner (Spans Full Width) */}
                        <div className="col-span-1 md:col-span-2 xl:col-span-4 bg-[#f9fafb] border border-[#f0f0f0] rounded-lg p-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 my-2">
                            {/* Item 1 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#e6fcf5] flex items-center justify-center text-[#25d3af]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#333] mb-0.5">Assortment</h4>
                                    <p className="text-[11px] text-[#777] leading-tight">Equipment, furniture,<br />dishes and inventory</p>
                                </div>
                            </div>
                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-10 bg-[#e5e7eb]"></div>
                            {/* Item 2 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#e6fcf5] flex items-center justify-center text-[#25d3af]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 012-2v0m-2 0a2 2 0 00-2 2" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#333] mb-0.5">Fast delivery</h4>
                                    <p className="text-[11px] text-[#777] leading-tight">To any point in<br />Russia quickly</p>
                                </div>
                            </div>
                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-10 bg-[#e5e7eb]"></div>
                            {/* Item 3 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#e6fcf5] flex items-center justify-center text-[#25d3af]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#333] mb-0.5">Warranty</h4>
                                    <p className="text-[11px] text-[#777] leading-tight">All products<br />certified</p>
                                </div>
                            </div>
                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-10 bg-[#e5e7eb]"></div>
                            {/* Item 4 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#e6fcf5] flex items-center justify-center text-[#25d3af]">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[13px] font-bold text-[#333] mb-0.5">Low prices</h4>
                                    <p className="text-[11px] text-[#777] leading-tight">We try to keep<br />the lowest prices</p>
                                </div>
                            </div>
                        </div>

                        {/* Remaining products */}
                        {products.slice(8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Pagination Bottom */}
                    <div className="mt-12 flex justify-center pb-10">
                        <div className="flex items-center gap-1 bg-white p-1 rounded-sm">
                            {[1, 2, 3, 4].map(p => (
                                <button key={p} className={`w-8 h-8 rounded-sm flex items-center justify-center text-[12px] font-bold transition-all ${p === 1 ? 'bg-[#f1f5f9] text-[#25d3af]' : 'bg-white text-[#555] hover:bg-gray-50'}`}>
                                    {p}
                                </button>
                            ))}
                            <span className="text-[#999] text-[12px] font-bold px-2">...</span>
                            <button className="w-8 h-8 rounded-sm flex items-center justify-center bg-white text-[12px] font-bold text-[#555] hover:bg-gray-50">
                                32
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Additional Sections */}
            <div className="space-y-16 pb-20">

                {/* Month Promo Section */}
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">Month Promotion</h2>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#25d3af] hover:text-[#25d3af] text-[#ccc] transition-colors">
                                <ChevronRight className="w-5 h-5 rotate-180" />
                            </button>
                            <button className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#25d3af] hover:text-[#25d3af] text-[#ccc] transition-colors">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    {/* Reusing ProductCard but need to wrap in div for grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* You Viewed Section (Simplified loop to match style) */}
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">You Viewed</h2>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#25d3af] hover:text-[#25d3af] text-[#ccc] transition-colors"><ChevronRight className="w-5 h-5 rotate-180" /></button>
                            <button className="w-10 h-10 rounded-full border border-[#e5e7eb] flex items-center justify-center hover:border-[#25d3af] hover:text-[#25d3af] text-[#ccc] transition-colors"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.slice(4, 8).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* SEO Text Section */}
                <div className="max-w-[1440px] mx-auto px-6 font-sans">
                    <h2 className="text-[28px] font-extrabold text-[#333] mb-8">Seo text</h2>

                    {/* Top 3 Columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[12px] text-[#555] leading-[1.8] mb-6">
                        {/* Col 1: Text */}
                        <div className="space-y-4">
                            <p>
                                Barclay Plaza Business Center class B+, built in 2008, despite its age, is one of the most sought-after Business Centers in the Western Administrative District of Moscow.
                            </p>
                            <p>
                                Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow City, as well as walking distance to three metro stations add to its relevance. Thus, Park Pobedy metro station is only 800 meters away.
                            </p>
                            <p>
                                Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls. Ceiling height in offices is more than 3 meters.
                            </p>
                        </div>

                        {/* Col 2: Bullet List */}
                        <div>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] bg-transparent mt-1.5 flex-shrink-0"></div>
                                    <span>Barclay Plaza Business Center class B+, built in 2008, despite its age, is one of the most sought-after Business Centers in the Western Administrative District of the city.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] bg-transparent mt-1.5 flex-shrink-0"></div>
                                    <span>Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow City, as well as walking distance to three metro stations add to its relevance. Thus, Park metro station.</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] bg-transparent mt-1.5 flex-shrink-0"></div>
                                    <span>Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Col 3: Text */}
                        <div className="space-y-4">
                            <p>
                                Barclay Plaza Business Center class B+, built in 2008, despite its age, is one of the most sought-after Business Centers in the Western Administrative District of Moscow.
                            </p>
                            <p>
                                Proximity to Kutuzovsky Prospekt, Minskaya St. and Moscow City, as well as walking distance to three metro stations add to its relevance. Thus, Park Pobedy metro station is only 800 meters away.
                            </p>
                            <p>
                                Barclay Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls. Ceiling height in offices is more than 3 meters.
                            </p>
                        </div>
                    </div>

                    {/* Middle Full Width Text */}
                    <div className="text-[12px] text-[#555] leading-[1.8] mb-8">
                        <p>
                            The activities of our company are based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The quality of equipment determines the speed of cooking dishes of any complexity and the quality of your cooks' work. We offer you quality equipment for your business: heating, refrigeration, laundry, coffee, bar, for fast food, neutral. The activities of our company are based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools
                        </p>
                    </div>

                    {/* Green Info Box */}
                    <div className="bg-[#f0fdf9] p-6 flex gap-5 items-start mb-8 rounded-sm">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#25d3af] text-[#25d3af] flex items-center justify-center">
                            <span className="text-[14px] font-bold">!</span>
                        </div>
                        <p className="text-[12px] text-[#555] leading-[1.8]">
                            The activities of our company are based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The quality of equipment determines the speed of cooking dishes of any complexity and the quality of your cooks' work. We offer you quality equipment for your business: heating, refrigeration, laundry, coffee, bar, for fast food, neutral.
                        </p>
                    </div>

                    {/* Bottom Full Width Text */}
                    <div className="text-[12px] text-[#555] leading-[1.8] mb-8">
                        <p>
                            The activities of our company are based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools. The quality of equipment determines the speed of cooking dishes of any complexity and the quality of your cooks' work. We offer you quality equipment for your business: heating, refrigeration, laundry, coffee, bar, for fast food, neutral. The activities of our company are based on providing professional kitchen equipment to catering establishments of any format: hotels, hostels, hypermarkets, canteens, kindergartens and schools
                        </p>
                    </div>

                    {/* Show Full Text Button */}
                    <button className="flex items-center gap-2 text-[#25d3af] text-[11px] font-bold uppercase tracking-wider hover:text-[#1ebf9e] transition-colors mb-20 group">
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        SHOW FULL TEXT
                    </button>
                </div>

                {/* Blog Section */}
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

            {/* Footer Spacer if needed */}
            <div className="h-10"></div>
        </div>
    );
};

// Simple Icon for Sort Menu
const MenuIconLines = () => (
    <svg className="w-3 h-3 mr-1.5 fill-current" viewBox="0 0 12 12">
        <rect y="2" width="12" height="1.5" rx="0.75" />
        <rect y="5.25" width="8" height="1.5" rx="0.75" />
        <rect y="8.5" width="5" height="1.5" rx="0.75" />
    </svg>
);

export default MedicinesPage;
