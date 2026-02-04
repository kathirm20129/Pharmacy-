import React from 'react';
import { Link } from 'react-router-dom';
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
        { name: 'Medicines', icon: <Pill className="w-5 h-5" />, path: '/medicines' },
        { name: 'Vitamins', icon: <Zap className="w-5 h-5" />, path: '#' },
        { name: 'Beauty', icon: <Sparkles className="w-5 h-5" />, path: '#' },
        { name: 'Hygiene', icon: <Droplets className="w-5 h-5" />, path: '#' },
        { name: 'Lenses', icon: <Eye className="w-5 h-5" />, path: '#' },
        { name: 'Mother & Child', icon: <Baby className="w-5 h-5" />, path: '#' },
        { name: 'Med Supplies', icon: <BriefcaseMedical className="w-5 h-5" />, path: '#' },
        { name: 'Pet Supplies', icon: <Dog className="w-5 h-5" />, path: '#' },
        { name: 'Med Equipment', icon: <Stethoscope className="w-5 h-5" />, path: '#' },
    ];

    return (
        <nav className="w-full bg-gradient-to-r from-[#002d67] via-[#004e8c] to-[#25d3af] py-3.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ul className="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="flex-shrink-0">
                            <Link
                                to={item.path}
                                className="flex items-center gap-2.5 text-white hover:text-white/80 transition-all group"
                            >
                                <div className="text-white/90 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-[11.5px] font-extrabold uppercase tracking-widest whitespace-nowrap">
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
