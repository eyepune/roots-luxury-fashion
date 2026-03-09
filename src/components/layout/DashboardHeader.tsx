"use client";

import React from "react";
import { Bell, Search, User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function DashboardHeader() {
    return (
        <header className="flex items-center justify-between mb-12 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm transition-colors">
            <div className="relative w-96 group">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-brand-primary transition-colors" />
                <input
                    type="text"
                    placeholder="Search products, orders, analysis..."
                    className="w-full bg-neutral-50 dark:bg-neutral-800 border-none rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:ring-1 focus:ring-brand-primary/20 transition-all font-light"
                />
            </div>

            <div className="flex items-center space-x-6">
                <ThemeToggle />

                <button className="relative p-2 text-neutral-400 hover:text-brand-primary transition-colors">
                    <Bell size={20} strokeWidth={1.5} />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </button>

                <div className="flex items-center space-x-4 pl-6 border-l border-neutral-100 dark:border-neutral-800">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold tracking-tight">Roots Atelier</p>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Diamond Partner</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-brand-primary">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
}
