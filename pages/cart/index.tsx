import { CartList } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const CartPage = () => {
  return (
    <ShopLayout title="Tesla | You Cart - 3" pageDescription="shopping cart">
      <h2 className="py-8 text-2xl font-bold">Cart</h2>
      <div className="container mx-auto max-w-xl justify-between gap-20 px-8 lg:inline-flex lg:max-w-7xl">
        <div className="w-6/12">
          <CartList />
        </div>

        <div className="mt-8 w-5/12 rounded-2xl lg:mt-0 lg:p-8 lg:shadow-xl">
          <hr className="lg:hidden" />
          <h2 className="pt-8 text-xl font-bold lg:pt-0">Order Summary</h2>
          <div className="my-3 flex justify-between">
            <p>Shipping</p>
            <p>Calculated at checkout</p>
          </div>

          <div className="my-3 flex justify-between">
            <p>Sales tax</p>
            <p>Calculated at checkout</p>
          </div>

          <div className="flex justify-between pt-2 pb-6 text-xl font-bold">
            <p>Subtotal</p>
            <p>$415.00</p>
          </div>

          <button className="w-full rounded-full bg-blue-600 py-2 text-xs font-bold uppercase text-white hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CartPage;