import type { NextPage } from "next";

import { ShopLayout } from "../components/layouts";

import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title="Create Next App"
      pageDescription="Generated by create next app"
    >
      <h1 className="text-3xl font-bold underline">tesla shop</h1>
      <h2 className="">Todos los productos</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {initialData.products.map((product) => (
          <div key={product.slug}>
            <img src={`/products/${product.images[0]}`} alt={product.title} />
          </div>
        ))}
      </div>
    </ShopLayout>
  );
};

export default Home;
