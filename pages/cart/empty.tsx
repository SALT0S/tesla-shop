import Link from "next/link";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { ShopLayout } from "../../components/layouts";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Empty cart"
      pageDescription="There is no item in the shopping cart"
    >
      <div className="flex flex-col items-center  justify-center text-center md:flex-row md:text-left">
        <div className="text-8xl font-extralight">
          <MdOutlineRemoveShoppingCart />
        </div>

        <div className="md:ml-4">
          <p className="mt-3 mb-5 text-xl font-bold">
            Whoops! Your cart is empty.
          </p>
          <Link href="/" passHref>
            <a className="rounded-full bg-blue-500 py-2 px-4 text-white transition-all hover:bg-blue-700">
              Continue shopping
            </a>
          </Link>
        </div>
      </div>
    </ShopLayout>
  );
};

export default EmptyPage;
