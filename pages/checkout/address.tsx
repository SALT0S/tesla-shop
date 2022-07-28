import { ShopLayout } from "../../components/layouts";

const AdressPage = () => {
  return (
    <ShopLayout title="Checkout" pageDescription="Confirm shipping address">
      <h1>Address</h1>

      <div>
        <label>First Name</label>
        <input type="text" />

        <label>Last Name</label>
        <input type="text" />

        <label>Identification card</label>
        <input type="text" />

        <label>Email</label>
        <input type="text" />

        <label>Phone</label>
        <input type="text" />

        <label>Address</label>
        <input type="text" />

        <label>Second Address (optional)</label>
        <input type="text" />

        <label>City</label>
        <input type="text" />

        <label>State</label>
        <input type="text" />

        <label>Zip</label>
        <input type="text" />

        <button>Next</button>
      </div>
    </ShopLayout>
  );
};

export default AdressPage;
