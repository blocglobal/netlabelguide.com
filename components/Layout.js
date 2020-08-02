import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

const Layout = ({ title, hideTitle, className, children }) => {
  return (
    <div className={className}>
      <Header title={title} hideTitle={hideTitle} />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
