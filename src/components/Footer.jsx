import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative mt-32 font-sans">
            {/* Overlapping 'Have Questions?' Card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-3rem)] max-w-[1440px] bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-10 z-10 flex flex-col gap-6">

                <h2 className="text-[26px] font-extrabold text-[#333] tracking-tight">Have questions?</h2>

                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1.2fr_1fr_1fr] lg:grid-cols-[1fr_1fr_0.8fr_0.8fr] gap-4 items-center w-full">
                    <input
                        type="text"
                        placeholder="Ivanov Ivan Ivanovich"
                        className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] bg-white text-[14px] placeholder:text-gray-400 font-medium"
                    />
                    <input
                        type="text"
                        placeholder="+7 (___) ___-__-__"
                        className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] bg-white text-[14px] placeholder:text-gray-400 font-medium"
                    />

                    <div className="text-[10px] text-gray-400 leading-tight px-2 hidden md:block">
                        By clicking the button, you agree to the processing of <a href="#" className="text-[#25d3af] underline decoration-dotted hover:no-underline">personal data</a>
                    </div>

                    <button className="w-full h-14 bg-[#25d3af] text-white font-bold text-[12px] rounded-full hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20 uppercase tracking-widest">
                        ASK A QUESTION
                    </button>
                </div>
            </div>

            {/* Main Footer Background */}
            <div className="bg-gradient-to-r from-[#003399] to-[#25d3af] text-white pt-32 pb-16 px-6">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr_1.5fr] gap-8 text-[12px] leading-snug">

                    {/* Brand Column */}
                    <div className="flex flex-col justify-between h-full min-h-[180px]">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1.5">
                                <img src="/logo.png" alt="Apteka Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold leading-none">Pharmacy.online</h3>
                                <p className="text-[10px] opacity-70 mt-0.5">Your online pharmacy</p>
                            </div>
                        </div>
                        <p className="text-[10px] opacity-50 leading-relaxed max-w-[180px] mt-8 lg:mt-0">
                            All rights reserved and protected by law
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <ul className="space-y-2.5 font-medium opacity-90">
                        <li><Link to="/about" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> About company</Link></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Delivery</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Pick up from pharmacy</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Payment</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> For legal entities</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> License</a></li>
                    </ul>

                    {/* Links Column 2 */}
                    <ul className="space-y-2.5 font-medium opacity-90">
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Feedback</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Advertising on the site</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Franchise</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Vacancies</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> Privacy Policy</a></li>
                        <li><a href="#" className="hover:opacity-100 hover:text-white transition-opacity flex items-center gap-2"><span className="opacity-40">—</span> User Agreement</a></li>
                    </ul>

                    {/* Contact Column */}
                    <div className="space-y-6 min-w-fit">
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 opacity-70 mt-0.5" strokeWidth={1.5} />
                                <div>
                                    <p className="font-bold text-[13px] uppercase">INFO@RESTOLL.RU</p>
                                    <p className="text-[10px] opacity-60">Write to us</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#5eead4]" strokeWidth={2} />
                                <div>
                                    <p className="font-bold text-[16px] leading-none mb-0.5">8-800-777-22-33</p>
                                    <p className="text-[10px] opacity-80 font-medium">Round the clock</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-row flex-nowrap gap-2 pt-1">
                            {/* VK */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all group">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zM17.6 13.85c.4.4.82.78 1.2 1.2.3.34.6.65.6 1.05 0 .43-.37.8-.8.8h-2.7c-.57 0-.85-.3-1.2-.7-.5-.6-1.02-1.2-1.55-1.78-.15-.17-.3-.26-.5-.26-.14 0-.17.15-.17.5v1.4c0 .35-.1.82-.9.88-2.6.2-5.06-1.57-6.9-4.3-2.6-3.7-3.1-6.1-3.1-6.57 0-.25.1-.47.47-.47h2.8c.27 0 .48.13.57.43.5 1.57 1.45 2.94 2.55 2.94.2 0 .3-.1.3-.6v-2.1c-.05-.9-.5-1-1.08-1.06-.2-.02-.27-.14-.27-.27 0-.3.23-.62.88-.62h1.66c.45 0 .6.23.6.76v3.2c0 .35.15.47.25.47.2 0 .37-.1.55-.28 1.12-1.27 1.95-3.37 2.1-4.1.06-.32.3-.5.7-.5h2.68c.7 0 .84.35.68.83-.5 1.5-1.75 3-2.3 3.65-.26.3-.23.44 0 .74.65.86 1.3 1.7 1.95 2.4z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M14 13.5h2.5l1-4H14v-1.27c0-1.188.875-1.469 1.5-1.469h2.5v-3.9l-3.502.023c-3.71.188-4.498 2.071-4.498 4.416V9.5h-3v4h3v9h4v-9z" />
                                </svg>
                            </a>
                            {/* OK (Odnoklassniki) */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all">
                                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 9c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3zm0 2c-1.86 0-3.56.55-5 1.5 1.05 1.35 2.55 2.25 4.5 2.25s3.45-.9 4.5-2.25C15.56 11.55 13.86 11 12 11zm5.5 2.5C16.85 14.54 14.54 15.14 12 15.14c-2.54 0-4.85-.6-5.5-1.64 0 0-2.5 4.5-2.5 4.5 1.25.75 2.25.5 2.25.5l1.65-2.85c1.15.6 2.65.99 4.1 .99 1.45 0 2.95-.39 4.1-.99L17.75 18.5s1 .25 2.25-.5c0 0-2.5-4.5-2.5-4.5z" />
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0 1.27 5.49A4.09 4.09 0 0 1 2.3 9.4v.05a4.13 4.13 0 0 0 3.31 4.03 4.1 4.1 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.06 11.63 11.63 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.03-.53A8.36 8.36 0 0 0 22 5.8z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all">
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Youtube */}
                            <a href="#" className="w-7 h-7 rounded-full bg-[#2cdbbc] flex-shrink-0 flex items-center justify-center text-white hover:bg-white hover:text-[#25d3af] transition-all">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.25zM9.75 15.02V8.83l6 3.1-6 3.09z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* NEW Legal Column */}
                    <div className="text-[10px] opacity-60 leading-relaxed">
                        <p>
                            Limited Liability Company "Apteka"; Address: Moscow, Frunzenskaya embankment, house 42, basement floor, room I, room 2; License: LO-50-02-007632 dated November 27, 2020; LO-77-02-011346 dated December 22, 2020; OGRN: 1147746631988, INN 7704865540
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
