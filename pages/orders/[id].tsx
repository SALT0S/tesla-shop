import Link from "next/link";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Order Summary #[12312312313] | Tesla"
      pageDescription="shopping cart"
    >
      <div className="md:container md:mx-auto md:max-w-xl md:px-8 lg:max-w-7xl">
        <h2 className="py-8 text-2xl font-semibold lg:text-3xl">
          Order: ABC1213123
        </h2>

        {/* <p className="rounded-full bg-red-500 py-2 text-center uppercase text-white">
          pending payment
        </p> */}

        <div className="w-full justify-between gap-20 lg:flex ">
          <hr className="lg:hidden" />

          <div className="pt-8 lg:w-6/12">
            <CartList />
          </div>

          <div className="lg:w-5/12 ">
            <div className="mt-8  rounded-2xl lg:mt-0 lg:p-8 lg:shadow-xl">
              <hr className="lg:hidden" />
              <h2 className="pt-8 text-xl font-bold lg:pt-0">Order Summary</h2>

              <div className="my-3 flex justify-between">
                <div>
                  <p className="font-bold">Billing address</p>
                  <p>Jose Sanchez Saltos</p>
                  <p>323 algun lugar</p>
                  <p>Stittsville, HYA 235</p>
                  <p>Canada</p>
                  <p>+1 2312312312</p>
                </div>
                <Link href="/checkout/address" passHref prefetch={false}>
                  <a className="underline">Edit address</a>
                </Link>
              </div>

              <div className="my-3 flex justify-between">
                <p className="font-bold">Products</p>

                <Link href="/cart" passHref prefetch={false}>
                  <a className="underline">Edit cart</a>
                </Link>
              </div>

              <OrderSummary />

              <div className="flex justify-between pt-2 pb-6 text-xl font-bold">
                <p>Total</p>
                <p>$435.00</p>
              </div>

              {/* TODO */}
              <p>PAGAR</p>

              <p className="rounded-full bg-green-500 py-2 text-center uppercase text-white">
                Payment received
              </p>
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default OrderPage;
