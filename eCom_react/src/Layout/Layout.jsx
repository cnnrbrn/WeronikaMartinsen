import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col p-0 m-0">
        <Header />
        <main className="h-screen w-full bg-rose-50 flex justify-center"></main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
