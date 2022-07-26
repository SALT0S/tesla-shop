import { ShopLayout } from "../components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout title="Page Not Found" pageDescription="Page not found">
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
        <div className="flex text-8xl font-extralight">
          <h1>404</h1>
          <p className="hidden md:block">|</p>
        </div>

        <div className="md:ml-4">
          <p className="my-3 text-xl font-bold">Whoops! Sorry about that.</p>
          <p>
            Join Starman back at the homepage or visit our FAQ Page for help.
          </p>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Custom404;
