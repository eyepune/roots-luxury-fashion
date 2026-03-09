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
        <aside className="fixed left-0 top-0 h-screen w-72 bg-neutral-950 text-white flex flex-col p-8 z-50">
            <div className="mb-12">
                <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">ROOTS</Link>
                <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mt-2 font-bold">Vendor Hub</div>
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
                                    ? "bg-white text-black"
                                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                            )}
                        >
                            <item.icon size={20} className={cn(isActive ? "text-black" : "text-neutral-500 group-hover:text-white")} />
                            <span className="text-sm font-medium tracking-tight">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto space-y-1">
                {bottomItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-center space-x-4 px-4 py-4 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all"
                    >
                        <item.icon size={20} />
                        <span className="text-sm font-medium tracking-tight">{item.label}</span>
                    </Link>
                ))}
                <button className="w-full flex items-center space-x-4 px-4 py-4 rounded-xl text-red-400 hover:bg-red-400/10 transition-all mt-4">
                    <LogOut size={20} />
                    <span className="text-sm font-medium tracking-tight">Logout Store</span>
                </button>
            </div>
        </aside>
    );
}
