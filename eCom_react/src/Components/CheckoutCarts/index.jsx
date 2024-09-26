import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../Stores/Cart";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div>
        <div className="flex justify-between gap-4 items-center border bg-white rounded-xl m-3 pr-8">
          {detail && detail.image ? (
            <Link
              to={`/Product/${productId}`}
              className="flex items-center gap-2"
            >
              <img
                src={detail.image.url}
                alt={detail.image.alt || "Product image"}
                className="w-36 h-36 object-cover rounded-xl rounded-r-none"
              />
              <h3 className="mr-8">
                {detail ? detail.title : "Loading title..."}
              </h3>
            </Link>
          ) : (
            <p>Loading image...</p>
          )}

          <p>
            {detail
              ? detail.discountedPrice.toFixed(2) * quantity
              : "Loading price..."}
          </p>

          <div className="ml-8 mr-8 w-20 flex justify-between gap-2">
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
