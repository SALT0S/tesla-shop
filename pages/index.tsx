import type { NextPage } from "next";

import { ShopLayout } from "../components/layouts";
import { ProductList } from "../components/products";

import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title="Create Next App"
      pageDescription="Generated by create next app"
    >
      <h1 className="text-3xl font-bold underline">tesla shop</h1>
      <h2 className="">Todos los productos</h2>
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
