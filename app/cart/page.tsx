"use client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            className="block mt-6 w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Proceed to Checkout
          </Link>
        </>
      )}
      <div className="flex gap-4 mt-6 flex-col sm:flex-row">
        <Link
          href="/"
          className="flex-1 text-center bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
