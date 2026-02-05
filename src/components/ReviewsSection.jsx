import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
    const reviews = [
        {
            id: 1,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Due to misunderstanding and my own inattentiveness, I bought the wrong product. We sorted it out and exchanged it without any unnecessary chatter or delays. A low bow and thank you! Yours now, a regular customer.'
        },
        {
            id: 2,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 4,
            text: 'We thank Victoria Sdobnova for all these qualities and wish her a long life, for she helps people very much, is always kind, willing, explains everything, and gives advice.'
        },
        {
            id: 3,
            author: 'Liana, Moscow',
            date: 'July 25',
            rating: 5,
            text: 'Thank you for the opportunity to buy medicines without leaving home. I would like to separately say thank you to the courier, the young lady Julia was very smiling, straight up charged with good mood, polite, wished a speedy recovery.'
        }
    ];

    return (
        <section className="w-full bg-[#f4fcf9] py-16 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row gap-12">

                {/* Left Card - Rating Summary */}
                <div className="w-full md:w-[320px] shrink-0">
                    <div className="bg-white rounded-[20px] p-8 shadow-sm flex flex-col items-center text-center h-full">
                        <h3 className="text-[18px] font-extrabold text-[#333] leading-tight mb-2">
                            Average<br />Rating
                        </h3>

                        <div className="text-[64px] font-black text-[#333] leading-none mb-2">
                            4.8
                        </div>

                        <div className="flex gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[#ffcc00] fill-[#ffcc00]" />
                            ))}
                        </div>

                        <p className="text-[12px] text-gray-400 font-medium leading-normal mb-8 max-w-[200px]">
                            Overall rating based on 4349 customer reviews
                        </p>

                        <button className="w-full py-3 bg-[#25d3af] text-white rounded-full font-extrabold text-[11px] uppercase tracking-widest hover:bg-[#1ebf9e] shadow-lg shadow-[#25d3af]/30 transition-all active:scale-95">
                            Leave a review
                        </button>
                    </div>
                </div>

                {/* Right Side - Reviews List */}
                <div className="flex-1 pt-2">
                    <div className="flex flex-col gap-10">
                        {reviews.map((review) => (
                            <div key={review.id} className="flex flex-col gap-2">
                                <div className="flex items-center gap-4">
                                    <span className="text-[15px] font-black text-[#333]">
                                        {review.author}, <span className="text-gray-400 font-medium">{review.date}</span>
                                    </span>
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 ${i < review.rating ? 'text-[#ffcc00] fill-[#ffcc00]' : 'text-gray-200 fill-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[12px] text-gray-500 leading-relaxed max-w-3xl">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Link to="/reviews" className="inline-flex items-center gap-2 mt-8 text-[#25d3af] text-[11px] font-black uppercase tracking-widest hover:text-[#1ebf9e] transition-colors group">
                        <ChevronRight className="w-4 h-4" />
                        All 4349 reviews
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;
