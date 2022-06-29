import React from "react";
import { Link } from "react-router-dom";

import Products from "../Products/Products";

const HomePage = () => {
  return (
    <>
      <Link to="/user/login">Login</Link>
      <Products />
    </>
  );
};

export default HomePage;
