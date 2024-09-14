import { useEffect, useState, useParams } from "react";

function ApiFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData("https://v2.api.noroff.dev/online-shop/${id}");
  }, [id]);
  if (isLoading || !data) {
    return <div>Loading posts</div>;
  }
  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <div className="flex flex-col gap-3 justify-center">
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.price}</div>
    </div>
  );
}

export default ApiFetch;
