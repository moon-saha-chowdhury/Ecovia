import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
