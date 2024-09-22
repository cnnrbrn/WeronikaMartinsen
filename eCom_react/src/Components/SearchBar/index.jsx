import "../styles/index.css";

function SearchBar() {
  return (
    <div className="mb-3">
      <div className="relative mt-4 flex">
        <input
          type="search"
          className="bg-white w-96"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />

        <button
          className="relative z-[2] flex items-center rounded-r px-6 py-2.5 shadow-lg ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="button"
          id="button-addon1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
