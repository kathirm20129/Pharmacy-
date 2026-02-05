import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUp } from 'lucide-react';

const AboutPage = () => {
    // Mock Data for History
    const historyEvents = [
        { years: "2005-2008", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
        { years: "2008-2012", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
        { years: "2012-2016", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
        { years: "2016-2018", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
        { years: "2018-2020", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
        { years: "2020-2021", text: "Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range." },
    ];

    // Stats Data
    const stats = [
        { icon: "/icon-box.png", title: "Assortment", subtitle: "Equipment, furniture, dishes and inventory" },
        { icon: "/icon-truck.png", title: "Fast delivery", subtitle: "To any point in Russia quickly" },
        { icon: "/icon-shield.png", title: "Warranty", subtitle: "All products certified" },
        { icon: "/icon-piggy.png", title: "Low prices", subtitle: "We try to keep the lowest prices" },
    ];

    // Today Stats
    const todayStats = [
        { icon: "/icon-employee.png", boldText: "More than 5000 employees.", subText: "Real big family!", color: "bg-[#25d3af]" },
        { icon: "/icon-pharmacy.png", boldText: "More than 750 pharmacies in 80 cities", subText: "Central and North-West districts of RF", color: "bg-[#25d3af]" },
        { icon: "/icon-employee.png", boldText: "More than 5000 employees.", subText: "Real big family!", color: "bg-[#25d3af]" },
        { icon: "/icon-pharmacy.png", boldText: "More than 750 pharmacies in 80 cities", subText: "Central and North-West districts of RF", color: "bg-[#25d3af]" },

    ];

    return (
        <div className="bg-white min-h-screen font-sans pb-20">
            {/* Top Bar for categories (reused) */}
            <div className="bg-white border-b border-gray-100 py-3">
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
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-4">
                    <Link to="/" className="text-[#25d3af] hover:underline flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        Home
                    </Link>
                    <span className="text-[10px] text-[#ccc]">»</span>
                    <span className="text-[#999]">About company</span>
                </div>

                <h1 className="text-[32px] font-extrabold text-[#333] mb-8">About company</h1>

                <div className="text-[14px] text-[#555] leading-[1.8] max-w-5xl mb-16 space-y-6">
                    <p>
                        The network of social pharmacies STOLICHKI is part of the pharmacy holding NeoPharm. The first pharmacy in Moscow was opened in 2000. Our mission from the first day was simple: make medicines affordable. We maximally shortened the path of medicines from the manufacturer to the consumer. Collaborating directly with manufacturers and distributors, we not only provide medicines at low prices, but also guarantee the authenticity of goods.
                    </p>
                    <p>
                        In addition to low prices, we also tirelessly work on expanding the assortment so that searching for medicines is simple for you. In pharmacy points and on the website STOLICHKI you will find a wide assortment: medicines, medical technology, medical cosmetics, sports nutrition, goods for moms and babies, etc. In our pharmacies, only medicines approved for sale by the Ministry of Health of Russia are allowed.
                    </p>
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {/* 1. Assortment */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-[#25d3af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-1">Assortment</h3>
                        <p className="text-[11px] text-[#777] leading-tight max-w-[150px]">Equipment, furniture, dishes and inventory</p>
                    </div>
                    {/* 2. Fast Delivery */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-[#25d3af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09"></path>
                                <path d="M15 12H5"></path>
                                <circle cx="7" cy="18" r="2"></circle>
                                <path d="M9 18h6"></path>
                                <circle cx="17" cy="18" r="2"></circle>
                            </svg>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-1">Fast delivery</h3>
                        <p className="text-[11px] text-[#777] leading-tight max-w-[150px]">To any point in Russia quickly</p>
                    </div>
                    {/* 3. Warranty */}
                    <div className="text-center flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-[#a855f7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                <path d="M9 12l2 2 4-4"></path>
                            </svg>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-1">Warranty</h3>
                        <p className="text-[11px] text-[#777] leading-tight max-w-[150px]">All products certified</p>
                    </div>
                    {/* 4. Low Prices */}
                    <div className="text-center flex flex-col items-center relative">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center">
                            <svg className="w-12 h-12 text-[#fbbf24]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20.91 8.84 5.91 2.23a1 1 0 0 0-1.38 1.15l3.63 17.5a1 1 0 0 0 1.62.43l4.36-4.36"></path>
                                <path d="M9.69 16.48 20.2 4.48"></path>
                            </svg>
                        </div>
                        <h3 className="text-[16px] font-bold text-[#333] mb-1">Low prices</h3>
                        <p className="text-[11px] text-[#777] leading-tight max-w-[150px]">We try to keep the lowest prices</p>

                    </div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-10 right-10 w-12 h-12 rounded-full bg-[#25d3af] flex items-center justify-center shadow-lg hover:bg-[#1ebf9e] transition-colors text-white z-50 animate-bounce"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>


                {/* History of Foundation */}
                <div className="mb-20">
                    <h2 className="text-[26px] font-bold text-[#333] mb-6">Foundation history</h2>
                    <p className="text-[14px] text-[#555] leading-[1.8] max-w-6xl">
                        The history of GC NEOPHARM began in 2000 as a small family business - with the opening of several pharmacy kiosks in the Krasnogorsk district of the Moscow region. And it was headed by a pharmacist, a graduate of the first medical institute named after Sechenov - Evgeny Nifantyev. And in 2013, on Tolbukhina Street, the first pharmacy under the brand "Stolichki" was opened, to which not only local residents strictly pulled, but also people from surrounding microdistricts and even suburban Odintsovo. It became clear that the format of the social pharmacy is in demand by the population and "Stolichki" began to open one after another, rapidly expanding the geography of presence.
                    </p>
                </div>

                {/* History of Our Development */}
                <div className="mb-20 p-10 bg-[#f8fafc] rounded-lg">
                    <h2 className="text-[26px] font-bold text-[#333] mb-8">History of our development</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                        {historyEvents.map((event, i) => (
                            <div key={i}>
                                <h3 className="text-[18px] font-bold text-[#333] mb-4">{event.years}</h3>
                                <p className="text-[13px] text-[#777] leading-relaxed">
                                    {event.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Today "Apteka" */}
                <div className="mb-20">
                    <h2 className="text-[22px] font-bold text-[#333] mb-2">Today "Pharmacy"</h2>
                    <p className="text-[13px] text-[#999] mb-8">...is -</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {todayStats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-full ${stat.color} flex items-center justify-center text-white flex-shrink-0`}>
                                    {/* Simplified Icons based on context */}
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-[#333] leading-tight mb-1">{stat.boldText}</p>
                                    <p className="text-[11px] text-[#777]">{stat.subText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our License */}
                <div className="mb-20">
                    <h2 className="text-[26px] font-bold text-[#333] mb-12 text-center">Our license</h2>
                    <div className="flex justify-center gap-10">
                        {/* Placeholder for License Images - using divs to simulate layout */}
                        <div className="relative group cursor-pointer w-full max-w-[1100px]">
                            <img src="/lincence.png" alt="License 1" className="w-full h-auto object-contain pointer-events-none" />
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutPage;
