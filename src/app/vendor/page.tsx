"use client";

import React from "react";
import {
    BarChart3,
    TrendingUp,
    ShoppingBag,
    Users,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
    {
        label: "Total Revenue",
        value: "$124,592.00",
        change: "+12.5%",
        trend: "up",
        icon: BarChart3
    },
    {
        label: "Monthly Orders",
        value: "412",
        change: "+8.2%",
        trend: "up",
        icon: ShoppingBag
    },
    {
        label: "Active Customers",
        value: "1,208",
        change: "-2.4%",
        trend: "down",
        icon: Users
    },
    {
        label: "Avg. Order Value",
        value: "$302.40",
        change: "+4.1%",
        trend: "up",
        icon: TrendingUp
    },
];

export default function VendorDashboard() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <section className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-serif tracking-tight mb-2">Welcome back, <span className="italic px-2">Roots Atelier</span></h1>
                    <p className="text-sm text-neutral-500 font-light">Here is what&apos;s happening with your store today.</p>
                </div>
                <div className="flex space-x-4">
                    <button className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border border-neutral-200 hover:bg-white transition-colors">
                        Share Storefront
                    </button>
                    <button className="px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold bg-neutral-950 text-white hover:bg-neutral-800 transition-colors">
                        Add New Product
                    </button>
                </div>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-8 border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-black/10 transition-colors"
                    >
                        <div className="relative z-10 flex justify-between items-start mb-6">
                            <div className="p-3 bg-neutral-50 rounded-xl text-neutral-500 group-hover:bg-black group-hover:text-white transition-colors">
                                <stat.icon size={20} />
                            </div>
                            <div className={cn(
                                "flex items-center space-x-1 text-xs font-bold",
                                stat.trend === "up" ? "text-green-600" : "text-red-500"
                            )}>
                                <span>{stat.change}</span>
                                {stat.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                            </div>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">{stat.label}</p>
                            <h3 className="text-3xl font-medium tracking-tight mb-1">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Orders Table */}
            <section className="bg-white border border-neutral-100 shadow-sm">
                <div className="px-8 py-6 border-b border-neutral-50 flex justify-between items-center">
                    <h3 className="text-lg font-medium tracking-tight">Recent Orders</h3>
                    <button className="text-[10px] uppercase tracking-widest font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-neutral-50/50">
                                <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Order ID</th>
                                <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Customer</th>
                                <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Products</th>
                                <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Total</th>
                                <th className="px-8 py-4 text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-50">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="hover:bg-neutral-50/30 transition-colors">
                                    <td className="px-8 py-6 text-sm font-medium">#RT-2024-{1000 + i}</td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 rounded-full bg-neutral-100" />
                                            <span className="text-sm">Customer Name</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-neutral-500">2 Items</td>
                                    <td className="px-8 py-6 text-sm font-medium">$1,290.00</td>
                                    <td className="px-8 py-6">
                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] uppercase tracking-widest font-bold rounded-full">
                                            Fulfilled
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

// Utility for conditional classes since I'm using local import in a file
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
