"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    Package,
    ShoppingBag,
    Settings,
    Users,
    CreditCard,
    LogOut,
    LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/vendor" },
    { icon: ShoppingBag, label: "Orders", href: "/vendor/orders" },
    { icon: Package, label: "Products", href: "/vendor/products" },
    { icon: Users, label: "Customers", href: "/vendor/customers" },
    { icon: BarChart3, label: "Analytics", href: "/vendor/analytics" },
    { icon: CreditCard, label: "Payouts", href: "/vendor/payouts" },
];

const bottomItems = [
    { icon: Settings, label: "Store Settings", href: "/vendor/settings" },
];

export default function VendorSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-neutral-950 dark:bg-black text-white flex flex-col p-8 z-50 border-r border-white/5 transition-colors">
            <div className="mb-12 flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                </div>
                <div>
                    <Link href="/" className="font-serif text-2xl font-bold tracking-tighter block">ROOTS</Link>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-bold">Seller Central India</div>
                </div>
            </div>

            <nav className="flex-grow space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-4 px-4 py-4 rounded-xl transition-all group",
                                isActive
                                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20"
                                    : "text-neutral-500 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon size={18} strokeWidth={isActive ? 2 : 1.5} className={cn(isActive ? "text-white" : "text-neutral-500 group-hover:text-white")} />
                            <span className="text-sm font-medium tracking-tight">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto space-y-1 border-t border-white/5 pt-8">
                {bottomItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-4 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <item.icon size={18} />
                        <span className="text-sm font-medium tracking-tight">{item.label}</span>
                    </Link>
                ))}
                <button className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-all mt-4">
                    <LogOut size={18} />
                    <span className="text-sm font-medium tracking-tight">Logout Store</span>
                </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Razorpay Partner</p>
            </div>
        </aside>
    );
}
