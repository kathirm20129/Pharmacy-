import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUp } from 'lucide-react';

const MotherAndChildPage = () => {
    // State for sections toggle or form data could go here
    const [activeTab, setActiveTab] = useState('Personal Data');

    const orders = [
        {
            date: "16.12.2021",
            orderNo: "154544516",
            status: "Completed",
            items: [
                { name: "Velson tablets covered. film. 3 mg, 30 pcs.", price: "41 108 RUB.", oldPrice: "49 999 RUB.", image: "/product.png", count: "1 item" },
                { name: "Velson tablets covered. film. 3 mg, 30 pcs.", price: "41 108 RUB.", oldPrice: "", image: "/product.png", count: "1 item" },
                { name: "Velson tablets covered. film. 3 mg, 30 pcs.", price: "41 108 RUB.", oldPrice: "49 999 RUB.", image: "/product.png", count: "1 item" },
                { name: "Velson tablets covered. film. 3 mg, 30 pcs.", price: "41 108 RUB.", oldPrice: "", image: "/product.png", count: "1 item" },
            ]
        }
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
                    <span className="text-[#999]">Personal account</span>
                </div>

                <h1 className="text-[36px] font-extrabold text-[#333] tracking-tight mb-8">Personal account</h1>

                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
                    {/* Sidebar Menu */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <button
                            className={`w-full text-left px-6 py-4 text-[13px] font-bold uppercase tracking-wider transition-colors ${activeTab === 'Personal Data' ? 'bg-[#f8fafc] text-[#333]' : 'bg-white text-[#777] hover:bg-gray-50'}`}
                            onClick={() => setActiveTab('Personal Data')}
                        >
                            PERSONAL DATA
                        </button>
                        <button
                            className={`w-full text-left px-6 py-4 text-[13px] font-bold uppercase tracking-wider transition-colors border-t border-gray-100 ${activeTab === 'Your Orders' ? 'bg-[#f8fafc] text-[#333]' : 'bg-white text-[#777] hover:bg-gray-50'}`}
                            onClick={() => setActiveTab('Your Orders')}
                        >
                            YOUR ORDERS
                        </button>
                        <button
                            className={`w-full text-left px-6 py-4 text-[13px] font-bold uppercase tracking-wider transition-colors border-t border-gray-100 ${activeTab === 'Feedback' ? 'bg-[#f8fafc] text-[#333]' : 'bg-white text-[#777] hover:bg-gray-50'}`}
                            onClick={() => setActiveTab('Feedback')}
                        >
                            FEEDBACK
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-20">
                        {/* Personal Cabinet Form */}
                        <div id="personal-data">
                            <h2 className="text-[24px] font-bold text-[#333] mb-8">Personal account</h2>
                            <form className="space-y-6 max-w-[800px]">
                                <div className="relative">
                                    <input type="text" placeholder="Enter last name, first name and patronymic" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-[#ff8888] rounded-full"></span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="relative">
                                        <div className="absolute top-2 left-4 text-[10px] text-[#999] font-bold uppercase tracking-wider">DATE OF BIRTH</div>
                                        <div className="w-full h-14 px-4 rounded-full border border-gray-200 bg-white flex items-center justify-between text-[#333] text-[14px] mt-2 md:mt-0 pt-4 md:pt-0">
                                            <span>1</span>
                                            <div className="flex flex-col text-gray-400">
                                                <ChevronDown className="w-4 h-4 rotate-180" />
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full h-14 px-4 rounded-full border border-gray-200 bg-white flex items-center justify-between text-[#333] text-[14px]">
                                            <span>January</span>
                                            <div className="flex flex-col text-gray-400">
                                                <ChevronDown className="w-4 h-4 rotate-180" />
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <div className="w-full h-14 px-4 rounded-full border border-gray-200 bg-white flex items-center justify-between text-[#333] text-[14px]">
                                            <span>Year</span>
                                            <div className="flex flex-col text-gray-400">
                                                <ChevronDown className="w-4 h-4 rotate-180" />
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Gender select moved to be consistent with design if needed, but screenshot shows 3 date selects and then next row. Let's stick to screenshot flow somewhat. Ah, screenshot shows "1", "January", "Year", "Gender". 4 fields. */}
                                </div>
                                <div className="md:w-1/3">
                                    <div className="w-full h-14 px-4 rounded-full border border-gray-200 bg-white flex items-center justify-between text-[#999] text-[14px]">
                                        <span>Gender</span>
                                        <div className="flex flex-col text-gray-400">
                                            <ChevronDown className="w-4 h-4 rotate-180" />
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <input type="email" placeholder="Email" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-[#ff8888] rounded-full"></span>
                                </div>

                                <div className="relative">
                                    <input type="tel" placeholder="Phone" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-[#ff8888] rounded-full"></span>
                                </div>

                                <div className="relative">
                                    <input type="password" placeholder="New password" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-[#ff8888] rounded-full"></span>
                                </div>

                                <div className="relative">
                                    <input type="password" placeholder="Confirmation" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    <span className="absolute top-4 right-4 w-2 h-2 bg-[#ff8888] rounded-full"></span>
                                </div>

                                <button className="bg-[#25d3af] text-white font-bold text-[12px] px-10 py-4 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                    SAVE
                                </button>
                            </form>
                        </div>

                        {/* Your Orders */}
                        <div id="your-orders">
                            <h2 className="text-[24px] font-bold text-[#333] mb-8">Your orders</h2>
                            {orders.map((order, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                                        <div className="flex items-center gap-8">
                                            <div className="text-[14px] font-bold text-[#333]">{order.date}</div>
                                            <div className="text-[14px] text-[#777]">Order №{order.orderNo}</div>
                                        </div>
                                        <div className="text-[12px] font-bold text-[#25d3af] uppercase tracking-wide">{order.status}</div>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        {order.items.map((item, i) => (
                                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-12 flex-shrink-0 bg-gray-50 rounded flex items-center justify-center">
                                                        <img src={item.image} alt="product" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[13px] font-bold text-[#555] max-w-[300px] leading-tight">{item.name}</h4>
                                                        <span className="text-[11px] text-[#999]">{item.count}</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-[16px] font-bold text-[#333]">{item.price}</div>
                                                    {item.oldPrice && <div className="text-[11px] text-[#ff4d4d] line-through">{item.oldPrice}</div>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4">
                                        <button className="bg-[#25d3af] text-white font-bold text-[11px] px-8 py-3.5 rounded-full uppercase tracking-wide hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                            LEAVE A REVIEW
                                        </button>
                                        <button className="bg-white border border-[#25d3af] text-[#25d3af] font-bold text-[11px] px-8 py-3.5 rounded-full uppercase tracking-wide hover:bg-[#f0fdfa] transition-colors">
                                            REPEAT ORDER
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feedback */}
                        <div id="feedback">
                            <h2 className="text-[24px] font-bold text-[#333] mb-8">Feedback</h2>

                            <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 max-w-[800px]">
                                <h3 className="text-[15px] font-bold text-[#333] mb-4 leading-snug">
                                    Diverse and rich experience, the existing organizational structure requires definition and refinement of the development model.
                                </h3>
                                <p className="text-[12px] text-[#777] mb-8 leading-relaxed">
                                    Orderly considerations of a higher order, as well as the existing organization structure plays an important role in the formation of the mass participation system.
                                </p>

                                <form className="space-y-6">
                                    <div className="relative">
                                        <div className="w-full h-14 px-6 rounded-full border border-gray-200 bg-white flex items-center justify-between text-[#777] text-[14px]">
                                            <span>Select the subject of appeal</span>
                                            <div className="flex flex-col text-gray-400">
                                                <ChevronDown className="w-4 h-4 rotate-180" />
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    <input type="text" placeholder="Last Name, First Name and Patronymic" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input type="tel" placeholder="Phone" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                        <input type="email" placeholder="Your email" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />
                                    </div>

                                    <input type="text" placeholder="Message text" className="w-full h-14 px-6 rounded-full border border-gray-200 outline-none focus:border-[#25d3af] text-[14px] placeholder:text-gray-400 bg-white" />

                                    <div className="flex flex-col md:flex-row items-center gap-6">
                                        <button className="bg-[#25d3af] text-white font-bold text-[12px] px-10 py-4 rounded-full uppercase tracking-widest hover:bg-[#1ebf9e] transition-colors shadow-lg shadow-[#25d3af]/20">
                                            WRITE TO ME
                                        </button>
                                        <p className="text-[10px] text-[#999] max-w-[250px] leading-tight text-center md:text-left">
                                            By clicking the button, you agree to the processing of <a href="#" className="text-[#25d3af] underline hover:no-underline">personal data</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Scroll To Top Button (Fixed) */}
                <div className="fixed right-8 bottom-32 z-20">
                    <button className="w-12 h-12 rounded-full bg-[#25d3af] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebf9e] transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MotherAndChildPage;
