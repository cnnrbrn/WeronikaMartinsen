import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <div className="mb-3 md:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-xl border border-solid border-gray-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-red-200 focus:text-gray-600 focus:shadow-[inset_0_0_0_1px_rgb(248,113,113)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-red-200"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
