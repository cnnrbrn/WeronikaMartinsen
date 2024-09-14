import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";

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
    <div className="grid-container">
      {loading && <Loading />}
      {error && <p>Error loading data...</p>}
      {Array.isArray(data) &&
        data.length > 0 &&
        data.map((post) => (
          <div
            className="bg-neutral-50 border-1 m-2 p-1 custom-card"
            key={post.id}
          >
            <div className="custom-size-image-box">
              <img src={post.image.url} alt={post.image.alt} />
            </div>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}
