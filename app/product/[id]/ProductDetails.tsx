"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

interface ProductDetailsProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
  };
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="h-48 w-full mb-3 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4 text-lg">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
