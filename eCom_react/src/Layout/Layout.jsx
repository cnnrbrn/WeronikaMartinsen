import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col p-0 m-0">
        <Header />
        <article className="h-screen"></article>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
