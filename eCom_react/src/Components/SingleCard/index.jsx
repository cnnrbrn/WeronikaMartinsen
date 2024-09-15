function SingleCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md flex h-full w-100">
      <div className="h-42">
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
        <div className="border h-auto rounded-lg">
          {product.reviews &&
          Array.isArray(product.reviews) &&
          product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div key={review.id} className="p-4 border-b">
                <p className="text-gray-600 italic">{review.description}</p>
                <p className="text-yellow-500">Rating: {review.rating}/5</p>
                <p className="text-sm text-end mt-2">{review.username}</p>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
