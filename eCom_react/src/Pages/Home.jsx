import "../styles/index.css";
import Layout from "../Layout/Layout";
import ApiCall from "../Services/API/ApiCall";
import HeroSection from "../Components/HeroSection";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <ApiCall />
    </Layout>
  );
}

export default Home;
