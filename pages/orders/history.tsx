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
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
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
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="border-b bg-white">
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
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
              <td className="py-4 px-6">Phone</td>
              <td className="py-4 px-6">$799</td>
            </tr>
            <tr>
              <td className="py-4 px-6">1</td>
              <th
                scope="row"
                className="whitespace-nowrap py-4 px-6 font-medium text-gray-900"
              >
                Apple Watch 5
              </th>
              <td className="py-4 px-6">Red</td>
              <td className="py-4 px-6">Wearables</td>
              <td className="py-4 px-6">$999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </ShopLayout>
  );
};

export default HistoryPage;
