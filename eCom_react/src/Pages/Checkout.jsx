import "../styles/index.css";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import CheckoutCarts from "../Components/CheckoutCarts";

const Checkout = () => {
  const carts = useSelector((store) => store.cart.items);
  // const statusTab = useSelector((store) => store.cart.statusTab);

  return (
    <Layout>
      <div className="grid grid-rows ">
        <h2>Shopping Cart</h2>
        <div className="flex flex-col gap-2 mt-4">
          {carts.map((item, key) => (
            <CheckoutCarts key={key} data={item} />
          ))}
        </div>
        <div className="grid grid-cols-2">
          <button>Checkout</button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
