import { initialData } from "../../database/products";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
];

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product) => (
        <div key={product.slug}>
          <p>{product.slug}</p>
        </div>
      ))}
    </>
  );
};
