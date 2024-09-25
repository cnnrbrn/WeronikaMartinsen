import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Stores/Cart";

function SingleCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCard = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: quantity,
        price: product.discountedPrice || product.price,
      })
    );
  };
  return (
    <div className="mb-2 grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 custom-max-width">
      <div className="h-96">
        <img
          className="rounded-lg h-full w-full object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      {/* Content */}
      <div className="flex-grow p-5">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4">
          <p className="mb-1 line-through dark:text-gray-400 text-xs text-gray-400">
            {product.price}$,-
          </p>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
            {product.discountedPrice}$,-
          </p>
        </div>
        <div className="h-auto">
          {product.reviews &&
          Array.isArray(product.reviews) &&
          product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border-red-200 border rounded-lg mt-8"
              >
                <p className="text-gray-600 italic">{review.description}</p>
                <div className="flex justify-between mt-2">
                  <p className="text-yellow-500">Rating: {review.rating}/5</p>
                  <p className="text-sm">{review.username}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
        <div className="mt-8 flex gap-2 justify-center items-center">
          <button
            onClick={handleMinusQuantity}
            className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center"
          >
            -
          </button>
          <span className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center">
            {quantity}
          </span>
          <button
            onClick={handlePlusQuantity}
            className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center"
          >
            +
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddToCard}
            className="mt-8 p-3 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
