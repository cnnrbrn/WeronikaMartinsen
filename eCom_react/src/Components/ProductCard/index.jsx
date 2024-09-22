import { Link } from "react-router-dom";
// import AddToBag from "../Buttons/AddToBag";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Stores/Cart";

function ProductCard({ product }) {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-full justify-between hover:shadow-xl cursor-pointer">
      <Link to={`/Product/${product.id}`}>
        <div className="h-32">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src={product.image.url}
            alt={product.image.alt}
          />
        </div>
      </Link>
      {/* Content */}
      <div className="flex-grow p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>

        <p className="mb-1 line-through dark:text-gray-400 text-xs text-gray-400">
          {product.price},-
        </p>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
          {product.discountedPrice},-
        </p>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
