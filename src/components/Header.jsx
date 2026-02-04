import React from 'react';
import { MapPin, ChevronDown, Menu, Heart, User, Mail, Phone, Search, ShoppingCart, Youtube, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
const logoImg = '/logo.png';

const Header = () => {
    return (
        <header className="w-full bg-white font-sans">
            {/* Top Bar - Slimmer padding */}
            <div className="border-b border-gray-50 py-1.5">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-row justify-between items-center text-[12px] text-gray-400">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center cursor-pointer hover:text-brand-teal transition-colors group">
                            <Navigation className="w-3.5 h-3.5 mr-1.5 text-brand-teal fill-brand-teal/5 rotate-45" />
                            <span>Location: New York</span>
                            <ChevronDown className="w-3 h-3 ml-1" />
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-brand-teal transition-colors">
                            <Menu className="w-3.5 h-3.5 mr-1.5 text-brand-teal" />
                            <span>Service Pages</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center cursor-pointer hover:text-brand-teal transition-colors">
                            <span>Favorites</span>
                            <Heart className="w-3.5 h-3.5 ml-2 text-brand-teal" />
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-brand-teal transition-colors">
                            <span>My Account</span>
                            <User className="w-3.5 h-3.5 ml-2 text-brand-teal" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Reduced vertical padding */}
            <div className="py-4">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-row items-center justify-between gap-2">

                    {/* Logo Section - Scaled down slightly */}
                    <Link to="/" className="flex items-center gap-3 cursor-pointer min-w-fit">
                        <div className="relative w-9 h-9">
                            <img src={logoImg} alt="Pharmacy Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-[20px] leading-tight font-extrabold text-[#002d67] tracking-tighter">
                                Pharmacy<span className="font-medium opacity-50 px-0.5">.online</span>
                            </div>
                            <div className="text-[9px] text-gray-300 font-bold uppercase tracking-widest leading-none">Your online health partner</div>
                        </div>
                    </Link>

                    <div className="flex-1"></div>

                    {/* Social Circle Links - Meticulously aligned to Figma */}
                    <div className="flex items-center gap-2">
                        {/* VK Icon */}
                        <div className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center text-[#25d3af] cursor-pointer hover:bg-gray-50 transition-all">
                            <span className="text-[13px] font-black leading-none transform -translate-y-[1px]">vk</span>
                        </div>
                        {/* Instagram Icon */}
                        <div className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center text-[#25d3af] cursor-pointer hover:bg-gray-50 transition-all">
                            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </div>
                        {/* YouTube Icon */}
                        <div className="w-[34px] h-[34px] rounded-full border border-gray-200 flex items-center justify-center text-[#25d3af] cursor-pointer hover:bg-gray-50 transition-all">
                            <Youtube className="w-[18px] h-[18px] fill-current" strokeWidth={1} />
                        </div>
                    </div>

                    {/* Middle Contact Info Block - Compacted */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center cursor-pointer group">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2.5 group-hover:bg-[#25d3af]/10 transition-colors">
                                <Mail className="w-[15px] h-[15px] text-[#25d3af]" />
                            </div>
                            <div>
                                <div className="text-[12px] font-extrabold text-[#002d67] leading-none mb-0.5 whitespace-nowrap">INFO@RESTOLL.RU</div>
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Write to us</div>
                            </div>
                        </div>

                        <div className="flex items-center cursor-pointer group">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2.5 group-hover:bg-[#25d3af]/10 transition-colors">
                                <Phone className="w-[15px] h-[15px] text-[#25d3af]" />
                            </div>
                            <div>
                                <div className="text-[12px] font-extrabold text-[#002d67] leading-none mb-0.5 whitespace-nowrap">1-800-777-22-33</div>
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Available 24/7</div>
                            </div>
                        </div>

                        <div className="flex items-center cursor-pointer group">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-2.5 group-hover:bg-[#25d3af]/10 transition-colors">
                                <Phone className="w-[15px] h-[15px] text-[#25d3af]" />
                            </div>
                            <div>
                                <div className="text-[12px] font-extrabold text-[#002d67] leading-none mb-0.5 whitespace-nowrap">+1 (495) 223-34-03</div>
                                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">Online Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Action Block - Reduced sizes */}
                    <div className="flex items-center gap-3 ml-2">
                        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#25d3af] hover:bg-[#25d3af] hover:text-white transition-all">
                            <Search className="w-4 h-4" />
                        </button>

                        <button className="h-10 px-8 bg-[#25d3af] text-white rounded-full font-extrabold text-[11px] uppercase tracking-[0.05em] hover:bg-[#1ebf9e] shadow-md shadow-[#25d3af]/20 transition-all active:scale-95 whitespace-nowrap">
                            Request a call
                        </button>

                        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#25d3af] hover:bg-[#25d3af] hover:text-white transition-all relative">
                            <ShoppingCart className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
