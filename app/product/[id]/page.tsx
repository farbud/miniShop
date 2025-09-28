"use client";

import { products } from "@/app/data/product";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types/product";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

interface PageParams {
  id: string;
}

export default function ProductPage({ params }: { params: PageParams }) {
  const { addToCart } = useCart();

  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-6 text-red-500"> Product not found</div>;
  }

  return (
    <div className="p-6">
      <Navbar />     {" "}
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>     {" "}
      <p className="mb-4 font-semibold">${product.price}</p>     {" "}
      <div className="h-48 w-full mb-3 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
                Add to Cart      {" "}
      </button>
         {" "}
    </div>
  );
}
