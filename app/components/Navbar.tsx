"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useEffect, useState } from "react";
import { ShoppingCart, Package } from "lucide-react"; // آیکون‌ها

export default function Navbar() {
  const { cart } = useCart();
  const [orderCount, setOrderCount] = useState(0);

  // بارگذاری تعداد سفارش‌ها از localStorage
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrderCount(orders.length);
  }, [cart]); // وقتی cart تغییر کرد هم آپدیت میشه

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Mini Store
      </Link>

      <div className="flex items-center gap-6">
        {/* Orders */}
        <Link href="/orders" className="relative flex items-center gap-1">
          <Package className="w-5 h-5" />
          <span>Orders</span>
          {orderCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {orderCount}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link href="/cart" className="relative flex items-center gap-1">
          <ShoppingCart className="w-5 h-5" />
          <span>Cart</span>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
