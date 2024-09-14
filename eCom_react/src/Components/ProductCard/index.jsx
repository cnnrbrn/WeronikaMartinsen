import { Link } from "react-router-dom";
import Product from "../../Pages/Product";

function ProductCard({ product }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
