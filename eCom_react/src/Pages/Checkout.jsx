import "../styles/index.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCarts from "../Components/CheckoutCarts";
import { clearCart } from "../Stores/Cart"; // Import the clearCart action

const Checkout = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch(); // Initialize the dispatch hook

  // Function to clear the cart
  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the clearCart action
  };

  return (
    <Layout>
      <div className="grid grid-rows ">
        <h2>Shopping Cart</h2>
        <div className="flex flex-col gap-2 mt-4">
          {carts.map((item, key) => (
            <CheckoutCarts key={key} data={item} />
          ))}
        </div>
        <div className="flex justify-end">
          <span>Total Price:</span>
        </div>
        <div className="flex justify-between mb-8">
          <button
            onClick={handleClearCart}
            className="mt-8 p-3 border text-md gap-2 flex justify-center border-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
          >
            Clear Cart
          </button>
          <button className="mt-8 p-3 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            Checkout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
