import VendorSidebar from "@/components/layout/VendorSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

export default function VendorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-black flex transition-colors">
            <VendorSidebar />
            <main className="flex-grow ml-72 p-12 overflow-y-auto h-screen">
                <div className="max-w-6xl mx-auto">
                    <DashboardHeader />
                    {children}
                </div>
            </main>
        </div>
    );
}
