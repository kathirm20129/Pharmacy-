import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from 'lucide-react';
// We will use the generic image for all cards to keep it clean, as per the user's focus on layout/style
const productImg = '/product_generic.png';

const products = [
    {
        id: 1,
        tag: 'Product of the day',
        inStock: true,
        title: 'Bicyclol Tablets, coated, 25 mg, 18 pcs',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img1.png',
    },
    {
        id: 2,
        tag: 'Product of the day',
        inStock: true,
        title: 'Femibion Natalcare I, tablets, 30 pcs',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img2.png',
    },
    {
        id: 3,
        tag: 'Product of the day',
        inStock: true,
        title: 'Bifiform - Diarrhea Treatment, 30 capsules',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img3.png',
    },
    {
        id: 4,
        tag: 'Product of the day',
        inStock: true,
        title: 'Detragel - Gel for external use, 30g',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img4.png',
    },
    {
        id: 5,
        tag: 'Product of the day',
        inStock: false,
        title: 'Heptral 400mg - Liver Function Support',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img5.png',
    },
    {
        id: 6,
        tag: 'Product of the day',
        inStock: false,
        title: 'Heptral 400mg - Liver Function Support',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img5.png',
    },
    {
        id: 7,
        tag: 'Product of the day',
        inStock: true,
        title: 'Detragel - Gel for external use, 30g',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img4.png',
    },
    {
        id: 8,
        tag: 'Product of the day',
        inStock: true,
        title: 'Femibion Natalcare I, tablets, 30 pcs',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img3.png',
    },
    {
        id: 9,
        tag: 'Product of the day',
        inStock: true,
        title: 'Bicyclol Tablets, coated, 25 mg, 18 pcs',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img2.png',
    },
    {
        id: 10,
        tag: 'Product of the day',
        inStock: true,
        title: 'Bifiform - Diarrhea Treatment, 30 capsules',
        brand: 'Lirina',
        count: '10 pcs',
        code: '153249',
        price: '41 108',
        oldPrice: '49 999',
        rating: 4,
        src: '/img1.png',
    },
];

const MonthPromo = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-16 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[28px] font-extrabold text-[#333]">Offer of the Month</h2>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25d3af] hover:border-[#25d3af] transition-all">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25d3af] hover:border-[#25d3af] transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-white border border-gray-50 rounded-[1.25rem] p-4 relative group hover:shadow-xl hover:shadow-gray-100 transition-all flex flex-col h-full">
                        {/* Tag */}
                        <div className="absolute top-3 left-3 z-10">
                            <span className="bg-[#25d3af] text-white text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                                {product.tag}
                            </span>
                        </div>

                        {/* Image */}
                        <div className="h-32 mb-4 flex items-center justify-center">
                            <img src={product.src} alt={product.title} className="max-h-full max-w-full object-contain" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-grow">
                            {/* Availability */}
                            <div className={`text-[9px] font-bold mb-1 ${product.inStock ? 'text-[#25d3af]' : 'text-red-500'}`}>
                                {product.inStock ? 'In stock' : 'Out of stock'}
                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-0.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-3 h-3 ${i < product.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`}
                                    />
                                ))}
                            </div>

                            {/* Title */}
                            <h3 className="text-[12px] font-bold text-[#333] leading-snug mb-3 line-clamp-3 min-h-[42px] group-hover:text-[#25d3af] transition-colors">
                                {product.title}
                            </h3>

                            {/* Meta Data */}
                            <div className="text-[9px] text-gray-400 mb-4 space-y-0.5 font-medium">
                                <p>Brand: <span className="text-gray-500">{product.brand}</span></p>
                                <p>Quantity in package: <span className="text-gray-500">{product.count}</span></p>
                                <p>Product Code: <span className="text-gray-500">{product.code}</span></p>
                            </div>

                            {/* Price & Action */}
                            <div className="mt-auto flex items-end justify-between">
                                <div>
                                    <div className="text-[16px] font-black text-[#333] mb-0.5 whitespace-nowrap">
                                        {product.price} RUB.
                                    </div>
                                    <div className="text-[10px] font-bold text-red-500 line-through">
                                        {product.oldPrice} RUB.
                                    </div>
                                </div>
                                <button className="w-10 h-10 bg-[#25d3af] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25d3af]/30 hover:bg-[#1ebf9e] active:scale-95 transition-all">
                                    <ShoppingCart className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MonthPromo;