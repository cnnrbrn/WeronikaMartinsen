import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import { Link } from "react-router-dom";
import Product from "../../Pages/Product";

export default function ApiCall() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result.data);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="grid-container bg-rose-50">
      {loading && <Loading />}
      {error && <p>Error loading data...</p>}
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((post) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={post.id}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={post.image.url}
                alt={post.image.alt}
              />
            </a>
            <div className="p-5">
              <Link to="/Product/:id" element={<Product />}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
    </div>
  );
}
