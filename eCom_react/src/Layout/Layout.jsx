import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="h-screen flex flex-col p-0 m-0">
        <Header />
        <article className="h-screen">
          <p>
            Main page content here, add more if you want to see the footer push
            down.
          </p>
        </article>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
