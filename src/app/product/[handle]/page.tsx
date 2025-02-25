import Gallery from "@/components/product/gallery";
import { getProduct } from "@/lib/shopify";

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const { handle } = params;
  const product = await getProduct(handle);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product?.images && <Gallery images={product?.images} />}
        <div className="xl:w-[50%] md:w-[100%]">
          <div className="relative p-4">
            <div
              className="absolute block w-[100%] h-[100%] top-0 left-0 bg-gradient-to-r from-primary to-accent transition-colors duration-300 z-[-1]"
              style={{ backgroundColor: product?.background_color?.value }}
            ></div>
            <h1 className="text-3xl mb-2">{product?.title}</h1>
            <p>{product?.description}</p>
          </div>
          <pre>{product && JSON.stringify(product, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
