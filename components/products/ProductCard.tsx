import { useMemo, useState } from "react";
import Image from "next/image";
import { IProduct } from "../../interfaces";

interface Props {
  product: IProduct;
}
export const ProductCard: React.FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const ProductImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <div
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={ProductImage}
        alt={product.title}
        layout="responsive"
        height={"100%"}
        width={"100%"}
        objectFit="cover"
        placeholder="blur"
        blurDataURL={`/products/${product.images[0]}`}
        className="bg-gray-50"
      />
      <div>
        <h2 className="font-bold">{product.title}</h2>
        <p className="font-medium">${product.price}</p>
      </div>
    </div>
  );
};
