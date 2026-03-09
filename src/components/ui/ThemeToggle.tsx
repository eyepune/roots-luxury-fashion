"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors overflow-hidden group"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? 40 : 0,
                    opacity: theme === "dark" ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
                <Sun size={18} strokeWidth={1.5} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? 0 : -40,
                    opacity: theme === "dark" ? 1 : 0
                }}
                className="absolute inset-0 flex items-center justify-center"
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
                <Moon size={18} strokeWidth={1.5} />
            </motion.div>
        </button>
    );
}
