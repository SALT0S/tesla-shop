import Image from "next/image";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
// import required modules
import { Navigation, Pagination, Thumbs } from "swiper";

import { ShopLayout } from "../../components/layouts";
import { SizeSelector } from "../../components/products/SizeSelector";
import { ItemCounter } from "../../components/ui";
import { initialData } from "../../database/products";

const product = initialData.products[0];
const ProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [count, setCount] = useState(1);

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="my-10 gap-14 md:flex">
        <div className="md:w-2/3">
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Pagination, Thumbs]}
          >
            <SwiperSlide>
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                layout="responsive"
                height={"100%"}
                width={"100%"}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/products/${product.images[0]}`}
                className="bg-gray-50"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={`/products/${product.images[1]}`}
                alt={product.title}
                layout="responsive"
                height={"100%"}
                width={"100%"}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/products/${product.images[1]}`}
                className="bg-gray-50"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            className="my-4 hidden md:block"
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
          >
            <SwiperSlide>
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                layout="responsive"
                height={"100%"}
                width={"100%"}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/products/${product.images[0]}`}
                className="rounded-lg bg-gray-50"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src={`/products/${product.images[1]}`}
                alt={product.title}
                layout="responsive"
                height={"100%"}
                width={"100%"}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/products/${product.images[1]}`}
                className="rounded-lg bg-gray-50"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/3">
          <h2 className="text-3xl font-medium">{product.title}</h2>
          <p className="text-xl font-medium">${product.price}</p>

          <div className="mt-8 mb-5">
            <div className="mb-6">
              <SizeSelector
                selectedSize={product.sizes[0]}
                sizes={product.sizes}
              />
            </div>

            <p className="mb-2">Quantity</p>
            <ItemCounter />
          </div>
          <button className="w-full rounded-3xl bg-blue-600 py-2 text-white hover:bg-blue-800">
            ADD TO CART
          </button>

          <div className="my-8">
            <p>Description</p>
            <p className="my-3">{product.description}</p>
            <p>
              See{" "}
              <span className="cursor-pointer underline hover:font-medium">
                Size Chart
              </span>{" "}
              for sizing and fit guidelines.
            </p>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
