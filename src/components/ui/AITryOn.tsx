"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, RotateCcw, Maximize2, Sparkles, SlidersHorizontal, User, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AITryOnProps {
    isOpen: boolean;
    onClose: () => void;
    productImage: string;
    productName: string;
}

const AITryOn = ({ isOpen, onClose, productImage, productName }: AITryOnProps) => {
    const [activeView, setActiveView] = useState<"model" | "user">("model");
    const [rotation, setRotation] = useState(0);
    const [isRendering, setIsRendering] = useState(false);
    const [renderProgress, setRenderProgress] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Simulate initial AI rendering
            setIsRendering(true);
            const interval = setInterval(() => {
                setRenderProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsRendering(false);
                        return 100;
                    }
                    return prev + 5;
                });
            }, 50);
            return () => clearInterval(interval);
        } else {
            document.body.style.overflow = "unset";
            setRenderProgress(0);
        }
    }, [isOpen]);

    const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
        // Basic rotation simulation logic
        setRotation(prev => (prev + 5) % 360);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center lg:p-12 p-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full h-full max-w-[1400px] bg-white dark:bg-neutral-900 lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
                    >
                        {/* Left Side: 360 Render View */}
                        <div className="relative flex-grow lg:h-full h-[60%] bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden cursor-move"
                            onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}>

                            {/* Grid Background Effect */}
                            <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <div className="relative w-full h-full flex flex-col items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {isRendering ? (
                                        <motion.div
                                            key="rendering"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex flex-col items-center space-y-8"
                                        >
                                            <div className="w-32 h-32 rounded-full border-t-2 border-brand-primary animate-spin" />
                                            <div className="text-center">
                                                <h3 className="text-2xl font-serif italic mb-2">Generating Persona</h3>
                                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">Neural Engine v4.0 • {renderProgress}%</p>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="render"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="relative w-full h-full max-w-2xl"
                                            style={{ transform: `rotateY(${rotation}deg)` }}
                                        >
                                            <Image
                                                src={productImage}
                                                alt="Virtual Model"
                                                fill
                                                className="object-contain p-12 drop-shadow-2xl brightness-[1.02]"
                                            />
                                            {/* Interactive Dot Overlays for fitting analysis */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <div key={i} className="absolute w-2 h-2 rounded-full bg-brand-primary/40 animate-pulse"
                                                        style={{ top: `${20 + i * 15}%`, left: `${40 + (i % 2) * 20}%` }} />
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* HUD Controls */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-6 px-8 py-3 bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-white/20 rounded-full">
                                <button className="flex flex-col items-center space-y-1 group" onClick={() => setRotation(0)}>
                                    <RotateCcw size={16} className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                    <span className="text-[8px] uppercase tracking-widest font-bold">Reset</span>
                                </button>
                                <div className="w-[1px] h-6 bg-neutral-300 dark:bg-neutral-700" />
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">View: {rotation}&deg;</span>
                                <div className="w-[1px] h-6 bg-neutral-300 dark:bg-neutral-700" />
                                <button className="flex flex-col items-center space-y-1 group">
                                    <Maximize2 size={16} className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors" />
                                    <span className="text-[8px] uppercase tracking-widest font-bold">Zoom</span>
                                </button>
                            </div>

                            <div className="absolute top-8 left-8 flex items-center space-x-3 text-brand-primary">
                                <Sparkles size={16} />
                                <span className="text-[10px] uppercase tracking-widest font-bold">AI Precision Rendering</span>
                            </div>
                        </div>

                        {/* Right Side: Controls Panel */}
                        <div className="w-full lg:w-[450px] h-full bg-white dark:bg-neutral-900 p-8 lg:p-12 flex flex-col border-l border-neutral-100 dark:border-neutral-800">
                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <h2 className="text-3xl font-serif mb-2">Virtual Atelier</h2>
                                    <p className="text-xs text-neutral-400 font-light">Customizing {productName}</p>
                                </div>
                                <button onClick={onClose} className="p-3 bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full transition-colors">
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className="flex-grow space-y-12 overflow-y-auto pr-2">
                                {/* Mode Selector */}
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">Simulation Mode</span>
                                    <div className="grid grid-cols-2 gap-2 bg-neutral-50 dark:bg-neutral-800/50 p-1 rounded-2xl">
                                        <button
                                            onClick={() => setActiveView("model")}
                                            className={cn(
                                                "flex items-center justify-center space-x-2 py-3 rounded-xl transition-all",
                                                activeView === "model" ? "bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white" : "text-neutral-400"
                                            )}>
                                            <User size={16} />
                                            <span className="text-xs font-medium">Model</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveView("user")}
                                            className={cn(
                                                "flex items-center justify-center space-x-2 py-3 rounded-xl transition-all",
                                                activeView === "user" ? "bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white" : "text-neutral-400"
                                            )}>
                                            <Camera size={16} />
                                            <span className="text-xs font-medium">My Twin</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Body Measurements */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">Body Profile</span>
                                        <button className="text-[9px] uppercase tracking-widest font-bold text-brand-primary hover:underline">Edit Specs</button>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Height", value: "182 cm" },
                                            { label: "Chest", value: "94 cm" },
                                            { label: "Waist", value: "78 cm" },
                                            { label: "Fit Preference", value: "Oversized" }
                                        ].map(item => (
                                            <div key={item.label} className="p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/30">
                                                <p className="text-[9px] text-neutral-400 uppercase font-bold mb-1">{item.label}</p>
                                                <p className="text-sm font-medium">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Fit Analysis */}
                                <div className="space-y-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400">Fit Index</span>
                                    <div className="relative h-12 bg-neutral-50 dark:bg-neutral-800 rounded-full flex items-center px-6">
                                        <div className="absolute inset-y-2 left-2 w-[85%] bg-gradient-to-r from-green-300 via-brand-primary to-yellow-300 rounded-full opacity-30 shadow-inner" />
                                        <span className="relative z-10 text-xs font-bold text-brand-primary">Excellent Fit (94%)</span>
                                    </div>
                                    <p className="text-[10px] text-neutral-400 leading-relaxed font-light italic">
                                        *AI predicts this garment will provide a spacious, architectural fit on your frame. Recommended size: XL.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
                                <button className="w-full bg-brand-primary text-white py-5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-bold shadow-xl shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all flex items-center justify-center space-x-3">
                                    <Sparkles size={16} />
                                    <span>Purchase with Confidence</span>
                                </button>
                                <p className="text-[9px] text-center text-neutral-400 uppercase tracking-widest italic">Neural Engine Processing Powered by Roots Labs v4.0</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AITryOn;
