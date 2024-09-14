import "../styles/index.css";
import Layout from "../Layout/Layout";
import ApiCall from "../Services/API/ApiCall";

function Home() {
  return (
    <Layout>
      <ApiCall />
    </Layout>
  );
}

export default Home;
