"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const shopProducts = [
    {
        name: "Oversized Merino Coat",
        price: 3200,
        brand: "ROOTS ATELIER",
        image: "/product-2.png",
    },
    {
        name: "High-Waist Silk Trousers",
        price: 1100,
        brand: "ROOTS ATELIER",
        image: "/product-1.png",
    },
    {
        name: "Pointed Suede Boots",
        price: 950,
        brand: "STEPPE",
        image: "/product-2.png",
    },
];

const ShopTheLook = () => {
    return (
        <section className="py-32 bg-luxury-gray relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Editorial Image Side */}
                    <div className="lg:col-span-7 relative group">
                        <div className="aspect-[4/5] overflow-hidden relative">
                            <Image
                                src="/shop-the-look.png"
                                alt="Editorial Look"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />

                            {/* Hotspots (Interactive dots) */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                className="absolute top-[30%] left-[45%] w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-125 transition-transform"
                            >
                                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-[55%] left-[55%] w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-125 transition-transform"
                            >
                                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping" />
                            </motion.div>
                        </div>

                        <div className="mt-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">Editorial Vol. 04</span>
                            <h3 className="text-3xl font-serif italic mt-2 underline decoration-[0.5px] underline-offset-8">The Minimalist Gallery</h3>
                        </div>
                    </div>

                    {/* Product Items Side */}
                    <div className="lg:col-span-5">
                        <SectionHeading
                            title="Shop the Look"
                            subtitle="Curated Outfits"
                            description="Discover the complete silhouette. Each piece meticulously selected to create a statement of quiet luxury."
                            className="mb-12 md:mb-16"
                        />

                        <div className="space-y-8">
                            {shopProducts.map((product, idx) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-6 group cursor-pointer border-b border-neutral-200 pb-8 last:border-0"
                                >
                                    <div className="w-24 h-32 relative bg-white overflow-hidden shrink-0">
                                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold">{product.brand}</span>
                                        <h4 className="text-lg font-medium tracking-tight mt-1">{product.name}</h4>
                                        <p className="text-sm font-medium mt-2">${product.price.toLocaleString()}</p>
                                    </div>
                                    <button className="p-4 bg-white rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                                        <ShoppingBag size={16} strokeWidth={1.5} />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        <button className="mt-12 flex items-center space-x-4 bg-black text-white px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-800 transition-colors w-full lg:w-auto">
                            <span>Purchase Full Outfit</span>
                            <ArrowRight size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ShopTheLook;
