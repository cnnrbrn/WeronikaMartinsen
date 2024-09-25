import SearchBar from "../SearchBar";
import ApiCall from "../../Services/API/ApiCall";
import { useState } from "react";

function HeroSection() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input);
  };
  return (
    <>
      <div className="custom-max-width container">
        <div className="flex justify-start items-start flex-col pl-8 pr-8">
          <div>
            <h1 className="text-7xl mt-8">Explore, shop</h1>
            <h2 className="text-5xl mb-8 mt-4">repeat again.</h2>
            <div className="mt-2">
              <SearchBar onSearch={handleSearch} />
              <ApiCall searchInput={searchInput} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
