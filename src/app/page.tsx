"use client";

import React, { useRef, useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ShopTheLook from "@/components/sections/ShopTheLook";
import ProductCard from "@/components/ui/ProductCard";
import MobileNav from "@/components/layout/MobileNav";
import { Sparkles, ArrowRight, Zap, Play, Maximize2 } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const featuredProducts = [
  {
    id: "1",
    name: "Aurelian Silk Saree",
    brand: "ROOTS ATELIER",
    price: 45000,
    image: "/product-1.png",
    category: "Apparel"
  },
  {
    id: "2",
    name: "Nomad Wool Sherwani",
    brand: "L'HORIZON",
    price: 82000,
    image: "/product-2.png",
    category: "Apparel"
  },
  {
    id: "3",
    name: "Lotus Petal Clutch",
    brand: "MAISON NOIR",
    price: 12500,
    image: "/product-1.png",
    category: "Accessories"
  },
  {
    id: "4",
    name: "Sculpted Kolhapuri",
    brand: "STEPPE",
    price: 8900,
    image: "/product-2.png",
    category: "Footwear"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Smooth Scroll Simulation / Parallax
  const yHero = useTransform(scrollY, [0, 800], [0, -100]);

  return (
    <div className="relative w-full bg-white dark:bg-black transition-colors duration-[1.5s] ease-expo overflow-x-hidden">

      {/* Custom Luxury Cursor Element */}
      {/* (Implemented via globals.css but can be enhanced with JS if needed) */}

      <Navbar />

      <motion.div style={{ y: yHero }}>
        <Hero />
      </motion.div>

      {/* High-Fashion News Ticker */}
      <div className="bg-brand-accent py-6 overflow-hidden relative border-y border-white/5">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex space-x-24 whitespace-nowrap text-white text-[10px] uppercase tracking-[0.6em] font-medium"
        >
          <div className="flex items-center space-x-12">
            <span>Summer &apos;26 Digital Archive Available</span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span>Complimentary Worldwide Delivery</span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span>Pre-Order: The Obsidian Heritage Suit</span>
            <span className="w-12 h-[1px] bg-white/20" />
            <span>Sourced: Ancient Banaras Weaves v2.0</span>
          </div>
        </motion.div>
      </div>

      {/* Editorial Story: Section 01 */}
      <section className="py-64 luxury-container border-b border-neutral-100 dark:border-neutral-900 bg-white dark:bg-black transition-colors">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-baseline">

          <div className="lg:col-span-4 sticky top-48">
            <div className="space-y-12">
              <span className="text-brand-accent text-[9px] uppercase tracking-[0.8em] font-bold block mb-12">01 / Collection Overview</span>
              <h2 className="text-8xl md:text-9xl font-serif italic text-neutral-900 dark:text-neutral-100 leading-none tracking-tighter">
                Heritage <br />
                <span className="pl-24 inline-block heading-underline">Resonance</span>
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-sm italic">
                &quot;In 2026, the definition of luxury has shifted. Roots is the bridge between the ancient textile crafts of the Bharat subcontinent and the avant-garde futuristic silhouettes of the global fashion dialogue.&quot;
              </p>
              <button className="nav-link text-[9px] font-bold group flex items-center space-x-6 text-brand-accent">
                <span>Browse Editorial Volume I</span>
                <ArrowRight size={16} className="group-hover:translate-x-4 transition-transform duration-700" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredProducts.slice(0, 2).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 * idx, ease: [0.19, 1, 0.22, 1] }}
                >
                  <ProductCard {...product} />
                </motion.div>
              ))}
            </div>

            {/* Dramatic Large Image Reveal */}
            <div className="relative aspect-[16/9] w-full overflow-hidden group rounded-sm shadow-2xl">
              <div className="absolute inset-0 bg-neutral-900/10 z-10 pointer-events-none group-hover:bg-neutral-900/0 transition-colors duration-1000" />
              <Image
                src="/luxury_lifestyle_editorial_1773017804940.png"
                alt="Editorial Visual"
                fill
                className="object-cover transition-transform duration-[2.5s] ease-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="p-8 bg-white/20 backdrop-blur-2xl rounded-full text-white cursor-pointer hover:scale-110 transition-transform">
                  <Play size={32} fill="white" />
                </div>
              </div>
              <div className="absolute bottom-12 left-12 z-20">
                <p className="text-white text-[10px] uppercase tracking-[0.6em] font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-700">Studio Montage: Mumbai_2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story: Section 02 - The Monologue */}
      <section className="py-64 bg-neutral-950 text-white overflow-hidden relative">
        {/* Abstract texture Background */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="luxury-container relative z-10 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[1em] font-bold mb-32 opacity-30 text-brand-accent">Manifesto v4.0</span>

          <div className="group cursor-default">
            <h2 className="editorial-large font-serif leading-none italic mb-12 select-none group-hover:tracking-tighter transition-all duration-1000">
              The Future <br />
              is <span className="text-brand-accent">Nomadic</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-16 mt-32">
            <p className="text-xl md:text-3xl font-serif font-light leading-relaxed italic text-white/80">
              &quot;We don&apos;t just sell garments; we archive movements. Roots is a curated ecosystem where every piece tells the story of a weaver&apos;s past and a dreamer&apos;s future.&quot;
            </p>
            <div className="flex flex-col items-center space-y-6">
              <span className="w-16 h-[1px] bg-brand-accent shrink-0" />
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Established Mumbai • World</p>
            </div>
          </div>
        </div>

        {/* Vertical Decorative Lines */}
        <div className="absolute left-[4vw] top-0 h-full w-[1px] bg-white/5" />
        <div className="absolute right-[4vw] top-0 h-full w-[1px] bg-white/5" />
      </section>

      <section className="py-64 bg-white dark:bg-black luxury-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-accent">Marketplace Drop</span>
            <h3 className="text-6xl md:text-7xl font-serif tracking-tight leading-none">New <span className="italic">Arrivals</span></h3>
          </div>
          <Link href="/collection" className="nav-link text-[10px] font-bold hover:text-brand-accent transition-colors pb-2">View Full Inventory</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 * idx }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </section>

      <ShopTheLook />

      {/* Footer Redesign: Minimalist Obsidian */}
      <footer className="bg-black text-white pt-64 pb-24 px-[4vw] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-64">
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-4">
              <h4 className="text-6xl font-serif tracking-tighter italic">ROOTS</h4>
              <span className="text-[9px] uppercase tracking-[0.6em] font-medium opacity-40">Heritage Atelier • Mumbai</span>
            </div>
            <p className="text-sm text-neutral-500 max-w-sm font-light leading-relaxed">
              Serving the global fashion connoisseur with verified luxury ateliers across Bharat.
              Architecture in every stitch. Soul in every weave.
            </p>
            <div className="flex space-x-12">
              {["INSTAGRAM", "WEIBO", "THREADS"].map(social => (
                <Link key={social} href="#" className="text-[9px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 hover:text-brand-accent transition-all">{social}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Atelier</span>
              <ul className="space-y-6 text-sm font-extralight text-neutral-400">
                {["Collections", "Designers", "Editorial", "Archive"].map(link => (
                  <li key={link} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-12">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Support</span>
              <ul className="space-y-6 text-sm font-extralight text-neutral-400">
                {["Shipping", "Returns", "Authenticity", "Contact"].map(link => (
                  <li key={link} className="hover:text-white transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-12 col-span-2 md:col-span-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Newsletter</span>
              <p className="text-xs font-light text-neutral-500 mb-8 max-w-[200px]">Receive the weekly monologue directly.</p>
              <div className="flex border-b border-white/20 pb-4 focus-within:border-brand-accent transition-colors">
                <input type="email" placeholder="EMAIL" className="bg-transparent text-[10px] w-full outline-none uppercase tracking-widest font-bold" />
                <button className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Join</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.5em] font-medium text-neutral-600 pt-16 border-t border-white/5">
          <p>&copy; 2026 ROOTS ARCHIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <span>Legal Notice</span>
            <span>Privacy Policy</span>
            <span>Accessibility</span>
          </div>
        </div>
      </footer>

      <MobileNav />
    </div>
  );
}
