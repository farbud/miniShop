"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CartItem } from "@/app/types/product";

export default function CheckoutPage() {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!name || !email || !address || !phone) {
      alert("Please fill all fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      name,
      email,
      address,
      phone,
      items: cart,
      total,
      date: new Date().toISOString(),
    };
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    clearCart();
    router.push("/checkout/success");
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 p-4 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>
          <p>Your cart is empty.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Checkout</h1>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          {cart.map((item: CartItem) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border-b pb-2"
            >
              <div className="flex-1">
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Delete
                </button>
              </div>

              <p className="mt-2 sm:mt-0 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between text-lg font-bold mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Buyer Information Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Your Information</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded p-2"
          />

          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4"
          >
            Place Order
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
