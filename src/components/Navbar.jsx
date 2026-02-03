import React from 'react';
import {
    Pill,
    Zap,
    Sparkles,
    Droplets,
    Eye,
    Baby,
    BriefcaseMedical,
    Dog,
    Stethoscope
} from 'lucide-react';

const Navbar = () => {
    const navItems = [
        { name: 'Medicines', icon: <Pill className="w-5 h-5" /> },
        { name: 'Vitamins', icon: <Zap className="w-5 h-5" /> },
        { name: 'Beauty', icon: <Sparkles className="w-5 h-5" /> },
        { name: 'Hygiene', icon: <Droplets className="w-5 h-5" /> },
        { name: 'Lenses', icon: <Eye className="w-5 h-5" /> },
        { name: 'Mother & Child', icon: <Baby className="w-5 h-5" /> },
        { name: 'Med Supplies', icon: <BriefcaseMedical className="w-5 h-5" /> },
        { name: 'Pet Supplies', icon: <Dog className="w-5 h-5" /> },
        { name: 'Med Equipment', icon: <Stethoscope className="w-5 h-5" /> },
    ];

    return (
        <nav className="w-full bg-gradient-to-r from-[#002d67] via-[#004e8c] to-[#25d3af] py-3.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ul className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="flex-shrink-0">
                            <a
                                href="#"
                                className="flex items-center gap-2.5 text-white hover:text-white/80 transition-all group"
                            >
                                <div className="text-white/90 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-[11.5px] font-extrabold uppercase tracking-widest whitespace-nowrap">
                                    {item.name}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
