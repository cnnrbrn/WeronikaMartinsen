import { useEffect, useState } from "react";

export default function ApiCall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://v2.api.noroff.dev/online-shop");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <div className="grid-container">
      {Array.isArray(data) && data.length > 0 ? ( // Ensure 'data' is an array and not empty
        data.map((post) => (
          <div className=" bg-neutral-50 border-4 m-2" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div>
              {post.image.url[0]}
              <p>{post.image.alt}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p> // Show loading message while data is being fetched
      )}
    </div>
  );
}
