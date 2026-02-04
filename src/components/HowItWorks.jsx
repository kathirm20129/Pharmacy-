import React from 'react';
import { Search, MapPin, ClipboardCheck, ShoppingBag, Package } from 'lucide-react';

// Using a placeholder image for the icons if the generated one isn't split
// In a real app, these would be separate SVGs or images.
// For now, I will use lucid-react icons as placeholders to match the clean vector style if preferred,
// or we could use the generated image. Let's stick to Lucide icons for pixel-perfect sharpness and recolor them.

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Choose a product',
            description: 'Use the search to find the product you need',
            icon: '/hiw_box.png',
        },
        {
            id: 2,
            title: 'Choose a pharmacy',
            description: 'Choose the pharmacy from which it will be convenient for you to pick up the order',
            icon: '/hiw_pharmacy.png',
        },
        {
            id: 3,
            title: 'Place an order',
            description: 'Follow the instructions and complete the checkout',
            icon: '/hiw_order.png',
        },
        {
            id: 4,
            title: 'Receive your order',
            description: 'Pick up your order at the nearest pharmacy to you',
            icon: '/hiw_pickup.png',
        }
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-20 font-sans">
            <h2 className="text-[28px] font-extrabold text-[#333] mb-10">How we work?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step) => (
                    <div key={step.id} className="flex gap-4">
                        {/* Icon - Standalone */}
                        <div className="shrink-0 pt-1">
                            <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">
                            {/* Header Row: Circle + Title */}
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-5 h-5 rounded-full border border-dashed border-[#25d3af] flex items-center justify-center text-[#25d3af] font-bold text-[10px] bg-white shrink-0">
                                    {step.id}
                                </div>
                                <h3 className="text-[14px] font-black text-[#333] leading-tight">{step.title}</h3>
                            </div>

                            {/* Description */}
                            <p className="text-[11px] text-gray-400 font-medium leading-snug">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
