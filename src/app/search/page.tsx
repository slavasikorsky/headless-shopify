import Grid from "@/components/grid";
import Loader from "@/components/layout/loader";
import ProductGridItems from "@/components/layout/product-grid-items";
import { defaultSort, sorting } from "@/lib/constants";
import { getProducts } from "@/lib/shopify";
import { Suspense } from "react";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };

  return (
    <>
      <Suspense key={searchValue} fallback={<Loader />}>
        {/*@ts-ignore*/}
        {JSON.stringify(searchValue)}
      </Suspense>
    </>
  );
}
