import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "../Components/SearchBar";

function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col p-0 m-0">
        <Header />
        <main className="h-screen w-full bg-rose-50 flex justify-center">
          <SearchBar />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
