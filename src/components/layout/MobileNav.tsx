"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    Search,
    Heart,
    ShoppingBag,
    User
} from "lucide-react";
import { cn } from "@/lib/utils";

const mobileLinks = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: ShoppingBag, label: "Cart", href: "/cart" },
    { icon: User, label: "Account", href: "/account" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-neutral-100 dark:border-neutral-900 px-6 py-4 flex justify-between items-center z-50 lg:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.04)]">
            {mobileLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.label}
                        href={link.href}
                        className={cn(
                            "flex flex-col items-center space-y-1 transition-all duration-300",
                            isActive ? "text-brand-primary dark:text-white" : "text-neutral-400"
                        )}
                    >
                        <div className={cn(
                            "p-1 rounded-full transition-colors",
                            isActive && "bg-brand-primary/10 dark:bg-white/10"
                        )}>
                            <link.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
                        </div>
                        <span className="text-[10px] font-medium tracking-tight">{link.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileNav;
