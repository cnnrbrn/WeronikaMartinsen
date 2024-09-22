import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../Stores/Cart";

const CheckoutCarts = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  console.log(detail);
  // Safely check if detail and detail.image exist before rendering
  return (
    <div className="flex justify-between gap-4 items-center p-2 border border-red-300 rounded-xl m-3">
      <div className="flex justify-center items-center">
        <img
          src={detail.image.url}
          alt={detail.image.alt || "Product image"}
          className="w-12 rounded-xl"
        />

        <h3>{detail ? detail.title : "Loading title..."}</h3>
      </div>
      <p>{detail ? detail.discountedPrice * quantity : "Loading price..."}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CheckoutCarts;
