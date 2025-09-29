import Navbar from "@/app/components/Navbar";
import ProductDetails from "@/app/product/[id]/ProductDetails";
import { products } from "@/app/data/product";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="p-6 text-red-500">❌ Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <ProductDetails product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    id: prod.id,
  }));
}
