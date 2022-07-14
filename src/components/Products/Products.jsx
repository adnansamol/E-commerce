import React from "react";
import "./style/Products.css";
// import { products } from "../../constants/dummy-data/data";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import LinkWrapper from "../UI/LinkWrapper";

const Products = ({ products, title }) => {
  const [priceFilter, setPriceFilter] = useState("");

  const priceFilterHandler = (event) => {
    setPriceFilter(event.target.value);
  };
  if (priceFilter === "ascending") {
    products.sort((p1, p2) => p1.price - p2.price);
  } else if (priceFilter === "descending") {
    products.sort((p1, p2) => p2.price - p1.price);
  }
  return (
    <>
      <div>
        <select name="filter" onChange={priceFilterHandler}>
          <option value="ascending">Low to High</option>
          <option value="descending">High to Low</option>
        </select>
      </div>
      <Container>
        <Title>{title}</Title>
        <ProductContainer>
          {products.map((product) => (
            <LinkWrapper>
              <Link to={`/product/${product._id}`} key={product._id}>
                <Product
                  key={product._id}
                  name={product.name}
                  price={product.price}
                  imageUrl={product.images[0].url}
                />
              </Link>
            </LinkWrapper>
          ))}
        </ProductContainer>
      </Container>
    </>
  );
};

export default Products;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  padding: 40px;
`;
const ProductContainer = styled.div`
  display: grid;
  width: fit-content;
  gap: 20px;
  grid-template-columns: auto auto auto auto;
`;
