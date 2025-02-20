"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "@/lib/shopify/types";
import { GridTileImage } from "../grid/tile";
import Link from "next/link";
import Grid from "../grid";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CollectionSlider({
  products,
}: {
  products: Product[];
}) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return !isLoaded ? (
    <div className="flex items-center justify-center h-96">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  ) : (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {products.map((product) => (
        <SwiperSlide>
          <Grid.Item key={product.handle} className={"animate-fadeIn"}>
            <Link
              href={`/products/${product.handle}`}
              className="relative inline-block h-full w-full"
              prefetch={true}
            >
              {product.background_color?.value}
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </Link>
          </Grid.Item>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
