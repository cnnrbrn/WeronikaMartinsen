import "../styles/index.css";
import Header from "../Layout/Header";
import { useParams } from "react-router-dom";

function SingleProduct() {
  let params = useParams();
  console.log(params);
  return (
    <>
      <Header />
      <div>Individual product page: {params.id}</div>
    </>
  );
}

export default SingleProduct;
