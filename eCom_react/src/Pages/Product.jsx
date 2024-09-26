import "../styles/index.css";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import SingleProductCall from "../Services/API/SingleProductCall";

function Product() {
  const { id } = useParams();
  console.log("ID in Product page: ", id);
  return (
    <Layout>
      <main>
        <SingleProductCall />
      </main>
    </Layout>
  );
}

export default Product;
