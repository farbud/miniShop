"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 text-center">
        <CheckCircle className="text-green-600 w-16 h-16 mb-4 mx-auto" />
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your order has been placed successfully. We will contact you soon.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
