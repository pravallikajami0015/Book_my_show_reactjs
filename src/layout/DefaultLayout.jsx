import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
      </>
    );
  };

export default DefaultLayout;
