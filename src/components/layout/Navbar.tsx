"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "New Arrivals", href: "/new" },
        { name: "Women", href: "/women" },
        { name: "Men", href: "/men" },
        { name: "Kids", href: "/kids" },
        { name: "Designers", href: "/designers" },
        { name: "Editorial", href: "/editorial" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 py-4 lg:px-12",
                isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu size={20} />
                </button>

                {/* Desktop Links - Left */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.slice(0, 3).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.2em] font-medium luxury-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logo */}
                <Link
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2 text-2xl lg:text-3xl font-bold tracking-[-0.05em] transition-transform duration-700 hover:scale-110"
                >
                    <span className="font-serif">ROOTS</span>
                </Link>

                {/* Desktop Links - Right + Icons */}
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(3).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.2em] font-medium luxury-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4 lg:space-x-5">
                        <button className="p-2 hover:bg-black/5 rounded-full transition-all duration-300">
                            <Search size={18} strokeWidth={1.5} />
                        </button>
                        <Link href="/wishlist" className="p-2 hover:bg-black/5 rounded-full transition-all duration-300 relative group">
                            <Heart size={18} strokeWidth={1.5} />
                            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                        <Link href="/cart" className="p-2 hover:bg-black/5 rounded-full transition-all duration-300 relative">
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-[60] lg:hidden p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-serif text-2xl font-bold tracking-tighter">ROOTS</span>
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                                    <X size={24} strokeWidth={1.5} />
                                </button>
                            </div>
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xl font-light tracking-tight hover:pl-2 transition-all duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-auto border-t pt-8">
                                <Link href="/account" className="flex items-center space-x-4 text-sm font-medium">
                                    <span>Log In / Register</span>
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
