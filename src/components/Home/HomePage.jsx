import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
