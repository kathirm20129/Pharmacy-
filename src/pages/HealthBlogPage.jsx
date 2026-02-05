import React, { useState } from 'react';
import { Search, ChevronRight, ArrowUp } from 'lucide-react';

const HealthBlogPage = () => {
    const categories = [
        { name: 'COVID-19', count: 14, icon: <CovidIcon className="w-6 h-6" /> },
        { name: 'Allergy', count: 24, icon: <AllergyIcon className="w-6 h-6" /> },
        { name: 'Cosmetics', count: 124, icon: <CosmeticsIcon className="w-6 h-6" /> },
        { name: 'Intestines', count: 2, icon: <IntestinesIcon className="w-6 h-6" /> },
        { name: 'Thrush', count: 14, icon: <ThrushIcon className="w-6 h-6" /> },
        { name: 'Overweight', count: 51, icon: <OverweightIcon className="w-6 h-6" /> },
        { name: 'Joints', count: 123, icon: <JointsIcon className="w-6 h-6" /> },
        { name: 'Vision', count: 11, icon: <VisionIcon className="w-6 h-6" /> },
        { name: 'Gout', count: 14, icon: <GoutIcon className="w-6 h-6" /> },
    ];

    const tags = [
        "Manufacturer", "Briefly about the product", "Indications", "How to take, course of administration and dosage",
        "Description", "Functional benefits", "Storage conditions", "Shelf life", "Active substance", "Dosage form"
    ];

    const postImages = [
        "https://i.pinimg.com/1200x/46/c8/54/46c854a58a8ec3b49ae8627ecb90e0eb.jpg", // Hand with pills
        "https://i.pinimg.com/736x/87/08/ed/8708edba2ec137f629352db04b01cb6f.jpg", // Bottle with white pills
        "https://i.pinimg.com/736x/5d/29/ac/5d29ac489b2a58ecc080a7c51c2eae4a.jpg", // Bottle on orange bg
        "https://i.pinimg.com/736x/95/c1/c4/95c1c408d9ffc0f51d05bae9c4d89fd0.jpg"  // Colorful pills
    ];

    const posts = Array(12).fill(null).map((_, i) => ({
        title: 'Active life without "hot flashes" - all in your hands',
        subtitle: 'It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.',
        image: postImages[i % 4]
    }));

    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="bg-[#f8fafc] font-sans pb-20">
            <div className="max-w-[1440px] mx-auto px-6 pt-6">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[12px] text-[#999] mb-8">
                    <span className="hover:text-[#25d3af] cursor-pointer">Home</span>
                    <span className="text-[#ccc]">/</span>
                    <span className="hover:text-[#25d3af] cursor-pointer">Medicines</span>
                    <span className="text-[#ccc]">/</span>
                    <span className="hover:text-[#25d3af] cursor-pointer">Enzyme preparations</span>
                    <span className="text-[#ccc]">/</span>
                    <span className="text-[#25d3af]">Health Blog</span>
                </div>

                {/* Title */}
                <h1 className="text-[32px] font-extrabold text-[#333] mb-8">Health Blog</h1>

                {/* Categories */}
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar mb-8">
                    {categories.map((cat, i) => (
                        <button key={i} className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg border border-transparent hover:border-[#25d3af] hover:shadow-md transition-all min-w-max group">
                            <span className="text-[#25d3af] group-hover:opacity-100">{cat.icon}</span>
                            <span className="text-[13px] font-bold text-[#555] group-hover:text-[#25d3af]">{cat.name}</span>
                            <span className="text-[11px] text-[#ccc] font-medium">{cat.count}</span>
                        </button>
                    ))}
                    <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-100 shadow-sm text-gray-300 hover:text-[#25d3af] flex-shrink-0">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Start typing or enter product name..."
                        className="w-full h-14 bg-white rounded-full pl-8 pr-14 shadow-sm border border-transparent focus:border-[#25d3af] outline-none text-[14px] placeholder:text-[#999]"
                    />
                    <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-[#25d3af] w-5 h-5" />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {tags.map((tag, i) => (
                        <button key={i} className={`px-4 py-2 rounded-full text-[11px] font-bold transition-colors ${i === 0 ? 'bg-[#25d3af] text-white' : 'bg-white text-[#555] hover:bg-[#e6fcf5] hover:text-[#25d3af]'}`}>
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Featured Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Left: Main Featured Post */}
                    <div className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                        <div className="h-[360px] rounded-2xl overflow-hidden mb-6 relative shadow-sm">
                            <img src={postImages[0]} alt="Featured" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <h2 className="text-[28px] font-extrabold text-[#333] mb-4 leading-tight group-hover:text-[#25d3af] transition-colors">
                            Active life without "hot flashes" - all in your hands
                        </h2>
                        <p className="text-[13px] text-[#777] leading-[1.6] mb-4">
                            On the other hand, the framework and place of personnel training allows assessing the significance of forms of development. The task of the organization, especially the strengthening and development of the structure representing an interesting experiment of testing forms of development.
                        </p>
                        <p className="text-[13px] text-[#777] leading-[1.6]">
                            Thus, the constant information-propaganda support of our activities allows assessing the significance of essential financial and administrative conditions. Everyday practice shows.
                        </p>
                    </div>

                    {/* Right: 4 Grid Posts */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                        {Array(4).fill(null).map((_, i) => (
                            <div key={i} className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-[180px] rounded-xl overflow-hidden mb-3 relative shadow-sm">
                                    <img src={postImages[(i + 1) % 4]} alt="Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <h3 className="text-[14px] font-bold text-[#333] mb-2 group-hover:text-[#25d3af] transition-colors leading-snug">
                                    Active life without "hot flashes" - all in your hands
                                </h3>
                                <p className="text-[11px] text-[#777] leading-[1.5] line-clamp-3">
                                    It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {Array(8).fill(null).map((_, i) => (
                        <div key={i} className="group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                            <div className="h-[200px] rounded-xl overflow-hidden mb-4 relative shadow-sm">
                                <img src={postImages[i % 4]} alt="Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-[15px] font-bold text-[#333] mb-2 group-hover:text-[#25d3af] transition-colors leading-[1.3]">
                                Active life without "hot flashes" - all in your hands
                            </h3>
                            <p className="text-[12px] text-[#777] leading-[1.6] line-clamp-3">
                                It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mb-20">
                    {[1, 2, 3, 4, '...', 32].map((page, i) => (
                        <button
                            key={i}
                            onClick={() => typeof page === 'number' && setCurrentPage(page)}
                            className={`w-10 h-10 flex items-center justify-center rounded-sm text-[13px] font-bold transition-all ${page === currentPage
                                ? 'bg-[#25d3af] text-white shadow-lg shadow-[#25d3af]/30'
                                : 'bg-white text-[#333] hover:text-[#25d3af]'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scroll Top Button (fixed) */}
            <button className="fixed bottom-10 right-10 w-12 h-12 bg-[#25d3af] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1ebf9e] transition-all z-50">
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
};

const CovidIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8V18C5 19.1046 5.89543 20 7 20H8C9.10457 20 10 19.1046 10 18V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 14H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13V6L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 13L19 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 17V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AllergyIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 21V11C7 10 8 10 8 9V4H6V9C6 10 7 10 7 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 21V11C17 10 18 10 18 9V4H16V9C16 10 17 10 17 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 21H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CosmeticsIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14H20V17C20 19.2091 18.2091 21 16 21H8C5.79086 21 4 19.2091 4 17V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 14L8 8H16L19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IntestinesIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10C4 14.4183 7.58172 18 12 18H18V10H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 18V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ThrushIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 6V18C7 19.1046 7.89543 20 9 20H15C16.1046 20 17 19.1046 17 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const OverweightIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H16L15 20H9L8 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="2" width="4" height="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const JointsIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C14.2091 22 16 20.2091 16 18C16 15.7909 14.2091 14 12 14C9.79086 14 8 15.7909 8 18C8 20.2091 9.79086 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VisionIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.05005 12C3.19005 7.07 7.25005 3.5 12.05 3.5C16.85 3.5 20.91 7.07 22.05 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.05 12C20.91 16.93 16.85 20.5 12.05 20.5C7.25005 20.5 3.19005 16.93 2.05005 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const GoutIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 8L7 20H17L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14V14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default HealthBlogPage;
