import { AuthLayout } from "../../components/layouts/";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" pageDescription="Login to your account">
      <div className="container mx-auto max-w-md px-8">
        <h1 className="text-3xl font-semibold">Sing In</h1>
        <form className="mt-4">
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-sm font-semibold tracking-wide text-gray-700"
                htmlFor="grid-email"
              >
                Email Address
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-email"
                type="email"
              />

              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded-full border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="password"
                placeholder="******************"
              />

              <button
                className="focus:shadow-outline w-full rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                type="button"
              >
                Sign In
              </button>

              <div className="flex items-center justify-between">
                <a
                  className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>

                <a
                  className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
