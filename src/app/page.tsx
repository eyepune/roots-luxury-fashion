import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ShopTheLook from "@/components/sections/ShopTheLook";
import ProductCard from "@/components/ui/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Aurelian Leather Tote",
    brand: "ROOTS ATELIER",
    price: 1850,
    image: "/product-1.png",
    category: "Accessories"
  },
  {
    id: "2",
    name: "Nomad Wool Trench",
    brand: "L'HORIZON",
    price: 2400,
    image: "/product-2.png",
    category: "Apparel"
  },
  {
    id: "3",
    name: "Sculpted Silk Blouse",
    brand: "MAISON NOIR",
    price: 980,
    image: "/product-1.png", // Reusing for demo
    category: "Apparel"
  },
  {
    id: "4",
    name: "Architectural Heel",
    brand: "STEPPE",
    price: 1150,
    image: "/product-2.png", // Reusing for demo
    category: "Footwear"
  }
];

export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />

      <Hero />

      {/* Editorial Section */}
      <section className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight">
              Season <span className="italic px-4 underline decoration-[0.5px] underline-offset-[12px]">Highlights</span>
            </h2>
            <div className="max-w-md mt-8 md:mt-0">
              <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                A meticulously curated selection of the season&apos;s most defining silhouettes,
                sourced from top global designers and independent artisans.
              </p>
              <button className="luxury-link text-[10px] uppercase tracking-[0.3em] font-bold">
                View All New Arrivals
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <ShopTheLook />

      {/* Brand Ethos */}
      <section className="py-48 px-6 lg:px-12 bg-luxury-black text-white text-center overflow-hidden relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] mb-16 block opacity-50">Our Philosophy</span>
          <h2 className="text-5xl md:text-8xl font-serif italic mb-16 leading-[1.1]">
            &quot;True luxury is the quiet <br />
            confidence of authenticity.&quot;
          </h2>
          <div className="flex flex-col items-center space-y-12">
            <p className="max-w-xl text-neutral-400 font-light leading-relaxed">
              Roots bridges the gap between heritage craftsmanship and avant-garde vision,
              connecting you with over 2,000 global vendors who define the future of fashion.
            </p>
            <button className="bg-white text-black px-12 py-6 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors">
              The Roots Manifesto
            </button>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
          <div className="w-full h-full border-[1px] border-white/10 rounded-full scale-110 blur-2xl animate-pulse" />
        </div>
      </section>

      {/* Category Grid Section */}
      <section className="bg-white py-32 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-[80vh] min-h-[600px]">
          <div className="relative group overflow-hidden cursor-pointer h-full">
            <div className="absolute inset-0 bg-neutral-200" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl font-serif italic mb-4">Femme</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Women</span>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer h-full">
            <div className="absolute inset-0 bg-neutral-300" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white text-center items-center">
              <h3 className="text-4xl font-serif italic mb-4">Homme</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Men</span>
            </div>
          </div>

          <div className="relative group overflow-hidden cursor-pointer h-full">
            <div className="absolute inset-0 bg-neutral-100" /> {/* Image placeholder */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white text-right items-end">
              <h3 className="text-4xl font-serif italic mb-4">Infant</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold luxury-link inline-block w-fit">Explore Kids</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-100 pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
            <div className="col-span-1 md:col-span-1">
              <h4 className="font-serif text-3xl font-bold tracking-tighter mb-8">ROOTS</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Defining the global luxury marketplace. <br />
                Connecting visionaries since 2026.
              </p>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Marketplace</h5>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="hover:text-black transition-colors cursor-pointer">Men</li>
                <li className="hover:text-black transition-colors cursor-pointer">Women</li>
                <li className="hover:text-black transition-colors cursor-pointer">Kids</li>
                <li className="hover:text-black transition-colors cursor-pointer">Designers</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Account</h5>
              <ul className="space-y-4 text-sm text-neutral-500">
                <li className="hover:text-black transition-colors cursor-pointer">Login</li>
                <li className="hover:text-black transition-colors cursor-pointer">Wishlist</li>
                <li className="hover:text-black transition-colors cursor-pointer">Order History</li>
                <li className="hover:text-black transition-colors cursor-pointer">Vendor Dashboard</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Newsletter</h5>
              <p className="text-sm text-neutral-500 mb-6">Join our editorial list for seasonal previews.</p>
              <div className="flex border-b border-black pb-2">
                <input type="email" placeholder="Email Address" className="bg-transparent text-sm w-full outline-none" />
                <button className="text-[10px] uppercase tracking-widest font-bold">Join</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-400 pt-12 border-t border-neutral-100">
            <p>&copy; 2026 Roots Global Ltd. All Rights Reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <span className="hover:text-black cursor-pointer">Privacy</span>
              <span className="hover:text-black cursor-pointer">Terms</span>
              <span className="hover:text-black cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
