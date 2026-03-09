"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus, Sparkles } from "lucide-react";

interface ProductCardProps {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    category: string;
}

const ProductCard = ({ id, name, brand, price, image, category }: ProductCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative flex flex-col w-full h-full bg-transparent overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/product/${id}`} className="block relative aspect-[4/5] bg-[#F4F4F4] dark:bg-neutral-900 overflow-hidden cursor-pointer">
                {/* Background Shadow Effect on Hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.05 : 0 }}
                    className="absolute inset-0 bg-black pointer-events-none z-10 transition-opacity duration-700"
                />

                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.05]"
                />

                {/* Micro Action Bar (Clean reveal) */}
                <div className="absolute top-6 right-6 flex flex-col space-y-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0 transition-transform duration-700">
                    <button className="p-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full shadow-2xl hover:bg-brand-accent hover:text-white transition-all duration-300">
                        <Plus size={18} strokeWidth={1} />
                    </button>
                    <button className="p-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full shadow-2xl hover:text-red-500 transition-all duration-300">
                        <Heart size={18} strokeWidth={1} />
                    </button>
                </div>

                {/* AI Badge Reveal - Luxury touch */}
                <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isHovered ? 0 : 50, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="bg-black text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-2xl border border-white/10"
                    >
                        <Sparkles size={12} className="text-brand-accent animate-pulse" />
                        <span className="text-[8px] uppercase tracking-[0.4em] font-bold">AI Virtual Fit</span>
                    </motion.div>
                </div>
            </Link>

            <div className="py-8 flex flex-col flex-grow bg-white dark:bg-black transition-colors duration-700">
                <div className="flex justify-between items-start mb-1">
                    <Link href={`/brand/${brand.toLowerCase()}`} className="text-[9px] uppercase tracking-[0.5em] font-bold text-neutral-400 hover:text-brand-accent transition-colors">
                        {brand}
                    </Link>
                    <span className="text-[11px] font-bold tracking-tighter text-black dark:text-white">₹{price.toLocaleString('en-IN')}</span>
                </div>

                <h3 className="font-serif text-2xl tracking-tight leading-none mb-4 group-hover:translate-x-2 transition-transform duration-700">
                    <Link href={`/product/${id}`} className="hover:opacity-60 transition-opacity">
                        {name}
                    </Link>
                </h3>

                <div className="flex items-center space-x-12 mt-auto">
                    <span className="text-[10px] uppercase font-light text-neutral-400 tracking-[0.2em]">{category}</span>
                    <Link href={`/product/${id}`} className="text-[9px] uppercase tracking-[0.4em] font-bold underline decoration-neutral-100 hover:decoration-brand-accent underline-offset-8 transition-all">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
