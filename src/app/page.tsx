"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ShopTheLook from "@/components/sections/ShopTheLook";
import ProductCard from "@/components/ui/ProductCard";
import MobileNav from "@/components/layout/MobileNav";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full bg-white dark:bg-black transition-colors duration-500">
      <Navbar />

      <Hero />

      {/* India Market Banner: Flash Deals */}
      <div className="bg-brand-primary h-12 flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex space-x-24 whitespace-nowrap text-white text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <div className="flex items-center space-x-4"><Zap size={14} fill="white" /> <span>Festive Season Sale: Up to 40% Off</span></div>
          <div className="flex items-center space-x-4"><Sparkles size={14} fill="white" /> <span>2026 Collection drops tomorrow at 10:00 AM IST</span></div>
          <div className="flex items-center space-x-4"><Zap size={14} fill="white" /> <span>Complimentary Shipping across Pan-India</span></div>
          <div className="flex items-center space-x-4"><Sparkles size={14} fill="white" /> <span>New Designers: Sabyasachi, Manish Malhotra, Anamika Khanna</span></div>
        </motion.div>
      </div>

      {/* Editorial Section */}
      <section className="py-32 px-6 lg:px-12 bg-white dark:bg-black transition-colors">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
              Heritage <span className="italic px-4 underline decoration-[0.5px] underline-offset-[12px] decoration-brand-primary">Refined</span>
            </h2>
            <div className="max-w-md mt-8 md:mt-0">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                Celebrating the intersection of Indian craftsmanship and global avant-garde vision.
                Sourced from the most exclusive ateliers across the subcontinent.
              </p>
              <button className="luxury-link text-[10px] uppercase tracking-[0.3em] font-bold">
                Discover New Season
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <ProductCard {...product} />
                <div className="mt-4 flex items-center space-x-2">
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-600 line-through">₹{(product.price * 1.2).toLocaleString()}</span>
                  <span className="text-xs font-bold text-brand-primary">Save 20%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Feature Teaser */}
      <section className="py-32 px-6 lg:px-12 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center animate-bounce">
                  <Sparkles size={40} className="text-white" />
                </div>
                <span className="text-white text-[10px] uppercase tracking-[0.5em] font-bold">AI Render Engine v4.0 Active</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary">
              <Sparkles size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">Roots AI Labs</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Your Personal <br /> <span className="italic">Virtual Atelier</span>
            </h2>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
              Experience fashion without limits. Our AI Try-On technology allows you to visualize
              any silhouette on your digital twin with 99.8% measurement accuracy.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-neutral-100 dark:border-neutral-800">
              <div>
                <h4 className="text-xl font-serif mb-2">360&deg; Preview</h4>
                <p className="text-xs text-neutral-400">Rotate and inspect every fit detail.</p>
              </div>
              <div>
                <h4 className="text-xl font-serif mb-2">Smart Sizing</h4>
                <p className="text-xs text-neutral-400">AI-suggested fit based on body scans.</p>
              </div>
            </div>

            <button className="flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-bold luxury-link">
              <span>Explore Virtual Fitting</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <ShopTheLook />

      {/* Brand Ethos */}
      <section className="py-48 px-6 lg:px-12 bg-luxury-black text-white text-center overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] mb-16 block opacity-50">Our Philosophy</span>
          <h2 className="text-5xl md:text-8xl font-serif italic mb-16 leading-[1.1]">
            &quot;Sourced from Bharat, <br />
            Worn by the World.&quot;
          </h2>
          <div className="flex flex-col items-center space-y-12">
            <p className="max-w-xl text-neutral-400 font-light leading-relaxed">
              Roots bridges the gap between heritage craftsmanship and avant-garde vision,
              connecting you with over 2,000 global vendors who define the future of fashion.
            </p>
            <button className="bg-brand-primary text-white border border-brand-primary px-12 py-6 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-transparent transition-all">
              The Roots Manifesto
            </button>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
          <div className="w-full h-full border-[1px] border-brand-primary/20 rounded-full scale-110 blur-2xl animate-pulse" />
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="bg-white dark:bg-black py-32 px-6 lg:px-12 transition-colors">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-[80vh] min-h-[600px]">
          <div className="relative group overflow-hidden cursor-pointer h-full">
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl font-serif italic mb-4">Femme</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Women</span>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer h-full border-x border-neutral-100 dark:border-neutral-900">
            <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white text-center items-center">
              <h3 className="text-4xl font-serif italic mb-4">Homme</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Men</span>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer h-full">
            <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white text-right items-end">
              <h3 className="text-4xl font-serif italic mb-4">Infant</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Kids</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900 pt-32 pb-12 px-6 lg:px-12 transition-colors">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
            <div className="col-span-1 md:col-span-1">
              <h4 className="font-serif text-3xl font-bold tracking-tighter mb-8">ROOTS</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Defining the global luxury marketplace. <br />
                Bridging Indian heritage and global vision. <br />
                Headquarters: Mumbai, India.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Marketplace</h5>
              <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Men</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Women</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Kids</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Heritage Selection</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Support</h5>
              <ul className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400">
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Shipping & Returns</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Order Tracking (Delhivery)</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Authenticity Guarantee</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Contact Atelier</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h5>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Join our editorial list for seasonal previews of Indian luxury.</p>
              <div className="flex border-b border-black dark:border-white pb-2 focus-within:border-brand-primary transition-colors">
                <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full outline-none" />
                <button className="text-[10px] uppercase tracking-widest font-bold text-brand-primary">Join</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 pt-12 border-t border-neutral-100 dark:border-neutral-900">
            <p>&copy; 2026 Roots India Marketplace. Crafted for the Modern Connoisseur.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <span className="hover:text-brand-primary cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-brand-primary cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-brand-primary cursor-pointer transition-colors">Razorpay Secured</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
