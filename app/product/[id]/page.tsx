import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { products } from "@/app/data/product";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6 grid md:grid-cols-2 gap-8">
        <div className="h-48 w-full mb-3 flex items-center justify-center overflow-hidden bg-gray-100 rounded-md">
          <Image
            src={product.image}
            alt={product.title}
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
      </main>
      <Footer />
    </div>
  );
}
