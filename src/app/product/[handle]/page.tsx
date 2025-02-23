import Gallery from "@/components/product/gallery";
import { getProduct } from "@/lib/shopify";

export default async function ProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const { handle } = params;
  const product = await getProduct(handle);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product?.images && <Gallery images={product?.images} />}
        <div className="">
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <pre>{product && JSON.stringify(product, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
