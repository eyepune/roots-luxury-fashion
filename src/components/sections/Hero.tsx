"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax & Fade Effects
    const y1 = useTransform(scrollY, [0, 500], [0, 250]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 800], [1, 1.2]);

    useEffect(() => {
        // Simple GSAP imitation for reveal animations if GSAP is available
        // But using Framer Motion for better integration
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[900px] w-full overflow-hidden flex flex-col items-center justify-center p-[4vw] bg-neutral-900">
            {/* Main Visual Layer */}
            <motion.div
                style={{ y: y1, scale, opacity }}
                className="absolute inset-0 z-0 bg-neutral-900"
            >
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
                <Image
                    src="/roots_luxury_hero_v2_1773023966041.png"
                    alt="ROOTS Luxury Fashion Hero"
                    fill
                    priority
                    className="object-cover object-top brightness-[0.85] contrast-[1.05]"
                />

                {/* Vignette & Grain */}
                <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-black to-transparent z-10" />
                <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>

            {/* Editorial Content Layer */}
            <div className="relative z-20 w-full flex flex-col items-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
                    className="text-center"
                >
                    <span className="text-white text-[12px] uppercase tracking-[0.8em] font-medium mb-12 block inline-flex items-center space-x-6">
                        <span className="w-12 h-[1px] bg-white/40" />
                        <span>The Summer &apos;26 Monologue</span>
                        <span className="w-12 h-[1px] bg-white/40" />
                    </span>

                    <h1 className="text-white text-[10rem] lg:text-[18rem] font-serif tracking-[-0.1em] italic leading-none inline-block group relative">
                        Roots
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.5, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                            className="absolute -bottom-8 left-0 w-full h-[2px] bg-brand-accent origin-left"
                        />
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="flex flex-col md:flex-row items-center md:items-end justify-between w-full mt-24 px-12"
                >
                    <div className="flex-1 max-w-sm text-center md:text-left mb-12 md:mb-0">
                        <p className="text-white/60 text-[11px] leading-relaxed uppercase tracking-[0.2em] font-light">
                            Celebrating the intersection of <br />
                            Indian heritage and global modernity. <br />
                            Sourced from the finest <span className="text-white">Bhārat Ateliers</span>.
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center order-last md:order-none">
                        <button className="group pointer-events-auto bg-white hover:bg-brand-accent text-black hover:text-white px-20 py-8 rounded-full text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-700 shadow-2xl">
                            Explore Collection
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end text-right hidden lg:flex">
                        <div className="flex items-center space-x-6">
                            <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white"
                            >
                                <ArrowDown size={14} />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Side Coordinates - SSENSE Detail */}
            <div className="absolute right-12 top-1/2 -rotate-90 origin-right translate-y-1/2 pointer-events-none hidden lg:block">
                <span className="text-white/20 text-[10px] uppercase tracking-[0.8em] font-bold whitespace-nowrap">
                    Collection Archive: ROOTS_S26_001
                </span>
            </div>

            <div className="absolute left-12 top-1/2 rotate-90 origin-left -translate-y-1/2 pointer-events-none hidden lg:block">
                <span className="text-white/20 text-[10px] uppercase tracking-[0.8em] font-bold whitespace-nowrap">
                    Global Shipping • Mumbai Headquarters • 2026
                </span>
            </div>
        </section>
    );
};

export default Hero;
