import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "normalize.css";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";

let Layout = (props) => {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
