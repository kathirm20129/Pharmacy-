import React from 'react';

const AlphabetSearch = () => {
    const rusAlphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');
    const engAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '0123456789'.split('');

    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-20 font-sans">
            <div className="flex items-baseline gap-6 mb-8">
                <h2 className="text-[32px] font-extrabold text-[#333]">Search by alphabet</h2>
                <a href="#" className="text-[13px] text-[#25d3af] font-medium hover:underline">Selection of goods by disease</a>
            </div>

            <div className="flex justify-between items-start relative overflow-hidden">
                <div className="flex flex-col gap-8 w-full">
                    {/* Russian Alphabet */}
                    <div className="flex flex-nowrap gap-1">
                        {rusAlphabet.map((char, index) => (
                            <button
                                key={index}
                                className={`w-8 h-8 flex-shrink-0 flex items-center justify-center text-[13px] font-bold rounded-sm hover:text-[#25d3af] transition-colors ${index === 0 ? 'bg-[#ebfbf5] text-[#25d3af]' : 'text-[#999]'}`}
                            >
                                {char}
                            </button>
                        ))}
                    </div>

                    {/* English Alphabet */}
                    <div className="flex flex-nowrap gap-1">
                        {engAlphabet.map((char, index) => (
                            <button
                                key={index}
                                className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[13px] font-bold rounded-sm text-[#999] hover:text-[#25d3af] transition-colors"
                            >
                                {char}
                            </button>
                        ))}
                    </div>

                    {/* Numbers */}
                    <div className="flex flex-nowrap gap-1">
                        {numbers.map((char, index) => (
                            <button
                                key={index}
                                className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-[13px] font-bold rounded-sm text-[#999] hover:text-[#25d3af] transition-colors"
                            >
                                {char}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Big decorative "A-Я" - Exactly positioned */}
                <div className="hidden lg:block select-none pointer-events-none absolute -right-0 -top-6">
                    <span className="text-[170px] font-bold text-[#25d3af]/10 leading-none tracking-tight font-sans">
                        A-Z
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AlphabetSearch;
