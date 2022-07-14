import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllProducts } from "../../services/product-api";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import Loading from "../UI/Loading";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const retrieveProducts = async () => {
      const productsData = await getAllProducts();
      setIsLoading(false);
      setProducts(productsData);
    };
    retrieveProducts();
  }, []);

  return (
    <>
      <Navbar />
      <Carousel />
      {isLoading ? (
        <Loading />
      ) : (
        <Products title="NEW COLLECTION" products={products} />
      )}
      <Footer />
    </>
  );
};

export default HomePage;
