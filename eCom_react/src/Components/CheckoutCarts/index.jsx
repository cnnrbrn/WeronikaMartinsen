import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../Stores/Cart";
import { TrashIcon } from "@heroicons/react/24/solid";

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
  const removeItem = () => {
    dispatch(
      removeFromCart({
        productId: productId,
      })
    );
  };

  console.log(detail);
  // Safely check if detail and detail.image exist before rendering
  return (
    <>
      <div>
        {" "}
        <div className="flex justify-between gap-4 items-center p-2 border border-red-300 rounded-xl m-3">
          {detail && detail.image ? (
            <img
              src={detail.image.url}
              alt={detail.image.alt || "Product image"}
              className="w-12"
            />
          ) : (
            <p>Loading image...</p> // Fallback if image is not available yet
          )}
          <h3>{detail ? detail.title : "Loading title..."}</h3>
          <p>
            {detail ? detail.discountedPrice * quantity : "Loading price..."}
          </p>
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
          <TrashIcon onClick={removeItem} className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </>
  );
};
export default CheckoutCarts;
