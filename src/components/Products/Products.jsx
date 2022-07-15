import Product from "./Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import LinkWrapper from "../UI/LinkWrapper";
import VerticalBar from "../UI/VerticalBar";

const Products = ({ products, title }) => {
  const [priceFilter, setPriceFilter] = useState("");

  const priceFilterHandler = (event) => {
    setPriceFilter(event.target.value);
  };

  switch (priceFilter) {
    case "ascending":
      products.sort((p1, p2) => p1.price - p2.price);
      break;
    case "descending":
      products.sort((p1, p2) => p2.price - p1.price);
      break;
    case "AtoZ":
      break;
    case "ZtoA":
      break;
    default:
      break;
  }
  return (
    <>
      <Title>{title}</Title>

      <hr />
      <SortContainer>
        <Select name="filter" onChange={priceFilterHandler}>
          <Option>Sort By</Option>
          <Option value="ascending">Price (low to high)</Option>
          <Option value="descending">Price (high to low)</Option>
        </Select>
      </SortContainer>
      <Container>
        <VerticalBar title="Filters">
          <Price>Price</Price>
        </VerticalBar>
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
`;
const ProductContainer = styled.div`
  display: grid;
  width: fit-content;
  gap: 20px;
  grid-template-columns: auto auto auto auto;

  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  text-align: left;
  padding: 40px;
`;

const Select = styled.select`
  border: 1px solid black;
  padding: 10px;
  font-size: 18px;
  outline: none;
`;
const Option = styled.option``;
const Price = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #7a7a7a;
`;
const SortContainer = styled.div`
  margin-left: auto;
  width: fit-content;
  padding: 24px;
`;
