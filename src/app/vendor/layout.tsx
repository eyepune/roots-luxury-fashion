import VendorSidebar from "@/components/layout/VendorSidebar";

export default function VendorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-neutral-50 flex">
            <VendorSidebar />
            <main className="flex-grow ml-72 p-12">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
