import Image from "next/image";
import { initialData } from "../../database/products";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

interface Props {
  editable?: boolean;
}

export const CartList: React.FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product) => (
        <div key={product.slug} className="mb-3 text-sm">
          <div className="flex gap-5">
            <div className="relative h-28 w-28">
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`/products/${product.images[0]}`}
                className="rounded-lg bg-gray-50"
              />
            </div>

            <div className="flex-1">
              <p className="pb-2">{product.title}</p>
              <p className="pb-2">Dark Gray, Size: {product.sizes[2]}</p>

              <div className="inline-flex gap-6">
                <p>Quantity: 1</p>

                {editable && (
                  <p className="border-b-2 border-gray-300 hover:border-black">
                    Remove
                  </p>
                )}
              </div>
            </div>

            <p>{`$${product.price}`}.00</p>
          </div>
        </div>
      ))}
    </>
  );
};
