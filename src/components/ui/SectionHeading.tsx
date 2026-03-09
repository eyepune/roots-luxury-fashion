import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: "left" | "center";
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    description,
    align = "left",
    className
}: SectionHeadingProps) {
    return (
        <div className={cn(
            "mb-16 md:mb-24",
            align === "center" ? "text-center mx-auto" : "text-left",
            className
        )}>
            {subtitle && (
                <span className="text-[10px] uppercase tracking-[0.5em] mb-6 block text-neutral-400 font-bold">
                    {subtitle}
                </span>
            )}
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[0.9] mb-8">
                {title}
            </h2>
            {description && (
                <p className={cn(
                    "text-sm text-neutral-500 leading-relaxed font-light",
                    align === "center" ? "max-w-2xl mx-auto" : "max-w-md"
                )}>
                    {description}
                </p>
            )}
        </div>
    );
}
