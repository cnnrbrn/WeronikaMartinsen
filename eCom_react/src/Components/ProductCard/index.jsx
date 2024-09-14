import { Link } from "react-router-dom";
import Product from "../../Pages/Product";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/Product/${product.id}`} element={<Product />}>
        <img
          className="rounded-t-lg"
          src={product.image.url}
          alt={product.image.alt}
        />
      </Link>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mb-1 line-through dark:text-gray-400 text-xs text-gray-400">
          {product.price},-
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
          {product.discountedPrice},-
        </p>
        <Link to={`/Product/${product.id}`} element={<Product />}>
          <button className="p-2  bg-red-300 rounded-lg">Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
