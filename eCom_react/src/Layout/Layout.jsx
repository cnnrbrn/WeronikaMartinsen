import PropTypes from "prop-types";
import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col p-0 m-0">
      <Header />
      <div className="flex justify-center bg-rose-50">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
