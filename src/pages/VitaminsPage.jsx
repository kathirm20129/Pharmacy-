import React from 'react';
import { Link } from 'react-router-dom';
import {
    Pill, Zap, Sparkles, Droplets, BriefcaseMedical,
    Dog, Baby, Eye, Stethoscope, Star, Plus
} from 'lucide-react';

const VitaminsPage = () => {
    const alphabet = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const categories = [
        {
            title: "Medicines",
            icon: <Pill className="w-5 h-5 text-[#a855f7]" />, // Purple
            color: "text-[#a855f7]",
            items: [
                "Obstetrics, gynecology", "Allergy", "Anesthesia, resuscitation", "Antibiotics",
                "Blood diseases", "Pain, temperature", "Hemorrhoids", "Eyes",
                "Worms, lice, scabies", "Homeopathy", "Diabetes", "Diagnostic agents",
                "Respiratory system", "Stomach, intestines, liver", "Teeth and mouth",
                "Immune system", "Skin", "Genitourinary system", "Metabolism disorders",
                "Neurology, psychiatry", "Disinfectants", "Oncology", "Poisoning",
                "Nutritional mixtures", "Antiviral agents", "Antifungal agents", "Miscellaneous"
            ]
        },
        {
            title: "Vitamins and Dietary Supplements",
            icon: <Zap className="w-5 h-5 text-[#f97316]" />, // Orange
            color: "text-[#f97316]",
            items: [
                "Amino acids", "L-carnitine", "Antioxidants", "Supplements for vision",
                "Multivitamins", "Supplements harmful habits", "Supplements for weight correction",
                "Supplements for diabetes", "Supplements for menopause", "Supplements for colds",
                "Supplements sedatives", "Vitamins and minerals", "Vitamins for pregnant and lactating",
                "Supplements for diabetes", "Supplements for menopause", "Supplements for colds"
            ]
        },
        {
            title: "Beauty",
            icon: <Sparkles className="w-5 h-5 text-[#a855f7]" />, // Purple
            color: "text-[#a855f7]",
            items: [
                "Face care", "Body care", "Hair care", "Hand and nail care",
                "Foot care", "Make-up", "Men's cosmetics", "Sun protection",
                "Natural cosmetics", "Gift sets", "Essential oils"
            ]
        },
        {
            title: "Hygiene",
            icon: <Droplets className="w-5 h-5 text-[#3b82f6]" />, // Blue
            color: "text-[#3b82f6]",
            items: [
                "Personal hygiene", "Oral hygiene", "Paper products", "Shaving and depilation",
                "Incontinence products", "Patient care", "Cotton products", "Antiseptics"
            ]
        },
        {
            title: "Medical Supplies",
            icon: <BriefcaseMedical className="w-5 h-5 text-[#ef4444]" />, // Red
            color: "text-[#ef4444]",
            items: [
                "Bandages, plasters", "Syringes, needles", "Tests and reagents", "First aid kits",
                "Medical instruments", "Rubber products", "Patient care items", "Compression knitwear"
            ]
        },
        {
            title: "Pet Supplies",
            icon: <Dog className="w-5 h-5 text-[#f97316]" />, // Orange
            color: "text-[#f97316]",
            items: [
                "For cats", "For dogs", "For birds", "For rodents", "Veterinary pharmacy",
                "Hygiene and care", "Toys and ammunition", "Bowls and feeders"
            ]
        },
        {
            title: "Mother and Child",
            icon: <Baby className="w-5 h-5 text-[#ec4899]" />, // Pink
            color: "text-[#ec4899]",
            items: [
                "Baby food", "Feeding accessories", "Diapers and swaddling", "Baby hygiene",
                "For pregnant and nursing", "Toys", "Baby household chemistry", "Safety"
            ]
        },
        {
            title: "Lenses",
            icon: <Eye className="w-5 h-5 text-[#22c55e]" />, // Green
            color: "text-[#22c55e]",
            items: [
                "Contact lenses", "Solutions and drops", "Accessories", "Glasses",
                "Reading glasses", "Sunglasses", "Driving glasses", "Computer glasses"
            ]
        },
        {
            title: "Medical Equipment",
            icon: <Stethoscope className="w-5 h-5 text-[#3b82f6]" />, // Blue
            color: "text-[#3b82f6]",
            items: [
                "Tonometers", "Thermometers", "Inhalers", "Blood glucose meters",
                "Irritators", "Massagers", "Applicators", "Physiotherapy devices"
            ]
        },
    ];

    return (
        <div className="bg-white min-h-screen font-sans pb-20">
            {/* Top Bar (reused) */}
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
                    <span className="text-[#999]">Search by alphabet</span>
                </div>

                {/* Page Title & Links */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <h1 className="text-[32px] font-extrabold text-[#333] leading-none">Search by alphabet</h1>
                    <Link to="#" className="text-[#25d3af] text-[14px] hover:underline mb-1">
                        Selection of goods by disease
                    </Link>
                </div>

                {/* Alphabet Filter */}
                <div className="relative border-b border-gray-100 pb-12 mb-12">
                    <div className="flex flex-col gap-y-4 font-medium text-[13px] text-[#555] select-none">
                        {/* Row 1: Russian Alphabet */}
                        <div className="flex flex-wrap gap-x-8 uppercase pr-20 md:pr-40">
                            <span className="bg-[#e0f2fe] text-[#25d3af] px-3 py-1 rounded-sm font-bold cursor-pointer">А</span>
                            {["Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"].map(char => (
                                <span key={char} className="hover:text-[#25d3af] cursor-pointer transition-colors pt-1">{char}</span>
                            ))}
                        </div>

                        {/* Row 2: English Alphabet */}
                        <div className="flex flex-wrap gap-x-8 uppercase pr-20 md:pr-40">
                            {alphabet.map(char => (
                                <span key={char} className="hover:text-[#25d3af] cursor-pointer transition-colors text-[#999] hover:text-[#25d3af]">{char}</span>
                            ))}
                        </div>

                        {/* Row 3: Numbers */}
                        <div className="flex flex-wrap gap-x-8 mt-1">
                            {numbers.map(num => (
                                <span key={num} className="hover:text-[#25d3af] cursor-pointer transition-colors text-[#999] hover:text-[#25d3af]">{num}</span>
                            ))}
                        </div>
                    </div>

                    {/* Watermark */}
                    <div className="absolute top-0 right-0 text-[120px] font-black text-[#f0fdf9] pointer-events-none leading-none select-none z-[-1]">
                        A-Z
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20">
                    {categories.map((cat, idx) => (
                        <div key={idx}>
                            <div className="flex items-center gap-2 mb-6">
                                {cat.icon}
                                {cat.title === "Hygiene" ? (
                                    <Link to="/hygiene" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : cat.title === "Lenses" ? (
                                    <Link to="/lenses" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : cat.title === "Mother and Child" ? (
                                    <Link to="/mother-and-child" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : cat.title === "Medical Supplies" ? (
                                    <Link to="/vitamins" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : cat.title === "Pet Supplies" ? (
                                    <Link to="/beauty" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : cat.title === "Medical Equipment" ? (
                                    <Link to="/hygiene" className="text-[18px] font-bold text-[#333] hover:text-[#25d3af] transition-colors">{cat.title}</Link>
                                ) : (
                                    <h2 className="text-[18px] font-bold text-[#333]">{cat.title}</h2>
                                )}
                            </div>
                            <ul className="space-y-3">
                                {cat.items.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            to={
                                                cat.title === "Hygiene" ? "/hygiene" :
                                                    cat.title === "Lenses" ? "/lenses" :
                                                        cat.title === "Mother and Child" ? "/mother-and-child" :
                                                            cat.title === "Medical Supplies" ? "/vitamins" :
                                                                cat.title === "Pet Supplies" ? "/beauty" :
                                                                    cat.title === "Medical Equipment" ? "/hygiene" : "#"
                                            }
                                            className="text-[13px] text-[#777] hover:text-[#25d3af] transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-[1px] bg-transparent group-hover:bg-[#25d3af] transition-colors"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Health Blog Section */}
                {/* Recommended Products Section */}
                <div className="max-w-[1440px] mx-auto px-6 mb-20">
                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-[26px] font-bold text-[#333]">Recommended</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 flex items-center gap-4 relative group hover:shadow-md transition-all">
                                {/* Image */}
                                <div className="w-[80px] h-[80px] flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                                    <img src="/product.png" className="w-full h-full object-contain mix-blend-multiply" alt="Product" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="text-[10px] text-[#25d3af] font-bold mb-1">In stock</div>
                                    <h3 className="text-[12px] font-bold text-[#333] leading-tight mb-2 line-clamp-2">Velson tablets covered. film. 3 mg, 30 pcs.</h3>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, starI) => (
                                            <Star key={starI} className="w-3 h-3 text-[#ffcc00] fill-[#ffcc00]" />
                                        ))}
                                    </div>
                                </div>

                                {/* Add Button */}
                                <button className="w-8 h-8 rounded-full bg-white border border-gray-200 text-[#25d3af] flex items-center justify-center hover:bg-[#25d3af] hover:text-white transition-colors shadow-sm">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VitaminsPage;
