"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    id: string;
    name: string;
    brand: string;
    price: number;
    image: string;
    category: string;
}

const ProductCard = ({ id, name, brand, price, image, category }: ProductCardProps) => {
    return (
        <div className="group flex flex-col w-full h-full">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-luxury-gray">
                <Link href={`/product/${id}`} className="block w-full h-full">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                </Link>

                {/* Floating Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                    <button className="p-3 bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full shadow-sm">
                        <Heart size={16} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Quick Add To Cart */}
                <button className="absolute bottom-0 left-0 w-full py-5 bg-white/90 backdrop-blur-sm text-black text-[10px] uppercase tracking-[0.2em] font-bold transform translate-y-full transition-transform duration-500 group-hover:translate-y-0 flex items-center justify-center space-x-2">
                    <Plus size={14} />
                    <span>Quick Add</span>
                </button>
            </div>

            {/* Info */}
            <div className="pt-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Link href={`/brand/${brand.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 hover:text-black transition-colors">
                            {brand}
                        </Link>
                        <h3 className="font-serif text-xl tracking-tight leading-tight mt-1">
                            <Link href={`/product/${id}`} className="hover:opacity-70 transition-opacity">
                                {name}
                            </Link>
                        </h3>
                    </div>
                    <span className="text-sm font-medium tracking-tight">
                        ${price.toLocaleString()}
                    </span>
                </div>
                <p className="text-[10px] text-neutral-400 mt-auto uppercase tracking-wider">{category}</p>
            </div>
        </div>
    );
};

export default ProductCard;
