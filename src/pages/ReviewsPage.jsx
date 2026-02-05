import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ThumbsUp, ThumbsDown, ChevronDown, Check } from 'lucide-react';

const ReviewsPage = () => {
    const [sortOption, setSortOption] = useState('date');

    // Mock reviews data based on screenshots
    const reviews = [
        {
            id: 1,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Everyday practice shows that constant information-propaganda support of our activities plays an important role in the formation of development forms. Comrades! constant information-propaganda support of our activities requires us to analyze forms of development. The significance of these problems is so obvious that the new model of organizational activity provides a wide range of (specialists) participation in the formation of the development model. The significance of these problems is so obvious that the existing organizational structure entails a process of implementation and modernization of the mass participation system. Equally, the strengthening and development of the structure allows estimating the value of progressive development.',
            likes: 2,
            dislikes: 0
        },
        {
            id: 2,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 4,
            text: 'Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range of (specialists) participation in the formation of development forms.',
            likes: 0,
            dislikes: 4
        },
        {
            id: 3,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Everyday practice shows that constant information-propaganda support of our activities plays an important role in the formation of development forms. Comrades! constant information-propaganda support of our activities requires us to analyze forms of development. The significance of these problems is so obvious that the new model of organizational activity provides a wide range of (specialists) participation in the formation of the development model. The significance of these problems is so obvious that the existing organizational structure entails a process of implementation and modernization of the mass participation system. Equally, the strengthening and development of the structure allows estimating the value of progressive development.',
            likes: 2,
            dislikes: 0
        },
        {
            id: 4,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 4,
            text: 'Everyday practice shows that the implementation of the planned plan targets to a significant extent determines the creation of further directions of development. Comrades! the implementation of the planned plan targets entails the process of implementation and modernization of development forms. Diverse and rich experience strengthening and development of the structure plays an important role in the formation of new proposals. Ideological considerations of higher order, as well as the beginning of daily work on the formation of the position require the definition and clarification of the mass participation system. The task of the organization, especially the implementation of the planned plan targets allows executing important tasks on the development of directions of progressive development.',
            likes: 2,
            dislikes: 0
        },
        {
            id: 5,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 4,
            text: 'Diverse and rich experience begins the daily work on the formation of the position contributes to the preparation and implementation of the personnel training system, meets urgent needs. Equally, the framework and place of personnel training provides a wide range of (specialists) participation in the formation of development forms.',
            likes: 0,
            dislikes: 4
        },
        {
            id: 6,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Everyday practice shows that constant information-propaganda support of our activities plays an important role in the formation of development forms. Comrades! constant information-propaganda support of our activities requires us to analyze forms of development. The significance of these problems is so obvious that the new model of organizational activity provides a wide range of (specialists) participation in the formation of the development model. The significance of these problems is so obvious that the existing organizational structure entails a process of implementation and modernization of the mass participation system. Equally, the strengthening and development of the structure allows estimating the value of progressive development.',
            likes: 2,
            dislikes: 0
        },
        {
            id: 7,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 4,
            text: 'Everyday practice shows that the implementation of the planned plan targets to a significant extent determines the creation of further directions of development. Comrades! the implementation of the planned plan targets entails the process of implementation and modernization of development forms. Diverse and rich experience strengthening and development of the structure plays an important role in the formation of new proposals. Ideological considerations of higher order, as well as the beginning of daily work on the formation of the position require the definition and clarification of the mass participation system. The task of the organization, especially the implementation of the planned plan targets allows executing important tasks on the development of directions of progressive development.',
            likes: 2,
            dislikes: 0
        },
        {
            id: 8,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Everyday practice shows that the implementation of the planned plan targets to a significant extent determines the creation of further directions of development. Comrades! the implementation of the planned plan targets entails the process of implementation and modernization of development forms. Diverse and rich experience strengthening and development of the structure plays an important role in the formation of new proposals. Ideological considerations of higher order, as well as the beginning of daily work on the formation of the position require the definition and clarification of the mass participation system. The task of the organization, especially the implementation of the planned plan targets allows executing important tasks on the development of directions of progressive development.',
            likes: 2,
            dislikes: 0
        },
    ];

    return (
        <div className="bg-[#f8fafc] min-h-screen font-sans pb-20">
            {/* Top Bar for categories matches screenshot */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="max-w-[1440px] mx-auto px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
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
                    <span className="text-[#999]">Reviews about us</span>
                </div>

                <h1 className="text-[32px] font-extrabold text-[#333] mb-8">Reviews about us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
                    {/* Left Sidebar - Rating Box */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-[20px] p-8 shadow-sm flex flex-col items-center text-center">
                            <h3 className="text-[18px] font-extrabold text-[#333] leading-tight mb-2">
                                Average<br />Rating<br />pharmacy
                            </h3>

                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-[64px] font-black text-[#333] leading-none">4.8</span>
                            </div>

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-[#ffcc00] fill-[#ffcc00] opacity-30'}`} />
                                ))}
                            </div>

                            <p className="text-[12px] text-gray-400 font-medium leading-normal max-w-[200px] mb-8">
                                Overall rating based on 4349 customer reviews
                            </p>

                            <button className="w-full py-3 bg-[#25d3af] text-white rounded-full font-bold text-[11px] uppercase tracking-widest hover:bg-[#1ebf9e] shadow-lg shadow-[#25d3af]/30 transition-all active:scale-95">
                                Leave a review
                            </button>
                        </div>

                        {/* Mock Filter options showing below if needed, but not in screenshot 1 explicitly, only empty space */}
                        <div className="space-y-3 pl-2">
                            {[5, 4, 3, 2, 1].map((stars) => (
                                <label key={stars} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-5 h-5 rounded border ${stars === 5 ? 'bg-[#25d3af] border-[#25d3af]' : 'bg-white border-gray-200'} flex items-center justify-center`}>
                                        {stars === 5 && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                                    </div>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < stars ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`} />
                                        ))}
                                    </div>
                                    <span className="text-[12px] text-[#999] group-hover:text-[#333]">471 reviews</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Reviews List */}
                    <div>
                        {/* Sort Bar */}
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8 pb-4 border-b border-transparent">
                            <div className="flex items-center gap-4">
                                <span className="text-[12px] font-bold text-[#333] uppercase">SORT BY:</span>

                                <button className="flex items-center gap-2 text-[#25d3af] text-[13px] font-medium">
                                    <MenuIconLines />
                                    By date
                                </button>

                                <button className="text-[#999] text-[13px] hover:text-[#333] transition-colors">
                                    Most useful
                                </button>

                                <button className="flex items-center gap-1 text-[#999] text-[13px] hover:text-[#333] transition-colors">
                                    <MenuIconLines />
                                    By rating
                                </button>
                            </div>

                            {/* Pagination Top */}
                            <div className="flex items-center gap-1 bg-white p-1 rounded-sm">
                                {[1, 2, 3, 4].map(p => (
                                    <button key={p} className={`w-7 h-7 rounded-sm flex items-center justify-center text-[12px] font-bold transition-all ${p === 1 ? 'bg-[#f1f5f9] text-[#25d3af]' : 'bg-white text-[#999] hover:bg-gray-50'}`}>
                                        {p}
                                    </button>
                                ))}
                                <span className="text-[#999] text-[12px] font-bold px-1">...</span>
                                <button className="w-7 h-7 rounded-sm flex items-center justify-center bg-white text-[12px] font-bold text-[#999] hover:bg-gray-50">
                                    32
                                </button>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div className="space-y-10 mb-12">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-gray-100 pb-10 last:border-0">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-4 mb-1">
                                            <h3 className="text-[16px] font-bold text-[#333]">
                                                {review.author}, <span className="text-gray-400 font-normal ml-1">{review.date}</span>
                                            </h3>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-3.5 h-3.5 ${i < review.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-[13px] text-[#555] leading-[1.8]">
                                            {review.text}
                                        </p>

                                        <div className="flex items-center justify-end gap-4 mt-2">
                                            <button className={`flex items-center gap-1.5 text-[12px] font-medium transition-colors ${review.likes > 0 ? 'text-[#25d3af]' : 'text-gray-300 hover:text-[#25d3af]'}`}>
                                                <ThumbsUp className="w-4 h-4" /> {review.likes > 0 ? review.likes : 0}
                                            </button>
                                            <button className={`flex items-center gap-1.5 text-[12px] font-medium transition-colors ${review.dislikes > 0 ? 'text-[#ff4d4d]' : 'text-gray-300 hover:text-[#ff4d4d]'}`}>
                                                <ThumbsDown className="w-4 h-4" /> {review.dislikes > 0 ? review.dislikes : 0}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Show More Button */}
                        <div className="mb-16">
                            <button className="w-full bg-[#25d3af] text-white font-bold text-[12px] py-4 rounded-sm uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-sm">
                                SHOW MORE REVIEWS
                            </button>
                        </div>

                        {/* Leave Review Form */}
                        <div className="bg-[#f8fafc] border border-gray-100 rounded-lg p-8">
                            <h3 className="text-[18px] font-bold text-[#333] mb-4 text-center">Leave a review</h3>

                            <div className="flex items-center justify-center gap-2 mb-8">
                                <span className="text-[13px] text-[#777]">Rating:</span>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-[#ffcc00] fill-[#ffcc00]" />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input type="text" placeholder="Your name" className="w-full h-12 px-4 rounded-full border border-gray-200 bg-white text-[13px] outline-none focus:border-[#25d3af]" />
                                <input type="email" placeholder="Your e-mail" className="w-full h-12 px-4 rounded-full border border-gray-200 bg-white text-[13px] outline-none focus:border-[#25d3af]" />
                            </div>

                            <textarea
                                placeholder="Write a detailed review, it is important for us..."
                                className="w-full h-32 p-4 rounded-2xl border border-gray-200 bg-white text-[13px] outline-none focus:border-[#25d3af] resize-none mb-6"
                            ></textarea>

                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <button className="bg-[#25d3af] text-white font-bold text-[12px] px-10 py-3 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                    SEND
                                </button>
                                <p className="text-[10px] text-[#999] leading-tight max-w-xs">
                                    By clicking the button, you agree to the processing of personal data
                                </p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
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


export default ReviewsPage;
