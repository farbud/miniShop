"use client";

import { Product } from "@/app/types/product";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="h-48 w-full mb-3 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <p className="mb-4 font-semibold">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
