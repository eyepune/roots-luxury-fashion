"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, Menu, X, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 py-4 lg:px-12",
                    isScrolled
                        ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-sm"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 -ml-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
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
                        className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-3 group"
                    >
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-brand-primary rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                            {/* Simplified Brand Mark */}
                            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                        </div>
                        <span className="text-2xl lg:text-3xl font-bold tracking-[-0.05em] font-serif">ROOTS</span>
                    </Link>

                    {/* Desktop Links - Right + Icons */}
                    <div className="flex items-center space-x-4 lg:space-x-8">
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

                        <div className="flex items-center space-x-2 lg:space-x-4">
                            <ThemeToggle />

                            <button
                                onClick={() => setIsLoginModalOpen(true)}
                                className="hidden lg:flex p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 relative group"
                            >
                                <Smartphone size={18} strokeWidth={1.5} />
                                <span className="absolute -top-1 -right-1 text-[8px] bg-brand-primary text-white px-1 font-bold rounded-sm">OTP</span>
                            </button>

                            <Link href="/wishlist" className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 relative group">
                                <Heart size={18} strokeWidth={1.5} />
                                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link href="/cart" className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all duration-300 relative">
                                <ShoppingBag size={18} strokeWidth={1.5} />
                                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-black dark:bg-white text-[8px] font-bold text-white dark:text-black">
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
                                className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white dark:bg-black z-[60] lg:hidden p-8 flex flex-col shadow-2xl"
                            >
                                <div className="flex justify-between items-center mb-12">
                                    <span className="font-serif text-2xl font-bold tracking-tighter">ROOTS</span>
                                    <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                                        <X size={24} strokeWidth={1.5} />
                                    </button>
                                </div>
                                <div className="flex flex-col space-y-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-2xl font-light tracking-tight hover:pl-2 transition-all duration-300 flex items-center justify-between group"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="group-hover:text-brand-primary transition-colors">{link.name}</span>
                                            <span className="text-neutral-300 dark:text-neutral-800 text-sm font-serif italic opacity-0 group-hover:opacity-100 transition-opacity">Discover</span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto border-t border-neutral-100 dark:border-neutral-900 pt-8 space-y-4">
                                    <button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsLoginModalOpen(true);
                                        }}
                                        className="flex items-center space-x-4 text-sm font-medium w-full"
                                    >
                                        <Smartphone size={18} className="text-brand-primary" />
                                        <span>OTP Login / Registration</span>
                                    </button>
                                    <p className="text-[10px] uppercase tracking-widest text-neutral-400">Available across India</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>

            {/* OTP Login Modal Placeholder */}
            <AnimatePresence>
                {isLoginModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsLoginModalOpen(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-white dark:bg-neutral-900 p-12 lg:p-16 rounded-[2rem] shadow-2xl overflow-hidden"
                        >
                            {/* Brand Accent */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />

                            <h2 className="text-4xl font-serif mb-4">Secure Access</h2>
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-12">Enter your mobile number to receive a 6-digit access code.</p>

                            <div className="space-y-6">
                                <div className="flex items-center border border-neutral-200 dark:border-neutral-800 rounded-xl px-6 py-4 focus-within:border-brand-primary transition-colors">
                                    <span className="text-sm font-bold mr-4 border-r border-neutral-200 dark:border-neutral-800 pr-4">+91</span>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="bg-transparent outline-none w-full text-sm font-medium tracking-widest"
                                    />
                                </div>

                                <button className="w-full bg-brand-primary text-white py-5 rounded-xl text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all">
                                    Request OTP
                                </button>

                                <p className="text-[10px] text-center text-neutral-400 uppercase tracking-widest leading-relaxed">
                                    By continuing, you agree to Roots India&apos;s <br />
                                    <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>
                                </p>
                            </div>

                            <button
                                onClick={() => setIsLoginModalOpen(false)}
                                className="absolute top-8 right-8 p-2 hover:bg-neutral-100 dark:hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X size={20} strokeWidth={1.5} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
