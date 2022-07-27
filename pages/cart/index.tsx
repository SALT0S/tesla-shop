import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const CartPage = () => {
  return (
    <ShopLayout title="Tesla | You Cart - 3" pageDescription="shopping cart">
      <div className="md:container md:mx-auto md:max-w-xl md:px-8 lg:max-w-7xl">
        <h2 className="py-8 text-2xl font-semibold lg:text-3xl">Cart</h2>

        <div className="w-full justify-between gap-20 lg:flex ">
          <hr className="lg:hidden" />

          <div className="pt-8 lg:w-6/12">
            <CartList />
          </div>

          <OrderSummary />
        </div>
      </div>
    </ShopLayout>
  );
};

export default CartPage;
