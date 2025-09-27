"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  price: number;
  id: string;
  image: string | StaticImageData;
};

export default function ProductCard({
  title,
  price,
  id,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white  rounded-xl p-4 shadow-md hover:shadow-xl transition  flex flex-col">
      <div
        className="relative h-48 w-full mb-3 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md
      sm:h-56 md:h-46"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-3">${price}</p>

      <Link
        href={`/product/${id}`}
        className="mt-auto block w-full bg-blue-600 text-white py-2 rounded-lg text-center hover:bg-blue-700 transition sm:text-base"
      >
        View Details
      </Link>
    </div>
  );
}
