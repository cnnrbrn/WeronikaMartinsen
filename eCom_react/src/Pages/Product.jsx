import "../styles/index.css";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

function Product() {
  let params = useParams();
  console.log(params);
  return (
    <Layout>
      <h1>Products</h1>
    </Layout>
  );
}

export default Product;
