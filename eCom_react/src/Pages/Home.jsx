import { useState } from "react";
import Layout from "../Layout/Layout";
import HeroSection from "../Components/HeroSection";
import ApiCall from "../Services/API/ApiCall";

function Home() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  return (
    <Layout>
      {/* Pass search handler to HeroSection */}
      <HeroSection onSearch={handleSearch} />

      {/* Display products only once and filter them based on searchInput */}
      <ApiCall searchInput={searchInput} />
    </Layout>
  );
}

export default Home;
