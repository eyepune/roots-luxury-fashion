export type UserRole = "CUSTOMER" | "VENDOR" | "ADMIN";

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    image?: string;
}

export interface Vendor {
    id: string;
    userId: string;
    storeName: string;
    bio?: string;
    logo?: string;
    isVerified: boolean;
    commissionRate: number;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    parentCategoryId?: string;
}

export interface ProductVariant {
    id: string;
    size: string;
    color: string;
    stock: number;
    price: number;
}

export interface Product {
    id: string;
    vendorId: string;
    categoryId: string;
    name: string;
    slug: string;
    description: string;
    basePrice: number;
    images: string[];
    variants: ProductVariant[];
    isFeatured: boolean;
    createdAt: string;
}

export interface CartItem {
    productId: string;
    variantId: string;
    quantity: number;
    price: number;
    productName: string;
    productImage: string;
    brand: string;
}
