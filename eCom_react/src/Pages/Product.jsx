import "../styles/index.css";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

function Product() {
  let params = useParams();
  console.log(params);
  return (
    <Layout>
      <div>Individual Post ID: {params.id}</div>
    </Layout>
  );
}

export default Product;
