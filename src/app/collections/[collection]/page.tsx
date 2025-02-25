import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { getCollection, getCollectionProducts } from "@/lib/shopify";
import { Metadata } from "next";
import Image from "next/image";

export default async function CategoryPage(props: {
  params: Promise<{ collection: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sort } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  const collection = await getCollection(params.collection);
  const image = collection?.image;
  const description = collection?.description;

  return (
    <section>
      {products.length === 0 ? (
        <p className="py-3 text-lg">{`No products found in this collection`}</p>
      ) : (
        <>
          {image?.altText}
          <h1 className="text-2xl mb-6">{collection?.title} </h1>
          {description ?? <p>{collection?.description}</p>}
          {image && (
            <Image
              src={image.url}
              alt={image.altText || `${collection?.title} image`}
              width={image.width}
              height={image.height}
              className="mb-6"
            />
          )}
          <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        </>
      )}
    </section>
  );
}
