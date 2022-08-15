import Link from "next/link";
import { AuthLayout } from "../../components/layouts/";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Tesla SSO - Register"
      pageDescription="Register your account"
    >
      <div className="container mx-auto  md:max-w-md md:px-8">
        <h1 className="text-3xl font-semibold">Create Account</h1>
        <form className="mt-4">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                First Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-100 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
              />

              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Last Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-100 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
              />

              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-100 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
              />

              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-100 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-100 focus:bg-white focus:outline-none"
                id="grid-password"
                type="password"
              />

              <p>Here goes an checkbox: </p>

              <button
                className="focus:shadow-outline my-2 w-full rounded-full bg-blue-500 py-2 px-4 text-sm font-bold uppercase text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Create Account
              </button>

              <span className="my-8 flex items-center justify-center gap-3 font-medium text-gray-500 before:h-[1px] before:w-1/3 before:bg-gray-300 after:h-[1px] after:w-1/3 after:bg-gray-300">
                OR
              </span>

              <Link href="/auth/login" passHref>
                <button
                  className="focus:shadow-outline w-full rounded-full py-2 px-4 text-sm uppercase outline outline-2 outline-black hover:bg-black hover:text-white"
                  type="button"
                >
                  Sing in
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
