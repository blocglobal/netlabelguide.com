import React from "react";
import cx from "classnames";
import "./Header.scss";

const Header = ({
  title = "The future home of The Netlabel Guide",
  hideTitle = false,
}) => {
  return (
    <header className={cx("Header", { hideTitle: hideTitle })}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
