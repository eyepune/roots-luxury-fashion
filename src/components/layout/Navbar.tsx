"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinksLeft = [
        { name: "Collection", href: "/collection" },
        { name: "Designers", href: "/designers" },
        { name: "Editorial", href: "/editorial" },
    ];

    const navLinksRight = [
        { name: "Men", href: "/men" },
        { name: "Women", href: "/women" },
        { name: "Kids", href: "/kids" },
    ];

    return (
        <>
            <nav className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] px-[4vw] py-8",
                isScrolled ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-6 -translate-y-2 border-b border-neutral-100 dark:border-neutral-900" : "bg-transparent"
            )}>
                <div className="flex items-center justify-between">

                    {/* Left: Menu Toggle + Desktop Links */}
                    <div className="flex items-center space-x-12">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="bg-transparent hover:scale-110 transition-transform flex items-center space-x-4 group"
                        >
                            <Menu size={24} strokeWidth={1} className="group-hover:text-brand-accent transition-colors" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold hidden lg:inline">Discover</span>
                        </button>

                        <div className="hidden lg:flex items-center space-x-12">
                            {navLinksLeft.map((link) => (
                                <Link key={link.name} href={link.href} className="nav-link text-[10px]">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Center: Minimalist High-Fashion Logo */}
                    <Link href="/" className="absolute left-1/2 -translate-x-1/2 group">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-serif font-bold tracking-[-0.08em] group-hover:tracking-normal transition-all duration-[1s] ease-expo">
                                ROOTS
                            </span>
                            <span className="text-[7px] uppercase tracking-[0.6em] font-bold opacity-40 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-700">Heritage Atelier</span>
                        </div>
                    </Link>

                    {/* Right: Actions + Search */}
                    <div className="flex items-center space-x-8 lg:space-x-12">
                        <div className="hidden lg:flex items-center space-x-12">
                            {navLinksRight.map((link) => (
                                <Link key={link.name} href={link.href} className="nav-link text-[10px]">
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-6">
                            <ThemeToggle />
                            <button className="hover:scale-110 transition-transform">
                                <Search size={20} strokeWidth={1} />
                            </button>
                            <Link href="/wishlist" className="hidden sm:block hover:scale-110 transition-transform">
                                <Heart size={20} strokeWidth={1} />
                            </Link>
                            <Link href="/cart" className="relative group hover:scale-110 transition-transform">
                                <ShoppingBag size={20} strokeWidth={1} />
                                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[8px] font-bold text-white shadow-lg">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* High-Fashion Sidebar Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-xl z-[150]"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-full max-w-lg bg-brand-paper dark:bg-black z-[200] p-16 flex flex-col shadow-2xl overflow-hidden"
                        >
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                            <div className="flex justify-between items-center mb-24">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center">
                                        <Globe size={20} className="text-white animate-spin-slow" />
                                    </div>
                                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Bharat • Worldwide</span>
                                </div>
                                <button onClick={() => setIsMenuOpen(false)} className="group p-4 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                    <X size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-500" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-12">
                                {["NEW ARRIVALS", "MENSWEAR", "WOMENSWEAR", "BAGS & SHOES", "FINE JEWELS", "ROOTS ARCHIVE", "EDITORIAL"].map((item, idx) => (
                                    <Link
                                        key={item}
                                        href={`/${item.toLowerCase().replace(/ /g, '-')}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="group relative inline-block overflow-hidden"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * idx }}
                                            className="flex items-baseline space-x-6 group-hover:translate-x-4 transition-transform duration-700"
                                        >
                                            <span className="text-[10px] font-bold opacity-30 italic font-serif">0{idx + 1}</span>
                                            <span className="text-5xl md:text-6xl font-serif tracking-tighter group-hover:text-brand-accent transition-colors italic leading-none">{item}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>

                            {/* Sidebar Footer */}
                            <div className="mt-auto border-t border-black/10 dark:border-white/10 pt-16 flex flex-col space-y-8">
                                <div className="flex justify-between text-[10px] uppercase tracking-[0.3em] font-bold">
                                    <Link href="/help" className="hover:text-brand-accent">Support</Link>
                                    <Link href="/shipping" className="hover:text-brand-accent">Shipping</Link>
                                    <Link href="/returns" className="hover:text-brand-accent">Exchange</Link>
                                </div>
                                <div className="p-12 bg-black dark:bg-white text-white dark:text-black rounded-full text-center">
                                    <button className="text-[10px] uppercase tracking-[0.5em] font-bold">Login to Atelier</button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
