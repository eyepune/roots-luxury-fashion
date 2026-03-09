import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_KEY_SECRET as string,
});

export async function POST(req: Request) {
    try {
        const { amount, productId, size } = await req.json();

        // In a real app, you would verify the amount against your database
        const options = {
            amount: amount * 100, // paise
            currency: "INR",
            receipt: `receipt_${Math.random().toString(36).substring(7)}`,
            notes: {
                productId,
                size
            }
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            orderId: order.id,
            keyId: process.env.RAZORPAY_KEY_ID
        });
    } catch (error) {
        console.error("Razorpay API Error:", error);
        return NextResponse.json(
            { error: "Error creating Razorpay order" },
            { status: 500 }
        );
    }
}
