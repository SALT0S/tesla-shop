import { ShopLayout } from "../../components/layouts";
const HistoryPage = () => {
  return (
    <ShopLayout title="Order history | Tesla" pageDescription="Order history">
      <h1>Orders history</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                Order
              </th>
            </tr>
          </thead>

          <tbody className="striped">
            <tr className="border-b bg-white">
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Apple MacBook Pro 17&quot;
              </th>
              <td className="py-4 px-6">Payed</td>
              <td className="py-4 px-6">View order</td>
            </tr>

            <tr className="border-b bg-white">
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Not payed</td>
              <td className="py-4 px-6">View order</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">Gray</td>
              <td className="py-4 px-6">View order</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ShopLayout>
  );
};

export default HistoryPage;
