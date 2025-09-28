import ProductDetail from "@/app/product/[id]/ProductDetails";
import { products } from "@/app/data/product";

interface PageParams {
  id: string;
}

export default function ProductPage({ params }: { params: PageParams }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <div className="p-6 text-red-500">❌ Product not found</div>;
  }

  return <ProductDetail product={product} />;
}
