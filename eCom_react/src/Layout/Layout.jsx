import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";
import ApiCall from "../Services/API/ApiCall";

function Layout() {
  return (
    <>
      <div className="h-screen w-full flex flex-col p-0 m-0">
        <Header />
        <main className="bg-rose-50 flex justify-center align-middle">
          <ApiCall />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
