import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    // Using placeholders or existing images. 
    // Since we don't have exact blog images, we will use colored div placeholders or generic images available.
    // Ideally we would use real images. I'll use a placeholder style for now to match structure.
    const posts = [
        {
            id: 1,
            title: "Active life without 'hot flashes' - it's all in your hands",
            desc: "It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.",
            image: "https://i.pinimg.com/1200x/46/c8/54/46c854a58a8ec3b49ae8627ecb90e0eb.jpg"
        },
        {
            id: 2,
            title: "Active life without 'hot flashes' - it's all in your hands",
            desc: "It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.",
            image: "https://i.pinimg.com/736x/87/08/ed/8708edba2ec137f629352db04b01cb6f.jpg"
        },
        {
            id: 3,
            title: "Active life without 'hot flashes' - it's all in your hands",
            desc: "It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.",
            image: "https://i.pinimg.com/736x/5d/29/ac/5d29ac489b2a58ecc080a7c51c2eae4a.jpg"
        },
        {
            id: 4,
            title: "Active life without 'hot flashes' - it's all in your hands",
            desc: "It is impossible to deceive nature, and almost every woman after forty begins to think about the approach of menopause.",
            image: "https://i.pinimg.com/736x/95/c1/c4/95c1c408d9ffc0f51d05bae9c4d89fd0.jpg"
        }
    ];

    return (
        <section className="max-w-[1440px] mx-auto px-6 mb-32 font-sans">
            <div className="flex items-baseline gap-6 mb-8">
                <h2 className="text-[32px] font-extrabold text-[#333]">Health Blog</h2>
                <Link to="/blog" className="flex items-center gap-1 text-[13px] text-[#25d3af] font-medium hover:underline">
                    <ChevronsRight className="w-4 h-4" />
                    Latest posts
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="w-full h-48 rounded-[20px] mb-4 overflow-hidden relative bg-gray-100">
                            <img
                                src={post.image}
                                alt="Blog Post"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <h3 className="text-[16px] font-bold text-[#222] mb-2 leading-[1.3] group-hover:text-[#25d3af] transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-[11px] text-[#888] leading-[1.6]">
                            {post.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;
