import ProductDetail from "@/app/product/[id]/ProductDetails";
import { products } from "@/app/data/product";
import Navbar from "@/app/components/Navbar";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
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

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
