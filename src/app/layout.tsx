import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ROOTS | Luxury Global Fashion Marketplace",
  description: "Experience the pinnacle of fashion. Men, Women, and Kids collections from the world's most exclusive vendors.",
  keywords: ["fashion", "luxury", "marketplace", "designer", "roots", "apparel", "footwear"],
  metadataBase: new URL("https://roots-fashion.com"),
  openGraph: {
    title: "ROOTS | Luxury Global Fashion Marketplace",
    description: "Curated luxury fashion for the modern connoisseur.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-white text-black antialiased selection:bg-black selection:text-white`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
