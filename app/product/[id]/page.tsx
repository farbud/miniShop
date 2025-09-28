import ProductDetail from "@/app/product/[id]/ProductDetails";
import { products } from "@/app/data/product";
import Navbar from "@/app/components/Navbar";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-6 text-red-500">❌ Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <ProductDetail product={product} />
    </div>
  );
}
