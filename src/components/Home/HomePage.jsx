import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
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
      console.log(productsData);
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
        <Container>
          <Products title="NEW COLLECTION" products={products} />
        </Container>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
const Container = styled.div`
  @media (min-width: 1920px) {
    width: fit-content;
    margin: auto;
  }
`;
