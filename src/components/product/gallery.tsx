"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Loader from "../layout/loader";
import { Pagination } from "swiper/modules";
import Image from "next/image";

//TODO images type
export default function Gallery({ images }: { images: any[] }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return !isLoaded ? (
    <Loader />
  ) : (
    <Swiper
      loop={true}
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="relative aspect-square h-full w-[500px] max-h-[550px] overflow-hidden"
    >
      {images.map((image) => (
        <SwiperSlide>
          <div
            key={image.id}
            className="relative aspect-square h-full w-[500px] max-h-[550px] overflow-hidden"
          >
            <Image
              className="h-full w-full object-cover"
              src={image.url}
              alt={image.altText}
              fill={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
