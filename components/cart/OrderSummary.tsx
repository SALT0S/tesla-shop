export const OrderSummary = ({}) => {
  return (
    <>
      <div className="my-3 flex justify-between">
        <p>No. Products</p>
        <p>3 items</p>
      </div>

      <div className="my-3 flex justify-between">
        <p>Shipping</p>
        <p>Calculated at checkout</p>
      </div>

      <div className="my-3 flex justify-between">
        <p>Sales tax</p>
        <p>Calculated at checkout</p>
      </div>
    </>
  );
};
