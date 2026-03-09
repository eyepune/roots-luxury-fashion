"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for the image
            gsap.to(imageRef.current, {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Text reveal animation
            gsap.from(".reveal-item", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[700px] w-full overflow-hidden bg-luxury-gray"
        >
            {/* Background Image Wrapper */}
            <div
                ref={imageRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
            >
                <Image
                    src="/hero-campaign.png"
                    alt="Luxury Fashion Campaign"
                    fill
                    priority
                    className="object-cover object-center grayscale-[20%] brightness-[95%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
            </div>

            {/* Content Overlay */}
            <div className="relative h-full w-full flex flex-col justify-end pb-24 px-6 lg:px-12 text-white">
                <div className="max-w-[1800px] mx-auto w-full">
                    <div ref={textRef} className="max-w-3xl">
                        <motion.span
                            className="reveal-item inline-block text-[10px] lg:text-xs uppercase tracking-[0.4em] font-medium mb-6"
                        >
                            Spring / Summer 2026 Collection
                        </motion.span>

                        <h1 className="reveal-item text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] tracking-tighter mb-10">
                            Infinite <br />
                            <span className="italic pl-12 md:pl-24 lg:pl-32">Elegance</span>
                        </h1>

                        <div className="reveal-item flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
                            <button className="group relative flex items-center space-x-4 bg-white text-black px-10 py-5 text-[10px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-colors hover:bg-black hover:text-white">
                                <span className="relative z-10">Explore Collection</span>
                                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-2" />
                            </button>

                            <button className="text-[10px] uppercase tracking-[0.2em] font-bold border-b border-white pb-1 transition-opacity hover:opacity-70">
                                The Roots Story
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center space-y-4">
                <span className="text-[8px] uppercase tracking-[0.5em] vertical-text transform rotate-90 origin-right whitespace-nowrap opacity-50">
                    Scroll to discover
                </span>
                <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 w-full h-1/2 bg-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
