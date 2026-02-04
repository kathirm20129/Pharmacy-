import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg p-5 border border-transparent hover:shadow-xl hover:border-transparent transition-all group relative flex flex-col min-h-[420px]">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
            {product.isProductOfDay && (
                <span className="bg-[#25d3af] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Product of the day
                </span>
            )}
            {product.isHit && (
                <span className="bg-[#ff4d4d] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    HIT
                </span>
            )}
            {product.id === 2 && (
                <span className="bg-[#3b82f6] text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-sm">
                    <span className="w-2.5 h-2.5 bg-transparent border border-white rounded-full flex items-center justify-center text-[7px]">!</span>
                    Pickup only
                </span>
            )}
        </div>

        {/* Product Image */}
        <div className="h-[160px] flex items-center justify-center mb-4 mt-4">
            <div className="w-[120px] h-full flex items-center justify-center">
                <img src={product.image || "/logo.png"} className="max-w-full max-h-full object-contain opacity-100 grayscale-[0.2] group-hover:grayscale-0 transition-all" alt="Product" />
            </div>
        </div>

        {/* Status & Rating */}
        <div className="flex items-center justify-between mb-3">
            {product.inStock ? (
                <span className="text-[10px] font-bold text-[#25d3af]">In stock</span>
            ) : (
                <span className="text-[10px] font-bold text-[#ff4d4d]">Out of stock</span>
            )}
            <div className="flex text-[#ffdb4d] gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < product.rating ? 'fill-current' : 'text-[#e5e7eb]'}`} />
                ))}
            </div>
        </div>

        {/* Title */}
        <h3 className="text-[14px] font-bold text-[#333] leading-snug mb-4 group-hover:text-[#25d3af] transition-colors cursor-pointer min-h-[42px] content-start">
            {product.name}
        </h3>

        {/* Metadata List */}
        <div className="space-y-1.5 mb-5 pl-2 border-l border-[#e5e7eb] ml-0.5 text-left">
            <div className="flex items-center gap-1.5 text-[10px] text-[#999]">
                <span>Brand:</span>
                <span className="text-[#555] font-medium">{product.brand}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#999]">
                <span>Quantity in package:</span>
                <span className="text-[#555] font-medium">{product.packing}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#999]">
                <span>Product code:</span>
                <span className="text-[#555] font-medium">{product.code}</span>
            </div>
        </div>

        {/* Price & Action */}
        <div className="mt-auto flex items-end justify-between w-full">
            <div>
                <p className="text-[20px] font-extrabold text-[#333] leading-none mb-0.5">{product.price} RUB.</p>
                <p className="text-[11px] text-[#ff4d4d] line-through font-bold">{product.oldPrice} RUB.</p>
            </div>
            <button className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all active:scale-95 ${product.inStock ? 'bg-[#25d3af] hover:bg-[#1ebf9e] shadow-[#25d3af]/40' : 'bg-[#e5e7eb] cursor-not-allowed text-[#999]'}`}>
                <ShoppingCart className="w-4.5 h-4.5" />
            </button>
        </div>
    </div>
);

export default ProductCard;
