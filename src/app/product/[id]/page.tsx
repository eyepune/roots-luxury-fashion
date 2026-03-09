"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import {
    Heart,
    ShoppingBag,
    Plus,
    Minus,
    Star,
    Sparkles,
    ArrowRight,
    ShieldCheck,
    Truck,
    RotateCcw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AITryOn from "@/components/ui/AITryOn";
import { cn } from "@/lib/utils";

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);
    const [isTryOnOpen, setIsTryOnOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    // Mock product data based on the ID for demo
    const product = {
        id: id,
        name: "Aurelian Nomad Trench Coat",
        brand: "ROOTS ATELIER",
        price: 84500, // INR
        originalPrice: 120000,
        rating: 4.8,
        reviews: 124,
        images: ["/product-2.png", "/product-1.png", "/product-2.png", "/product-1.png"],
        description: "A definitive silhouette of the 2026 season. The Aurelian Nomad combines architectural structure with fluid movement. Crafted from double-faced cashmere and wool blend, sourced from the Biella region. Designed for an effortless, oversized fit that transitions from nomadic daytime exploration to evening elegance.",
        sizes: ["XS", "S", "M", "L", "XL", "XXL"],
        vendor: {
            name: "Roots Flagship Atelier",
            location: "Mumbai, India",
            rating: 4.9,
            verified: true
        },
        specs: [
            { name: "Material", value: "85% Cashmere, 15% Virgin Wool" },
            { name: "Fit", value: "Generous / Oversized" },
            { name: "Origin", value: "Handcrafted in Mumbai" },
            { name: "Care", value: "Dry Clean Only" }
        ]
    };

    const handleBuyNow = async () => {
        if (!selectedSize) {
            alert("Please select a size first.");
            return;
        }

        try {
            const response = await fetch("/api/checkout/razorpay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: product.price,
                    productId: product.id,
                    size: selectedSize,
                }),
            });

            const { orderId, keyId } = await response.json();

            const options = {
                key: keyId,
                amount: product.price * 100, // Razorpay works in paise
                currency: "INR",
                name: "ROOTS INDIA",
                description: `Order for ${product.name}`,
                image: "/logo.png",
                order_id: orderId,
                handler: function (response: any) {
                    alert(`Payment Successful! ID: ${response.razorpay_payment_id}`);
                    window.location.href = `/order-success?id=${response.razorpay_order_id}`;
                },
                prefill: {
                    name: "Guest User",
                    email: "customer@roots.in",
                    contact: "9999999999",
                },
                theme: {
                    color: "#2D402F", // Brand Primary
                },
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Razorpay Error:", error);
            alert("Failed to initialize payment. Check console.");
        }
    };

    return (
        <div className="bg-white dark:bg-black transition-colors duration-500 min-h-screen">
            <Navbar />

            <main className="max-w-[1800px] mx-auto px-6 lg:px-12 pt-32 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Side: Editorial Image Gallery */}
                    <div className="lg:col-span-7 flex flex-col space-y-4">
                        <div className="relative aspect-[3/4] w-full bg-neutral-50 dark:bg-neutral-900 overflow-hidden group cursor-crosshair">
                            <Image
                                src={product.images[activeImage]}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                            />

                            {/* Floating Tags Overlay */}
                            <div className="absolute top-8 left-8 flex flex-col space-y-2">
                                <span className="bg-white/90 dark:bg-black/90 backdrop-blur-md px-3 py-1 text-[8px] uppercase tracking-widest font-bold rounded-sm shadow-sm">Fall/Winter &apos;26 Exclusive</span>
                                <span className="bg-brand-primary text-white px-3 py-1 text-[8px] uppercase tracking-widest font-bold rounded-sm shadow-sm">-30% Early Access</span>
                            </div>

                            {/* Wishlist Button */}
                            <button className="absolute top-8 right-8 p-4 bg-white/90 dark:bg-black/90 text-black dark:text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                                <Heart size={20} strokeWidth={1.5} />
                            </button>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={cn(
                                        "relative aspect-square cursor-pointer overflow-hidden border-2 transition-all duration-300 bg-neutral-50 dark:bg-neutral-900",
                                        activeImage === idx ? "border-brand-primary" : "border-transparent opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Product Details & Purchase Actions */}
                    <div className="lg:col-span-5 flex flex-col">
                        {/* breadcrumbs */}
                        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-400 mb-8 font-bold">
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/men">Men</Link>
                            <span>/</span>
                            <Link href="/apparel">Apparel</Link>
                            <span>/</span>
                            <span className="text-black dark:text-white">Product Detail</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4 mb-12">
                            <Link href="/brand/roots" className="text-sm font-bold tracking-[0.2em] text-neutral-400 hover:text-brand-primary transition-colors underline decoration-brand-primary/20">{product.brand}</Link>
                            <h1 className="text-4xl md:text-6xl font-serif leading-tight">{product.name}</h1>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-1 text-brand-primary">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={14} fill={star <= 4 ? "currentColor" : "none"} strokeWidth={1.5} />
                                    ))}
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">{product.reviews} Editorial Reviews</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-baseline space-x-6 mb-12">
                            <span className="text-3xl font-medium tracking-tight text-brand-primary dark:text-white">₹{product.price.toLocaleString('en-IN')}</span>
                            <span className="text-lg text-neutral-400 line-through font-light italic">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                            <span className="bg-neutral-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-neutral-500">Savings ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                        </div>

                        {/* Interactive Size Selector */}
                        <div className="space-y-6 mb-12">
                            <div className="flex justify-between items-center px-1">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Select Silhouette Size</span>
                                <button className="text-[9px] uppercase tracking-widest font-bold underline text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={cn(
                                            "py-4 border text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 rounded-xl",
                                            selectedSize === size
                                                ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                                                : "border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white"
                                        )}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* AI Feature Trigger */}
                        <button
                            onClick={() => setIsTryOnOpen(true)}
                            className="w-full relative group overflow-hidden bg-neutral-900 text-white rounded-[2rem] p-8 mb-12 transition-all hover:shadow-2xl active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-transparent opacity-30 group-hover:opacity-60 transition-opacity" />
                            <div className="relative z-10 flex flex-col items-center space-y-4">
                                <div className="flex items-center space-x-4">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                                    >
                                        <Sparkles size={24} fill="currentColor" />
                                    </motion.div>
                                    <span className="text-2xl font-serif italic">Virtual Try-On Experience</span>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-60">Visualize fit on your body scan with Roots Labs</p>
                            </div>

                            {/* Micro animation element */}
                            <div className="absolute -right-12 -bottom-12 w-48 h-48 border-[1px] border-white/10 rounded-full scale-110 blur-xl animate-pulse" />
                        </button>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                            <div className="flex items-center bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-2 border border-neutral-100 dark:border-neutral-800 shrink-0">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="p-3 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-12 text-center text-sm font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="p-3 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button className="flex-grow bg-white dark:bg-black border-2 border-brand-primary text-brand-primary px-8 py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                                Add to Cart
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-grow bg-brand-primary text-white px-8 py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all"
                            >
                                Buy Now Directly
                            </button>
                        </div>

                        {/* Guarantees */}
                        <div className="grid grid-cols-3 gap-6 py-12 border-y border-neutral-100 dark:border-neutral-800">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <Truck size={24} strokeWidth={1} className="text-neutral-400" />
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-widest font-bold">Fast India Delivery</p>
                                    <p className="text-[8px] text-neutral-400 uppercase">3-5 Business Days</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <RotateCcw size={24} strokeWidth={1} className="text-neutral-400" />
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-widest font-bold">Effortless Returns</p>
                                    <p className="text-[8px] text-neutral-400 uppercase">14-Day Boutique Pickup</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <ShieldCheck size={24} strokeWidth={1} className="text-neutral-400" />
                                <div className="space-y-1">
                                    <p className="text-[9px] uppercase tracking-widest font-bold">100% Authentic</p>
                                    <p className="text-[8px] text-neutral-400 uppercase">Vendor Verified Ateliers</p>
                                </div>
                            </div>
                        </div>

                        {/* Store Info */}
                        <div className="mt-12 p-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl flex items-center justify-between border border-neutral-100 dark:border-neutral-800">
                            <div className="flex items-center space-x-6">
                                <div className="relative w-16 h-16 bg-white dark:bg-black rounded-full overflow-hidden flex items-center justify-center p-2 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                                    <span className="font-serif text-xl font-bold">RA</span>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-3 mb-1">
                                        <h4 className="font-serif text-xl tracking-tight leading-none">{product.vendor.name}</h4>
                                        <ShieldCheck size={14} className="text-blue-500" />
                                    </div>
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">{product.vendor.location}</p>
                                </div>
                            </div>
                            <button className="p-4 bg-white dark:bg-black rounded-2xl hover:bg-neutral-100 dark:hover:bg-white/5 transition-all shadow-sm">
                                <ArrowRight size={20} className="text-neutral-400" />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Detailed Description Section */}
                <section className="mt-32 pt-32 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Mastering the <br /> <span className="italic">Architectural Contour</span></h2>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg italic font-light">
                                &quot;Each Aurelian coat is the result of over 120 hours of manual labor, utilizing traditional Indian tailoring techniques adapted for the 2026 global silhouette.&quot;
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {product.specs.map(spec => (
                                    <div key={spec.name} className="space-y-2">
                                        <h5 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">{spec.name}</h5>
                                        <p className="text-sm font-medium">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-luxury-gray">
                            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-neutral-400">Atelier Process Video</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Cross-sell Recommendation Section Placeholder */}
            <section className="bg-neutral-50 dark:bg-neutral-900/50 py-32 px-6 lg:px-12 border-t border-neutral-100 dark:border-neutral-800">
                <div className="max-w-[1800px] mx-auto text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-6 block">You Might Also Adore</span>
                    <h2 className="text-4xl md:text-6xl font-serif">Styling <span className="italic">Proposals</span></h2>
                </div>
                {/* Reuse homepage product grid logic if needed */}
            </section>

            <MobileNav />

            {/* AI Try-On Integration */}
            <AITryOn
                isOpen={isTryOnOpen}
                onClose={() => setIsTryOnOpen(false)}
                productImage={product.images[0]}
                productName={product.name}
            />
        </div>
    );
};

export default ProductPage;
