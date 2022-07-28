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
            <CartList editable />
          </div>

          <div className="lg:w-5/12">
            <div className="mt-8  rounded-2xl lg:mt-0 lg:p-8 lg:shadow-xl">
              <hr className="lg:hidden" />
              <h2 className="pt-8 text-xl font-bold lg:pt-0">Order Summary</h2>

              <OrderSummary />

              <div className="flex justify-between pt-2 pb-6 text-xl font-bold">
                <p>Subtotal</p>
                <p>$435.00</p>
              </div>

              <button className="w-full rounded-full bg-blue-600 py-2 text-xs font-bold uppercase text-white hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CartPage;
