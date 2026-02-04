import React from 'react';
import {
    Pill,
    Zap,
    Sparkles,
    Droplet,
    Baby,
    BriefcaseMedical,
    PawPrint,
    Eye,
    Stethoscope,
    ChevronsRight
} from 'lucide-react';

const CatalogSection = () => {
    const categories = [
        {
            id: 1,
            title: 'Medicines',
            icon: <Pill className="w-5 h-5 text-[#a855f7]" />, // Purple icon
            items: [
                'Obstetrics, gynecology', 'Allergy', 'Anesthesia, resuscitation', 'Antibiotics',
                'Blood diseases', 'Pain, fever', 'Hemorrhoids', 'Eyes', 'Worms, lice, scabies',
                'Homeopathy', 'Diabetes', 'Diagnostic agents', 'Respiratory system',
                'Stomach, intestines, liver', 'Teeth and mouth', 'Immune system', 'Skin',
                'Genitourinary system', 'Metabolic disorders', 'Neurology, psychiatry',
                'Disinfectants', 'Oncology', 'Poisoning', 'Nutritional mixtures',
                'Antiviral agents', 'Antifungal agents', 'Miscellaneous'
            ],
            color: 'text-[#a855f7]',
            bgIcon: 'bg-[#f3e8ff]'
        },
        {
            id: 2,
            title: 'Vitamins and Supplements',
            icon: <Zap className="w-5 h-5 text-[#f97316]" />, // Orange icon
            items: [
                'Amino acids', 'L-carnitine', 'Antioxidants', 'Supplements for vision',
                'Multivitamins', 'Supplements for bad habits', 'Supplements for weight loss',
                'Supplements for diabetes', 'Supplements for menopause', 'Supplements for colds',
                'Sedative supplements', 'Vitamins and minerals', 'Vitamins for pregnant & nursing',
                'Supplements for diabetes', 'Supplements for menopause', 'Supplements for colds'
            ],
            color: 'text-[#f97316]',
            bgIcon: 'bg-[#ffedd5]'
        },
        {
            id: 3,
            title: 'Beauty',
            icon: <Sparkles className="w-5 h-5 text-[#a855f7]" />, // Purple icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#a855f7]',
            bgIcon: 'bg-[#f3e8ff]'
        },
        {
            id: 4,
            title: 'Hygiene',
            icon: <Droplet className="w-5 h-5 text-[#3b82f6]" />, // Blue icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#3b82f6]',
            bgIcon: 'bg-[#dbeafe]'
        },
        {
            id: 7,
            title: 'Medical Supplies',
            icon: <BriefcaseMedical className="w-5 h-5 text-[#ef4444]" />, // Red icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#ef4444]',
            bgIcon: 'bg-[#fee2e2]'
        },
        {
            id: 8,
            title: 'Pet Supplies',
            icon: <PawPrint className="w-5 h-5 text-[#ec4899]" />, // Pink/Brown icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#ec4899]',
            bgIcon: 'bg-[#fce7f3]'
        },
        {
            id: 5,
            title: 'Mom and Baby',
            icon: <Baby className="w-5 h-5 text-[#ec4899]" />, // Pink icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#ec4899]',
            bgIcon: 'bg-[#fce7f3]'
        },
        {
            id: 9,
            title: 'Lenses',
            icon: <Eye className="w-5 h-5 text-[#14b8a6]" />, // Teal icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#14b8a6]',
            bgIcon: 'bg-[#ccfbf1]'
        },
        {
            id: 10,
            title: 'Medical Equipment',
            icon: <Stethoscope className="w-5 h-5 text-[#3b82f6]" />, // Blue icon
            items: [
                'Glass partitions for home', 'Glass partitions for office', 'Glass partitions',
                'Decorative partitions', 'Fireproof partitions'
            ],
            color: 'text-[#3b82f6]',
            bgIcon: 'bg-[#dbeafe]'
        },
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-20 font-sans">
            <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
                {categories.map((cat) => (
                    <div key={cat.id} className="bg-[#F8FCFB] rounded-2xl p-6 break-inside-avoid hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.bgIcon}`}>
                                {cat.icon}
                            </div>
                            <h3 className="text-[16px] font-bold text-[#333]">{cat.title}</h3>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {cat.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[12px] text-gray-500 hover:text-[#25d3af] cursor-pointer transition-colors group">
                                    <span className="text-gray-300 group-hover:text-[#25d3af]">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button className="flex items-center gap-1.5 text-[#25d3af] text-[11px] font-bold hover:text-[#1ebf9e] transition-colors group">
                            <ChevronsRight className="w-3.5 h-3.5" />
                            All categories
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CatalogSection;
