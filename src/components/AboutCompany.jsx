import React from 'react';
import { Info, ChevronRight, ChevronsRight } from 'lucide-react';

const AboutCompany = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-20 font-sans">
            <h2 className="text-[32px] font-extrabold text-[#333] mb-8">About Company</h2>

            {/* Top Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-[12px] text-gray-500 leading-relaxed font-medium">

                {/* Column 1 */}
                <div className="space-y-4">
                    <p>
                        Barkley Plaza Business Center Class B+, built in 2008, despite its age, is one of the most popular Business Centers in the Western Administrative District of Moscow.
                    </p>
                    <p>
                        Proximity to Kutuzovsky Prospekt, Minskaya Street and Moscow City, as well as walking distance to three metro stations add relevance to it. Thus, Park Pobedy metro station is only 800 meters away.
                    </p>
                    <p>
                        Barkley Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls. Ceiling height in offices is more than 3 meters.
                    </p>
                </div>

                {/* Column 2 - With Bullets */}
                <div className="space-y-4">
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] mt-1.5 shrink-0"></div>
                        <p>
                            Barkley Plaza Business Center Class B+, built in 2008, despite its age, is one of the most popular Business Centers in the Western Administrative District of the city.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] mt-1.5 shrink-0"></div>
                        <p>
                            Proximity to Kutuzovsky Prospekt, Minskaya Street and Moscow City, as well as walking distance to three metro stations add relevance to it. Thus, Park metro station.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full border border-[#25d3af] mt-1.5 shrink-0"></div>
                        <p>
                            Barkley Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls.
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                    <p>
                        Barkley Plaza Business Center Class B+, built in 2008, despite its age, is one of the most popular Business Centers in the Western Administrative District of Moscow.
                    </p>
                    <p>
                        Proximity to Kutuzovsky Prospekt, Minskaya Street and Moscow City, as well as walking distance to three metro stations add relevance to it. Thus, Park Pobedy metro station is only 800 meters away.
                    </p>
                    <p>
                        Barkley Plaza is distinguished by a stylish panoramic facade, an unusual entrance group and designer decoration of common areas and elevator halls. Ceiling height in offices is more than 3 meters.
                    </p>
                </div>
            </div>

            {/* Middle Wide Text */}
            <p className="text-[12px] text-gray-500 leading-relaxed font-medium mb-8">
                The activity of our company is based on the provision of professional kitchen equipment to catering establishments of any format: hotels, hotels and hostels, hypermarkets, canteens, kindergartens and schools. The quality of the equipment determines the speed of cooking dishes of any complexity and the quality of your chefs' work. We offer you quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, for fast food, neutral. The activity of our company is based on the provision of professional kitchen equipment to catering establishments of any format: hotels, hotels and hostels, hypermarkets, canteens, kindergartens and schools.
            </p>

            {/* Highlighted Warning/Info Box */}
            <div className="w-full bg-[#f4fcf9] rounded-[20px] p-8 flex items-start gap-6 mb-8">
                <div className="w-12 h-12 shrink-0 rounded-full border-2 border-[#25d3af] text-[#25d3af] flex items-center justify-center font-bold text-xl">
                    !
                </div>
                <p className="text-[12px] text-gray-500 leading-relaxed font-medium pt-1">
                    The activity of our company is based on the provision of professional kitchen equipment to catering establishments of any format: hotels, hotels and hostels, hypermarkets, canteens, kindergartens and schools. The quality of the equipment determines the speed of cooking dishes of any complexity and the quality of your chefs' work. We offer you quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, for fast food, neutral.
                </p>
            </div>

            {/* Bottom Wide Text */}
            <p className="text-[12px] text-gray-500 leading-relaxed font-medium mb-6">
                The activity of our company is based on the provision of professional kitchen equipment to catering establishments of any format: hotels, hotels and hostels, hypermarkets, canteens, kindergartens and schools. The quality of the equipment determines the speed of cooking dishes of any complexity and the quality of your chefs' work. We offer you quality equipment for your business: thermal, refrigeration, laundry, coffee, bar, for fast food, neutral. The activity of our company is based on the provision of professional kitchen equipment to catering establishments of any format: hotels, hotels and hostels, hypermarkets, canteens, kindergartens and schools.
            </p>

            {/* Read More Link */}
            <button className="flex items-center gap-2 text-[#25d3af] text-[11px] font-black uppercase tracking-widest hover:text-[#1ebf9e] transition-colors group">
                <ChevronsRight className="w-4 h-4" />
                Show All Text
            </button>

        </section>
    );
};

export default AboutCompany;
