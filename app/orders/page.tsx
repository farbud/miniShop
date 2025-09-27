"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";

interface Order {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  items: { id: number; title: string; price: number; quantity: number }[];
  total: number;
  date: string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const handleDeleteOrder = (id: number) => {
    const filtered = orders.filter((order) => order.id !== id);
    setOrders(filtered);
    localStorage.setItem("orders", JSON.stringify(filtered));
  };

  const handleClearAll = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">
        {/* Header و دکمه Clear All */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Your Orders</h1>
          {orders.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to delete all orders?")) {
                  handleClearAll();
                }
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders
              .slice()
              .reverse()
              .map((order) => (
                <div
                  key={order.id}
                  className="border p-4 rounded-lg shadow-sm relative"
                >
                  {/* Order Header */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Order #{order.id}</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(order.date).toLocaleString()}
                    </span>
                  </div>

                  {/* Buyer Information */}
                  <div className="mb-2">
                    <p>
                      <strong>Name:</strong> {order.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {order.email}
                    </p>
                    <p>
                      <strong>Address:</strong> {order.address}
                    </p>
                    <p>
                      <strong>Phone:</strong> {order.phone}
                    </p>
                  </div>

                  {/* Items */}
                  <div className="mb-2">
                    <p className="font-semibold mb-1">Items:</p>
                    <ul className="list-disc list-inside">
                      {order.items.map((item) => (
                        <li key={item.id}>
                          {item.title} x {item.quantity} - $
                          {(item.price * item.quantity).toFixed(2)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => {
                      if (
                        confirm("Are you sure you want to delete this order?")
                      ) {
                        handleDeleteOrder(order.id);
                      }
                    }}
                    className="justify-center mt-25 absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
