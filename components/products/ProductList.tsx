import { useMemo, useState } from "react";
import Image from "next/image";
import { IProduct } from "../../interfaces";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
}
export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="relative grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};
