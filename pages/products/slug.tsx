import Image from "next/image";
import { ShopLayout } from "../../components/layouts";
import { initialData } from "../../database/products";

const product = initialData.products[0];
const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="mt-10 flex gap-14">
        <div className="w-2/3">
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
        </div>
        <div className="w-1/3">
          <h2 className="text-3xl font-medium">{product.title}</h2>
          <p className="text-xl font-medium">${product.price}</p>

          <div className="mt-8">
            <div className="mb-6">
              <p>Size</p>
            </div>

            <p>Quantity</p>
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
