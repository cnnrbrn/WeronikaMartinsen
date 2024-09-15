import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import ErrorMessage from "../../Components/ErrorMessage";
import SingleCard from "../../Components/SingleCard";

export default function ApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(
        "https://v2.api.noroff.dev/online-shop/${id}"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
      setLoading(false);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
      setError(true);
    }
  };
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 custom-max-width">
      {loading && <Loading />}
      {error && <ErrorMessage />}

      <SingleCard key={data.id} product={data} />
    </div>
  );
}
