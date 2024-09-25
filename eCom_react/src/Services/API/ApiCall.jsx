import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import ProductCard from "../../Components/ProductCard";

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
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 custom-max-width">
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
