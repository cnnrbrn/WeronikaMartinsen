function SingleCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full justify-between hover:bg-transparent hover:shadow-xl cursor-pointer">
      <div className="h-32">
        <img
          className="rounded-t-lg h-full w-full object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

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
    </div>
  );
}

export default SingleCard;
